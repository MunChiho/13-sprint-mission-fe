console.log("=== DOM 선택 연습 시작 ===\n");

// ==========================================
// 레벨 1: getElementById
// ==========================================

function test1() {
  console.log("\n=== 테스트 1: ID 선택 ===");

  // TODO: main-title을 선택하여 텍스트를 "제목 변경됨!"으로 변경
  const title = document.getElementById("main-title");
  title.textContent = "제목 변경됨!";
  title.style.color = "red";

  // TODO: intro를 선택하여 배경색을 노란색으로 변경
  const intro = document.getElementById("intro");
  intro.style.backgroundColor = "yellow";

  // TODO: btn1을 선택하여 텍스트를 "클릭됨!"으로 변경
  const btn1 = document.getElementById("btn1");
  btn1.textContent = "클릭됨!";

  console.log("ID 선택 테스트 완료");
}

// ==========================================
// 레벨 2: getElementsByClassName
// ==========================================

function test2() {
  console.log("\n=== 테스트 2: 클래스 선택 ===");

  // TODO: 모든 box를 선택하여 개수 출력
  const boxes = document.getElementsByClassName("box");
  console.log("박스 개수:", boxes.length);

  // TODO: 모든 box의 배경색을 lightgreen으로 변경
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = "lightgreen";
  }

  // TODO: highlight 클래스를 가진 요소만 선택하여 테두리 추가
  const highlighted = document.getElementsByClassName("highlight");
  for (const item of highlighted) {
    item.style.border = "3px solid red";
  }

  console.log("클래스 선택 테스트 완료");
}

// ==========================================
// 레벨 3: getElementsByTagName
// ==========================================

function test3() {
  console.log("\n=== 테스트 3: 태그 선택 ===");

  // TODO: 모든 p 태그를 선택하여 개수 출력
  const paragraphs = document.getElementsByTagName("p");
  console.log("문단 개수:", paragraphs.length);

  // TODO: 모든 button 태그를 선택하여 배경색 변경
  const buttons = document.getElementsByTagName("button");
  Array.from(buttons).forEach((btn) => {
    btn.style.backgroundColor = "coral";
  });

  console.log("태그 선택 테스트 완료");
}

// ==========================================
// 레벨 4: querySelector
// ==========================================

function test4() {
  console.log("\n=== 테스트 4: querySelector ===");

  // TODO: #complex-section 안의 첫 번째 li 선택
  const firstLi = document.querySelector("#complex-section li");
  firstLi.style.backgroundColor = "lightblue";
  console.log("첫 번째 li:", firstLi.textContent);

  // TODO: .active 클래스를 가진 첫 번째 요소 선택
  const firstActive = document.querySelector(".active");
  firstActive.style.fontWeight = "bold";
  console.log("첫 번째 active:", firstActive.textContent);

  // TODO: .section 안의 h2 선택 (첫 번째)
  const sectionTitle = document.querySelector(".section h2");
  sectionTitle.style.color = "blue";

  console.log("querySelector 테스트 완료");
}

// ==========================================
// 레벨 5: querySelectorAll
// ==========================================

function test5() {
  console.log("\n=== 테스트 5: querySelectorAll ===");

  // TODO: 모든 .box 선택하여 forEach로 순회
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box, index) => {
    box.textContent = `뉴박스 ${index + 1}`;
    console.log(`박스 ${index + 1}:`, box.textContent);
  });

  // TODO: 모든 .active 선택하여 배열로 변환 후 map 사용
  const activeItems = document.querySelectorAll(".active");
  const activeTexts = Array.from(activeItems).map((item) => item.textContent);
  console.log("Active 항목들:", activeTexts);

  // TODO: #item-list 안의 모든 li 선택
  const listItems = document.querySelectorAll("#item-list li");
  console.log("리스트 항목 개수:", listItems.length);

  // 첫 번째와 마지막 스타일 변경
  listItems[0].style.color = "red";
  listItems[listItems.length - 1].style.color = "blue";

  console.log("querySelectorAll 테스트 완료");
}

// ==========================================
// 추가 연습
// ==========================================

// 초기 정보 출력
console.log("전체 섹션 개수:", document.querySelectorAll(".section").length);
console.log("전체 버튼 개수:", document.getElementsByTagName("button").length);
console.log("전체 박스 개수:", document.querySelectorAll(".box").length);
