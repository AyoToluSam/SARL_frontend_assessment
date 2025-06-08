import { useNavigate } from "react-router";
import Button from "../../../components/core/Button";
import styles from "./_NotFound.module.scss";
import { notFound } from "../../../assets";

const NotFound = ({ type }: { type: "app" | "component" }) => {
  const navigate = useNavigate();

  return (
    <div className={`${styles.not_found} ${styles[type]}`}>
      <img src={notFound} alt="illustration" />
      <h1>Error 404: Page Not Found</h1>
      <p>
        Apologies, the page you're attempting to visit cannot be found. <br />
        The page you're looking for does not exit or has been moved to a new
        url.
      </p>
      <Button
        text="Go to Dashboard"
        width={"fit"}
        onClick={() => navigate(`/dashboard`)}
      />
    </div>
  );
};
export default NotFound;
