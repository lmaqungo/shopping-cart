import { useState, useEffect } from 'react'
import Checkbox from './Checkbox'

const FlavoursMenu = ({ flavoursArray, setSelectedFlavours, selectedFlavours }) => {
  return (
    <>
    {
        flavoursArray.map(
        flavour=>
            <Checkbox key={flavour} label={flavour} parent='flavours' parentArraySetter={setSelectedFlavours} parentArray={selectedFlavours}/>
        )
    }
    </>
  )
}

export default FlavoursMenu