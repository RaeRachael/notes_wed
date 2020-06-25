
(function(exports) {
  function NoteController(noteList) {
    this.noteListView = new NoteListView(noteList)
  };

  NoteController.prototype.displayHtml = function() {
    document.getElementById("app").innerHTML = this.noteListView.displayView();
  };

   window.addEventListener("hashchange", clickedOn)

   async function clickedOn() {
     correctText = "Favourite drink: sel"
     document.getElementById("app").innerHTML = correctText;
     console.log("clicked", 5)
   }

  exports.NoteController = NoteController;
})(this);
