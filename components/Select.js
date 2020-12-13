function Select({ label, name, options, ...rest }) {
  return (
    <div className="select-block">
      <label htmlFor={name}>{label}</label>
      <select value="" id={name} {...rest}>
        <option value="" disabled hidden>
          Selecione oque você deseja
        </option>
        {options.map((option) => {
          return (
            <option
              key={option.value}
              value={option.value}
              className="option-list"
            >
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default Select;
