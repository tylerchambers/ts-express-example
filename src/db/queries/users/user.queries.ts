/** Types generated for queries found in "src/db/queries/users/user.sql" */
import { PreparedQuery } from '@pgtyped/query';

/** 'FindUserById' parameters type */
export interface IFindUserByIdParams {
  id: number | null | void;
}

/** 'FindUserById' return type */
export interface IFindUserByIdResult {
  created: Date;
  email: string;
  id: number;
  username: string;
}

/** 'FindUserById' query type */
export interface IFindUserByIdQuery {
  params: IFindUserByIdParams;
  result: IFindUserByIdResult;
}

const findUserByIdIR: any = {"name":"FindUserById","params":[{"name":"id","required":false,"transform":{"type":"scalar"},"codeRefs":{"used":[{"a":57,"b":58,"line":2,"col":32}]}}],"usedParamSet":{"id":true},"statement":{"body":"SELECT * FROM users WHERE id = :id","loc":{"a":25,"b":58,"line":2,"col":0}}};

/**
 * Query generated from SQL:
 * ```
 * SELECT * FROM users WHERE id = :id
 * ```
 */
export const findUserById = new PreparedQuery<IFindUserByIdParams,IFindUserByIdResult>(findUserByIdIR);


/** 'InsertUser' parameters type */
export interface IInsertUserParams {
  user: {
    email: string,
    username: string
  };
}

/** 'InsertUser' return type */
export interface IInsertUserResult {
  id: number;
}

/** 'InsertUser' query type */
export interface IInsertUserQuery {
  params: IInsertUserParams;
  result: IInsertUserResult;
}

const insertUserIR: any = {"name":"InsertUser","params":[{"name":"user","codeRefs":{"defined":{"a":93,"b":96,"line":6,"col":9},"used":[{"a":168,"b":171,"line":8,"col":44}]},"transform":{"type":"pick_tuple","keys":[{"name":"email","required":true},{"name":"username","required":true}]},"required":false}],"usedParamSet":{"user":true},"statement":{"body":"INSERT INTO users (email, username) VALUES :user RETURNING id","loc":{"a":124,"b":184,"line":8,"col":0}}};

/**
 * Query generated from SQL:
 * ```
 * INSERT INTO users (email, username) VALUES :user RETURNING id
 * ```
 */
export const insertUser = new PreparedQuery<IInsertUserParams,IInsertUserResult>(insertUserIR);


/** 'GetAllUsers' parameters type */
export type IGetAllUsersParams = void;

/** 'GetAllUsers' return type */
export interface IGetAllUsersResult {
  created: Date;
  email: string;
  id: number;
  username: string;
}

/** 'GetAllUsers' query type */
export interface IGetAllUsersQuery {
  params: IGetAllUsersParams;
  result: IGetAllUsersResult;
}

const getAllUsersIR: any = {"name":"GetAllUsers","params":[],"usedParamSet":{},"statement":{"body":"SELECT * FROM users","loc":{"a":217,"b":235,"line":13,"col":0}}};

/**
 * Query generated from SQL:
 * ```
 * SELECT * FROM users
 * ```
 */
export const getAllUsers = new PreparedQuery<IGetAllUsersParams,IGetAllUsersResult>(getAllUsersIR);


/** 'FindUserByUsername' parameters type */
export interface IFindUserByUsernameParams {
  username: string;
}

/** 'FindUserByUsername' return type */
export interface IFindUserByUsernameResult {
  created: Date;
  email: string;
  id: number;
  username: string;
}

/** 'FindUserByUsername' query type */
export interface IFindUserByUsernameQuery {
  params: IFindUserByUsernameParams;
  result: IFindUserByUsernameResult;
}

const findUserByUsernameIR: any = {"name":"FindUserByUsername","params":[{"name":"username","required":true,"transform":{"type":"scalar"},"codeRefs":{"used":[{"a":313,"b":321,"line":18,"col":38}]}}],"usedParamSet":{"username":true},"statement":{"body":"SELECT * FROM users WHERE username = :username!","loc":{"a":275,"b":321,"line":18,"col":0}}};

/**
 * Query generated from SQL:
 * ```
 * SELECT * FROM users WHERE username = :username!
 * ```
 */
export const findUserByUsername = new PreparedQuery<IFindUserByUsernameParams,IFindUserByUsernameResult>(findUserByUsernameIR);


/** 'FindUserByEmail' parameters type */
export interface IFindUserByEmailParams {
  email: string;
}

/** 'FindUserByEmail' return type */
export interface IFindUserByEmailResult {
  created: Date;
  email: string;
  id: number;
  username: string;
}

/** 'FindUserByEmail' query type */
export interface IFindUserByEmailQuery {
  params: IFindUserByEmailParams;
  result: IFindUserByEmailResult;
}

