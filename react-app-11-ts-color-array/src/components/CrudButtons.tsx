import { addColors } from "../api/addColors";
import deleteColors from "../api/deleteColors";
import { useFetchColors } from "../hooks/useFetchColors";
import { useColorContext } from "../hooks/useColorContext";

const CrudButtons = () => {
  const { handleColorState } = useColorContext();
  console.log("CrudButtons.jsx");
  const handleColorChange = async (type: string) => {
    if (type === "add") {
      const fullData = await addColors();
      handleColorState(fullData);
    } else if (type === "remove") {
      const fullData = await deleteColors();
      handleColorState(fullData);
    }
  };
  useFetchColors();
  return (
    <div>
      <button onClick={() => handleColorChange("add")}>++Add Color++</button>
      <button onClick={() => handleColorChange("remove")}>
        --Remove Color--
      </button>
    </div>
  );
};

export default CrudButtons;
