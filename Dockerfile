# Step 1: Use official node image
FROM node:18-slim AS builder

# Step 2: Set working directory
WORKDIR /app

# Step 3: Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application
COPY . .

# Step 6: Build the app (assuming you're using vite)
RUN npm run build

# Step 7: Install `serve` globally to serve static files
RUN npm install -g serve

# Step 8: Expose the port your app will run on
EXPOSE 3000

# Step 9: Serve the build directory with `serve`
CMD ["serve", "-s", "dist", "-l", "3000"]
