import { useState } from "react";
import Logout from "../components/Logout";
import styles from "./AdminPage.module.css"; // Importér CSS Module

export default function AdminPage() {
    const [destinations, setDestinations] = useState([
        { id: 1, navn: "Paris, Frankrig" },
        { id: 2, navn: "Kyoto, Japan" },
        { id: 3, navn: "Santorini, Grækenland" }
    ]);

    const [newDestination, setNewDestination] = useState("");

    const handleAdd = () => {
        if (newDestination.trim() === "") return;
        setDestinations([...destinations, { id: Date.now(), navn: newDestination }]);
        setNewDestination("");
    };

    const handleDelete = (id) => {
        setDestinations(destinations.filter(dest => dest.id !== id));
    };

    return (
        <div className={styles.adminContainer}>
            <h1 className={styles.title}>Admin Panel</h1>

            <div className={styles.inputContainer}>
                <input
                    type="text"
                    placeholder="Tilføj en destination"
                    value={newDestination}
                    onChange={(e) => setNewDestination(e.target.value)}
                    className={styles.input}
                />
                <button className={styles.addButton} onClick={handleAdd}>Tilføj</button>
            </div>

            <ul className={styles.destinationList}>
                {destinations.map((destination) => (
                    <li key={destination.id} className={styles.destinationItem}>
                        {destination.navn} 
                        <button className={styles.deleteButton} onClick={() => handleDelete(destination.id)}>Slet</button>
                    </li>
                ))}
            </ul>
            <Logout />
        </div>
    );
}
