import Accordion from "../Accordion/Accordion"
import styles from './store.module.css'
import Card from "../Card/Card";
import { useEffect, useState } from "react";
import FilterTag from "../FilterTag/FilterTag";
import TagsMenu from "../TagsMenu/TagsMenu";
import { intersectionExists, findObj } from "../../utils/utils";
import Item from "../Item/Item";
import { useParams, useLocation, useOutletContext } from "react-router";

const Store = () => {
  

  const tags = ['rectangular'];

  const {
    items, 
    setItems,  
    savedItems, 
    setSavedItems, 
    activeHeart, 
    selectedTags, 
    setSelectedTags
  } = useOutletContext();
  
  const [filteredItems, setFilteredItems] = useState([]); 




  const location = useLocation();  
  const { currentItemID } = useParams();  
  const [currentItem, currentItemIndex] = findObj(currentItemID, items);  

  useEffect(() =>{
    activeHeart ? updateFilteredItems(savedItems) : updateFilteredItems(items)
  }
    , [selectedTags, activeHeart]
  )


  function updateFilteredItems(arr){
    const filteredItemsArr =  
    arr.filter(item=>
      (intersectionExists(selectedTags, item.tags) )
    )
    
    setFilteredItems(filteredItemsArr); 
  }; 

  const renderItemTags = () => {
    return (
      <>
      {
        selectedTags.map( tag => <FilterTag label={tag} />)
      }
      </>
    )
  }

  const filterIsApplied = () => {
    return selectedTags.length > 0 
  }

  const renderTags = () => {
    return(
      <div className={styles.tags}>
        {selectedTags && renderItemTags()}
      </div>
    )
  }

  const renderCards = (arr) => {
    let cards = [];
    if(filterIsApplied()){
      cards = filteredItems.map(item=> 
        <Card setSavedItems={setSavedItems} itemObj={item} setItems={setItems}/>
      )
    } else if(!filterIsApplied()){
      cards = arr.map(item=>
        <Card setSavedItems={setSavedItems} itemObj={item} setItems={setItems}/>
      )
    }

    return cards
  }

  const calculateLength = (array) => {
    return filterIsApplied() ? filteredItems.length : array.length
  }

  const renderStoreFront = () =>{
    return(
      <div className={styles.body}>
        <div className={styles.menu}>
          <Accordion title="Tags" overflow={true}>

            <TagsMenu tagsArray={tags} setSelectedTags={setSelectedTags} selectedTags={selectedTags} />
          </Accordion>
        </div>
        <div className={styles.items}>
          <h2>{`Items (${activeHeart ? calculateLength(savedItems) : calculateLength(items)})`}</h2>
          {
            (filterIsApplied()) && renderTags()
          }
          <div className={styles.itemGrid}>
            {activeHeart ? renderCards(savedItems) : renderCards(items)}
          </div>
        </div>
      </div>
    )
  }

 
  return (
    <>
      {
        location.pathname === '/store' && renderStoreFront()
      }
      {
        currentItemID && <Item itemObj={currentItem} setItems={setItems} setSavedItems={setSavedItems} />
      }
    </>
  )
}

export default Store