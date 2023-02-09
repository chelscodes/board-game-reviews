import { BoardGame, User } from "../../models/index.js";

class BoardGameSeeder {
  static async seed() {
    const user1 = await User.query().findOne({ userName: "jdog" })
    const user2 = await User.query().findOne({ userName: "Zgod" })
    const user3 = await User.query().findOne({ userName: "ChelsTastic" })
    const user4 = await User.query().findOne({ userName: "DOMinNaXUN" })
    
    const boardGamesData = [
      {
        name: "Monopoly",
        minPlayers: 2,
        maxPlayers: 4,
        userId: user2.id,
        estimatedPlayTime: 60,
        description: "This game takes forever. Monopoly is a classic board game that simulates real estate trading and ownership. Players move around the board, collecting properties, building houses and hotels, and charging rent to their opponents. The goal of the game is to become the wealthiest player through smart buying, trading, and negotiating tactics. With its blend of luck and strategy, Monopoly has been a staple in family game nights for generations and continues to be enjoyed by players of all ages."
      },
      {
        name: "Sorry",
        minPlayers: 2,
        maxPlayers: 4,
        userId: user1.id,
        estimatedPlayTime: 45,
        description: "Sorry is a fast-paced board game for two to four players. The objective of the game is to be the first player to get all four of your pawns from the start to the finish by drawing cards and moving your pawns along the game board. However, other players can 'bump' your pawns back to the start, forcing you to start over, making the game a test of both strategy and luck. With its simple rules and quick gameplay, Sorry is a great game for families and children, providing hours of fun and friendly competition."
      },
      {
        name: "Chess",
        minPlayers: 2,
        maxPlayers: 2,
        userId: user2.id,
        estimatedPlayTime: 75,
        description: "Chess is a classic two-player strategy game that has been played for centuries. It involves moving pieces, each with unique abilities, around a board with the goal of putting your opponent's king in a position known as 'checkmate'. The game requires careful consideration, calculated risk-taking, and a strong understanding of strategy. Whether played with friends or against AI opponents, Chess is a timeless game that continues to be enjoyed by players of all ages."
      },
      {
        name: "Risk",
        minPlayers: 2,
        maxPlayers: 6,
        userId: user2.id,
        estimatedPlayTime: 180,
        description: "Risk is a strategic board game where players compete to conquer the world. With armies of soldiers, players take turns attacking and defending territories on a map of the world, trying to become the dominant power. The game requires careful planning, strategic thinking, and a willingness to take calculated risks. With a variety of different scenarios and game modes to choose from, Risk is a game that can be enjoyed by players of all skill levels."
      },
      {
        name: "Stratego",
        minPlayers: 2,
        maxPlayers: 2,
        userId: user3.id,
        estimatedPlayTime: 60,
        description: "Stratego is a two-player strategy game that combines elements of chess and battleship. Players take turns moving their army of soldiers and strategic pieces across a battlefield, trying to capture their opponent's flag while protecting their own. With a variety of different units, each with unique abilities, and a clever system of hidden information, Stratego is a game that requires careful planning and smart decision-making."
      },
      {
        name: "Settlers of Catan",
        minPlayers: 3,
        maxPlayers: 4,
        userId: user4.id,
        estimatedPlayTime: 90,
        description: "Settlers of Catan is a popular strategy board game where players build and manage their own settlements on the island of Catan. Players collect resources, trade with one another, and build roads, settlements, and cities in an effort to gain dominance over the island. With a strong emphasis on resource management and negotiation, Settlers of Catan is a game that requires careful planning and strategic thinking."
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

