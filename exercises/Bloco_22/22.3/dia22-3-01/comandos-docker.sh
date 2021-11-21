#Passo 1.2
docker container run -dp 4545:80 -v ~/Documents/Trybe/trybeExercises/exercises/Bloco_22/22.3/dia22-3-01/:/usr/local/apache2/htdocs/ httpd:2.4
#Passo 1.5
docker container ls -a