# Use the official image as a parent image
FROM node:18.9.1

# Set the working directory
WORKDIR /app

# Copy the file from your host to your current location
COPY package*.json .

# Install dependencies
RUN npm install

# Fix permissions to avoid permission issues (optional but can be helpful)
RUN chmod -R 755 /app

# Inform Docker that the container is listening on the specified port at runtime
EXPOSE 3000

# Copy the rest of your app's source code from your host to your image filesystem
COPY . .

# Run the specified command within the container
CMD ["npm", "start"]
