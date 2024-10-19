import { type Request, type Response } from 'express'
import { arrayFormatter } from 'expresso-core'
import authorization from '~/app/middleware/authorization'
import { permissionAccess } from '~/app/middleware/permission'
import teamSchema from '~/app/schema/team.schema'
import TeamService from '~/app/service/team.service'
import { env } from '~/config/env'
import ConstRole from '~/core/constants/ConstRole'
import { type IReqOptions } from '~/core/interface/ReqOptions'
import HttpResponse from '~/core/modules/response/HttpResponse'
import { asyncHandler } from '~/core/utils/asyncHandler'
import v1Route from '~/routes/v1'

const route = v1Route
const routePath = `/team`
const newTeamService = new TeamService()

route.get(
  `${routePath}`,
  authorization,
  asyncHandler(async function findAll(req: Request, res: Response) {
    const { lang } = req.getQuery()
    const defaultLang = lang ?? env.APP_LANG
    const options: IReqOptions = { lang: defaultLang }

    const data = await newTeamService.findAll(req)

    const httpResponse = HttpResponse.get(data, options)
    res.status(200).json(httpResponse)
  })
)

route.get(
  `${routePath}/:id`,
  authorization,
  asyncHandler(async function findOne(req: Request, res: Response) {
    const { lang } = req.getQuery()
    const defaultLang = lang ?? env.APP_LANG
    const options: IReqOptions = { lang: defaultLang }

    const { id } = req.getParams()
    const data = await newTeamService.findById(id, options)

    const httpResponse = HttpResponse.get({ data }, options)
    res.status(200).json(httpResponse)
  })
)

route.post(
  `${routePath}`,
  authorization,
  permissionAccess(ConstRole.ROLE_ADMIN),
  asyncHandler(async function create(req: Request, res: Response) {
    const { lang } = req.getQuery()
    const defaultLang = lang ?? env.APP_LANG
    const options: IReqOptions = { lang: defaultLang }

    const formData = req.getBody()
    const data = await newTeamService.create(formData)

    const httpResponse = HttpResponse.created({ data }, options)
    res.status(201).json(httpResponse)
  })
)

route.put(
  `${routePath}/:id`,
  authorization,
  permissionAccess(ConstRole.ROLE_ADMIN),
  asyncHandler(async function update(req: Request, res: Response) {
    const { lang } = req.getQuery()
    const defaultLang = lang ?? env.APP_LANG
    const options: IReqOptions = { lang: defaultLang }

    const { id } = req.getParams()
    const formData = req.getBody()

    const newFormData = teamSchema.create.parse(formData)
    const data = await newTeamService.update(id, newFormData, options)

    const httpResponse = HttpResponse.updated({ data }, options)
    res.status(200).json(httpResponse)
  })
)

route.put(
  `${routePath}/restore/:id`,
  authorization,
  permissionAccess(ConstRole.ROLE_ADMIN),
  asyncHandler(async function restore(req: Request, res: Response) {
    const { lang } = req.getQuery()
    const defaultLang = lang ?? env.APP_LANG
    const options: IReqOptions = { lang: defaultLang }

    const { id } = req.getParams()
    await newTeamService.restore(id, options)

    const httpResponse = HttpResponse.updated({}, options)
    res.status(200).json(httpResponse)
  })
)

route.delete(
  `${routePath}/soft-delete/:id`,
  authorization,
  permissionAccess(ConstRole.ROLE_ADMIN),
  asyncHandler(async function softDelete(req: Request, res: Response) {
    const { lang } = req.getQuery()
    const defaultLang = lang ?? env.APP_LANG
    const options: IReqOptions = { lang: defaultLang }

    const { id } = req.getParams()
    await newTeamService.softDelete(id, options)

    const httpResponse = HttpResponse.deleted({}, options)
    res.status(200).json(httpResponse)
  })
)

route.delete(
  `${routePath}/force-delete/:id`,
  authorization,
  permissionAccess(ConstRole.ROLE_ADMIN),
  asyncHandler(async function forceDelete(req: Request, res: Response) {
    const { lang } = req.getQuery()
    const defaultLang = lang ?? env.APP_LANG
    const options: IReqOptions = { lang: defaultLang }

    const { id } = req.getParams()
    await newTeamService.forceDelete(id, options)

    const httpResponse = HttpResponse.deleted({}, options)
    res.status(200).json(httpResponse)
  })
)

route.post(
  `${routePath}/multiple/restore`,
  authorization,
  permissionAccess(ConstRole.ROLE_ADMIN),
  asyncHandler(async function multipleRestore(req: Request, res: Response) {
    const { lang } = req.getQuery()
    const defaultLang = lang ?? env.APP_LANG
    const options: IReqOptions = { lang: defaultLang }

    const formData = req.getBody()
    const arrayIds = arrayFormatter(formData.ids)
    await newTeamService.multipleRestore(arrayIds, options)

    const httpResponse = HttpResponse.updated({}, options)
    res.status(200).json(httpResponse)
  })
)

route.post(
  `${routePath}/multiple/soft-delete`,
  authorization,
  permissionAccess(ConstRole.ROLE_ADMIN),
  asyncHandler(async function multipleSoftDelete(req: Request, res: Response) {
    const { lang } = req.getQuery()
    const defaultLang = lang ?? env.APP_LANG
    const options: IReqOptions = { lang: defaultLang }

    const formData = req.getBody()
    const arrayIds = arrayFormatter(formData.ids)
    await newTeamService.multipleSoftDelete(arrayIds, options)

    const httpResponse = HttpResponse.deleted({}, options)
    res.status(200).json(httpResponse)
  })
)

route.post(
  `${routePath}/multiple/force-delete`,
  authorization,
  permissionAccess(ConstRole.ROLE_ADMIN),
  asyncHandler(async function multipleForceDelete(req: Request, res: Response) {
    const { lang } = req.getQuery()
    const defaultLang = lang ?? env.APP_LANG
    const options: IReqOptions = { lang: defaultLang }

    const formData = req.getBody()
    const arrayIds = arrayFormatter(formData.ids)
    await newTeamService.multipleForceDelete(arrayIds, options)

    const httpResponse = HttpResponse.deleted({}, options)
    res.status(200).json(httpResponse)
  })
)
