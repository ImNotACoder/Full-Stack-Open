const Header = ({course}) => {
  return (
    <div>
      <h1>
        {course.name}
      </h1>
    </div>
  );
}

const Content = ({course}) => {
  return (
    <div>
      {/* <Part part={course.parts[0]} />
      <Part part={course.parts[1]}/>
      <Part part={course.parts[2]}/>
      <Part part={course.parts[3]}/> */}
      {course.parts.map(part => (
        <Part key={part.id} part={part} />
      ))}
    </div>
  );
}

const Part = ({part}) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
}

const Total = ({course}) => {
  // const totalExercises = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises + course.parts[3].exercises
  const totalExercises = course.parts.reduce((sum, part) => sum + part.exercises, 0)
  return (
    <p>
      <b>Number of exercises {totalExercises}</b>
    </p>
  )
}

const Course = ({course}) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course}/>
    </div>
  )
}

const Courses = ({courses}) => {
  return (
    <div>
      {courses.map(course => (
        <Course key={course.id} course={course}/>
        ))}
    </div>
  )
}

export default Courses