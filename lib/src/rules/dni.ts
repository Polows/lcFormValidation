import { FieldValidationResult, FieldValidationFunction } from '../entities';
import { isValidPattern } from './pattern';

// RegExp from http://computersandprogrammers.blogspot.com.es/2012/12/expresion-regular-reconocer-dni.html
const DNI_PATTERN = /(([X-Z]{1})([-]?)(\d{7})([-]?)([A-Z]{1}))|((\d{8})([-]?)([A-Z]{1}))/;

export const dni: FieldValidationFunction = (value: string) => {
  const validationResult = new FieldValidationResult();
  let isValid = isValidPattern(value, DNI_PATTERN) 
  validationResult.succeeded = isValid;
  validationResult.type = 'DNI';
  validationResult.errorMessage = isValid ? '' : 'Please enter a valid DNI.';
  return validationResult;
};
