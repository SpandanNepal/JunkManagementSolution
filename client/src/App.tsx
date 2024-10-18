import './App.css';
import './index.css';
import './output.css';
import axios from "axios";
import { useState } from "react";

interface UserData {
  name: string;
  age: string;
}

function App() {
  const [data, setData] = useState<UserData>({ name: "", age: "" });

  const handleSubmit = async () => {
    try {
      const response = await axios.post("https://junk-management-solution-server.vercel.app/add-data", {
        collection: "users",
        docData: data,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={data.name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
        placeholder="Name"
      />
      <input
        type="text"
        value={data.age}
        onChange={(e) => setData({ ...data, age: e.target.value })}
        placeholder="Age"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
