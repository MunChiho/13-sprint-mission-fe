console.log("=== 이벤트 전파와 위임 ===\n");

// ==========================================
// 테스트 1: 이벤트 객체 확인
// ==========================================

const btnEvent = document.getElementById("btn-event");
const result1 = document.getElementById("result1");

// TODO: btnEvent에 "click" 이벤트를 등록하세요
btnEvent.addEventListener("click", (e) => {
  result1.textContent = `타입: ${e.type}\n대상: ${e.target.textContent}\n태그: ${e.target.tagName}`;
});

console.log("테스트 1: 이벤트 객체 확인 준비 완료");

// ==========================================
// 테스트 2: 마우스 좌표 추적
// ==========================================

const trackArea = document.getElementById("track-area");
const result2 = document.getElementById("result2");

// TODO: trackArea에 "mousemove" 이벤트를 등록하세요
trackArea.addEventListener("mousemove", (e) => {
  result2.textContent = `X: ${e.clientX}, Y: ${e.clientY}`;
});

console.log("테스트 2: 마우스 좌표 추적 준비 완료");

// ==========================================
// 테스트 3: 키보드 이벤트
// ==========================================

const keyInput = document.getElementById("key-input");
const keyDisplay = document.getElementById("key-display");
const result3 = document.getElementById("result3");

// TODO: keyInput에 "keydown" 이벤트를 등록하세요
keyInput.addEventListener("keydown", (e) => {
  keyDisplay.textContent = e.key;
  result3.textContent = `key: ${e.key}, code: ${e.code}`;
});

console.log("테스트 3: 키보드 이벤트 준비 완료");

// ==========================================
// 테스트 4: 기본 동작 방지 (preventDefault)
// ==========================================

const safeLink = document.getElementById("safe-link");
const result4 = document.getElementById("result4");

// TODO: safeLink에 "click" 이벤트를 등록하세요
safeLink.addEventListener("click", (e) => {
  e.preventDefault();
  result4.textContent = `링크 이동이 방지되었습니다! (원래 주소: ${e.target.href})`;
});

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
outer.addEventListener("click", (e) => {
  logs.push("outer 클릭!");
  result5.textContent = logs.join("\n");
});

// TODO: inner에 "click" 이벤트를 등록하세요
inner.addEventListener("click", (e) => {
  logs.push("inner 클릭!");
  result5.textContent = logs.join("\n");
});

// TODO: bubbleBtn에 "click" 이벤트를 등록하세요
bubbleBtn.addEventListener("click", (e) => {
  if (useStopPropagation) {
    e.stopPropagation();
  }
  logs.push("button 클릭!");
  result5.textContent = logs.join("\n");
});

btnReset5.addEventListener("click", (e) => {
  e.stopPropagation();
  logs = [];
  result5.textContent = "로그가 초기화되었습니다.";
});

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

btnOpenModal.addEventListener("click", () => {
  backdrop.classList.add("show");
});

btnCloseModal.addEventListener("click", () => {
  backdrop.classList.remove("show");
});

// TODO: backdrop 클릭 시 모달 닫기
backdrop.addEventListener("click", () => {
  backdrop.classList.remove("show");
});

// TODO: modal 안쪽 클릭 시 전파 방지
modal.addEventListener("click", (e) => {
  e.stopPropagation();
});

console.log("테스트 6: 모달 준비 완료");

// ==========================================
// 테스트 7: 이벤트 위임 (Event Delegation)
// ==========================================

const delegateList = document.getElementById("delegate-list");
const btnAddTodo = document.getElementById("btn-add-todo");
let todoCount = 3;

// TODO: delegateList에 이벤트 위임으로 삭제 기능 구현
delegateList.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    e.target.parentElement.remove();
  }
});

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
