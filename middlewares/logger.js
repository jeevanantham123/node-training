const logger = (req, _res, next) => {
  console.log("#Logger#\nMethod:", req.method, "\tpath:", req.path);
  next();
};

module.exports = logger;
