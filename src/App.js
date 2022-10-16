/* eslint-disable no-unused-vars */
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import TagBar from "./components/Tagbar/Tagbar";
import Videos from "./components/Videos/Videos";
function App () {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <TagBar />
      <Videos />
    </div>
  );
}

export default App;
