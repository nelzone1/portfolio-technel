# Use an official Node.js runtime as the base image
FROM node:18-alpine AS builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json first (for caching dependencies)
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the project (assuming it uses a frontend framework like React, Vue, or Angular)
RUN npm run build

# Use a lightweight web server to serve static files
FROM node:18-alpine

# Install `serve` globally
RUN npm install -g serve

# Set the working directory
WORKDIR /app

# Copy built files from the previous stage
COPY --from=builder /app/dist ./dist

# Expose the port on which the app runs
EXPOSE 3000

# Command to run the app
CMD ["serve", "-s", "dist", "-l", "3000"]
