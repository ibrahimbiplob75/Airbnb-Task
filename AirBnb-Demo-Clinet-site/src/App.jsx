import Categories from "./Category/Categories"
import Navbar from "./Navbar/Navbar"
import Rooms from "./Rooms/Rooms";

function App() {
  

  return (
    <>
      <Navbar></Navbar>
      <div>
        <Categories></Categories>
      </div>
      <div>
        <Rooms></Rooms>
      </div>
    </>
  );
}

export default App
