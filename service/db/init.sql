USE teamFeud;

CREATE TABLE IF NOT EXISTS games (
    id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id), 
    gameName VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS questions (
    id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id), 
    gameId INT NOT NULL,
    FOREIGN KEY (gameId) REFERENCES games(id),
    question VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS answers (
    id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id), 
    questionId INT NOT NULL,
    FOREIGN KEY (questionId) REFERENCES questions(id),
    answers VARCHAR(255) NOT NULL,
    points INT NOT NULL
);

CREATE TABLE IF NOT EXISTS teams (
    id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id), 
    teamName varchar(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS gameSessions (
    id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id), 
    gameId INT NOT NULL,
    FOREIGN KEY (gameId) REFERENCES games(id),
    team1Id INT NOT NULL,
    FOREIGN KEY (team1Id) REFERENCES teams(id),
    team2Id INT NOT NULL,
    FOREIGN KEY (team1Id) REFERENCES teams(id),
    team1Points int,
    team2Points int,
    currentRound int
);