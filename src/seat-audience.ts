type Seat = {
    type: 'A' | 'W' | 'M' | '',
    passengerNo: number|'',
}

export class SeatAudience {
    private grid: Seat[][]

    constructor(private readonly seatPlan: number[][], private numberOfPassengers: number) {
        this.setupGrid()
        this.labelSeats()
        this.assignPassengers()
    }

    private setupGrid() {
        const [maxColumns, maxRows] = this.seatPlan.reduce(
            ([maxCols, maxRows], [columns, rows]) => [
                maxCols + columns,
                Math.max(maxRows, rows)
            ],
            [this.seatPlan.length - 1, 0]
        )
        this.grid = Array.from({length: maxRows}, () => Array(maxColumns).fill({ type: '', passengerNo: '' }))
    }

    private labelSeats() {
        let columnOffset = 0

        for (let i = 0; i < this.seatPlan.length; i++) {
            const columnCount = this.seatPlan[i][0]
            const rowCount = this.seatPlan[i][1]

            for (let row = 0; row < rowCount; row++) {
                for (let col = columnOffset; col < columnCount + columnOffset; col++) {
                    if (col === 0 || col === this.grid[row].length - 1) {
                        this.grid[row][col] = { type: 'W', passengerNo: '' }
                    } else if (col === columnOffset || col === columnCount + columnOffset - 1) {
                        this.grid[row][col] = { type: 'A', passengerNo: '' }
                    } else if (col > columnOffset && col < columnCount + columnOffset - 1) {
                        this.grid[row][col] = { type: 'M', passengerNo: '' }
                    }
                }
            }

            columnOffset += columnCount + 1
        }
    }

    private assignPassengers() {
        let passengerNo = 1;

        for (let passengerType of ['A', 'W', 'M']) {
            for (let row = 0; row < this.grid.length && passengerNo <= this.numberOfPassengers; row++) {
                for (let col = 0; col < this.grid[row].length && passengerNo <= this.numberOfPassengers; col++) {
                    if (this.grid[row][col].type === passengerType) {
                        this.grid[row][col].passengerNo = passengerNo++;
                    }
                }
            }
        }
    }

    public getGrid() {
        return this.grid;
    }
}