module.exports = {
  'Account - Team': {
    type: 'object',
    properties: {
      id: { type: 'string', format: 'uuid' },
      name: { type: 'string', description: 'Name of Team' },
      description: { type: 'string', description: 'Description of Team' },
      team_lead: {
        type: 'string',
        description: 'Lead userId of Team',
        format: 'uuid',
      },
      created_at: { type: 'string', format: 'date' },
      updated_at: { type: 'string', format: 'date' },
      deleted_at: { type: 'string', format: 'date' },
    },
  },
}
