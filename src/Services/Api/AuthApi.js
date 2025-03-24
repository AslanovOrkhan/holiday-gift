import instance from "./AxiosConfig";
import { endpoints } from "./Constants";

// register
async function register(userData) {
  try {
    const duplicatEmail = await getByEmail(userData.email);
    if (duplicatEmail) {
      return {
        message: " have duplicat email",
        data: null,
      };
    }
    const response = await instance.post(endpoints.users, userData);
    return response.data;
  } catch (error) {
    console.error("Error", error);
    throw error;
  }
}

// login
async function login(credentials) {
  try {
    const user = await getByEmail(credentials.email);
    if (!user) {
      return {
        message: "user not found",
        data: null,
      };
    }
    const validUser = user.password == credentials.password;
    if (validUser) {
      return {
        message: "success",
        data: user,
      };
    } else {
      return {
        message: "wrong email or password",
        data: null,
      };
    }
  } catch (error) {
    console.error("Error", error);
    throw error;
  }
}
// get all users
async function getAll() {
  try {
    const response = await instance.get(endpoints.users);
    return response.data;
  } catch (error) {
    console.error("Error", error);
    throw error;
  }
}
// get one
async function getOne(userId) {
  try {
    const response = await instance.get(`${endpoints.users}/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error", error);
    throw error;
  }
}
// get user by email
async function getByEmail(email) {
  try {
    const response = await instance.get(
      `${endpoints.users} ? email = ${email}`
    );
    return response.data;
  } catch (error) {
    console.error("Error", error);
    throw error;
  }
}
// ban user
async function banUser(userId) {
  try {
    const response = await instance.patch(`${endpoints.users}/${userId}`, {
      isBanned: true,
    });
    return response.data;
  } catch (error) {
    console.error("Error", error);
    throw error;
  }
}
// un ban user
async function unBanUser(userId) {
  try {
    const response = await instance.patch(`${endpoints.users}/${userId}`, {
      isBanned: false,
    });
    return response.data;
  } catch (error) {
    console.error("Error", error);
    throw error;
  }
}
// delete user
async function deleteUser(userId) {
  try {
    const response = await instance.delete(`${endpoints.users}/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error", error);
    throw error;
  }
}
// update user
async function updateUser(userId, updateData) {
  try {
    const response = await instance.put(
      `${endpoints.users}/${userId}`,
      updateData
    );
    return response.data;
  } catch (error) {
    console.error("Error", error);
    throw error;
  }
}
const AuthController = {
  register: register,
  login: login,
  getAll: getAll,
  getOne: getOne,
  getByEmail: getByEmail,
  banUser: banUser,
  unBanUser: unBanUser,
  deleteUser: deleteUser,
  updateUser: updateUser,
};

export default AuthController;
