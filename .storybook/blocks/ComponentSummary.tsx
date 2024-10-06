const ComponentSummary = ({of}) => {
  const title = of?.documentation?.title || ''
  const summary = of?.documentation?.summary || ''

  const lines = summary.split('\n').map((line, index) =>{
    return ( <p key={index}>{line}</p>)
  })

  return (
    <>
    <h1>{title}</h1>
    <span>
      {lines}
    </span>
    </>
  )
}

export default ComponentSummary