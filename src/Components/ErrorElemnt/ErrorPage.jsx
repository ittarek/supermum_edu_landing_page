import ScaleLoader from "react-spinners/ScaleLoader";
import "./ErrorPage.css";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <ScaleLoader size={100} color="red" />
    </div>
  );
};

export default ErrorPage;
