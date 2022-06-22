docker stop $(docker ps -qf name=singa-web)
docker rm $(docker ps -aqf name=singa-web)
docker images|grep singa-web |awk '{print $3}'|xargs docker rmi
docker build -t singa-web .
docker run --name singa-web-prod -d -p 3000:3000 singa-web