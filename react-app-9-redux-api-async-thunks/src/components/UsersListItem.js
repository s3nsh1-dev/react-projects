import React from "react";
import { GoTrash } from "react-icons/go";
import Button from "./Button";
import { removeUser } from "../store";
import { useThunk } from "../hooks/use-thunk";

export default function UsersListItem({ user }) {
  const [doRemoveUser, isLoading, error] = useThunk(removeUser);
  const handleClick = () => {
    // here user means the lone user whose delete button was clicked
    doRemoveUser(user);
  };
  return (
    <div className='mb-2 border rounded'>
      <div className='flex p-2 justify-between items-center cursor-pointer'>
        <div className='flex flex-row item-center justify-between items-center cursor-pointer'>
          <Button loading={isLoading} onClick={handleClick}>
            <GoTrash />
          </Button>
          {error && <div>Error deleting user</div>}
          {user.name}
        </div>
      </div>
    </div>
  );
}
