import {describe, it, expect, test} from 'vitest';
import {celsiusToFahrenheit, fahrenheitToCelsius} from '../src/converter.js';

describe('celsiusToFahrenheit tests', () => {
    // 0C should be 32F
    it('should convert 0C to 32F', () => {
        expect(celsiusToFahrenheit(0)).toBe(32);
    });
    // 100C should 212F
    it('should convert 100C to 212F', () => {
        expect(celsiusToFahrenheit(100)).toBe(212);
    });
    // "25"C should be 77
    it('should convert "25"C as string to 77F', () => {
        expect(celsiusToFahrenheit("25")).toBe(77);
    });
    // -40C should be -40F
    it('should convert negative -40C to -40F', () => {
        expect(celsiusToFahrenheit(-40)).toBe(-40);
    });
});