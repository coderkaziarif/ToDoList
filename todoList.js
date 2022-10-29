const todoForm = document.querySelector(".todo_form");
const todoList = document.querySelector(".todo_list");

todoForm.addEventListener("submit", (e)=>{
   e.preventDefault();
   const todoInput = document.getElementById("myInput").value;
   document.getElementById("myInput").value = "";
   const newLi = document.createElement('li');
   newLi.innerHTML = `
         <span class="text">${todoInput}</span>
         <div>  
            <button class="todo_btn done">Done</button>
            <button class="todo_btn remove">Remove</button>
         </div>
   `;
   todoList.append(newLi);
});

todoList.addEventListener("click", (e)=>{
   // if click on Done button//
   if(e.target.classList.contains("done")){
      const liSpan = e.target.parentNode.previousElementSibling;
      liSpan.style.textDecoration = "line-through";
   }
   // if click on Remove button//
   if(e.target.classList.contains("remove")){
      const removeLi = e.target.parentNode.parentNode;
      removeLi.remove();
   }
   // console.log(e.target.classList);
})