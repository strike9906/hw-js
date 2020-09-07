//предметная область - автосалон
var totalPrice;
var up_100;
var status;
var enfinePower;
var car1 = {
	carName: 'Lexus ES 350',
	numOfSeats: 4,
	engineCapacity: 3.5,
	power: 300,
	weight: 1200,
	price: 15000,
	carColor: 'black',
	roadAccident: false
}
var car2 = {
	carName: 'Lada Sedan',
	numOfSeats: 4,
	engineCapacity: 1.6,
	power: 100,
	weight: 800,
	price: 3500,
	carColor: 'baklajan',
	roadAccident: false
}

up_100_1 = car1.weight / car1.power;
up_100_2 = car2.weight / car2.power;
totalPrice = car1.price + car2.price;
enginePower = (car1.engineCapacity > car2.engineCapacity) ? 'Машина ' + car1.carName + ' мощнее чем ' + car2.carName : 'Машина ' + car2.carName + ' мощнее чем ' + car1.carName ;
status = car1.roadAccident ? 'Попадала в ДТП' : 'Не попадала в ДТП';
console.log("Общая стоимость всех машин составляет " + totalPrice + "$");
console.log("Разгон машины " + car1.carName + " от 0-100 составляет " + up_100_1 + " сек");
console.log("Машина " + car1.carName + " " +status);
console.log("Разгон машины " + car2.carName + " от 0-100 составляет " + up_100_2 + " сек");
console.log(enginePower);