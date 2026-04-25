lucide.createIcons();

let todoItem = document.querySelector('.todoItem');
let selectValue = document.querySelector('.order');
let itemTable = document.querySelector('.li');
let history = document.querySelector('.history');
let historyBtn = document.querySelector('#historyBtn');
let validBtn = document.querySelector('#validBtn');

let item = "";
let selectedValue = "";


let addTodo = () => {
    item = todoItem.value;
    selectedValue = selectValue.value;
    if(item !== ''){
        let todoList = document.getElementById('todoList');
        let newTodo = document.createElement('li');
        newTodo.classList.add('itemList');
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('checkBtn');
        let paragraph = document.createElement('p');
        paragraph.textContent = item;
        todoItem.value = '';
        let itemType = document.createElement('section');
        itemType.classList.add('type');
        itemType.textContent = selectedValue;
        if(selectedValue === 'Urgent'){itemType.id = 'urgent'}
        else if(selectedValue === 'Normal'){itemType.id = 'normal'}
        else if(selectedValue === 'Basique'){itemType.id = 'basique'}

        let options = document.createElement('section');
        options.classList.add('opt');

        let deleteBtn = document.createElement('button');
        deleteBtn.classList.add('deleteBtn');
        deleteBtn.innerHTML = 'Delete';
        deleteBtn.addEventListener('click', function(){
            todoList.removeChild(newTodo);
        })

        options.appendChild(deleteBtn);
        newTodo.appendChild(checkbox);
        newTodo.appendChild(paragraph);
        newTodo.appendChild(itemType);
        newTodo.appendChild(options);
        todoList.appendChild(newTodo);

        validBtn.addEventListener('click', function(){
            if(newTodo.firstChild.checked){
                history.querySelector('.listHistory').appendChild(newTodo);
                newTodo.removeChild(options);
                let date = document.createElement('p');
                let currentDate = new Date();
                date.textContent = `${currentDate.getDate()}/${currentDate.getMonth()+1}/${currentDate.getFullYear()} at ${currentDate.getHours()}:${currentDate.getMinutes()}`;
                date.classList.add('date');
                newTodo.appendChild(date);
                todoList.removeChild(newTodo);
            }
        });
    }
}


historyBtn.addEventListener('click', function(){
    history.classList.toggle('active');
});
