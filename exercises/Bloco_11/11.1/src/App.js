import './App.css';

const Task = (value) => {
  let tasks = ['Estudar', 'Lavar a roupa', 'Academia'];
  tasks = [...tasks, value];
  return (
    tasks.map((task) => <li>{task}</li>)
  );
}

function App() {
  return Task('Torre de Hanoi');
}

export default App;
