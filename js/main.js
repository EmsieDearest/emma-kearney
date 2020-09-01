// Cursor Animation
let html = $('html');
let input = $('input');

let ElementCursor = {
    cursorElement: "",
    setCursor: function (cursorElement, hoverElement) {
        html.css({
            'cursor': 'none'
        });
        ElementCursor.cursorElement = cursorElement;
        ElementCursor.hoverElement = hoverElement;
        ElementCursor.updateCursor();
    },
    removeCursor: function () {
        $('html').css({
            'cursor': ''
        });
        ElementCursor.cursorElement = '';
    },
    updateCursor: function () {
        $(document).mousemove(function (e) {
            ElementCursor.cursorElement.css({
                'position': 'fixed',
                left: e.clientX,
                top: e.clientY
            });
            /*

            let width = ElementCursor.hoverElement.outerWidth();
            let left = ElementCursor.hoverElement.offset().left;
            if (e.clientX > left + (width / 2)) {
                ElementCursor.cursorElement.addClass('right');
            } else {
                ElementCursor.cursorElement.removeClass('right');
            }

             */
        });
        ElementCursor.hoverElement.mouseenter(function(e) {
            ElementCursor.cursorElement.addClass('in');
        });
        ElementCursor.hoverElement.mouseleave(function(e) {
            ElementCursor.cursorElement.removeClass('in');
        });
    }
};

ElementCursor.setCursor($('#cursor'), $('.btn, .form-input, .logo, .nav-link, .closebtn'));
$(window).on('scroll', function(e) {});

// Side Panel

/* Set the width of the sidebar to 50% (show it) */
function openNav() {
    document.getElementById("mySidepanel").style.width = "50%";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}




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
            hiddenDiv.innerHTML = content + '<br style="line-height: 2rem;">';

            // Briefly make the hidden div block but invisible
            // This is in order to read the height
            hiddenDiv.style.visibility = 'hidden';
            hiddenDiv.style.display = 'block';
            i.style.minHeight = hiddenDiv.offsetHeight + '%';

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
