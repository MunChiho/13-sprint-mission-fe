console.log("=== 콘텐츠 변경 연습 ===\n");

// ==========================================
// 레벨 1: textContent 읽기
// ==========================================

function test1() {
  console.log("\n=== 테스트 1: textContent 읽기 ===");

  const greeting = document.getElementById("greeting");

  // TODO: greeting 요소의 textContent를 콘솔에 출력하세요
  console.log("greeting textContent:", greeting.textContent);

  const hiddenText = document.getElementById("hidden-text");

  // TODO: hiddenText 요소의 textContent를 콘솔에 출력하세요
  console.log("hiddenText textContent:", hiddenText.textContent);

  // TODO: hiddenText 요소의 innerText를 콘솔에 출력하고, textContent와 비교해보세요
  console.log("hiddenText innerText:", hiddenText.innerText);

  console.log("textContent 읽기 완료");
}

// ==========================================
// 레벨 2: textContent 쓰기
// ==========================================

function test2() {
  console.log("\n=== 테스트 2: textContent 쓰기 ===");

  // TODO: #avatar 요소의 textContent를 "J"로 변경하세요
  const avatar = document.getElementById("avatar");
  avatar.textContent = "J";

  // TODO: #user-name 요소의 textContent를 "김코딩"으로 변경하세요
  const userName = document.getElementById("user-name");
  userName.textContent = "김코딩";

  // TODO: #user-bio 요소의 textContent를 "JavaScript를 열심히 배우고 있습니다!"로 변경하세요
  const userBio = document.getElementById("user-bio");
  userBio.textContent = "JavaScript를 열심히 배우고 있습니다!";

  // TODO: #counter 요소의 textContent를 "현재 카운트: 42"로 변경하세요
  const counter = document.getElementById("counter");
  counter.textContent = "현재 카운트: 42";

  console.log("이름:", userName.textContent);
  console.log("소개:", userBio.textContent);

  console.log("textContent 쓰기 완료");
}

// ==========================================
// 레벨 3: innerHTML 읽기
// ==========================================

function test3() {
  console.log("\n=== 테스트 3: innerHTML 읽기 ===");

  const noticeContent = document.getElementById("notice-content");

  // TODO: noticeContent 요소의 innerHTML을 콘솔에 출력하세요
  console.log("innerHTML:", noticeContent.innerHTML);

  // TODO: noticeContent 요소의 textContent도 출력하고, innerHTML과 비교해보세요
  console.log("textContent:", noticeContent.textContent);

  console.log("innerHTML 읽기 완료");
}

// ==========================================
// 레벨 4: innerHTML 쓰기
// ==========================================

function test4() {
  console.log("\n=== 테스트 4: innerHTML 쓰기 ===");

  const productList = document.getElementById("product-list");

  // TODO: productList의 innerHTML을 아래 상품 3개로 교체하세요
  productList.innerHTML = `
    <div class="product">
      <div class="product-name">노트북</div>
      <div class="product-price">1,200,000원</div>
      <div class="product-desc">고성능 노트북</div>
    </div>
    <div class="product">
      <div class="product-name">키보드</div>
      <div class="product-price">89,000원</div>
      <div class="product-desc">기계식 키보드</div>
    </div>
    <div class="product">
      <div class="product-name">마우스</div>
      <div class="product-price">45,000원</div>
      <div class="product-desc">무선 마우스</div>
    </div>
  `;

  console.log("innerHTML 쓰기 완료");
}

// ==========================================
// 레벨 5: textContent vs innerHTML 차이 비교
// ==========================================

function test5() {
  console.log("\n=== 테스트 5: textContent vs innerHTML 비교 ===");

  const resultText = document.getElementById("result-text");
  const resultHtml = document.getElementById("result-html");

  const htmlString = "<strong>굵은 글씨</strong>와 <em>기울임 글씨</em>";

  // TODO: resultText 요소에 htmlString을 textContent로 설정
  resultText.textContent = htmlString;

  // TODO: resultHtml 요소에 htmlString을 innerHTML로 설정
  resultHtml.innerHTML = htmlString;

  console.log("textContent 결과:", resultText.textContent);
  console.log("innerHTML 결과:", resultHtml.innerHTML);

  console.log("비교 완료");
}

// ==========================================
// 초기 정보 출력
// ==========================================
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM 로드 완료!");
  console.log(
    "greeting textContent:",
    document.getElementById("greeting").textContent,
  );
  console.log("섹션 개수:", document.querySelectorAll(".section").length);
  console.log("버튼 개수:", document.getElementsByTagName("button").length);
});
