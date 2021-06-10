import './App.css';
import Header from './components/Header' 
import Tasks from './components/Tasks'
import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'doctors appointment',
        day: 'feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'school meeting',
        day: 'feb 6th at 1:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'grocery shoppin',
        day: 'feb 5th at 4:30pm',
        reminder: false,
    },
])

  return (
    <div className="container">
     <Header />
     <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
