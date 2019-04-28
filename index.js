for (i = 0; i <= 9; i++) {
    console.log(i)
}
for (i = 9; i >= 0; i--) {
    console.log(i)
}
var fruit = ["banana", "orange", "apple", "kiwi"]
for (i = 0; i < fruit.length; i++) {
    console.log(fruit[i])
}

var myArray = [];
for (i = 0; i < 10; i++) {
    myArray.push(i);
}
console.log(myArray)

//var myArray1 = [];
//for (i = 0; i < 100; i++) {
//if()}
//console.log(myArray1)

for (i = 0; i < 101; i++) {
	if (i % 2 == 0) {
        console.log(i + ' is even')
    } else {
        console.log(i + ' is odd')
    }
}
var numberGrid = [
    [0, 1, 2]
    ['x', 'y', 'x']
    [1, 2, 3]
]
for (var i = 0; i < 3; i++) {
    for (var e = 0; e < 3; e++) {
        numberGrid[i][e] = "x"
}
console.log(numberGrid)
/*
done in class but didn't get final formula
var numberGrid = []
for (var i = 0; i < 3; i++) {
    numberGrid.push([])
    for (var e = 0; e < 3; e++) {
        numberGrid[i].push(0)
}
*/



//Write a for loop that will push the numbers 0 through 9 to an array.
//Write a for loop that prints to the console only even numbers 0 through 100.
//Write a for loop that will push every other fruit to an array.
//var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]