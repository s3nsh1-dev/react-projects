import { useDispatch } from "react-redux";
import { deleteColor } from "../store";

const DeleteButton = () => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    // dispatch(deleteColor());
  };
  return (
    <div style={{ margin: "0px 10px" }}>
      <button style={{ padding: "5px 10px" }} onClick={handleDelete}>
        --Delete last Entry--
      </button>
    </div>
  );
};

export default DeleteButton;
