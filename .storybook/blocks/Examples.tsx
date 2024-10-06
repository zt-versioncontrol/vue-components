import { Canvas } from "@storybook/blocks"

export const ExampleGroup = ({ stories, title, description}) => {
  const examples: any = []

  stories?.forEach((story, index) => {
     examples.push((
      <Canvas of={story} key={index}/>
    ))
  })

  let descriptionLines = null
  if(description){
    descriptionLines = description.split('\n').map((line, index) => {
      return (<p key={index}>{line}</p>)
    })
  }

  return (
    <>
    {title &&<h4>{title}</h4>}
    {description && <span>{descriptionLines}</span>}
    {examples}
    </>
  )
}

export const Examples = ({children}) => {

  return (
    <>
    <h2>Examples</h2>
    {children}
    </>
  )
}