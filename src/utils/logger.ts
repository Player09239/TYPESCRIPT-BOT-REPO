import chalk from 'chalk'

export default class Logger {
    static levels: Record<string, string> = {
        'OK': chalk.greenBright('OK    :'),
        'ERROR': chalk.red('ERR   :'),
        'WARN': chalk.yellowBright('WARN  :'),
        'DEBUG': chalk.blueBright('DBUG  :')
    }

    static OK(text: string): void {
        const date: Date = new Date()
        const time: string = date.toUTCString()

        console.log(`${chalk.gray(time)} ${this.levels['OK']} ${text}`)
    }

    static ERROR(text: string): void {
        const date: Date = new Date()
        const time: string = date.toUTCString()

        console.log(`${chalk.gray(time)} ${this.levels['ERROR']} ${text}`)
    }

    static WARN(text: string): void {
        const date: Date = new Date()
        const time: string = date.toUTCString()

        console.log(`${chalk.gray(time)} ${this.levels['WARN']} ${text}`)
    }

    static DEBUG(text: string): void {
        const date: Date = new Date()
        const time: string = date.toUTCString()

        console.log(`${chalk.gray(time)} ${this.levels['DEBUG']} ${text}`)
    }
}