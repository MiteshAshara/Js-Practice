// ==================5/8/2025==================

	
// jQuery Image Gallery
/* 
 <style>
    body {
      text-align: center;
      background: linear-gradient(to right bottom, #273c75, #079992);
      font-family: sans-serif;
      padding: 40px;
    }

    #mainImg {
      width: 400px;
      height: 300px;
      border: 4px solid #fff;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
      margin-bottom: 20px;
    }

    .thumbs img {
      width: 100px;
      height: 75px;
      margin: 5px;
      opacity: 0.4;
      cursor: pointer;
      transition: 0.3s;
      border: 2px solid #fff;
    }

    .thumbs img:hover {
      opacity: 1;
    }
  </style>
  <img id="mainImg" src="https://i.pinimg.com/1200x/55/8d/87/558d8740de2c65f27a3848210d9e7228.jpg" alt="image not found">

  <div class="thumbs">
    <img src="https://i.pinimg.com/1200x/e6/00/4b/e6004b71f3d707d9a6926a585ce94f81.jpg" alt="image not found">
    <img src="https://i.pinimg.com/1200x/44/7d/f8/447df85c415bed979c66ad53c4eddfbf.jpg" alt="image not found">
    <img src="https://i.pinimg.com/1200x/d4/00/3f/d4003fb3cd1c261ebdb081cbabd1c203.jpg" alt="image not found">
    <img src="https://i.pinimg.com/736x/5e/70/ad/5e70adbae280c3faedf7012b73cf0633.jpg" alt="image not found">
  </div>

  <script>
    $(document).ready(function () {
      $('.thumbs img').click(function () {
        const newSrc = $(this).attr('src');
        $('#mainImg').fadeOut(300, function () {
          $(this).attr('src', newSrc).fadeIn(300);
        });
      });
    });
  </script> */


// jQuery Optimized Image Gallery
/*   <style>
    body {
      font-family: Arial, sans-serif;
      background: #f4f4f4;
      padding: 20px;
      text-align: center;
    }

    .gallery {
      max-width: 700px;
      margin: auto;
    }

    #mainImage {
      width: 100%;
      max-height: 400px;
      border: 3px solid #ddd;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
      margin-bottom: 15px;
    }

    .thumbnails {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 10px;
    }

    .thumbnails img {
      width: 100px;
      height: 70px;
      opacity: 0.5;
      cursor: pointer;
      border: 2px solid transparent;
      transition: all 0.3s ease;
    }

    .thumbnails img:hover,
    .thumbnails img.active {
      opacity: 1;
      border-color: #007BFF;
    }
  </style>
  
  <div class="gallery">
    <img id="mainImage" src="https://i.pinimg.com/736x/5e/70/ad/5e70adbae280c3faedf7012b73cf0633.jpg" alt="Main">

    <div class="thumbnails">
      <img src="https://i.pinimg.com/1200x/e6/00/4b/e6004b71f3d707d9a6926a585ce94f81.jpg" alt="image not found">
      <img src="https://i.pinimg.com/1200x/44/7d/f8/447df85c415bed979c66ad53c4eddfbf.jpg" alt="image not found">
      <img src="https://i.pinimg.com/1200x/d4/00/3f/d4003fb3cd1c261ebdb081cbabd1c203.jpg" alt="image not found">
      <img src="https://i.pinimg.com/736x/5e/70/ad/5e70adbae280c3faedf7012b73cf0633.jpg" alt="image not found">
      <img src="https://i.pinimg.com/736x/a8/5e/a7/a85ea7698aade6dd4f2994b3749700a4.jpg" alt="image not found">
    </div>
  </div>

  <script>
    $(document).ready(function () {
      $('.thumbnails img').click(function () {
        const newSrc = $(this).attr('src');

        $('#mainImage').fadeOut(200, function () {
          $(this).attr('src', newSrc).fadeIn(200);
        });

        $('.thumbnails img').removeClass('active');
        $(this).addClass('active');
      });
    });
  </script> */

