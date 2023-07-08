import Card from "./card/card-component";
import "./card-list-style.scss";

const CardList = ({ monsters }) => {
  return (
    <div className="cardList">
      {monsters?.map((monster) => {
        const { id, name, email } = monster;
        return <Card key={id} id={id} name={name} email={email} />;
      })}
    </div>
  );
};

export default CardList;
