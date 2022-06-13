/*
    JavaScript - Make To Do List with Local Storage

    PARTS

        1. VARİABLES
        2. LOCAL STORAGE
        3. TO DO LIST FUNCTIONS
            3.1 REMOVE LIST ALERT
            3.2 SELECT LIST ITEM
            3.3 REMOVE LIST ITEM
            3.4 INPUT GET VALUE
            3.5 DOM CREATE ELEMENT
            3.6 ADD NEW LIST ITEM & SET LOCAL STORAGE
            3.7 GET TO DO LIST AFTER PAGE LOADED

    Project Created by: Kadir Kartin / Mid Level Frontend Developer - Love JavaScript
    
    Project Description: Everyone are teaching "How Make To Do List with JavaScript". Yes, me too make this but with localStorage. I know, this project can develop. But my aim only teaching use localStorage with to do list. I hope you like this project. There is JavaScript codes of project in bottom. You can check. 
*/


/* 1. VARIABLES */

let inpValue, listItemDom;
let toDoListDom = document.querySelector('#toDoList');
let alertListDom = document.querySelector('.alertList');
let inputDom = document.querySelector('#task');
let alertSuccess = document.querySelector('#liveToast.success');
let alertErorr = document.querySelector('#liveToast.error');

/* 2. LOCAL STORAGE CHECK & GET LIST */

let isToDoList = {
    active: null,
    toDoList: [],
}
let jsonParse = JSON.parse(localStorage.getItem('toDoList'));
if (jsonParse) {
    isToDoList.active = true;
    isToDoList.toDoList = jsonParse.toDoList;
    localStorage.setItem('toDoList', JSON.stringify(isToDoList));
} else {
    isToDoList.active = false;
    isToDoList.toDoList = [];
}
localStorage.setItem('toDoList', JSON.stringify(isToDoList));

isToDoList.toDoList.length > 0
    ? getToDoList()
    : alertListDom.classList.remove('d-none')


/* 3. TO DO LIST FUNCTIONS */

function stopAlert(dom) {
    dom.classList.add('active')
    setTimeout(() => {
        dom.classList.remove('active')
    }, 2000);
}

/* 3.1 REMOVE LIST ALERT */

function removeListAlert() {
    alertListDom.classList.add('d-none');
    toDoListDom.classList.remove('d-none')
}

/* 3.2 SELECT LIST ITEM */

function selectListItem() {
    let itemIndex, itemHTML;
    itemHTML = this.innerText;
    if (!this.parentElement.classList.contains('active')) {
        itemIndex = isToDoList.toDoList.findIndex((item) => item.itemText === itemHTML)
        isToDoList.toDoList[itemIndex].selected = true;
    } else {
        itemIndex = isToDoList.toDoList.findIndex((item) => item.itemText === itemHTML)
        isToDoList.toDoList[itemIndex].selected = false;
    }
    this.parentElement.classList.toggle('active');
    localStorage.setItem('toDoList', JSON.stringify(isToDoList));
}

/* 3.3 REMOVE LIST ITEM */

function removeListItem() {
    let removeItemHTML = this.parentElement.children[0].innerText;
    let removeItemIndex = isToDoList.toDoList.findIndex(item => item.itemText === removeItemHTML);
    isToDoList.toDoList.splice(removeItemIndex, 1);
    localStorage.setItem('toDoList', JSON.stringify(isToDoList));
    this.parentElement.remove();
    if (isToDoList.toDoList.length === 0) {
        alertListDom.classList.remove('d-none');
        toDoListDom.classList.add('d-none');
    }
}

/* 3.4 INPUT GET VALUE */

inputDom.addEventListener('keyup', inpFunction);

function inpFunction(e) {
    e.keyCode === 13 ? newElement() : inpValue = e.target.value;
}

/* 3.5 DOM CREATE ELEMENT */

function createElementDom(val, sel) {
    let liDom = document.createElement('li');
    let liButton = document.createElement('button');
    let spanDom = document.createElement('span');
    let dateDom = document.createElement('span');
    liButton.innerHTML = '&times;';
    liButton.classList.add('btn', 'bg-transparent')
    liButton.addEventListener('click', removeListItem);
    spanDom.innerHTML = val;
    spanDom.addEventListener('click', selectListItem);
    spanDom.classList.add('list-note');
    dateDom.innerHTML = `${new Date().getDate()}-${new Date().getMonth() + 1}-${new Date().getFullYear()}`;
    dateDom.classList.add('date')
    liDom.classList.add('list-item', sel ? 'active' : false);
    liDom.append(spanDom, dateDom, liButton);
    toDoListDom.append(liDom);
}

/* 3.6 ADD NEW LIST ITEM & SET LOCAL STORAGE */

function newElement() {
    inputDom.value = "";
    inputDom.focus();
    if (inpValue && inpValue[0] !== " ") {
        isToDoList.toDoList.push({ itemText: inpValue, selected: false });
        localStorage.setItem('toDoList', JSON.stringify(isToDoList));
        removeListAlert();
        stopAlert(alertSuccess);
        createElementDom(inpValue)
        inpValue = '';
    } else {
        stopAlert(alertSuccess);
    }
}

/* 3.7 GET TO DO LİST AFTER PAGE LOADED */

function getToDoList() {
    removeListAlert();
    isToDoList.toDoList.forEach(item => {
        createElementDom(item.itemText, item.selected);
    })
}