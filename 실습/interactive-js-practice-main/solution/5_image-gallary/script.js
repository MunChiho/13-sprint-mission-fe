console.log("=== 이미지 갤러리 ===\n");

// ==========================================
// 테스트 1: 속성 읽기 (getAttribute)
// ==========================================

function test1() {
  console.log("\n=== 테스트 1: 이미지 속성 읽기 ===");

  const photo1 = document.getElementById("photo1");

  // TODO: photo1의 "src" 속성을 getAttribute로 읽어서 콘솔에 출력하세요
  console.log("src:", photo1.getAttribute("src"));

  // TODO: photo1의 "alt" 속성을 getAttribute로 읽어서 콘솔에 출력하세요
  console.log("alt:", photo1.getAttribute("alt"));

  // TODO: photo1의 "data-photographer" 속성을 getAttribute로 읽어서 콘솔에 출력하세요
  console.log("촬영자:", photo1.getAttribute("data-photographer"));

  console.log("속성 읽기 완료");
}

// ==========================================
// 테스트 2: 속성 변경 (setAttribute)
// ==========================================

function test2() {
  console.log("\n=== 테스트 2: 프로필 이미지 변경 ===");

  const profileImg = document.getElementById("profile-img");

  // TODO: profileImg의 src 속성을 "https://picsum.photos/id/100/80/80"로 변경하세요
  profileImg.setAttribute("src", "https://picsum.photos/id/100/80/80");

  // TODO: profileImg의 alt 속성을 "새 프로필 사진"으로 변경하세요
  profileImg.setAttribute("alt", "새 프로필 사진");

  console.log("변경된 src:", profileImg.getAttribute("src"));
  console.log("변경된 alt:", profileImg.getAttribute("alt"));
  console.log("프로필 이미지 변경 완료");
}

// ==========================================
// 테스트 3: 클래스 추가/제거 (classList.add / classList.remove)
// ==========================================

function test3() {
  console.log("\n=== 테스트 3: 테두리+그림자 추가 ===");

  const galleryImg = document.getElementById("gallery-img");

  // TODO: galleryImg에 "bordered" 클래스를 추가하세요
  galleryImg.classList.add("bordered");

  // TODO: galleryImg에 "shadow" 클래스를 추가하세요
  galleryImg.classList.add("shadow");

  console.log("현재 클래스:", galleryImg.className);
  console.log("bordered 포함?", galleryImg.classList.contains("bordered"));
  console.log("테두리+그림자 추가 완료");
}

// ==========================================
// 테스트 4: 클래스 토글 (classList.toggle)
// ==========================================

function test4() {
  console.log("\n=== 테스트 4: 다크 모드 토글 ===");

  const themeBox = document.getElementById("theme-box");

  // TODO: themeBox의 "dark" 클래스를 토글하세요
  themeBox.classList.toggle("dark");

  console.log("dark 클래스 포함?", themeBox.classList.contains("dark"));
  console.log("다크 모드 토글 완료");
}

// ==========================================
// 테스트 5: 인라인 스타일 변경 (style)
// ==========================================

function test5() {
  console.log("\n=== 테스트 5: 스타일 변경 ===");

  const styleBox = document.getElementById("style-box");

  // TODO: styleBox의 배경색(backgroundColor)을 "#e74c3c"로 변경하세요
  styleBox.style.backgroundColor = "#e74c3c";

  // TODO: styleBox의 border-radius(borderRadius)를 "50%"로 변경하세요
  styleBox.style.borderRadius = "50%";

  // TODO: styleBox의 글자크기(fontSize)를 "24px"로 변경하세요
  styleBox.style.fontSize = "24px";

  console.log("스타일 변경 완료");
}

// ==========================================
// 테스트 6: 계산된 스타일 읽기 (getComputedStyle)
// ==========================================

function test6() {
  console.log("\n=== 테스트 6: 계산된 스타일 확인 ===");

  const computedBox = document.getElementById("computed-box");

  // TODO: computedBox의 계산된 스타일 객체를 가져오세요
  const styles = window.getComputedStyle(computedBox);

  // TODO: 계산된 배경색(backgroundColor)을 콘솔에 출력하세요
  console.log("배경색:", styles.backgroundColor);

  // TODO: 계산된 글자크기(fontSize)를 콘솔에 출력하세요
  console.log("글자크기:", styles.fontSize);

  // style 속성과 getComputedStyle의 차이 비교
  console.log("style.backgroundColor:", computedBox.style.backgroundColor);
  // (인라인에 없으므로 빈 문자열)

  console.log("계산된 스타일 확인 완료");
}

// ==========================================
// 테스트 7: 클래스 기반 스타일 관리 (권장 방식)
// ==========================================

function test7() {
  console.log("\n=== 테스트 7: 흑백 필터 토글 ===");

  const images = document.querySelectorAll(".gallery img");

  // TODO: images를 forEach로 순회하며 각 이미지의 "grayscale" 클래스를 토글하세요
  images.forEach((img) => {
    img.classList.toggle("grayscale");
  });

  console.log("흑백 필터 토글 완료");
}

// ==========================================
// 초기 정보 출력
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM 로드 완료!");
  console.log("갤러리 이미지 수:", document.querySelectorAll(".gallery img").length);
  console.log("섹션 개수:", document.querySelectorAll(".section").length);
});
