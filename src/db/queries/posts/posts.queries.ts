/** Types generated for queries found in "src/db/queries/posts/posts.sql" */
import { PreparedQuery } from '@pgtyped/query';

/** 'InsertPost' parameters type */
export interface IInsertPostParams {
  post: readonly ({
    userId: number,
    commentBody: string
  })[];
}

/** 'InsertPost' return type */
export type IInsertPostResult = void;

/** 'InsertPost' query type */
export interface IInsertPostQuery {
  params: IInsertPostParams;
  result: IInsertPostResult;
}

const insertPostIR: any = {"name":"InsertPost","params":[{"name":"post","codeRefs":{"defined":{"a":31,"b":34,"line":3,"col":9},"used":[{"a":113,"b":116,"line":6,"col":8}]},"transform":{"type":"pick_array_spread","keys":[{"name":"userId","required":true},{"name":"commentBody","required":true}]},"required":false}],"usedParamSet":{"post":true},"statement":{"body":"INSERT INTO posts (user_id, body)\nVALUES :post","loc":{"a":71,"b":116,"line":5,"col":0}}};

/**
 * Query generated from SQL:
 * ```
 * INSERT INTO posts (user_id, body)
 * VALUES :post
 * ```
 */
export const insertPost = new PreparedQuery<IInsertPostParams,IInsertPostResult>(insertPostIR);


/** 'GetAllPosts' parameters type */
export type IGetAllPostsParams = void;

/** 'GetAllPosts' return type */
export interface IGetAllPostsResult {
  body: string | null;
  created: Date;
  id: number;
  user_id: number | null;
}

/** 'GetAllPosts' query type */
export interface IGetAllPostsQuery {
  params: IGetAllPostsParams;
  result: IGetAllPostsResult;
}

const getAllPostsIR: any = {"name":"GetAllPosts","params":[],"usedParamSet":{},"statement":{"body":"SELECT * FROM posts","loc":{"a":149,"b":167,"line":11,"col":0}}};

/**
 * Query generated from SQL:
 * ```
 * SELECT * FROM posts
 * ```
 */
export const getAllPosts = new PreparedQuery<IGetAllPostsParams,IGetAllPostsResult>(getAllPostsIR);


/** 'FindPostById' parameters type */
export interface IFindPostByIdParams {
  id: number;
}

/** 'FindPostById' return type */
export interface IFindPostByIdResult {
  body: string | null;
  created: Date;
  id: number;
  user_id: number | null;
}

/** 'FindPostById' query type */
export interface IFindPostByIdQuery {
  params: IFindPostByIdParams;
  result: IFindPostByIdResult;
}

const findPostByIdIR: any = {"name":"FindPostById","params":[{"name":"id","required":true,"transform":{"type":"scalar"},"codeRefs":{"used":[{"a":232,"b":234,"line":16,"col":32}]}}],"usedParamSet":{"id":true},"statement":{"body":"SELECT * FROM posts WHERE id = :id!","loc":{"a":200,"b":234,"line":16,"col":0}}};

/**
 * Query generated from SQL:
 * ```
 * SELECT * FROM posts WHERE id = :id!
 * ```
 */
export const findPostById = new PreparedQuery<IFindPostByIdParams,IFindPostByIdResult>(findPostByIdIR);


/** 'FindPostByUserId' parameters type */
export interface IFindPostByUserIdParams {
  userId: number;
}

/** 'FindPostByUserId' return type */
export interface IFindPostByUserIdResult {
  body: string | null;
  created: Date;
  id: number;
  user_id: number | null;
}

/** 'FindPostByUserId' query type */
export interface IFindPostByUserIdQuery {
  params: IFindPostByUserIdParams;
  result: IFindPostByUserIdResult;
}

