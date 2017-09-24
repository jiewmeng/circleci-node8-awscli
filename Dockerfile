FROM node:8-alpine

RUN apk --no-cache update && \
    apk --no-cache add python py-pip py-setuptools ca-certificates curl groff less && \
    pip --no-cache-dir install awscli && \
    rm -rf /var/cache/apk/*

RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh

COPY node_modules /root/utils/node_modules
COPY get-api-url.js /root/utils
