export interface IUsers {
  email: string;
  password: string;
}

export interface INewUsers extends IUsers {
  name: string;
}

export interface IHeaders {
  authorization: string;
}
