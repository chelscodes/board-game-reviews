import { User } from "../../models/index.js"

class UserSeeder {
  static async seed() {
    const userData = [
      {
        email: "jarrod@tboard.com",
        cryptedPassword: "password",
        userName: "jdog"
      },
      {
        email: "zach@yahoo.com",
        cryptedPassword: "notpassword",
        userName: "Zgod"
      },
      {
        email: "chelsea@board.com",
        cryptedPassword: "password",
        userName: "ChelsTastic"
      },
      {
        email: "xun@hacker.com",
        cryptedPassword: "notpassword",
        userName: "DOMinNaXUN"
      }
      
    ]
    
    for(const singleUserData of userData){
      const currentUser = await User.query().findOne({ email: singleUserData.email })
      if(!currentUser){
        await User.query().insert(singleUserData)
      }
    }
  }
}

export default UserSeeder