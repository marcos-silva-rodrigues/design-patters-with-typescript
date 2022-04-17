import isEmail from 'validator/lib/isEmail';
import { IEmailValidator, IEmailValidatorFN } from './validator';

export class EmailValidatorAdapterClass implements IEmailValidator {
  isEmail(value: string): boolean {
    return isEmail(value);
  }
}

export const emailValidationAdapterFC: IEmailValidatorFN = (value) =>
  isEmail(value);
