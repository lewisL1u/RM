# Use the official Node.js 20 as parent image
FROM node:20

# Set the working directory contents at /usr/src/api
WORKDIR /usr/src/api

# Copy over the app code from the local api folder to the container workdir at /user/src/api
COPY . ./

# Install app dependencies using npm install
RUN npm install

# Make port 3005 available to the world outside this container
EXPOSE 3005

# Run the app whent he container launches
CMD ["node", "src/routes/index.js"]