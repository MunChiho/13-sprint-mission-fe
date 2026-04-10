console.log("=== 동적 리스트 만들기 ===\n");

// ==========================================
// 테스트 1: 요소 만들어 추가하기 (createElement + append)
// ==========================================

function test1() {
  console.log("\n=== 테스트 1: 요소 만들어 추가하기 ===");

  const resultArea = document.getElementById("result-area");

  // TODO: p 요소를 생성하세요
  // const p =

  // TODO: 생성한 p 요소의 textContent를 "JavaScript로 만든 문단입니다!"로 설정하세요

  // TODO: resultArea에 p를 자식으로 추가하세요 (hint: append)

  console.log("요소 추가 완료");
}

// ==========================================
// 테스트 2: 리스트에 여러 항목 추가 (forEach + append)
// ==========================================

function test2() {
  console.log("\n=== 테스트 2: 과일 추가 ===");

  const fruitList = document.getElementById("fruit-list");
  const fruits = ["바나나", "포도", "딸기"];

  // TODO: fruits 배열을 forEach로 순회하며,
  //       각 과일 이름으로 li 요소를 만들어 fruitList에 추가하세요
  // fruits.forEach((fruit) => {
  //   const li =
  //
  //   fruitList.append(li);
  // });

  console.log("과일 추가 완료! 총 항목:", fruitList.children.length);
  // 예상 출력: 과일 추가 완료! 총 항목: 4
}

// ==========================================
// 테스트 3: 여러 자식 한번에 추가 (append)
// ==========================================

function test3() {
  console.log("\n=== 테스트 3: 카드 만들기 ===");

  const cardArea = document.getElementById("card-area");

  // TODO: h3 요소를 만들고 textContent를 "팀원 소개"로 설정하세요
  // const title =

  // TODO: p 요소를 만들고 textContent를 "프론트엔드 3팀"으로 설정하세요
  // const desc =

  // TODO: cardArea에 title과 desc를 append로 한번에 추가하세요
  // hint: append는 여러 요소를 동시에 추가할 수 있습니다
  //       cardArea.append(요소1, 요소2)

  console.log("카드 만들기 완료");
}

// ==========================================
// 테스트 4: 맨 앞에 추가 (prepend)
// ==========================================

function test4() {
  console.log("\n=== 테스트 4: 새 공지 맨 앞에 ===");

  const noticeList = document.getElementById("notice-list");

  // TODO: li 요소를 만들고 textContent를 "[긴급] 서버 점검 안내"로 설정하세요
  // const newNotice =

  // TODO: noticeList의 맨 앞에 newNotice를 추가하세요 (hint: prepend)

  console.log("공지 추가 완료! 첫 번째 항목:", noticeList.firstElementChild.textContent);
  // 예상 출력: 공지 추가 완료! 첫 번째 항목: [긴급] 서버 점검 안내
}

// ==========================================
// 테스트 5: 특정 위치에 삽입 (before / after)
// ==========================================

function test5() {
  console.log("\n=== 테스트 5: 단계 사이에 삽입 ===");

  const step2 = document.getElementById("step2");

  // TODO: li 요소를 만들고 textContent를 "1.5단계: 디자인"으로 설정하세요
  // const designStep =

  // TODO: step2 바로 앞에 designStep을 삽입하세요 (hint: before)

  // TODO: li 요소를 만들고 textContent를 "2.5단계: 테스트"로 설정하세요
  // const testStep =

  // TODO: step2 바로 뒤에 testStep을 삽입하세요 (hint: after)

  const orderList = document.getElementById("order-list");
  console.log("삽입 완료! 총 단계:", orderList.children.length);
  // 예상 출력: 삽입 완료! 총 단계: 5
}

// ==========================================
// 테스트 6: 요소 삭제 (remove)
// ==========================================

const deleteListBackup = document.getElementById("delete-list")?.innerHTML;

function test6() {
  console.log("\n=== 테스트 6: 완료 항목 삭제 ===");

  // TODO: #delete-list에서 "completed" 클래스를 가진 항목을 모두 선택하세요
  // const completedItems =

  // TODO: 선택한 항목들을 forEach로 순회하며 삭제하세요 (hint: remove)

  const remaining = document.querySelectorAll("#delete-list .todo");
  console.log("삭제 후 남은 항목:", remaining.length);
  // 예상 출력: 삭제 후 남은 항목: 3
}

function test6Reset() {
  document.getElementById("delete-list").innerHTML = deleteListBackup;
  console.log("리셋 완료");
}

// ==========================================
// 테스트 7: 요소 이동 (append로 이동)
// ==========================================

function test7() {
  console.log("\n=== 테스트 7: 아이템 이동 ===");

  const boxB = document.getElementById("box-b");
  const item1 = document.getElementById("move-item-1");

  // TODO: item1을 boxB로 이동하세요
  // hint: 이미 DOM에 있는 요소를 append하면 복사가 아니라 이동됩니다!

  const boxA = document.getElementById("box-a");
  console.log("boxA 아이템 수:", boxA.querySelectorAll(".item").length);
  console.log("boxB 아이템 수:", boxB.querySelectorAll(".item").length);
  // 예상 출력:
  //   boxA 아이템 수: 1 (아이템 2만 남음)
  //   boxB 아이템 수: 2 (아이템 3, 아이템 1)
}

// ==========================================
// 초기 정보 출력
// ==========================================
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM 로드 완료!");
  console.log("섹션 개수:", document.querySelectorAll(".section").length);
});
