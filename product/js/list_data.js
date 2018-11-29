
// document.getElementById("main-content").innerHTML = JSON.stringify(url_var,null,2);
// document.getElementById("main-content").innerHTML = "cat: "+url_var.categori;

listData();

function listData(){
    var url_var = getAllUrlParams();

    if (!('categori' in url_var)) {
        var local_data = data;

        document.getElementById("judul").innerHTML ='<a id="a-judul" href="">DAFTAR SEMUA PRODUK</a>';
        cetakData(local_data);
    }else{
        var filter_data = filterByCategories(data,url_var.categori,url_var.subcat);
        var text_link = '<a id="a-judul" href="?categori='+url_var.categori+'">'+url_var.categori.toUpperCase()+'</a>';

        if (url_var.subcat){
            text_link = text_link + ' &#10140; '+ '<a id="a-judul" href="?categori='+url_var.categori+'&subcat='+url_var.subcat+'">'+url_var.subcat.toUpperCase()+'</a>';
        }

        document.getElementById("judul").innerHTML = text_link;
        cetakData(filter_data);
    }
}

function cetakData(dataCetak){
    var text_html = '';

    for (var i=0; i<dataCetak.length; i++) {
        text_html = text_html +
        ' <a class="col-product" href="product/?code='+dataCetak[i].code+'">' +
            ' <div class="img-product">' +
                ' <img class="image" src="product/'+dataCetak[i].code+'/'+dataCetak[i].img_file[0]+'" alt="IMAGE">' +
            ' </div>' +
            ' <div class="cap-product">' +
                ' <p class="caption">'+dataCetak[i].caption+'</p>' +
                ' <p class="harga">'+dataCetak[i].harga+'</p>' +
            ' </div>' +
        ' </a>';
    }
    if (text_html == '') text_html = 'DATA TIDAK DITEMUKAN';
    document.getElementById("main-content").innerHTML = text_html;
}