const findUserByEmailIR: any = {"name":"FindUserByEmail","params":[{"name":"email","required":true,"transform":{"type":"scalar"},"codeRefs":{"used":[{"a":393,"b":398,"line":23,"col":35}]}}],"usedParamSet":{"email":true},"statement":{"body":"SELECT * FROM users WHERE email = :email!","loc":{"a":358,"b":398,"line":23,"col":0}}};

/**
 * Query generated from SQL:
 * ```
 * SELECT * FROM users WHERE email = :email!
 * ```
 */
export const findUserByEmail = new PreparedQuery<IFindUserByEmailParams,IFindUserByEmailResult>(findUserByEmailIR);


/** 'FindUserBySignupDate' parameters type */
export interface IFindUserBySignupDateParams {
  created: Date;
}

/** 'FindUserBySignupDate' return type */
export interface IFindUserBySignupDateResult {
  created: Date;
  email: string;
  id: number;
  username: string;
}

/** 'FindUserBySignupDate' query type */
export interface IFindUserBySignupDateQuery {
  params: IFindUserBySignupDateParams;
  result: IFindUserBySignupDateResult;
}

const findUserBySignupDateIR: any = {"name":"FindUserBySignupDate","params":[{"name":"created","required":true,"transform":{"type":"scalar"},"codeRefs":{"used":[{"a":477,"b":484,"line":28,"col":37}]}}],"usedParamSet":{"created":true},"statement":{"body":"SELECT * FROM users WHERE created = :created!","loc":{"a":440,"b":484,"line":28,"col":0}}};

/**
 * Query generated from SQL:
 * ```
 * SELECT * FROM users WHERE created = :created!
 * ```
 */
export const findUserBySignupDate = new PreparedQuery<IFindUserBySignupDateParams,IFindUserBySignupDateResult>(findUserBySignupDateIR);


/** 'UpdateUsername' parameters type */
export interface IUpdateUsernameParams {
  id: number;
  username: string;
}

/** 'UpdateUsername' return type */
export type IUpdateUsernameResult = void;

/** 'UpdateUsername' query type */
export interface IUpdateUsernameQuery {
  params: IUpdateUsernameParams;
  result: IUpdateUsernameResult;
}

const updateUsernameIR: any = {"name":"UpdateUsername","params":[{"name":"username","required":true,"transform":{"type":"scalar"},"codeRefs":{"used":[{"a":548,"b":556,"line":33,"col":29}]}},{"name":"id","required":true,"transform":{"type":"scalar"},"codeRefs":{"used":[{"a":570,"b":572,"line":33,"col":51}]}}],"usedParamSet":{"username":true,"id":true},"statement":{"body":"UPDATE users SET username = :username! WHERE id = :id!","loc":{"a":519,"b":572,"line":33,"col":0}}};

/**
 * Query generated from SQL:
 * ```
 * UPDATE users SET username = :username! WHERE id = :id!
 * ```
 */
export const updateUsername = new PreparedQuery<IUpdateUsernameParams,IUpdateUsernameResult>(updateUsernameIR);


/** 'UpdateEmail' parameters type */
export interface IUpdateEmailParams {
  email: string;
  id: number;
}

/** 'UpdateEmail' return type */
export type IUpdateEmailResult = void;

/** 'UpdateEmail' query type */
export interface IUpdateEmailQuery {
  params: IUpdateEmailParams;
  result: IUpdateEmailResult;
}

const updateEmailIR: any = {"name":"UpdateEmail","params":[{"name":"email","required":true,"transform":{"type":"scalar"},"codeRefs":{"used":[{"a":630,"b":635,"line":38,"col":26}]}},{"name":"id","required":true,"transform":{"type":"scalar"},"codeRefs":{"used":[{"a":649,"b":651,"line":38,"col":45}]}}],"usedParamSet":{"email":true,"id":true},"statement":{"body":"UPDATE users SET email = :email! WHERE id = :id!","loc":{"a":604,"b":651,"line":38,"col":0}}};

/**
 * Query generated from SQL:
 * ```
 * UPDATE users SET email = :email! WHERE id = :id!
 * ```
 */
export const updateEmail = new PreparedQuery<IUpdateEmailParams,IUpdateEmailResult>(updateEmailIR);


/** 'DeleteUser' parameters type */
export interface IDeleteUserParams {
  id: number;
}

/** 'DeleteUser' return type */
export type IDeleteUserResult = void;

/** 'DeleteUser' query type */
export interface IDeleteUserQuery {
  params: IDeleteUserParams;
  result: IDeleteUserResult;
}

const deleteUserIR: any = {"name":"DeleteUser","params":[{"name":"id","required":true,"transform":{"type":"scalar"},"codeRefs":{"used":[{"a":712,"b":714,"line":43,"col":30}]}}],"usedParamSet":{"id":true},"statement":{"body":"DELETE FROM users WHERE id = :id!","loc":{"a":682,"b":714,"line":43,"col":0}}};

/**
 * Query generated from SQL:
 * ```
 * DELETE FROM users WHERE id = :id!
 * ```
 */
export const deleteUser = new PreparedQuery<IDeleteUserParams,IDeleteUserResult>(deleteUserIR);


