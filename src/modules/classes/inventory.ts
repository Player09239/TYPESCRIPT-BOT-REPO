// This is a static class that is supposed to help with inventory management. 

import { BaseItem, type Item } from "./baseItem.ts";

class Inventory {

    static stack(
        inventory: Item[],
        item: Item | BaseItem
    ) {
        if (item instanceof BaseItem) {

        }
    }
}