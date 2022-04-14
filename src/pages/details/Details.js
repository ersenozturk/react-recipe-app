
import { Container, Card, ListGroup } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import styles from './Details.module.css';

const Details = () => {
  const { state } = useLocation();
  const recipe = state;

  if (!recipe) {
    return (
      <Container>
        <h1>Ooops! There is no recipe!</h1>)
      </Container>
    );
  }

  return (
    
      <Card className={styles.card}>
      <Card.Img variant="top" src={recipe.image} className={styles.cardImg}/>
        <Card.Header>{recipe.label}</Card.Header>
        <Card.Body>
          <Card.Title>Ingredients</Card.Title>
          
          <ListGroup variant="flush">
           {
            recipe.ingredientLines.map((line, index) => (
                <ListGroup.Item key={index}>{index + 1} - {line}</ListGroup.Item>
        
          ))
           }
           </ListGroup>
        </Card.Body>
        <Card.Footer className="text-muted">{recipe.mealType[0]}</Card.Footer>
      </Card>
   
  );
};

export default Details;