//jQuery Image Slideshow with Thumbnails
/* <style>
    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }

    body {
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      font-style: italic;
      background: #fff;
      min-height: 100vh;
      background: linear-gradient(to right bottom, #273c75, #079992);
      background-repeat: no-repeat;
    }

    .container {
      padding: 40px 0;
    }

    #mainImg {
      margin: 0 auto 40px;
      display: block;
      height: 500px;
      width: 800px;
      border: 2px solid #fff;
      box-shadow: 0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22);
    }

    ul {
      list-style: none;
      margin: 0;
      text-align: center;
    }

    ul li {
      margin: 0 5px;
      display: inline-block;
      border: 1px solid #fff;
      cursor: pointer;
    }

    ul li img {
      display: block;
      width: 150px;
      height: 100px;
      opacity: 0.4;
      transition: 0.4s;
      box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19)
    }

    ul li img:hover {
      opacity: 1;
    }

    .toolbox {
      position: fixed;
      right: 0;
      top: 0;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-direction: column;
      height: 100%;
      width: 200px;
    }

    select {
      padding: 5px 8px;
      margin: 10px auto;
      width: 130%;
      border: none;
      font-size: 20px;
      width: 80px;
      cursor: pointer;
      font-style: italic;
    }

    select:focus {
      outline: none;
    }

    label {
      font-size: 24px;
      color: #fff;
    }

    input[type="button"] {
      background-color: #e0e0e0;
      border: none;
      color: black;
      padding: 10px 20px;
      margin: 10px;
      text-align: center;
      text-decoration: none;
      display: block;
      font-size: 24px;
      font-weight: 800;
      border-radius: 50px;
      cursor: pointer;
      transition: 0.4s;
      box-shadow: 0 10px 12px 0 rgba(0, 0, 0, 0.20), 0 15px 40px 0 rgba(0, 0, 0, 0.15)
    }

    input[type="button"]:hover {
      box-shadow: 0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22);
    }

    input[type="button"]:disabled {
      opacity: 0.4;
    }
  </style> 

  <div class="toolbox">
    <input id="btnStartSlideShow" type="button" value="Start" />
    <input id="btnStopSlideShow" type="button" value="Stop" />
  </div>
  <div class="container">
    <img id="mainImg" src="https://i.pinimg.com/1200x/76/7e/ed/767eedfda3756f45ae764943c822089f.jpg">
    <ul>
      <li><img src="https://i.pinimg.com/1200x/8e/61/b1/8e61b19f5c64facbdf0c408425bbec14.jpg"></li>
      <li><img src="https://i.pinimg.com/1200x/81/73/7e/81737ef81376b699c54573b7ca1a1c10.jpg"></li>
      <li><img src="http://i.pinimg.com/736x/9f/c3/5b/9fc35b3accf097e90d8c47de4c6fe7ea.jpg"></li>
      <li><img src="https://i.pinimg.com/736x/13/6a/67/136a67591ede79ce7ca1e75e301e93dc.jpg"></li>
    </ul>
  </div>

  <script>
    $(document).ready(function () {
      var imageURLs = new Array();
      var intervalId;
      var btnStart = $('#btnStartSlideShow');
      var btnStop = $('#btnStopSlideShow');

      $('ul img').each(function () {
        imageURLs.push($(this).attr('src'));
      });

      function setImage() {
        var mainImageElement = $('#mainImg');
        var currentImageURL = mainImageElement.attr('src');
        var currentImageIndex = $.inArray(currentImageURL, imageURLs);
        if (currentImageIndex == (imageURLs.length - 1)) {
          currentImageIndex = -1;
        }

        mainImageElement.attr('src', imageURLs[currentImageIndex + 1])
      }

      btnStart.click(function () {
        intervalId = setInterval(setImage, 3000); //3 seconds
        $(this).attr('disabled', 'disabled');
        btnStop.removeAttr('disabled');
      });

      btnStop.click(function () {
        clearInterval(intervalId);
        $(this).attr('disabled', 'disabled');
        btnStart.removeAttr('disabled');
      }).attr('disabled', 'disabled');
    });
  </script> */

// jQuery Animate Function
/*  <style>
    body {
      background-color: rgb(226, 225, 225);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
    }

    h1 {
      font-size: 40px;
      margin-bottom: 30px;
      padding: 30px;
      text-align: center;
      text-transform: capitalize;
      font-style: italic;
    }

    img {
      width: 600px;
      height: 400px;
      opacity: 0.4;
    }

    .btn {
      background-color: #1c4450;
      border: none;
      outline: none;
      color: white;
      padding: 20px 35px;
      margin: 20px;
      text-align: center;
      display: inline-block;
      font-size: 16px;
      border-radius: 10px;
      cursor: pointer;
      transition-duration: 0.4s;
      text-transform: uppercase;
    }

  </style>

  <h1>jQuery Animate Function</h1>
  <img src="https://i.pinimg.com/1200x/76/7e/ed/767eedfda3756f45ae764943c822089f.jpg" alt="photo">
  <button class="btn">Click to Animate The Image</button>
  <button class="btn">Remove Animation</button>
  <script>
    $(document).ready(function () {
      $(document).ready(function () {
        $("button").click(function () {
          if ($(this).text() === "Click to Animate The Image") {
            $("img").animate({ width: "800px", height: "600px", opacity: "1" });
          } else {
            $("img").stop().animate({ width: "600px", height: "400px", opacity: "0.4" });
          }
        });
      });
    });
  </script> */

