
class item {
    data;
    id =0;
    static count = 0;
    constructor(data){
       item.count++;
        this.id=item.count;
        this.data =`<div class="item shadow" id="${this.id}">
        <span style="margin-left:10px">${data}</span>
        <div style="margin-left: auto;">
        <input class="small" type="button" onclick="item.checked(this)" value="&check;"  style="background: lightgreen; " >
        <input class="small" type="button" onclick="item.checked(this)" value="&#x2715" style="background: coral;" ></div></div>
        `;

    }


    static  checked=(button)=>{
    button.parentElement.parentElement.remove()
    toDolist.allTasks =  toDolist.allTasks.filter(e => e.id != button.parentElement.parentElement.id); 

     }
}
class toDolist{
    static allTasks = [new item("do your work"),new item("play some games")];
    static loc = document.getElementsByClassName("tasks")[0];
    
static fill(){
    toDolist.loc.innerHTML= "";
    toDolist.allTasks.forEach(element => {
        toDolist.loc.innerHTML+= element.data;
    });
}

    }
    

class toDoForm{
   static add = document.getElementById("add");
   static taskName = document.getElementById("input");
  
    constructor(){

}
    static addTask(){     
  
  toDolist.allTasks.push(new item(toDoForm.taskName.value));
  toDoForm.taskName.value = "";
  toDolist.fill()

    }
}
//run
toDoForm.add.addEventListener("click", toDoForm.addTask);
toDolist.fill()

//toDoForm.add