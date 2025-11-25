# build stage

FROM node:20-alpine AS build
 
# set working directory

WORKDIR /app
 
# copy packages

COPY package*.json ./
 
# install dependencies

RUN npm install
 
# copy the rest of frontend

COPY . .
 
# build the production files

RUN npm run build
 
 
# ---------------------------

# server stage (Nginx)

# ---------------------------

FROM nginx:alpine
 
# copy build files to Nginx

COPY --from=build /app/dist /usr/share/nginx/html
 
# copy your custom nginx.conf (THIS IS THE IMPORTANT PART)

COPY nginx.conf /etc/nginx/conf.d/default.conf
 
# expose tells docker what port we are on

EXPOSE 80
 
# start Nginx

CMD ["nginx", "-g", "daemon off;"]

 

