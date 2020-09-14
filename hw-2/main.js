// // Task 1
// var color = prompt("Введите цвет","");
// if (color == "red") {
// 	document.write("<div style='background-color: red;'>красный</div>");
// } else if (color == "black") {
// 	document.write("<div style='background-color: black; color: white;'>черный</div>");
// } else if (color == "blue") {
// 	document.write("<div style='background-color: blue;'>синий</div>");
// } else if (color == "green") {
// 	document.write("<div style='background-color: green;'>зеленый</div>");
// } else {
// 	document.write("<div style='background-color: gray;'>Я не понял</div>");
// }
// // Task 2
// var age = prompt("Введите свой возраст", "");
// if (age <= 0 || age >= 100) {
// 	alert("Вы ввели неверное число");
// }
// // Task 3
// var january = 30;
// var february = 28;
// var march = 30;
// var april = 31;
// var may = 30;
// var june = 31;
// var july = 30;
// var august = 31;
// var september = 30;
// var october = 31;
// var november = 30;
// var december = 31;
// var monthChoose = prompt("Введите название месяца", "");
// switch (monthChoose.toLowerCase()){
// 	case "january": 
// 		alert("В месяце " + monthChoose + " " + january +" дней");
// 		break;
// 	case "february": 
// 		alert("В месяце " + monthChoose + " " + february + " дней");
// 		break;
// 	case "march": 
// 		alert("В месяце " + monthChoose + " " + march + " дней");
// 		break;
// 	case "april": 
// 		alert("В месяце " + monthChoose + " " + april + " дней");
// 		break;
// 	case "may": 
// 		alert("В месяце " + monthChoose + " " + may + " дней");
// 		break;
// 	case "june": 
// 		alert("В месяце " + monthChoose + " " + june + " дней");
// 		break;
// 	case "july": 
// 		alert("В месяце " + monthChoose + " " + july + " дней");
// 		break;
// 	case "august": 
// 		alert("В месяце " + monthChoose + " " + august + " дней");
// 		break;
// 	case "september": 
// 		alert("В месяце " + monthChoose + " " + september + " дней");
// 		break;
// 	case "october": 
// 		alert("В месяце " + monthChoose + " " + october + " дней");
// 		break;
// 	case "november": 
// 		alert("В месяце " + monthChoose + " " + november + " дней");
// 		break;
// 	case "december": 
// 		alert("В месяце " + monthChoose + " " + december + " дней");
// 		break;
// 	default:
// 		alert("Вы неправильно ввели название месяца");
// }
// // Task 4/5
// var personAge = +prompt("Введите свой возраст", "");
// if (personAge < 7) {
// 	alert("Привет, дитё. Хороший день сегодня однако!");
// } else if (personAge >= 7 && personAge <= 17) {
// 	alert("Привет, шкiла, ты уже сделал уроки на завтра?!");
// }
//  else if (personAge >= 18 && personAge <= 24) {
// 	alert("Привет, cтудент. Сколько у тебя завтра пар?");
// }  else if (personAge >= 25 && personAge <= 60) {
// 	alert("Привет, работяга. Хороший вечер сегодня!");
// } else if (personAge >= 61 && personAge <= 120) {
// 	alert("Привет, старик, как твоё самочуствие?");
// } else {
// 	alert("Вы неверно ввели возраст");
// }
// // Task 6
// var object = {
// 	tagName : "body",
// 	subTags : {
// 		firstDiv : {
// 			tagName : "div",
// 			subTags : {
// 				objectSpan : {
// 					tagName : "span",
// 					text : "Enter a data please:"
// 					objectBr : {
// 						tagName : "br"
// 					}
// 				}
// 				objectInput : {
// 					tagName : "input",
// 					attrs : {
// 						type : "text",
// 						id : "name"
// 					}
// 					}
// 				objectInput : {
// 					tagName : "input",
// 					attrs : {
// 						type : "text",
// 						id : "surname"
// 					}
// 				}
// 			}
// 		}
// 		secondDiv : {
// 			tagName : "div",
// 			subTags : {
// 				objectButton : {
// 					tagName : "button",
// 					text : "OK"
// 					attrs : {
// 						id : "ok"
// 					}
// 				}
// 				objectButton : {
// 					tagName : "button",
// 					text : "Cancel"
// 					attrs : {
// 						id : "cancel"
// 					}
// 				}
// 			}
// 		}
// 	}
// }
// // Task 7
// var notebook = {
//     brand: prompt("Enter brand of notebook", ""),
//     type:  prompt("Enter type", ""),
//     model: prompt("Enter model", ""),
//     ram: prompt("Enter RAM", ""),
//     size: prompt("Enter size", ""),
//     weight: prompt("Enter weight", ""),
//     resolution: {
//         width: prompt("Enter width", ""),
//         height: prompt("Enter height", ""),
//     },
// };

// var phone = {
//     brand: prompt("Enter brand of phone", ""),
//     model: prompt("Enter model", ""),
//     ram: prompt("Enter RAM", ""),
//     color: prompt("Enter color", ""),
// };

// var person = {
//     name: prompt("Enter person name", ""),
//     surname: prompt("Enter person surname", ""),
//     married: confirm("Is he married?"),
// }
// // Task 8
// do {
// } while (!confirm("Что??"))
// // Task 9
// var choose = prompt("Введите любое положительное число", "");
// for (var i = choose - 1; i >= 0; i--) {
// 	console.log(i + " ");
// }
// // Task 10
// var i = 0;
// while (true) {
// 	i++;
// 	if (Math.random() > 0.9) {
// 		alert("Количество итераций = " + i);
// 		break;
// 	} else continue;
// }
// // Task 11
// const STRING_LENGTH = 31;
// var string = "";
// for (var i = 0; i < STRING_LENGTH; i++) {
// 	string += "# ";
// }
// console.log(string);
// // Task 12
// const N = 15; // Длина массива
// var array = [];
// for (var i = 0; i < N; i++) {
// 	array.push(Math.pow(i, 3));
// 	console.log(array[i] + " ");
// }