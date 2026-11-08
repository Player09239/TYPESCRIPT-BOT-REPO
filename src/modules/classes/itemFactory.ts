// Static class, helps with item creation
import { BaseItem, type Item } from './baseItem.ts'
import TestItem from './items/testItem.ts'


class ItemFactory {
    static nameToClass: Record<string, BaseItem> = {
        'TestItem': new TestItem(1)
    }

    static GenerateClassFromObject(
        object: Item
    ): BaseItem {
        let item: BaseItem = this.nameToClass[object.name]
        item.amount = object.amount
        item.additional = object.additional
        item.name = object.name

        return item
    }
}

export default ItemFactory