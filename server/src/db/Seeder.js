/* eslint-disable no-console */
import { connection } from "../boot.js"
import BoardGameSeeder from "./seeders/BoardGameSeeder.js"
import UserSeeder from "./seeders/UserSeeder.js"

class Seeder {
  static async seed() {
    console.log("seeding users...")
    await UserSeeder.seed()

    console.log("seeding board games...")
    await BoardGameSeeder.seed()

    console.log("Done!")
    await connection.destroy()
  }
}

export default Seeder