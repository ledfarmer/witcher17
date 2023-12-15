import List from "../List/List";

export default function Profile() {
  const myInfo = {
    name: "Filip Drazina",
    location: "ZG",
    age: "29",
    colors: [
      { id: 1, name: "red" },
      { id: 2, name: "green" },
      { id: 3, name: "yellow" },
    ],
  };

  return (
    <>
      <h1>Profile</h1>
      <p>Name:{myInfo.name}</p>
      <p>Location:{myInfo.location}</p>
      <p>Age:{myInfo.age}</p>
      <h2>Favourite colors:</h2>
      <List colors={myInfo.colors} />
    </>
  );
}
