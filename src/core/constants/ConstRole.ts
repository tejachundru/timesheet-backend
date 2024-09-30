const ID_SUPER_ADMIN = '673c0385-d8d3-4f6f-8c42-f53f5a16c234'
const ID_ADMIN = '61b9e035-9289-48e0-9b2f-7ac2f7348266'
const ID_TEAM_LEAD = 'a1649c0f-8578-4905-80bc-78569e58dee6'
const ID_USER = '2dff426e-82ae-458c-91fd-0d4123038a06'

const ROLE_ADMIN = [ID_SUPER_ADMIN, ID_ADMIN]

const TEAM_ADMIN = [...ROLE_ADMIN, ID_TEAM_LEAD]

const ConstRole = {
  ID_SUPER_ADMIN,
  ID_ADMIN,
  ID_TEAM_LEAD,
  ID_USER,
  // role groups
  ROLE_ADMIN,
  TEAM_ADMIN,
}

export default ConstRole
