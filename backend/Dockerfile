FROM python:3.9-slim-bookworm

# Set work directory
WORKDIR /app

# Install system-level dependencies
RUN apt-get update && apt-get install -y \
    ffmpeg \
    libgl1 \
    libglib2.0-0 \
    libsm6 \
    libxext6 \
    libxrender-dev \
    && rm -rf /var/lib/apt/lists/*

# Copy requirements and install Python dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the backend code including wait-for-it.sh
COPY . .

# Ensure wait-for-it script is executable
RUN chmod +x /app/wait-for-it.sh

# Expose Django port
EXPOSE 8000

# Run server only after DB is ready
CMD ["./wait-for-it.sh", "db:5432", "--", "python", "manage.py", "runserver", "0.0.0.0:8000"]
