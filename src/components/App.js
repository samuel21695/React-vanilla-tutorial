export function createApp() {
  const app = document.createElement('div');
  app.innerHTML = '<h1>Hello, React SPA!</h1>';
  return app;
}

// 렌더링 함수
export function render(component, container) {
  container.innerHTML = ''; // 컨테이너 비우기
  container.appendChild(component()); // 컴포넌트 렌더링
}