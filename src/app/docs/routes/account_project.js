module.exports = {
  '/project': {
    get: {
      tags: ['Account - Project'],
      summary: 'Get All Project',
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
          description: 'Get All Project',
        },
      },
    },
    post: {
      tags: ['Account - Project'],
      summary: 'Create New Project',
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
              },
              required: ['name', 'description'],
            },
          },
        },
      },
      responses: {
        201: {
          description: 'Create New Project',
        },
      },
    },
  },
  '/project/multiple/restore': {
    post: {
      tags: ['Account - Project'],
      summary: 'Multiple Restore Project',
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
          description: 'Multiple Restore Project',
        },
      },
    },
  },
  '/project/multiple/soft-delete': {
    post: {
      tags: ['Account - Project'],
      summary: 'Multiple Soft Delete Project',
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
          description: 'Multiple Soft Delete Project',
        },
      },
    },
  },
  '/project/multiple/force-delete': {
    post: {
      tags: ['Account - Project'],
      summary: 'Multiple Force Delete Project ( Forever )',
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
          description: 'Multiple Force Delete Project ( Forever )',
        },
      },
    },
  },
  '/project/{id}': {
    get: {
      tags: ['Account - Project'],
      summary: 'Get Project By Id',
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
          description: 'Project Id',
        },
      ],
      responses: {
        200: {
          description: 'Get Project By Id',
        },
      },
    },
    put: {
      tags: ['Account - Project'],
      summary: 'Update Data Project',
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
          description: 'Project Id',
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
              },
              required: ['name', 'description'],
            },
          },
        },
      },
      responses: {
        200: {
          description: 'Update Data Project',
        },
      },
    },
  },
  '/project/restore/{id}': {
    put: {
      tags: ['Account - Project'],
      summary: 'Restore Project By Id',
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
          description: 'Project Id',
        },
      ],
      responses: {
        200: {
          description: 'Restore Project By Id',
        },
      },
    },
  },
  '/project/soft-delete/{id}': {
    delete: {
      tags: ['Account - Project'],
      summary: 'Soft Delete Project By Id',
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
          description: 'Project Id',
        },
      ],
      responses: {
        200: {
          description: 'Soft Delete Project By Id',
        },
      },
    },
  },
  '/project/force-delete/{id}': {
    delete: {
      tags: ['Account - Project'],
      summary: 'Force Delete Project By Id ( Forever )',
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
          description: 'Project Id',
        },
      ],
      responses: {
        200: {
          description: 'Force Delete Project By Id ( Forever )',
        },
      },
    },
  },
}
