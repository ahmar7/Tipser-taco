let faq1 = document.getElementById("faq1");
let faq2 = document.getElementById("faq2");
let faq3 = document.getElementById("faq3");
let toggleFaq1 = () => {
  faq1.classList.toggle("full-faq");
  faq2.classList.remove("full-faq");
  faq3.classList.remove("full-faq");
};
let toggleFaq2 = () => {
  faq2.classList.toggle("full-faq");
  faq1.classList.remove("full-faq");
  faq3.classList.remove("full-faq");
};
let toggleFaq3 = () => {
  faq3.classList.toggle("full-faq");
  faq2.classList.remove("full-faq");
  faq1.classList.remove("full-faq");
};
let thisFunc = (e) => {
  console.log(e);
};
function myFunction() {
  var price = document.getElementById("slider").value;
  var day = document.getElementById("slider2").value;
  var finalprice = document.getElementById("finalprice");

  let newVal = price * day * 365;
  document.getElementById("output").innerHTML = "$" + price;
  let finalVal = Math.sign(newVal) * (Math.abs(newVal) / 1000);
  let nowFinal = Math.round(finalVal);
  console.log(nowFinal);
  finalprice.innerHTML = "$" + nowFinal + "K";
}
function myFunction2() {
  var day = document.getElementById("slider2").value;

  var price = document.getElementById("slider").value;
  var finalprice = document.getElementById("finalprice");
  let newVal = price * day * 365;
  document.getElementById("output2").innerHTML = day;
  let finalVal = Math.sign(newVal) * (Math.abs(newVal) / 1000);
  let nowFinal = Math.round(finalVal);
  console.log(nowFinal);
  finalprice.innerHTML = "$" + nowFinal + "K";
}

let sendit = () => {
  const fname = document.getElementById("form-field-name");
  const lname = document.getElementById("form-field-field_37b26c2");
  const phoneNum = document.getElementById("phoneNum");
  const EmailAdress = document.getElementById("form-field-email");
  const businessName = document.getElementById("businessName");
  const businessAddress = document.getElementById("businessAddress");
  const businessType = document.getElementById("businessType");
  const businessState = document.getElementById("businessState");
  const Country = document.getElementById("Country");
  const locNum = document.getElementById("locNum");
  const businessZip = document.getElementById("businessZip");
  const submit = document.getElementById("submit");

  let ebody = `
  <span>First Name: </span> ${fname.value}
  <br>
  <span>Last Name: </span> ${lname.value}
  <br>
  <span>Email Address: </span> ${EmailAdress.value}
  <br>
  <span>phone Number: </span> ${phoneNum.value}
  <br>
  <span>business Name: </span> ${businessName.value}
  <br>
  <span>business Address: </span> ${businessAddress.value}
  <br>
  <span>business Type: </span> ${businessType.value}
  <br>
  <span>business State: </span> ${businessState.value}
  <br>
  <span>Country: </span> ${Country.value}
  <br>
  <span>location Number: </span> ${locNum.value}
  <br>
  <span>business Zip: </span> ${businessZip.value}
  `;

  Email.send({
    SecureToken: "750609cb-037c-4496-815c-936265d4ff8c",
    To: "",
    From: "",
    Subject: "Sizzle email",
    Body: ebody,
  }).then((message) => {
    if (message === "OK") {
      let btnSub = document.getElementById("btnSub");
      alert(
        "Thank you for contacting us, we have received your email and will contact you soon"
      );
      window.location.reload();
    } else {
      alert(message);
    }
  });
};
window.addEventListener("scroll", function () {
  let header = this.document.querySelector("#header");
  // bar.classList.toggle('removeBar', window.scrollY >0)
  header.classList.toggle("sticky-header", window.scrollY > 0);
});
let toggleNav = () => {
  let header = document.getElementById("header");
  header.classList.toggle("nav-active");
};
