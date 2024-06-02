import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, getDocs, collection } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAZtBOfNz-cKXbAqne3CzfH2xmoDoqCX8s",
  authDomain: "giveup-spring.firebaseapp.com",
  projectId: "giveup-spring",
  storageBucket: "giveup-spring.appspot.com",
  messagingSenderId: "701630073980",
  appId: "1:701630073980:web:534d93e0885b1e50334df9",
  measurementId: "G-NW45JJLY8Z"
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function loadPosts() {
  try {
    const querySnapshot = await getDocs(collection(db, "posts"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      renderPost(doc.data());
    });
  } catch (error) {
    console.error("Error loading posts: ", error);
  }
}

function renderPost(postData) {
  const tbody = document.querySelector("tbody");

  const template = `
    <tr>
      <td>${tbody.children.length + 1}</td>
      <td><a href="./view.html?index=${postData.index}">${postData.subject}</a></td>
      <td>${postData.writer}</td>
      <td>${postData.date}</td>
      <td>${postData.views}</td>
    </tr>
  `;

  tbody.innerHTML += template;
}

document.addEventListener("DOMContentLoaded", async () => {
  await loadPosts();

  let boardsStr = localStorage.getItem("boards");
  // localStorage가 비어있으면 빈 배열 저장
  if (boardsStr === null) {
    const listStr = JSON.stringify([]);
    localStorage.setItem("boards", listStr);
    boardsStr = listStr;
  }

  const boardsObj = JSON.parse(boardsStr);
  // 로컬 스토리지에서 가져온 데이터를 템플릿에 맞게 HTML에 삽입
  for (let i = 0; i < boardsObj.length; i++) {
    renderPost(boardsObj[i]);
  }
});
