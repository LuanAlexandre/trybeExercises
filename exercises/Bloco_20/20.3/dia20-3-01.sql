USE BeeMovies;
DELIMITER ##

CREATE TRIGGER add_year
BEFORE INSERT ON `movies`
FOR EACH ROW
BEGIN
  SET NEW.`release_year` = YEAR(CURRENT_DATE());
END ##

DELIMITER ;

USE BeeMovies;
DELIMITER ##

CREATE TRIGGER add_info
AFTER INSERT ON `movies`
FOR EACH ROW
BEGIN
  INSERT INTO `movies_logs` (`movie_id`, `executed_action`, `log_date`)
  VALUES (NEW.`movie_id`, 'INSERT', CURRENT_DATE());
END ##

DELIMITER ;
