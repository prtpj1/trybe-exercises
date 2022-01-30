const employeeGenerator = (fullName) => {
  const email = fullName.toLowerCase().split(' ').join('-');
  return { fullName, email: `${email}@trybe.com` };
};
// employeeGenerator('Paulo Porto');

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drummond'), 
    id3: callback('Carla Paiva'), 
  };

  return employees;
};
newEmployees(employeeGenerator);
