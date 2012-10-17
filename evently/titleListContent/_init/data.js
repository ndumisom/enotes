function (data) {
    $.log("evently/tagListContent/_init/data.js" )
    var thetags = data.rows.map(function(x)
        {var t=x.key;
        return t;});
    $("body").data.tagsUsed = thetags;
    // store them for later use in input gui
    return data;
}
