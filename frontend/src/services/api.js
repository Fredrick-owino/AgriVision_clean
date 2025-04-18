const API_BASE = "http://localhost:8000/api";

export async function predictDisease(formData) {
  const response = await fetch(`${API_BASE}/predict/disease/`, {
    method: "POST",
    body: formData,
  });
  if (!response.ok) {
    throw new Error("Prediction failed");
  }
  return response.json();
}
