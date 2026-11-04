import type { Message } from 'discord.js'
import BaseCommand from '../baseCommand.ts'
import Logger from '../../utils/logger.ts'

function _e(msg: Message) {
    Logger.OK('Command ran')
}

const TestCommand: BaseCommand = new BaseCommand(
    'test',
    [],
    'test command',
    _e
)

export default TestCommand