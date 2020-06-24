(function(exports){
  function SingleNote(note) {
    this.note = note;
  }

  SingleNote.prototype.getHtml = function() {
    return `<div>${this.note.getText()}</div>`;
  };

  exports.SingleNote = SingleNote
})(this);
