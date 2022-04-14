import kitchen from "../../assets/meal2.svg";
import { Form, Button } from "react-bootstrap";
import styles from "./Login.module.css";
import { useNavigate } from 'react-router-dom'



const Login = ({ authenticate }) => {

  const navigate = useNavigate();

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    authenticate();
    navigate("/home");
  };

  return (
    <div className={styles.loginMain}>
      <img src={kitchen} alt="kitchen-pot" className={styles.kitchenlogo} />
      <h1 className={styles.logo}>Ersen's Kitchen</h1>
      <Form className={styles.form} onSubmit={handleSubmitLogin}>
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" required />
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" required />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
