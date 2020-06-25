function noteControllerInstantiated() {
  var noteList = new NoteList
  var noteController = new NoteController(noteList);
  assert.isTrue(noteController);
};

(function(exports) {
  function NoteListView() {
  }
  NoteListView.prototype.displayView = function() {
    return '<ul><li><div><a href="#note/0">Favourite drink: sel</a></div></li></ul>'
  }

  function Note() {
  }
  Note.prototype.getText = function() {
    return "Favourite drink: sel"
  }
  Note.prototype.getID = function() {
    return 0
  }

  function NoteList() {
  }
  NoteList.prototype.getNotes = function() {
    return [new Note()]
  }

  exports.NoteListView = NoteListView
  exports.NoteList = NoteList
})(this);

function noteControllerOutput() {
  var noteListDouble
  var noteController = new NoteController(noteListDouble);
  noteController.displayHtml()
  var string = '<ul><li><div><a href="#note/0">Favourite drink: sel</a></div></li></ul>'
  assert.isTrue(document.getElementById("app").innerHTML === string, "this test");
};

function clickedOnNote() {
  var noteListDouble = new NoteList
  var noteController = new NoteController(noteListDouble);
  noteController.displayHtml()
  document.getElementById("app").click()
  assert.isTrue(document.getElementById("app").innerHTML === "Favourite drink: sel", "single app HTML")
}


noteControllerInstantiated();
noteControllerOutput();
clickedOnNote();
