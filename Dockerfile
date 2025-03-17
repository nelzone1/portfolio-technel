# Use Node 18 Alpine (or another version if needed)
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Clean npm cache and install dependencies with retry logic
RUN npm cache clean --force && \
    npm install --fetch-retries=5 --fetch-retry-mintime=5000 --fetch-retry-maxtime=120000

# Copy the rest of the application code
COPY . .

# Check if react-router-dom is installed
RUN npm list react-router-dom

# Expose port (optional, depending on your app's needs)
EXPOSE 3000

# Run the app
CMD ["npm", "start"]
