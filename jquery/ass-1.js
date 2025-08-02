// ==================30/7/2025==================
// Hide a Paragraph Using jQuery
/* <p id="myParagraph">This is a paragraph that will be hidden using jQuery.</p>
    <button id="hideBtn">Click Me</button>
    <script>
        $(document).ready(function () {
            $("#hideBtn").click(function () {
                $("#myParagraph").hide();
            });
        });
    </script>   */

// Create three paragraphs with different class, id, and element type. Add three buttons to hide each using the correct jQuery selector.
/* <p id="para1">This is paragraph 1 (selected by ID).</p>
    <p class="para2">This is paragraph 2 (selected by class).</p>
    <p>This is paragraph 3 (selected by element).</p>

    <button id="hideById">Hide by ID</button>
    <button id="hideByClass">Hide by Class</button>
    <button id="hideByElement">Hide by Element</button>

    <script>
        $(document).ready(function () {
            $("#hideById").click(function () {
                $("#para1").hide();
            });
            $("#hideByClass").click(function () {
                $(".para2").hide();
            });
            $("#hideByElement").click(function () {
                $("p").hide();
            });
        });
    </script> */

// Use jQuery to hide the input field that has type="text" when a button is clicked.
  /* <input type="text" placeholder="Enter something" />
    <button id="hideBtn">Hide Input</button>
    <script>
        $('#hideBtn').click(function () {
            $('input[type="text"]').hide();
        });
    </script> */

// Hide the element with ID "Test" (or any variation like "TEST", "test") using a case-insensitive selector.
/* <div id="Test" class="alert alert-info mb-2">I am Test (ID: Test)</div>
    <div id="TEST" class="alert alert-warning mb-2">I am TEST (ID: TEST)</div>
    <div id="test" class="alert alert-success mb-2">I am test (ID: test)</div>
    <button id="hide-test" class="btn btn-danger">
        Hide All "Test" IDs (Case-Insensitive)
    </button>
    <script>
        $(document).ready(function () {
            $('#hide-test').click(function () {
                $('[id^="test"]').each(function () {
                    if ($(this).attr('id').toLowerCase() === 'test') {
                        $(this).hide();
                    }
                });
            });
        });
    </script> */

// Add 2 images, 1 paragraph, and 1 link.Hide all of them using one button.
 /* <img src="https://i.pinimg.com/736x/7b/d1/43/7bd143ba92b6c491f51c96e84e4bd7d7.jpg" alt="image not found" id="image1"
        style="height: 260px;">
    <img src="https://i.pinimg.com/736x/f6/95/de/f695deac0f12f9b55fb77d571d1b14fa.jpg" alt="image not found" id="image2"
        style="height: 260px;">
    <p id="paragraph">This is a paragraph.</p>
    <a href="#" id="link">This is a link</a>
    <button id="hideButton">Hide All</button>
    <button id="showButton">Show All</button>
    <script>
        $('#hideButton').click(function () {
            $('img, p, a').hide();
        });
        $('#showButton').click(function () {
            $('img, p, a').show();
        });
    </script> */

// Create a button. When clicked, change the text of a paragraph to "Welcome to jQuery!".
   /* <p id="welcomeParagraph">This is a paragraph.</p>
   <button id="changeTextButton">Change Text</button>
   <button id="originalTextButton">Original Text</button>
   <script>
       $('#changeTextButton').click(function () {
           $('#welcomeParagraph').text('Welcome to jQuery!');
       });
       $('#originalTextButton').click(function () {
           $('#welcomeParagraph').text('This is a paragraph.');
       });
   </script> */


// Build a password input field with a toggle icon/button to show or hide the password. (try to change the attribute using jQuery)
/*  <input type="password" id="password" placeholder="Enter password">
    <button id="toggleBtn">Show</button>

    <script>
        $('#toggleBtn').click(function () {
            const input = $('#password');
            const type = input.attr('type') === 'password' ? 'text' : 'password';
            input.attr('type', type);
            $(this).text(type === 'password' ? 'Show' : 'Hide');
        });
    </script> */


