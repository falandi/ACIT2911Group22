function newElement() {
  var button = document.createElement("button")
    button.setAttribute("class", "completeBtn")
    button.setAttribute("onClick", "Completed()")
  var Remove = document.createElement("button")
    Remove.setAttribute("class", "removeBtn")
    Remove.setAttribute("onClick", "deleteConfirmation()")
    Remove.setAttribute("padding", "5px")
    Remove.textContent = "Remove"
  var li = document.createElement("li")
  var textarea = document.createElement("textarea")
    textarea.setAttribute("rows","1")
    textarea.setAttribute("cols","10")
    textarea.setAttribute("class","to-do_text")
  var date = document.createElement("input")
    date.setAttribute("id", "date")
    date.setAttribute("type", "datetime-local")
    date.setAttribute("max", "2030-12-31")
  var inputValue = document.getElementById("myInput").value;
  var text = document.createTextNode(inputValue);
  textarea.appendChild(text)
  li.setAttribute("class", "task")
  li.appendChild(button)
  li.appendChild(textarea)
  li.appendChild(date)

  if (inputValue === '') {
      alert("Please write a To-Do!");
  } else {
      document.getElementById("lItem").appendChild(li);
  }
  var span = document.createElement("SPAN")
  span.className  = "close"
  span.appendChild(Remove)
  li.appendChild(span)

  document.getElementById("myInput").value = ""
    var button = document.createElement("button")
      button.setAttribute("class", "completeBtn")
      button.setAttribute("onClick", "Completed()")
    var Remove = document.createElement("button")
      Remove.setAttribute("class", "removeBtn")
      Remove.setAttribute("onClick", "deleteConfirmation()")
      Remove.setAttribute("padding", "5px")
      Remove.textContent = "Remove"
    var Edit = document.createElement("button")
      Edit.setAttribute("class", "editBtn")
      Edit.setAttribute("onClick", "Edit()")
      Edit.textContent = "Edit"
    var li = document.createElement("li")
    var textarea = document.createElement("textarea")
      textarea.setAttribute("rows","1")
      textarea.setAttribute("cols","10")
      textarea.setAttribute("class","to-do_text")
    var date = document.createElement("input")
      date.setAttribute("id", "date")
      date.setAttribute("type", "datetime-local")
      date.setAttribute("max", "2030-12-31")
    var inputValue = document.getElementById("myInput").value;
    var text = document.createTextNode(inputValue);
    textarea.appendChild(text)
    li.appendChild(button)
    li.appendChild(textarea)
    li.appendChild(date)

    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("lItem").appendChild(li);
    }
    var span = document.createElement("SPAN")
    span.className  = "close"
    span.appendChild(Remove)
    span.appendChild(Edit)
    li.appendChild(span)

}

function newList() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myLists").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("lists").appendChild(li);
  }
}

function Remove() {
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
close[i].onclick = function() {
  var div = this.parentElement;
  div.style.display = "none";
  }
}
}

function deleteConfirmation() {
let confirmation = "Are you sure you want to delete this task?";
if (confirm(confirmation) == true) {
  Remove();
}
}


function search() {
// Declare variables
var input, filter, ul, li, a, i, txtValue, txtarea;
input = document.getElementById('search');
filter = input.value.toUpperCase();
ul = document.getElementById("lItem");
li = ul.getElementsByTagName('li');
txtarea = document.getElementById("to-do_text")

// Loop through all list items, and hide those who don't match the search query
for (i = 0; i < li.length; i++) {
  a = document.getElementById("lItem");
  txtValue = a.textContent;
  item = li[i]
  console.log(item)
  if (txtValue.toUpperCase().indexOf(filter) > -1) {
    li[i].style.display = "";
  } else {
    li[i].style.display = "none";
  }
}
}

function Completed() {
var li = document.getElementsByClassName('task');
var clist = document.getElementById("CItem")

for (var i=0; i < li.length;i++) {
  var item = li[i]
  item.addEventListener("click", function() {
  
  clist.appendChild(this)
  })

}

}

// module.exports = deleteConfirmation, Completed, Remove, newList, moveListItem

