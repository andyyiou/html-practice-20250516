const crncy = document.querySelector("#crncy");

const beforemoney = document.querySelector("#beforemoney");
const aftermoney = document.querySelector("#aftermoney");
const money = document.querySelector("#money");
const UsdToTwdButton = document.getElementById("UsdToTwdButton");
const TwdToUsdButton = document.getElementById("TwdToUsdButton");
const UsdToTwdFButton = document.getElementById("UsdToTwdFButton");
const TwdToUsdFButton = document.getElementById("TwdToUsdFButton");

const converter = function (cvalue,crate,ccurrency,cdigit,ctype="multiply") {
    let result = 0;
   
     console.log(cvalue,crate,cdigit,ctype);
    if (ctype === "multiply") {
        result = cvalue * crate;

    } else if (ctype === "divide") {
        result = cvalue / crate;
    }
     console.log(result);
    // console.log(result.toLocaleString('en-US', { style: 'currency', currency: ctype }));
    return result.toLocaleString('en-US', { style: 'currency', currency: ccurrency }).replace(ctype, '').trim();

}

// This function increments the count by 1 each time the button is clicked
UsdToTwdButton.addEventListener("click", function () {

    beforemoney.innerText = parseFloat(money.value).toLocaleString('en-US', { style: 'currency', currency: 'USD' }).replace('$', '');
    aftermoney.innerText = parseFloat(money.value * crncy.innerText).toLocaleString('en-US', { style: 'currency', currency: 'TWD' }).replace('TWD', '').trim();
    // console.log(count.innerText);
})

TwdToUsdButton.addEventListener("click", function () {
    beforemoney.innerText =  parseInt(money.value).toLocaleString('en-US', { style: 'currency', currency: 'TWD' }).replace('TWD', '').trim();
    aftermoney.innerText =  (money.value / crncy.innerText).toLocaleString('en-US', { style: 'currency', currency: 'USD' }).replace('', '');
    // console.log(count.innerText);
})

UsdToTwdFButton.addEventListener("click", function () {

    beforemoney.innerText = parseFloat(money.value).toLocaleString('en-US', { style: 'currency', currency: 'USD' }).replace('$', '');
    aftermoney.innerText = converter(money.value, crncy.innerText,'TWD', 0, 'multiply');
    // console.log(count.innerText);
})

TwdToUsdFButton.addEventListener("click", function () {
    beforemoney.innerText =  parseInt(money.value).toLocaleString('en-US', { style: 'currency', currency: 'TWD' }).replace('TWD', '').trim();
    aftermoney.innerText =  converter(money.value, crncy.innerText,'USD', 2, 'divide');
    // console.log(count.innerText);
})