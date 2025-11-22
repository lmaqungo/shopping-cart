import { v4 as uuid } from 'uuid'; 
import weedImg from '../assets/weed.png'
import { roundTo } from '../utils/utils';


  const templateItem = ({ strain, type, effects, flavours }) => ({
    id: uuid(),
    strain: strain, 
    type: type, 
    effects: effects, 
    flavours: flavours,
    img: weedImg, 
    quantity: 1,
    price: 2.44,
    get calculatePrice(){
        const total = this.quantity * this.price;
        return roundTo(total, 2);
    }, 
    isSaved: false, 
    inCart: false
  });

const initialItems =  [
    templateItem({strain: 'OG Kush',
                type: 'hybrid', 
                effects: ['hungry', 'relaxed', 'sleepy'], 
                flavours: ['woody', 'pine', 'earthy']
            }),    
    templateItem({strain: 'Purple Haze',
                  type: 'sativa', 
                  effects: ['creative', 'giggly', 'euphoric'], 
                  flavours: ['flowery', 'lavender', 'violet']
                }),    
    templateItem({strain: 'Northern Lights',
                  type: 'indica', 
                  effects: ['hungry', 'relaxed', 'sleepy'], 
                  flavours: ['woody', 'pine', 'earthy']
                }),    
    templateItem({strain: 'White Widow',
                  type: 'hybrid', 
                  effects: ['uplifted', 'talkative', 'euphoric'], 
                  flavours: ['woody', 'earthy', 'flowery']
                }),    
    templateItem({strain: 'Afghan Kush',
                  type: 'indica', 
                  effects: ['sleepy', 'hungry', 'relaxed'], 
                  flavours: ['woody', 'earthy', 'tar']
                }),    
    templateItem({strain: 'Girl Scout Cookies',
                  type: 'hybrid', 
                  effects: ['happy', 'hungry', 'relaxed'], 
                  flavours: ['mint', 'earthy', 'sweet']
                }), 
    templateItem({
        strain: 'Sour Diesel', 
        type: 'hybrid', 
        effects: ['energetic', 'talkative', 'uplifted'], 
        flavours: ['diesel', 'chemical', 'skunk']
    }), 
    templateItem({
        strain: 'Durban Poison', 
        type: 'sativa', 
        effects: ['focused', 'energetic', 'uplifted'], 
        flavours: ['pine', 'earthy', 'sage']
    }), 
    templateItem({
        strain: 'Pineapple Express', 
        type: 'hybrid', 
        effects: ['happy', 'giggly', 'energetic'], 
        flavours: ['pineapple', 'tropical', 'citrus']
    }), 
    templateItem({
        strain: 'Gelato', 
        type: 'hybrid', 
        effects: ['relaxed', 'aroused', 'euphoric'], 
        flavours: ['sweet', 'flowery', 'pepper']
    }), 
    templateItem({
        strain: 'Blueberry', 
        type: 'indica', 
        effects: ['relaxed', 'sleepy', 'happy'], 
        flavours: ['blueberry', 'berry', 'sweet']
    }), 
    templateItem({
        strain: 'Strawberry Cough', 
        type: 'sativa', 
        effects: ['uplifted', 'energetic', 'happy'], 
        flavours: ['strawberry', 'sweet', 'berry']
    }), 
    templateItem({
        strain: 'Slurricane', 
        type: 'indica', 
        effects: ['sleepy', 'relaxed', 'hungry'], 
        flavours: ['berry', 'pepper', 'flowery']
    }), 
    templateItem({
        strain: 'MK Ultra', 
        type: 'indica', 
        effects: ['sleepy', 'relaxed', 'tingly'], 
        flavours: ['earthy', 'pungent', 'woody']
    }), 
    templateItem({
        strain: 'Blue Dream', 
        type: 'hybrid', 
        effects: ['creative', 'euphoric', 'uplifted'], 
        flavours: ['berry', 'blueberry', 'sweet']
    }), 
    templateItem({
        strain: 'AK-47', 
        type: 'hybrid', 
        effects: ['hungry', 'happy', 'talkative'], 
        flavours: ['skunk', 'tobacco', 'earthy']
    }), 
    templateItem({
        strain: 'Granddaddy Purple', 
        type: 'indica', 
        effects: ['sleepy', 'relaxed', 'hungry'], 
        flavours: ['grape', 'berry', 'violet']
    }), 
    templateItem({
        strain: 'Hindu Kush', 
        type: 'indica', 
        effects: ['sleepy', 'relaxed', 'hungry'], 
        flavours: ['earthy', 'woody', 'spicy']
    }), 
    templateItem({
        strain: 'Jack Herer', 
        type: 'sativa', 
        effects: ['focused', 'energetic', 'creative'], 
        flavours: ['pine', 'woody', 'earthy']
    }), 
    templateItem({
        strain: 'Super Lemon Haze', 
        type: 'sativa', 
        effects: ['energetic', 'focused', 'uplifted'], 
        flavours: ['lemon', 'citrus', 'lime']
    }), 
    templateItem({
        strain: 'Bubble Gum', 
        type: 'hybrid', 
        effects: ['happy', 'relaxed', 'euphoric'], 
        flavours: ['flowery', 'sweet', 'berry']
    }), 
    templateItem({
        strain: 'Amnesia Haze', 
        type: 'sativa', 
        effects: ['giggly', 'euphoric', 'talkative'], 
        flavours: ['citrus', 'lemon', 'lime']
    }), 
    
]; 


export default initialItems