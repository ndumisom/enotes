function(event) {
        var target = $(event.currentTarget);
    //probably currentTarget needed because this is a button
        $.log("tagListPage - selectors - a -click.js ");
        $.log(event);
        $.log(target);
        var aid = target.attr("op");
        $.log("clicked - the operation is " + aid );
}
