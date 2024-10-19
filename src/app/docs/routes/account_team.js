module.exports = {
  '/team': {
    get: {
      tags: ['Account - Team'],
      summary: 'Get All Team',
      security: [
        {
          auth_token: [],
        },
      ],
      parameters: [
        {
          $ref: '#/components/parameters/page',
        },
        {
          $ref: '#/components/parameters/pageSize',
        },
        {
          $ref: '#/components/parameters/filtered',
        },
        {
          $ref: '#/components/parameters/sorted',
        },
        {
          $ref: '#/components/parameters/lang',
        },
      ],
      responses: {
        200: {
          description: 'Get All Team',
        },
      },
    },
    post: {
      tags: ['Account - Team'],
      summary: 'Create New Team',
      security: [
        {
          auth_token: [],
        },
      ],
      requestBody: {
        required: true,
        content: {
          'application/x-www-form-urlencoded': {
            schema: {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                },
                description: {
                  type: 'string',
                },
                team_lead: {
                  type: 'string',
                },
              },
              required: ['name', 'description', 'team_lead'],
            },
          },
        },
      },
      responses: {
        201: {
          description: 'Create New Team',
        },
      },
    },
  },
  '/team/multiple/restore': {
    post: {
      tags: ['Account - Team'],
      summary: 'Multiple Restore Team',
      security: [
        {
          auth_token: [],
        },
      ],
      requestBody: {
        required: true,
        content: {
          'application/x-www-form-urlencoded': {
            schema: {
              type: 'object',
              properties: {
                ids: {
                  type: 'string',
                  description: '["id_1", "id_2"]',
                },
              },
              required: ['ids'],
            },
          },
        },
      },
      responses: {
        200: {
          description: 'Multiple Restore Team',
        },
      },
    },
  },
  '/team/multiple/soft-delete': {
    post: {
      tags: ['Account - Team'],
      summary: 'Multiple Soft Delete Team',
      security: [
        {
          auth_token: [],
        },
      ],
      requestBody: {
        required: true,
        content: {
          'application/x-www-form-urlencoded': {
            schema: {
              type: 'object',
              properties: {
                ids: {
                  type: 'string',
                  description: '["id_1", "id_2"]',
                },
              },
              required: ['ids'],
            },
          },
        },
      },
      responses: {
        200: {
          description: 'Multiple Soft Delete Team',
        },
      },
    },
  },
  '/team/multiple/force-delete': {
    post: {
      tags: ['Account - Team'],
      summary: 'Multiple Force Delete Team ( Forever )',
      security: [
        {
          auth_token: [],
        },
      ],
      requestBody: {
        required: true,
        content: {
          'application/x-www-form-urlencoded': {
            schema: {
              type: 'object',
              properties: {
                ids: {
                  type: 'string',
                  description: '["id_1", "id_2"]',
                },
              },
              required: ['ids'],
            },
          },
        },
      },
      responses: {
        200: {
          description: 'Multiple Force Delete Team ( Forever )',
        },
      },
    },
  },
  '/team/{id}': {
    get: {
      tags: ['Account - Team'],
      summary: 'Get Team By Id',
      security: [
        {
          auth_token: [],
        },
      ],
      parameters: [
        {
          in: 'path',
          name: 'id',
          required: true,
          schema: {
            type: 'string',
          },
          description: 'Team Id',
        },
      ],
      responses: {
        200: {
          description: 'Get Team By Id',
        },
      },
    },
    put: {
      tags: ['Account - Team'],
      summary: 'Update Data Team',
      security: [
        {
          auth_token: [],
        },
      ],
      parameters: [
        {
          in: 'path',
          name: 'id',
          required: true,
          schema: {
            type: 'string',
          },
          description: 'Team Id',
        },
      ],
      requestBody: {
        required: true,
        content: {
          'application/x-www-form-urlencoded': {
            schema: {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                },
                description: {
                  type: 'string',
                },
                team_lead: {
                  type: 'string',
                },
              },
              required: ['name', 'description', 'team_lead'],
            },
          },
        },
      },
      responses: {
        200: {
          description: 'Update Data Team',
        },
      },
    },
  },
  '/team/restore/{id}': {
    put: {
      tags: ['Account - Team'],
      summary: 'Restore Team By Id',
      security: [
        {
          auth_token: [],
        },
      ],
      parameters: [
        {
          in: 'path',
          name: 'id',
          required: true,
          schema: {
            type: 'string',
          },
          description: 'Team Id',
        },
      ],
      responses: {
        200: {
          description: 'Restore Team By Id',
        },
      },
    },
  },
  '/team/soft-delete/{id}': {
    delete: {
      tags: ['Account - Team'],
      summary: 'Soft Delete Team By Id',
      security: [
        {
          auth_token: [],
        },
      ],
      parameters: [
        {
          in: 'path',
          name: 'id',
          required: true,
          schema: {
            type: 'string',
          },
          description: 'Team Id',
        },
      ],
      responses: {
        200: {
          description: 'Soft Delete Team By Id',
        },
      },
    },
  },
  '/team/force-delete/{id}': {
    delete: {
      tags: ['Account - Team'],
      summary: 'Force Delete Team By Id ( Forever )',
      security: [
        {
          auth_token: [],
        },
      ],
      parameters: [
        {
          in: 'path',
          name: 'id',
          required: true,
          schema: {
            type: 'string',
          },
          description: 'Team Id',
        },
      ],
      responses: {
        200: {
          description: 'Force Delete Team By Id ( Forever )',
        },
      },
    },
  },
}
