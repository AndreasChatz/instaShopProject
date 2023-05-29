const login = async req => {
  let { user } = req;
  const { username, password } = req.params;

  if (!user) {
    user = await Parse.User.logIn(username, password);
  }

  return { objectId: user.id, sessionToken: user.getSessionToken() };
};

export default login;
