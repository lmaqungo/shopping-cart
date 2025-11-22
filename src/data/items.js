import { v4 as uuid } from 'uuid'; 
import weedImg from '../assets/weed.png'
import afghanKushImg from '../assets/afghan-kush.png'
import AK47Img from '../assets/ak-47.png'
import amnesiaHazeImg from '../assets/amnesia-haze.png'
import blueDreamImg from '../assets/blue-dream.png'
import blueberryImg from '../assets/blueberry.png'
import bubbleGumImg from '../assets/bubble-gum.png'
import durbanPoisonImg from '../assets/durban-poison.png'
import gelatoImg from '../assets/gelato.png'
import granddaddyPurpleImg from '../assets/granddaddy-purple.png'
import GSCImg from '../assets/gsc.png'
import hinduKushImg from '../assets/hindu-kush.png'
import jackHererImg from '../assets/jack-herer.png'
import mkUltraImg from '../assets/mk-ultra.png'
import northernLightsImg from '../assets/northern-lights.png'
import OGKushImg from '../assets/og-kush.png'
import pineappleExpressImg from '../assets/pineapple-express.png'
import purpleHazeImg from '../assets/purple-haze.png'
import slurricaneImg from '../assets/slurricane.png'
import sourDieselImg from '../assets/sour-diesel.png'
import strawberryCoughImg from '../assets/strawberry-cough.png'
import superLemonHazeImg from '../assets/super-lemon-haze.png'
import whiteWidowImg from '../assets/white-widow.png'
import { roundTo } from '../utils/utils';


  const templateItem = ({ strain, type, effects, flavours, img, price=2.5 }) => ({
    id: uuid(),
    strain: strain, 
    type: type, 
    effects: effects, 
    flavours: flavours,
    img: img, 
    quantity: 1,
    price: price,
    get calculatePrice(){
        const total = this.quantity * this.price;
        return roundTo(total, 2);
    }, 
    isSaved: false, 
    inCart: false
  });

