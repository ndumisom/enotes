function (data) {
    $.log("evently/tagListPage/pagebeforeshow.js" + data)
    $.log(data);
    $("#tagListContent").trigger("_init"); // ("updateTagList" );
    return data;
}

