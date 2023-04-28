import test, {describe} from 'node:test';
import assert from 'node:assert';
import {SeatAudience} from "../src/seat-audience";

describe('SeatAudience tests', function () {
    test('should return empty grid', function () {
        const seatAudience = new SeatAudience([], 3);
        const grid = seatAudience.getGrid();

        assert.deepStrictEqual(grid, []);
    });

    test('should return empty grid', function () {
        const seatAudience = new SeatAudience([[]], 3);
        const grid = seatAudience.getGrid();

        assert.deepStrictEqual(grid, []);
    });

    test('should return correct grid', function () {
        const seatAudience = new SeatAudience([[3, 2]], 3);
        const grid = seatAudience.getGrid();

        assert.deepStrictEqual(grid, [
                [
                    {type: 'W', passengerNo: 1},
                    {type: 'M', passengerNo: ''},
                    {type: 'W', passengerNo: 2}
                ],
                [
                    {type: 'W', passengerNo: 3},
                    {type: 'M', passengerNo: ''},
                    {type: 'W', passengerNo: ''}
                ]
            ]
        );
    });

    test('should return correct grid', function () {
        const seatAudience = new SeatAudience([[3, 2], [2, 3]], 6);
        const grid = seatAudience.getGrid();

        assert.deepStrictEqual(grid, [
                [
                    {type: 'W', passengerNo: 6},
                    {type: 'M', passengerNo: ''},
                    {type: 'A', passengerNo: 1},
                    {type: '', passengerNo: ''},
                    {type: 'A', passengerNo: 2},
                    {type: 'W', passengerNo: ''}
                ],
                [
                    {type: 'W', passengerNo: ''},
                    {type: 'M', passengerNo: ''},
                    {type: 'A', passengerNo: 3},
                    {type: '', passengerNo: ''},
                    {type: 'A', passengerNo: 4},
                    {type: 'W', passengerNo: ''}
                ],
                [
                    {type: '', passengerNo: ''},
                    {type: '', passengerNo: ''},
                    {type: '', passengerNo: ''},
                    {type: '', passengerNo: ''},
                    {type: 'A', passengerNo: 5},
                    {type: 'W', passengerNo: ''}
                ]
            ]
        );
    });

    test('should return correct grid', function () {
        const seatAudience = new SeatAudience([[3, 2], [4, 3], [2, 3], [3, 4]], 30);
        const grid = seatAudience.getGrid();

        assert.deepStrictEqual(grid, [
                [
                    {type: 'W', passengerNo: 19},
                    {type: 'M', passengerNo: 25},
                    {type: 'A', passengerNo: 1},
                    {type: '', passengerNo: ''},
                    {type: 'A', passengerNo: 2},
                    {type: 'M', passengerNo: 26},
                    {type: 'M', passengerNo: 27},
                    {type: 'A', passengerNo: 3},
                    {type: '', passengerNo: ''},
                    {type: 'A', passengerNo: 4},
                    {type: 'A', passengerNo: 5},
                    {type: '', passengerNo: ''},
                    {type: 'A', passengerNo: 6},
                    {type: 'M', passengerNo: 28},
                    {type: 'W', passengerNo: 20}
                ],
                [
                    {type: 'W', passengerNo: 21},
                    {type: 'M', passengerNo: 29},
                    {type: 'A', passengerNo: 7},
                    {type: '', passengerNo: ''},
                    {type: 'A', passengerNo: 8},
                    {type: 'M', passengerNo: 30},
                    {type: 'M', passengerNo: ''},
                    {type: 'A', passengerNo: 9},
                    {type: '', passengerNo: ''},
                    {type: 'A', passengerNo: 10},
                    {type: 'A', passengerNo: 11},
                    {type: '', passengerNo: ''},
                    {type: 'A', passengerNo: 12},
                    {type: 'M', passengerNo: ''},
                    {type: 'W', passengerNo: 22}
                ],
                [
                    {type: '', passengerNo: ''},
                    {type: '', passengerNo: ''},
                    {type: '', passengerNo: ''},
                    {type: '', passengerNo: ''},
                    {type: 'A', passengerNo: 13},
                    {type: 'M', passengerNo: ''},
                    {type: 'M', passengerNo: ''},
                    {type: 'A', passengerNo: 14},
                    {type: '', passengerNo: ''},
                    {type: 'A', passengerNo: 15},
                    {type: 'A', passengerNo: 16},
                    {type: '', passengerNo: ''},
                    {type: 'A', passengerNo: 17},
                    {type: 'M', passengerNo: ''},
                    {type: 'W', passengerNo: 23}
                ],
                [
                    {type: '', passengerNo: ''},
                    {type: '', passengerNo: ''},
                    {type: '', passengerNo: ''},
                    {type: '', passengerNo: ''},
                    {type: '', passengerNo: ''},
                    {type: '', passengerNo: ''},
                    {type: '', passengerNo: ''},
                    {type: '', passengerNo: ''},
                    {type: '', passengerNo: ''},
                    {type: '', passengerNo: ''},
                    {type: '', passengerNo: ''},
                    {type: '', passengerNo: ''},
                    {type: 'A', passengerNo: 18},
                    {type: 'M', passengerNo: ''},
                    {type: 'W', passengerNo: 24}
                ]
            ]
        );
    });
});