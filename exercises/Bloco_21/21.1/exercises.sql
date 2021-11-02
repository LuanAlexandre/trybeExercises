CREATE DATABASE IF NOT EXISTS animals;

USE animals;

CREATE TABLE manager(
  manager_id INT PRIMARY KEY AUTO_INCREMENT
);

CREATE TABLE animal(
  animal_id INT PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(30) NOT NULL,
  specie VARCHAR(30) NOT NULL,
  genre CHAR(1) NOT NULL,
  age INT NOT NULL,
  `location` VARCHAR(30) NOT NULL
);

CREATE TABLE caregiver(
  animal_id INT NOT NULL,
  manager_id INT NOT NULL,
  CONSTRAINT PRIMARY KEY (animal_id, manager_id),
  FOREIGN KEY (animal_id) REFERENCES animal (animal_id),
  FOREIGN KEY (manager_id) REFERENCES manager (manager_id)
);