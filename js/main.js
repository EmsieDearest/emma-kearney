// Custom Cursor
let document.$('.abbr').onmousemove = abbr;

abbr = function(mouseMovement) {
    // when the mouse moves, set xPosition and yPosition to the x and y of the cursor,
    // then assign those x and y to the bee in the css file (position absolute, use top and left)
    let helpCursor = $('.helpCursor');
    let xPosition;
    let yPosition;
    if (mouseMovement) {
        xPosition = mouseMovement.pageX;
        yPosition = mouseMovement.pageY;
        helpCursor.style.top = yPosition + 1 + 'px';
        // added 1 pixel to get the bee off of the cursor itself so you're clicking on what you want to click on not the bee image
        helpCursor.style.left = xPosition + 'px';
    };
};

// Contrast Activated
$( document ).ready(function() {
    $( "#contrast-img" ).click(function() {
        $('.contrast-img').className = "rotated";
        $( "html" ).css('color', 'black');
        $( ".logo" ).css('filter', 'grayscale(100%) contrast(2000%)');
        $('#contrast-img').css('filter', 'grayscale(100%) contrast(2000%)');
        $('p').css('color', 'black');
        $('::-webkit-resizer').css('color', 'black');
        $('.nav-link').css('filter', 'grayscale(100%) contrast(2000%)');
        $('input::placeholder').css('color', 'black !important');
        $('input[type="text"], textarea[type="text"]').css('filter', 'grayscale(100%) contrast(2000%) !important');
        $('label').css('filter', 'grayscale(100%) contrast(2000%)');
        $('.btn').css('backgroundColor', 'black');
        $('#intro').css('color', 'black');
    });
});


// Auto resizes the message input in the contact form

// Targets all textareas with class "message-input"
let textareas = document.querySelectorAll('.message-input'),
    hiddenDiv = document.createElement('div'),
    content = null;

// Adds a class to all textareas
for (let j of textareas) {
    j.classList.add('txtstuff');
}

// Build the hidden div's attributes

// The line below is needed if you move the style lines to CSS
// hiddenDiv.classList.add('hiddendiv');

// Add the "message-input" styles, which are common to both textarea and hiddendiv
// If you want, you can remove those from CSS and add them via JS
hiddenDiv.classList.add('message-input');

// Add the styles for the hidden div
// These can be in the CSS, just remove these three lines and uncomment the CSS
hiddenDiv.style.display = 'none';
hiddenDiv.style.whiteSpace = 'pre-wrap';
hiddenDiv.style.wordWrap = 'break-word';

// Loop through all the textareas and add the event listener
for(let i of textareas) {
    (function(i) {
        // Note: Use 'keyup' instead of 'input'
        // if you want older IE support
        i.addEventListener('input', function() {

            // Append hiddendiv to parent of textarea, so the size is correct
            i.parentNode.appendChild(hiddenDiv);

            // Remove this if you want the user to be able to resize it in modern browsers
            i.style.resize = 'none';

            // This removes scrollbars
            i.style.overflow = 'hidden';

            // Every input/change, grab the content
            content = i.value;

            // Add the same content to the hidden div

            // This is for old IE
            content = content.replace(/\n/g, '<br>');

            // The <br ..> part is for old IE
            hiddenDiv.innerHTML = content + '<br style="line-height: 3px;">';

            // Briefly make the hidden div block but invisible
            // This is in order to read the height
            hiddenDiv.style.visibility = 'hidden';
            hiddenDiv.style.display = 'block';
            hiddenDiv.style.minHeight = 400;
            i.style.minHeight = hiddenDiv.offsetHeight + 'px';

            // Make the hidden div display:none again
            hiddenDiv.style.visibility = 'visible';
            hiddenDiv.style.display = 'none';
        });
    })(i);
}






// Contact form

window.addEventListener("DOMContentLoaded", function() {

    // get the form elements defined in your form HTML above

    let form = $("#my-form");
    let button = $("#my-form-button");
    let status = $("#my-form-status");

    // Success and Error functions for after the form is submitted
    form.submit(function(){
        form.reset();
        $('#my-form-button').hide();
        $('.success').show();
        event.preventDefault(); // if you want to send data only, do not reload page.

        // Get the Login Name value and trim it
        let errName = $.trim($('#name').val());
        let errEmail = $.trim($('#email').val());
        let errMessage = $.trim($('#message').val());

        // Check if empty of not
        if (errName === '') {
            $('.errName').show();
            return false;
        }
        else if (errEmail === '') {
            $('.errEmail').show();
            return false;
        }
        else if (errMessage === '') {
            $('.errMessage').show();
            return false;
        }
        else {
            return true;
        }
    });

    // handle the form submission event

    form.addEventListener("submit", function(ev) {
        ev.preventDefault();
        let data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
        } else {
            error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
};