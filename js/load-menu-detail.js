

showMenu(cat_data);

function showMenu(dataMenu){
    var text_html = '';

    for (var key in dataMenu) {

        text_html = text_html +
        ' <li>' +
            ' <h2>'+key+'</h2>' +
            ' <ul class="links-list">';
        
        for (var j=0; j<dataMenu[key].length; j++) {
            text_html = text_html +
                ' <li><a class="a-menu-list" href="../?categori='+key.toLowerCase()+'&subcat='+dataMenu[key][j].toLowerCase()+'">'+dataMenu[key][j]+'</a></li>';
        }

        text_html = text_html +
            ' </ul>' +
        ' </li>';
    }
    document.getElementById("categories").innerHTML = text_html;
}