import axios from "axios";
import { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import styles from "./Home.module.css";

import RecipeCard from "./RecipeCard";

const Home = () => {
  const [recipies, setRecipies] = useState();
  const [query, setQuery] = useState("");
  const [meal, setMeal] = useState("breakfast");

  const APP_ID = "7e946d4c";
  const APP_KEY = "96c514d9a90983230952517c6794ed10";
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;


  const getResipies = async () => {
    
    try {
      const { data } = await axios.get(url);
      setRecipies(data.hits);
      console.log(data.hits);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getResipies();
  };

  const onInputChange = (e) => setQuery(e.target.value);
  const onSelectChange = (e) => setMeal(e.target.value);

  return (
    <>
      <Container className={styles.main}>
        <Form className={styles.form} onSubmit={handleSubmit}>
          <Form.Control
            size="lg"
            type="text"
            placeholder="Search a recipe..."
            className={styles.select}
            required
            onChange={(e) => onInputChange(e)}
          />
          <Form.Select
            aria-label="Default select example"
            className={styles.select}
            onChange={(e) => onSelectChange(e)}
          >
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="snack">Snack</option>
            <option value="teatime">Teatime</option>
          </Form.Select>
          <Button variant="warning" type="submit" className={styles.select}>
            Search
          </Button>
        </Form>
      </Container>
      <Container>
        
        {
          recipies ? (
            <Row>
            
            {recipies.map((recipe,index)=> (
                <Col xs={12} md={3} key={index}>
                <RecipeCard recipe={recipe.recipe} index={index}/>
              </Col>
          ))
        }
        </Row>
          ) : (null)
        }
        
          
        
      </Container>
    </>
  );
};

export default Home;
