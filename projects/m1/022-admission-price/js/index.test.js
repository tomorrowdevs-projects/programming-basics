import {isEmptyFile} from "../../../__test__/utils";
const runTest = isEmptyFile('./projects/m1/022-admission-price/index.js')

describe('Test exe-022-admission-price', () => {
    runTest('', () => {
        expect(true).toBe(true);
    });
});