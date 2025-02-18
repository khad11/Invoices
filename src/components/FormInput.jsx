function FormInput({
  name,
  type,
  placaholder,
  mainName,
  defaultValue,
  onChange,
  errorMessage,
  value,
}) {
  return (
    <div>
      <fieldset className="fieldset">
        <legend className="fieldset-legend">{mainName}</legend>
        <input
          type={type}
          className="input rounded-sm w-full"
          placeholder={placaholder}
          name={name}
          defaultValue={defaultValue}
          onChange={onChange}
        />
      </fieldset>
    </div>
  );
}

export default FormInput;
