require('dotenv').config()

const config = {
  dbUri: 'mongodb://localhost:27017',
  port: process.env.PORT || 3001,
}

export default config