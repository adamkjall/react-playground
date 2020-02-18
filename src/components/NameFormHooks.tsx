import React, { useState } from "react";

interface IProps {}

const NameFormHooks = (props: IProps) => {
  const [value, setValue] = useState("");

  const handleChange = (e: any) => setValue(e.target.value);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert("A name was submitted: " + value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={value} onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default NameFormHooks;
