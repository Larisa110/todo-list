btn.addEventListener("click", function(){
    let taskText = input.value.trim();

    if(taskText !== ""){
        const li = document.createElement("li");
        li.textContent = taskText;

        const deleteBtn = document.createElement("span");
        deleteBtn.textContent = "❌";
        deleteBtn.classList.add("delete-btn");
        li.appendChild(deleteBtn);
        
        list.appendChild(li);
        input.value = ""; // Сброс введенного текста после добавления задачи
    }
});

list.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete-btn")) {
        event.target.parentElement.remove();
    }
});
