FROM harbor.uio.no/mirrors/docker.io/library/node:16-alpine as base
LABEL no.uio.contact="mobilapper-dev@usit.uio.no"

ENV HTTP_PROXY http://software-proxy.uio.no:3128/
ENV HTTPS_PROXY http://software-proxy.uio.no:3128/

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN apk update && apk add --upgrade apk-tools && apk upgrade --available

RUN addgroup -S user && adduser -S user -G user
RUN chown -R user.user /usr/src/app

COPY package.json /usr/src/app
COPY package-lock.json /usr/src/app

RUN npm ci

COPY . .

RUN npm run build

FROM build as audit
RUN npm audit

FROM build as deploy

USER user

ENV HTTP_PROXY=
ENV HTTPS_PROXY=

EXPOSE 8080

ENV NODE_OPTIONS='--max_old_space_size=200'
CMD ["npm", "start"]
