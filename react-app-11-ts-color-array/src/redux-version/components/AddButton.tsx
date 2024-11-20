import { useDispatch } from "react-redux";
import { postData } from "../store/thunks/postData";
import { addColor } from "../store";

const AddButton = () => {
  const dispatch = useDispatch();
  const handleAddingColors = async () => {
    const showPostData = await postData();
    console.log("Show Post Data", showPostData); // Log the response from the API call to the console for debugging purposes.
    dispatch(addColor(showPostData));
  };
  return (
    <div>
      <button style={{ padding: "5px 10px" }} onClick={handleAddingColors}>
        ++Add More Data++
      </button>
    </div>
  );
};

export default AddButton;
