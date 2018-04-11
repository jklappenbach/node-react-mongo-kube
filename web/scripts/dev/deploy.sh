#! /bin/bash

kubectl create -f ./web-dev-deploy.yml
kubectl create -f ./web-dev-service.yml

