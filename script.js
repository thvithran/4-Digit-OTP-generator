function otpGenerate(){
    let optShow = document.getElementById("otp");
    let digits = "0123456789";
    let otp = " ";

    // generate 4 digit OTP
    for(let i = 0; i <4; i++){
        otp += digits[Math.floor(Math.random() * 10)];
    }

    //display loading
    optShow.innerHTML = "<span></span>";

    //display OTP after 1 second
    setTimeout(() =>{
        optShow.innerHTML =otp;
    },1000);
}