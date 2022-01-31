
const checkAuth = require('../middleware/check_auth');

module.exports = (app) => {
    const users = require('../controllers/user.controller.js');
    // Create a new User
    app.post('/api/signup', users.signupUser);
    // Login user
    app.post('/api/login', users.loginUser);
    // get all user list
    app.get('/api/users', checkAuth, users.GetAllUser);
    // get user by id
    app.get('/api/user/:userId', checkAuth, users.GetUserById);
}

