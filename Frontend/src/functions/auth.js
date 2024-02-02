import axios from "axios";

export const currentUser = async (userId) => {
    return await axios.post(
    `${import.meta.env.VITE_URL_API}/api/user/current-user`,
    {userId},
    {
      withCredentials: true,
    }
  );
};

export const currentAdmin = async (userId) => {
    return await axios.post(
    `${import.meta.env.VITE_URL_API}/api/user/current-admin`,
    {userId},
    {
      withCredentials: true,
    }
  );
};
