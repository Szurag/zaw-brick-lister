import React from "react";

interface CardProps {
    id: string;
    instruction: string | null;
    preview: string | null;
    parts: string | null;
}

const Card: React.FC<CardProps> = ({ id, instruction, preview, parts }) => {
    return (
        <div className={"card"}>
            <p>
                {preview !== null ? (
                <img width={"250px"} src={`${preview}`}  alt={"sigma"}/>
                ) : "Brak zdjęcia"}
            </p>
            <h2>{id}</h2>
            <p>
                Parts: {parts !== null ? (
                <a href={parts}>Lista części</a>
            ) : "Brak listy części"}
            </p>
            <p>Instruction: {instruction !== null ? (
                <a href={instruction}>
                    Link do instrukcji
                </a>
            ) : "Brak"}</p>
        </div>
    );
};

export default Card;