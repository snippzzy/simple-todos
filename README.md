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


1. **Post** <baseUrl>/api/users/signup _payload:_ `json {name: string, email: string, password: string}`
1. **Post** <baseUrl>/api/users/signout
1. **Post** <baseUrl>/api/users/sigin _payload:_ `json {email: string, password: string}`
1. **Post** <baseUrl>/api/todos _payload:_ `json {item: string}`
1. **Put** <baseUrl>/api/posts/:postId _payload:_ `json {topic: string, body: string}`
1. **Delete** <baseUrl>/api/posts/:postId
1. **Post** <baseUrl>/api/comments/:postId _payload:_ `json {content: string}`
1. **Put** <baseUrl>/api/comments/:commentId _payload:_ `json {content: string}`
1. **Delete** <baseUrl>/api/comments/:commentId
1. **Get** <baseUrl>/api/blogs/postId
1. **Get** <baseUrl>/api/blogs

