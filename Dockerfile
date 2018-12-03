# Base container image
FROM node:10-alpine

# Copy app files into container
WORKDIR /go/src/app
COPY . .

# Install dependencies
RUN npm install

# Expose API port to the outside
ENV PORT 8080
EXPOSE 8080

# Build the app
CMD ["npm","start"]
