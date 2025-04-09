import Menu from "../components/Menu.tsx";
import {Outlet} from "react-router-dom";

function Layout() {
    return (
        <div id={"main"} style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            width: "100%",
            alignItems: "center",
        }}>
            <div id="row1">
                <Menu/>
            </div>

            <div className="kreska" style={{
                borderTop: "1px solid black",
                width: "100%",
            }}>
            </div>

            <Outlet/>
        </div>
    );
}

export default Layout;