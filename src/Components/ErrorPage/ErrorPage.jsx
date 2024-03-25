import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <p>Oops!!</p>
            <Link to="/">Go Back to Home!</Link>
        </div>
    );
};

export default ErrorPage;