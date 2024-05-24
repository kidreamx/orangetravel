const writeFrm = document.querySelector("#writeFrm")
console.log(writeFrm);

class Board { //객체에 데이터 저장
  constructor(indexNum, subjectStr, writerStr, contentStr) {
    this.index = indexNum;
    this.Subject = subjectStr;
    this.Writer = writerStr;
    this.Content = contentStr;
    this.date = recordDate();
    this.views = 0;
  }

  set Subject(value) {
    if (value.length === 0) throw new Error("제목을 입력해주세요.");
    this.subject = value;
  }

  set Writer(value) {
    if (value.length === 0) throw new Error("작성자를 입력해주세요.");
    this.writer = value;
  }

  set Content(value) {
    if (value.length === 0) throw new Error("내용을 입력해주세요.");
    this.content = value;
  }
}

const recordDate = () => {  // 작성 날짜
  const date = new Date();
  const yyyy = date.getFullYear();
  let mm = date.getMonth() + 1;
  let dd = date.getDate();

  mm = (mm > 9 ? "" : 0) + mm;
  dd = (dd > 9 ? "" : 0) + dd;

  const arr = [yyyy, mm, dd];

  return arr.join("-");
};

const submitHandler = (e) => {
  e.preventDefault();
  const subject = e.target.subject.value;
  const writer = e.target.writer.value;
  const content = e.target.content.value;

  try {
    // boards 가져오기
    const boardsObj = JSON.parse(localStorage.getItem("boards"));

    // 객체 추가
    const index = boardsObj.length;
    const instance = new Board(index, subject, writer, content);
    boardsObj.push(instance);

    // boards 저장
    const boardsStr = JSON.stringify(boardsObj);
    localStorage.setItem("boards", boardsStr);
    location.href = "./border.html?index=" + index;
  } catch (e) {
    // 예외 발생시 메시지 출력
    alert(e.message);
    console.error(e);
  }
};

writeFrm.addEventListener("submit", submitHandler);
