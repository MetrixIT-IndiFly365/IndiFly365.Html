const url = window.location.href;
const urlArr = url.split('?&');
const atoken = urlArr.length > 1 ? urlArr[1] : '';
const uId = urlArr.length > 1 ? urlArr[2] : '';
const uIdArr = uId ? uId.split('=') : '';
const userId = uIdArr.length > 1 ? uIdArr[0] == 'userid' ? uIdArr[1] : '' :'';
const uName = urlArr.length > 3 ? urlArr[3] : '';
const uNameArr = uName ? uName.split('=') :'';
const userName = uNameArr.length > 1 ? uNameArr[0] == 'username' ? uNameArr[1] : '' : '';
const uNameData = userName.replaceAll('%20', ' ')
const signIn = document.getElementById('signIn');
const signInSignup = document.getElementById('signInSignup');
const user = document.getElementById('user');
const trpType = document.getElementById('tType');
const trvlDate = document.getElementById('travelDate');
const paxInfo = document.getElementById('paxInfo');
//set from Airport
const fromAirport = document.getElementById('fromAirport');
const toAirport = document.getElementById('toAirport');
const searchFields = document.getElementById('search-fields');
const parts = url.split('?&');
const frC = parts.length > 0 ?  parts.find(item => item.includes('fCode')) : '';
const fc = frC ? frC.split('=') :'';
const fCode = fc.length > 1 ? fc[1] :'';
const tC = parts.length > 0 ?  parts.find(item => item.includes('tCode')) : '';
const tc = tC ? tC.split('=') :[];
const tCode = tc.length && tc.length > 1 ? tc[1] :'';
const fCity = parts.length > 0 ?  parts.find(item => item.includes('fCity')) : '';
const fromC = fCity ? fCity.split('=') : [];
const fromCity = fromC.length && fromC.length > 1 ? fromC[1].replaceAll('%20', ' ') :''
const tCity = parts.length > 0 ?  parts.find(item => item.includes('tCity')) :'';
const toCt = tCity ? tCity.split('=') :[];
const toCity = toCt.length > 0 && toCt.length > 1 ? toCt[1].replaceAll('%20', ' ') :'';
const fCountry = parts.length > 0 ?  parts.find(item => item.includes('fCountry')) : '';
const foc = fCountry ? fCountry.split('='): [];
const fromCountry = foc.length && foc.length > 1 ? foc[1].replaceAll('%20', ' ') :''
const tCountry = parts.length > 0 ?  parts.find(item => item.includes('tCountry')) : '';
const toc = tCountry ? tCountry.split('=') :[];
const toCountry = toc.length > 0 && toc.length > 1 ? toc[1].replaceAll('%20', ' ') :'';
const tripType = parts.length > 0 ?  parts.find(item => item.includes('tType')) :'';;
const trType = tripType ? tripType.split('=') :[];
const tType = trType.length && trType.length > 1 ? trType[1].replaceAll('%20', ' ') :'';
const tDate = parts.length > 0 ?  parts.find(item => item.includes('tDate')) :'';
const trvlData = tDate ? tDate.split('='):[];
const travelDate = trvlData.length && trvlData.length > 0 ? trvlData[1] : '';
const pInfo = parts.length > 0 ?  parts.find(item => item.includes('paxInfo')) :'';
const paxInf = pInfo ? pInfo.split('=') :[];
const pInf = paxInf.length && paxInf.length > 1 ? paxInf[1] : '';
const cb = parts.length > 0 ?  parts.find(item => item.includes('cabinClass')) :'';
const cbClass = cb ? cb.split('=') :[];
const cbnClass = cbClass.length > 0 && cbClass.length > 1 ? cbClass[1] :'';
var date = new Date(travelDate);

