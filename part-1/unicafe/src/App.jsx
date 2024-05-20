import { useState } from 'react'

const Header = (props) => {
  return (
    <h1>{props.text}</h1>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const History = (props) => {
  if (props.allClicks === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <Statistics good={props.good} neutral={props.neutral} bad={props.bad} />
  )
}

const StatisticLine = (props) => {
  return (
    <p>{props.text} {props.value}</p>
  )
}

const Statistics = (props) => {
  let total = props.good + props.bad + props.neutral
  let net = props.good - props.bad
  return (
    <div>
      <StatisticLine text="good" value={props.good} />
      <StatisticLine text="neutral" value={props.neutral} />
      <StatisticLine text="bad" value={props.bad} />
      <StatisticLine text="all" value={total} />
      <StatisticLine text="average" value={net / total} />
      <StatisticLine text="positive" value={`${(props.good / total) * 100} %`} />
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState(0)

  const handleGoodClick = () => {
    setAll(allClicks + 1)
    setGood(good + 1);
  }

  const handleNeutralClick = () => {
    setAll(allClicks + 1)
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setAll(allClicks + 1)
    setBad(bad + 1)
  }

  return (
    <div>
      <Header text="give feedback" />
      <Button handleClick={handleGoodClick} text="Good" />
      <Button handleClick={handleNeutralClick} text="Neutral" />
      <Button handleClick={handleBadClick} text="Bad" />
      <Header text="Statistics" />
      <History allClicks={allClicks} good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App