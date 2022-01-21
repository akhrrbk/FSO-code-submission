import React from "react"

const Course = ({course}) => {
    const Header = ({ course }) => <h1>{course.name}</h1>

    const Total = ({ course }) => {
        // console.log(course);

    // const sum = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises + course.parts[3].exercises
    // console.log(sum);
    const summ = course.parts.reduce(function(sum, value){
        return sum + value.exercises
    }, 0)
    
        return(
         <p>Number of exercises {summ}</p>
        ) 
    }

    const Part = ({part}) => {
        return (
            <p>
                {part.name} {part.exercises}
            </p>    
        )
    }

    const Content = ({ course }) => {
        return (
            <div>
                <Part part={course.parts[0]} />
                <Part part={course.parts[1]} />
                <Part part={course.parts[2]} />
                <Part part={course.parts[3]} />
            </div>
        )
    }
    return (
        <div>
            <Header course={course} />
            <Content course={course} />
            <Total course={course} />
        </div>
    )
}

export default Course