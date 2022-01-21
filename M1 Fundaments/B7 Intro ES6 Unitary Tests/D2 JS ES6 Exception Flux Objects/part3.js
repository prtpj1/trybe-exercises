const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function chosePeriod(lesson, shift, period) {
  lesson[shift] = period;
}

function listKeys(obj) {
  const keys = Object.keys(obj);
  console.log(keys);
}

function objSize(obj) {
  const size = Object.keys(obj).length;
  console.log(size);
}

function listValues(obj) {
  const values = Object.values(obj);
  console.log(values);
}

chosePeriod(lesson2, 'turno', 'noite');
// listKeys(lesson3);
// objSize(lesson2);
// listValues(lesson1);

const allLessons = {};
Object.assign(allLessons, {lesson1, lesson2, lesson3});
console.log(allLessons);

function totalStudents(obj){
	let total = 0;
  const key = Object.keys(obj);

  for(let i = 0; i < key.length; i+=1){
    const currentKey = key[i];
    total += obj[currentKey].numeroEstudantes;
  }
  return total;
}

console.log(totalStudents(allLessons));
