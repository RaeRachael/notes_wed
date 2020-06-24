(function(exports) {
  function Note(string, id) {
    this._text = string;
    this._id = id
  };

  Note.prototype.getText = function() {
    return this._text;
  };

  Note.prototype.getID = function() {
    return this._id;
  };

  exports.Note = Note;
})(this);
