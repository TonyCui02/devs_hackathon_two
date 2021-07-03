import './App.css';
import Tasks from './Tasks';
import { useState } from 'react'
import Container from "@material-ui/core/Container";


const App = () => {
  const [tasks] = useState([
    {
      id: 3928, 
      title: "Implement Registration API",
      developer: "John Doe", 
      score: 4,
      link: "https://wdcc-aspa.atlassian.net/browse/ASPA-34",
    },
    {
      id: 1514, 
      title: "Resolve Reload Bug",
      developer: "Jane Doe", 
      score: 1,
      link: "https://wdcc-aspa.atlassian.net/browse/ASPA-34",
    }, 
    {
      id: 7812, 
      title: "Usability Feedback Report",
      developer: "Destiny Li", 
      score: 5,
      link: "https://wdcc-aspa.atlassian.net/browse/ASPA-34",
    }, 
    {
      id: 3928, 
      title: "Implement Registration API",
      developer: "John Doe", 
      score: 4,
      link: "https://wdcc-aspa.atlassian.net/browse/ASPA-34",
    },
    {
      id: 1514, 
      title: "Resolve Reload Bug",
      developer: "Jane Doe", 
      score: 1,
      link: "https://wdcc-aspa.atlassian.net/browse/ASPA-34",
    }, 
    {
      id: 7812, 
      title: "Usability Feedback Report",
      developer: "Destiny Li", 
      score: 5,
      link: "https://wdcc-aspa.atlassian.net/browse/ASPA-34",
    },
    {
      id: 3928, 
      title: "Implement Registration API",
      developer: "John Doe", 
      score: 4,
      link: "https://wdcc-aspa.atlassian.net/browse/ASPA-34",
    },
    {
      id: 1514, 
      title: "Resolve Reload Bug",
      developer: "Jane Doe", 
      score: 1,
      link: "https://wdcc-aspa.atlassian.net/browse/ASPA-34",
    }, 
    {
      id: 7812, 
      title: "Usability Feedback Report",
      developer: "Destiny Li", 
      score: 5,
      link: "https://wdcc-aspa.atlassian.net/browse/ASPA-34",
    }, 
    {
      id: 3928, 
      title: "Implement Registration API",
      developer: "John Doe", 
      score: 4,
      link: "https://wdcc-aspa.atlassian.net/browse/ASPA-34",
    },
    {
      id: 1514, 
      title: "Resolve Reload Bug",
      developer: "Jane Doe", 
      score: 1,
      link: "https://wdcc-aspa.atlassian.net/browse/ASPA-34",
    }, 
    {
      id: 7812, 
      title: "Usability Feedback Report",
      developer: "Destiny Li", 
      score: 5,
      link: "https://wdcc-aspa.atlassian.net/browse/ASPA-34",
    }

  ])

  return (
    <div className="App">
      <Container alignItems="center">
      <Tasks tasks={tasks}/>
      </Container>
      
    </div>
  );
}

  

export default App;
