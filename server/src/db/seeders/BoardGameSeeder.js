import { BoardGame, User } from "../../models/index.js";

class BoardGameSeeder {
  static async seed() {
    const user1 = await User.query().findOne({ userName: "jdog" })
    const user2 = await User.query().findOne({ userName: "Zgod" })
    const boardGamesData = [
      {
        name: "Monopoly",
        minPlayers: 2,
        maxPlayers: 4,
        estimatedPlayTime: 60,
        description: "This game takes forever.",
        userId: user1.id
      },
      {
        name: "Sorry",
        minPlayers: 2,
        maxPlayers: 4,
        estimatedPlayTime: 45,
        description: "A lot of saying sorry.",
        userId: user2.id
      },
      {
        name: "Chess",
        minPlayers: 2,
        maxPlayers: 2,
        estimatedPlayTime: 75,
        description: "This game is complicated.",
        userId: user1.id
      }
    ]
    for (const singleBoardGameData of boardGamesData) {
      const currentBoardGame = await BoardGame.query().findOne({ name: singleBoardGameData.name })
      if (!currentBoardGame) {
        await BoardGame.query().insert(singleBoardGameData)
      }
    }
  }
}

export default BoardGameSeeder

