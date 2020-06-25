function noteControllerInstantiated() {
  var noteList = new NoteList
  var noteController = new NoteController(noteList);
  assert.isTrue(noteController);
};

(function(exports) {
  function NoteListView() {
  }
  NoteListView.prototype.displayView = function() {

    var noteZeroString = '<li><div><a id="note/0" href="#note/0">Favourite drink: sel</a></div></li>'
    var noteOneString = '<li><div><a id="note/1" href="#note/1">helllloooooooo</a></div></li>'
    var string = '<ul>' + noteZeroString + noteOneString + '</ul>'
    return string
  }

  function Note(toggle) {
    this.toggle = toggle
  }
  Note.prototype.getText = function() {

    if (this.toggle ===  "yes") {
      return "Favourite drink: sel"
    } else {
      return "helllloooooooo"
    }

  }
  Note.prototype.getID = function() {

    if (this.toggle ===  "yes") {
      return 0
    } else {
      return 1
    }
  }


  function NoteList() {
  }
  NoteList.prototype.getNotes = function() {
    return [new Note("yes"), new Note("no")]
  }

  exports.NoteListView = NoteListView
  exports.NoteList = NoteList
})(this);

function noteControllerOutput() {
  var noteListDouble
  var noteController = new NoteController(noteListDouble);
  noteController.displayHtml()
  var noteZeroString = '<li><div><a id="note/0" href="#note/0">Favourite drink: sel</a></div></li>'
  var noteOneString = '<li><div><a id="note/1" href="#note/1">helllloooooooo</a></div></li>'
  var string = '<ul>' + noteZeroString + noteOneString + '</ul>'
  assert.isTrue(document.getElementById("app").innerHTML === string, "this test");
};

function clickedOnNote1() {
  var noteListDouble = new NoteList
  console.log(noteListDouble.getNotes(), 1)
  var noteController = new NoteController(noteListDouble);
  noteController.displayHtml()
  startListen(noteController)
  document.getElementById("note/0").click()
  setTimeout(() => {
    assert.isTrue(document.getElementById("app").innerHTML === "Favourite drink: sel", "single app HTML")
    console.log(document.getElementById("app").innerHTML,2);
  }, 500);
}

function clickedOnNote2() {
  var noteListDouble = new NoteList
  console.log(noteListDouble.getNotes(), 2)
  var noteController = new NoteController(noteListDouble);
  noteController.displayHtml()
  startListen(noteController)
  document.getElementById("note/1").click()
  setTimeout(() => {
    assert.isTrue(document.getElementById("app").innerHTML === "helllloooooooo", "secondHTMLOutput")
    console.log(document.getElementById("app").innerHTML,2);
  }, 500);
}


noteControllerInstantiated();
noteControllerOutput();
clickedOnNote1();
setTimeout(() => {
clickedOnNote2();
}, 1000);
