import { v4 as uuid } from 'uuid'; 
import blue from '../assets/blue-2X4.png';
import red from '../assets/red-2X4.png';
import green from '../assets/green-2X4.png';
import yellow from '../assets/yellow-2X4.png';





  const templateItem = ({ id, name, tags, price=2.5, colors, isAvailable=true }) => ({
    id: id, 
    name: name, 
    tags: tags, 
    selectedColor: 'green', 
    colors: colors, 
    quantity: 1,
    price: price,
    isSaved: false, 
    inCart: false, 
    isAvailable: isAvailable
  });

const initialItems =  [
    templateItem({
        id: 0,
        name: 'Brick 2X4',
        tags: ['rectangular'], 
        colors: {
            'red': red, 
            'blue': blue, 
            'green': green, 
            'yellow': yellow
        },
        price: 7.45
    }), 
    templateItem({
        id: 1,
        name: 'Brick 2X4',
        tags: ['rectangular'], 
        colors: {
            'red': red, 
            'blue': blue, 
            'green': green, 
            'yellow': yellow
        },
        price: 7.45
    }),
    templateItem({
        id: 2,
        name: 'Brick 2X4',
        tags: ['rectangular'], 
        colors: {
            'red': red, 
            'blue': blue, 
            'green': green, 
            'yellow': yellow
        },
        price: 7.45
    }), 
    templateItem({
        id: 3,
        name: 'Brick 2X4',
        tags: ['rectangular'], 
        colors: {
            'red': red, 
            'blue': blue, 
            'green': green, 
            'yellow': yellow
        },
        price: 7.45
    }),
]; 


export default initialItems