import { createApp } from "./components/App";
import { render } from "./components/App";
import { greet } from "./components/file1";
import { add } from "./components/file2";
import { multiply } from "./components/file3";

// 렌더링 실행
render(createApp, document.getElementById('root'));

console.log(greet('Sam'));
console.log(add(2, 3));
console.log(multiply(4, 8));