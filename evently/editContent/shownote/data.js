function (data) {
    var note;
    $.log("evently/editContent/shownote/data.js");
    $.log(data);
    $("bdoy").data.docEdited=data;
    var noteContent=data.TextNote.note;
    noteContent.taglist=data.TextNote.note.tags.join(" ");
    $.log(noteContent);
    $.log("put doc in docEdited");
    return noteContent;
}
