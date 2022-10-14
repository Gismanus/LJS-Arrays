// 2

/* let styles = ['Jazz', 'Blues'];
styles.push('Rock-n-Roll');
styles[Math.floor(styles.length / 2)] = 'Classic';
console.log(styles);
console.log(styles.shift());
console.log(styles);
styles.unshift(...['Rap','Raggie']);
console.log(styles); */

// 3

/* let arr = ['a', 'b'];

arr.push(function(){
    console.log(this);
})

arr[2](); // ['a', 'b', function]; */

// 4

/* function sumInput() {
    let arr = [];
    let sum = 0;
    function enterValue() {
        return prompt('Enter value', ''); // string for ease
    }
    while (true) {
        value = enterValue();
        if (value != null){
            value = +value;
        }
        if(isNaN(value) || value == null) break;
        arr.push(value);
        console.log(arr);
    };
    for (let key of arr) {
        sum += key;
    }
    return sum;
}

console.log(sumInput()); */

// 5

arr = [1, -2, 3, 4, -9, 6];

function getMaxSubSum(arr) {
    let maxSum = 0;
    
    for(let i = 0; i < arr.length; i++){
        let sumFixedStart = 0;
        for(let j = i; j < arr.length; j++){
            sumFixedStart += arr[j];
            maxSum = Math.max(maxSum, sumFixedStart);
        }
    }

    return maxSum;
}
console.log(getMaxSubSum([-1, 2, 3, -9]));