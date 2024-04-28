let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

// config param
let countItem = items.length;
let itemActive = 0;



// event next click
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}



//event prev click
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}



// auto run slider
let refreshInterval = setInterval(() => {
    next.click();
}, 5000)


function showSlider(){
    // remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    // active new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    // clear auto time run slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000)
}

// click thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})

// click thumbnail

document.getElementById("abouttxt").addEventListener("mouseover", mouseOver);
document.getElementById("abouttxt").addEventListener("mouseout", mouseOut);

function mouseOver() {
    document.getElementById("abouttxt").style.color = "#641515";
  }
  
  function mouseOut() {
    document.getElementById("abouttxt").style.color =   "#4e4e4e" ;
  }

  // pop up msg

    function submitFormlogin(event) {
        // Get the values of the username and password input fields
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
    
        // Check if both username and password are not empty
        if (username.trim() !== "" && password.trim() !== "") {
            // Show a success message if both fields are filled
            alert("Login successful!");
        } else {
            // Show an alert if any field is empty
            alert("Please enter both username and password.");
        }
    }

    function submitFormSignup(event) {
        // Get the values of the username, email, and password input fields
        var username = document.getElementById("username").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
    
        // Check if all fields are not empty
        if (username.trim() !== "" && email.trim() !== "" && password.trim() !== "") {
            // Show a success message if all fields are filled
            alert("Login successful!");
        } else {
            // Show an alert if any field is empty
            alert("Please enter all fields.");
        }
    }

    function submitFormcontact(event) {
        // Get the value of the message input field
        var message = document.getElementById("message").value;
    
        // Check if the message field is not empty
        if (message.trim() !== "") {
            // Show a success message if the message field is filled
            alert("Message sent: " + message);
        } else {
            // Show an alert if the message field is empty
            alert("Please enter a message.");
        }
    }