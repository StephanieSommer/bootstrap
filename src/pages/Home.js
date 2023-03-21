import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Sign from "../components/Sign";

const Home = () => {
    return (
        <header className="d-flex justify-content-between bg-orange px-5">
            <Logo />
            <Navigation />
            <Sign />
        </header>
    );
};

export default Home;
