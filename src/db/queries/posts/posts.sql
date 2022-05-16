/*
  @name InsertPost
  @param post -> ((userId!, commentBody!)...)
*/
INSERT INTO posts (user_id, body)
VALUES :post;

/* 
    @name GetAllPosts
*/
SELECT * FROM posts;

/*
    @name FindPostById
*/
SELECT * FROM posts WHERE id = :id!;

/*
    @name FindPostByUserId
*/
SELECT * FROM posts WHERE user_id = :userId!;

/* 
    @name FindPostByCreatedDate
*/
SELECT * FROM posts WHERE created = :created!;

/*
    @name UpdatePost
*/
UPDATE posts SET body = :body! WHERE id = :id!;

/*
    @name DeletePost
*/
DELETE FROM posts WHERE id = :id!;
