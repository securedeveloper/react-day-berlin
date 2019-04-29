export default function performance(S) {
    let num = parseInt(S, 2);
    let steps = 0;

    if (num <= 0) {
        return steps;
    }

    while (num !== 0) {
        steps++;
        num = (num % 2 === 0) ? num / 2 : --num;
    }

    return steps;
}