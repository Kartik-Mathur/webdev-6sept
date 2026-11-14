async function updateTodos() {
  const response = await fetch("/todos");
  const todos = await response.json();
  console.log(todos);
  const list = document.querySelector("#tasks");
  list.innerText = "";

  for (const todo of todos) {
    const li = document.createElement("li");
    li.textContent = todo;
    list.appendChild(li);
  }
}


let btn = document.querySelector('#btn');

btn.addEventListener('click',(e)=>{
    updateTodos();
})
