export default function InputField({ type, label }) {
  return (
    <div>
      <label htmlFor={label} className="block mb-2.5 cc-text-14-gr-med">
        {label}
      </label>
      <input
        type={type}
        id={label}
        className=" bg-white border border-cc-gray-100 cc-text-12-gr-nor-300 placeholder:cc-text-12-gr-nor-200 rounded-md w-full p-3 "
        placeholder={`Enter your ${type}`}
        required
      />
    </div>
  );
}
