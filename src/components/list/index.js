import axios from "axios";
import React from "react";
import React, { useState, useEffect } from "react";

const List = () => {
  const [token, setToken] = useState("");
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  const getAllTasks = async (token) => {
    try {
      const list = await axios.get(`${process.env.REACT_APP_BASE_URL}/todos`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTodos(list.data);
    } catch (err) {
      console.log(err);
    }
  };

  const addTask = async () => {
    try {
      await axios.post(
        `${process.env.REACT_APP_BASE_URL}/task`,
        {
          task,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
  return <div>list</div>;
};

export default List;
