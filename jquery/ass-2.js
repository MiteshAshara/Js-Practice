// ==================31/7/2025==================

// jQuery $(‘input’) vs $(‘:input’) Selectors
    /*   <input type="text" placeholder="Text input"><br>
    <textarea placeholder="Textarea input"></textarea><br>
    <select>
        <option>Option 1</option>
    </select><br>
    <button id="inputVsColonInput">Count Inputs</button>
    <p id="inputResult"></p>
    <script>
        $("#inputVsColonInput").click(function () {
            const inputCount = $("input").length;      
            const colonInputCount = $(":input").length;
            $("#inputResult").text(
                `$('input') = ${inputCount}, $(':input') = ${colonInputCount}`
            );
        });
    </script> */


// jQuery Checked Selector
   /* <input type="checkbox" checked>
    <input type="checkbox">
    <input type="checkbox">
    <p></p>
    <script>
        var countChecked = function () {
            var n = $("input:checked").length;
            $("p").text(n + (n === 1 ? " is" : " are") + " checked !");
        };
        countChecked();

        $("input[type=checkbox]").on("click", countChecked);
    </script> */


// make a one program for all selectors id,tag,class
 /* <input type="radio" name="fruit" value="orange" id="orange">
    <label for="orange">orange</label>
    <input type="radio" name="fruit" value="apple" id="apple" class="">
    <label for="apple">apple</label>
    <input type="radio" name="fruit" value="banana" id="banana">
    <label for="banana">banana</label>
    <div id="log"></div>
    <span class="log"></span><div></div>
    <strong></strong>
    <script>
        $("input").on("click", function () {
            $("#log").html($("input:checked").val() + " is checked by id!");
            $(".log").html($("input:checked").val() + " is checked by class!");
            $("strong").html($("input:checked").val() + " is checked by tag!");
        });
    </script> */


// Select Values of Checkbox Group with jQuery
/*  <input type="checkbox" class="fruit" value="Apple"> Apple<br>
    <input type="checkbox" class="fruit" value="Banana"> Banana<br>
    <input type="checkbox" class="fruit" value="Cherry"> Cherry<br>

    <button id="showSelected">Show Selected Fruits</button>

    <p id="result"></p>

    <script>
        $("#showSelected").click(function () {
            const selectedFruits = $(".fruit:checked").map(function () {
                return this.value;
            }).get().join(","); 

            $("#result").html("Selected : " + selectedFruits);
        });
    </script> */

// How to get Selected Checkbox Text in jQuery
 /* <label><input type="checkbox" class="option"> Option A</label><br>
    <label><input type="checkbox" class="option"> Option B</label><br>
    <label><input type="checkbox" class="option"> Option C</label><br>

    <button id="getTextBtn">Get Checked Text</button>

    <p id="result"></p>

    <script>
        $("#getTextBtn").click(function () {
            const selectedTexts = $(".option:checked").map(function () {
                return $(this).parent().text().trim();
            }).get().join(", ");

            $("#result").text("Selected: " + selectedTexts);
        });
    </script> */


// jQuery Selected Selector
/* <select id="colorSelect">
        <option value="red">Red</option>
        <option value="green" selected>Green</option>
        <option value="blue">Blue</option>
    </select>

    <button id="showSelected">Show Selected</button>
    <p id="result"></p>

    <script>
        $("#showSelected").click(function () {
            const selectedText = $("#colorSelect option:selected").text();
            $("#result").text("You selected: " + selectedText);
        }); 
    </script> */


// jQuery Disabled and Enabled Selector
/* <input type="text" placeholder="Disable input"><br><br>
    <button class="disable">Disable Input</button>
    <button class="enable">Enable Input</button>
    <script>
        $(document).ready(function () {
            $('.disable').click(function () {
                $('input[type="text"]').first().prop('disabled', true);
            });

            $('.enable').click(function () {
                $('input[type="text"]').first().prop('disabled', false);
            });
        });
    </script> */


// jQuery Each Method
/* <ul id="itemList"></ul>
    <script>
             $(document).ready(function() {
                 var items = ['Apple', 'Banana', 'Cherry', 'Grapes', 'Orange'];

                 $.each(items, function(index, value) {
                      $('#itemList').append('<li>' + value + '</li>');
                 });
             });
      </script> */


// jQuery Method Chaining
/* <p>GeeksforGeeks</p>
    <button type="button" class="start">
        Start Chaining</button>
    <button type="button" class="stop">
        Stop Chaining</button>
    <script>
        $(document).ready(function () {
            $(".start").click(function () {
                // $("p").animate({ width: "100%" })
                //     .animate({ fontSize: "46px" });
                $("p").slideDown({ width: "100%" })
                    .fadeIn(5000)
                    .animate({ fontSize: "46px" }, 2000);
            });
            $(".stop").click(function () {
                $("p").slideUp({ width: "10%" })
                    ;
            });
        });  
    </script> */


// Working with JSON Object
  /* <p id="result"></p>
    <button id="showData">Show User Info</button>
    <script>
        $(document).ready(function () {
            $("#showData").click(function () {
                const user = {
                    name: "Alice",
                    age: 25,
                    city: "New York"
                };

                $("#result").html("Name: " + user.name + "<br>Age: " + user.age + "<br>City: " + user.city);
            });
        });
    </script> */


// Converting JSON Object to String and String to JSON Object
/* <script>
        const jsonObject = {
            name: "John",
            age: 30,
            city: "New York"
        };

        const jsonString = JSON.stringify(jsonObject);
        console.log("JSON String:", jsonString);
        const parsedObject = JSON.parse(jsonString);
        console.log("Parsed Object:", parsedObject);
    </script> */

