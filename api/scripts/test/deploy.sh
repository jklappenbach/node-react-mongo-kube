#! /bin/bash

kubectl create -f ./api-dev-deploy.yml
kubectl create -f ./api-dev-service.yml

