const itemlist = [];
const form = document.querySelector("#form");
form.addEventListener("submit",(e)=>{
  e.preventDefault();
})
function listcheck(){
  if(itemlist.length==0){
    document.querySelector('#cont').innerHTML=`
    <div>
    <img src="sad.jpg" alt="" style="width:200px;height:200px;margin:10% 30%">
    <h1 style="font-size:20px;color:black;text-align:center;margin:0">Add item to your Todo list</h1>
    </div>
    `
  }
}
listcheck()
function createtodo(){
  const todoinput = document.querySelector(".todoinput");
  if (todoinput.value !== "") {
    addTodo(todoinput.value);
    todoinput.value="";
  }
}
function addTodo(text) {
  const todol = {
    text,
    checked: false,
  };
  itemlist.push(todol);
}
form.addEventListener("submit",mapping)
function mapping(){
  document.querySelector('#cont').innerHTML=itemlist.map((item,index) => 
        `<div class="box" >
              <input type="checkbox" onclick="complet(${index})" id="check${index}" />
              <div class="box1">
                  <div class="box11">
                      <p class="pp" style="color:${item.checked ? "green" :"red"}">${item.text}</p>
                      <button id="delete" onClick="removeItem(${index})"><i class="fa-solid fa-delete-left"></i></button>                   
                  </div>
                  <div class="box12">
                      <hr class="hrr"/>
                  </div>
              </div>
           </div>`
           
           )
}
function removeItem(index){
  if(!itemlist[index].checked){
      if(window.confirm("You haven't Completed the task, Are you sure you want to delete task anyhow?")){
        itemlist.splice(index,1);
      }
  }
  else{
    itemlist.splice(index,1);
  }
  if(itemlist.length==0){
    listcheck()
  }
  else{
    mapping()
  }
}
function complet(index,e){
  const pp=document.querySelector(".pp");
  const hrr=document.querySelector(".hrr");
  itemlist[index].checked=!itemlist[index].checked;
  if(itemlist[index].checked){
    pp.style.color="green";
    hrr.style.backgroundColor="green"
  }
  else{
    pp.style.color="red";
    hrr.style.backgroundColor="red"
  }
}

