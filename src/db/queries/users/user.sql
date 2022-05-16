/* @name FindUserById */
SELECT * FROM users WHERE id = :id;

/*
  @name InsertUser
  @param user -> (email!, username!)
*/
INSERT INTO users (email, username) VALUES :user RETURNING id;

/* 
    @name GetAllUsers
*/
SELECT * FROM users;

/* 
    @name FindUserByUsername
*/
SELECT * FROM users WHERE username = :username!;

/* 
    @name FindUserByEmail
*/
SELECT * FROM users WHERE email = :email!;

/* 
    @name FindUserBySignupDate
*/
SELECT * FROM users WHERE created = :created!;

/*
    @name UpdateUsername
*/
UPDATE users SET username = :username! WHERE id = :id!;

/*
    @name UpdateEmail
*/
UPDATE users SET email = :email! WHERE id = :id!;

/*
    @name DeleteUser
*/
DELETE FROM users WHERE id = :id!;

