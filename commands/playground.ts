import { EmailSchema } from '#validators/base'
import { BaseCommand, args } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'
import vine from '@vinejs/vine'

export default class Playground extends BaseCommand {
  static commandName = 'playground'
  static description = 'Test your code here'

  static options: CommandOptions = {}

  @args.string()
  declare email: string

  async run() {
    this.logger.info('Hello world from "Playground"')

    const validEmail = await vine.validate({
      schema: EmailSchema,
      data: this.email,
    })

    this.logger.info(validEmail)
  }
}
