const curWeekLink = "https://chenin0423.synology.me:5001/";

function displayTitle(){
    var  curWeek = '11.23.2025 - 11.29.2025';
    const title = `<h1>本周(${curWeek})晨兴与读经进度</a></h1><hr>`;
    document.getElementById("title").innerHTML = title;
}

function displayMorningRevival(){
    const title = '<h2>晨兴圣言</h2>';
    const book = '2025年夏季训练 经历、享受并彰显基督（三）';
    const chapter = "第七周 救恩的创始者（元帅）和先锋，领许多的儿子借着进入幔内并出到营外而进荣耀里去"
    const link = curWeekLink;
    //const link = "https://stemofjesse.org/doku/doku.php/%E6%99%A8%E5%85%B4%E5%9C%A3%E8%A8%80:2024:2024.05.%E7%A7%8B%E5%AD%A3%E9%95%BF%E8%80%81%E8%B4%9F%E8%B4%A3%E5%BC%9F%E5%85%84%E8%AE%AD%E7%BB%83:%E7%AC%AC%E5%85%AD%E5%91%A8";
    const content = `<h3><ul><li>书目: ${book}</li><li>进度: <a href=${link}>${chapter}</a></li></ul></h3>`;
    document.getElementById("morningrevival").innerHTML = title + content;
}

function displayBible(){
    const title = '<h2>圣经</h2>';
    const old_test = "路得记";
    const old_test_cov = "第2~4章"
    const old_test1 = "撒母耳记上";
    const old_test_cov1 = "第1~2章"
    const old_test_link = curWeekLink;
    const new_test = "";
    const new_test_cov = "约翰一书 第4~5章, 约翰二书 第1章, 约翰三书 第1章, 犹大书 第1章";
    const new_test_link = curWeekLink;
    const content = `<h3><ul><li>旧约: ${old_test} <a href=${old_test_link}>${old_test_cov}</a> ${old_test1} <a href=${old_test_link}>${old_test_cov1}</a></li><li>新约: ${new_test} <a href=${new_test_link}>${new_test_cov}</a></li></ul></h3>`;
    document.getElementById("bible").innerHTML = title + content;
}

function displayLifeStudy(){
    const title = '<h2>生命读经</h2>';
    const book = "";
    const coverage = "";
    const link = curWeekLink;
    const date = "12.18.2025";
    const content = `<h3><ul><li>进度: ${book} <a href=${link}>${coverage}</a></li><li>展览日期: ${date}</li></ul></h3>`;
    document.getElementById("lifestudy").innerHTML = title + content;
}

displayTitle();
displayMorningRevival();
displayBible();
displayLifeStudy();


