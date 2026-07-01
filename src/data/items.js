import brick2x4Black from '../assets/brick-2x4/black.png';
import brick2x4Blue from '../assets/brick-2x4/blue.png';
import brick2x4Green from '../assets/brick-2x4/green.png';
import brick2x4Red from '../assets/brick-2x4/red.png';
import brick2x4White from '../assets/brick-2x4/white.png';
import brick2x4Yellow from '../assets/brick-2x4/yellow.png';

import brick2x2Black from '../assets/brick-2x2/black.png';
import brick2x2Blue from '../assets/brick-2x2/blue.png';
import brick2x2Green from '../assets/brick-2x2/green.png';
import brick2x2Red from '../assets/brick-2x2/red.png';
import brick2x2White from '../assets/brick-2x2/white.png';
import brick2x2Yellow from '../assets/brick-2x2/yellow.png';

import brick1x1Black from '../assets/brick-1x1/black.png';
import brick1x1Blue from '../assets/brick-1x1/blue.png';
import brick1x1Green from '../assets/brick-1x1/green.png';
import brick1x1Red from '../assets/brick-1x1/red.png';
import brick1x1White from '../assets/brick-1x1/white.png';
import brick1x1Yellow from '../assets/brick-1x1/yellow.png';

import brick1x2Black from '../assets/brick-1x2/black.png'; 
import brick1x2Blue from '../assets/brick-1x2/blue.png'; 
import brick1x2Green from '../assets/brick-1x2/green.png'; 
import brick1x2Red from '../assets/brick-1x2/red.png'; 
import brick1x2White from '../assets/brick-1x2/white.png'; 
import brick1x2Yellow from '../assets/brick-1x2/yellow.png'; 

import brick1x4Black from '../assets/brick-1x4/black.png'
import brick1x4Blue from '../assets/brick-1x4/blue.png'
import brick1x4Green from '../assets/brick-1x4/green.png'
import brick1x4Red from '../assets/brick-1x4/red.png'
import brick1x4White from '../assets/brick-1x4/white.png'
import brick1x4Yellow from '../assets/brick-1x4/yellow.png'

import plate1x2Black from '../assets/plate-1x2/black.png'
import plate1x2Blue from '../assets/plate-1x2/blue.png'
import plate1x2Green from '../assets/plate-1x2/green.png'
import plate1x2Red from '../assets/plate-1x2/red.png'
import plate1x2White from '../assets/plate-1x2/white.png'
import plate1x2Yellow from '../assets/plate-1x2/yellow.png'

import plate1x4Black from '../assets/plate-1x4/black.png'
import plate1x4Blue from '../assets/plate-1x4/blue.png'
import plate1x4Green from '../assets/plate-1x4/green.png'
import plate1x4Red from '../assets/plate-1x4/red.png'
import plate1x4White from '../assets/plate-1x4/white.png'
import plate1x4Yellow from '../assets/plate-1x4/yellow.png'

import plate2x4Black from '../assets/plate-2x4/black.png'
import plate2x4Blue from '../assets/plate-2x4/blue.png'
import plate2x4Green from '../assets/plate-2x4/green.png'
import plate2x4Red from '../assets/plate-2x4/red.png'
import plate2x4White from '../assets/plate-2x4/white.png'
import plate2x4Yellow from '../assets/plate-2x4/yellow.png'

import roofTile1x2Black from '../assets/roofTile-1x2/black.png'
import roofTile1x2Blue from '../assets/roofTile-1x2/blue.png'
import roofTile1x2Green from '../assets/roofTile-1x2/green.png'
import roofTile1x2Red from '../assets/roofTile-1x2/red.png'
import roofTile1x2White from '../assets/roofTile-1x2/white.png'
import roofTile1x2Yellow from '../assets/roofTile-1x2/yellow.png'

import roofTile2x2Black from '../assets/roofTile-2x2/black.png'
import roofTile2x2Blue from '../assets/roofTile-2x2/blue.png'
import roofTile2x2Green from '../assets/roofTile-2x2/green.png'
import roofTile2x2Red from '../assets/roofTile-2x2/red.png'
import roofTile2x2White from '../assets/roofTile-2x2/white.png'
import roofTile2x2Yellow from '../assets/roofTile-2x2/yellow.png'

import rounded1x1Black from '../assets/rounded-1x1/black.png'
import rounded1x1Blue from '../assets/rounded-1x1/blue.png'
import rounded1x1Green from '../assets/rounded-1x1/green.png'
import rounded1x1Red from '../assets/rounded-1x1/red.png'
import rounded1x1White from '../assets/rounded-1x1/white.png'
import rounded1x1Yellow from '../assets/rounded-1x1/yellow.png'

import roundedPlate1x1Black from '../assets/rounded-plate-1x1/black.png'
import roundedPlate1x1Blue from '../assets/rounded-plate-1x1/blue.png'
import roundedPlate1x1Green from '../assets/rounded-plate-1x1/green.png'
import roundedPlate1x1Red from '../assets/rounded-plate-1x1/red.png'
import roundedPlate1x1White from '../assets/rounded-plate-1x1/white.png'
import roundedPlate1x1Yellow from '../assets/rounded-plate-1x1/yellow.png'

  const templateItem = ({ id, name, tags, price=2.5, colors, isSaved=false, inCart=false, quantity=1 }) => ({
    id: id, 
    name: name, 
    tags: tags, 
    selectedColor: 'yellow', 
    colors: colors, 
    quantity: quantity,
    price: price,
    isSaved: isSaved, 
    inCart: inCart, 
    isAvailable: true
  });

