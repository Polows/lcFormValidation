import { FieldValidationResult, FieldValidationFunction } from '../entities';
import { isValidPattern } from './pattern';

// RegExp from https://msdn.microsoft.com/es-es/library/bb932288.aspx (IBAN - SPAIN)
const IBAN_PATTERN = /ES\d{2}[ ]\d{4}[ ]\d{4}[ ]\d{4}[ ]\d{4}[ ]\d{4}|ES\d{22}/;

export const iban: FieldValidationFunction = (value: string) => {
  const validationResult = new FieldValidationResult();
  const isValid = isValidPattern(value, IBAN_PATTERN);

  validationResult.succeeded = isValid;
  validationResult.type = 'IBAN';
  validationResult.errorMessage = isValid ? '' : 'Please enter a valid IBAN.';
  return validationResult;
};
