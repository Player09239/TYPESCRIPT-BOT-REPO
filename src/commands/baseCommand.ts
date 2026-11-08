import type { Message } from "discord.js"
import { Type } from "typescript/unstable/sync"

type Parameter = {
    name: string,
    type: string
}

class BaseCommand {
    name: string = ''
    params: Parameter[] = []
    description: string = ''
    additionalInfo: Record<string, any> = {}
    executeFunction: CallableFunction 

    constructor(
        name: string,
        params: Parameter[],
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
        let args: string[] = msg.content.split(' ')
        args.splice(0, 1)

        for (let i = 0; i <= this.params.length; i++) {
            // Finish
        }
    }

    
}

export default BaseCommand