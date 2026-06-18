import Checkbox from "../Checkbox/Checkbox";

import React from 'react'

const TagsMenu = ({ tagsArray, setSelectedTags, selectedTags }) => {
  return (
    <>
        {
            tagsArray.map(
                tag => <Checkbox key={tag} label={tag} stateArraySetter={setSelectedTags} stateArray={selectedTags} />
            )
        }
    </>
  )
}

export default TagsMenu