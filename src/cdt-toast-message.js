/**
 * Copyright (c) 2020
 *
 * @summary Customizable Toast Message in JavaScript
 * @author Christian Carelli <c.carelli@coretech.it>
 * @version 1.02
 * @license MIT
 *
 * Created at     : 2020-07-30 18:00:00 
 * Last modified  : 2020-08-09 16:30:00
 */


var cdtToastMessageDiv = document.querySelectorAll('.cdtToastMessage')[0];

var cdtToastMessageParam = {
    hzPos: {
        right: '0px',
        left: 'auto'
    },
    vlPos: {
        top: '0px',
        bottom: 'auto',
        translateY: {
            start: '0px',
            end: '60px'
        }
    },
};

cdtToastMessageDiv.style.color = 'transparent';
cdtToastMessageDiv.style.backgroundColor = 'transparent';
cdtToastMessageDiv.style.transition = "0.5s";
cdtToastMessageDiv.style.visibility = 'hidden';
cdtToastMessageDiv.style.position = 'fixed';
cdtToastMessageDiv.style.zIndex = '9999999999';
cdtToastMessageDiv.style.fontSize = '17px';
cdtToastMessageDiv.style.borderRadius = '2px';
cdtToastMessageDiv.style.padding = '16px';
cdtToastMessageDiv.style.textAlign = 'center';
cdtToastMessageDiv.style.minWidth = '250px';
cdtToastMessageDiv.style.fontFamily = 'Arial, Helvetica, sans-serif';

function cdtToastMessage(text, bgColor = 'info', time = 3, txColor = '#fff') {
    
    //SET CONFIGURATION
    //horizontal position
    cdtToastMessageDiv.style.right = cdtToastMessageParam.hzPos.right;
    cdtToastMessageDiv.style.left = cdtToastMessageParam.hzPos.left;
    //vertical position
    cdtToastMessageDiv.style.top = cdtToastMessageParam.vlPos.top;
    cdtToastMessageDiv.style.bottom = cdtToastMessageParam.vlPos.bottom;
    ///
    
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
            bgColor = '#fff';
            txColor = '#000';
            break;
        default:
            break;
    }

    time *= 1000;

    cdtToastMessageDiv.innerHTML = "";

    cdtToastMessageDiv.innerHTML = '<span class="cdttmClose"><b>x</b></span><span class="cdttmText">' + text + '</span>';

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
    cdtToastMessageDiv.style.boxShadow = '0px 0px 5px #888888';
    cdtToastMessageDiv.style.visibility = 'visible';

    cdtToastMessageDiv.style.transform = "translateY("+cdtToastMessageParam.vlPos.translateY.end+")";
    ///

    if (time > 0) {
        setTimeout(function () {
            cdtToastMessageDiv.style.visibility = 'hidden';
            
            
            cdtToastMessageDiv.style.boxShadow = '0px 0px';
            cdtToastMessageDiv.style.color = 'transparent';
            cdtToastMessageDiv.style.backgroundColor = 'transparent';

            cdtToastMessageDiv.style.transform = "translateY("+cdtToastMessageParam.vlPos.translateY.start+")";
        }, time);
    }
    ;

    cdtToastMessageDiv.querySelectorAll('.cdttmClose')[0].onclick = function () {
        cdtToastMessageDiv.style.visibility = 'hidden';
        
        cdtToastMessageDiv.style.boxShadow = '0px 0px';
        cdtToastMessageDiv.style.color = 'transparent';
        cdtToastMessageDiv.style.backgroundColor = 'transparent';

        cdtToastMessageDiv.style.transform = "translateY("+cdtToastMessageParam.vlPos.translateY.start+")";
    };
}


function cdtTMConf(params, obj = null) {
    var objToSet = obj === null ? cdtToastMessageDiv : obj;
    
    //horizontal positioning
    switch (params.horizontalPos) {
        case 'right':
            cdtToastMessageParam.hzPos.right = params.horizontal;
            cdtToastMessageParam.hzPos.left = 'auto';
            break;
        case 'center':
            cdtToastMessageParam.hzPos.right = 'auto';
            cdtToastMessageParam.hzPos.left = ((window.innerWidth/2) - (objToSet.offsetWidth/2) + parseInt(params.horizontal.replace('px', ''))) + 'px';
            break;
        case 'left':
            cdtToastMessageParam.hzPos.right = 'auto';
            cdtToastMessageParam.hzPos.left = params.horizontal;
            break;
        default:
            break;
    }
    ///
    
    //vertical positioning
    switch (params.verticalPos) {
        case 'top':
            cdtToastMessageParam.vlPos.top = params.vertical;
            cdtToastMessageParam.vlPos.bottom = 'auto';
            cdtToastMessageParam.vlPos.translateY.start = '0px';
            cdtToastMessageParam.vlPos.translateY.end = '60px';
            break;
        case 'center':
            cdtToastMessageParam.vlPos.top = '0px';
            cdtToastMessageParam.vlPos.bottom = 'auto';
            cdtToastMessageParam.vlPos.translateY.start = '0px';
            cdtToastMessageParam.vlPos.translateY.end = ((window.innerHeight/2) - (objToSet.offsetHeight/2) + parseInt(params.vertical.replace('px', ''))) + 'px';
            break;
        case 'bottom':
            cdtToastMessageParam.vlPos.top = 'auto';
            cdtToastMessageParam.vlPos.bottom = params.vertical;
            cdtToastMessageParam.vlPos.translateY.start = '0px';
            cdtToastMessageParam.vlPos.translateY.end = '-60px';
            break;
        default:
            break;
    }
    ///
}