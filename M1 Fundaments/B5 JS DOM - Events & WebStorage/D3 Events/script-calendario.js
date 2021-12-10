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


daysOfMonth();
fridayButton('Sextas-feiras');
holidayButton('Feriados');
coloredFridays(friday);
coloredHoliday(holiday);
