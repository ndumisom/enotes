function(callback) {
    $.log("evently/titleListContent/updateTitleList/async.js" );
    var tag = $("body").data.tagSelected;
    var titleWord = $("body").data.titleSearchString;
    var textWord = $("body").data.textSearchString;
    if (tag) {
        doView ("DocbyTag2", { "key":tag}, callback);
        } else if (titleWord) {doView ("byTitleWord",
            {"reduce" :false, "key":titleWord}, callback);
        } else if (textWord) {doView ("byTextWord",
            {"reduce" : false, "key" : textWord}, callback);
    };
}
