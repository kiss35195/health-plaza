function Toast({ children, showToast, success }) {
  return (
    <span
      className={`fixed top-18 left-1/2 -translate-x-1/2 rounded-2xl  px-4 py-3 transition-all duration-500 ease-in-out 
        ${success ? "bg-lime-200/80" : "bg-red-200/80"} 
        ${!success && "text-red-700"} 
        ${showToast ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none"}`}
    >
      {children}
    </span>
  );
}

export default Toast;
