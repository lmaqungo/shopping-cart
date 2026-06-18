import { v4 as uuid } from 'uuid'; 
import blue from '../assets/blue-2X4.png';
import red from '../assets/red-2X4.png';
import green from '../assets/green-2X4.png';
import yellow from '../assets/yellow-2X4.png';


import { roundTo } from '../utils/utils';


  const templateItem = ({ name, tags, price=2.5, colors, isAvailable=true }) => ({
    id: uuid(),
    name: name, 
    tags: tags, 
    selectedCol: 'green', 
    colors: colors,
    get img(){
        return this.colors[this.selectedCol]
    }, 
    quantity: 1,
    price: price,
    get calculatePrice(){
        const total = this.quantity * this.price;
        return roundTo(total, 2);
    }, 
    isSaved: false, 
    inCart: false, 
    isAvailable: isAvailable
  });

const initialItems =  [
    templateItem({
        name: 'Brick 2X4',
        tags: ['rectangular'], 
        colors: {
            'red': red, 
            'blue': blue, 
            'green': green, 
            'yellow': yellow
        },
        price: 7.45
    })
]; 


export default initialItems