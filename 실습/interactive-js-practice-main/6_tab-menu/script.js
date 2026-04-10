console.log("=== 탭 메뉴 만들기 ===\n");

// ==========================================
// 테스트 1: dataset 읽기
// ==========================================

function test1() {
  console.log("\n=== 테스트 1: 유저 데이터 읽기 ===");

  const user1 = document.getElementById("user1");

  // TODO: user1의 dataset에서 userId를 읽어 콘솔에 출력하세요
  // hint: data-user-id는 dataset.userId로 접근 (카멜 케이스)
  // console.log("유저 ID:", );

  // TODO: user1의 dataset에서 name을 읽어 콘솔에 출력하세요
  // console.log("이름:", );

  // TODO: user1의 dataset에서 role을 읽어 콘솔에 출력하세요
  // console.log("역할:", );

  // TODO: user1의 dataset에서 joinedAt을 읽어 콘솔에 출력하세요
  // hint: data-joined-at은 dataset.joinedAt으로 접근
  // console.log("가입일:", );

  console.log("유저 데이터 읽기 완료");
}

// ==========================================
// 테스트 2: dataset 쓰기
// ==========================================

function test2() {
  console.log("\n=== 테스트 2: 유저 데이터 추가 ===");

  const user2 = document.getElementById("user2");

  // TODO: user2의 dataset에 role 값을 "developer"로 설정하세요
  // hint: dataset.role = "값"

  // TODO: user2의 dataset에 team 값을 "프론트엔드"로 설정하세요

  // 화면에 역할 표시
  const roleEl = document.getElementById("user2-role");
  roleEl.textContent = user2.dataset.role;

  console.log("role:", user2.dataset.role);
  console.log("team:", user2.dataset.team);
  console.log("유저 데이터 추가 완료");
}

// ==========================================
// 테스트 3: 상품 데이터 읽기 (forEach + dataset)
// ==========================================

function test3() {
  console.log("\n=== 테스트 3: 상품 가격 합계 ===");

  const products = document.querySelectorAll(".product-item");

  let total = 0;

  // TODO: products를 forEach로 순회하며 각 상품의 data-price를 합산하세요
  // hint: dataset.price는 문자열이므로 Number()로 변환 필요
  // products.forEach((product) => {
  //   const price =
  //   total += price;
  //   console.log(product.dataset.productId, ":", price, "원");
  // });

  console.log("총 합계:", total, "원");
  // 예상 출력: 총 합계: 1334000 원
}

// ==========================================
// 테스트 4: 상태 배지 데이터 읽기
// ==========================================

function test4() {
  console.log("\n=== 테스트 4: 상태 배지 데이터 읽기 ===");

  const badges = document.querySelectorAll("#status-list .status-badge");

  // TODO: badges를 forEach로 순회하며 각 배지의 data-status와 textContent를 출력하세요
  // badges.forEach((badge) => {
  //   console.log(`[${  }] ${badge.textContent}`);
  // });

  // 예상 출력:
  //   [success] 배포 완료
  //   [error] 빌드 실패
  //   [warning] 메모리 부족
  //   [info] 업데이트 가능

  console.log("상태 배지 읽기 완료");
}

// ==========================================
// 테스트 5: data 속성으로 필터링
// ==========================================

function test5() {
  console.log("\n=== 테스트 5: error만 선택 ===");

  // TODO: #filter-list에서 data-status가 "error"인 요소만 선택하세요
  // hint: querySelectorAll('[data-status="error"]')
  // const errorItems =

  // TODO: 선택한 요소들을 forEach로 순회하며 textContent를 콘솔에 출력하세요

  // 예상 출력:
  //   작업 B
  //   작업 D

  console.log("error 필터링 완료");
}

// ==========================================
// 테스트 6: 탭 메뉴 활성화
// ==========================================

function test6() {
  console.log("\n=== 테스트 6: 탭 메뉴 활성화 ===");

  const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".tab-content");

  // 이벤트 리스너는 제공됩니다 (아래 TODO만 채워주세요)
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      // TODO: tab의 dataset에서 tab 값을 읽어 targetTab 변수에 저장하세요
      // const targetTab =

      // TODO: 모든 탭 버튼에서 "active" 클래스를 제거하세요 (tabs를 forEach로 순회)

      // TODO: 모든 탭 콘텐츠에서 "active" 클래스를 제거하세요 (contents를 forEach로 순회)

      // TODO: 클릭한 tab에 "active" 클래스를 추가하세요

      // TODO: data-content 값이 targetTab과 일치하는 콘텐츠에 "active" 클래스를 추가하세요
      // hint: document.querySelector(`[data-content="${targetTab}"]`)

      console.log("활성 탭:", targetTab);
    });
  });

  console.log("탭 메뉴 이벤트 등록 완료! 위의 탭 버튼을 클릭해보세요.");
}

// ==========================================
// 초기 정보 출력
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM 로드 완료!");
  console.log("섹션 개수:", document.querySelectorAll(".section").length);
  console.log("탭 버튼 수:", document.querySelectorAll(".tab").length);
});
