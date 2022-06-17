const obj = {
    firstKey: 'firstValue',
    secondKey: 'secondValue',
    thirdKey: 'thirdValue'
}

const obj2 = {
    ...obj,
    fourthKey: 'fourthValue',
    firstKey: 'firstValue2',
    fifthKey: 'fifthValue'  
}

console.log('obj ', obj);
console.log('obj2 ', obj2);
