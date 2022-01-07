import React from "react"
import Header from './Header'
import Content from './Content'
import Total from './Total'

const Course = ({courses}) => {

    const Title = ({text}) => <h1>{text}</h1>

    return (
        <div>
            <Title text='Web Dev Curriculum' />
            {courses.map(course => 
                <div key={course.id}>
                    <Header course={course} />
                    <Content parts={course.parts} />
                    <Total parts={course.parts} />
                </div>
            )}
        </div>
    )
}

export default Course