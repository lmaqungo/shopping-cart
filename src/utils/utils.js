

const deleteItemFromArray = (array, item)=>{
    const index = array.indexOf(item);
    const before = array.slice(0, index); 
    const after = array.slice(index+1);
    return before.concat(after);
}

const deleteObjFromArray = (obj, objArray) => {
    const [targetObj, targetObjIndex] = findObj(obj.id, objArray); 
    const before = objArray.slice(0, targetObjIndex); 
    const after = objArray.slice(targetObjIndex+1); 
    return before.concat(after); 
}

const intersectionExists = (filters, target)=> {
    if(filters.length>0){
        return filters.every(filter => target.includes(filter))
    }else{
        return true;
    }
}

const validateType = (filterValue, property)=> {
    if(filterValue){
        return filterValue === property
    }else{
        return true
    }
}

const findObj = (id, objArr) => {
    const obj = objArr.find(objElem => objElem.id === id);
    const objIndex = objArr.findIndex(objElem=> objElem===obj);
    return [obj, objIndex];
} 

// decouple this function

const arrayIncludesObj = (obj, objArr) =>{
    const [targetObj, targetObjIndex] = findObj(obj.id, objArr); 
    if (targetObj){
        return obj.id === targetObj.id; 
    }
    else{
        return false
    }
}

const roundTo = (value, decimals=0) => {
    const factor = 10 ** decimals;
    return Math.round(value * factor) / factor;
}


const tests = () => {
    const num1 = 12
    const num2 = 12.2453
    const num3 = 12.23326

    console.log('test 1')
    console.log(`round off ${num1} to 0 decimal places: ${roundTo(num1)}`)
    console.log('-------------------'); 
    console.log('test 2')
    console.log(`round off ${num2} to 1 decimal places: ${roundTo(num2, 1)}`)
    console.log('-------------------'); 
    console.log('test 3')
    console.log(`round off ${num3} to 2 decimal places: ${roundTo(num3, 2)}`)
    console.log('-------------------'); 
                                                     
}


export { deleteItemFromArray, intersectionExists, findObj, arrayIncludesObj, deleteObjFromArray, validateType, roundTo }