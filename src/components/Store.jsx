import Accordion from "./Accordion"
import styles from '../styles/store.module.css'
import Card from "./Card";
import { useEffect, useState } from "react";
import TypesMenu from "./TypesMenu";
import EffectsMenu from "./EffectsMenu";
import FlavoursMenu from "./FlavoursMenu";
import FilterTag from "./FilterTag";
import { intersectionExists, validateType } from "../utils/utils";
import Item from "./Item";
import { useParams, useLocation, useOutletContext } from "react-router";
import { findObj } from "../utils/utils";

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
    setItems 
  } = useOutletContext();
  
  const [favourites, setFavourites] = useState([]);

  const [filteredItems, setFilteredItems] = useState([])


  const location = useLocation();  
  const { currentItemID } = useParams();  
  const [currentItem, currentItemIndex] = findObj(currentItemID, items);  

  useEffect(() =>
    updateFilteredItems()
    , [selectedType, selectedEffects, selectedFlavours]
  )

  useEffect(()=>{
    selectedEffects.forEach((effect, index)=>
      console.log(`${index+1}. ${effect}`)
    )
  }
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

  function updateFilteredItems(){
    const filteredItemsArr =  
    items.filter(item=>
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

  const renderCards = () => {
    let cards = [];
    if(filterIsApplied()){
      cards = filteredItems.map(item=> 
        <Card setFavourites={setFavourites} itemObj={item} setItems={setItems}/>
      )
    } else if(!filterIsApplied()){
      cards = items.map(item=>
        <Card setFavourites={setFavourites} itemObj={item} setItems={setItems}/>
      )
    }

    return cards
  }

  const renderStoreFront = () =>{
    return(
      <div className={styles.flex}>
        <div className={styles.menu}>
          <Accordion title="Type">
            <TypesMenu typesArray={types} selectedType={selectedType} setSelectedType={setSelectedType}/>
          </Accordion>
          <Accordion title="Effects">
            <EffectsMenu effectsArray={effects} setSelectedEffects={setSelectedEffects} selectedEffects={selectedEffects}  />
          </Accordion>
          <Accordion title="Flavours">
            <FlavoursMenu flavoursArray={flavours} setSelectedFlavours={setSelectedFlavours} selectedFlavours={selectedFlavours}/>
          </Accordion>
        </div>
        <div className={styles.items}>
          <h2>{`Items (${filterIsApplied ? filteredItems.length : items.length})`}</h2>
          {
            (filterIsApplied()) && renderTags()
          }
          <div className={styles.itemGrid}>
            {renderCards()}
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
        currentItemID && <Item itemObj={currentItem} setItems={setItems} />
      }
    </>
  )
}

export default Store