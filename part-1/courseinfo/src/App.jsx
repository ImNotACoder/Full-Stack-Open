const Header = ({course}) => {
  return (
    <div>
      <h1>
        {course}
      </h1>
    </div>
  );
}

const Content = ({parts}) => {
  return (
    <div>
      <Part prop={parts[0]} />
      <Part prop={parts[1]}/>
      <Part prop={parts[2]}/>
    </div>
  );
}

const Part = ({prop}) => {
  return (
      <div>
        <p>
          {prop.part} {prop.exercise}
        </p>
    </div>
  );
}

const Total = ({total}) => {
  return (
    <div>
      <p>
        Number of exercises {total[0].exercise + total[1].exercise + total[2].exercise}
      </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const parts = [
    { part: 'Fundamentals of React', exercise: 10},
    { part: 'Using props to pass data', exercise: 7},
    { part: 'State of a component', exercise: 14}
  ]

  return (
    <div>
      {/* <h1>{course}</h1> */}
      <Header course={course} />
      {/* <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p> */}
      <Content parts={parts} />
      {/* <p>Number of exercises {exercises1 + exercises2 + exercises3}</p> */}
      <Total total={parts}/>
    </div>
  )
}

export default App