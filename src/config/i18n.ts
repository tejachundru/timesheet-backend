import { green } from 'colorette'
import i18next from 'i18next'
import i18nextBackend from 'i18next-fs-backend'
import { logger } from './pino'

/**
 * i18n
 */
void i18next.use(i18nextBackend).init(
  {
    lng: 'en',
    fallbackLng: 'en',
    preload: ['en', 'te'],
    ns: ['translation'],
    defaultNS: 'translation',
    backend: {
      loadPath: 'assets/locales/{{lng}}/{{ns}}.json',
    },
  },
  (err, _t) => {
    if (err) {
      console.error(err)
      return
    }

    const msgType = green(`i18next`)
    logger.info(`${msgType} - translation is ready...`)
  }
)

export const i18n = i18next
