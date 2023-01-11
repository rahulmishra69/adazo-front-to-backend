// creating token and save in cookies

const sendToken = (user, statusCode, res) => {
  const token = user.getJWTToken();

  // options for cookies
  const options = {
    expires: new Date(new Date().getTime()+5*60*1000),
    httpOnly: true,
  };
  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    token,
  });
};

module.exports = sendToken;
