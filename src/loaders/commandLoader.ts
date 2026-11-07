import type BaseCommand from "../commands/baseCommand.ts";
import Logger from "../utils/logger.ts";

const commandPaths: string[] = [
    '../commands/prefix/test.ts',
    '../commands/prefix/coins.ts'
]
export default async function loadCommands(): Promise<Map<string, BaseCommand>> {
    let commands: Map<string, BaseCommand> = new Map()

    for (const path of commandPaths) {
        Logger.DEBUG(`Attempting to load ${path}`)

        const module = await import(path)
        const command: BaseCommand = module.default

        if (command) {
            commands.set(command.name, command)
            Logger.OK(`Loaded ${command.name}. (Path: ${path})`)
        } else {
            Logger.WARN(`Loading failed for ${path}`)
        }
    }

    return commands
}