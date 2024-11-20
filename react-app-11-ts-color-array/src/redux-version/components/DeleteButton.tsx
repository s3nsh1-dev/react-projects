import { useDispatch, useSelector } from "react-redux";
import { deleteColor } from "../store";
import { deleteData } from "../store/thunks/deleteData";
import { RootState } from "../store";

const DeleteButton = () => {
  const dispatch = useDispatch();
  const colorArray = useSelector((state: RootState) => {
    return state.colors.colorHistory;
  });
  const handleDelete = async () => {
    const deletedValue = await deleteData(colorArray[colorArray.length - 1]);
    console.log("Deleted value:", deletedValue);
    dispatch(deleteColor());
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
