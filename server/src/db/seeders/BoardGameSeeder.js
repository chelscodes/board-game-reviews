import { BoardGame } from "../../models/index.js";

class BoardGameSeeder {
    static async seed() {
        const boardGamesData = [
            {
                name: "Monopoly",
                rating: 8
            },
            {
                name: "Sorry",
                rating: 6
            },
            {
                name: "Chess",
                rating: 10
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

