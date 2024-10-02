import "./App.css";
import { getData } from "./lib/service";

function App() {
  const fetchAndLog = async (user_id) => {
    const result = await getData(user_id);
    console.log(result);
  };

  fetchAndLog(1);

  return <></>;
}

export default App;
