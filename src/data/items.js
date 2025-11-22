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
]; 


export default initialItems