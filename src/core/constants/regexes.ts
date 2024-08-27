/*
  will pass password contains at least one digit, one lowercase letter, one uppercase letter
  one special character, no spaces, and is between 8 and 16 characters long.
*/
export const VALID_PASSWORD_REGEX = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;

// will pass email contains @ and .
export const VALID_EMAIL_REGEX = /^\S+@\S+\.\S+$/;
