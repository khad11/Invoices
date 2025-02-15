function FormInput({ name, type, placaholder, mainName, defaultValue }) {
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
        />
      </fieldset>
    </div>
  );
}

export default FormInput;
