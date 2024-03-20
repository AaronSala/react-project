import profilePic from "./assets/Welcome W1.jpg";

function Card() {
  return (
    <div className="card">
      <img
        src={profilePic}
        className="card-image"
        alt="profile picture"
        width={150}
        height={150}
      ></img>
      <h2 className="card-title">The Arfrim</h2>
      <p className="card-text">A software Engineer na da web developer</p>
    </div>
  );
}
export default Card;
