let self = this;

// 搜索功能（预留）
function searchbutton() {
    let searchWords = document.querySelector('#index-search-1');
    let queryWords = searchWords;
    if (queryWords.value !== "") {
        alert('搜索功能目前无法使用，但我知道你查询的内容是 ' + queryWords.value);
    } else {
        alert('你还没有输入任何内容');
    }
}