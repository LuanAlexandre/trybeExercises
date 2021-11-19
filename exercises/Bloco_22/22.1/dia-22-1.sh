#Passo 3
docker pull debian:stable-slim
#Passo 4
docker container run -ti debian:stable-slim
#Passo 5
cat /etc/*-release
#Passo 6
exit
#Passo 7
docker container ls -a
#Passo 8
docker container start <CONTAINER ID>
docker container ls
#Passo 9
docker container attach <CONTAINER ID>
#Passo 10
cat /etc/debian_version
#Passo 11
exit
#Passo 12
docker container rm <CONTAINER ID>
#Passo 13
docker container run -ti --rm andrius/ascii-patrol
#Passo 14
CTRL+C