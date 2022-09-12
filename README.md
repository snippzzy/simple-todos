# simple-todos
Simple todo app is an application built for my DevOps Learning Group. So We are an assembly Devops Engineers from diffierent location and differs experience level. Our goal is to learn how to Deploy Microservice in a K8s cluster. We decided to start with an API.

# Installing the App

## Prerequities

set the environment variables:

- MongoUrl
- JWT

## Building and Running the App

- npm install --only-prod
- npm run build
- npm start


## Endpoints


1. **Post**  baseUrl:port-number/api/users/signup  _payload:_ `json {name: string, email: string, password: string}`
1. **Post**  baseUrl:port-number/api/users/signout
1. **Post**  baseUrl:port-number/api/users/signin  _payload:_ `json {email: string, password: string}`
1. **Post**  baseUrl:port-number/api/todos  _payload:_ `json {item: string}`
1. **Put**   baseUrl:port-number/api/todos?todoId=value&status=value
1. **Delete**  baseUrl:port-number/api/todos/:todoId
1. **Get**   baseUrl:port-number/api/todos/todoId
1. **Get**   baseUrl:port-number/api/todos

## EXPOSE THE APP USING LOADBALANCER SERVICE

- First create jwt-secrete

```
kubectl create secret generic jwt-secret --from-literal=JWT=value
```
- Apply the K8s manifest file

```
kubectl apply -f infra/
```
- Get the external Ip of the loadbalancer

```
kubectl get service 
```
- Test the Api using postman

  Replace the baseUrl and the port-number in the examlples of the Endpoints given above with the external Ip of the loadbalancer and the external port of the             loadbalancer respectively.



