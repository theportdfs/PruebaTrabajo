FROM node:18.16.0
WORKDIR /app
COPY ./package.json/ ./ /app/
RUN npm install --force && npm install
COPY . .
RUN npm run build
EXPOSE 5173
CMD ["npm", "run", "preview"]
