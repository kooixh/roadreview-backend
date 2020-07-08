# Roadreview backend

This is the backend service for road review 


## Getting Started

### Prerequisite
- Node JS
- Redis
- MySQL

### Getting the project

Run these commands to get the project from GitHub

```
$ git clone https://github.com/kooixh/roadreview-backend.git
$ cd roadreview-backend
```

### Installing Dependencies 

Set up the required dependencies for the system

MySQL

```
$ brew install mysql
$ mysql.server start
```
Create a `root` user with the password `root12345`

Redis

```
$ brew install redis
$ redis-server
```

Run this command to install node dependencies 

```
$ npm install
```

- Redis on port 6379
- MySQL on port 3306

### Linting 

```
$ npm run lint
```

### Running the app

Use this command to run the app 

```
$ npm start
```
This will start the application on port 3000


## Deployment 

The deployment is based on Kubernetes.

Creating the configmap

```
$ kubectl apply -f k8s/configmap/development.yml
```

Deploying the app

```
$ kubectl apply -f k8s/deployment.yml
```
    
    
