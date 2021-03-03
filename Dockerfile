FROM harbor.uio.no/library/docker.io-node:12-alpine
LABEL no.uio.contact="bnt-web-wapp@usit.uio.no"

ENV HTTP_PROXY http://software-proxy.uio.no:3128/
ENV HTTPS_PROXY http://software-proxy.uio.no:3128/

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN addgroup -S user && adduser -S user -G user
RUN chown -R user.user /usr/src/app

COPY package.json /usr/src/app
COPY package-lock.json /usr/src/app

RUN npm ci

COPY . .

RUN npm run build
USER user

ENV HTTP_PROXY=
ENV HTTPS_PROXY=

EXPOSE 8080

ENV NODE_OPTIONS='--max_old_space_size=200'
CMD ["npm", "start"]
