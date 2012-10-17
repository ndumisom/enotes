function (data) {
    function split( val ) {
        return val.split( /,\s*/ );
    }
    $.log("evently/shownote/after.js" + data)
    $.log(data);
    var thetags=$("body").data.tagsUsed;
    $.log(thetags);
    $("#editTagsField").autocomplete({source:thetags,
        max: 6,
        highlightItem: true,
        multiple: true,
        multipleSeparator: " "
        });
    return data;
}
