## create project

```
Create empty package.json file
Create index.js for lambda function
Create test/test.js file for lambda function tests

Run command: node-lambda setup
Fill in aws credentials into .env file
```

## start project

```
Install global packages

npm install -g node-lambda
npm install -g mocha
```

## execute lambda function

```
node-lambda run
```

## run mocha tests

```
mocha
```

## git hook pre-commit to run mocha test before commit

```
num=`mocha -R json | grep failures -m 1 | awk '{ print $2 }'`

if [ $num != '0,' ]; then
  echo "Tests failed"
  exit 1
fi
```

## gitIgnore

```
node_modules
.env
event.json
.DS_Store
.idea
*.log
```