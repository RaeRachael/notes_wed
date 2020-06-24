(function(exports) {
  function Note(string, id) {
    this.text = string;
    this.id = id
  };

  Note.prototype.getText = function() {
    return this.text;
  };

  Note.prototype.getID = function() {
    return this.id;
  };

  exports.Note = Note;
  // exports.noteNumber = noteNumber !How to update the noteNumber!
})(this);
