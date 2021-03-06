/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */

const { execSync } = require('child_process')
const NodeEnvironment = require('jest-environment-node')
const { resolve } = require('path')
const { Client } = require('pg')
const { v4: uuid } = require('uuid')

const primsaCli = './node_modules/.bin/prisma'

require('dotenv').config({
  path: resolve(__dirname, '..', '.env.test')
})

class CustomEnvironment extends NodeEnvironment {
  constructor(config) {
    super(config)
    this.schema = `code_schema_${uuid()}`
    console.log('schema', this.schema)
    this.connectionString = `${process.env.DATABASE_URL}${this.schema}`
  }

  setup() {
    process.env.DATABASE_URL = this.connectionString
    this.global.process.env.DATABASE_URL = this.connectionString

    // Rodar migrations
    execSync(`${primsaCli} migrate dev`)
  }

  async teardown() {
    const client = new Client({
      connectionString: this.connectionString
    })
    await client.connect()
    await client.query(`DROP SCHEMA IF EXISTS "${this.schema}" CASCADE`)
    await client.end()
  }
}

module.exports = CustomEnvironment
