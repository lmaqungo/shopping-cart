import Accordion from "../Accordion/Accordion"
import styles from './store.module.css'
import Card from "../Card/Card";
import { useEffect, useState } from "react";
import TypesMenu from "../TypesMenu/TypesMenu";
import EffectsMenu from "../EffectsMenu/EffectsMenu";
import FlavoursMenu from "../FlavoursMenu/FlavoursMenu";
import FilterTag from "../FilterTag/FilterTag";
import { intersectionExists, validateType, findObj } from "../../utils/utils";
import Item from "../Item/Item";
import { useParams, useLocation, useOutletContext } from "react-router";

const Store = () => {
  
  const types = [];
  const effects = [];
  const flavours = [];

  const {
    selectedType, 
    setSelectedType, 
    selectedEffects, 
    setSelectedEffects, 
    selectedFlavours, 
    setSelectedFlavours, 
    items, 
    setItems,  
    savedItems, 
    setSavedItems, 
    activeHeart, 
    setCart
  } = useOutletContext();
  
  const [filteredItems, setFilteredItems] = useState([]); 





  const location = useLocation();  
  const { currentItemID } = useParams();  
  const [currentItem, currentItemIndex] = findObj(currentItemID, items);  

  useEffect(() =>{
    activeHeart ? updateFilteredItems(savedItems) : updateFilteredItems(items)
  }
    , [selectedType, selectedEffects, selectedFlavours, activeHeart]
  )

  function updateTypes() {
    items.forEach(item => !types.includes(item.type) && types.push(item.type))
  }

  function updateEffects(){
    setSelectedType, 
    items.forEach(item=> 
      item.effects.forEach(effect=>
        !effects.includes(effect) && effects.push(effect)
      )
    )
  }

  function updateFlavours(){
    items.forEach(item=> 
      item.flavours.forEach(flavour=>
        !flavours.includes(flavour) && flavours.push(flavour)
      )
    )
  }

  function updateFilteredItems(arr){
    const filteredItemsArr =  
    arr.filter(item=>
      (validateType(selectedType, item.type) && intersectionExists(selectedEffects, item.effects) && intersectionExists(selectedFlavours, item.flavours))
    )
    
    setFilteredItems(filteredItemsArr); 
  }; 

  const renderTypeTags = () =>{
    return(
     <>
     { <FilterTag label={selectedType} />}
     </>
    )
  }

  const renderEffectTags = () => {
    return(
      <>
      {
        selectedEffects.map( effect=>
          <FilterTag label={effect} />
        )
      }
      </>
    )
  }

  const renderFlavourTags = () => {
    return(
      <>
      {
        selectedFlavours.map( flavour=>
          <FilterTag label={flavour} />
        )
      }
      </>
    )
  }

  const filterIsApplied = () => {
    return (selectedType || selectedEffects.length>0 || selectedFlavours.length>0)
  }

  const renderTags = () => {
    return(
      <div className={styles.tags}>
        {selectedType && renderTypeTags()}
        {selectedEffects && renderEffectTags()}
        {selectedFlavours && renderFlavourTags()}
      </div>
    )
  }

  const renderCards = (arr) => {
    let cards = [];
    if(filterIsApplied()){
      cards = filteredItems.map(item=> 
        <Card setSavedItems={setSavedItems} setCart={setCart} itemObj={item} setItems={setItems}/>
      )
    } else if(!filterIsApplied()){
      cards = arr.map(item=>
        <Card setSavedItems={setSavedItems} setCart={setCart} itemObj={item} setItems={setItems}/>
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
          <Accordion title="Type">
            <TypesMenu typesArray={types} selectedType={selectedType} setSelectedType={setSelectedType}/>
          </Accordion>
          <Accordion title="Effects" overflow={true}>
            <EffectsMenu effectsArray={effects} setSelectedEffects={setSelectedEffects} selectedEffects={selectedEffects}  />
          </Accordion>
          <Accordion title="Flavours" overflow={true}>
            <FlavoursMenu flavoursArray={flavours} setSelectedFlavours={setSelectedFlavours} selectedFlavours={selectedFlavours}/>
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

  updateTypes();
  updateEffects();
  updateFlavours();

 
  return (
    <>
      {
        location.pathname === '/store' && renderStoreFront()
      }
      {
        currentItemID && <Item itemObj={currentItem} setItems={setItems} setCart={setCart} setSavedItems={setSavedItems} />
      }
    </>
  )
}

export default Store