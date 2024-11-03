import React from "react";
import { GoTrash } from "react-icons/go";
import Button from "./Button";
import { removeUser } from "../store";
import { useThunk } from "../hooks/use-thunk";
import ExpandablePanel from "./ExpandablePanel";

export default function UsersListItem({ user }) {
  const [doRemoveUser, isLoading, error] = useThunk(removeUser);
  const handleClick = () => {
    // here user means the lone user whose delete button was clicked
    doRemoveUser(user);
  };

  const header = (
    <>
      <Button loading={isLoading} onClick={handleClick}>
        <GoTrash />
      </Button>
      {error && <div>Error deleting user</div>}
      {user.name}
    </>
  );

  return <ExpandablePanel header={header}>CONTENT!!!</ExpandablePanel>;
}
