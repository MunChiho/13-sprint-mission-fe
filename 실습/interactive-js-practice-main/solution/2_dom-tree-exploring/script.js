console.log("=== DOM 트리 탐색 연습 ===\n");

// ==========================================
// 레벨 1: 부모 찾기
// ==========================================

function test1() {
  console.log("\n=== 테스트 1: 부모 찾기 ===");

  // TODO: item3의 부모 요소 찾기
  const item3 = document.getElementById("item3");
  const parent = item3.parentElement;

  console.log("item3의 부모:", parent.id);

  // 부모에 스타일 적용
  parent.style.borderColor = "red";
  parent.style.borderWidth = "3px";

  console.log("부모 찾기 완료");
}

// ==========================================
// 레벨 2: 자식 찾기
// ==========================================

function test2() {
  console.log("\n=== 테스트 2: 자식 찾기 ===");

  // TODO: main-menu의 모든 자식 찾기
  const menu = document.getElementById("main-menu");
  const children = menu.children;

  console.log("자식 개수:", children.length);

  // 첫 번째 자식
  console.log("첫 번째 자식:", menu.firstElementChild.textContent);

  // 마지막 자식
  console.log("마지막 자식:", menu.lastElementChild.textContent);

  // 모든 자식 순회
  for (let i = 0; i < children.length; i++) {
    console.log(`${i + 1}번째 자식:`, children[i].textContent);
  }

  console.log("자식 찾기 완료");
}

// ==========================================
// 레벨 3: 형제 찾기
// ==========================================

function test3() {
  console.log("\n=== 테스트 3: 형제 찾기 ===");

  // TODO: item3의 이전/다음 형제 찾기
  const item3 = document.getElementById("item3");

  const prev = item3.previousElementSibling;
  const next = item3.nextElementSibling;

  console.log("이전 형제:", prev.textContent);
  console.log("다음 형제:", next.textContent);

  // 스타일 적용
  prev.style.backgroundColor = "lightblue";
  next.style.backgroundColor = "lightgreen";

  console.log("형제 찾기 완료");
}

// ==========================================
// 레벨 4: 조상 찾기 (closest)
// ==========================================

function test4() {
  console.log("\n=== 테스트 4: 조상 찾기 ===");

  // TODO: item3에서 .container 찾기
  const item3 = document.getElementById("item3");
  const container = item3.closest(".container");

  console.log("가장 가까운 .container:", container);

  // 가장 가까운 .menu 찾기
  const menu = item3.closest(".menu");
  console.log("가장 가까운 .menu:", menu.id);

  // 자기 자신도 포함
  const self = item3.closest("#item3");
  console.log("자기 자신:", self.id);

  console.log("조상 찾기 완료");
}

// 페이지 로드 시 정보 출력
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM 로드 완료!");

  const menu = document.getElementById("main-menu");
  console.log("메뉴 자식 수:", menu.childElementCount);
  console.log("활성 메뉴:", document.querySelector(".active").textContent);
});
