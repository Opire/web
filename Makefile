SERVICE=opire_web

up:
	@docker compose up -d

down:
	@docker compose down

install: up
	@docker compose exec $(SERVICE) npm install $(deps)
	@docker compose exec $(SERVICE) chown -R node:node .

.PHONY: build
build: up
	@docker compose exec $(SERVICE) npm run build
	@docker compose exec $(SERVICE) chown -R node:node .

dev: up
	@docker compose exec $(SERVICE) npm run dev
