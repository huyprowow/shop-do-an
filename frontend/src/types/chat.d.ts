export interface i_chatStateData {
  _id: string;
  userID:string;
  message: string;
  time:Date;
}
export interface i_chat_error {
  value: string;
  msg: string;
  param: string;
  location: string;
}
export interface i_chat_error_res {
  errors: i_chat_error[];
}
export interface i_chat_success_res {
  createdChat: i_chatStateData;
  message: string;
}
