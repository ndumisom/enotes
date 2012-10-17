$dbname = "enotes";
$appname= "enotes";
$db = $.couch.db($dbname);

$("body").data =    { "tagSelected" : "NOTAG"
                , "idSelected" : 0
                , "docEdited" : ""
                , "tagsUsed"  : []
                , "textSearchString" : false
                , "titleSearchString" : false
                , "tagSelected" : false
                };
$.couch.app(function (app) {
        $("#addContent").evently("editContent", app);
        $("#addPage").evently("addPage", app);
        $("#tagListPage").evently("tagListPage", app);
        $("#tagListContent").evently("tagListContent", app);
        $("#titleListPage").evently("titleListPage", app);
        $("#titleListContent").evently("titleListContent", app);
        $("#editPage").evently("editPage", app);
        $("#editContent").evently("editContent", app);
});
function makeEmptyNote () {
        $.log("logic.js - makeEmptyNote");
        var emptynote = {"_id" :  ""
                , "_rev" : ""
                , "type" : "note"
                , "TextNote" : {"note" : {"title": ""
                        , "text" : ""
                        , "tags" : []
                }
                }
        };
        return emptynote;
};
