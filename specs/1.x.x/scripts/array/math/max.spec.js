import {
    maxRange,
    max
} from "../../../../../src/1.x.x/scripts/array/math/max"

describe("Maximum value in an array", () => {
    it("should return the same positive value for one positive element", () => {
        expect(max([4])).toStrictEqual(4);
    });
    it("should return the big positive value for positive elements", () => {
        expect(max([1, 2, 3])).toStrictEqual(3);
    });
    it("should return the small negative value for negative elements", () => {
        expect(max([-1, -2, -3])).toStrictEqual(-1);
    });
    it("should return NaN value for NaN elements", () => {
        expect(max([NaN, NaN, NaN])).toStrictEqual(NaN);
    });
    it("should return the same values that are not numbers", () => {
        expect(max(["a", "b", "c"])).toStrictEqual(["a", "b", "c"]);
    });

    it("should throw an error", () => {

        function passNumber() {
            max(1)
        }

        function passString() {
            max("array")
        }

        function passEmptyArray() {
            max([])
        }

        function passNull() {
            max(null)
        }

        function passUndefined() {
            max(undefined)
        }

        expect(passNumber).toThrowError("The parameter should be an array");
        expect(passString).toThrowError("The parameter should be an array");
        expect(passEmptyArray).toThrowError("The array is empty");
        expect(passNull).toThrowError("The parameter is null or undefined");
        expect(passUndefined).toThrowError("The parameter is null or undefined");
    });
});

describe("Maximum value in portion of array", () => {
    it("should return the same positive value for one positive element", () => {
        expect(maxRange([4], 0, 0)).toStrictEqual(4);
    });
    it("should return the big positive value for positive elements", () => {
        expect(maxRange([1, 2, 3, 4, 5], 0, 3)).toStrictEqual(4);
    });
    it("should return the small negative value for negative elements", () => {
        expect(maxRange([-1, -2, -3, -4, -5], 0, 3)).toStrictEqual(-1);
    });
    it("should return NaN value for NaN elements", () => {
        expect(maxRange([NaN, NaN, NaN], 0, 1)).toStrictEqual(NaN);
    });
    it("should return the same values that are not numbers", () => {
        expect(maxRange(["a", "b", "c"], 0, 1)).toStrictEqual(["a", "b", "c"]);
    });

    it("should throw an error", () => {

        function passNumber() {
            maxRange(1)
        }

        function passString() {
            maxRange("array")
        }

        function passEmptyArray() {
            maxRange([])
        }

        function passNull() {
            maxRange(null)
        }

        function passUndefined() {
            maxRange(undefined)
        }

        function passBigIndex() {
            const array = [-1, -2, -3];
            maxRange(array, 0, 4); // The last index of array is 2
        }
        expect(passNumber).toThrowError("The parameter should be an array");
        expect(passString).toThrowError("The parameter should be an array");
        expect(passEmptyArray).toThrowError("The array is empty");
        expect(passNull).toThrowError("The parameter is null or undefined");
        expect(passUndefined).toThrowError("The parameter is null or undefined");
        expect(passBigIndex).toThrowError("The last index of the array is less then 'to' parameter");
    });
});