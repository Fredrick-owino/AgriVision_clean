FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy dependency files and install
COPY package.json package-lock.json ./
RUN npm install

# Copy app files
COPY . .

# Expose frontend dev port
EXPOSE 5173

# Start the dev server (hot reload)
CMD ["npm", "run", "dev", "--", "--host"]
