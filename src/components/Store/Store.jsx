import Accordion from "../Accordion/Accordion"
import styles from './store.module.css'
import Card from "../Card/Card";
import FilterTag from "../FilterTag/FilterTag";
import TagsMenu from "../TagsMenu/TagsMenu";
import { intersectionExists } from "../../utils/utils";
import Item from "../Item/Item";
import { useParams, useLocation, useOutletContext } from "react-router";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const Store = () => {
  
  const {
    items, 
    setItems,
    activeHeart, 
    tags, 
    setTags, 
    openMenu, 
    setOpenMenu
  } = useOutletContext();

  
  const location = useLocation();  
  const { currentItemID } = useParams();  
  const currentItem = items.find(item => item.id == currentItemID);  
  
  const filteredItems = (array) => array.filter(item=>
    intersectionExists(tags.filter(tag=>tag.isActive).map(activeTag => activeTag.title), item.tags)
  )
  
  const filterIsApplied = () => {
    return tags.filter(tag => tag.isActive).length > 0
  }

  const renderTags = () => {
    return(
      <div className={styles.tags}>
        {
          tags.filter(tag=> tag.isActive).map( tag => <FilterTag tag={tag} setTags={setTags} />)
        }
      </div>
    )
  }

  const renderCards = () => {
    if(activeHeart){
      if(filterIsApplied()){
        return filteredItems(items.filter(item => item.isSaved)).map(item =>
          <Card itemObj={item} setItems={setItems}/>
        )
      } else {
        return items.filter(item => item.isSaved).map(item => 
          <Card itemObj={item} setItems={setItems}/>
        )
      }
    } else {
      if(filterIsApplied()){
        return filteredItems(items).map(item=> 
          <Card itemObj={item} setItems={setItems}/>
        )
      } else{
        return items.map(item=>
          <Card itemObj={item} setItems={setItems}/>
        )
      }
    }
  }

  const calculateLength = () => {
    if(activeHeart){
      if(filterIsApplied()){
        return filteredItems(items.filter(item => item.isSaved)).length
      } else {
        return items.filter(item => item.isSaved).length
      }
    } else{
      if(filterIsApplied()){
        return filteredItems(items).length
      } else {
        return items.length
      }
    }
  }

  const renderStoreFront = () => {
    return(
      <div className={styles.body}>
        <div className={styles.standardMenu}>
          <div className={styles.menu}>
            <Accordion title="Tags" overflow={true}>

              <TagsMenu tags={tags} setTags={setTags} />
            </Accordion>
          </div>
        </div>
        <BurgerMenu className={styles.responsiveMenu} openMenu={openMenu} setOpenMenu={setOpenMenu} >
          <div className={styles.menu}>
            <Accordion title="Tags" overflow={true}>

              <TagsMenu tags={tags} setTags={setTags} />
            </Accordion>
          </div>
        </BurgerMenu>
        <div className={styles.items}>
          <h2 className={styles.itemsHeader} >{`Items (${calculateLength()})`}</h2>
          {
            tags.filter(tag=>tag.isActive).length > 0 && renderTags()
          }
          <div className={styles.itemGrid}>
            {
              renderCards()
            }
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
        currentItemID && <Item itemObj={currentItem} setItems={setItems} />
      }
    </>
  )
}

export default Store