var subTypeElement = document.querySelector(".subscription-select");
    subTypeElement.addEventListener("change", function (e) {
    subType = e.target.value;
    updateSubscriptionDiv();
    //console.log(subType)
});

var subDurationElement = document.querySelector(".duration-select");
    subDurationElement.addEventListener("change", function (e) {
    subDuration = Number(e.target.value);
    updateSubscriptionDiv();
    //console.log(subDuration);
    });

var updateSubscriptionDiv = function () {
    var monthlyCost = 5;
      if (subType === "standard") {
         monthlyCost = 7;
      }
      else if (subType === "premium") {
         monthlyCost = 10;
      }
      var total = subDuration * monthlyCost;
      result.innerText = `You have chosen a ${subDuration} month ${subType} plan for $${total}.`
}


var result = document.querySelector(".result");
//console.log(result);

var subType = "basic";
var subDuration = 1;