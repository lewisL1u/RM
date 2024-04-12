# Use the official Node.js 20 as parent image
FROM node:20

# Set the working directory contents at /usr/src/dell-scrawler
WORKDIR /usr/src/dell-scrawler

# Copy over the app code from the local dell-scrawler folder to the container workdir at /user/src/dell-scrawler
COPY . ./

# Install app dependencies using npm install
RUN npm install

# Make port 3003 available to the world outside this container
EXPOSE 3003

# Run the app whent he container launches
CMD ["node", "src/index.js"]