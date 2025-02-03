function displayTitle(){
    var  curWeek = '2.02.2025 - 2.08.2025';
    const title = `<h1>本周(${curWeek})晨兴与读经进度</h1><hr>`;
    document.getElementById("title").innerHTML = title;
}

function displayMorningRevival(){
    const title = '<h2>晨兴圣言</h2>';
    const book = '2024年夏季训练 经历、享受并彰显基督（一）';
    const chapter = "第十二周 神圣的三一、耶稣的灵与神的国"
    const link = "https://stemofjesse.org/doku/doku.php/%E6%99%A8%E5%85%B4%E5%9C%A3%E8%A8%80:2024:2024.04.%E5%A4%8F%E5%AD%A3%E8%AE%AD%E7%BB%83:%E7%AC%AC%E5%8D%81%E4%BA%8C%E5%91%A8";
    const content = `<h3><ul><li>书目: ${book}</li><li>进度: <a href=${link}>${chapter}</a></li></ul></h3>`;
    document.getElementById("morningrevival").innerHTML = title + content;
}

function displayBible(){
    const title = '<h2>圣经</h2>';
    const old_test = "创世记";
    const old_test_cov = "第24~28章";
    const old_test_link = "https://www.recoveryversion.com.tw/Style0A/026/read_List.php?f_BookNo=1&f_ChapterNo=24";
    const new_test = "马太福音";
    const new_test_cov = "第24~28章";
    const new_test_link = "https://www.recoveryversion.com.tw/Style0A/026/read_List.php?f_BookNo=40&f_ChapterNo=24";
    const content = `<h3><ul><li>旧约: ${old_test} <a href=${old_test_link}>${old_test_cov}</a></li><li>新约: ${new_test} <a href=${new_test_link}>${new_test_cov}</a></li></ul></h3>`;
    document.getElementById("bible").innerHTML = title + content;
}

function displayLifeStudy(){
    const title = '<h2>生命读经</h2>';
    const book = "罗马书生命读经";
    const coverage = "第17~24篇";
    const link = "https://simplified.lsmchinese.org/lifestudy/roma-idx.html";
    const date = "2/13/2025";
    const content = `<h3><ul><li>进度: ${book} <a href=${link}>${coverage}</a></li><li>展览日期: ${date}</li></ul></h3>`;
    document.getElementById("lifestudy").innerHTML = title + content;
}

displayTitle();
displayMorningRevival();
displayBible();
displayLifeStudy();


