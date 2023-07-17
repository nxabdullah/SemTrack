import classNames from "classnames";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

function Toasts() {
  const toast = useSelector((state: RootState) => state.app.toast);

  return (
    <div
      className={classNames("toast toast-bottom toast-start", {
        hidden: !toast.show,
      })}
    >
      <div
        className={classNames(
          "alert",
          { "alert-success": toast.type === "success" },
          { "alert-error": toast.type === "error" },
          { "alert-warning": toast.type === "warning" },
          { "alert-primary": toast.type === "primary" },
          { "alert-secondary": toast.type === "secondary" },
          { "alert-accent": toast.type === "accent" }
        )}
      >
        <span>{toast.message}</span>
      </div>
    </div>
  );
}

export default Toasts;
