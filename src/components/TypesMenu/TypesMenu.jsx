import { useState, useEffect } from 'react';
import Checkbox from '../Checkbox/Checkbox';

const TypesMenu = ({ typesArray, selectedType, setSelectedType }) => {

      const [activeType, setActiveType] = useState(selectedType);

      function handleClick(id) {
        setActiveType(activeType === id ? "" : id); 
      }
      
      useEffect(
        ()=>{
          setSelectedType(activeType)
        }
          , [activeType]
      )

  return (
    <>
    {
        typesArray.map(
        type=>
            <Checkbox key={type} label={type} uniClickHandler={handleClick} isClickedUni= {activeType === type} type='uni-click'/>
        )
    }
    </>
  )
}

export default TypesMenu