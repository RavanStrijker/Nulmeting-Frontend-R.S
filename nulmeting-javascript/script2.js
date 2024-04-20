let testObject = {
    key1: 40,
    key2: 491,
    key3: 991,
    key4: 819,
    key5: 138,
    key6: 481
}

printKeyValues(testObject);
printTotalValue(testObject);

function printKeyValues(obj){
    for (const [key, value] of Object.entries(testObject)) {
        console.log(`${key}: ${value}`);
    }
}

function printTotalValue(obj){
    let total = 0;
    for (const [key, value] of Object.entries(testObject)) {
        total += value;
    }
    console.log(`Total value: ${total}`)
}
    