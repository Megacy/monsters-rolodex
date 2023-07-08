const Card = ({ name, id, email }) => {
  return (
    <div className="cardContainer" key={id}>
      <img
        alt="monster"
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
