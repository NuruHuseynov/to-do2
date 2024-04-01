const input = document.querySelector('#toDoInput');
const button = document.querySelector('#addButton');
const list = document.querySelector('#toDoList');
let arr = [];

button.addEventListener('click', addItem);
input.addEventListener('keypress', function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        addItem();
    }
});

function addItem() {
    const infoValue = input.value.trim();
    if (infoValue !== '') {
        arr.push(infoValue);
        renderList();
    } else {
        alert('Write something');
    }
}

function deleteItem(index) {
    arr.splice(index, 1);
    renderList();
}

function editItem(index, newValue) {
    arr[index] = newValue;
    renderList();
}

function renderList() {
    list.innerHTML = '';
    arr.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.classList.add('lii');
        listItem.textContent = item;

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteItem(index));

        const editButton = document.createElement('button');
        editButton.classList.add('edit');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => {
            const newValue = prompt('Edit your to-do:', item);
            if (newValue !== null) {
                editItem(index, newValue.trim());
            }
        });

        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);

        list.appendChild(listItem);
    });
}
