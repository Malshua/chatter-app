const Button: React.FC<{ children: React.ReactNode; bgcolor: string }> = ({
  children,
  bgcolor,
}) => {
  return (
    <button
      className="rounded bg-blue-900 px-6 py-2 text-white duration-500 hover:bg-blue-600 "
      style={{ backgroundColor: bgcolor }}
    >
      {children}
    </button>
  );
};

export default Button;
