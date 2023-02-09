import { BoardGame, User, Review } from "../../models/index.js"

class ReviewSeeder {
  static async seed() {
    const monopolyGame = await BoardGame.query().findOne({ name: "Monopoly" })
    const sorryGame = await BoardGame.query().findOne({ name: "Sorry" })
    const chessGame = await BoardGame.query().findOne({ name: "Chess" })

    const user1 = await User.query().findOne({ userName: "jdog" })
    const user2 = await User.query().findOne({ userName: "Zgod" })
    const user3 = await User.query().findOne({ userName: "ChelsTastic" })
    const user4 = await User.query().findOne({ userName: "DOMinNaXUN" })

    const reviewsData = [
      {
        rating: 4,
        comment: "Monopoly is the bee's knees! It's the cat's pajamas! It's the... okay, you get the point. This game is just plain awesome. It's like a delicious slice of pizza, with all your favorite toppings and none of the guilt. The strategy, the bargaining, the endless pursuit of riches - it's all so addicting. And don't even get me started on the thrill of landing on Boardwalk or Park Place and owning the entire board. It's like the ultimate power trip, and I am here for it. So, gather your friends and family, get out your Monopoly board, and prepare for an epic evening of fun, laughter, and (fake) financial domination.",
        userId: user2.id,
        boardGameId: monopolyGame.id
      },
      {
        rating: 2,
        comment: "Sorry, but this game just doesn't cut it. It's like a potato salad that's been sitting out in the sun for too long. It started off with promise, but now it's just a bland and unsatisfying mess. The slides are slippery, the cards are flimsy, and the pawns are just plain apologetic. In fact, the only thing I'm truly sorry about is wasting my time playing this game. Save your apologies for something more deserving and steer clear of this sorry excuse for a board game.",
        userId: user1.id,
        boardGameId: sorryGame.id
      },
      {
        rating: 1,
        comment: "Monopoly? More like Monotony! This game is about as exciting as watching paint dry on a rainy day. It's a never-ending cycle of rolling the dice, collecting rent, and going to jail. And don't even get me started on the endless negotiations and arguments that come with playing with friends and family. It's like playing a game of chess, but with less strategy and more luck. The only thing that keeps me coming back is the masochistic love for losing all my fake money. But hey, at least I have a neat stack of colorful Monopoly bills to use as kindling for my next bonfire.",
        userId: user1.id,
        boardGameId: monopolyGame.id
      },
      {
        rating: 5,
        comment: "Sorry, not sorry for loving this game! It's the perfect blend of strategy and luck, with just the right amount of excitement and apology. The slides, the cards, the pawns - they all work together to create a game that's just plain fun. Whether you're playing with friends or family, 'Sorry!' is sure to bring a smile to your face and a competitive spark to your eye. So, don't be sorry for choosing this game - just get ready for a wild ride!",
        userId: user2.id,
        boardGameId: sorryGame.id
      },
      {
        rating: 4,
        comment: "Chess is the king of strategy games. It's like a game of mental gymnastics, where every move requires careful consideration and calculated risk. The pieces are beautifully designed, each with their own unique abilities, and the game is always challenging, no matter how many times you play. Whether you're playing against a friend or an AI opponent, Chess is a game that will keep you on your toes and thinking ahead. So, gather your wits and prepare for a battle of wits and strategy - the game of Chess awaits!",
        userId: user3.id,
        boardGameId: chessGame.id
      },
      {
        rating: 2,
        comment: "Chess may be the king of strategy games, but that doesn't mean it's a fun one. It's like trying to solve a Rubik's Cube with only one hand. It's frustrating, tedious, and about as exciting as watching grass grow. The pieces may have unique abilities, but they all seem to be limited in their movements. And let's not even get started on the endless mental gymnastics required to make a single move. Chess may be a classic, but it's also a snooze-fest. Unless you're a masochist who loves a challenge, I'd recommend finding another board game to play.",
        userId: user4.id,
        boardGameId: chessGame.id
      }
    ]

    for (const singleReviewData of reviewsData) {
      const currentReview = await Review.query().findOne(singleReviewData)
      if(!currentReview) {
        await Review.query().insert(singleReviewData)
      }
    }
  }
}

export default ReviewSeeder