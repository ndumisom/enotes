function (data) {
    $.log("evently/titleListContent/updateTitleList/data.js");
    var tag =  $("body").data.tagSelected;
    data.key = tag;
    return  data;
}
