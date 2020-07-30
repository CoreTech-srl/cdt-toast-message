var cdtToastMessage = document.querySelectorAll('.cdtToastMessage')[0];
cdtToastMessage.style.color = 'transparent';
cdtToastMessage.style.backgroundColor = 'transparent';
cdtToastMessage.style.transition = "0.5s";
cdtToastMessage.style.visibility = 'hidden';
cdtToastMessage.style.position = 'fixed';
cdtToastMessage.style.zIndex = '9999999999';
cdtToastMessage.style.right = '0px';
cdtToastMessage.style.top = '0px';
cdtToastMessage.style.fontSize = '17px';
cdtToastMessage.style.marginLeft = '-125px';
cdtToastMessage.style.borderRadius = '2px';
cdtToastMessage.style.padding = '16px';
cdtToastMessage.style.textAlign = 'center';
cdtToastMessage.style.minWidth = '250px';

function toastMessage(text, bgColor = '#333', time = 3, txColor = '#fff') {
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

    cdtToastMessage.innerHTML = "";

    cdtToastMessage.innerHTML = '<span class="cdttmClose"><i class="fa fa-times"></i></span><span class="cdttmText">' + text + '</span>';

    //cdttmClose CSS
    var cdttmClose = cdtToastMessage.querySelectorAll('.cdttmClose')[0];
    cdttmClose.style.position = 'absolute';
    cdttmClose.style.right = '4px';
    cdttmClose.style.top = '2px';
    cdttmClose.style.fontSize = '12px';
    cdttmClose.style.cursor = 'pointer';
    ///

    //cdtToastMessage CSS
    cdtToastMessage.style.color = txColor;
    cdtToastMessage.style.backgroundColor = bgColor;
    cdtToastMessage.style.visibility = 'visible';

    cdtToastMessage.style.transform = "translateY(60px)";
    ///

    if (time > 0) {
        setTimeout(function () {
            cdtToastMessage.style.visibility = 'hidden';

            cdtToastMessage.style.color = 'transparent';
            cdtToastMessage.style.backgroundColor = 'transparent';

            cdtToastMessage.style.transform = "translateY(0px)";
        }, time);
    }
    ;

    cdtToastMessage.querySelectorAll('.cdttmClose')[0].onclick = function () {
        cdtToastMessage.style.visibility = 'hidden';

        cdtToastMessage.style.color = 'transparent';
        cdtToastMessage.style.backgroundColor = 'transparent';

        cdtToastMessage.style.transform = "translateY(0px)";
    };
}