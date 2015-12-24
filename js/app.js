$(init);

function init () {
  fetchUser();
}

var $body = $('body');
var $input;

//create input field for 'username' with 'fetch' button
function fetchUser () {
  // create username input field with username initial value
  $input = $('<input />');
  $input.val('Username');

  // create fetch button
  var $fetch = $('<button />');
  $fetch.attr('id', 'fetch');
  $fetch.text('Fetch');

  $fetch.click(function (event) {
    var targetUsername = $input.val();
    var ajaxUrl = 'https://api.github.com/users/' + targetUsername + '/repos';

    $.ajax(ajaxUrl, {
      success: createRepoList
    });

  });

  $body.append($input);
  $body.append($fetch);
}

// ajax function to grab repos by username
// $(function() {
//   $.ajax('https://api.github.com/users/cleong14/repos', {
//     success: createRepoList
//   });
// });

function createRepoList (user) {
  for (var i = 0; i < user.length; i++) {
    // current obj in arr
    var currentRepoName = user[i].name;
    var repoList = $('#repos');
    var $currentListItem = $('<li />');

    $currentListItem.text(currentRepoName);
    repoList.append($currentListItem);
    $body.append(repoList);
  }
}