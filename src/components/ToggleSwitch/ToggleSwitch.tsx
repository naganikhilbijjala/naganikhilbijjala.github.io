"use client";
import React, {useState, useContext} from "react";
import StyleContext from "../../contexts/StyleContext";


const ToggleSwitch = () => {
  const {isDark} = useContext(StyleContext);
  const [isChecked, setChecked] = useState(isDark);
  const styleContext = useContext(StyleContext);

  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={isDark}
        onChange={() => {
          styleContext.changeTheme();
          setChecked(!isChecked);
        }}
      />
      <span className="slider round">
        <span className="emoji">{isChecked ? "🌜" : "☀️"}</span>
      </span>
    </label>
  );
};
export default ToggleSwitch;
