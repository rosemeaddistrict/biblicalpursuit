const curWeekLink = "https://chenin0423.synology.me:5001/";

function displayTitle(){
    var  curWeek = '10.19.2025 - 10.25.2025';
    const title = `<h1>本周(${curWeek})晨兴与读经进度</a></h1><hr>`;
    document.getElementById("title").innerHTML = title;
}

function displayMorningRevival(){
    const title = '<h2>晨兴圣言</h2>';
    const book = '2025年夏季训练 经历、享受并彰显基督（三）';
    const chapter = "第二周 认识基督作我们的榜样并以祂为榜样"
    const link = curWeekLink;
    //const link = "https://stemofjesse.org/doku/doku.php/%E6%99%A8%E5%85%B4%E5%9C%A3%E8%A8%80:2024:2024.05.%E7%A7%8B%E5%AD%A3%E9%95%BF%E8%80%81%E8%B4%9F%E8%B4%A3%E5%BC%9F%E5%85%84%E8%AE%AD%E7%BB%83:%E7%AC%AC%E5%85%AD%E5%91%A8";
    const content = `<h3><ul><li>书目: ${book}</li><li>进度: <a href=${link}>${chapter}</a></li></ul></h3>`;
    document.getElementById("morningrevival").innerHTML = title + content;
}

function displayBible(){
    const title = '<h2>圣经</h2>';
    const old_test = "约书亚记";
    const old_test_cov = "第22~24章"
    const old_test1 = "士师记";
    const old_test_cov1 = "第1~2章"
    const old_test_link = curWeekLink;
    const new_test = "希伯来书";
    const new_test_cov = "第5~9章";
    const new_test_link = curWeekLink;
    const content = `<h3><ul><li>旧约: ${old_test} <a href=${old_test_link}>${old_test_cov}</a> ${old_test1} <a href=${old_test_link}>${old_test_cov1}</a></li><li>新约: ${new_test} <a href=${new_test_link}>${new_test_cov}</a></li></ul></h3>`;
    document.getElementById("bible").innerHTML = title + content;
}

function displayLifeStudy(){
    const title = '<h2>生命读经</h2>';
    const book = "雅歌";
    const coverage = "雅歌三章6節～五章1節(追求材料：雅歌生命讀經 [第四，五篇]，雅歌結晶讀經 [第七至九篇]，歌中之歌 [第三段])";
    const link = curWeekLink;
    const date = "10.23.2025";
    const content = `<h3><ul><li>进度: ${book} <a href=${link}>${coverage}</a></li><li>展览日期: ${date}</li></ul></h3>`;
    document.getElementById("lifestudy").innerHTML = title + content;
}

displayTitle();
displayMorningRevival();
displayBible();
displayLifeStudy();


