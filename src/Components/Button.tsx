const Button = function ({ name }: { name: string }) {
  return (
    <button className="rounded bg-blue-900 px-6 py-2 text-white duration-500 hover:bg-blue-600 md:ml-8">
      {name}
    </button>
  );
};
export default Button;
