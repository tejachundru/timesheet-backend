import Project, { type ProjectAttributes } from '~/database/entities/Project'
import projectSchema from '../schema/project.schema'
import BaseService from './base.service'

export default class ProjectService extends BaseService {
  constructor() {
    super({ entity: 'project', repository: Project })
  }

  async create(formData: ProjectAttributes): Promise<Project> {
    const value = projectSchema.create.parse(formData)

    const data = await Project.create(value)
    return data
  }
}
