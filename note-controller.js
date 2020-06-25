
(function(exports) {
  function NoteController(noteList) {
    this.noteListView = new NoteListView(noteList)
    this.noteList = noteList
  };

  NoteController.prototype.displayHtml = function() {
    document.getElementById("app").innerHTML = this.noteListView.displayView();
  };

  exports.NoteController = NoteController;
})(this);

function startListen(controller) {
  window.addEventListener("hashchange", function () {
    var noteID = window.location.hash.split("/")[1]
    var note = controller.noteList.getNotes()[noteID]
    this.document.getElementById('app').innerHTML = note.getText()
  });
}
