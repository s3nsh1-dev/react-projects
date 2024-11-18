import CrudButtons from "./CrudButtons";
import DisplayFetchedData from "./DisplayFetchedData";

export default function OnlineApp() {
  console.log("Online App");
  return (
    <div>
      <CrudButtons />
      <DisplayFetchedData />
    </div>
  );
}
