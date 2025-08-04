// ==================1/8/2025==================

// jQuery DOM Manipulation Methods
 /* <p id="demo">demo</p>
    <p id="inputResult"></p>
    <script>
       $(document).ready(function(){
        const text=$('#demo').text()
        $('#inputResult').text(text);
      })
    </script> */

/*<div id="box"><strong>Bold</strong></div>
<script>
  console.log($('#box').html()); // "<strong>Bold</strong>"
  $('#box').html('<em>Italic</em>');
</script> */

/* <input type="text" id="name" value="John">
<script>
  let name = $('#name').val(); // "John"
  $('#name').val('Doe');
</script> */

/* <img id="logo" src="logo.png">
<script>
  let src = $('#logo').attr('src'); // "logo.png"
  $('#logo').attr('src', 'new-logo.png');
</script> */

/* <ul id="list"><li>Item 1</li></ul>
<script>
  $('#list').append('<li>Item 2</li>');   // Adds to end
  $('#list').prepend('<li>Item 0</li>');  // Adds to start
</script> */

/*<p id="target">Target</p>
<script>
  $('#target').before('<p>Before</p>');
  $('#target').after('<p>After</p>');
</script> */

/*<div id="toRemove">Delete me</div>
<script>
  $('#toRemove').remove();
</script> */


/*<div id="toEmpty"><p>Inner text</p></div>
<script>
  $('#toEmpty').empty(); // Removes inner <p>, keeps the div
</script> */

/* <div id="original">Clone me</div>
<script>
  let copy = $('#original').clone();
  $('body').append(copy);
</script> */

/* <div id="box">Styled Box</div>
    <script>
        $('#box').css('background-color', 'gray'); // Set background color
        // add multiple CSS properties
        $('#box').css({
            'font-weight': 'bold',
            'color': 'white',
            padding: '10px',
        });
    </script> */

// jQuery Wrap and UnWrap Elements
/* <style>
        .wrapper {
            border: 2px solid gray;
            padding: 10px;
            margin: 10px;
        }

        p {
            padding: 5px;
        }
    </style>


    <p>This is paragraph 1</p>
    <p>This is paragraph 2</p>

    <button id="wrapButton">Wrap Paragraphs</button>
    <button id="unwrapButton">Unwrap Paragraphs</button>

    <script>
        $(document).ready(function () {
            $("#wrapButton").click(function () {
                $("p").wrap("<div class='wrapper'></div>");
            });

            $("#unwrapButton").click(function () {
                $(".wrapper").children().unwrap();
            });
        });
    </script> */

// jQuery Append and Prepend Elements
/* <p>This is a paragraph.</p>
    <button id="appendButton">Append Text</button>
    <button id="prependButton">Prepend Text</button>
    <script>
        $(document).ready(function () {
            $('#appendButton').click(function () {
                $('p').append(' Appended text using jQuery.');
            });
            $('#prependButton').click(function () {
                $('p').prepend('Prepended text using jQuery. ');
            });
        });
    </script> */


//  jQuery Insert Elements Before and After
 /*    <p id="demo">This is a paragraph.</p>
    <button id="addBefore">Insert Before</button>
    <button id="addAfter">Insert After</button>
    <script>
        $('#addBefore').click(function () {
            $('#demo').before('<p> Inserted Before</p>');
        });

        $('#addAfter').click(function () {
            $('#demo').after('<p> Inserted After</p>');
        });
    </script> */
    
// jQuery Add, Remove and Toggle class
 /*  <style>
        .highlight {
            background-color: gray;
            font-weight: bold;
        }
    </style>
    
    <div id="box">This is a box</div>
    <button id="add">Add Class</button>
    <button id="remove">Remove Class</button>
    <button id="toggle">Toggle Class</button>
    <script>
        $('#add').click(function () {
            $('#box').addClass('highlight');
        });

        $('#remove').click(function () {
            $('#box').removeClass('highlight');
        });

        $('#toggle').click(function () {
            $('#box').toggleClass('highlight');
        });
    </script> */

// jQuery Map Method
 /* <ul>
        <li>Apple</li>
        <li>Banana</li>
        <li>Cherry</li>
    </ul>
    <script>
        const fruits = $('li').map(function (index, element) {
            return $(element).text(); 
        }).get(); 

        console.log(fruits); // ["Apple", "Banana", "Cherry"]
    </script> */

//each method
 /* <ul>
        <li>Apple</li>
        <li>Banana</li>
        <li>Cherry</li>
    </ul>
    <script>
        $('li').each(function (index, element) {
            console.log(index + ": " + $(element).text());
        });
    </script> */
    
// Difference Between jQuery Each and Map Method
// .each() do something with each element.Iterate through elements and perform actions.Returns the original jQuery object.
// map() when you want to collect data from each element into a new array.Iterate and return a new array.Returns a new array.