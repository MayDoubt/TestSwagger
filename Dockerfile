FROM node:18.13.0

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

# Build
RUN npm run dev

# Expose the API Port
EXPOSE 3000

FROM node:19-alpine3.15

# run the app
# command to run when intantiate an image
CMD ["npm","dev"]