import type { Message } from "discord.js"

class BaseCommand {
    name: string = ''
    params: string[] = []
    description: string = ''
    additionalInfo: Record<string, any> = {}
    executeFunction: CallableFunction 

    constructor(
        name: string,
        params: string[],
        description: string,
        executeFunction: CallableFunction,
        additionalInfo: Record<string, any> = {},
    ) {
        this.name = name
        this.params = params
        this.description = description
        this.executeFunction = executeFunction
        this.additionalInfo = additionalInfo
    }

    execute(msg: Message) {
        this.executeFunction(msg)
    }

    
}

export default BaseCommand