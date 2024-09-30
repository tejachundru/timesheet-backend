import { green } from 'colorette'
import { type NextFunction, type Request, type Response } from 'express'
import _ from 'lodash'
import { BaseError, EmptyResultError, ValidationError } from 'sequelize'
import { logger } from '~/config/pino'

function msg(message: string): string {
  return `Sequelize Error: ${message}`
}

async function expressErrorSequelize(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response<any, Record<string, any>> | undefined> {
  if (err instanceof BaseError) {
    if (err instanceof EmptyResultError) {
      return res.status(404).json({
        code: 404,
        message: msg('Data not found'),
      })
    }

    if (err instanceof ValidationError) {
      const errors: any[] = _.get(err, 'errors', [])
      const errorMessage = _.get(errors, '0.message', null)

      const msgType = green('sequelize error:')
      logger.error(`${msgType} - ${errorMessage}`)

      const dataError = {
        code: 400,
        message: errorMessage
          ? `Validation error: ${errorMessage}`
          : err.message,
        errors: errors.reduce<any>((acc, curVal) => {
          acc[curVal.path] = curVal.message
          return acc
        }, {}),
      }

      console.log(dataError.message, dataError.errors)

      return res.status(400).json(dataError)
    }

    return res.status(500).json({
      code: 500,
      message: msg(err.message),
    })
  }

  next(err)
}

export default expressErrorSequelize
