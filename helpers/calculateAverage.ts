export default function calculateAverage(numbers: number[]): number {
    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const average = sum / numbers.length;
    return Number(average.toFixed(2));
}
