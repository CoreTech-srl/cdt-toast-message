/**
 * Copyright (c) 2020
 *
 * @summary Customizable Toast Message in JavaScript
 * @author Christian Carelli <c.carelli@coretech.it>
 * @version 1.01
 * @license MIT
 *
 * Created at     : 2020-07-30 18:00:00 
 * Last modified  : 2020-07-30 18:00:00
 */


var cdtToastMessageDiv = document.querySelectorAll('.cdtToastMessage')[0];
cdtToastMessageDiv.style.color = 'transparent';
cdtToastMessageDiv.style.backgroundColor = 'transparent';
cdtToastMessageDiv.style.transition = "0.5s";
cdtToastMessageDiv.style.visibility = 'hidden';
cdtToastMessageDiv.style.position = 'fixed';
cdtToastMessageDiv.style.zIndex = '9999999999';
cdtToastMessageDiv.style.right = '0px';
cdtToastMessageDiv.style.top = '0px';
cdtToastMessageDiv.style.fontSize = '17px';
cdtToastMessageDiv.style.marginLeft = '-125px';
cdtToastMessageDiv.style.borderRadius = '2px';
cdtToastMessageDiv.style.padding = '16px';
cdtToastMessageDiv.style.textAlign = 'center';
cdtToastMessageDiv.style.minWidth = '250px';

function cdtToastMessage(text, bgColor = 'info', time = 3, txColor = '#fff') {
    text = typeof (text) === "string" ? text : JSON.stringify(text);

    switch (bgColor) {
        case 'success':
            bgColor = '#4cae4c';
            break;
        case 'warning':
            bgColor = '#eea236';
            break;
        case 'danger':
            bgColor = '#d43f3a';
            break;
        case 'info':
            bgColor = '#3172ac';
            break;
        case 'default':
            bgColor = '#6a6a6a';
            break;
        default:
            break;
    }

    time *= 1000;

    cdtToastMessageDiv.innerHTML = "";

    cdtToastMessageDiv.innerHTML = '<span class="cdttmClose">&times;</span><span class="cdttmText">' + text + '</span>';

    //cdttmClose CSS
    var cdttmClose = cdtToastMessageDiv.querySelectorAll('.cdttmClose')[0];
    cdttmClose.style.position = 'absolute';
    cdttmClose.style.right = '4px';
    cdttmClose.style.top = '2px';
    cdttmClose.style.fontSize = '15px';
    cdttmClose.style.cursor = 'pointer';
    ///

    //cdtToastMessage CSS
    cdtToastMessageDiv.style.color = txColor;
    cdtToastMessageDiv.style.backgroundColor = bgColor;
    cdtToastMessageDiv.style.visibility = 'visible';

    cdtToastMessageDiv.style.transform = "translateY(60px)";
    ///

    if (time > 0) {
        setTimeout(function () {
            cdtToastMessageDiv.style.visibility = 'hidden';

            cdtToastMessageDiv.style.color = 'transparent';
            cdtToastMessageDiv.style.backgroundColor = 'transparent';

            cdtToastMessageDiv.style.transform = "translateY(0px)";
        }, time);
    }
    ;

    cdtToastMessageDiv.querySelectorAll('.cdttmClose')[0].onclick = function () {
        cdtToastMessageDiv.style.visibility = 'hidden';

        cdtToastMessageDiv.style.color = 'transparent';
        cdtToastMessageDiv.style.backgroundColor = 'transparent';

        cdtToastMessageDiv.style.transform = "translateY(0px)";
    };
}