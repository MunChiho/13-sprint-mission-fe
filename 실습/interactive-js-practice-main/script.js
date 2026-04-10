// 이동은 append로!
const element = document.querySelector("#element");
const newParent = document.querySelector("#new-parent");

// element가 newParent의 자식으로 이동
newParent.append(element);
