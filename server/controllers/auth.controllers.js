import {
  addUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../dal/users.dal.js";
import {
  checkCreateUser,
  checkUpdateUser,
  checkUser,
} from "../services/auth.services.js";
import newToken from "../utils/token.js";

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await checkUser(username, password);
    const token = newToken(user);
    await updateUser(
      { _id: user._id },
      { last_login: new Date().toISOString() }
    );
    res.status(200).json({
      token,
      user: {
        id: user._id,
        username: user.username,
        user_type: user.user_type,
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createUser = async (req, res) => {
  try {
    const { username, password, email, user_type } = req.body;
    checkCreateUser(username, password, email, user_type);
    const user = {
      username,
      password,
      email,
      user_type,
      last_login: new Date().toISOString(),
    };
    const newUser = await addUser(user);
    res.status(201).json({ user: newUser });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateuser = async (req, res) => {
  try {
    const { id, username, password, email, user_type } = req.body;

    const update = await checkUpdateUser(
      id,
      username,
      password,
      email,
      user_type
    );
    const user = await updateUser({ _id: id }, update);
    res.status(200).json({ user });
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};

export const deleteuser = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ error: "missing id" });
  }
  const user = await deleteUser({ _id: id });
  res.status(200).json({ message: "user deleted" });
  try {
  } catch (err) {
    res.status(500).json({ error: err, message });
  }
};

export const getuser = async (req, res) => {
  try {
    const { username } = req.body;
    if (!username || typeof username !== "string") {
      res.status(404).json({ error: "missing username or wrong type" });
    }
    const user = await getUser({ username });
    res.status(200).json({ user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await getUsers();
    res.status(200).json({ users });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
