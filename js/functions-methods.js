//SIMPLE MAT ADDITION 1
// function addIt() {
// 	var numA = 2;
// 	var numB = 3;
// 	var total = numA + numB;
// 	console.log(total);
// }
// addIt();

//SIMPLE MAT ADDITION 2
// var text = 'The sum is ';
// function addIt (numA, numB) {
// 	var total = numA + numB;
// 	console.log(text + total);
// }
// addIt(8,8);
// addIt(10,10);

//ADDING A STRING TO A VAR
var myClass= 'You all are great';
var kurt = {
	arms: 3,
	bigNose: true,
	hairColor: "purple",
	slogan: function(what){
		console.log(what + ' is awesome');
	}
}

kurt.slogan('JavaScript');
kurt.hairColor = 'gray';
console.log(kurt.hairColor);
console.log(myClass);