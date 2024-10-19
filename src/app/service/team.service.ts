import Team, { type TeamAttributes } from '~/database/entities/Team'
import teamSchema from '../schema/team.schema'
import BaseService from './base.service'

export default class TeamService extends BaseService {
  constructor() {
    super({ entity: 'team', repository: Team })
  }

  async create(formData: TeamAttributes): Promise<Team> {
    const value = teamSchema.create.parse(formData)

    const data = await Team.create(value)
    return data
  }
}
