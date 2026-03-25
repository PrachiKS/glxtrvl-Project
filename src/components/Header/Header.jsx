import "./Header.css"
import headerImg from "../../assets/header.jpg";
const Header = () => {
    return (
        <section className="header" style={{ backgroundImage: `url(${headerImg})`, backgroundSize: "cover", backgroundPosition: "fixed" }}>
            <h1>Lorem ipsum dolor sit amet.</h1>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi nihil ipsam blanditiis recusandae, similique sapiente dolorem accusantium quia illum distinctio necessitatibus reprehenderit ducimus suscipit dolore eos voluptatum aliquid nesciunt id.
            </p>
        </section>
    )
}

export default Header