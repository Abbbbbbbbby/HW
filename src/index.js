console.log('Hello, webpack JS!');

function clickA(num) {
    console.log('Click A',num);
  // 根據按鈕數字換不同圖片
    const images = {
      1: 'https://im.uniqlo.com/global-cms/spa/resc59e38cf85fc29a5686c11729156917dfr.jpg',
      2: 'https://im.uniqlo.com/global-cms/spa/res83e215ab9b13e9760f72144b471bbd6afr.jpg',
      3: 'https://i0.wp.com/uploads.saigacdn.com/2022/05/monsterhunter-mofusand-collabo-00.jpg?resize=860,455',
    };

    document.querySelector('.img1').src = images[num] || '';
  }

function clickB(num) {
    console.log('Click B',num);
    const texts= {
        1:"這是第一段文字",
        2:"這是第二段文字",
        3:"這是第三段文字",
    } 
    document.querySelector(".app").textContent=texts[num]|| '';
}

window.clickA = clickA; // Expose clickA to the global scope
window.clickB = clickB;