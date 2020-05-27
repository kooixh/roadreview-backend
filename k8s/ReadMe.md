# Deployment for NodeJs App on Kubernetes


## Local Development

### Allowing Connecting to Redis using

By default a local Redis only allow to be connected through localhost. 

Edit Redis conf to allow connection through local IP.
    
Here is a [link](https://www.digitalocean.com/community/questions/enable-remote-redis-connection) to how to do it.


### Configure your Kubernetes
    
Use minikube for local kubernetes engine

    $ minikube start
    $ eval $(minikube docker-env)
    
Configure your local kubernetes secrets

	$ make configure-local    
    
    
This sets up the following Redis configuration, make sure your Redis is set up like this

db id: **0**

password: **123456789**

port: **6379**

host: **{Your local IP address}**


### Building the app

	$ make build
    
### Deploying to local Kubernetes

	$ make install
	
### Running the application

	$ make run
	
This will run the application in the browser. Copy the url into postman for API testing
	
	
### Resetting the the environement

	$ make clean
	
This deletes all the pods and all the secrets
    
    
## Running on Google Kubernetes Engine

**TO BE ADDED**
 
