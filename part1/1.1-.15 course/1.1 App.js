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
      <p>{props.part1} {props.exercise1} </p>
      <p>{props.part2} {props.exercise2} </p>
      <p>{props.part3} {props.exercise3} </p>
    </>
  )
}

const Footer = (props) => {
  return (
    <>
        <p>Number of Exercises: {props.exercise1 + props.exercise2 + props.exercise3}</p>
    </>
  )
}

const App = () => {
  
  const course = 'half stack app dev.'
  const part1 = 'fundamentals of react'
  const exercise1 = 10
  const part2 = 'using pros to pass the data'
  const exercise2 = 7
  const part3 = 'state of a component'
  const exercise3= 14
  
  return (
    <>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} exercise1={exercise1} exercise2={exercise2} exercise3={exercise3} />
      <Footer exercise1={exercise1} exercise2={exercise2} exercise3={exercise3} />

    </> 
  );
}

export default App;
