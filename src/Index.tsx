import { createRoot } from "react-dom/client";

const elm = document.getElementById("root")!;

const root = createRoot(elm);
root.render(<h1>Hello World</h1>);
