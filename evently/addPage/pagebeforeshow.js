function (data) {
        $.log("evently/addPage/pagebeforeshow.js" + data)
        // indicates 'new note'
        $("body").data.idSelected = 0;
        $("#addContent").trigger("shownote");
        return data;
}
