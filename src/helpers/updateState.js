
const updateStateForId = ( arrayState, newElement) => {

    console.log("arrayState", arrayState);
    console.log("newElement", newElement);

    let newArray = arrayState
debugger;
    let indice = arrayState.findIndex(element => element.id === newElement.id);
    newArray[indice] = newElement;
    return newArray;
   
}


export{
    updateStateForId,
}