const findPostByUserIdIR: any = {"name":"FindPostByUserId","params":[{"name":"userId","required":true,"transform":{"type":"scalar"},"codeRefs":{"used":[{"a":308,"b":314,"line":21,"col":37}]}}],"usedParamSet":{"userId":true},"statement":{"body":"SELECT * FROM posts WHERE user_id = :userId!","loc":{"a":271,"b":314,"line":21,"col":0}}};

/**
 * Query generated from SQL:
 * ```
 * SELECT * FROM posts WHERE user_id = :userId!
 * ```
 */
export const findPostByUserId = new PreparedQuery<IFindPostByUserIdParams,IFindPostByUserIdResult>(findPostByUserIdIR);


/** 'FindPostByCreatedDate' parameters type */
export interface IFindPostByCreatedDateParams {
  created: Date;
}

/** 'FindPostByCreatedDate' return type */
export interface IFindPostByCreatedDateResult {
  body: string | null;
  created: Date;
  id: number;
  user_id: number | null;
}

/** 'FindPostByCreatedDate' query type */
export interface IFindPostByCreatedDateQuery {
  params: IFindPostByCreatedDateParams;
  result: IFindPostByCreatedDateResult;
}

const findPostByCreatedDateIR: any = {"name":"FindPostByCreatedDate","params":[{"name":"created","required":true,"transform":{"type":"scalar"},"codeRefs":{"used":[{"a":394,"b":401,"line":26,"col":37}]}}],"usedParamSet":{"created":true},"statement":{"body":"SELECT * FROM posts WHERE created = :created!","loc":{"a":357,"b":401,"line":26,"col":0}}};

/**
 * Query generated from SQL:
 * ```
 * SELECT * FROM posts WHERE created = :created!
 * ```
 */
export const findPostByCreatedDate = new PreparedQuery<IFindPostByCreatedDateParams,IFindPostByCreatedDateResult>(findPostByCreatedDateIR);


/** 'UpdatePost' parameters type */
export interface IUpdatePostParams {
  body: string;
  id: number;
}

/** 'UpdatePost' return type */
export type IUpdatePostResult = void;

/** 'UpdatePost' query type */
export interface IUpdatePostQuery {
  params: IUpdatePostParams;
  result: IUpdatePostResult;
}

const updatePostIR: any = {"name":"UpdatePost","params":[{"name":"body","required":true,"transform":{"type":"scalar"},"codeRefs":{"used":[{"a":457,"b":461,"line":31,"col":25}]}},{"name":"id","required":true,"transform":{"type":"scalar"},"codeRefs":{"used":[{"a":475,"b":477,"line":31,"col":43}]}}],"usedParamSet":{"body":true,"id":true},"statement":{"body":"UPDATE posts SET body = :body! WHERE id = :id!","loc":{"a":432,"b":477,"line":31,"col":0}}};

/**
 * Query generated from SQL:
 * ```
 * UPDATE posts SET body = :body! WHERE id = :id!
 * ```
 */
export const updatePost = new PreparedQuery<IUpdatePostParams,IUpdatePostResult>(updatePostIR);


/** 'DeletePost' parameters type */
export interface IDeletePostParams {
  id: number;
}

/** 'DeletePost' return type */
export type IDeletePostResult = void;

/** 'DeletePost' query type */
export interface IDeletePostQuery {
  params: IDeletePostParams;
  result: IDeletePostResult;
}

const deletePostIR: any = {"name":"DeletePost","params":[{"name":"id","required":true,"transform":{"type":"scalar"},"codeRefs":{"used":[{"a":538,"b":540,"line":36,"col":30}]}}],"usedParamSet":{"id":true},"statement":{"body":"DELETE FROM posts WHERE id = :id!","loc":{"a":508,"b":540,"line":36,"col":0}}};

/**
 * Query generated from SQL:
 * ```
 * DELETE FROM posts WHERE id = :id!
 * ```
 */
export const deletePost = new PreparedQuery<IDeletePostParams,IDeletePostResult>(deletePostIR);


