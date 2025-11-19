

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
        return false;
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
    const obj = {id:789, str:"caterpillar"}; 

    const objs = [
        {id:123, str:"abracadabra"},
        {id:456, str:"banana"},
        {id:789, str:"caterpillar"},
    ]

    console.log(`array after deletion:`); 
    console.table(objs); 
    console.log('array after deletion:');
    console.table(deleteObjFromArray(obj, objs));

}


export { deleteItemFromArray, intersectionExists, findObj, arrayIncludesObj, deleteObjFromArray }