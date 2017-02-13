

























// <!-- Previous Start Code
// // Waiting for html to load before running
// $(document).ready(function(){
//   // Creating an event listener, something to check if clickMe
//   // has had anything happen to it. 'click' says pay attention to clicks
//   $('#clickMe').on('click', function(){
//     var firstName = $('#firstName').val(); // gets value in firstName input box
//     var middleName = $('#middleName').val(); // gets value in middleName input box
//     var lastName = $('#lastName').val(); // gets value in lastName input box
//     var fullName = firstName + " " + middleName + " " + lastName; // builds full name
//     var annualSalary = $('#annualSalary').val();
//     // Adds html to the bottom (but still inside of) #nameContainer
//     // we're using a class, because there can be many of these lines
//     $('#nameContainer').append('<p>Full Name: ' + fullName + " " +
//             '<button class="deleteButton">Delete</button></p>');
//   });
//
//   // We can only use $('#someId') for things that exist at document ready
//   // To select things dynamically, we use event propogation
//   $('#nameContainer').on('click', '.deleteButton', function(){
//     // $(this) refers to the button that was just clicked (not all of them)
//     // console.log($(this));
//     $(this).parent().remove();
//   });
// });
