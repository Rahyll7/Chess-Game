import Toastify from 'toastify-js'

export function Notification(text, bg) {

    Toastify({
        text: `${text}`,
        className: "info",
        duration: 2000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: `${bg}`,
            width: 'auto',
            height: 'auto',
            borderRadius: '50px',
            fontSize: '20px',
            padding: '20px'
        },
        onClick: function () { }
    }).showToast();
}