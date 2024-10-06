import { useState } from 'react';

const Expandable = ({title, items, path, color}) => {

  const [isExpanded, setExpanded] = useState(false)
  const toggle = () => {
    setExpanded(!isExpanded)
  }

  const nestedExpandables = []
  
  if(items){
    items.forEach(item => {
      nestedExpandables.push(<Expandable title={item.title} items={item.items} key={item.title}></Expandable>)
    })
  }

  return (
    <>
      <div style={{backgroundColor: color, height: '3em', paddingTop: '0.7em', paddingLeft: '0.5em'}}
        onClick={toggle}>
        
        <p style={{margin: '0px'}}>
        {items && items.length? <ExpandArrow isExpanded={isExpanded}/>: <></>}
        {path? <a href={`/?path=/docs/${path}--docs`}>{title}</a> : title}
        </p>
        
      </div>
      <div style={{marginLeft: '2em'}}>{isExpanded && nestedExpandables}</div>
    </>
  )
}

const ExpandArrow = ({isExpanded}) => {
  return (
    <svg style={{height: '1em', width: '1.2em', verticalAlign: 'middle'}}>
    {isExpanded?
    <path d="M11.104 7.354l-5.5 5.5a.5.5 0 01-.708-.708L10.043 7 4.896 1.854a.5.5 0 11.708-.708l5.5 5.5a.5.5 0 010 .708z" fill="currentColor"></path>
    :
    <path d="M1.146 4.604l5.5 5.5a.5.5 0 00.708 0l5.5-5.5a.5.5 0 00-.708-.708L7 9.043 1.854 3.896a.5.5 0 10-.708.708z" fill="currentColor"></path>}
    </svg>
  )
}

const ComponentDependency = ({ of }) => {
  const dependencies = of?.documentation?.dependencies || []
    
  let expandableItems: any[] = []
  
  dependencies.forEach(dependency => {
    expandableItems.push(
      {
        title: dependency.name,
        path: dependency.path,
        items: [
          { title: 'Props', items: dependency.props?.map(prop => ({ title: prop })) },
          { title: 'Slots', items: dependency.slots?.map(slot => ({ title: slot })) },
          { title: 'Emits', items: dependency.emits?.map(emit => ({ title: emit })) },
          { title: 'Exposed', items: dependency.exposed?.map(exp => ({ title: exp })) },
          { title: 'Types', items: dependency.types?.map(type => ({ title: type })) }
        ]}
    )
  });

  const expandableComponents = expandableItems.map( (item, index) => 
    <Expandable title={item.title} key={index} items={item.items} path={item.path} color={'#F6F9FC'}></Expandable>
  )

  return (
    <>
      <h2>Componnent Dependency</h2>
      <div  style={{border: 'solid', borderColor: '#E0E0E0', borderWidth: '1px'}}>
        {expandableComponents}    
      </div>
    </>
    )
}

export default ComponentDependency