FROM node:22
 
WORKDIR /src
 
COPY package.json package.json
COPY package-lock.json package-lock.json
COPY tsconfig.json tsconfig.json
COPY prisma ./prisma /prisma
 
RUN npm install
 
COPY . .
 
CMD [ "node", "index.ts" ]