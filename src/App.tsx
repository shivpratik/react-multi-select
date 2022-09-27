import { useState } from "react";
import { Select, SelectOption } from "./Select";

const options = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Watermelon", value: "watermelon" },
  { label: "Grapes", value: "grapes" },
  { label: "Orange", value: "orange" },
];

function App() {
  const [value1, setValue1] = useState<SelectOption[]>([options[0]]);
  const [value2, setValue2] = useState<SelectOption | undefined>(options[0]);

  return (
    <>
      <Select
        multiple
        options={options}
        value={value1}
        onChange={(e) => setValue1(e)}
      />
      <br />
      <Select options={options} value={value2} onChange={(e) => setValue2(e)} />
    </>
  );
}

export default App;
