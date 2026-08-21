import { Link } from "react-router-dom";

const buttonClass =
  "rounded-full bg-lime-800 px-3 py-2 md:px-4 md:py-3 text-lime-200 hover:bg-lime-600";

function Button({ children, customClass, disabled, action, to }) {
  if (to)
    return (
      <Link to={to} className={`${buttonClass} ${customClass}`}>
        {children}
      </Link>
    );

  return (
    <button
      className={`${buttonClass} ${customClass}`}
      disabled={disabled}
      onClick={action}
    >
      {children}
    </button>
  );
}

export default Button;