// jQuery Animation Queue
/* <style>
    body {
      background-color: rgb(226, 225, 225);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
    }

    h1 {
      font-size: 40px;
      margin-bottom: 30px;
      padding: 30px;
      text-align: center;
      text-transform: capitalize;
      font-style: italic;
    }

    .btn {
      background-color: #1c4450;
      border: none;
      outline: none;
      color: white;
      padding: 20px 35px;
      margin: 20px;
      text-align: center;
      display: inline-block;
      font-size: 16px;
      border-radius: 10px;
      cursor: pointer;
      transition-duration: 0.4s;
      text-transform: uppercase;
    }

    .btn:hover {
      box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
        0 17px 50px 0 rgba(0, 0, 0, 0.19);
    }

    div {
      width: 400px;
      height: 40px;
      padding: 100px 0;
      margin: 10px 0;
      text-align: center;
      font-size: 20px;
      font-weight: 400;
      border-radius: 20px;
      border: 1px solid #000;
      box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
        0 17px 50px 0 rgba(0, 0, 0, 0.19);
      position: relative;
    }

    .test1 {
      background-color: rgb(152, 255, 203);
    }

    .test2 {
      background-color: rgb(255, 253, 140);
    }

    p {
      margin: 20px;
      font-weight: bold;
      font-size: 30px;
      text-align: center;
      font-style: oblique;
    }
  </style>
<!DOCTYPE html>
<html>
<head>
  <title>jQuery Animation Queue</title>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <style>
    #box {
      width: 100px;
      height: 100px;
      background: red;
      position: relative;
    }
  </style>
</head>
<body>

  <div id="box"></div>

  <script>
    $(document).ready(function () {
      $('#box')
        .animate({ left: '200px' }, 1000)  // Move right
        .animate({ top: '100px' }, 1000)   // Move down
        .animate({ left: '0px' }, 1000)    // Move left
        .animate({ top: '0px' }, 1000);    // Move up
    });
  </script>

</body>
</html> */

// jQuery Progress Bar
/* <style>
    body {
      background-color: rgb(226, 225, 225);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
    }

    h1 {
      font-size: 40px;
      margin-bottom: 30px;
      padding: 30px;
      text-align: center;
      text-transform: capitalize;
      font-style: italic;
    }

    .outerDiv {
      margin: 20px auto;
      padding: 0;
      width: 800px;
      height: 40px;
      overflow: hidden;
      background: #e5e5e5;
      border-radius: 6px;
      border: 2px solid #000;
    }

    .innerDiv {
      padding: 10px 0;
      height: 90%;
      width: 0;
      background: rgb(87, 181, 243);
      text-align: center;
      font-weight: 600;
      color: #fff;
      border-radius: 6px;
    }

    select {
      padding: 5px 8px;
      margin: 10px auto;
      width: 130%;
      border: none;
      font-size: 20px;
      width: 80px;
      cursor: pointer;
      font-style: italic;
    }

    label {
      font-size: 24px;
    }

    input[type="button"] {
      background-color: #234d69;
      border: none;
      color: #fff;
      padding: 20px 35px;
      margin: 10px;
      text-align: center;
      text-decoration: none;
      display: block;
      font-size: 24px;
      font-weight: 600;
      border-radius: 20px;
      cursor: pointer;
      box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19)
    }
  </style> 
  <h1>jQuery Simple Progress Bar</h1>
  <label for="percentage">Select Percentage :
    <select id="percentage">
      <option value="10">10</option>
      <option value="20">20</option>
      <option value="30">30</option>
      <option value="40">40</option>
      <option value="50">50</option>
      <option value="60">60</option>
      <option value="70">70</option>
      <option value="80">80</option>
      <option value="90">90</option>
      <option value="100">100</option>
    </select>
  </label>
  <div class="outerDiv">
    <div class="innerDiv">
    </div>
  </div>
  <input type="button" id="myButton" value="Start Animation" />
  <script type="text/javascript">
    $(document).ready(function () {
      $('#myButton').click(function () {
        animateProgressBar($('#percentage').val());
      });
      function animateProgressBar(percentageCompleted) {
        $('.innerDiv').animate({
          'width': (800 * percentageCompleted) / 100
        }, 1000);
        $({ counter: 1 }).animate({ counter: percentageCompleted }, {
          duration: 1000,
          step: function () {
            $('.innerDiv').text(Math.ceil(this.counter) + ' %');
          }
        })
      }
    });
  </script> */


