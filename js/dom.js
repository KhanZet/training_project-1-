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

function getObjectArray(item) {
	let itemObject = Object();
	let itemName = item;
	getObjectArrayCur(itemName, itemObject);
	return itemObject;
}
function getObjectArrayCur (item, objArray) {
	let itemObject = objArray;
	let itemName = item;
	let itemChildrens = itemName.children;
	
	for(let i = 0, length = itemChildrens.length; i < length; i++){
		let localTempName = itemChildrens[i].localName;
		let classTempName = itemChildrens[i].className;

		if (itemChildrens[i].children.length !== 0) {
			
			if (itemChildrens[i].classTempName == false) {
				itemObject[localTempName] = new Object();
				getObjectArrayCur(itemChildrens[i], itemObject[localTempName]);
				continue;
			}
			itemObject[classTempName] = new Object();
			getObjectArrayCur(itemChildrens[i], itemObject[classTempName]);
		}else {
			if(itemChildrens[i].className == false) {
				itemObject[localTempName] = itemChildrens[i];
				continue;
			}
			itemObject[classTempName] = itemChildrens[i];
		}
		
	}
}
let item = document.querySelector('body');
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