# Use the official Node.js image
FROM node:18.9.1

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Build the app
RUN npm run build

# Create and switch to non-root user
RUN useradd -m myuser && chown -R myuser:myuser /app
USER myuser

# Expose the port serve will use
EXPOSE 3000

# Install a lightweight HTTP server to serve the built app
RUN npm install -g serve

# Command to serve the build (production)
CMD ["serve", "-s", "build", "-l", "3000"]
