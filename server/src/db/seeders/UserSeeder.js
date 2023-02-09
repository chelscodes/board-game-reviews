import { User } from "../../models/index.js"

class UserSeeder {
  static async seed() {
    const userData = [
      {
        email: "jarrod@tboard.com",
        cryptedPassword: "password",
        userName: "jdog",
        role: "user"
      },
      {
        email: "zach@yahoo.com",
        cryptedPassword: "notpassword",
        userName: "Zgod",
        role: "user"
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