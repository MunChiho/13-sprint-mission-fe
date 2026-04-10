console.log("=== 버튼 클릭 이벤트 ===\n");

// ==========================================
// 테스트 1: 기본 클릭 이벤트 (addEventListener)
// ==========================================

const btnHello = document.getElementById("btn-hello");
const result1 = document.getElementById("result1");

// TODO: btnHello에 "click" 이벤트를 등록하세요
btnHello.addEventListener("click", () => {
  result1.textContent = "안녕하세요! 버튼이 클릭되었습니다.";
});

console.log("테스트 1: 기본 클릭 이벤트 준비 완료");

// ==========================================
// 테스트 2: 카운터 (+/- 버튼)
// ==========================================

const btnMinus = document.getElementById("btn-minus");
const btnPlus = document.getElementById("btn-plus");
const countDisplay = document.getElementById("count");

let count = 0;

// TODO: btnPlus에 "click" 이벤트를 등록하세요
btnPlus.addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});

// TODO: btnMinus에 "click" 이벤트를 등록하세요
btnMinus.addEventListener("click", () => {
  count--;
  countDisplay.textContent = count;
});

console.log("테스트 2: 카운터 준비 완료");

// ==========================================
// 테스트 3: 여러 이벤트 동시 등록
// ==========================================

const btnMulti = document.getElementById("btn-multi");
const result3 = document.getElementById("result3");

// TODO: btnMulti에 "click" 이벤트를 2개 등록하세요
btnMulti.addEventListener("click", () => {
  result3.textContent = "첫 번째 핸들러 실행!";
});

btnMulti.addEventListener("click", () => {
  console.log("두 번째 핸들러도 실행!");
});

console.log("테스트 3: 여러 이벤트 등록 준비 완료");

// ==========================================
// 테스트 4: 색상 랜덤 변경
// ==========================================

const btnColor = document.getElementById("btn-color");
const colorBox = document.getElementById("color-box");

const getRandomColor = () => {
  const colors = ["#e74c3c", "#3498db", "#2ecc71", "#f39c12", "#9b59b6", "#1abc9c"];
  return colors[Math.floor(Math.random() * colors.length)];
};

// TODO: btnColor에 "click" 이벤트를 등록하세요
btnColor.addEventListener("click", () => {
  colorBox.style.backgroundColor = getRandomColor();
});

console.log("테스트 4: 색상 변경 준비 완료");

// ==========================================
// 테스트 5: 좋아요 토글
// ==========================================

const likeBtn = document.getElementById("like-btn");
const likeCountEl = document.getElementById("like-count");

let likeCount = 0;
let isLiked = false;

// TODO: likeBtn에 "click" 이벤트를 등록하세요
likeBtn.addEventListener("click", () => {
  isLiked = !isLiked;

  if (isLiked) {
    likeCount++;
    likeBtn.textContent = "❤️";
    likeBtn.classList.add("liked");
  } else {
    likeCount--;
    likeBtn.textContent = "🤍";
    likeBtn.classList.remove("liked");
  }

  likeCountEl.textContent = likeCount;
});

console.log("테스트 5: 좋아요 토글 준비 완료");

// ==========================================
// 테스트 6: 한 번만 실행 (once 옵션)
// ==========================================

const btnCoupon = document.getElementById("btn-coupon");
const result6 = document.getElementById("result6");

// TODO: btnCoupon에 "click" 이벤트를 등록하되, 한 번만 실행되도록 하세요
btnCoupon.addEventListener("click", () => {
  result6.textContent = "쿠폰이 발급되었습니다! (SAVE10)";
}, { once: true });

console.log("테스트 6: 한 번만 실행 준비 완료");

// ==========================================
// 테스트 7: 이벤트 제거 (removeEventListener)
// ==========================================

const closeBtns = document.querySelectorAll(".close-btn");

// TODO: closeBtns를 forEach로 순회하며 각 닫기 버튼에 "click" 이벤트를 등록하세요
closeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.remove();
  });
});

console.log("테스트 7: 알림 닫기 준비 완료");

// ==========================================
// 초기 정보 출력
// ==========================================
console.log("DOM 로드 완료!");
console.log("섹션 개수:", document.querySelectorAll(".section").length);
