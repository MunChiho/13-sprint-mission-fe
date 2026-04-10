console.log("=== 탭 메뉴 만들기 ===\n");

// ==========================================
// 테스트 1: dataset 읽기
// ==========================================

function test1() {
  console.log("\n=== 테스트 1: 유저 데이터 읽기 ===");

  const user1 = document.getElementById("user1");

  // TODO: user1의 dataset에서 userId를 읽어 콘솔에 출력하세요
  console.log("유저 ID:", user1.dataset.userId);

  // TODO: user1의 dataset에서 name을 읽어 콘솔에 출력하세요
  console.log("이름:", user1.dataset.name);

  // TODO: user1의 dataset에서 role을 읽어 콘솔에 출력하세요
  console.log("역할:", user1.dataset.role);

  // TODO: user1의 dataset에서 joinedAt을 읽어 콘솔에 출력하세요
  console.log("가입일:", user1.dataset.joinedAt);

  console.log("유저 데이터 읽기 완료");
}

// ==========================================
// 테스트 2: dataset 쓰기
// ==========================================

function test2() {
  console.log("\n=== 테스트 2: 유저 데이터 추가 ===");

  const user2 = document.getElementById("user2");

  // TODO: user2의 dataset에 role 값을 "developer"로 설정하세요
  user2.dataset.role = "developer";

  // TODO: user2의 dataset에 team 값을 "프론트엔드"로 설정하세요
  user2.dataset.team = "프론트엔드";

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
  products.forEach((product) => {
    const price = Number(product.dataset.price);
    total += price;
    console.log(product.dataset.productId, ":", price, "원");
  });

  console.log("총 합계:", total, "원");
}

// ==========================================
// 테스트 4: 상태 배지 데이터 읽기
// ==========================================

function test4() {
  console.log("\n=== 테스트 4: 상태 배지 데이터 읽기 ===");

  const badges = document.querySelectorAll("#status-list .status-badge");

  // TODO: badges를 forEach로 순회하며 각 배지의 data-status와 textContent를 출력하세요
  badges.forEach((badge) => {
    console.log(`[${badge.dataset.status}] ${badge.textContent}`);
  });

  console.log("상태 배지 읽기 완료");
}

// ==========================================
// 테스트 5: data 속성으로 필터링
// ==========================================

function test5() {
  console.log("\n=== 테스트 5: error만 선택 ===");

  // TODO: #filter-list에서 data-status가 "error"인 요소만 선택하세요
  const errorItems = document.querySelectorAll('#filter-list [data-status="error"]');

  // TODO: 선택한 요소들을 forEach로 순회하며 textContent를 콘솔에 출력하세요
  errorItems.forEach((item) => {
    console.log(item.textContent);
  });

  console.log("error 필터링 완료");
}

// ==========================================
// 테스트 6: 탭 메뉴 활성화
// ==========================================

function test6() {
  console.log("\n=== 테스트 6: 탭 메뉴 활성화 ===");

  const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      // TODO: tab의 dataset에서 tab 값을 읽어 targetTab 변수에 저장하세요
      const targetTab = tab.dataset.tab;

      // TODO: 모든 탭 버튼에서 "active" 클래스를 제거하세요
      tabs.forEach((t) => t.classList.remove("active"));

      // TODO: 모든 탭 콘텐츠에서 "active" 클래스를 제거하세요
      contents.forEach((c) => c.classList.remove("active"));

      // TODO: 클릭한 tab에 "active" 클래스를 추가하세요
      tab.classList.add("active");

      // TODO: data-content 값이 targetTab과 일치하는 콘텐츠에 "active" 클래스를 추가하세요
      document.querySelector(`[data-content="${targetTab}"]`).classList.add("active");

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
