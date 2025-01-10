# Use the official Node.js image
FROM node:18.9.1

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app source code
COPY . .

# Build the app (useful for production)
RUN npm run build

# Install a lightweight HTTP server to serve the built app
RUN npm install -g serve

# Use a non-root user for runtime
RUN useradd -m myuser && chown -R myuser:myuser /app
USER myuser

# Expose the port serve will use
EXPOSE 3000

# Command to serve the build (production)
CMD ["serve", "-s", "build", "-l", "3000"]
