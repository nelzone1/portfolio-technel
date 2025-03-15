# Use an official Node.js runtime as the base image
FROM node:18-alpine AS builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json first (for caching dependencies)
COPY package.json package-lock.json ./

# Install dependencies with retry logic
RUN npm install || (echo "Retrying npm install..." && sleep 5 && npm install)

# Copy the rest of the application code
COPY . .

# Build the project (assuming it uses a frontend framework like React, Vue, or Angular)
RUN npm run build

# Use a lightweight web server to serve static files
FROM node:18-alpine

# Configure DNS to use Google's DNS for better resolution
RUN echo "nameserver 8.8.8.8" > /etc/resolv.conf

# Install Yarn globally (optional, depending on your preference)
RUN npm install -g yarn

# Install `serve` using Yarn globally (you can also use npm if you prefer)
RUN yarn global add serve || (echo "Retrying Yarn install..." && sleep 5 && yarn global add serve)

# Set the working directory
WORKDIR /app

# Copy built files from the previous stage
COPY --from=builder /app/dist ./dist

# Expose the port on which the app runs
EXPOSE 3000

# Command to run the app using `serve`
CMD ["serve", "-s", "dist", "-l", "3000"]
