FROM node:argon
RUN npm --user root --unsafe-perm true install npm -g
ADD ./package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /opt/app && cp -a /tmp/node_modules /opt/app/
WORKDIR /opt/app
ADD . /opt/app/

CMD ["npm", "run", "build"]