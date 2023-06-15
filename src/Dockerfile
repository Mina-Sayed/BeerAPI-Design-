# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the project files to the working directory
COPY . .

# Expose the port on which the Node.js application will run
EXPOSE 3000

# Set environment variables for MongoDB connection
ENV MONGODB_URI mongodb://localhost:27017/beer-tap-dispenser

# Start the Node.js application
CMD [ "npm", "start" ]
