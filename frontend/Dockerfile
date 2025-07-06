FROM node:20-slim

WORKDIR /app

# Optional system dependencies for build tools
RUN apt-get update && apt-get install -y \
    git python3 make g++ \
    && rm -rf /var/lib/apt/lists/*

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy app source
COPY . .

# Expose dev server port
EXPOSE 5173

ARG NODE_ENV=development
ENV NODE_ENV=$NODE_ENV

CMD ["sh", "-c", "if [ \"$NODE_ENV\" = 'development' ]; then npm run dev -- --host; else npm run build && npm run preview -- --host; fi"]
