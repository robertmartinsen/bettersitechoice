function setCookie(cName, cValue, expDays) {
    let date = new Date();
    date.setTime(date.getTime() + expDays * 24 * 60 * 60 * 1000);
    const expires = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
  }
  


function getCookie(cName) {
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie);
    const cArr = cDecoded.split(";");
    let value;
    cArr.forEach(val => {
        if (val.trim().indexOf(name) === 0) {
            value = val.trim().substring(name.length);
        }
    });

    return value;
}

document.querySelector("#cookies-btn").addEventListener("click", () => {
    document.querySelector("#cookies").style.display = "none";
    setCookie("cookie", true, 30);
});

function cookieMessage() {
    if (!getCookie("cookie")) {
        document.querySelector("#cookies").style.display = "block";
    }
}

window.addEventListener("load", cookieMessage);