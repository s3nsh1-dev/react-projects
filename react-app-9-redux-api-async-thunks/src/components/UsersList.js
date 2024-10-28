import React from "react";
import { useEffect } from "react";
// import { useDispatch } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../store";

export default function UsersList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers()); // fetch users when the component mounts
  }, []);
  return <div>UsersList</div>;
}
