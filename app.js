const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const tasks = [];

function addTask() {
  rl.question('Enter a new task: ', (task) => {
    tasks.push(task);
    console.log('Task added!');
    showTasks();
  });
}

function showTasks() {
  console.log('Tasks:');
  tasks.forEach((task, index) => {
    console.log(`${index + 1}. ${task}`);
  });
  rl.prompt();
}

rl.on('line', (input) => {
  if (input === 'add') {
    addTask();
  } else if (input === 'list') {
    showTasks();
  } else if (input === 'exit') {
    rl.close();
  } else {
    console.log('Unknown command. Valid commands: add, list, exit');
    rl.prompt();
  }
});

console.log('Welcome to the ToDo List App!');
rl.prompt();
