type Item = {
    name: string,
    amount: number,
    additional: Record<string, string | number | boolean>
}

class BaseItem {
    name: string = ''
    amount: number = 0
    additional: Record<string, string | number | boolean> = {}

    constructor(
        name: string,
        amount: number,
        additional: Record<string, string | number | boolean> = {}
    ) {
        this.name = name
        this.amount = amount
        this.additional = additional
    }

    toObject(): Item {
        return {
            name: this.name,
            amount: this.amount,
            additional: this.additional
        }
    }
}

export { BaseItem }
export type { Item }