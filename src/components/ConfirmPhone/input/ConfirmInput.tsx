import "./ConfirmInput.css";
const ConfirmInput = () => {
  const root = document.documentElement;

  function getCustomPropertyValue(name: any) {
    const styles = getComputedStyle(root);
    return styles.getPropertyValue(name);
  }

  const fieldset = document.querySelector(".fieldset");
  const fields = document.querySelectorAll<HTMLInputElement>(".field");
  const boxes = document.querySelectorAll(".box");

  function handleInputField({ target }: any) {
    const value = target.value.slice(0, 1);
    target.value = value;

    const step = value ? 1 : -1;
    const fieldIndex = [...fields].findIndex((field) => field === target);
    const focusToIndex = fieldIndex + step;

    if (focusToIndex < 0 || focusToIndex >= fields.length) return;

    fields[focusToIndex]?.focus();
  }
  fields.forEach((field) => {
    field.addEventListener("input", handleInputField);
  });

  return (
    <div>
      <div className="main">
        <p className="label">Введите код из СМС</p>

        <div className="fieldset">
          <label className="box">
            <input
              className="field"
              type="number"
              placeholder="•"
              autoFocus={true}
            />
          </label>
          <label className="box">
            <input className="field" type="number" placeholder="•" />
          </label>
          <label className="box">
            <input className="field" type="number" placeholder="•" />
          </label>
          <label className="box">
            <input className="field" type="number" placeholder="•" />
          </label>
        </div>
      </div>
    </div>
  );
};
export default ConfirmInput;
