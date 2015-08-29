//TODO ITEM EDIT


//when submit clicked call addNewItem
$('#todo').on('submit', addNewItem);

$('#todo').on('submit', inputReset);

// when remove button is clicked, remove item
$('#list').on('click', '.remove', deleteItem);

//change item status
$('#list').on('click', '.item', itemStatus);

//edit item 
$('#list').on('click', '.editButton', itemEdit);

//save edit on item
$('#list').on('submit', '.edit', editSave);

//clear list
$('#clear').on('click', clearList);

//FUCNTIONS

//function to reset input form
function inputReset(event) {
  $('#item').val("");
}

//function to add new item
function addNewItem(event) {

  event.preventDefault();
  
  var item = $('#item').val();

  $('#list').append("<li><span class='item'>" + item + "</span><button class='editButton'>edit</button><button class='remove'>remove</button></li>");
}

//function swith item complete/active
function itemStatus(event) {
  console.log("itemStatus is running");
  console.log($(this));

  var listItem = $(this).parent();
  console.log("parent is" + listItem);

  listItem.toggleClass('done');
}

//function to edit item
function itemEdit(event) {
  event.preventDefault();
  //check it;s running
  console.log("itemEdit is running");
  //set a var for text of item
  var itemText = $(this).siblings('.item').html();
  //check
  console.log("itemText is" + itemText);
  //set a var for the <li> iteself, which is the parent of this
  var listItem = $(this).parent();
  //replace listItem with input field with the value of itemText
  listItem.html("<form class='editor'><input class='edit' id='editItem' type='textbox' value='" + itemText + "'><button class='saveedit'>save edit</button></form>");
  //focus on input field
  listItem.find('input').focus();

}

//function to save edited item
// function editSave(event) {
//   event.preventDefault();
//   //check it's running
//   console.log("editSave is running");

//   //
//   var itemUpdate = $('.edit').val();
//   console.log(itemUpdate);
//   $('.save').click([itemUpdate], );
// }

//function to remove item
function deleteItem(event) {
  event.preventDefault;
  $(this).parent().remove();
  console.log("this function is running");
  
}


//function for clear list
function clearList(event) {
  $('#list li').remove();
  console.log("clear is running")
}












