import Header from "./Header";

function Conditional(props) {
    const { isLoggedIn, userName } = props;
    const mess = <Header />

    if (isLoggedin && userName ) {
        return <div><Header /></div>
    }
    return <div>{mess}</div>;
}
export default Conditional;