USE teamFeud;

CREATE TABLE IF NOT EXISTS games (
    id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id), 
    gameName VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS questions (
    id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id), 
    FOREIGN KEY (gameId) REFERENCES games(id)
    question varchar(255) NOT NULL
);

-- CREATE TABLE IF NOT EXISTS answers (
--     PRIMARY KEY (id), 
--     FOREIGN KEY (questionId) REFERENCES questions(id),
--     answers varchar(255) NOT NULL,
--     points int NOT NULL
-- );

-- CREATE TABLE IF NOT EXISTS teams (
--     PRIMARY KEY (id), 
--     teamName varchar(255) NOT NULL
-- );

-- CREATE TABLE IF NOT EXISTS gameSessions (
--     PRIMARY KEY (id), 
--     FOREIGN KEY (gameId) REFERENCES game(id),
--     FOREIGN KEY (team1Id) REFERENCES team(id),
--     FOREIGN KEY (team1Id) REFERENCES team(id),
--     team1Points int,
--     team2Points int,
--     currentRound int
-- );