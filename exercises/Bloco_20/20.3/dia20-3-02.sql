USE BeeMovies;
DELIMITER ##

CREATE TRIGGER hold_update
AFTER UPDATE ON `movies`
FOR EACH ROW
BEGIN
  INSERT INTO `movies` (`ticket_price_estimation`)
  VALUES (IF (NEW.`ticket_price` > OLD.`ticket_price`, 'Increasing', 'Decreasing'));
END ##

DELIMITER ;

--

USE BeeMovies;
DELIMITER ##

CREATE TRIGGER add_update_info
AFTER UPDATE ON `movies`
FOR EACH ROW
BEGIN
  INSERT INTO `movies_logs` (`movie_id`, `executed_action`, `log_date`)
  VALUES (`movie_id`, 'UPDATE', CURRENT_DATE());
END ##

DELIMITER ;
