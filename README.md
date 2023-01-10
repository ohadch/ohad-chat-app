# Ohad's Chat App

A whatsapp-like chat app, built with node, vue, socket.io and mongodb.

![ezgif com-gif-maker (3)](https://user-images.githubusercontent.com/17769668/211489852-35270622-c1a3-4d8b-8b29-777a7983331c.gif)

## Quick Start

```bash
make up
```

## Setup dev environment

```shell
make install

# start the server
cd server && yarn nodemon

# start the client
cd client && yarn serve
```

## Deployment

### Local Kubernetes

```shell
make local-registry-up
docker-compose build
docker-compose push
make up-k8s
```

