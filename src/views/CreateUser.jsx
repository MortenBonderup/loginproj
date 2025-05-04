import { useState } from "react";
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "../firebase"; 
import styles from "./CreateUser.module.css"; // Importér CSS Module
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Bruger oprettet!");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Login succesfuldt!");
      sessionStorage.setItem("brugernavn", email);
      navigate("/admin");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Brugerregistrering</h2>
      <input className={styles.input} type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input className={styles.input} type="password" placeholder="Adgangskode" onChange={(e) => setPassword(e.target.value)} />
      <button className={styles.registerBtn} onClick={handleRegister}>Registrer</button>
      <button className={styles.loginBtn} onClick={handleLogin}>Log ind</button>
      {error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
};

export default CreateUser;
