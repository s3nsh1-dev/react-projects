import { addColors } from "../api/addColors";
import deleteColors from "../api/deleteColors";
import { useColorAction } from "../hooks/useColorAction";

interface DataProp {
  id: string; // Ensure this matches your API data
  value: string;
}

const CrudButtons = () => {
  const { handleColorState } = useColorAction() as {
    handleColorState: (fetchData: DataProp[]) => void;
  };
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
