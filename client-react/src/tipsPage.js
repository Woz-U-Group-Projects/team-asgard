import React from 'react';
import ReactDOM from 'react-dom';

  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
  <header class="w3-container w3-center w3-padding-32"> 
  <h1><b>Dog Blog</b></h1>
</header>
<body>

const navBar = (
  <div class="w3-bar w3-border w3-light-grey w3-center">
    <a href="#" style="width:25%" class="w3-bar-item w3-button w3-mobile">Home</a>
    <a href="#" style="width:25%" class="w3-bar-item w3-button w3-mobile">Blog</a>
    <a href="#" style="width:25%" class="w3-bar-item w3-button w3-mobile">Articles</a>
    <a href="#" style="width:25%" class="w3-bar-item w3-button w3-mobile">Team</a>
  </div>
)
<!-- Title of Page -->
<div>
  <h1>Tips Page</h1>
</div>
  
<!-- Grid -->
<div class="w3-row">

<!-- Tips entries -->

const tips = (
  <div class="w3-col l8 s12">
    <!-- Tips entry -->
    <div class="w3-card-4 w3-margin w3-white">
      <img src="" alt="" style="width:100%">
      <div class="w3-container">
        <h3><b>Utility Bag for all Dogs</b></h3>
        <h5>Backpack, <span class="w3-opacity">October , 2014</span></h5>
      </div>

      <div class="w3-container">
        <p>Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed
          tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
        <div class="w3-row">
          <div class="w3-col m8 s12">
            <p><button class="w3-button w3-padding-large w3-white w3-border"><b>READ MORE »</b></button></p>
          </div>
          <div class="w3-col m4 w3-hide-small">
            <p><span class="w3-padding-large w3-right"><b>Comments  </b> <span class="w3-tag">0</span></span></p>
          </div>
        </div>
      </div>
    </div>
    <hr>

    // Tips entry
    <div class="w3-card-4 w3-margin w3-white">
    <img src="" alt="" style="width:100%">
      <div class="w3-container">
        <h3><b>Stress-free Dog walking</b></h3>
        <h5>Title description, <span class="w3-opacity">April 2, 2014</span></h5>
      </div>

      <div class="w3-container">
        <p>Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed
          tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
        <div class="w3-row">
          <div class="w3-col m8 s12">
            <p><button class="w3-button w3-padding-large w3-white w3-border"><b>READ MORE »</b></button></p>
          </div>
          <div class="w3-col m4 w3-hide-small">
            <p><span class="w3-padding-large w3-right"><b>Comments  </b> <span class="w3-badge">2</span></span></p>
          </div>
        </div>
      </div>
    </div>
  
  </div>
)

  //END TIPS ENTRIES

  react.render()