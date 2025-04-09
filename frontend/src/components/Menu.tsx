import {Link} from "react-router-dom";

function Menu() {
    return (
        <>
            <nav>
                <table>
                    <tbody>
                    <tr>
                        <th style={{padding: "0 10px"}}>
                            <Link to={"sets"}>
                                Zestawy (sets)
                            </Link>
                        </th>
                        <th style={{
                            padding: "0 10px",
                            borderLeft: "1px solid black",
                            borderRight: "1px solid black",
                        }}>
                            <Link to={"parts"}>Części (parts)</Link>
                        </th>
                        <th style={{padding: "0 10px"}}>
                            <Link to={"help"}>Pomoc (help)</Link>
                        </th>
                    </tr>
                    </tbody>
                </table>
            </nav>
        </>
    );
}

export default Menu;