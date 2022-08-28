# simple-todos
Simple todo app is an application built for my DevOps Learning Group.

# Installing the App

## Prerequities

set the environment variables:

- MongoUrl
- JWT

## Building and Running the App

- npm install --only=prod
- npm run build
- npm start


## Endpoints


1. **Post** <baseUrl>:<port number>/api/users/signup  _payload:_ `json {name: string, email: string, password: string}`
1. **Post** <baseUrl>:<port number>/api/users/signout
1. **Post** <baseUrl>:<port number>/api/users/signin  _payload:_ `json {email: string, password: string}`
1. **Post** <baseUrl><port number>/api/todos  _payload:_ `json {item: string}`
1. **Put** <baseUrl>:port number/api/todos?todoId=value&status=value
1. **Delete** <baseUrl>/api/todos/:todoId
1. **Get** <baseUrl>:<port number>/api/todos/todoId
1. **Get** <baseUrl>:<port number>/api/todos

