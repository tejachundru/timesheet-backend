'use strict'

import { DataTypes, QueryInterface } from 'sequelize'

export async function up(
  queryInterface: QueryInterface,
  Sequelize: typeof DataTypes
) {
  await queryInterface.createTable('time_sheet_entry', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
    },
    created_at: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updated_at: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    deleted_at: {
      type: Sequelize.DATE,
    },
    user_id: {
      allowNull: false,
      type: Sequelize.UUID, // user id
      defaultValue: Sequelize.UUIDV4,
    },
    project_id: {
      allowNull: false,
      type: Sequelize.UUID, // project id
      defaultValue: Sequelize.UUIDV4,
      references: {
        model: 'project',
        key: 'id',
      },
    },
    date: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW(),
    },
    work_type: {
      allowNull: false,
      type: Sequelize.ENUM('WFH', 'WFO'),
      defaultValue: 'WFH',
    },
    duration: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    description: {
      allowNull: false,
      type: Sequelize.TEXT,
    },
  })
}