const initialItems =  [
    templateItem({
        strain: 'OG Kush',
        type: 'hybrid', 
        effects: ['hungry', 'relaxed', 'sleepy'], 
        flavours: ['woody', 'pine', 'earthy'], 
        img: OGKushImg, 
        price: 7.45
    }),    
    templateItem({
        strain: 'Purple Haze',
        type: 'sativa', 
        effects: ['creative', 'giggly', 'euphoric'], 
        flavours: ['flowery', 'lavender', 'violet'], 
        img: purpleHazeImg, 
        price: 12
    }),    
    templateItem({
        strain: 'Northern Lights',
        type: 'indica', 
        effects: ['hungry', 'relaxed', 'sleepy'], 
        flavours: ['woody', 'pine', 'earthy'], 
        img: northernLightsImg, 
        price: 8.25
    }),    
    templateItem({
        strain: 'White Widow',
        type: 'hybrid', 
        effects: ['uplifted', 'talkative', 'euphoric'], 
        flavours: ['woody', 'earthy', 'flowery'], 
        img: whiteWidowImg, 
        price: 10
    }),    
    templateItem({
        strain: 'Afghan Kush',
        type: 'indica', 
        effects: ['sleepy', 'hungry', 'relaxed'], 
        flavours: ['woody', 'earthy', 'tar'], 
        img: afghanKushImg, 
        price: 12.2
    }),    
    templateItem({
        strain: 'Girl Scout Cookies',
        type: 'hybrid', 
        effects: ['happy', 'hungry', 'relaxed'], 
        flavours: ['mint', 'earthy', 'sweet'], 
        img: GSCImg, 
        price: 18
    }), 
    templateItem({
        strain: 'Sour Diesel', 
        type: 'hybrid', 
        effects: ['energetic', 'talkative', 'uplifted'], 
        flavours: ['diesel', 'chemical', 'skunk'], 
        img: sourDieselImg, 
        price: 16
    }), 
    templateItem({
        strain: 'Durban Poison', 
        type: 'sativa', 
        effects: ['focused', 'energetic', 'uplifted'], 
        flavours: ['pine', 'earthy', 'sage'], 
        img: durbanPoisonImg, 
        price: 10.5
    }), 
    templateItem({
        strain: 'Pineapple Express', 
        type: 'hybrid', 
        effects: ['happy', 'giggly', 'energetic'], 
        flavours: ['pineapple', 'tropical', 'citrus'], 
        img: pineappleExpressImg, 
        price: 16.2
    }), 
    templateItem({
        strain: 'Gelato', 
        type: 'hybrid', 
        effects: ['relaxed', 'aroused', 'euphoric'], 
        flavours: ['sweet', 'flowery', 'pepper'], 
        img: gelatoImg, 
        price: 22.1
    }), 
    templateItem({
        strain: 'Blueberry', 
        type: 'indica', 
        effects: ['relaxed', 'sleepy', 'happy'], 
        flavours: ['blueberry', 'berry', 'sweet'], 
        img: blueberryImg, 
        price: 14.3
    }), 
    templateItem({
        strain: 'Strawberry Cough', 
        type: 'sativa', 
        effects: ['uplifted', 'energetic', 'happy'], 
        flavours: ['strawberry', 'sweet', 'berry'], 
        img: strawberryCoughImg, 
        price: 5.8
    }), 
    templateItem({
        strain: 'Slurricane', 
        type: 'indica', 
        effects: ['sleepy', 'relaxed', 'hungry'], 
        flavours: ['berry', 'pepper', 'flowery'], 
        img: slurricaneImg, 
        price: 16.3
    }), 
    templateItem({
        strain: 'MK Ultra', 
        type: 'indica', 
        effects: ['sleepy', 'relaxed', 'tingly'], 
        flavours: ['earthy', 'pungent', 'woody'], 
        img: mkUltraImg, 
        price: 21
    }), 
    templateItem({
        strain: 'Blue Dream', 
        type: 'hybrid', 
        effects: ['creative', 'euphoric', 'uplifted'], 
        flavours: ['berry', 'blueberry', 'sweet'], 
        img: blueDreamImg, 
        price: 9.6
    }), 
    templateItem({
        strain: 'AK-47', 
        type: 'hybrid', 
        effects: ['hungry', 'happy', 'talkative'], 
        flavours: ['skunk', 'tobacco', 'earthy'], 
        img: AK47Img, 
        price: 23.5
    }), 
    templateItem({
        strain: 'Granddaddy Purple', 
        type: 'indica', 
        effects: ['sleepy', 'relaxed', 'hungry'], 
        flavours: ['grape', 'berry', 'violet'], 
        img: granddaddyPurpleImg, 
        price: 22.45
    }), 
    templateItem({
        strain: 'Hindu Kush', 
        type: 'indica', 
        effects: ['sleepy', 'relaxed', 'hungry'], 
        flavours: ['earthy', 'woody', 'spicy'], 
        img: hinduKushImg, 
        price: 18.5
    }), 
    templateItem({
        strain: 'Jack Herer', 
        type: 'sativa', 
        effects: ['focused', 'energetic', 'creative'], 
        flavours: ['pine', 'woody', 'earthy'], 
        img: jackHererImg, 
        price: 16.45
    }), 
    templateItem({
        strain: 'Super Lemon Haze', 
        type: 'sativa', 
        effects: ['energetic', 'focused', 'uplifted'], 
        flavours: ['lemon', 'citrus', 'lime'], 
        img: superLemonHazeImg, 
        price: 15.25
    }), 
    templateItem({
        strain: 'Bubble Gum', 
        type: 'hybrid', 
        effects: ['happy', 'relaxed', 'euphoric'], 
        flavours: ['flowery', 'sweet', 'berry'], 
        img: bubbleGumImg, 
        price: 12.65
    }), 
    templateItem({
        strain: 'Amnesia Haze', 
        type: 'sativa', 
        effects: ['giggly', 'euphoric', 'talkative'], 
        flavours: ['citrus', 'lemon', 'lime'], 
        img: amnesiaHazeImg, 
        price: 23.45
    }), 
    
]; 


export default initialItems