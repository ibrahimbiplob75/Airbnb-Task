import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import Container from "../Container/Container";
import Card from "./Card";
import Empty from "../EmptyMessage/Empty";


const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [params, setParams] = useSearchParams();
  const category = params.get("category");
  // console.log(category)
  // console.log("cat",category)
  useEffect(() => {
    axios
      .get("http://localhost:3000/rooms")
      .then((res) => {
        const data = res.data;
        if (category) {
          const filter = data.filter((room) => room.category === category);
          setRooms(filter);
        } else {
          setRooms(data);
        }
      })
      .catch((error) => {
        console.error("Error fetching rooms:", error);
      });
  }, [category]);

  console.log(rooms);


  return (
    <Container>
      {rooms && rooms.length > 0 ? (
        <div className="grid grid-cols-1 mt-5 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-10">
          {rooms?.map((room) => (
            <Card key={room._id} room={room}></Card>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center min-h-[calc(100vh-300px)]">
          <Empty
            center={"text-center"}
            title={`${category} rooms are not availiable`}
            subtitle={"Find another Category"}
          ></Empty>
        </div>
      )}
    </Container>
  );
};

export default Rooms;


