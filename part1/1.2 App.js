import logo from './logo.svg';
import './App.css';

const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
} 

const Content = (props) => {
  return (
    <>
      <p>{props.parts[0].part} {props.parts[0].exercise} </p>
      <p>{props.parts[1].part} {props.parts[1].exercise} </p>
      <p>{props.parts[2].part} {props.parts[2].exercise} </p>
    </>
  )
}

const Footer = (props) => {
  return (
    <>
        <p>Number of Exercises: {props.parts[0].exercise + props.parts[1].exercise + props.parts[2].exercise}</p>
    </>
  )
}

const App = () => {
  
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        part: 'Fundamentals of React',
        exercise: 10
      },
      {
        part: 'Using props to pass data',
        exercise: 7
      },
      {
        part: 'State of a component',
        exercise: 14
      }
    ]
  }
  
  return (
    <>
      <Header course={course.name} />

      <Content parts={course.parts} />
      
      <Footer parts={course.parts} />

    </> 
  );
}

export default App;
