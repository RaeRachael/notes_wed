function testNoteStoresNote() {
  var note = new Note('My favourite language is JavaScript');
  assert.isTrue(note.getText() === 'My favourite language is JavaScript');
};

function testNoteID() {
  var noteList = new NoteList
  noteList.addNote("I'm first")
  assert.isTrue(noteList.getNotes()[0].getID() === 0, "note id test");
}

function testNoteListStoresNote() {
  var noteList = new NoteList();
  noteList.addNote("note 1")
  noteList.addNote("note 2")
  assert.isTrue(noteList.getNotes()[0].getText() === "note 1", "getText test1");
  assert.isTrue(noteList.getNotes()[1].getText() === "note 2", "getText test2");
};

function testNoteListViewOutputsHTML() {
  var noteList = new NoteList();
  noteList.addNote("Favourite drink: seltzer")
  var noteListView = new NoteListView(noteList);
  var text = 'Favourite drink: seltzer'.substring(0,20)
  var string1 = `<ul><li><div>${text}</div></li></ul>`
  assert.isTrue(noteListView.displayView() === string1,"noteListView.displayView() === string1")
}
function testNoteListViewOutputsHTML0note() {
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.displayView() === '', "noteListView.displayView === ''")
}
function testNoteListViewOutputsHTMLmanynote() {
  var noteList = new NoteList();
  noteList.addNote("Favourite drink: seltzer")
  noteList.addNote("eeck, need a test")
  var noteListView = new NoteListView(noteList);
  var text1 = "Favourite drink: seltzer".substring(0,20);
  var text2 = "eeck, need a test".substring(0,20)
  var string2 = `<ul><li><div>${text1}</div></li></ul><ul><li><div>${text2}</div></li></ul>`
  assert.isTrue(noteListView.displayView() === string2,"noteListView.displayView() === string2")
}


testNoteStoresNote();
testNoteID();
testNoteListStoresNote();
testNoteListViewOutputsHTML();
testNoteListViewOutputsHTML0note();
testNoteListViewOutputsHTMLmanynote();
