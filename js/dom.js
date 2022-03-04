//-------------------------------------------------------------------------------------
// let item = document.querySelectorAll('.card');
// let childArray = [];
// for(let i = 0;i < item.length;i++){
// 	let childrenTempArray = item[i].children;
// 	childArray[i] = new Array();
// 	for(let j = 0;j < childrenTempArray.length;j++){
// 		childArray[i].push(childrenTempArray[j]);
// 	}
// }
// console.log(childArray);
//-------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------
// function getArray(name) {
// 	let mainArray = [];
// 	let mainItem = name;
// 	getRecursionArray(mainItem, mainArray);
// 	console.log(mainArray)
// }
// function getRecursionArray(itemName, arrayName) {
// 	let item = itemName;
// 	let childrenList = item.children
// 	let mainArray = arrayName
// 	for(let j = 0;j < item.children.length;j++){
// 		if(childrenList[j].children.length !== 0) {
// 			mainArray[j] = new Array();
// 			getRecursionArray(childrenList[j],mainArray[j]);
// 		}else {
// 			mainArray[j] = childrenList[j];
// 		}
// 	}
	
// }
// let item = document.querySelector('body');
// getArray(item, []);
// ------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------

// main function
// Тут создается главный объект, также начальная точка, вызывается вторая функцию и возращается объект
function getObjectArray(item) {
	let itemObject = Object();
	let itemName = item;
	getObjectArrayCur(itemName, itemObject);
	return itemObject;
}
// recursive function
// Это рекурсивная функцию, которая выполняет всю работу
function getObjectArrayCur (item, objArray) {
	// Создаются объект, точка отправки, дети точки
	let itemObject = objArray;
	let itemName = item;
	let itemChildrens = itemName.children;
	// начинается общий пересчет массива детей
	for(let i = 0, length = itemChildrens.length; i < length; i++){
		// создаются переменные с названием объекта
		let localTempName = itemChildrens[i].localName;
		let classTempName = itemChildrens[i].className;
		//идет проверка на присутствие детей у нынешнего объекта
		if (itemChildrens[i].children.length !== 0) {
			//Если детей нету, то идет проверка на то, присвоен ли объекту класс, что бы дать название
			if (itemChildrens[i].classTempName == false) {
				//Если класса нету, название объекта выдается по тегу
				itemObject[localTempName] = new Object();
				//Сверху создается пустой объект, а снизу с ним вызывается рекурсивная функция
				getObjectArrayCur(itemChildrens[i], itemObject[localTempName]);
				continue;
			}
			//Если класс есть выдается название по нему
			itemObject[classTempName] = new Object();
			getObjectArrayCur(itemChildrens[i], itemObject[classTempName]);
		}else {//Тут идет случай, если у объекта нету детей
			// в случае если нету детей, объект просто присваевается из детей
			if(itemChildrens[i].className == false) {
				itemObject[localTempName] = itemChildrens[i];
				continue;
			}
			itemObject[classTempName] = itemChildrens[i];
		}
		
	}
}
// Инициализация начальной точки
let item = document.querySelector('body');
//Вызов главной функции
console.log(getObjectArray(item));

// ------------------------------------------------------------------------------------

// let item = document.querySelector('.card-info');
// console.log(item.children);
// for (let i = 0; i < item.children.length; i++) {
// 	console.log(item.children[i].className == item.children[i+1].className);
// }
// + `(${i+1})`
// HEHEHE HIHIHI
//tem.split('(')[1].split(')')[0]