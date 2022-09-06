const getUsers = (req, res) => {
  res.send({ users: "All users" });
};

module.exports = { getUsers };
