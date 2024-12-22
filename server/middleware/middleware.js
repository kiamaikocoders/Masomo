// middleware.js
const myMiddleware = (req, res, next) => {
    console.log('Middleware executed');
    next(); // Call the next middleware or route handler
  };
  
  module.exports = myMiddleware;