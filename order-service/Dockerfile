# Use the official Node.js 20 as parent image
FROM node:20

# Set the working directory contents at /usr/src/order-service
WORKDIR /usr/src/order-service

# Copy over the app code from the local order-service folder to the container workdir at /user/src/order-service
COPY . ./

# Install app dependencies using npm install
RUN npm install

# Make port 3001 available to the world outside this container
EXPOSE 3002

# Run the app whent he container launches
CMD ["node", "index.js"]