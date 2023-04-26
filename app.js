const form = document.querySelector('#form');
var todoList = [];
var gen = document.getElementById('#gen');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const dob = document.getElementById('dob').value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  // console.log(gender)
  const checkboxes = document.querySelectorAll('.checkbox');
  let values = [];
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      values.push(checkbox.value);
    }
  });
  const selectElement = document.getElementById('option');
  const options = selectElement.options;
  let selectoption = [];
  for (let i = 0; i < options.length; i++) {
    if (options[i].selected) {
      selectoption.push(options[i].value);
    }
  }
  const description = document.getElementById('description').value;

  const item = { name, dob, gender, values, selectoption, description };
  todoList.push(item);
  console.log(item);
  event.target.reset();
  displayTodoList();
});
function displayTodoList() {
  const Container = document.getElementById('todo-list');
  Container.innerHTML = '';
  for (let i = 0; i < todoList.length; i++) {
    const item = todoList[i];
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
    <button class="btn delete-button" onclick="deleteItem(${i})"><i class="fa-solid fa-trash"></i></button>
      <button class="btn edit-button" onclick="editItem(${i})"><i class="fa-solid fa-pen-to-square"></i></button>
      <div class="card-content">
      <table>
        <tr>
          <td>Name:</td>
          <td>${item.name}</td>
        </tr>
        <tr>
          <td>Date of Birth:</td>
          <td>${item.dob}</td>
        </tr>
        <tr>
          <td>Gender:</td>
          <td>${item.gender}</td>
        </tr>
        <tr>
          <td>Favorite Food:</td>
          <td>${item.values}</td>
        </tr>
        <tr>
          <td>Favorite Drink:</td>
          <td>${item.selectoption}</td>
        </tr>
        <tr>
          <td>Anything Else:</td>
          <td>${item.description}</td>
        </tr>
        </table>
      </div>
    `;
    Container.appendChild(card);
  }
}

function editItem(index) {
  const item = todoList[index];
  document.getElementById('name').value = item.name;
  document.getElementById('dob').value = item.dob;
  if (item.gender == 'Male') {
    document.getElementById('male').checked = true;
  } else if (item.gender == 'Female') {
    document.getElementById('female').checked = true;
  }
  else if (item.gender == 'Other') {
    document.getElementById('other').checked = true;
  }
  //food
  if (item.values[0] == 'Burger') {
    document.getElementById('burger').checked = true;
  }
  if (item.values[1] == 'Pizza') {
    document.getElementById('pizza').checked = true;
  }
  //option for drink
  if (item.selectoption[0] == 'Soda') {
    document.getElementById('drink1').selected = true;
  }
  if (item.selectoption[1] == 'Apple Juice') {
    document.getElementById('drink2').selected = true;
  }
  if (item.selectoption[2] == 'Glass of Milk') {
    document.getElementById('drink3').selected = true;
  }
  if (item.selectoption[3] == 'Hot Coffee') {
    document.getElementById('drink4').selected = true;
  }
  document.getElementById('description').value = item.description;
  todoList.splice(index, 1);
  displayTodoList();
}

function deleteItem(index) {
  todoList.splice(index, 1);
  displayTodoList();
}
