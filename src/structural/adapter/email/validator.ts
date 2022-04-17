export interface IEmailValidator {
  isEmail: IEmailValidatorFN;
}

export interface IEmailValidatorFN {
  (value: string): boolean;
}
