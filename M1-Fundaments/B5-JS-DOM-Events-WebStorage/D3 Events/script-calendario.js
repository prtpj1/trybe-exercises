function createDaysOfTheWeek() {
  const weekDays = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ];
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

const dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

function daysOfMonth() {
  let daysL = document.getElementById('days');
  for (let i = 0; i < dezDaysList.length; i += 1) {
    let day = dezDaysList[i];
    let dayItem = document.createElement('li');

    if (day === 24 || day === 31) {
      dayItem.className = 'day holiday';
      dayItem.innerHTML = day;
      daysL.appendChild(dayItem);
    } else if (day === 4 || day === 11 || day === 18) {
      dayItem.className = 'day friday';
      dayItem.innerHTML = day;
      daysL.appendChild(dayItem);
    } else if (day === 25) {
      dayItem.className = 'day holiday friday';
      dayItem.innerHTML = day;
      daysL.appendChild(dayItem);
    } else {
      dayItem.innerHTML = day;
      daysL.appendChild(dayItem);
    }
  }
}

function holidayButton(btnName) {
  let btnContainer = document.querySelector('.buttons-container');
  let newBtn = document.createElement('button');
  newBtn.innerHTML = btnName;
  newBtn.id = 'btn-holiday';
  btnContainer.appendChild(newBtn);
}

function fridayButton(btnName) {
  let btnContainer = document.querySelector('.buttons-container');
  let newBtn = document.createElement('button');

  newBtn.innerHTML = btnName;
  newBtn.id = 'btn-friday';
  btnContainer.appendChild(newBtn);
}

let holiday = [24, 25, 31];
function coloredHoliday() {
  let holidayBtn = document.getElementById('btn-holiday');
  let holidays = document.getElementsByClassName('holiday');
  let bgColor = 'rgb(238,238,238)';
  let newColor = 'lightgreen';

  holidayBtn.addEventListener('click', () => {
    for (let i = 0; i < holidays.length; i += 1) {
      if (holidays[i].style.backgroundColor === newColor) {
        holidays[i].style.backgroundColor = bgColor;
      } else {
        holidays[i].style.backgroundColor = newColor;
      }
    }
  });
}

let friday = [4, 11, 18, 25];
function coloredFridays(friday) {
  let fridayBtn = document.querySelector('#btn-friday');
  let fridays = document.getElementsByClassName('friday');
  let fridayText = '!SEXTOU!';
  fridayText.inner;

  fridayBtn.addEventListener('click', () => {
    for (let i = 0; i < fridays.length; i += 1) {
      if (fridays[i].innerHTML !== fridayText) {
        fridays[i].innerHTML = fridayText;
      } else {
        fridays[i].innerHTML = friday[i];
      }
    }
  });
}

function dayMouseOver() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseover', (event) => {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  });
}

function dayMouseOut() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseout', (event) => {
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200';
  });
}

function newTasks(task) {
  let taskContainer = document.querySelector('.my-tasks');
  let taskName = document.createElement('span');
  taskName.innerHTML = task;
  taskContainer.appendChild(taskName);
}

function taskSubtitle(cor) {
  let taskContainer = document.querySelector('.my-tasks');
  let newTask = document.createElement('div');
  newTask.className = 'task';
  newTask.style.backgroundColor = cor;
  taskContainer.appendChild(newTask);
}

function taskSelect() {
  let taskSelected = document.getElementsByClassName('task selected');
  let task = document.querySelector('.task');

  task.addEventListener('click', (event) => {
    if (taskSelected.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  });
}

function taskDayColor() {
  let taskSelected = document.getElementsByClassName('task selected');
  let day = document.querySelector('#days');
  let task = document.querySelector('.task');
  let taskColor = task.style.backgroundColor;

  day.addEventListener('click', (event) => {
    let targetColor = event.target.style.color;
    if (taskSelected.length > 0 && targetColor !== taskColor) {
      let color = taskSelected[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (taskSelected.length !== 0 && targetColor === taskColor) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
}

function addTask(){
  let inputText = document.querySelector('#task-input');
  let inputBtn = document.querySelector('#btn-add');
  let taskList = document.querySelector('.task-list');
  
  inputBtn.addEventListener('click', () => {
    if (inputText.value.length > 0){
      let li = document.createElement('li');
      li.innerText = inputText.value;
      taskList.appendChild(li);
      inputText.value = '';
    }else {
      alert('Você não digitou nenhum caracter');
    }
  });

  inputText.addEventListener('keyup', (event) => {
    if (inputText.value.length > 0 && event.key === 'Enter') {
      let li = document.createElement('li');
      li.innerText = inputText.value;
      taskList.appendChild(li);
      inputText.value = '';
    }
  });

}

daysOfMonth(); //cria o calendario
fridayButton('Sextas-feiras');
holidayButton('Feriados');
coloredFridays(friday);
coloredHoliday(holiday);
dayMouseOver();
dayMouseOut();
newTasks('Estudar');
taskSubtitle('darkgreen');
taskSelect();
taskDayColor();
addTask();
