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
const blogsPage = document.getElementById('blogsPage');

const htmlUrl = 'https://indifly365.com/';

if(!atoken){
  blogsPage.href = `${htmlUrl}blogs.html`;
  signInSignup.textContent = 'Sign / Sign Up';
  signIn.style.display = 'none';
  user.style.display = 'none';
  signInSignup.href = 'https://indifly365.com/#/sign-up/regular';
} else{
  if(!userId){
    signInSignup.textContent = 'Sign / Sign Up';
    signIn.style.display = 'none';
    user.style.display = 'none';
    signInSignup.href = 'https://indifly365.com/#/sign-up/regular';
    blogsPage.href = `${htmlUrl}blogs.html?&${atoken}`;
  }else{
    blogsPage.href = `${htmlUrl}blogs.html?&${atoken}?&userid=${userId}?&username=${userName}`;
    signIn.textContent = uNameData;
    signInSignup.style.display = 'none';
  }
}
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