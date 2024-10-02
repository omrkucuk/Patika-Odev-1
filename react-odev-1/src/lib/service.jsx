import axios from "axios";

export const getData = async (user_id) => {
  try {
    const { data: users } = await axios(
      "https://jsonplaceholder.typicode.com/users/" + user_id
    );

    const { data: posts } = await axios(
      "https://jsonplaceholder.typicode.com/posts/" + user_id
    );

    const birlesmisVeri = {
      ...users,
      posts: posts,
    };

    return birlesmisVeri;
  } catch (e) {
    console.log("Veri çekme hatası", e);
  }
};
