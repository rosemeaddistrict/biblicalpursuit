const curWeekLink = "https://chenin0423.synology.me:5001/";

function displayTitle(){
    var  curWeek = '8.10.2025 - 8.16.2025';
    const title = `<h1>本周(${curWeek})晨兴与读经进度</a></h1><hr>`;
    document.getElementById("title").innerHTML = title;
}

function displayMorningRevival(){
    const title = '<h2>晨兴圣言</h2>';
    const book = '2025年春季长老负责弟兄训练 同心合意以及使徒行传极重要的方面';
    const chapter = "第一周 使徒行传的继续—基督团体的继续"
    const link = curWeekLink;
    //const link = "https://stemofjesse.org/doku/doku.php/%E6%99%A8%E5%85%B4%E5%9C%A3%E8%A8%80:2024:2024.05.%E7%A7%8B%E5%AD%A3%E9%95%BF%E8%80%81%E8%B4%9F%E8%B4%A3%E5%BC%9F%E5%85%84%E8%AE%AD%E7%BB%83:%E7%AC%AC%E5%85%AD%E5%91%A8";
    const content = `<h3><ul><li>书目: ${book}</li><li>进度: <a href=${link}>${chapter}</a></li></ul></h3>`;
    document.getElementById("morningrevival").innerHTML = title + content;
}

function displayBible(){
    const title = '<h2>圣经</h2>';
    const old_test = "申命记";
    const old_test_cov = "第6~10章"
    const old_test_link = curWeekLink;
    const new_test = "哥林多后书";
    const new_test_cov = "第10~13章";
    const new_test1 = "加拉太书";
    const new_test_cov1 = "第1章";
    const new_test_link = curWeekLink;
    const content = `<h3><ul><li>旧约: ${old_test} <a href=${old_test_link}>${old_test_cov}</a></li><li>新约: ${new_test} <a href=${new_test_link}>${new_test_cov}</a> ${new_test1} <a href=${new_test_link}>${new_test_cov1}</a></li></ul></h3>`;
    document.getElementById("bible").innerHTML = title + content;
}

function displayLifeStudy(){
    const title = '<h2>生命读经</h2>';
    const book = "雅歌";
    const coverage = "一章1节～二章七节：(雅歌生命读经 [一至二篇]，雅歌结晶读经 [一至四篇]，歌中之歌 [导言，题目，分段，第一段])";
    const link = curWeekLink;
    const date = "8.21.2025";
    const content = `<h3><ul><li>进度: ${book} <a href=${link}>${coverage}</a></li><li>展览日期: ${date}</li></ul></h3>`;
    document.getElementById("lifestudy").innerHTML = title + content;
}

displayTitle();
displayMorningRevival();
displayBible();
displayLifeStudy();


