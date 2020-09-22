// Task 1
var person1 = {
	'name': 'Misha',
	'surname': 'Oreshkin',
	'country': 'Ukraine'
}
var person2 = {
	'name': 'Oleg',
	'surname': 'Petrov',
	'country': 'USA'
}
var person3 = {
	'name': 'Valya',
	'surname': 'Petrova',
	'country': 'Russia'
}
var persons = [];
persons.push(person1, person2, person3, {"name": 'Darya', "surname": 'Petrogradovna', "country": 'Russia'});
//Task 2
for (var i = 0; i < persons.length; i++) {
	console.log(persons[i]);
}
// Task 3
for (var i = 0; i < persons.length; i++) {
	for (var prop in persons[i]) {
		if (prop === 'surname' || prop === 'name') {
			console.log(prop + ' ' + persons[i][prop]);
		}
	}
}
// Task 4
for (var i = 0; i < persons.length; i++) {
	for (var fullName in persons[i]) {
		if (fullName != 'fullname') {
			persons[i].fullName = null;
		}
	}
}
// Task 5
jsonStructure = JSON.stringify(persons);
console.log(jsonStructure);
// Task 6
personJSON = JSON.stringify({"name": "Sergey", "surname": "Ivanov", "country": "Russia"})
var person4 = JSON.parse(personJSON);
persons.push(person4);
// Task 7
var str = "<table border='1'>"
for (let i = 0; i < persons.length; i++){
	if (i===0) {
		str += `<tr><td>${' '}</td><td>Имя</td><td>Фамилия</td></tr>`;
	}
    str += `<tr><td>${i + 1}</td><td>${persons[i].name}</td><td>${persons[i].surname}</td></tr>`
}
str += "</table>"
console.log(str)
document.write(str)
// Task 8
function avg2 (a, b) {
	var result;
	result = (a + b) / 2;
	return result;
}
res = avg2(1, 3);
console.log(res);
// Task 9
function sum3 () {
	var sum = 0;
	for (var i = 0; i < arguments[i]; i++ ) sum += arguments[i];
	return sum;
}
res = sum3(5,5,5);
console.log(res);
// Task 10
function intRandom (a, b) {
	var result = 0;
	var min = a,
		max = b;
	if (arguments.length === 1) {
		min = 0;
		max = arguments[0];
	}
	result = Math.round(Math.random() * (max - min) + min);
	return result;
}
res = intRandom(10);
console.log(res);
// Task 11
function sum3 () {
	var sum = 0;
	for (var i = 0; i < arguments[i]; i++ ) sum += arguments[i];
	return sum;
}
res = sum3(5,5,5);
console.log(res);
// Task 12
let array = [10,11,12,13,14,15,16]
console.log(array); 
array2 = [4, 6, 7];
array = splice(array, 2, 3, ...array2);
console.log(array);
function splice(array, start, amount, ...insert) {
	let arr = array,
		length = arr.length,
		arrTemp = [];
	if (start < length) {
		for (var i = 0; i < start; i++) {
			arrTemp[i] = arr[i];
		}
		for (var i = 0; i < start + amount; i++) {
			arr.shift();
		}
		arr.unshift(...insert);
		arr.unshift(...arrTemp);
	}
	return arr;
}