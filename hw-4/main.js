// Task 1
let link = prompt('Введите ссылку', '');
let degree = +prompt('Введите градусы', 0);
let myImg = document.querySelector('#myimg');
if (link && link.length > 10) {
	myImg.setAttribute("src", link);
	myImg.setAttribute("style", `transform: rotate(0deg); 
								 width: 300px;`);
	for (var i = 0; i < 5; i++) {
		let crElementImg = document.createElement('img');
		document.body.append(crElementImg);
		crElementImg.setAttribute("src", link);
		crElementImg.setAttribute("style", `transform: rotate(${degree * (i + 1)}deg); 
									 width: 300px;`);
	}
} else {
	console.log("неправильно введена ссылка");
}
// Task 2
function deleteTag (tegID) {
	let selectorID = document.querySelector(`#${tegID}`);
	if (selectorID) {
		selectorID.parentNode.removeChild(selectorID);
	} else console.log('нельзя удалить этот тег, потому что в вёрстке этого тега нету.');
}
deleteTag('mydiv');
// Task 3 and Task 4
let elem = document.querySelector('#elem');
function createTable(parent, rows, cols) {
	let table = document.createElement('table');
	for (let i = 0; i <= rows; i++) {
		let tr = document.createElement('tr');
		for (let j = 0; j <= cols; j++) {
			let td = document.createElement('td');
			if (i === 0) { // выводим первую строку от 1 до cols
				td.innerText = j;
			} else if (j === 0) { // выводим первый столбец от 1 до cols
				td.innerText = i;
			}
			else { // выводим вычисления
				td.innerText = i * j;
			}
			td.addEventListener('mouseover', function () {
				this.style.backgroundColor="red"; 
			});
			td.addEventListener('mouseout', function () {
				this.style.backgroundColor=""; 
			})
			tr.appendChild(td);
		}
		table.appendChild(tr);
	}
	parent.appendChild(table);
}
createTable(elem, 10, 10);
// Task 5
let inputAll = document.querySelectorAll('input[type="number"]');
let inputBtn = document.querySelector('input[type="button"]');
let myDiv = document.querySelector('.result');
inputBtn.addEventListener('click', function () {
	let res = 0;
	for (var i = 0; i < inputAll.length; i++) {
		res += +inputAll[i].value;
	}
	myDiv.textContent = res;
	return res;
});
// Task 7
let array = [' hello darkness   my old   friend ', ' i\'ve come to   talk  with   you again    '];
let newArray = array.map(
	function(elem) {
		return elem.replace(/\s+/g, ' ').trim();
});
//Task 6
let persons = [{
 name: 'Vasyan', age: 21
}, {
 name: 'Kolyan', age: 22
}, {
 name: 'Mashka', age: 17
}];

function sortByFieldName(object, key) {
    if (key === 'name') {
        persons.sort(function(a, b){
            let nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
            if (nameA < nameB) return -1;
            if (nameA > nameB) return 1 
            else return 0;
            })
        console.log(persons);
    } else if (key === 'age') {
        persons.sort(function(a, b) {
            return a.age - b.age
        })
    }
}
sortByFieldName(persons, 'age');
console.log(persons);
// Task 8
let myArray = [-2, 5, 1, -5, -1, 1, 3, 4, -1];
let copy = []
function filter (array, callback) {
	let arr = array;
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (callback(arr[i], i, arr)) {
			newArr.push(arr[i]);
		}
	}
	return newArr;
}
// пример
copy = filter(myArray, function (elem){
	if (elem >= 0) {
		return true;
	} else {
		return false;
	}
});
console.log(copy)