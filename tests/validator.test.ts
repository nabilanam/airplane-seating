import test, {describe} from 'node:test';
import assert from 'node:assert';
import {isValid2DArray} from "../src/validator";

describe('isValid2DArray tests', function () {
    test('should return true if the array is valid json string', function () {
        const array = "[[1, 2], [4, 5], [7, 8]]";
        assert.ok(isValid2DArray(array));
    });
    test('should return false if the array contains negative number', function () {
        const array = "[[1, 2], [4, 5], [7, -8]]";
        assert.ok(!isValid2DArray(array));
    });

    test('should return false if not array', function () {
        const array = 'not array';
        assert.ok(!isValid2DArray(array));
    });

    test('should return false if the array is empty', function () {
        const array = "[]";
        assert.ok(!isValid2DArray(array));
    });

    test('should return false if the array is one dimensional', function () {
        const array = "[5]";
        assert.ok(!isValid2DArray(array));
    });

    test('should return false if nested array has only column', function () {
        assert.ok(!isValid2DArray("[[5]]"));
    });
});