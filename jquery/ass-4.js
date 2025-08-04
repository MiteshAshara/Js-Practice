// ==================4/8/2025==================

// create a dropdown menu with 3-5 options (e.g., colors or cities).
//  - Use the .change() event to show an alert with the selected value.
/* <label for="colorSelect">Choose Color</label>
    <select id="colorSelect">
        <option disabled selected>--Select--</option>
        <option value="Red">Red</option>
        <option value="Green">Green</option>
        <option value="Blue">Blue</option>
        <option value="Yellow">Yellow</option>
    </select>

    <script>
        $('#colorSelect').change(function () {
            var selectedColor = $(this).val();
            if (selectedColor) {
                alert("You selected: " + selectedColor);
            }
        });
    </script> */

// Design a button that shows an alert only once, no matter how many times it is clicked.
//  - (Hint: Use the .one() method)
/* <button id="myButton">Click Me!</button>
    <script>
        $('#myButton').one('click', function () {
            alert("Button clicked!");
        });
    </script> */

// Add three mouse events (mouseenter, mouseleave, click) to a square box (<div>).
//  - On hover, change the color.
//  - On mouse leave, revert the color.
//  - On click, show an alert.
/* <button id="mouse-click">Mouse-Click Button</button><br><br>
    <button id="mouse-leave">Mouse-Leave Button</button><br><br>
    <button id="mouse-over">Mouse-over Button</button>
    <script>
        $(document).ready(function () {
            $('#mouse-click').click(function () {
                alert("Mouse Clicked")
            })
            $('#mouse-leave').mouseleave(function () {
                alert("Mouse Leave")
            })
            $('#mouse-over').mouseover(function () {
                alert("Mouse Over")
            })
        })
    </script> */

// Create 3 dynamic buttons using jQuery (append them to a container).
//  - Use event delegation to handle click events on those buttons.
//  - (Hint: Use .on() with a static parent element)
/* <div id="btn"></div>
    <script>
        $(document).ready(function () {
            for (i = 0; i <= 3; i++) {
                const colors = ['lightblue', 'yellow', 'pink']
                const fontStyles = [
                    'font-weight: bold;',
                    'font-style: italic;',
                    'text-decoration: underline;',
                ];
                $('#btn').append('<button class="dynamicBtn" style="background-color:' + colors[i] + '; ' + fontStyles[i] + '">Button ' + i + '</button><br><br>')
            }
            $('#btn').on('click', '.dynamicBtn', function () {
                alert($(this).text() + ' clicked!');
            });
        })
    </script> */

//Create a link (<a>) that opens Google, but use event.preventDefault() to stop the redirection.
//  - Show an alert saying “Link blocked!” instead.
/*     <button><a href="https://www.youtube.com/" id="link"
            style="text-decoration: none;color: black;">Youtube</a></button>
    <script>
        $(document).ready(function () {
            $('#link').click(function () {
                event.preventDefault() //stop redirection
                alert('Link blocked!')
            })
        })
    </script> */

