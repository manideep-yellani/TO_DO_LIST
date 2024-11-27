
let dol=[
  {name:'cook dinner',date:'27-12-2024'},
  {name:'sleep',date:'27-12-2024'}
];
let storedList= JSON.parse(localStorage.getItem('to-do-list'))||[];
dol=dol.concat(storedList);

function listElementRender(){
  let listElement=document.querySelector('.js-container');
  listElement.innerHTML="";
  for(let i=0;i<dol.length;i++){

    listElement.innerHTML+=`<div>${dol[i].name}</div>
    <div>${dol[i].date}</div>
    <button class="delete-button js-delete-button button" onclick="dol.splice(${i},1);listElementRender();">Delete</button>`;
    console.log(listElement);
  }
}

listElementRender();
function add(){
  newTask={name:document.querySelector('.to-do-input').value,
    date:document.querySelector('.date-input').value};
  dol.push(newTask);
  listElementRender();
}