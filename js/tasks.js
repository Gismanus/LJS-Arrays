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

function sumInput() {
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

console.log(sumInput());