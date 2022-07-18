CREATE TABLE IF NOT EXISTS `test`.`projects` (
  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name varchar(255) NULL,
  start_date DATE NULL,
  company varchar(255) NULL,
  offer varchar(255) NULL,
  status varchar(255) NULL,
  hours int(11) NULL,  
  ENGINE=InnoDB DEFAULT CHARSET=utf8;