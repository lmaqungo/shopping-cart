import { useState, useEffect } from 'react';
import Checkbox from '../Checkbox/Checkbox';

const EffectsMenu = ({ effectsArray, setSelectedEffects, selectedEffects }) => {


  return (
    <>
    {
        effectsArray.map(
                effect=>
                    <Checkbox key={effect} label={effect} parent='effects' parentArraySetter={setSelectedEffects} parentArray={selectedEffects} />
        )
    }
    </>
  )
}

export default EffectsMenu