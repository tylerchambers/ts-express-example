CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email TEXT NOT NULL,
  username TEXT NOT NULL,
  created DATE NOT NULL DEFAULT CURRENT_DATE
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users,
  body TEXT,
  created DATE NOT NULL DEFAULT CURRENT_DATE
);

INSERT INTO users (email, username, created)
VALUES ('jim@example.com', 'jim', '2021-01-01'),
       ('pam@example.com', 'pam', '2021-01-02'),
       ('dwight@example.com', 'dwight', '2021-01-03');

INSERT INTO posts (user_id, body, created)
VALUES (1, 'Stanley just drank OJ out of my mug and didnt seem to realize that it wasnt his hot coffee. So the question has to be asked, is there no limit to what he wont notice?', '2022-01-01'),
       (2, 'I hate the idea that someone out there hates me. I even hate thinking that al-Qaeda hates me. I think if they got to know me, they wouldnt hate me', '2022-01-01'),
       (3, 'Theres too many people on this earth. We need a new plague.', '2022-01-01'),
       (1, 'When I tell people I work at Dunder Mifflin, they think that we sell mufflers or muffins or mittens or…and frankly, all of those sound better than paper, so I let it slide.', '2022-01-02'),
       (2, 'Once every hour someone is involved in an internet scam. That man is Michael Scott.', '2022-01-02'),
       (3, 'I never thought Id say this, but I think I ate too much bone marrow.', '2022-01-02'),
       (1, 'I am a black belt in gift wrapping.', '2022-01-03'),
       (2, 'You can buy new stuff, but you cant buy a new party!', '2022-01-03'),
       (3, 'PowerPoints are the peacocks of the business world all show, no meat.', '2022-01-03');