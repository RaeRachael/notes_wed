
(function(exports) {
  function NoteController(noteList) {
    this.noteListView = new NoteListView(noteList)
    this.noteList = noteList
    window.addEventListener("hashchange", clickedOn(noteList))
  };

  NoteController.prototype.displayHtml = function() {
    document.getElementById("app").innerHTML = this.noteListView.displayView();
  };

  function clickedOn(noteList) {
     
      var correctNoteId = window.location.hash.split("/")[1];
      correctText = ""
      noteList.getNotes().forEach (function(note) {
        if (note.getID() === correctNoteId) {
          correctText = note.getText()
          console.log(correctText, 1)
          }
      })
      console.log(correctText, 2)
      document.getElementById("app").innerHTML = correctText;
      console.log("clicked", 5)
    }

  exports.NoteController = NoteController;
})(this);

