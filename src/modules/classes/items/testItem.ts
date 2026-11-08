import { BaseItem } from "../baseItem";

class TestItem extends BaseItem {
    constructor(
        amount: number
    ) {
        super(
            'TestItem',
            amount
        )
    }
}

export default TestItem