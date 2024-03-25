SERVICE := "opire_back"

default:
	@just --list

up:
	@docker compose up -d

down:
	@docker compose down

install: up
	@docker compose exec {{SERVICE}} npm install
	@docker compose exec {{SERVICE}} chown -R node:node .

add deps: up
	@docker compose exec {{SERVICE}} npm install '{{deps}}'
	@docker compose exec {{SERVICE}} chown -R node:node .

build: up
	@docker compose exec {{SERVICE}} npm run build
	@docker compose exec {{SERVICE}} chown -R node:node .

dev: up
	@docker compose exec {{SERVICE}} npm run dev
