import { Column, DeletedAt, Table } from 'sequelize-typescript'
import Base, { type IBaseEntity } from './Base'

interface ProjectEntity extends IBaseEntity {
  deleted_at?: Date | null
  name: string
}

export type ProjectAttributes = Omit<
  ProjectEntity,
  'id' | 'created_at' | 'updated_at'
>

@Table({ tableName: 'project', paranoid: true })
class Project extends Base {
  @DeletedAt
  @Column
  deleted_at?: Date

  @Column({ allowNull: false })
  name: string

  @Column
  description?: string
}

export default Project