const initialItems =  [
    templateItem({
        id: 0,
        name: 'Brick 2x4',
        tags: ['rectangular'], 
        colors: {
            'red': brick2x4Red, 
            'blue': brick2x4Blue, 
            'green': brick2x4Green, 
            'yellow': brick2x4Yellow, 
            'black': brick2x4Black, 
            'white': brick2x4White
        },
        inCart: true, 
        quantity: 4,
        price: 0.24
    }),
    templateItem({
        id: 1,
        name: 'Brick 2x2',
        tags: ['rectangular'], 
        colors: {
            'red': brick2x2Red, 
            'blue': brick2x2Blue, 
            'green': brick2x2Green, 
            'yellow': brick2x2Yellow, 
            'black': brick2x2Black, 
            'white': brick2x2White
        },
        price: 0.15
    }),
    templateItem({
        id: 2,
        name: 'Brick 1x1',
        tags: ['rectangular'], 
        colors: {
            'red': brick1x1Red, 
            'blue': brick1x1Blue, 
            'green': brick1x1Green, 
            'yellow': brick1x1Yellow, 
            'black': brick1x1Black, 
            'white': brick1x1White
        },
        price: 0.09
    }),
    templateItem({
        id: 3,
        name: 'Brick 1x2',
        tags: ['rectangular'], 
        colors: {
            'red': brick1x2Red, 
            'blue': brick1x2Blue, 
            'green': brick1x2Green, 
            'yellow': brick1x2Yellow, 
            'black': brick1x2Black, 
            'white': brick1x2White
        },
        price: 0.12
    }),
    templateItem({
        id: 4,
        name: 'Brick 1x4',
        tags: ['rectangular'], 
        colors: {
            'red': brick1x4Red, 
            'blue': brick1x4Blue, 
            'green': brick1x4Green, 
            'yellow': brick1x4Yellow, 
            'black': brick1x4Black, 
            'white': brick1x4White
        },
        price: 0.17
    }),
    templateItem({
        id: 5,
        name: 'Plate 1x2',
        tags: ['plate'], 
        colors: {
            'red': plate1x2Red, 
            'blue': plate1x2Blue, 
            'green': plate1x2Green, 
            'yellow': plate1x2Yellow, 
            'black': plate1x2Black, 
            'white': plate1x2White
        },
        price: 0.11, 
        isSaved: true,
    }),
    templateItem({
        id: 6,
        name: 'Plate 1x4',
        tags: ['plate'], 
        colors: {
            'red': plate1x4Red, 
            'blue': plate1x4Blue, 
            'green': plate1x4Green, 
            'yellow': plate1x4Yellow, 
            'black': plate1x4Black, 
            'white': plate1x4White
        },
        price: 0.12
    }),
    templateItem({
        id: 7,
        name: 'Plate 2x4',
        tags: ['plate'], 
        colors: {
            'red': plate2x4Red, 
            'blue': plate2x4Blue, 
            'green': plate2x4Green, 
            'yellow': plate2x4Yellow, 
            'black': plate2x4Black, 
            'white': plate2x4White
        },
        inCart: true, 
        quantity: 3, 
        price: 0.16
    }),
    templateItem({
        id: 8,
        name: 'Roof tile 1x2',
        tags: ['triangular'], 
        colors: {
            'black': roofTile1x2Black, 
            'blue': roofTile1x2Blue, 
            'green': roofTile1x2Green, 
            'red': roofTile1x2Red, 
            'white': roofTile1x2White,
            'yellow': roofTile1x2Yellow, 
        },
        price: 0.11
    }),
    templateItem({
        id: 9,
        name: 'Roof tile 2x2',
        tags: ['triangular'], 
        colors: {
            'black': roofTile2x2Black, 
            'blue': roofTile2x2Blue, 
            'green': roofTile2x2Green, 
            'red': roofTile2x2Red, 
            'white': roofTile2x2White,
            'yellow': roofTile2x2Yellow, 
        },
        price: 0.11
    }),
    templateItem({
        id: 10,
        name: 'Rounded 1x1',
        tags: ['rounded'], 
        colors: {
            'black': rounded1x1Black, 
            'blue': rounded1x1Blue, 
            'green': rounded1x1Green, 
            'red': rounded1x1Red, 
            'white': rounded1x1White,
            'yellow': rounded1x1Yellow, 
        },
        price: 0.09, 
        isSaved: true
    }),
    templateItem({
        id: 11,
        name: 'Rounded plate 1x1',
        tags: ['rounded', 'plate'], 
        colors: {
            'black': roundedPlate1x1Black, 
            'blue': roundedPlate1x1Blue, 
            'green': roundedPlate1x1Green, 
            'red': roundedPlate1x1Red, 
            'white': roundedPlate1x1White,
            'yellow': roundedPlate1x1Yellow, 
        },
        price: 0.06
    }),
    
]; 


export default initialItems