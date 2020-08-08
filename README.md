To build the docker image, run:

### docker build -t <your username>/node-web-app .

Then run the image:

### docker run -p 80:8080 -d <your username>/node-web-app

In the example above, Docker mapped the 8080 port inside of the container to the port 80 on your machine.

If you need to use a different port remember to change the port in src/constants/API.ts on the frontend.

## Other Available Scripts

You can use to following scripts using yarn or equivalent npm command

### `yarn start`

Runs the node app on port 8080 in development mode

### `yarn build`

Builds a production version the app

### `yarn test`

Runs unit tests using jest

### `yarn test:watch`

Runs unit tests using jest in watch mode
