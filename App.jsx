import { useReducer } from "react";

const initialState = {
  theme: "light",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const isDark = state.theme === "dark";

  return (
    <div
      style={{
        height: "100vh",
        background: isDark ? "#1a1a1a" : "#f2f2f2",
        color: isDark ? "#fff" : "#000",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        transition: "all 0.3s ease",
      }}
    >
      <h1>{state.theme.toUpperCase()} MODE</h1>
      <button
        onClick={() => dispatch({ type: "TOGGLE_THEME" })}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          borderRadius: "5px",
          border: "none",
          background: isDark ? "#fff" : "#333",
          color: isDark ? "#333" : "#fff",
          marginTop: "20px",
          transition: "all 0.3s ease",
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default App;