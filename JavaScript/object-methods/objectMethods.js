/*const person = {
  age: 25,
  salary: 1_000,
};
console.log(person.salary);
*/

const getPerson = () => {
  const randomNumber = Math.random();

  const age = parseInt(20 + randomNumber * 10);
  const salary = parseInt(600 + randomNumber * 2_000);

  const showWeekday = () => {
    const date = new Date();
    const weekday = date.toLocaleString("lt-LT", { weekday: "long" });

    console.log(`Sveiki! Šiandien ${weekday}.`);
  };

  const getWeekday = () => {
    const date = new Date();
    const weekday = date.toLocaleString("lt-LT", { weekday: "long" });

    return `Sveiki! Šiandien ${weekday}.`;
  };

  return {
    age,
    salary,
    getWeekday,
    showWeekday,
  };
  /* 
  return {
    age: age,
    salary: salary
  }*/
};

const person = getPerson();

// const showWeekday = person.showWeekday;

console.log(
  `${person.getWeekday()} Amžius: ${person.age}, alga: ${person.salary}`
);
console.log(person);

const getSalaryPerAge = () => {
  const persons = [];

  for (let i = 0; i < 15; i++) {
    const person = getPerson();

    persons.push(person);
  }

  const totalAge = persons.reduce(
    (previousValue, currentValue) => previousValue + currentValue.age,
    0
  );

  const totalSalary = persons.reduce(
    (previousValue, currentValue) => previousValue + currentValue.salary,
    0
  );

  return (totalSalary / totalAge).toFixed(2);
};

const salaryDividedByAge = getSalaryPerAge();

// !!!
const getAge = () => 25;

const getMyAge = () => {
  return 25;
};
