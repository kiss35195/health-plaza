function Button({ children, customClass }) {
  return (
    <button
      className={`rounded-full bg-lime-800 px-4 py-3 text-lime-200 hover:bg-lime-600 ${customClass}`}
    >
      {children}
    </button>
  );
}

export default Button;
