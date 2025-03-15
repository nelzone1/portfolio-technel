# Use a lightweight web server to serve static files
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy built files from the previous stage
COPY --from=builder /app/dist ./dist

# Install `serve` globally
RUN npm install -g serve

# Expose the port on which the app runs
EXPOSE 3000

# Command to run the app using the globally installed `serve`
CMD ["serve", "-s", "dist", "-l", "3000"]
