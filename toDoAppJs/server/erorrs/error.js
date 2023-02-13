export class ApiErorr extends Error {
  status;
  errors;
  constructor(status, messege, errors = []) {
    super(messege);
    (this.status = status), (this.errors = errors);
  }
  static unAuthError() {
    return new ApiErorr(401, "Пользователь не авторизирован");
  }
  static badRequest(messege, err = []) {
    return new ApiErorr(400, messege, err);
  }
}
