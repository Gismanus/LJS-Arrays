// 2

let styles = ['Jazz', 'Blues'];
styles.push('Rock-n-Roll');
styles[Math.floor(styles.length / 2)] = 'Classic';
console.log(styles);
console.log(styles.shift());
console.log(styles);
styles.unshift(...['Rap','Raggie']);
console.log(styles);