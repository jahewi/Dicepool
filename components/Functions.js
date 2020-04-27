export function CompareArrays(props) {
    const arr1 = props.arr1;
    const arr2 = props.arr2;
    const keep = props.keep; // 'high' or 'low'
    let arr = [];
    // Compare the arrays and build a new one for return
    for (let index = 0; index < arr1.length; index++) {
        if (keep == 'high') {
            // Advantage
            arr.push(Math.max(arr1[index], arr2[index]));
        } else if (keep == 'low') {
            // Disadvantage
            arr.push(Math.min(arr1[index], arr2[index]));
        } else {
            // something went wrong...
            return arr;
        };
    };
    return arr;
}


export function RollDice(props) {
    // Expects props
    // * number
    // * size
    let rolls = [];
    // Roll the dice
    for (let index = 0; index < props.number; index++) {
        rolls.push(Math.floor(Math.random() * props.size) + 1);
    };
    return rolls;
}
