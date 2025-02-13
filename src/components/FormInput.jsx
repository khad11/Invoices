function FormInput({ name, type, placaholder, mainName }) {
  return (
    <div>
      <fieldset className="fieldset">
        <legend className="fieldset-legend">{mainName}</legend>
        <input
          type={type}
          className="input rounded-sm w-full"
          placeholder={placaholder}
          name={name}
        />
      </fieldset>
    </div>
  );
}

export default FormInput;
