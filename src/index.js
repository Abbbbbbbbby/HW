console.log('Hello, webpack JS!');

const images = [
  "https://im.uniqlo.com/global-cms/spa/resc59e38cf85fc29a5686c11729156917dfr.jpg", 
  "https://im.uniqlo.com/global-cms/spa/res83e215ab9b13e9760f72144b471bbd6afr.jpg",
  "https://i0.wp.com/uploads.saigacdn.com/2022/05/monsterhunter-mofusand-collabo-00.jpg?resize=860,455"];

const texts= [
  ["一之一","一之二","一之三"],
  ["二之一","二之二","二之三"],
  ["三之一","三之二","三之三"]];

  //圖片自動輪播
let indexImg = 0;
  setInterval(() => {
    indexImg = (indexImg + 1) % images.length; // 循環索引
    document.getElementById("slideshow").src = images[indexImg];
  }, 3000); // 每 3 秒切換一次

//文字輪播
const currentIndex = [0, 0, 0]; // 每一組目前的位置
    let currentGroup = null; // 現在在哪一組
    let intervalId = null;

    function clickB(groupNum) {
      // 若點的是同一組，就什麼都不做
      if (groupNum === currentGroup) return;

      // 停止之前的輪播
      clearInterval(intervalId);

      currentGroup = groupNum;
      const textBox = document.getElementById("slideshowText");

      // 立即顯示目前該組的位置
      textBox.textContent = texts[groupNum][currentIndex[groupNum]];

      // 開始新的輪播
      intervalId = setInterval(() => {
        currentIndex[groupNum] = (currentIndex[groupNum] + 1) % texts[groupNum].length;
        textBox.textContent = texts[groupNum][currentIndex[groupNum]];
      }, 3000);
    }

function clickA(num) {
  console.log('Click A',num);
  // 根據按鈕數字換不同圖片
  document.querySelector('.img1').src = images[num] || '';
}


window.clickA = clickA; // Expose clickA to the global scope
window.clickB = clickB;
