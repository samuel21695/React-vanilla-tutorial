import { greet } from "./components/file1";
import { add } from "./components/file2";
import { multiply } from "./components/file3";

console.log(greet('Sam'));
console.log(add(2, 3));
console.log(multiply(4, 8));

function createApp() {
  const app = document.createElement('div');
  app.innerHTML = '<h1>Hello, React SPA!</h1>';
  return app;
}

// 렌더링 함수
function render(component, container) {
  container.innerHTML = ''; // 컨테이너 비우기
  container.appendChild(component()); // 컴포넌트 렌더링
}

// 렌더링 실행
render(createApp, document.getElementById('root'));