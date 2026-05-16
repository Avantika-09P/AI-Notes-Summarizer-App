// In-memory user storage
const users = [];
let userIdCounter = 1;

const User = {
  findOne: async (filter) => {
    return users.find(user => 
      (filter.email && user.email === filter.email)
    );
  },
  create: async (userData) => {
    const newUser = {
      _id: userIdCounter++,
      ...userData,
      createdAt: new Date()
    };
    users.push(newUser);
    return newUser;
  }
};

module.exports = User;