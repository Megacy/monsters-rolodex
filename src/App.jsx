import { useEffect, useState } from "react";
import "./App.scss";
import CardList from "./components/card-list/card-list-component";
import SearchBox from "./components/search-box/search-box-component";

function App() {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };
  const filteredMonsters = monsters.filter((monster) => {
    return monster.name.toLowerCase().includes(searchField.toLowerCase());
  });
  useEffect(() => {
    const fetchMonsters = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setMonsters(data);
      console.log(data);
    };
    fetchMonsters();
  }, []);

  return (
    <>
      <h1 className="appTitle">Monsters Rolodex</h1>
      <SearchBox onSearchHandler={onSearchChange} />
      <CardList monsters={filteredMonsters} />
    </>
  );
}

export default App;
