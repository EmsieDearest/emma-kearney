const copyToClipboard = () => {
    /* Get the email */
    let $body = document.getElementsByTagName('body')[0];
    let $tempInput = document.createElement('INPUT');
    let $btnCopy = document.getElementById('btnCopy');
    let secretInfo = 'emma@emma-kearney.com';
  
    /* Create a temporary input */
    $body.appendChild($tempInput);

    /* Highlight */
    $tempInput.setAttribute('value', secretInfo)
    $tempInput.select();
  
    /* Copy */
    document.execCommand("copy");

    /* Remove temporary input */
    $body.removeChild($tempInput);
  
    /* Alerting that the email has been copied */
    document.getElementById("hiddentext").innerHTML = "YOUR WISH IS MY COMMAND!";
  };

const whenBtnIsClicked = () => { 
    document.getElementById('contact').innerHTML='emma@emma-kearney.com';
    document.getElementById("hiddentext").innerHTML = "COPY TO CLIPBOARD?";
};
  