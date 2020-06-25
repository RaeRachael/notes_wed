// Takes a note list model upon instantiation

(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList;
  };

  NoteListView.prototype.displayView = function() {
      var notearray = this.noteList.getNotes();
      var output = '<ul>'
      notearray.forEach (function(note) {
        output += `<li><div><a href="#note/${note.getID()}">${note.getText().substring(0,20)}</a></div></li>`

      })
      output += '</ul>'
      return output
  };

  exports.NoteListView = NoteListView;
})(this);
