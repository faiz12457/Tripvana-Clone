

export default function AddressCard({icon, title = "Address", info='123' }) {
  return (
    <div className="flex flex-col items-start bg-gray-50 pl-5 pr-7 pt-6 pb-7 rounded-2xl  min-h-80">
      {icon}
      <div className="mt-auto">

      <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
        <p className="text-gray-500 text-base  break-all whitespace-normal">
          {info}
        </p>
      </div>
    </div>
  );
}
