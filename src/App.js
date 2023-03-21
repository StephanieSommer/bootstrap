import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

function App() {
    return (
        <Container fluid>
            <Outlet />
        </Container>
    );
}

export default App;
