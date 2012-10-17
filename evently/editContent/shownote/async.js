function(callback) {
    var idvalue=$("body").data.idSelected;
    var emptydata = makeEmptyNote();
    $.log("evently/editContent/shownote/async.js: edit content - id is found " + idvalue);
    $.log($("body").data.tagSelected);
    $.log(emptydata);
    if (idvalue != 0) {
                        doGetDoc (idvalue, callback);
                        }
    else {callback (emptydata)};
}
