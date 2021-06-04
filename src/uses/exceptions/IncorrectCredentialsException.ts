export default class IncorrectCredentialsException extends Error{
  constructor(message: string) {
    super(message);
  }
}
