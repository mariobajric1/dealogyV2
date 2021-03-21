# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /dealogy_git

# add `/app/node_modules/.bin` to $PATH
ENV PATH /dealogy_git/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install 

# add app
COPY . ./

EXPOSE 3000

RUN npm run build

# start app
CMD ["npm", "start"]
