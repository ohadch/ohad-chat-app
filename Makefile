NAMESPACE=ohad-chat-app

install:
	# Install client from client directory
	@echo "Installing client"
	cd client && yarn install

	# Install server from server directory
	@echo "Installing server"
	cd server && yarn install

up:
	docker-compose up -d
down:
	docker-compose down
up-k8s:
	# Update helm dependencies
	@echo "Updating helm dependencies"
	helm dependency update helm/ohad-chat-app

	# Install the chart
	@echo "Installing the chart"
	helm upgrade --install \
		ohad-chat-app \
		helm/ohad-chat-app \
		--create-namespace \
		-n $(NAMESPACE)
down-compose:
	docker-compose down
down-k8s:
	helm uninstall ohad-chat-app -n $(NAMESPACE)
local-registry-up:
	docker-compose -f docker-compose-registry.yml up -d
local-registry-down:
	docker-compose -f docker-compose-registry.yml down
