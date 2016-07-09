FROM node:5.11.1
MAINTAINER WIZE  <analytics-support@wizni.com>
LABEL Description="Wizni docker for wizeworks-client" Vendor="Wizni Organization" Version="1.0"
LABEL GITSHA="BUILD_COMMIT_ID"
LABEL BUILD_NUMBER="CI_BUILD_NUMBER"
LABEL BRANCH="BRANCH_NAME"
LABEL GITLOG="BUILD_GIT_LOG"

RUN mkdir -p /usr/src/app /var/www/html/
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install typings webpack-dev-server -g && \
    npm install http-server -g && \
    npm install && \
    sed -i "s#'http://.*';#'http://wizeserver:2080';#g" src/app/config/config.ts && \
    find /usr/src/app/src/app/project-api/interfaces /usr/src/app/src/app/project-data/interfaces /usr/src/app/src/app/project-middleware/interfaces  -depth -exec rename 'y/[A-Z]/[a-z]/' {} ";" && \
    npm run build:prod && \
    mv dist /var/www/html && \
    rm -rf /usr/src/app

WORKDIR /var/www/html

EXPOSE 80
CMD ["http-server", "dist", "--cors", "-p", "80"]
