const url = window.location.href;
const urlArr = url.split('?&');
const atoken = urlArr.length > 1 ? urlArr[1] : '';
const uId = urlArr.length > 2 ? urlArr[2] : '';
const uIdArr = uId ? uId.split('=') : '';
const userId = uIdArr.length > 1 ? uIdArr[0] == 'userid' ? uIdArr[1] : '' :'';
const uName = urlArr.length > 1 ? urlArr[3] : '';
const uNameArr = uName ? uName.split('=') : '';
const userName = uNameArr.length > 1 ? uNameArr[0] == 'username' ? uNameArr[1] : '' :'';
const uNameData = userName.replaceAll('%20', ' ')
const signIn = document.getElementById('signIn');
const signInSignup = document.getElementById('signInSignup');
const user = document.getElementById('user');
if (!userId) {
  signInSignup.textContent = 'Sign / Sign Up';
  signIn.style.display = 'none';
  user.style.display = 'none';
  signInSignup.href = 'https://indifly365.com/#/sign-up/regular';
} else {
  signIn.textContent = uNameData;
  signInSignup.style.display = 'none';
}
async function contactUs() {
  const bv = brwsVersion();
  const url = window.location.href;
  const urlArr = url.split('?&');
  const inf365atoken = urlArr.length > 1 ? urlArr[1] : '';
  const ipRes = await fetch('https://api.ipify.org?format=json');
  const ipData = await ipRes.json();
  const inf365uiinfo = {browserName: bv.browserName, browserVersion: bv.browserVersion, ua: bv.ua, ip: ipData.ip, deviceType: bv.deviceType, osName: bv.osName};
    let fName = document.getElementById('fName').value;
    let lName = document.getElementById('lName').value;
    let mobNum = document.getElementById('phNo').value;
    let mobCc = document.getElementById('mobCc').value;
    let emID = document.getElementById('email').value;
    let pnrNumber = document.getElementById('pnrNo').value;
    let notes = document.getElementById('comments').value;
    let nature = document.getElementById('nature').value;
    let errorMessage = document.getElementById('errorMessage');
  
    document.getElementById("fName").addEventListener("input", function () {
      errorMessage.textContent = "";
      errorMessage.style.display = "none";
    });

    document.getElementById("lName").addEventListener("input", function () {
        errorMessage.textContent = "";
        errorMessage.style.display = "none";
    });
    document.getElementById("nature").addEventListener("input", function () {
      errorMessage.textContent = "";
      errorMessage.style.display = "none";
    });
    document.getElementById("phNo").addEventListener("input", function () {
      errorMessage.textContent = "";
      errorMessage.style.display = "none";
    });
    document.getElementById("email").addEventListener("input", function () {
      errorMessage.textContent = "";
      errorMessage.style.display = "none";
    });
    document.getElementById("pnrNo").addEventListener("input", function () {
        errorMessage.textContent = "";
        errorMessage.style.display = "none";
    });
    document.getElementById("comments").addEventListener("input", function () {
      errorMessage.textContent = "";
      errorMessage.style.display = "none";
    });
  
    if (!fName) {
      errorMessage.style.display = 'block';
      errorMessage.textContent = 'First Name is required';
    } else if (!lName) {
      errorMessage.style.display = 'block';
      errorMessage.textContent = 'Last Name is required';
    } else if (!nature) {
      errorMessage.style.display = 'block';
      errorMessage.textContent = 'Nature of Enquiry is required';
    } else if (!emID) {
      errorMessage.style.display = 'block';
      errorMessage.textContent = 'Email is required';
    } else if (!mobNum) {
      errorMessage.style.display = 'block';
      errorMessage.textContent = 'Phone Number is required';
    } else if (!notes) {
      errorMessage.style.display = 'block';
      errorMessage.textContent = 'Comments is required';
    } else {
      const eid = setEidValue(emID);
      const reqBody = {
        fName,
        lName,
        mobCc,
        mobNum,
        emID,
        pnrNumber,
        nature,
        notes,
        eid
      }

      fetch('https://infapi.skillworksit.com/users/inf365/custs/contact/create', {
        cachce: false,
        method: 'POST',
        headers: {
          'inf365atoken': inf365atoken,
          'inf365uiinfo': JSON.stringify(inf365uiinfo),
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reqBody)
      }).then(response => {
        response.json().then(rData => {
          if (rData.status == '200') {
            document.getElementById('contactus-container').style.display = 'none';
            document.getElementById('contactus-success-container').style.display = 'block';
            document.getElementById('contactus-success-msg').textContent = 'Thank you for contacting us. We will get back you soon';
          }
        }).catch(error => { });
      }).catch(err => { });
    }
    return false;
  }

  const setEidValue = (emailId) => {
    const vEm = emailId?.slice(0, 2);
    const vE1 = emailId?.slice(0, 1);
    const eid = /^a[a-mA-M]$/, eid1 = /^a[n-zN-Z0-9]$/, eid2 = /^b[b-mB-M]$/, eid3 = /^b[n-zN-Z0-9]$/,
    eid10 = /^j[a-mA-M]$/, eid11 = /^j[n-zN-Z0-90-9]$/, eid12 = /^k[a-mA-M]$/, eid13 = /^k[n-zN-Z0-9]$/, eid15 = /^m[a-mA-M]$/, eid16 = /^m[n-zN-Z0-9]$/, eid17 = /^n[a-oA-O0-9]$/,
    eid20 = /^s[a-mA-M]$/, eid21 = /^s[n-zN-Z0-9]$/
    if (vEm && eid.test(vEm)) {
      return  0
    } else if (vEm && eid1.test(vEm)) {
      return  1
    } else if (vEm && eid2.test(vEm)) {
      return  2
    } else if (vEm && eid3.test(vEm)) {
      return  3
    } else if (vE1 == 'c') {
      return  4
    } else if (vE1 == 'd') {
      return  5
    } else if (vE1 == 'e') {
      return  6
    } else if (vE1 == 'f') {
      return  7
    } else if (vE1 == 'g') {
      return  8
    } else if (vE1 == 'h') {
      return  9
    } else if (vEm && eid10.test(vEm)) {
      return  10
    } else if (vEm && eid11.test(vEm)) {
      return  11
    } else if (vEm && eid12.test(vEm)) {
      return  12
    } else if (vEm && eid13.test(vEm)) {
      return  13
    } else if (vE1 == 'l') {
      return  14
    } else if (vEm && eid15.test(vEm)) {
      return  15
    } else if (vEm && eid16.test(vEm)) {
      return  16
    } else if (vEm && eid17.test(vEm)) {
      return  17
    } else if (vE1 == 'p') {
      return  18
    } else if (vE1 == 'r') {
      return  19
    } else if (vEm && eid20.test(vEm)) {
      return  20
    } else if (vEm && eid21.test(vEm)) {
      return  21
    } else if (vE1 == 't') {
      return  22
    } else if (vE1 == 'w') {
      return  23
    } else if (vE1 === 'i' || vE1 === 'q' || vE1 === 'v' ||vE1 ===  'z' || vE1 ===  'x') {
      return  24
    } else {
      return  25
    }
  }

  const brwsVersion = () => {
    var browserAgent = navigator.userAgent; 
    var browserName = navigator.appName; 
    var browserVersion = '' + parseFloat(navigator.appVersion); 
    var browserMajorVersion = parseInt(navigator.appVersion, 10); 
    var Offset, OffsetVersion, ix; 
      
    // For Chrome  
    if ((OffsetVersion = browserAgent.indexOf("Chrome")) != -1) { 
        browserName = "Chrome"; 
        browserVersion = browserAgent.substring(OffsetVersion + 7); 
    } 
      
    // For Microsoft internet explorer  
    else if ((OffsetVersion = browserAgent.indexOf("MSIE")) != -1) { 
        browserName = "Microsoft Internet Explorer"; 
        browserVersion = browserAgent.substring(OffsetVersion + 5); 
    } 
      
    // For Firefox 
    else if ((OffsetVersion = browserAgent.indexOf("Firefox")) != -1) { 
        browserName = "Firefox"; 
    } 
      
    // For Safari 
    else if ((OffsetVersion = browserAgent.indexOf("Safari")) != -1) { 
        browserName = "Safari"; 
        browserVersion = browserAgent.substring(OffsetVersion + 7); 
        if ((OffsetVersion = browserAgent.indexOf("Version")) != -1) 
            browserVersion = browserAgent.substring(OffsetVersion + 8); 
    } 
      
    // For other browser "name/version" is at the end of userAgent  
    else if ((Offset = browserAgent.lastIndexOf(' ') + 1) < 
        (OffsetVersion = browserAgent.lastIndexOf('/'))) { 
        browserName = browserAgent.substring(Offset, OffsetVersion); 
        browserVersion = browserAgent.substring(OffsetVersion + 1); 
        if (browserName.toLowerCase() == browserName.toUpperCase()) { 
            browserName = navigator.appName; 
        } 
    } 
      
    // Trimming the fullVersion string at  
    // semicolon/space if present  
    if ((ix = browserVersion.indexOf(";")) != -1) 
        browserVersion = browserVersion.substring(0, ix); 
    if ((ix = browserVersion.indexOf(" ")) != -1) 
        browserVersion = browserVersion.substring(0, ix);  
    browserMajorVersion = parseInt('' + browserVersion, 10); 
    if (isNaN(browserMajorVersion)) { 
        browserVersion = '' + parseFloat(navigator.appVersion); 
        browserMajorVersion = parseInt(navigator.appVersion, 10); 
    } 
    const deviceType =  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    ? 'Mobile'
    : 'Desktop';
    const osName = navigator.platform;

    return{browserName, browserVersion, ua: browserAgent, deviceType, osName}
  }
  document.addEventListener("DOMContentLoaded", function () {
    var aboutLink = document.getElementById("aboutLink");
    var aboutHref = atoken && userId ? `about-us.html?&${atoken}?&userid=${userId}?&username=${userName}` : atoken ? `https://indifly365.com/about-us.html?&${atoken}` : 'https://indifly365.com/about-us.html';
    aboutLink.href = aboutHref;
  });
  document.addEventListener("DOMContentLoaded", function () {
    var blogLink = document.getElementById("blogLink");
    var blogHref = atoken && userId ? `blogs.html?&${atoken}?&userid=${userId}?&username=${userName}` : atoken ? `https://indifly365.com/blogs.html?&${atoken}` : 'https://indifly365.com/blogs.html';
    blogLink.href = blogHref;
  })
  document.addEventListener("DOMContentLoaded", function () {
    var contactUsLink = document.getElementById("contactUsLink");
    var contactUsHref = atoken && userId ? `contact-us.html?&${atoken}?&userid=${userId}?&username=${userName}` : atoken ? `https://indifly365.com/contact-us.html?&${atoken}` : 'https://indifly365.com/contact-us.html';
    contactUsLink.href = contactUsHref;
  })
  document.addEventListener("DOMContentLoaded", function () {
    var termsLink = document.getElementById("termsLink");
    var termsHref = atoken && userId ? `terms-and-conditions.html?&${atoken}?&userid=${userId}?&username=${userName}` : atoken ? `https://indifly365.com/terms-and-conditions.html?&${atoken}` : 'https://indifly365.com/terms-and-conditions.html';
    termsLink.href = termsHref;
  })
  document.addEventListener("DOMContentLoaded", function () {
    var privacyLink = document.getElementById("privacyLink");
    var privacyHref = atoken && userId ? `privacy-policy.html?&${atoken}?&userid=${userId}?&username=${userName}` : atoken ? `https://indifly365.com/privacy-policy.html?&${atoken}` : 'https://indifly365.com/privacy-policy.html';
    privacyLink.href = privacyHref;
  })
  document.addEventListener("DOMContentLoaded", function () {
    var refundLink = document.getElementById("refundLink");
    var refundHref = atoken && userId ? `refund-policy.html?&${atoken}?&userid=${userId}?&username=${userName}` : atoken ? `https://indifly365.com/refund-policy.html?&${atoken}` : 'https://indifly365.com/refund-policy.html';
    refundLink.href = refundHref;
  })
  document.addEventListener("DOMContentLoaded", function () {
    var cookieLink = document.getElementById("cookieLink");
    var cookieHref = atoken && userId ? `cookie-policy.html?&${atoken}?&userid=${userId}?&username=${userName}` : atoken ? `https://indifly365.com/cookie-policy.html?&${atoken}` : 'https://indifly365.com/cookie-policy.html';
    cookieLink.href = cookieHref;
  })
  document.addEventListener("DOMContentLoaded", function () {
    var employerPaymentLink = document.getElementById("employerPaymentLink");
    var employerPaymentHref = atoken && userId ? `employer-payment.html?&${atoken}?&userid=${userId}?&username=${userName}` : atoken ? `https://indifly365.com/employer-payment.html?&${atoken}` : 'https://indifly365.com/employer-payment.html';
    employerPaymentLink.href = employerPaymentHref;
  })