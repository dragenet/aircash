FROM node:16.13-alpine AS base
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

FROM base as prod-deps
WORKDIR /app
COPY ./aircash-frontend ./
RUN yarn install --prod --frozen-lockfile 

FROM prod-deps as prod
EXPOSE 3000
CMD ["yarn", "start"]

FROM base as dev-deps
WORKDIR /app
COPY ./aircash-frontend/package.json ./
RUN yarn install --frozen-lockfile

FROM dev-deps as dev
EXPOSE 3000
# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry.
# ENV NEXT_TELEMETRY_DISABLED 1
CMD ["yarn", "dev"]

