export function Heading({ title, subtitle }) {
  return (
    <div className="flex flex-col space-y-5">
      <h3 className="text-3xl font-semibold text-gray-900 leading-tight">
        {title}
      </h3>
      <p className="mt-1 min-w-xl max-w-3xl text-[15px] text-gray-500">
        {subtitle}
      </p>
    </div>
  );
}

export function TextBox({ question, type, id, placeholder, setValue, borderTop=true }) {
  return (
   <div className={borderTop ? "grid grid-cols-3 gap-4 items-start border-gray-200 pt-5 border-t" : "grid grid-cols-3 gap-4 items-start border-gray-200 pt-5"}>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mt-px pt-2"
      >
        {question}
      </label>
      <div className="mt-1 col-span-2">
        <div className="max-w-lg flex rounded-md shadow-sm">
          <input
            required
            onChange={e => {
              setValue(e.target.value);
            }}
            type={type}
            name={id}
            id={id}
            placeholder={placeholder}
            className="flex-1 block max-w-3xl focus:ring-orange-500 focus:border-orange-500 min-w-0 rounded-none rounded-r-md text-sm border-gray-300"
          />
        </div>
      </div>
    </div>
  );
}

export function DropDown({ question, id, options, setValue, borderTop=true }) {
  return (
   <div className={borderTop ? "grid grid-cols-3 gap-4 items-start border-gray-200 pt-5 border-t" : "grid grid-cols-3 gap-4 items-start border-gray-200 pt-5"}>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mt-px pt-2"
      >
        {question}
      </label>
      <div className="mt-1 col-span-2">
        <select
          required
          onChange={e => {
            setValue(e.target.value);
          }}
          id={id}
          name={id}
          className="max-w-lg block focus:ring-orange-500 focus:border-orange-500 w-full shadow-sm sm:max-w-xs text-sm border-gray-300 rounded-md"
        >
          {options.map((option, index) => (
            <option key={index}>{option}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export function TextArea({ question, id, setValue, rows = 3, borderTop=true, }) {
  return (
   <div className={borderTop ? "grid grid-cols-3 gap-4 items-start border-gray-200 pt-5 border-t" : "grid grid-cols-3 gap-4 items-start border-gray-200 pt-5"}>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mt-px pt-2"
      >
        {question}
      </label>
      <div className="mt-1 col-span-2">
        <textarea
          required
          onChange={e => {
            setValue(e.target.value);
          }}
          id={id}
          name={id}
          rows={rows}
          className="max-w-lg shadow-sm block w-full focus:ring-orange-500 focus:border-orange-500 text-sm border border-gray-300 rounded-md"
        />
      </div>
    </div>
  );
}

export function RadioButtons({ question, id, options, setValue, borderTop = true }) {
  return (
    <div
      className={
        borderTop
          ? "grid grid-cols-3 gap-4 items-start border-gray-200 pt-5 border-t"
          : "grid grid-cols-3 gap-4 items-start border-gray-200 pt-5"
      }
    >
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mt-px pt-2"
      >
        {question}
      </label>
      <fieldset className="mt-4">
        <div className="space-y-1">
          {options.map((option, index) => (
            <div key={index} className="flex items-center">
              <input
                required
                value={option.value}
                onChange={(e) => {
                  setValue(e.target.value);
                }}
                id={option.value}
                name={id} // Use the same name attribute for all radio buttons
                type="radio"
                className="focus:ring-orange-500 h-4 w-4 text-orange-600 border-gray-300"
              />
              <label
                htmlFor={option.value}
                className="ml-3 block text-sm font-medium text-gray-700"
              >
                {option.value}
              </label>
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  );
}


export default function TextBoxWithIcon({
  text,
  type,
  placeholder,
  icon,
  setValue,
}) {
  return (
    <div className="h-10">
      <label
        htmlFor="email"
        className="block text-sm font-medium text-gray-700 ml-1"
      >
        {text}
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {icon}
        </div>
        <input
          onChange={e => {
            setValue(e.target.value);
          }}
          type={type}
          name={text}
          id={text}
          className="focus:ring-brandf focus:border-brandt block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}

export function CancelButton() {
  return (
    <button
      type="reset"
      className="btn btn-white capitalize"
    >
      Cancel
    </button>
  );
}

export function SubmitButton() {
  return (
    <button
      type="submit"
      className="ml-3 btn capitalize bg-orange-600 hover:bg-orange-700 text-white"
    >
      Submit
    </button>
  );
}

export const booleanOptions = [
  { id: "yes", value: "Yes" },
  { id: "no", value: "No" },
];
