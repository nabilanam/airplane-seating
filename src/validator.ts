export const isValid2DArray = (str) => {
    try {
        const arr = JSON.parse(str);
        if (!Array.isArray(arr) || arr.length === 0) {
            return false;
        }
        for (let row of arr) {
            if (!Array.isArray(row) || row.length !== 2) {
                return false;
            }
            for (let num of row) {
                if (!Number.isInteger(num) || num < 0) {
                    return false;
                }
            }
        }
        return true;
    } catch {
        return false;
    }
}