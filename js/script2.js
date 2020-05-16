//просто чтобы все работало по красоте поставим проверки
//colors - массив включающий в себя id всех элементов куда вставляется таблица
let colors = ['#red','#orange','#yellow','#green','#sky','#blue','#purple','#black'];
//переменные таблицы
let ID,ROWS,COLS;
//присваивает переменным поля ввода
let inR = document.querySelector(".inputR");
let inC = document.querySelector(".inputC");
let inID = document.querySelector(".InId");
//по клику на блок - проверить id - построить таблицу если верно
/*document.querySelector(colors[0]).addEventListener('click', CheckID);
document.querySelector(colors[1]).addEventListener('click', CheckID);
document.querySelector(colors[2]).addEventListener('click', CheckID);
document.querySelector(colors[3]).addEventListener('click', CheckID);
document.querySelector(colors[4]).addEventListener('click', CheckID);
document.querySelector(colors[5]).addEventListener('click', CheckID);
document.querySelector(colors[6]).addEventListener('click', CheckID);
document.querySelector(colors[7]).addEventListener('click', CheckID);*/
let all = document.querySelectorAll('div');
all.onclick = function(){
	CheckID();
}
console.log(all);
//читаем и проверяем id 
function CheckID(){
	//переводим строки в числа
	ROWS = +inR.value;
	COLS = +inC.value;
	//переделываем строку в id
	ID = '#'+inID.value;
	//проверка: ок - создаем таблицу
	if (colors.includes(ID)) CreateTable();
	else alert("Такого id нет");
}
//функция создания таблицы в соседнем элементе
function CreateTable(){	
	//проверка на корректность введеных данных
	if (isNaN(ROWS) || isNaN(COLS))	{ alert('Введите числа в Rows и/или Cols'); return;}
	//находим элемент по id
	let Nid = document.querySelector(ID);
	//нахождения соседа элемента
	let SosedNid = Nid.nextElementSibling;
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
function GetTime(){
	//время сейчас
	let now = new Date().getTime();
	//часы и минуты
	let hours = Math.floor((now % (1000*60*60*24))/(1000*60*60)) + 3; //+3 т.к. get time берет время по UTC
	let minutes = Math.floor((now % (1000*60*60))/(1000*60));		  //и разница между нами 3 часа
	//возвращаем название 
	return `tbl${hours}${minutes}`;
}