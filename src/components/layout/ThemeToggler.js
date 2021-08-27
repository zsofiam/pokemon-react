import React,{useContext} from "react";
import ThemeContext from "../../context/ThemeContext";

const themeTogglerStyle = {
    cursor: "pointer"
}
const ThemeToggler = () => {
    const[themeMode, setThemeMode] = useContext(ThemeContext);
    return(
        <div style = {themeTogglerStyle} onClick = {() => {
            
            setThemeMode(themeMode === "normal"? "fantasy": "normal")
            console.log("THEMEMODE: " + themeMode);
            }}>
            <span title = "switch theme">
                {themeMode === "normal" ? "🌙" : "☀️"}
            </span>
        </div>
    );
}

export default ThemeToggler;