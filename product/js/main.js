
function getAllUrlParams(url) {
    var queryString = url ? url.split('?')[1] : window.location.search.slice(1);
    var obj = {};
  
    if (queryString) {
      queryString = queryString.split('#')[0];
      var arr = queryString.split('&');
  
      for (var i = 0; i < arr.length; i++) {
        var a = arr[i].split('=');
        var paramName = a[0];
        var paramValue = typeof (a[1]) === 'undefined' ? true : a[1];
  
        paramName = paramName.toLowerCase();
        if (typeof paramValue === 'string') {
          paramValue = paramValue.toLowerCase();
          paramValue = paramValue.replace(/%20/g,' '); 
        }

        if (paramName.match(/\[(\d+)?\]$/)) {
          var key = paramName.replace(/\[(\d+)?\]/, '');
          if (!obj[key]) obj[key] = [];
  
          if (paramName.match(/\[\d+\]$/)) {
            var index = /\[(\d+)\]/.exec(paramName)[1];
            obj[key][index] = paramValue;
          } else {
            obj[key].push(paramValue);
          }
        } else {
          if (!obj[paramName]) {
            obj[paramName] = paramValue;
          } else if (obj[paramName] && typeof obj[paramName] === 'string'){
            obj[paramName] = [obj[paramName]];
            obj[paramName].push(paramValue);
          } else {
            obj[paramName].push(paramValue);
          }
        }
      }
    }
    
    return obj;
  }

  function filterByCategories(aData,cat_name,sub_name){
    var rData=[];

    if ((cat_name) && (cat_name.trim().length>0)) {
      for (var i=0; i<aData.length; i++) {
        if ( !(sub_name) || (sub_name.trim().length == 0)) {
          if (aData[i].categori[0].toLowerCase() == cat_name.toLowerCase()) {
              rData.push(aData[i]);
            } 
        }else{ 
          if ((aData[i].categori[0].toLowerCase() == cat_name.toLowerCase()) && 
              (aData[i].categori[1].toLowerCase() == sub_name.toLowerCase())) {
            rData.push(aData[i]);
          }  
        }
      }
    }

    return rData;
  }