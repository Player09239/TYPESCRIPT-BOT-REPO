// This is a static class that is supposed to help with inventory management. 

import { BaseItem, type Item } from "./baseItem.ts";

class Inventory {

    static stack(
        inventory: Item[],
        item: Item | BaseItem
    ) {
        for (let inventoryItem of inventory) {
            if (item.name == inventoryItem.name) {
                inventoryItem.amount += item.amount
                return
            }
        }
        if (item instanceof BaseItem) {
            inventory.push(item.toObject())
            return
        } else if (item instanceof Item) {
            inventory.push(item)
            return
        }
    }
}

export default Inventory
