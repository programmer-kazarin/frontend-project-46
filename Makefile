install: deps-install
	npx simple-git-hooks

deps-install:
	npm ci --legacy-peer-deps

lint:
	npx eslint .

test:
	NODE_OPTIONS=--experimental-vm-modules npx jest