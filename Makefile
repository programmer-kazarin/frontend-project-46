install: deps-install
	npx simple-git-hooks

deps-install:
	npm ci --legacy-peer-deps

lint:
	npx eslint .

fix:
	npx eslint . --fix

test:
	NODE_OPTIONS=--experimental-vm-modules npx jest

test-coverage:
	npm test -- --coverage --coverageProvider=v8
