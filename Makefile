clean:
	@ echo "Deleting all resource from Kubernetes Cluster"
	@ kubectl delete all --all
	@ kubectl delete secret redis-pass
	@ kubectl delete secret redis-db-id
	@ kubectl delete secret redis-host

configure-local:
	$(eval HOST=$(shell ipconfig getifaddr en0))
	@ echo "Configure Kubernetes Secrets"
	@ kubectl create secret generic redis-pass --from-literal=username=root --from-literal=password=123456789
	@ kubectl create secret generic redis-db-id --from-literal=db_id=0
	@ kubectl create secret generic redis-host --from-literal=host=$(HOST) --from-literal=port=6379

build:
	@ echo "Building Docker Image"
	@ docker build -t nodejs-kubernetes:1.0 .

install:
	@ echo "Installing Kubernetes Application"
	@ kubectl apply -f deployment/application.yml

run:
	@ minikube service nodejs-service