var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var day = date.getDate();
var monthIndex = date.getMonth();
var year = date.getFullYear();
var dayOfWeekIndex = date.getDay();
var dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][dayOfWeekIndex];
var formattedDate = dayOfWeek + ', ' + monthNames[monthIndex] + ' ' + day + ', ' + year;
if (!atoken) {
  searchFields.style.display = 'none';
  trpType.value = '';
  fromAirport.value = '';
  toAirport.value = '';
  trvlDate.value = '';
  paxInfo.value = '';
  signInSignup.textContent = 'Sign / Sign Up';
  signIn.style.display = 'none';
  signInSignup.href = 'https://indifly365.com/#/sign-up/regular';
  user.style.display = 'none';
} else {
  trpType.value = tType;
  fromAirport.value = `(${fCode}) ${fromCity}, ${fromCountry}`;
  toAirport.value = `(${tCode}) ${toCity}, ${toCountry}`;
  trvlDate.value = formattedDate;
  paxInfo.value = `${pInf} Adult | ${cbnClass}`;
  trpType.disabled = true;
  fromAirport.disabled = true;
  toAirport.disabled = true;
  trvlDate.disabled = true;
  paxInfo.disabled = true;
  if (userId) {
    signIn.textContent = uNameData;
    signInSignup.style.display = 'none';
  } else {
    signInSignup.textContent = 'Sign / Sign Up';
    signIn.style.display = 'none';
    signInSignup.href = 'https://indifly365.com/#/sign-up/regular';
    user.style.display = 'none';
  }
}
const htmlUrl = 'https://indifly365.com/';
document.addEventListener("DOMContentLoaded", function () {
  var aboutLink = document.getElementById("aboutLink");
  var aboutHref = atoken && userId ? `${htmlUrl}about-us.html?&${atoken}?&userid=${userId}?&username=${userName}` : atoken ? `${htmlUrl}about-us.html?&${atoken}` : `${htmlUrl}about-us.html`;
  aboutLink.href = aboutHref;
});
document.addEventListener("DOMContentLoaded", function () {
  var blogLink = document.getElementById("blogLink");
  var blogHref = atoken && userId ? `${htmlUrl}blogs.html?&${atoken}?&userid=${userId}?&username=${userName}` : atoken ? `${htmlUrl}blogs.html?&${atoken}` : `${htmlUrl}blogs.html`;
  blogLink.href = blogHref;
})
document.addEventListener("DOMContentLoaded", function () {
  var contactUsLink = document.getElementById("contactUsLink");
  var contactUsHref = atoken && userId ? `${htmlUrl}contact-us.html?&${atoken}?&userid=${userId}?&username=${userName}` : atoken ? `${htmlUrl}contact-us.html?&${atoken}` : `${htmlUrl}contact-us.html`;
  contactUsLink.href = contactUsHref;
})
document.addEventListener("DOMContentLoaded", function () {
  var termsLink = document.getElementById("termsLink");
  var termsHref = atoken && userId ? `${htmlUrl}terms-and-conditions.html?&${atoken}?&userid=${userId}?&username=${userName}` : atoken ? `${htmlUrl}terms-and-conditions.html?&${atoken}` : `${htmlUrl}terms-and-conditions.html`;
  termsLink.href = termsHref;
})
document.addEventListener("DOMContentLoaded", function () {
  var privacyLink = document.getElementById("privacyLink");
  var privacyHref = atoken && userId ? `${htmlUrl}privacy-policy.html?&${atoken}?&userid=${userId}?&username=${userName}` : atoken ? `${htmlUrl}privacy-policy.html?&${atoken}` : `${htmlUrl}privacy-policy.html`;
  privacyLink.href = privacyHref;
})
document.addEventListener("DOMContentLoaded", function () {
  var refundLink = document.getElementById("refundLink");
  var refundHref = atoken && userId ? `${htmlUrl}refund-policy.html?&${atoken}?&userid=${userId}?&username=${userName}` : atoken ? `${htmlUrl}refund-policy.html?&${atoken}` : `${htmlUrl}refund-policy.html`;
  refundLink.href = refundHref;
})
document.addEventListener("DOMContentLoaded", function () {
  var cookieLink = document.getElementById("cookieLink");
  var cookieHref = atoken && userId ? `${htmlUrl}cookie-policy.html?&${atoken}?&userid=${userId}?&username=${userName}` : atoken ? `${htmlUrl}cookie-policy.html?&${atoken}` : `${htmlUrl}cookie-policy.html`;
  cookieLink.href = cookieHref;
})
document.addEventListener("DOMContentLoaded", function () {
  var employerPaymentLink = document.getElementById("employerPaymentLink");
  var employerPaymentHref = atoken && userId ? `${htmlUrl}employer-payment.html?&${atoken}?&userid=${userId}?&username=${userName}` : atoken ? `${htmlUrl}employer-payment.html?&${atoken}` : `${htmlUrl}employer-payment.html`;
  employerPaymentLink.href = employerPaymentHref;
})
function handleFlightSearch(){
  var flightSearch = document.getElementById("flightSearch");
  flightSearch.href =`https://indifly365.com/#/search-results/${tType}/${fCode}/${tCode}/${travelDate}/${pInf}/${cbnClass}`
}