//  Optimize jQuery Progress Bar
/*  <style>
    body {
      background-color: rgb(226, 225, 225);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
    }

    h1 {
      font-size: 40px;
      margin-bottom: 30px;
      padding: 30px;
      text-align: center;
      text-transform: capitalize;
      font-style: italic;
    }

    .outerDiv {
      margin: 20px auto;
      padding: 0;
      width: 800px;
      height: 40px;
      overflow: hidden;
      background: #e5e5e5;
      border-radius: 6px;
      border: 2px solid #000;
    }

    .innerDiv {
      padding: 8px 0;
      height: 90%;
      width: 0;
      background: rgb(87, 181, 243);
      text-align: center;
      font-size: 20px;
      font-weight: 600;
      color: #fff;
      border-radius: 6px;
    }

    select {
      padding: 5px 8px;
      margin: 10px auto;
      width: 130%;
      border: none;
      font-size: 20px;
      width: 80px;
      cursor: pointer;
      font-style: italic;
    }

    label {
      font-size: 24px;
    }

    input[type="button"] {
      background-color: #234d69;
      border: none;
      color: #fff;
      padding: 20px 35px;
      margin: 10px;
      text-align: center;
      text-decoration: none;
      display: block;
      font-size: 24px;
      font-weight: 600;
      border-radius: 20px;
      cursor: pointer;
      box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19)
    }
  </style>
  <h1>jQuery Progress Bar</h1>
  <label for="percentage">Select Percentage :
    <select id="percentage">
      <option value="10">10</option>
      <option value="20">20</option>
      <option value="30">30</option>
      <option value="40">40</option>
      <option value="50">50</option>
      <option value="60">60</option>
      <option value="70">70</option>
      <option value="80">80</option>
      <option value="90">90</option>
      <option value="100">100</option>
    </select>
  </label>
  <div class="outerDiv">
    <div class="innerDiv">
    </div>
  </div>
  <input type="button" id="myButton" value="Start Animation" />
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <script type="text/javascript">
    $(document).ready(function () {
      var currentPercentage = 0;
      var previousPercenage = 0;
      $('#myButton').click(function () {
        previousPercenage = currentPercentage;
        currentPercentage = $('#percentage').val();
        animateProgressBar(previousPercenage, currentPercentage);
      });
      function animateProgressBar(previousPercenage, currentPercentage) {
        $('.innerDiv').animate({
          'width': (800 * currentPercentage) / 100
        }, 1000);
        $({ counter: previousPercenage }).animate({ counter: currentPercentage }, {
          duration: 1000,
          step: function () {
            $('.innerDiv').text(Math.round(this.counter) + ' %'); //mistake fixed with round
            // $('.innerDiv').text(Math.ceil(this.counter) + ' %'); //mistake
          }
        })
      }
    });
  </script> */


//  jQuery Show Hide Password
/* <section>
        <div class="contentBox">
            <div class="formBox">
                <h2 class="login">Login</h2>
                <form>
                    <div class="inputBox">
                        <input type="text" name="username" placeholder="User Name" size="30">
                    </div>
                    <div class="inputBox">
                        <input type="password" id="txtPassword" name="password" placeholder="Password">
                    </div>
                    <label for="showPassword"><input type="checkbox" id="showPassword">Show Password</label>
                    <div class="inputBox">
                        <input id="login" type="submit" value="Log In">
                    </div>
                    <div class="remember">
                        <label for="remember"><input type="checkbox" id="remember">Remember Me</label>
                        <a class="link" href="#">Forgot Password?</a>
                    </div>
                </form>
            </div>
            <a href="#" id="create" class="link">Create an Account</a>
        </div>
    </section>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script>
        $(document).ready(function () {
            $('#showPassword').click(function () {
                $('#txtPassword').attr('type', $(this).is(':checked') ? 'text' : 'password');
            });
        });
    </script> */

// Increase and Decrease Font Size using jQuery
/* <section>
        <div class="contentBox">
            <div class="formBox">
                <h2 class="login">Login</h2>
                <form>
                    <div class="inputBox">
                        <input type="text" name="username" placeholder="User Name" size="30">
                    </div>
                    <div class="inputBox">
                        <input type="password" id="txtPassword" name="password" placeholder="Password">
                    </div>
                    <label for="showPassword"><input type="checkbox" id="showPassword">Show Password</label>
                    <div class="inputBox">
                        <input id="login" type="submit" value="Log In">
                    </div>
                    <div class="remember">
                        <label for="remember"><input type="checkbox" id="remember">Remember Me</label>
                        <a class="link" href="#">Forgot Password?</a>
                    </div>
                </form>
            </div>
            <a href="#" id="create" class="link">Create an Account</a>
        </div>
    </section>
    <script>
        $(document).ready(function () {
            $('#showPassword').click(function () {
                $('#txtPassword').attr('type', $(this).is(':checked') ? 'text' : 'password');
            });
        });
    </script> */

