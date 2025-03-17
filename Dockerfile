# Use an official Node runtime as a parent image
FROM node:18.0.0

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json first to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Check if react-router-dom is installed (or run your build or start script)
RUN npm list react-router-dom

# Expose the port the app runs on
EXPOSE 3000

# Command to run the app
CMD ["npm", "start"]
