import Card from "../components/Card.tsx";
import {useEffect, useState} from "react";
import axios from "axios";
import './Sets.css'

interface CardData {
    id: string;
    instruction: string | null;
    preview: string | null;
    parts: string | null;
}


function Sets() {
    const [cards, setCards] = useState<CardData[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCards = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/`);
                setCards(response.data);
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
            } catch (err) {
                setError("Nie udało się pobrać danych.");
            }
        };

        fetchCards();
    }, []);

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div id="sets">
            {cards.map((card) => (
                <Card key={card.id} {...card} />
            ))}
        </div>
    );
}

export default Sets;