function (data) {
    $.log("evently/titleListPage/pagebeforeshow.js" + data);
    $.log(data);
    $("#titleListContent").trigger("updateTitleList");
    return data;
}
