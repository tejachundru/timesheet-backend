module.exports = {
  'Account - Project': {
    type: 'object',
    properties: {
      id: { type: 'string' },
      name: { type: 'string' },
      description: { type: 'string' },
      created_at: { type: 'string', format: 'date' },
      updated_at: { type: 'string', format: 'date' },
      deleted_at: { type: 'string', format: 'date' },
    },
  },
}
