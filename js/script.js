//просто чтобы все работало по красоте поставим проверки
//colors - массив включающий в себя id всех элементов куда вставляется таблица
let colors = ['#red','#orange','#yellow','#green','#sky','#blue','#purple','#black'];

//присваивает переменным поля ввода
let inR = document.querySelector(".inputR");
let inC = document.querySelector(".inputC");
let inID = document.querySelector(".InId");
let button = document.querySelector("button");

//подтверждая введенные данные, строим таблицу
//в соседнем элементе по щелчку на элементе с введеным id
button.onclick = function(){

	//переводим строки в числа
	let ROWS = +inR.value;
	let COLS = +inC.value;
	//переделываем строку в id
	let ID = '#'+inID.value;

	//проверка на корректность введеных данных
	if (isNaN(ROWS) || isNaN(COLS))	alert('Введите числа в Rows и/или Cols');
	if (!colors.includes(ID)) alert("Такого id нет");

	//вывод в консоль(для себя)
	console.log(ROWS);
	console.log(COLS);
	console.log(ID);

	//находим элемент по id
	let Nid = document.querySelector(ID);

	//нахождения соседа элемента
	let SosedNid = Nid.nextElementSibling;

	//функция создания таблицы в соседнем элементе
	function CreateTable(){
		//создаем тэг table
		let table = document.createElement('table');
		table.id = GetTime();
		//Цикл создания строк
		for (var i = 0; i < ROWS; i++ ) {		
			//создаем тэг tr
			let tr = document.createElement('tr');
			//Цикл создания столбов
			for (var j = 0; j < COLS; j++ ){
				//создаем тэг td
				let td = document.createElement('td');
				//вставляет в строку
				tr.appendChild(td);
			}
			//вставляем строку в таблицу
			table.appendChild(tr);
		}
		//добавляет к соседу id элемента таблицу
		SosedNid.appendChild(table);
	}
	//при нажатии на элемент с данным ID выполнить функцию построения таблицы
	document.querySelector(ID).addEventListener('click', CreateTable);
}
//функция для создания id для таблицы
function GetTime(){
	//время сейчас
	let now = new Date().getTime();
	//часы и минуты
	let hours = Math.floor((now % (1000*60*60*24))/(1000*60*60)) + 3; //+3 т.к. get time берет время по UTC
	let minutes = Math.floor((now % (1000*60*60))/(1000*60));		  //и разница между нами 3 часа
	//возвращаем название 
	return `tbl${hours}${minutes}`;
}