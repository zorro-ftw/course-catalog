export default function InputField({ type, label }) {
  return (
    <div>
      <label for={label} className="block mb-2.5 text-description">
        {label}
      </label>
      <input
        type={type}
        id={label}
        className=" bg-white border border-cc-gray-100 text-input placeholder:text-placeholder rounded-md w-full p-3 "
        placeholder={`Enter your ${type}`}
        required
      />
    </div>
  );
}
