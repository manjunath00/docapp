# Docapp

Docapp is hello world to docker 

## Running this image

1. Build the image. Here -t lets you tag your image. 
```
docker . build -t username/docapp
```
2. With this command used to view the docker images. Show the list of docker
```
docker images
```

3. Run the image. Here p maps the public port to port inside the docker image where the node app is running. Here -d means run detached mode.
```
docker run -p 49160:8080 -d username/docapp
```

4. With these command can be used to view which docker containers are running.
```
docker ps
```

5. Stops the docker container with docker container id. The docker container id can be found by running command docker ps.
```
docker stop containerid
```
## Reference
[Link](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)


## License
[MIT](https://choosealicense.com/licenses/mit/)