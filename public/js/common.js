const url = window.location.href;
const urlArr = url.split('?&');
const atoken = urlArr.length > 1 ? urlArr[1] : '';
const uId = urlArr.length > 1 ? urlArr[2] : '';
const uIdArr = uId ? uId.split('=') : '';
const userId = uIdArr.length > 1 ? uIdArr[0] == 'userid' ? uIdArr[1] : '' : '';
const uName = urlArr.length > 1 ? urlArr[3] : '';
const uNameArr = uName ? uName.split('=') : '';
const userName = uNameArr.length > 1 ? uNameArr[0] == 'username' ? uNameArr[1] :'' : '';
const uNameData = userName.replaceAll('%20', ' ');
const signIn = document.getElementById('signIn');
const signInSignup = document.getElementById('signInSignup');
const user = document.getElementById('user');

  if(!atoken){
    signInSignup.textContent = 'Sign / Sign Up';
    signIn.style.display = 'none';
    user.style.display = 'none';
    signInSignup.href = 'https://indifly365.com/#/sign-up/regular';
  } else {
    if(!userId){
      signInSignup.textContent = 'Sign / Sign Up';
      signIn.style.display = 'none';
      user.style.display = 'none';
      signInSignup.href = 'https://indifly365.com/#/sign-up/regular';
    } else {
      signIn.textContent = uNameData;
      signInSignup.style.display = 'none';
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
// ============Blogs============
document.addEventListener("DOMContentLoaded", function () {
  var cheapTicketsOnlineLink = document.getElementById("cheapTicketsOnlineLink");
  var cheapTicketsOnlineHref = atoken && userId ? `${htmlUrl}blogs/best-cheap-flight-tickets-at-lowest-airfare.html?&${atoken}?&userid=${userId}?&username=${userName}` : atoken ? `${htmlUrl}blogs/best-cheap-flight-tickets-at-lowest-airfare.html?&${atoken}` : `${htmlUrl}blogs/best-cheap-flight-tickets-at-lowest-airfare.html`;
  cheapTicketsOnlineLink.href = cheapTicketsOnlineHref;
})

document.addEventListener("DOMContentLoaded", function () {
  var safestDestinationLink = document.getElementById("safestDestinationLink");
  console.log(safestDestinationLink);
  var safestDestinationHref = atoken && userId ? `${htmlUrl}blogs/safest-destinations-for-solo-female-travellers.html?&${atoken}?&userid=${userId}?&username=${userName}` : atoken ? `${htmlUrl}blogs/safest-destinations-for-solo-female-travellers.html?&${atoken}` : `${htmlUrl}blogs/safest-destinations-for-solo-female-travellers.html`;
  safestDestinationLink.href = safestDestinationHref;
})

document.addEventListener("DOMContentLoaded", function () {
  var trickstobookLink = document.getElementById("trickstobookLink");
  console.log(trickstobookLink);
  var trickstobookHref = atoken && userId ? `${htmlUrl}blogs/ten-tricks-to-book-cheap-flight-tickets.html?&${atoken}?&userid=${userId}?&username=${userName}` : atoken ? `${htmlUrl}blogs/ten-tricks-to-book-cheap-flight-tickets.html?&${atoken}` : `${htmlUrl}blogs/ten-tricks-to-book-cheap-flight-tickets.html`;
  trickstobookLink.href = trickstobookHref;
})
document.addEventListener("DOMContentLoaded", function () {
  var lakshadweepLink = document.getElementById("lakshadweepLink");
  console.log(lakshadweepLink);
  var lakshadweepHref = atoken && userId ? `${htmlUrl}blogs/best-places-to-visit-in-lakshadweep.html?&${atoken}?&userid=${userId}?&username=${userName}` : atoken ? `${htmlUrl}blogs/best-places-to-visit-in-lakshadweep.html?&${atoken}` : `${htmlUrl}blogs/best-places-to-visit-in-lakshadweep.html`;
  lakshadweepLink.href = lakshadweepHref;
})
document.addEventListener("DOMContentLoaded", function () {
  var bestDealsLink = document.getElementById("bestDealsLink");
  console.log(bestDealsLink);
  var bestDealsHref = atoken && userId ? `${htmlUrl}blogs/how-can-travelers-find-the-best-deals-on-flight-tickets.html?&${atoken}?&userid=${userId}?&username=${userName}` : atoken ? `${htmlUrl}blogs/how-can-travelers-find-the-best-deals-on-flight-tickets.html?&${atoken}` : `${htmlUrl}blogs/how-can-travelers-find-the-best-deals-on-flight-tickets.html`;
  bestDealsLink.href = bestDealsHref;
})
document.addEventListener("DOMContentLoaded", function () {
  var usaToIndiaLink = document.getElementById("usaToIndiaLink");
  console.log(usaToIndiaLink);
  var usaToIndiaHref = atoken && userId ? `${htmlUrl}blogs/hacks-to-book-air-tickets-online-from-usa-to-india-at-lower-rates.html?&${atoken}?&userid=${userId}?&username=${userName}` : atoken ? `${htmlUrl}blogs/hacks-to-book-air-tickets-online-from-usa-to-india-at-lower-rates.html?&${atoken}` : `${htmlUrl}blogs/hacks-to-book-air-tickets-online-from-usa-to-india-at-lower-rates.html`;
  usaToIndiaLink.href = usaToIndiaHref;
})
document.addEventListener("DOMContentLoaded", function () {
  var toUSA = document.getElementById("toUSA");
  var toUSAHref = atoken && userId ? `${htmlUrl}blogs/first-time-travelers-guide-to-the-usa-a-journey-of-discovery.html?&${atoken}?&userid=${userId}?&username=${userName}` : atoken ? `${htmlUrl}blogs/first-time-travelers-guide-to-the-usa-a-journey-of-discovery.html?&${atoken}` : `${htmlUrl}blogs/first-time-travelers-guide-to-the-usa-a-journey-of-discovery.html`;
  toUSA.href = toUSAHref;
})
document.addEventListener("DOMContentLoaded", function () {
  var toIndia = document.getElementById("toIndia");
  var toIndiaHref = atoken && userId ? `${htmlUrl}blogs/embrace-the-magic-traveling-to-india.html?&${atoken}?&userid=${userId}?&username=${userName}` : atoken ? `${htmlUrl}blogs/embrace-the-magic-traveling-to-india.html?&${atoken}` : `${htmlUrl}blogs/embrace-the-magic-traveling-to-india.html`;
  toIndia.href = toIndiaHref;
})
document.addEventListener("DOMContentLoaded", function () {
  var inTheUSA = document.getElementById("inTheUSA");
  var inTheUSAHref = atoken && userId ? `${htmlUrl}blogs/discover-the-best-places-to-visit-in-the-usa.html?&${atoken}?&userid=${userId}?&username=${userName}` : atoken ? `${htmlUrl}blogs/discover-the-best-places-to-visit-in-the-usa.html?&${atoken}` : `${htmlUrl}blogs/discover-the-best-places-to-visit-in-the-usa.html`;
  inTheUSA.href = inTheUSAHref;
})