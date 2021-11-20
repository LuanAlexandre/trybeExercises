function personId(fullName) {
  return id = {
    fullName,
    email: `${fullName}@trybe.com`
  };
}

// console.log(personId('Luan_Alexandre'));

const newEmployees = (myFunction) => {
  const employees = {
    id1: personId('Pedro Guerra'),
    id2: personId('Luiza Drummond'),
    id3: personId('Carla Paiva'),
    id4: personId('Renata Liandra')
  }
  return employees;
}

console.log(newEmployees());
