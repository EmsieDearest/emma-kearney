// Cursor Animation

var ElementCursor = {
    cursorElement: "",
    setCursor: function () {
        $('html').css({
            'cursor': 'none'
        }).onmousedown(function (e) {return false;});
        this.cursorElement = $('#cursor');
        this.hoverElement = $('.btn'), $('.form-input'), $('.logo'), $('.nav-link');
        ElementCursor.updateCursor();
    },
    removeCursor: function () {
        $('html').css({
            'cursor': ''
        });
        ElementCursor.cursorElement = '';
    },
    updateCursor: function () {
        $(document).onmousemove(function (e) {
            ElementCursor.cursorElement.css({
                'position': 'fixed',
                'top': e.pageY + 'px',
                'left': e.pageX + 'px'
            });

            // Prevents sticky cursor on vertical scroll
            const $ = document.querySelector.bind(document);
            const $on = document.addEventListener.bind(document);
            const followMouse = () => {
                key = requestAnimationFrame(followMouse);

                if (!x || !y) {
                    x = xmouse;
                    y = ymouse;
                } else {
                    dx = (xmouse - x) * 0.125;
                    dy = (ymouse - y) * 0.125;
                    if (Math.abs(dx) + Math.abs(dy) < 0.1) {
                        x = xmouse;
                        y = ymouse;
                    } else {
                        x += dx;
                        y += dy;
                    }
                }
                $("#cursor").style.left = x + 'px';
                $("#cursor").style.top = $("html").scrollTop + y + 'px';
            };

            const xmouse, ymouse;
            let x = void 0,
                y = void 0,
                dx = void 0,
                dy = void 0,
                tx = 0,
                ty = 0,
                key = -1;

            $on('mousemove', function(e) {
                xmouse = e.clientX || e.pageX;
                ymouse = e.clientY || e.pageY;
            });

            /*
            var width = ElementCursor.hoverElement.outerWidth();
            var left = ElementCursor.hoverElement.offset().left;
            if (e.pageX > left + (width / 2)) {
                ElementCursor.cursorElement.addClass('right');
            } else {
                ElementCursor.cursorElement.removeClass('right');
            }
            */
        });
        ElementCursor.hoverElement.onmouseenter(function(e) {
            ElementCursor.cursorElement.addClass('in');
        });
        ElementCursor.hoverElement.onmouseleave(function(e) {
            ElementCursor.cursorElement.removeClass('in');
        });
    }
};

ElementCursor.setCursor;



// Contact form

// window.addEventListener("DOMContentLoaded", function() {

// get the form elements defined in your form HTML above
const form = $("#my-form");
const button = $("#my-form-button");
const successMessage = $('.success');

// Get the values of the input
const formInput = $('.form-input');
const err = $('.err');
const errP = $('.err-p');
const errName = $.trim($('#name').val());
const errEmail = $.trim($('#email').val());
const errMessage = $.trim($('#message').val());

// Handle the form submission event
// Check to see if the input data is valid
// If invalid, the error message will reveal
// If corrected, error message will disappear
// Prevent form from submitting if errors are present
form.addEventListener('submit', function (event) {
    const error = () => {
        // if there are form fields that are not valid, we prevent the form from being sent by canceling the event
        if (!err.validity.valid) {
            // If it isn't, we display an appropriate error message
            if (errName.validity.valueMissing) {
                errName.show();
            } else if (errEmail.validity.typeMismatch) {
                errEmail.show();
            } else if (errMessage.validity.valueMissing) {
                errMessage.show();
            } else {
                errP.show();
            }
            event.preventDefault();
        };
    };
    // If the form fields are valid, let form submit and show success validation
    const success = () => {
        if (err.validity.valid) {
            err.hide();
            form.reset();
            button.hide();
            successMessage.show();
        };
    };

    let data = new FormData(form);
    ajax(form.method, form.action, data, success(), error());
});

// helper function for sending an AJAX request
function ajax(method, url, data, success, error) {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            success //(xhr.response, xhr.responseType);
        } else {
            error //(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
};




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
};






// Contrast OnClick Switch Statement
const changeColor = () => {
    const contrastButton = document.getElementsByClassName('.contrast-img');
    const cherry = '#fa0636';
    const blush = '#fff6f6';
    const blushFilter = 'contrast(0) sepia(100%) hue-rotate(663deg) brightness(1.7) saturate(0.35)';


    // On click of the contrast button, the color scheme changes
    contrastButton.onmouseup(function () {
        const theme = ['black-on-blush', 'blush-on-black', 'blush-on-cherry', 'cherry-on-blush'];
        let themePicker = theme[Math.floor(Math.random() * 3)];
        if (themePicker === theme[0]) {
            $("body").style.blackgroundColor = blush;
            $(".logo").style.filter = 'grayscale(100%) contrast(2000%)';
            contrastButton.style.filter = 'grayscale(100%) contrast(2000%)';
            $('p').style.color = 'black';
            $('::-webkit-resizer').style.color = 'black';
            $('.nav-link').style.filter = 'grayscale(100%) contrast(2000%)';
            $('input[type="text"], textarea[type="text"]').style.filter = 'grayscale(100%) contrast(2000%) !important';
            $('label').style.filter = 'grayscale(100%) contrast(2000%)';
            $('.btn').style.blackgroundColor = 'black';
            $('#intro').style.color = 'black';
        } else if (themePicker === theme[1]) {
            $("body").style.blackgroundColor = 'black';
            $(".logo").style.filter = blushFilter;
            contrastButton.style.filter = blushFilter;
            $('p').style.color = blushFilter;
            $('::-webkit-resizer').style.color = blushFilter;
            $('.nav-link').style.filter = blushFilter;
            $('input[type="text"], textarea[type="text"]').style.filter = blushFilter
            '!important';
            $('label').style.filter = blushFilter;
            $('.btn').style.blackgroundColor = blushFilter;
            $('#intro').style.color = blushFilter;
        } else if (themePicker === theme[2]) {
            $("body").style.blackgroundColor = cherry;
            $(".logo").style.filter = blushFilter;
            contrastButton.style.filter = blushFilter;
            $('p').style.color = blushFilter;
            $('::-webkit-resizer').style.color = blushFilter;
            $('.nav-link').style.filter = blushFilter;
            $('input[type="text"], textarea[type="text"]').style.filter = blushFilter
            '!important';
            $('label').style.filter = blushFilter;
            $('.btn').style.blackgroundColor = blushFilter;
            $('#intro').style.color = blushFilter;
        } else if (themePicker === theme[3]) {
            contrastButton.className = "rotated";
            $("body").style.blackgroundColor = blush;
            $(".logo").style.filter = '0';
            contrastButton.style.filter = '0';
            $('p').style.color = cherry;
            $('::-webkit-resizer').style.color = cherry;
            $('.nav-link').style.filter = '0';
            $('input[type="text"], textarea[type="text"]').style.filter = cherry
            '!important';
            $('label').style.filter = '0';
            $('.btn').style.blackgroundColor = cherry;
            $('#intro').style.color = cherry;
        };
    });
};
