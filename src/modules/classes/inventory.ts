// This is a static class that is supposed to help with inventory management. 

import { BaseItem, type Item } from "./baseItem.ts";

class Inventory {

    static stack(
        inventory: Item[],
        item: Item | BaseItem
    ): Item[] {
        for (let inventoryItem of inventory) {
            if (item.name == inventoryItem.name) {
                inventoryItem.amount += item.amount
                return inventory
            }
        }
        if (item instanceof BaseItem) {
            inventory.push(item.toObject())
            return inventory
        } else {
            inventory.push(item as Item)
            return inventory
        }
    }

    static take(
        inventory: Item[],
        itemToTake: Item | BaseItem
    ): Item[] {
        for (let inventoryKey in inventory) {
            if (itemToTake.name == inventory[inventoryKey].name) {
                inventory[inventoryKey].amount -= itemToTake.amount
                if (inventory[inventoryKey].amount <= 0) {
                    inventory.splice(Number(inventoryKey), 1)
                }
                return inventory
            }
        }

        return inventory
    }
}

export default Inventory
