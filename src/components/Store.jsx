import Accordion from "./Accordion"
import styles from '../styles/store.module.css'
import { v4 as uuid } from 'uuid' ;
import weedImg from '../assets/weed.png'
import Card from "./Card";
import { useEffect, useState } from "react";
import Checkbox from "./Checkbox";
import TypesMenu from "./TypesMenu";
import EffectsMenu from "./EffectsMenu";
import FlavoursMenu from "./FlavoursMenu";
import FilterTag from "./FilterTag";
import { intersectionExists } from "../utils/utils";
import Item from "./Item";
import { useParams, useLocation, useOutletContext } from "react-router";
import { findObj } from "../utils/utils";

const Store = () => {

  const templateItem = (type='Hybrid', effects=['happy', 'hungry', 'relaxed'], flavours=['earthy', 'flowery', 'pine']) => ({
    id: uuid(),
    strain: 'Default Weed', 
    type: type, 
    effects: effects, 
    flavours: flavours,
    img: weedImg, 
    quantity: 1,
    price: 2.44,
    get calculatePrice(){
      return this.quantity * this.price
    },
  })

  const [items, setItems] = useState([
    templateItem('Indica', ['creative', 'giggly', 'euphoric'], ['mint', 'sweet', 'tar']),   
    templateItem('Sativa'),
    templateItem(),  
    templateItem(),  
    templateItem(),   
  ]);
  
  const types = [];
  const effects = [];
  const flavours = [];

  const {
    selectedType, 
    setSelectedType, 
    selectedEffects, 
    setSelectedEffects, 
    selectedFlavours, 
    setSelectedFlavours 
  } = useOutletContext();
  
  const [favourites, setFavourites] = useState([]);

  const location = useLocation();
  const { currentItemID } = useParams();
  const [currentItem, currentItemIndex] = findObj(currentItemID, items);

  useEffect(()=> console.log(`selected type: ${selectedType}`), 
    [selectedType]
  )
  
  function updateTypes() {
    items.forEach(item => !types.includes(item.type) && types.push(item.type))
  }

  function updateEffects(){
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
    return (selectedType ||selectedEffects.length>0 || selectedFlavours.length>0)
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
    (filterIsApplied()) ? cards = ( items.map(item=>
      (item.type===selectedType || (intersectionExists(selectedEffects, item.effects) || intersectionExists(selectedFlavours, item.flavours))) && <Card id={item.id} key={item.id} strain={item.strain} type={item.type} img={item.img} price={item.price} setFavourites={setFavourites} itemObj={item}/>
    )

    ) : cards = (items.map(item=>
      <Card id={item.id} key={item.id} strain={item.strain} type={item.type} img={item.img} price={item.price} setFavourites={setFavourites} itemObj={item}/>
    ))

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
          <h2>{`Items (${items.length})`}</h2>
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
        currentItemID && <Item strain={currentItem.strain} id={currentItem.id} type={currentItem.type} effects={currentItem.effects} flavours={currentItem.flavours} img={currentItem.img} price={currentItem.calculatePrice} quantity={currentItem.quantity} setItems={setItems} />
      }
    </>
  )
}

export default Store