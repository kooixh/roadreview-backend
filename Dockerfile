FROM node:10.10

# Setup application
RUN mkdir -p /usr/src/app
ADD package.json /usr/src/app/package.json
WORKDIR /usr/src/app
RUN npm install --silent
ADD . /usr/src/app

EXPOSE 3000

CMD ["npm", "start"]
