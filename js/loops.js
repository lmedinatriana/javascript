//Loops help you write less code!
//

var cities = ['New York', 'Baltimore', 'Washington D.C.', 'LA'];
var ul = document.createElement ('ul');
for (var x = 0; x < cities.length; x++) {
	var li = document.createElement('li');
	li.innerHTML = cities [x];
	ul.appendChild(li);
}
document.body.appendChild(ul);


// for (var x = 0; x < cities.length; x++){ // do this as long as it is less than the length of cities. (x++)= increment x by 1
// 	if (cities[x] !== 'Baltimore') { // exclude baltimore
// 		console.log(cities [x]);
// 	}
// }