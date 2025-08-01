//  function callback(){
//    document.querySelectorAll("h4")[1].innerHTML = ctr;
//    ctr = ctr +1;
//  }

// function deleteTodo(index){
//     const element =document.getElementById("todo-"+index);
//     document.getElementById("ParentTodo").removeChild(element); // or u can use the below one but remove the id ParentToDo
//     //element.parentNode.removeChild(element);

// }
 let ctr = 1;
 function deleteTodo(index){
   const element = document.getElementById("todo-" + index);
   element.parentNode.removeChild(element);
   }
function AddTodo(){
    const inputEl = document.querySelector("input");
    const value = inputEl.value;
    const addEl =document.createElement("div");
    addEl.setAttribute("id", "todo-" + ctr);
    addEl.innerHTML = "<span>" +ctr+'}   ' +value+"</span><button onclick = 'deleteTodo(" + ctr + ")'>delete</button>"
    document.getElementById("ParentTodo").appendChild(addEl);
    ctr = ctr +1;


}


