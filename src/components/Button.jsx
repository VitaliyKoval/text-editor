export default function Button({
  children,
  onClick,
  disabled,
  variant = "primary",
}) {
  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-200 text-gray-700 hover:bg-gray-300",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded font-medium ${variants[variant]} disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer`}
    >
      {children}
    </button>
  );
}
