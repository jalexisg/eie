# Use Node.js LTS (Long Term Support)
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files first for better caching
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Expose Vite's default port
EXPOSE 5173

# Run Vite in development mode, exposing to network
CMD ["npm", "run", "dev", "--", "--host"]
