# Use the official Node.js image
FROM node:18.9.1

# Set working directory
WORKDIR /app

# Copy only the package files first for better caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Build the React app
RUN npm run build

# Install a lightweight HTTP server for serving the built app
RUN npm install -g serve

# Create and switch to a non-root user for running the app
RUN useradd -m myuser && chown -R myuser:myuser /app
USER myuser

# Expose the port Serve will use
EXPOSE 3000

# Command to serve the built app
CMD ["serve", "-s", "build", "-l", "3000"]
