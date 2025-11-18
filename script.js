
function test() {
    let but = document.getElementById("start");
    let p = document.getElementById("p");
    let h1 = document.getElementById("h1");
    but.style.display = "none";
    p.style.display = "none";
    h1.innerText = "变绿时点击";
    let randnum = Math.random() * 3 + 1;
    let start = null;
    let screen = document.getElementById("screen");
    screen.style.backgroundColor = "#fff";
    let isGreen = false;
    screen.addEventListener("click", checkClick);
    let timer = setTimeout(() => {
        h1.innerText = "点击！";
        isGreen = true;
        screen.style.backgroundColor = "#0f0";
        start = new Date().getTime();
    }, randnum * 1000);
    function checkClick() {
        if (!isGreen) {
            h1.innerText = "过早点击";
            screen.style.backgroundColor = "#f00"; // 变红提示错误
            resetTest();
        } else {
            // 变绿后点击 → 正常计算反应时间
            result();
        }
    }
    function result() {
        let end = new Date().getTime();
        let result = end - start;
        let s = null;
        if (result <= 250) {
            s = "超快手速（优秀）";
        } else if (result <= 350) {
            s = "快速反应（良好）";
        } else if (result <= 500) {
            s = "正常水平（中等）";
        } else if (result <= 700) {
            s = "轻微迟缓（一般）";
        } else if (result <= 1000) {
            s = "明显迟缓（较差）";
        } else {
            s = "反应滞后（需关注）";
        }
        h1.innerText = `你的反应事件时 ${(result / 1000).toFixed(3)} 秒，结果为：${s}，刷新以重新测试`;
        screen.style.backgroundColor = "#fff";
        resetTest();
    }
    function resetTest() {
        clearTimeout(timer);
        screen.removeEventListener("click", checkClick);
        isGreen = false; // 重置状态
        but.style.display = "block"; // 重新显示开始按钮，允许再次测试
        but.innerText = "重新开始";
    }
}
