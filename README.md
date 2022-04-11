# Issues with Docker for Mac and TestContainers

This repo demonstrates an issue with the latest version of Docker for Mac 
when using TestContainers while running inside a VSCode container setup.

`BUG FIXED` - https://github.com/testcontainers/testcontainers-node/issues/283

## To Reproduce
- Open the project in VS Code
- Open in container when prompted
- Run `npm install`
- Run `DEBUG=testcontainers* npm test`
