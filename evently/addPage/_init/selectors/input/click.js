function() {
        $.log("addPage - shownote - click.js");

        var docvalue= $("body").data.docEdited; //edata.docEdited;
        $.log(docvalue);
        var
                title = $('input[name=title]').val(),
                text = $('textarea#editTextField').val(),
                tags = $('input[name=tags]').val().split(" ");

        $("body").data.tagSelected=tags[0].toUpperCase();

        var document = {
                "type" : "note", "TextNote" : {
                        "note" : {
                                "title": title, "text" : text, "tags" : tags
                        }
                }
        };
        //no fields for docid and docrev in 'addpage' which is new doc
        // could check docvalue._id = 0

        $.log(document);
        doStoreDocument(document); //braucht das alte doc fuer die revision?

        $.log("addPage after store");
        $.log(document);
        $("#editContent").trigger("shownote");  //possible an argument, how to use?
        //      the saving of the id comes too late, async issue
        $.mobile.changePage("#titleListPage", "slidedown", true, true);
        // id is found too late
}
