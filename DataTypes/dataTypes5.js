function isDivisible(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new Error("arguments must be integers");
    }
    if (b === 0) {
        throw new Error("division by zero");
    }
    return a % b === 0;
}