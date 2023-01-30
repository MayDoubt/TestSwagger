FROM node:18-alpine

# Create directory
RUN mkdir -p /usr/src/testswagger/src

# Working Dir
WORKDIR /usr/src/index

# Copy Package Json Files
COPY package*.json ./

# Install dependencies
RUN npm i 

# Copy Source Files
COPY ./src/ ./src/

# Expose the API Port
EXPOSE 3000

# run the app
# command to run when intantiate an image
CMD ["npm","start"]