console.log("=== 이벤트 전파와 위임 ===\n");

// ==========================================
// 테스트 1: 이벤트 객체 확인
// ==========================================

const btnEvent = document.getElementById("btn-event");
const result1 = document.getElementById("result1");

// TODO: btnEvent에 "click" 이벤트를 등록하세요
// 핸들러의 매개변수로 이벤트 객체(e)를 받아서,
// result1의 textContent에 아래 정보를 표시하세요:
//   - e.type (이벤트 타입)
//   - e.target.textContent (클릭된 요소의 텍스트)
//   - e.target.tagName (클릭된 요소의 태그 이름)
//
// btnEvent.addEventListener("click", (e) => {
//   result1.textContent = `타입: ${  }\n대상: ${  }\n태그: ${  }`;
// });

console.log("테스트 1: 이벤트 객체 확인 준비 완료");

// ==========================================
// 테스트 2: 마우스 좌표 추적
// ==========================================

const trackArea = document.getElementById("track-area");
const result2 = document.getElementById("result2");

// TODO: trackArea에 "mousemove" 이벤트를 등록하세요
// 마우스가 움직일 때마다 e.clientX, e.clientY를 result2에 표시하세요
//
// trackArea.addEventListener("mousemove", (e) => {
//   result2.textContent = `X: ${  }, Y: ${  }`;
// });

console.log("테스트 2: 마우스 좌표 추적 준비 완료");

// ==========================================
// 테스트 3: 키보드 이벤트
// ==========================================

const keyInput = document.getElementById("key-input");
const keyDisplay = document.getElementById("key-display");
const result3 = document.getElementById("result3");

// TODO: keyInput에 "keydown" 이벤트를 등록하세요
// 키를 누르면:
//   - keyDisplay의 textContent를 e.key 값으로 변경
//   - result3의 textContent에 e.key와 e.code를 표시
//
// keyInput.addEventListener("keydown", (e) => {
//   keyDisplay.textContent =
//   result3.textContent = `key: ${  }, code: ${  }`;
// });

console.log("테스트 3: 키보드 이벤트 준비 완료");

// ==========================================
// 테스트 4: 기본 동작 방지 (preventDefault)
// ==========================================

const safeLink = document.getElementById("safe-link");
const result4 = document.getElementById("result4");

// TODO: safeLink에 "click" 이벤트를 등록하세요
// - e.preventDefault()로 링크 이동을 방지하세요
// - result4의 textContent를 "링크 이동이 방지되었습니다! (원래 주소: {href})"로 변경
// hint: 링크의 href는 safeLink.href 또는 e.target.href로 접근
//
// safeLink.addEventListener("click", (e) => {
//
// });

console.log("테스트 4: preventDefault 준비 완료");

// ==========================================
// 테스트 5: 버블링과 stopPropagation
// ==========================================

const outer = document.getElementById("outer");
const inner = document.getElementById("inner");
const bubbleBtn = document.getElementById("bubble-btn");
const result5 = document.getElementById("result5");
const btnReset5 = document.getElementById("btn-reset5");
const btnStop = document.getElementById("btn-stop");

let logs = [];
let useStopPropagation = false;

// TODO: outer에 "click" 이벤트를 등록하세요
// logs 배열에 "outer 클릭!"을 push하고, result5의 textContent를 logs.join("\n")으로 업데이트
//
// outer.addEventListener("click", (e) => {
//   logs.push("outer 클릭!");
//   result5.textContent = logs.join("\n");
// });

// TODO: inner에 "click" 이벤트를 등록하세요
// logs 배열에 "inner 클릭!"을 push하고, result5의 textContent를 logs.join("\n")으로 업데이트
//
// inner.addEventListener("click", (e) => {
//   logs.push("inner 클릭!");
//   result5.textContent = logs.join("\n");
// });

// TODO: bubbleBtn에 "click" 이벤트를 등록하세요
// - useStopPropagation이 true이면 e.stopPropagation()을 호출
// - logs 배열에 "button 클릭!"을 push하고, result5의 textContent를 업데이트
//
// bubbleBtn.addEventListener("click", (e) => {
//   if (useStopPropagation) {
//     // TODO: 여기서 전파를 중단하세요
//   }
//   logs.push("button 클릭!");
//   result5.textContent = logs.join("\n");
// });

// 로그 초기화 버튼 (제공)
btnReset5.addEventListener("click", (e) => {
  e.stopPropagation();
  logs = [];
  result5.textContent = "로그가 초기화되었습니다.";
});

// stopPropagation 토글 버튼 (제공)
btnStop.addEventListener("click", (e) => {
  e.stopPropagation();
  useStopPropagation = !useStopPropagation;
  btnStop.textContent = useStopPropagation
    ? "stopPropagation 끄기"
    : "stopPropagation 켜기";
});

console.log("테스트 5: 버블링 준비 완료");

// ==========================================
// 테스트 6: 모달 닫기 (stopPropagation 실전)
// ==========================================

const backdrop = document.getElementById("backdrop");
const modal = document.getElementById("modal");
const btnOpenModal = document.getElementById("btn-open-modal");
const btnCloseModal = document.getElementById("btn-close-modal");

// 모달 열기 (제공)
btnOpenModal.addEventListener("click", () => {
  backdrop.classList.add("show");
});

// 모달 닫기 버튼 (제공)
btnCloseModal.addEventListener("click", () => {
  backdrop.classList.remove("show");
});

// TODO: backdrop에 "click" 이벤트를 등록하세요
// 클릭하면 backdrop의 "show" 클래스를 제거 (모달 닫기)

// TODO: modal에 "click" 이벤트를 등록하세요
// e.stopPropagation()으로 모달 안쪽 클릭 시 backdrop으로 이벤트가 전파되지 않도록 방지

console.log("테스트 6: 모달 준비 완료");

// ==========================================
// 테스트 7: 이벤트 위임 (Event Delegation)
// ==========================================

const delegateList = document.getElementById("delegate-list");
const btnAddTodo = document.getElementById("btn-add-todo");
let todoCount = 3;

// TODO: delegateList(ul)에 "click" 이벤트를 한 번만 등록하세요
// - e.target이 삭제 버튼(.delete-btn)인지 확인
// - 맞으면 e.target의 부모 요소(li)를 삭제
// hint: e.target.classList.contains("delete-btn")으로 확인
//
// delegateList.addEventListener("click", (e) => {
//   if (e.target.classList.contains("delete-btn")) {
//     // TODO: 클릭된 삭제 버튼의 부모(li)를 삭제하세요
//   }
// });

// 할 일 추가 (제공) - 새로 추가된 항목도 위임 덕분에 삭제가 바로 동작합니다!
btnAddTodo.addEventListener("click", () => {
  todoCount++;
  const li = document.createElement("li");
  li.textContent = `할 일 ${todoCount} `;
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "삭제";
  li.append(deleteBtn);
  delegateList.append(li);
});

console.log("테스트 7: 이벤트 위임 준비 완료");

// ==========================================
// 초기 정보 출력
// ==========================================
console.log("DOM 로드 완료!");
console.log("섹션 개수:", document.querySelectorAll(".section").length);
