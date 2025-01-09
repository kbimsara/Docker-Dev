# Use the official image as a parent image
FROM node:18.9.1

# Set the working directory
WORKDIR /app

# Copy package files
COPY package*.json .

# Install dependencies
RUN npm install

Run sudo chmod +x node_modules/.bin/react-scripts

# Expose the port
EXPOSE 3000

# Copy the rest of the app
COPY . .

# Run the app
CMD ["npm", "start"]
