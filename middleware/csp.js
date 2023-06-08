const helmet = require("helmet");

function cspMiddleware(req, res, next) {
  const cspConfig = {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'"],
      objectSrc: ["'none'"],
    },
  };

  helmet.contentSecurityPolicy(cspConfig)(req, res, next);
}

module.exports = cspMiddleware;
