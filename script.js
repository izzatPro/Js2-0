const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];
const shortNames = names.filter(function(name){
    return name.length < 5;
});
console.log(shortNames);


const answers = ['IvaAn', 'AnnA', 'HELLO'];
const result = answers.map(item => {
    return item.toLocaleLowerCase();
});
console.log(result);


const take = [ 4, 5, 2333];

console.log(take.every(item => typeof(item) === 'number'));

const arr = ['Apple', 'Pear', 'Plum'];
const res = arr.reduce((sum, current) => sum + ', ' + current , 'Sex');
console.log(res);

const array = [1,2,3];
const re = array.reduce((sum,current) => sum + current , 25);
console.log(re);