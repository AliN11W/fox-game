import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// @ts-expect-error - This is a valid call
ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
