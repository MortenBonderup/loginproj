import { useState } from "react";
import { auth, signInWithEmailAndPassword } from "../firebase";
import { useNavigate } from "react-router-dom";
import Logout from "./Logout";


export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  let user = sessionStorage.getItem("brugernavn");
  
  const handleSubmit = async (event) => {
    event.preventDefault(); // Forhindrer standard handlingen for formularindsendelse, så siden ikke genindlæses
  
    try {
      await signInWithEmailAndPassword(auth, username, password); // Forsøger at logge brugeren ind med e-mail og adgangskode
      sessionStorage.setItem("brugernavn", username); // Gemmer brugernavnet i sessionStorage, så det kan bruges senere i sessionen
      console.log("Login successful!", username); // Logger en besked i konsollen for at indikere en vellykket login
      navigate("/admin"); // Omdirigerer brugeren til admin-siden efter succesfuldt login
    } catch (err) {
      setError("Fejl ved login: " + err.message); // Hvis der opstår en fejl, vises en fejlmeddelelse til brugeren
    }
  };
  

  return (
    <div className="logon-container">
      <form className="logon-form" onSubmit={handleSubmit}>
        <h2>Log ind</h2>
        <img 
                src="https://pixabay.com/get/ge16b237ba7372a19743f086753f80cac6d93d38ff9285497ee4d774d1036b517096e6277251ff15b65693a1c4e9384a0_640.png" 
                alt="Login illustration" 
                style={{ height: "150px", borderRadius: "10px", marginBottom: "20px" }}
            />
        {user && <p style={{ color: "green" }}>Du er allerede logget ind som {user}!</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        <label>
          Brugernavn:
          <input 
            type="email" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
        </label>
        <label>
          Adgangskode:
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </label>
        <button type="submit">Log ind</button>
        <Logout />
      </form>
    </div>
  );
};
