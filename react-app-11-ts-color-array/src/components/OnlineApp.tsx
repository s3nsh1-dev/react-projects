import FetchOnlineData from "./FetchOnlineData";
import CrudButtons from "./CrudButtons";

export default function OnlineApp() {
  console.log("Online App");
  return (
    <div>
      <CrudButtons />
      <FetchOnlineData />
    </div>
  );
}
