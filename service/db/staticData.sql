insert into teamFeud.games (id, gameName) values(1, "Game1");
insert into teamFeud.questions (id, gameId, question) values(1, 1, "Why did the chicken cross the road?");
insert into teamFeud.answers (id, questionId, answer, points) values(1, 1, "I don't know", 0);

select g.*, q.*, a.*
from teamFeud.games g
inner join teamFeud.questions q on q.gameId = g.id
inner join teamFeud.answers a on a.questionId = q.id

insert into teamFeud.teams (teamName) values("bob");
insert into teamFeud.teams (teamName) values("steve");

insert into teamFeud.gameSessions (gameId, team1Id, team2Id, team1Points, team2Points, currentRound) values(1,1,2,100,110,2);

select * from teamFeud.gameSessions;