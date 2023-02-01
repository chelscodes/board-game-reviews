/* eslint-disable no-console */
import { connection } from "../boot.js"
import BoardGameSeeder from "./seeders/BoardGameSeeder.js"

class Seeder {
  static async seed() {
    console.log("seeding board games")
    await BoardGameSeeder.seed()
    // include individual seed commands here
    console.log("Done!")
    await connection.destroy()
  }
}

export default Seeder