function noteControllerInstantiated() {
  var noteList = new NoteList
  var noteController = new NoteController(noteList);
  assert.isTrue(noteController);
};

(function(exports) {
  function NoteListView() {
  }
  NoteListView.prototype.displayView = function() {
    return '<ul><li><div>Favourite drink: sel</div></li></ul>'
  }

  exports.NoteListView = NoteListView
})(this);

function noteControllerOutput() {
  var noteListDouble
  var noteController = new NoteController(noteListDouble);
  noteController.displayHtml()
  var string = '<ul><li><div>Favourite drink: sel</div></li></ul>'
  assert.isTrue(document.getElementById("app").innerHTML === string);
};


noteControllerInstantiated();
noteControllerOutput();
