"Use Strict";

const httpStatusCodes = require("http-status-codes");

exports.pageNotFoundError = (req, res) => {
  let errorCode = httpStatusCodes.NOT_FOUND;
  // res.status(errorCode);
  res.render("error");
};
exports.internalServerError = (error, req, res, next) => {
  let errorCode = httpStatusCodes.INTERNAL_SERVER_ERROR;
  console.log(`ERROR occurred: ${error.stack}`);
  res.status(errorCode);
  res.send(`${errorCode} | Sorry, application not working!`);
};
