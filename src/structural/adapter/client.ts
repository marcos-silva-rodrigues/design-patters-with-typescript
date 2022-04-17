import { IEmailValidator, IEmailValidatorFN } from './email/validator';
import {
  emailValidationAdapterFC,
  EmailValidatorAdapterClass,
} from './email/adapters';

function validaEmailClass(
  emailValidator: IEmailValidator,
  email: string,
): void {
  if (emailValidator.isEmail(email)) {
    console.log('É valido');
  } else {
    console.log('É invalido');
  }
}

function validaEmailFn(validate: IEmailValidatorFN, email: string): void {
  if (validate(email)) {
    console.log('É valido');
  } else {
    console.log('É invalido');
  }
}

validaEmailClass(new EmailValidatorAdapterClass(), 'Marcos@gmail.com');
validaEmailFn(emailValidationAdapterFC, 'Marcos@gmail.com');
