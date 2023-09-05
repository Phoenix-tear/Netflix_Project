function setCookie(name, value, daysToLive){
    const date = new Date();
    date.setTime(date.getTime() +  (daysToLive * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path="C:\Users\anup1\Desktop\Cookie"`
}
document.getElementById("submit").onclick=function(){
    let Email = document.getElementById("email").value;
    let Password = document.getElementById("Password").value;
    setCookie(Email,Password,365);
    console.log(document.cookie);
}



