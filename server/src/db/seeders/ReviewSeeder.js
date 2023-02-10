import { BoardGame, Review, User } from "../../models/index.js"

class ReviewSeeder {
  static async seed() {
    const monopolyGame = await BoardGame.query().findOne({ name: "Monopoly" })
    const sorryGame = await BoardGame.query().findOne({ name: "Sorry" })
    const chessGame = await BoardGame.query().findOne({ name: "Chess" })
    const clueGame = await BoardGame.query().findOne({ name: "Clue" })
    const candyLandGame = await BoardGame.query().findOne({ name: "Candy Land" })
    const connect4Game = await BoardGame.query().findOne({ name: "Connect 4" })

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
      },
      {
        rating: 4,
        comment: "I do play with just me and a grandchild but it is too easy. That is ok for younger children but really three makes is much more challenging! The more the harder which is fun. This game is a great family interactive item. I order/individuals sponsor games for my students for a Christmas gift that is meaningful and brings the family together. This is a favorite gift for my higher level thinking students. Or those with older siblings that won't play some of the other games. It challenges them.",
        userId: user2.id,
        boardGameId: clueGame.id
      },
      {
        rating: 5,
        comment: "CLUE is a classic. It is so much fun to play with the whole family. They have made a few changes since we were kids, but it is essentially the same. We love it. This game was the star of the show for my friend's 40th birthday. Easy to play and fun, definitely worth the price. Perfect for family game nights. It doesn't get boring.",
        userId: user4.id,
        boardGameId: clueGame.id
      },
      {
        rating: 5,
        comment: "This takes me back to my childhood memories and to be able to share that with my kids was fun! We kept it fun by trying more complex ways to play. Am just happy they also enjoyed it as simple as it is for them and to be able to get them to play a board game!!!! I got this for game time with my grandbabies. I have enjoyed this game as much or more with them. They are learning to take turns, colors, winning and losing. Most importantly family time!! Candy Land is a favorite in my home",
        userId: user4.id,
        boardGameId: candyLandGame.id
      },
      {
        rating: 4,
        comment: "My 7 and 8 year olds love this game, it is a game they can play on their own when I'm unable to play with them and they don't need assistance. Also a great game to play with them that doesn't take hours or lose their attention halfway through!",
        userId: user4.id,
        boardGameId: candyLandGame.id
      },
      {
        rating: 1,
        comment: "Let me tell ya, if you're looking for a game that will make you wanna tear your hair out and throw it across the room, look no further than Connect 4. This strategy game is about as challenging as counting to 4. The only thing more predictable than the outcome of a game of Connect 4 is the weather in San Diego. But hey, if you're looking for a game to play with your grandma or your 5-year-old cousin, this is the one for you.",
        userId: user4.id,
        boardGameId: connect4Game.id
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