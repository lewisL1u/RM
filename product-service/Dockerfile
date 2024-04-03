# Use the official Node.js 20 as parent image
FROM node:20

# Set the working directory contents at /usr/src/product-service
WORKDIR /usr/src/product-service

# Copy over the app code from the local product-service folder to the container workdir at /user/src/product-service
COPY . ./

# Install app dependencies using npm install
RUN npm install

# Make port 3001 available to the world outside this container
EXPOSE 3001

# Run the app whent he container launches
CMD ["node", "index.js"]