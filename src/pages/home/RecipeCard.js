import { useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import styles from "./Home.module.css";


const RecipeCard = ({ recipe, index }) => {

    let navigate = useNavigate();

    const handleClick = () => {
        navigate(`details/${index}`,{ state: recipe })
    }
    

  return (
    <Card className={styles.card}>
      <Card.Img variant="top" src={recipe?.image} />
      <Card.Body>
        <Card.Title className={styles.cardtitle}>{recipe?.label}</Card.Title>
          <Button variant="warning" onClick={handleClick}>View More</Button>
      </Card.Body>
    </Card>
  );
};

export default RecipeCard;
