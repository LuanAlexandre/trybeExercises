#Passo 1.2
docker container run -dp 4545:80 -v ~/Documents/Trybe/trybeExercises/exercises/Bloco_22/22.3/dia22-3-01/:/usr/local/apache2/htdocs/ httpd:2.4
#Passo 1.5
docker container ls -a
#Passo 1.6
docker inspect 8d0c
#Passo 1.7
docker container stop 8d0c
#Passo 1.8
docker container rm 8d0c
#Passo 1.10
docker image ls
#Passo 1.11
docker rmi -f ad17