export const addFav =(character)=>{
    return{type: "ADD_FAV" , payload: character}
}

export const removeFav =(id)=>{
    return{type: "REMOVE_FAV" , payload: id}
}

//Nuevo

export const filterCards=(gender)=>{
    return{type: "FILTER", payload: gender}
}
export const orderCards =(orden)=>{
    return {type:"ORDER", payload: orden}
}
export const showAllCards = () => {
    return { type: "SHOW_ALL"};
  };