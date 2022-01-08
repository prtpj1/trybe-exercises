//DOM
const STATES = document.querySelector("#state");
const BTN_SUBMIT = document.querySelector("#btn-submit");
// const BTN_CLEAR_ALL = document.querySelector('#btn-clear-all');

//Listeners
BTN_SUBMIT.addEventListener("click", submit);
// BTN_CLEAR_ALL.addEventListener('click', clearAll);

//Functions

function selectState() {
  let allStates = [
    "Acre",
    "Alagoas",
    "Amapá",
    "Amazonas",
    "Bahia",
    "Ceará",
    "Distrito Federal",
    "Espirito Santo",
    "Goiás",
    "Maranhão",
    "Minas Gerais",
    "Mato Grosso do Sul",
    "Mato Grosso",
    "Pará",
    "Paraíba",
    "Paraná",
    "Pernambuco",
    "Piauí",
    "Rio de Janeiro",
    "Rio Grande do Norte",
    "Rio Grande do Sul",
    "Rondônia",
    "Roraima",
    "Santa Catarina",
    "São Paulo",
    "Sergipe",
    "Tocantins",
  ];

  for (let i = 0; i < allStates.length; i += 1) {
    let option = document.createElement("option");
    option.value = allStates[i];
    option.innerText = allStates[i];
    STATES.appendChild(option);
    // allStates[0]
    // option.selected = true;
  }
}

function submit(event) {
  event.preventDefault();
}

selectState();
//VARIABLES DECLARATION
let inputs = {
  fullName: {
    maxLength: 40,
    required: true,
  },
  email: {
    maxLength: 50,
    required: true,
    type: "email",
  },
  cpf: {
    maxLength: 11,
    required: true,
    type: "number",
  },
  address: {
    maxLength: 200,
    required: true,
  },
  city: {
    maxLength: 28,
    required: true,
  },
  state: {
    type: "select",
    required: true,
  },
  houseType: {
    type: "radio",
    required: true,
  },
  curriculumAbstract: {
    maxLength: 1000,
    required: true,
  },
  role: {
    maxLength: 40,
    required: true,
  },
  roleDesc: {
    maxLength: 500,
    required: true,
  },
  startDate: {
    type: "date",
    required: true,
  },
};
