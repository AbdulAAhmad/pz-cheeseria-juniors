import { CheeseType } from "./data/cheeses";

let recentItems : number[] = [];

const addItemToRecentItems = (id : number) : void => {
    const itemIndex = recentItems.indexOf(id);
    if(itemIndex === -1){
        recentItems.unshift(id)
    }
    else{
        recentItems.splice(itemIndex,1)
        recentItems.unshift(id)

    }
}

const getRecentItems = (cheeses : CheeseType[]) : CheeseType[] => {
    return recentItems.map(
    (itemId: number) => 
        cheeses.find((cheese: { id: number; }) => itemId === cheese.id)
    )
} 
    
module.exports = {addItemToRecentItems, getRecentItems};