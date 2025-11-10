
function ButtonPrimary({
  children,
  className = "",
  onclick = () => {},
  type = "button",
}) {
  return (
    <button
      type={type}
      onClick={onclick}
      className={`px-5 cursor-pointer py-3 rounded-full bg-[#091733]  text-white ${className} `}
    >
      {children}
    </button>
  );
}

export default ButtonPrimary;
