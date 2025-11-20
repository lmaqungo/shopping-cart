

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

const arrayIncludesObj = (obj, objArr) =>{
    const [targetObj, targetObjIndex] = findObj(obj.id, objArr); 
    if (targetObj){
        return obj.id === targetObj.id; 
    }
    else{
        return false
    }
}

const tests = () => {
    const target = ["happy", "hungry", "relaxed"]; 
    const emptyFilter = []; 
    const testFilter1 = ["happy", "hungry"];
    const testFilter2 = ["relaxed", "sleepy"]; 

    console.log('test 1')
    console.log(`intersection between [${target}] and [${emptyFilter}]: ${intersectionExists(emptyFilter, target)}`);
    console.log('-------------------'); 
    console.log('test 2')
    console.log(`intersection between [${target}] and [${testFilter1}]: ${intersectionExists(testFilter1, target)}`);
    console.log('-------------------'); 
    console.log('test 3')
    console.log(`intersection between [${target}] and [${testFilter2}]: ${intersectionExists(testFilter2, target)}`);
    console.log('-------------------'); 
    
}

export { deleteItemFromArray, intersectionExists, findObj, arrayIncludesObj, deleteObjFromArray, validateType }