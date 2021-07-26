FROM node:alpine

# working directory from now on
WORKDIR /app

# add the important stuff
ADD package*.json ./

# run a command
RUN npm install

# add files from host to container/app
ADD . .

# run the app
CMD ["node", "index.js"]