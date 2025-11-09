// Director interface
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// Teacher interface
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Director class
class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

// Teacher class
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

// Function to create employees
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number') {
    return salary < 500 ? new Teacher() : new Director();
  } else if (typeof salary === 'string') {
    const numericSalary = Number(salary.replace('$', ''));
    return numericSalary < 500 ? new Teacher() : new Director();
  } else {
    return new Teacher(); // default fallback
  }
}

function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

// Testing
console.log(createEmployee(200).constructor.name); // Teacher
console.log(createEmployee(1000).constructor.name); // Director
console.log(createEmployee('$500').constructor.name); // Director
