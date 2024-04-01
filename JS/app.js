let input =document.querySelector('#toDoInput')
let button = document.querySelector('#addButton')
let list = document.querySelector('#toDoList')
let arr = []



function deleteItem(index) {
    arr.splice(index, 1);
    renderList();
}

function renderList() {
    list.innerHTML = '';
    for (let i = 0; i < arr.length; i++) {
        list.innerHTML += `<li class="lii">${arr[i]}<button class="delete" onclick="deleteItem(${i})">Delete</button></li>`;
    }
}

button.addEventListener('click', function() {
    let infoValue = input.value;
    if (infoValue !== '') {
        let a = input.value;
        arr.push(a);
        for (let  i= 0;  i< arr.length; i++) {
            list.innerHTML += `<li class ="lii" >${arr[i]}<button class = "delete">Delete</button></li>`
        }
    } else {
        alert('Write something');
    }
});

input.addEventListener('keypress', function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        let a = input.value;
        arr.push(a);
        for (let  i= 0;  i< arr.length; i++) {
            list.innerHTML += `<li class ="lii" >${arr[i]}<button class = "delete">Delete</button></li>`
        }
    }
});


