# Use the official image as a parent image
FROM node:18.9.1

# Set the working directory
WORKDIR /app

# Copy package files
COPY package*.json .

# Install dependencies
RUN npm install react-scripts --save

# Create a user (optional, if you need a non-root user)
RUN useradd -m myuser

# Ensure the permissions are set by using root user temporarily
USER root
RUN chmod -R 755 /app

# Switch back to non-root user (if desired)
USER myuser

# Expose the port
EXPOSE 3000

# Copy the rest of the app
COPY . .

# Run the app
CMD ["npm", "start"]
