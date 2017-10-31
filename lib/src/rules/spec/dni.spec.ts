import { dni } from '../dni';
import { FieldValidationResult } from '../../entities';

const desErrorMessage = 'Please enter a valid DNI.'
const desDNI = "DNI";

describe('[dni] validation rule tests =>', () => {
  describe('When validating a non string value', () => {
    it('should return true if value is null', () => {
      // Arrange
      const value = null;
      const vm = undefined;
      const customParams = undefined;

      // Act
      const validationResult = dni(value, vm, customParams) as FieldValidationResult;

      // Assert
      expect(validationResult.succeeded).to.be.true;
      expect(validationResult.type).to.be.equals(desDNI);
      expect(validationResult.errorMessage).to.be.empty;
    });

    it('should return true if value is undefined', () => {
      // Arrange
      const value = undefined;
      const vm = undefined;
      const customParams = undefined;

      // Act
      const validationResult = dni(value, vm, customParams) as FieldValidationResult;

      // Assert
      expect(validationResult.succeeded).to.be.true;
      expect(validationResult.type).to.be.equals(desDNI);
      expect(validationResult.errorMessage).to.be.empty;
    });

    it('should return false if value is number', () => {
      // Arrange
      const value = Math.PI;
      const vm = undefined;
      const customParams = undefined;

      // Act
      const validationResult = dni(value, vm, customParams) as FieldValidationResult;

      // Assert
      expect(validationResult.succeeded).to.be.false;
      expect(validationResult.type).to.be.equals(desDNI);
      expect(validationResult.errorMessage).to.be.equals(desErrorMessage);
    });

    it('should return false if value is an object', () => {
      // Arrange
      const value = {};
      const vm = undefined;
      const customParams = undefined;

      // Act
      const validationResult = dni(value, vm, customParams) as FieldValidationResult;

      // Assert
      expect(validationResult.succeeded).to.be.false;
      expect(validationResult.type).to.be.equals(desDNI);
      expect(validationResult.errorMessage).to.be.equals(desErrorMessage);
    });

    it('should return false if value is an array', () => {
      // Arrange
      const value = ['3','4', '4', '5','2','8','9','1','H'];
      const vm = undefined;
      const customParams = undefined;

      // Act
      const validationResult = dni(value, vm, customParams) as FieldValidationResult;

      // Assert
      expect(validationResult.succeeded).to.be.false;
      expect(validationResult.type).to.be.equals(desDNI);
      expect(validationResult.errorMessage).to.be.equals(desErrorMessage);
    });

    it('should return false if value is a function', () => {
      // Arrange
      const value = () => { };
      const vm = undefined;
      const customParams = undefined;

      // Act
      const validationResult = dni(value, vm, customParams) as FieldValidationResult;

      // Assert
      expect(validationResult.succeeded).to.be.false;
      expect(validationResult.type).to.be.equals(desDNI);
      expect(validationResult.errorMessage).to.be.equals(desErrorMessage);
    });
  });
  describe('When validating a string value', () => {
    it('should return false for invalid dni', () => {
      // Arrange
      const value = 'A-31560-672A';
      const vm = undefined;
      const customParams = undefined;

      // Act
      const validationResult = dni(value, vm, customParams) as FieldValidationResult;

      // Assert
      expect(validationResult.succeeded).to.be.false;
      expect(validationResult.type).to.be.equals(desDNI);
      expect(validationResult.errorMessage).to.be.equals(desErrorMessage);
    });
    it('should return true for a valid DNI', () => {
      // Arrange
      const value = '31560672A'; //DNI
      const vm = undefined;
      const customParams = undefined;

      // Act
      const validationResult = dni(value, vm, customParams) as FieldValidationResult;

      // Assert
      expect(validationResult.succeeded).to.be.true;
      expect(validationResult.type).to.be.equals(desDNI);
      expect(validationResult.errorMessage).to.be.empty;
    });
    it('should return true for a valid DNI', () => {
      // Arrange
      const value = 'X9968308Q'; //NIF
      const vm = undefined;
      const customParams = undefined;

      // Act
      const validationResult = dni(value, vm, customParams) as FieldValidationResult;

      // Assert
      expect(validationResult.succeeded).to.be.true;
      expect(validationResult.type).to.be.equals(desDNI);
      expect(validationResult.errorMessage).to.be.empty;
    });
  });
});
