function displayTitle(){
    var  curWeek = '3.02.2025 - 3.08.2025';
    const title = `<h1>本周(${curWeek})晨兴与读经进度</h1><hr>`;
    document.getElementById("title").innerHTML = title;
}

function displayMorningRevival(){
    const title = '<h2>晨兴圣言</h2>';
    const book = '2024年秋季长老负责弟兄训练 活在神国的实际里';
    const chapter = "第三周 国度与召会"
    const link = "https://stemofjesse.org/doku/doku.php/%E6%99%A8%E5%85%B4%E5%9C%A3%E8%A8%80:2024:2024.05.%E7%A7%8B%E5%AD%A3%E9%95%BF%E8%80%81%E8%B4%9F%E8%B4%A3%E5%BC%9F%E5%85%84%E8%AE%AD%E7%BB%83:%E7%AC%AC%E4%B8%89%E5%91%A8";
    const content = `<h3><ul><li>书目: ${book}</li><li>进度: <a href=${link}>${chapter}</a></li></ul></h3>`;
    document.getElementById("morningrevival").innerHTML = title + content;
}

function displayBible(){
    const title = '<h2>圣经</h2>';
    const old_test = "创世记";
    const old_test_cov = "第44~48章";
    const old_test_link = "https://www.recoveryversion.com.tw/Style0A/026/read_List.php?f_BookNo=1&f_ChapterNo=44";
    const new_test = "马可福音";
    const new_test_cov = "第16章";
    const new_test_link = "https://www.recoveryversion.com.tw/Style0A/026/read_List.php?f_BookNo=41&f_ChapterNo=11";
    const new_test2 = "路加福音";
    const new_test_cov2 = "第1~4章";
    const new_test_link2 = "https://www.recoveryversion.com.tw/Style0A/026/read_List.php?f_BookNo=42&f_ChapterNo=1";
    const content = `<h3><ul><li>旧约: ${old_test} <a href=${old_test_link}>${old_test_cov}</a></li><li>新约: ${new_test} <a href=${new_test_link}>${new_test_cov}</a></li><li>新约: ${new_test2} <a href=${new_test_link2}>${new_test_cov2}</a></li></ul></h3>`;
    document.getElementById("bible").innerHTML = title + content;
}

function displayLifeStudy(){
    const title = '<h2>生命读经</h2>';
    const book = "罗马书生命读经";
    const coverage = "第25~32篇";
    const link = "https://simplified.lsmchinese.org/lifestudy/roma-idx.html";
    const date = "3/13/2025";
    const content = `<h3><ul><li>进度: ${book} <a href=${link}>${coverage}</a></li><li>展览日期: ${date}</li></ul></h3>`;
    document.getElementById("lifestudy").innerHTML = title + content;
}

displayTitle();
displayMorningRevival();
displayBible();
displayLifeStudy();


