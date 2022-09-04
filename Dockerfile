FROM node:alpine as builder
WORKDIR /usr/app
COPY ./ ./
RUN npm install --only-prod && npm run build

FROM node:alpine
COPY --from=builder /usr/app/ /app
WORKDIR /app
USER node
CMD ["npm", "start"]