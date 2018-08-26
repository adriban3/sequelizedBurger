/*CREATE DATABASE IF NOT EXISTS wet6aet34n63s2nw;*/
USE wet6aet34n63s2nw;

CREATE TABLE IF NOT EXISTS burgers (
	id int AUTO_INCREMENT NOT NULL PRIMARY KEY,
    burger_name varchar(200) NOT NULL,
    devoured boolean DEFAULT false
);
    
    