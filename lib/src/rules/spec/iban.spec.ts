import { iban } from '../iban';
import { FieldValidationResult } from '../../entities';

const desErrorMessage = 'Please enter a valid IBAN.'

describe('[iban] validation rule tests =>', () => {
  describe('When validating a non string value', () => {
    it('should return true if value is null', () => {
      // Arrange
      const value = null;
      const vm = undefined;
      const customParams = undefined;

      // Act
      const validationResult = iban(value, vm, customParams) as FieldValidationResult;

      // Assert
      expect(validationResult.succeeded).to.be.true;
      expect(validationResult.type).to.be.equals('IBAN');
      expect(validationResult.errorMessage).to.be.empty;
    });

    it('should return true if value is undefined', () => {
      // Arrange
      const value = undefined;
      const vm = undefined;
      const customParams = undefined;

      // Act
      const validationResult = iban(value, vm, customParams) as FieldValidationResult;

      // Assert
      expect(validationResult.succeeded).to.be.true;
      expect(validationResult.type).to.be.equals('IBAN');
      expect(validationResult.errorMessage).to.be.empty;
    });

    it('should return false if value is number', () => {
      // Arrange
      const value = Math.PI;
      const vm = undefined;
      const customParams = undefined;

      // Act
      const validationResult = iban(value, vm, customParams) as FieldValidationResult;

      // Assert
      expect(validationResult.succeeded).to.be.false;
      expect(validationResult.type).to.be.equals('IBAN');
      expect(validationResult.errorMessage).to.be.equals(desErrorMessage);
    });

    it('should return false if value is an object', () => {
      // Arrange
      const value = {};
      const vm = undefined;
      const customParams = undefined;

      // Act
      const validationResult = iban(value, vm, customParams) as FieldValidationResult;

      // Assert
      expect(validationResult.succeeded).to.be.false;
      expect(validationResult.type).to.be.equals('IBAN');
      expect(validationResult.errorMessage).to.be.equals(desErrorMessage);
    });

    it('should return false if value is an array', () => {
      // Arrange
      const value = ['E', 'S', '1', '2', '4', '7', '9', '9', '2', '8', '3', '6', '7', '1', '9', '3', '7', '3', '0', '5', '9', '3'];
      const vm = undefined;
      const customParams = undefined;

      // Act
      const validationResult = iban(value, vm, customParams) as FieldValidationResult;

      // Assert
      expect(validationResult.succeeded).to.be.false;
      expect(validationResult.type).to.be.equals('IBAN');
      expect(validationResult.errorMessage).to.be.equals(desErrorMessage);
    });

    it('should return false if value is a function', () => {
      // Arrange
      const value = () => { };
      const vm = undefined;
      const customParams = undefined;

      // Act
      const validationResult = iban(value, vm, customParams) as FieldValidationResult;

      // Assert
      expect(validationResult.succeeded).to.be.false;
      expect(validationResult.type).to.be.equals('IBAN');
      expect(validationResult.errorMessage).to.be.equals(desErrorMessage);
    });
  });
  describe('When validating a string value', () => {
    it('should return false for invalid IBAN', () => {
      // Arrange
      const value = 'some text';
      const vm = undefined;
      const customParams = undefined;

      // Act
      const validationResult = iban(value, vm, customParams) as FieldValidationResult;

      // Assert
      expect(validationResult.succeeded).to.be.false;
      expect(validationResult.type).to.be.equals('IBAN');
      expect(validationResult.errorMessage).to.be.equals(desErrorMessage);
    });
    it('should return true for a valid IBAN', () => {
      // Arrange
      const value = 'ES50 0382 4487 6240 1829 7223';
      const vm = undefined;
      const customParams = undefined;

      // Act
      const validationResult = iban(value, vm, customParams) as FieldValidationResult;

      // Assert
      expect(validationResult.succeeded).to.be.true;
      expect(validationResult.type).to.be.equals('IBAN');
      expect(validationResult.errorMessage).to.be.empty;
    });
  });
});
