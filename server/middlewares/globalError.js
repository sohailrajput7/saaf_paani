const APIError = require("../utils/APIError");

module.exports = (err, req, res, next) => {
  console.log("================= GLOBAL ERROR MIDDLEWARE =================");
  console.log(err);
  err = new APIError(err.message, err.statusCode || 500);

  return res.status(err.statusCode).json({
    status: "failed",
    message: err.message,
  });
};
