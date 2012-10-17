function(event, name, pass) {
    var target = $(event.target);
    $.log("selectNote in evently/titleListContent/updateTitleList/selectors/a");
    if (target.is('a')) {
        var idval = target.attr("id");
        $("body").data.idSelected=idval;
    }
}
