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