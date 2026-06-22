import Checkbox from "../Checkbox/Checkbox";

import React from 'react'

const TagsMenu = ({ tags, setTags }) => {
  return (
    <>
        {
            tags.map(
                tag => <Checkbox key={tag.id} tag={tag} setTags={setTags} />
            )
        }
    </>
  )
}

export default TagsMenu