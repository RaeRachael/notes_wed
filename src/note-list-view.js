// Takes a note list model upon instantiation

(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList;
  };

  NoteListView.prototype.displayView = function() {
      var notearray = this.noteList.getNotes();
      var output = ''
      notearray.forEach (function(note) {
        output += `<ul><li><div>${note.getText().substring(0,20)}</div></li></ul>`
      })
      return output
  };

  exports.NoteListView = NoteListView;
})(this);
