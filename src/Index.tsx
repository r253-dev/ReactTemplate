import { createRoot } from "react-dom/client";
import { App } from "./App";

const elm = document.getElementById("root")!;

const root = createRoot(elm);
root.render(<App />);
