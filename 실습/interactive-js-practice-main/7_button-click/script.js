console.log("=== 버튼 클릭 이벤트 ===\n");

// ==========================================
// 테스트 1: 기본 클릭 이벤트 (addEventListener)
// ==========================================

const btnHello = document.getElementById("btn-hello");
const result1 = document.getElementById("result1");

// TODO: btnHello에 "click" 이벤트를 등록하세요
// 클릭하면 result1의 textContent를 "안녕하세요! 버튼이 클릭되었습니다."로 변경
// hint: btnHello.addEventListener("click", () => { ... });

console.log("테스트 1: 기본 클릭 이벤트 준비 완료");

// ==========================================
// 테스트 2: 카운터 (+/- 버튼)
// ==========================================

const btnMinus = document.getElementById("btn-minus");
const btnPlus = document.getElementById("btn-plus");
const countDisplay = document.getElementById("count");

let count = 0;

// TODO: btnPlus에 "click" 이벤트를 등록하세요
// 클릭하면 count를 1 증가시키고, countDisplay의 textContent를 count 값으로 업데이트

// TODO: btnMinus에 "click" 이벤트를 등록하세요
// 클릭하면 count를 1 감소시키고, countDisplay의 textContent를 count 값으로 업데이트

console.log("테스트 2: 카운터 준비 완료");

// ==========================================
// 테스트 3: 여러 이벤트 동시 등록
// ==========================================

const btnMulti = document.getElementById("btn-multi");
const result3 = document.getElementById("result3");

// TODO: btnMulti에 "click" 이벤트를 2개 등록하세요
// 첫 번째: result3의 textContent를 "첫 번째 핸들러 실행!"으로 변경
// 두 번째: 콘솔에 "두 번째 핸들러도 실행!"을 출력
// hint: addEventListener를 2번 호출하면 됩니다 (둘 다 실행됨!)

console.log("테스트 3: 여러 이벤트 등록 준비 완료");

// ==========================================
// 테스트 4: 색상 랜덤 변경
// ==========================================

const btnColor = document.getElementById("btn-color");
const colorBox = document.getElementById("color-box");

// 랜덤 색상을 생성하는 함수 (제공)
const getRandomColor = () => {
  const colors = ["#e74c3c", "#3498db", "#2ecc71", "#f39c12", "#9b59b6", "#1abc9c"];
  return colors[Math.floor(Math.random() * colors.length)];
};

// TODO: btnColor에 "click" 이벤트를 등록하세요
// 클릭하면 colorBox의 배경색(style.backgroundColor)을 getRandomColor()의 반환값으로 변경

console.log("테스트 4: 색상 변경 준비 완료");

// ==========================================
// 테스트 5: 좋아요 토글
// ==========================================

const likeBtn = document.getElementById("like-btn");
const likeCountEl = document.getElementById("like-count");

let likeCount = 0;
let isLiked = false;

// TODO: likeBtn에 "click" 이벤트를 등록하세요
// 클릭할 때마다:
//   - isLiked 값을 반전 (true ↔ false)
//   - isLiked가 true이면: likeCount를 1 증가, 버튼 텍스트를 "❤️"로, "liked" 클래스 추가
//   - isLiked가 false이면: likeCount를 1 감소, 버튼 텍스트를 "🤍"로, "liked" 클래스 제거
//   - likeCountEl의 textContent를 likeCount로 업데이트

console.log("테스트 5: 좋아요 토글 준비 완료");

// ==========================================
// 테스트 6: 한 번만 실행 (once 옵션)
// ==========================================

const btnCoupon = document.getElementById("btn-coupon");
const result6 = document.getElementById("result6");

// TODO: btnCoupon에 "click" 이벤트를 등록하되, 한 번만 실행되도록 하세요
// 클릭하면 result6의 textContent를 "쿠폰이 발급되었습니다! (SAVE10)"으로 변경
// hint: addEventListener의 세 번째 인자로 { once: true }를 전달

console.log("테스트 6: 한 번만 실행 준비 완료");

// ==========================================
// 테스트 7: 이벤트 제거 (removeEventListener)
// ==========================================

const closeBtns = document.querySelectorAll(".close-btn");

// TODO: closeBtns를 forEach로 순회하며 각 닫기 버튼에 "click" 이벤트를 등록하세요
// 클릭하면 해당 버튼의 부모 요소(.notification)를 삭제 (remove)
// hint: 버튼의 부모 요소는 btn.parentElement로 접근

console.log("테스트 7: 알림 닫기 준비 완료");

// ==========================================
// 초기 정보 출력
// ==========================================
console.log("DOM 로드 완료!");
console.log("섹션 개수:", document.querySelectorAll(".section").length);
