import React from 'react'

const Header = ({course}) => {
    return (
        <div>
            <ul>
                {course.map((a, i) => (
                    <li key={i}>
                        <h2>{a.name}</h2>
                        <ul>
                            {a.parts.map((b, y) => (
                                <li key={y}>
                                    <h4>{b.name} {b.exercises}</h4>
                                </li>
                            ))}
                            <li>total of {a.parts.reduce((sum, exerc) => sum + exerc.exercises, 0)} exercises</li>
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Header