// Floating DIV using jQuery
/* <style>
    body {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      background: linear-gradient(90deg, #FDBB2D 0%, #22C1C3 100%);
      font-family: Verdana, Geneva, Tahoma, sans-serif;
    }

    #wrap {
      width: 860px;
      margin: 0 auto;
      background-color: #f1f1f1;
    }

    #header {
      background-color: #234c77;
      height: 70px;
      text-align: center;
      font-size: 40px;
      line-height: 1.5em;
      margin-top: 5px;
      color: #fff;
    }

    #main {
      float: left;
      width: 500px;
      padding: 10px;
      font-size: 20px;
      line-height: 2em;
    }

    #sidebar {
      float: right;
      width: 240px;
      padding: 10px;
    }

    #floating {
      background-color: #C00003;
      color: #eee;
      width: 240px;
      height: 410px;
      margin-top: 10px;
      text-align: center;
      font-size: 22px;
      line-height: 4em;
    }

    #non-floating {
      background-color: #289400;
      color: #eee;
      width: 240px;
      height: 110px;
      margin-bottom: 10px;
      text-align: center;
      font-size: 22px;
      line-height: 4em;
    }

    #footer {
      clear: both;
      background-color: #cc9;
      padding: 10px;
      position: fixed;
      bottom: 0;
      width: 860px;
      height: 40px;
      text-align: center;
      font-size: 30px;
    }
  </style> 
    <div id="wrap">
    <div id="header">Header</div>
    <div id="main">
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, dolore iusto. Dolorum modi, labore facere
        earum vitae assumenda enim consectetur eos maxime saepe iure odit ex dolor ratione sit non aliquam voluptates
        accusamus. Autem odio, optio voluptatibus unde impedit natus? Aliquid ducimus iure itaque temporibus suscipit,
        aperiam aut, est minima et provident laborum saepe illum nihil alias modi officia explicabo iste. Ad odit rerum
        non aliquam consequuntur reiciendis sequi velit earum similique, distinctio aperiam, animi repellendus. Quia a
        aliquam molestias aliquid iure repudiandae corrupti quisquam, quaerat quidem quae laudantium optio id totam
        vitae culpa repellat suscipit commodi fuga quas. Natus optio cumque aliquid iste blanditiis, unde debitis ea
        reprehenderit tempore et provident? Corporis dolore tenetur molestiae possimus voluptate consequatur, animi quam
        voluptatem deserunt repellendus veritatis quidem debitis numquam maxime eos nihil incidunt! Rem corrupti quam
        cumque nemo. Error neque quo necessitatibus quibusdam dolorum. Facere sequi fuga laborum placeat ipsa accusamus
        autem, animi dolores molestias accusantium, magni nisi eum recusandae ipsam error dolorem blanditiis! Nobis,
        aut. Architecto ipsa deserunt explicabo incidunt alias nam! Doloribus sapiente molestias, delectus molestiae
        expedita exercitationem. Illo voluptatem magnam repellat nam delectus quidem iusto pariatur! Molestias est
        laudantium earum quos facilis dolor neque iure reprehenderit mollitia? Assumenda nesciunt asperiores id, quos
        consequuntur ducimus saepe iure sed eveniet at optio nobis doloribus alias repudiandae a dignissimos totam
        inventore quis. Obcaecati, modi! Recusandae commodi omnis adipisci. Praesentium, quisquam fuga.</p>
    </div>
    <div id="sidebar">
      <div id="non-floating">Regular DIV</div>
      <div id="floating">Floating DIV</div>
    </div>
    <div id="footer">Footer</div>
  </div>
  <script>
    $(document).ready(function () {
      var floatingDiv = $("#floating");
      var floatingDivPosition = floatingDiv.position();
      $(window).scroll(function () {
        var scrollPosition = $(window).scrollTop();
        if (scrollPosition >= floatingDivPosition.top) {
          floatingDiv.css({
            'position': 'fixed',
            'top': 3
          });
        } else {
          floatingDiv.css({
            'position': 'relative',
            'top': 0
          });
        }
      });
    });
  </script> */