import os
import cv2
import uuid
from pathlib import Path
from ultralytics import YOLO

# Load YOLO model from best.pt
MODEL_PATH = Path(__file__).resolve().parent / 'best.pt'
model = YOLO(str(MODEL_PATH))

# Create output directory for results
OUTPUT_DIR = Path(__file__).resolve().parent.parent.parent / 'media/processed'
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

def detect_apples_from_image(image_path):
    img = cv2.imread(image_path)
    results = model(img)[0]

    count = len(results.boxes)

    # Annotate total count
    cv2.putText(img, f"Total Apples: {count}", (10, 30),
                cv2.FONT_HERSHEY_SIMPLEX, 1, (255, 0, 0), 3)

    for box in results.boxes:
        x1, y1, x2, y2 = map(int, box.xyxy[0])
        conf = float(box.conf[0])
        label = f"Apple {conf:.2f}"
        cv2.rectangle(img, (x1, y1), (x2, y2), (255, 0, 0), 2)
        cv2.putText(img, label, (x1, y1 - 10),
                    cv2.FONT_HERSHEY_SIMPLEX, 0.5, (255, 0, 0), 2)

    filename = f"apple_{uuid.uuid4().hex}.jpg"
    output_path = OUTPUT_DIR / filename
    cv2.imwrite(str(output_path), img)

    return {
        "count": count,
        "type": "image",
        "output_path": str(output_path)
    }

def detect_apples_from_video(video_path):
    cap = cv2.VideoCapture(video_path)

    if not cap.isOpened():
        raise IOError("Could not open video file.")

    fourcc = cv2.VideoWriter_fourcc(*'mp4v')
    fps = cap.get(cv2.CAP_PROP_FPS)
    width  = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
    height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
    out_path = OUTPUT_DIR / f"apple_{uuid.uuid4().hex}.mp4"
    out = cv2.VideoWriter(str(out_path), fourcc, fps, (width, height))

    total_count = 0
    frame_count = 0

    while True:
        ret, frame = cap.read()
        if not ret:
            break

        results = model(frame)[0]
        count_in_frame = len(results.boxes)
        total_count += count_in_frame
        frame_count += 1

        # Add frame-level count
        cv2.putText(frame, f"Apples in Frame: {count_in_frame}", (10, 30),
                    cv2.FONT_HERSHEY_SIMPLEX, 1, (255, 0, 0), 3)

        for box in results.boxes:
            x1, y1, x2, y2 = map(int, box.xyxy[0])
            conf = float(box.conf[0])
            label = f"Apple {conf:.2f}"
            cv2.rectangle(frame, (x1, y1), (x2, y2), (255, 0, 0), 2)
            cv2.putText(frame, label, (x1, y1 - 10),
                        cv2.FONT_HERSHEY_SIMPLEX, 0.5, (255, 0, 0), 2)

        out.write(frame)

    cap.release()
    out.release()

    return {
        "count": total_count,
        "frames": frame_count,
        "type": "video",
        "output_path": str(out_path)
    }

# Unified handler
def run_yolo_inference(file_path):
    ext = Path(file_path).suffix.lower()
    if ext in [".jpg", ".jpeg", ".png", ".bmp"]:
        return detect_apples_from_image(file_path)
    elif ext in [".mp4", ".avi", ".mov", ".mkv"]:
        return detect_apples_from_video(file_path)
    else:
        raise ValueError("Unsupported file format for YOLO inference.")
