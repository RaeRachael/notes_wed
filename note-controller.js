
(function(exports) {
  function NoteController(noteList) {
    this.noteListView = new NoteListView(noteList)
  };

  NoteController.prototype.displayHtml = function() {
    document.getElementById("app").innerHTML = this.noteListView.displayView();
  };

   window.addEventListener("hashchange", clickedOn)

   function clickedOn() {
     console.log("clicked", 5)
   }

  exports.NoteController = NoteController;
})(this);
