const { User } = require("../../models");

class UserService {
  async addUser(data, options = {}) {
    return new Promise(async (resolve, reject) => {
      let user = await User.findOne({ where: { email: data.email }, options });
      if (user) {
        user = await user.update({ name: data.name }, options);
      } else {
        user = await User.create(
          {
            name: data.name,
            email: data.email,
          },
          options
        );
      }
      resolve({ status: true, data: user });
    });
  }
}

module.exports = new UserService();
