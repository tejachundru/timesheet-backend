import {
  Column,
  DataType,
  DeletedAt,
  ForeignKey,
  Is,
  IsUUID,
  Table,
} from 'sequelize-typescript'
import Base, { type IBaseEntity } from './Base'
import User from './User'

interface TeamEntity extends IBaseEntity {
  deleted_at?: Date | null
  name: string
}

export type TeamAttributes = Omit<
  TeamEntity,
  'id' | 'created_at' | 'updated_at'
>

@Table({ tableName: 'team', paranoid: true })
class Team extends Base {
  @DeletedAt
  @Column
  deleted_at?: Date

  @Column({ allowNull: false })
  name: string

  @Column
  description?: string

  @IsUUID(4)
  @ForeignKey(() => User)
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    allowNull: false,
  })
  team_lead: string
}

export default Team
