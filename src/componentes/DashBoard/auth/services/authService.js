const loginUser = ({ username, password }) => {
  return username === "admin" && password === "admin";
};

export default loginUser;
