const CustomTypes = ({of}) => {
  const customTypes = of?.documentation?.customTypes || []

  const tableRows = customTypes.map((type, index) => {

    const lines = type.description.split('\n').map((line, index) =>{
      return ( <p key={index}>{line}</p>)
    })

    return(
      <tr key={index}>
        <td>{type.name}</td>
        <td>{lines}</td>
      </tr>
    )
  })

  return (
    <>
    <h2>Custom Types</h2>
    <table style={{ width: '100%' }}>

      <thead>
        <tr>
          <th>Type</th> 
          <th>Description</th>
        </tr>
      </thead>

      <tbody>
        {tableRows}
      </tbody>
    </table>
    </>
  )
}


export default CustomTypes