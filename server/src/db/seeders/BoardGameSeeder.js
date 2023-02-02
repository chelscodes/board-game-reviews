import { BoardGame } from "../../models/index.js";

class BoardGameSeeder {
  static async seed() {
    const boardGamesData = [
      {
        name: "Monopoly",
        minPlayers: 2,
        maxPlayers: 4,
        estimatedPlayTime: 60,
        description: "This game takes forever."
      },
      {
        name: "Sorry",
        minPlayers: 2,
        maxPlayers: 4,
        estimatedPlayTime: 45,
        description: "A lot of saying sorry."
      },
      {
        name: "Chess",
        minPlayers: 2,
        maxPlayers: 2,
        estimatedPlayTime: 75,
        description: "This game is complicated."
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

