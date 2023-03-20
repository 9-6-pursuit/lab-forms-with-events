let form = document.getElementById('main-form');

let unorderedList = document.body.querySelector('ul');

let clearButton = document.getElementById('clear-button');

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let inputfield = form.querySelector('input');

    let newListItem = document.createElement('li');

    let deleteButton = document.createElement('button');

    deleteButton.innerHTML = 'Delete';

    deleteButton.onclick = () => {
        newListItem.remove();

        refreshElements([clearButton, unorderedList]);
    }

    newListItem.innerHTML = inputfield.value;
    
    newListItem.addEventListener("click", (event) => {
        event.target.style.textDecoration = event.target.style.textDecoration === "line-through" ? "" : "line-through";
    });

    if(inputfield.value)
        unorderedList.append(newListItem);

    newListItem.append(deleteButton);

    inputfield.value = null;

    refreshElements([clearButton, unorderedList]);
});

function refreshElements(elements){
    for(const element of elements){
        if(unorderedList.querySelectorAll('li').length < 1){
            element.style.display = "none";
        } else {
            element.style.display = "";
        }
    }
}

clearButton.onclick = () => {
    unorderedList.querySelectorAll('li').forEach(listElement => {
        listElement.remove();
    });
}

refreshElements([clearButton, unorderedList]);















// 4
console.log("********* Section 4 ********* ");
// Leave these values the same throughout.
const minimumPriceInCents = 500;
const priceInCentsPerPound = 179;

// Change the values of these variables to test out your code.
const packageDescription = "Peach Scented Candles";
const packageSender = "Lester Jeffison";
const packageWeightInPounds = 2.98;
const hasMembership = true;
const isHolidayDelivery = true;

// Write your algorithm below!
// Check if `packageDescription` or `packageSender` is truthy or falsy.
if(!packageDescription || !packageSender) {
  // If `packageDescription` or `packageSender` is falsy, print the following message to the console.
  console.log('A package description and sender is required!');
// If `packageDescription` and `packageSender` are truthy.
} else {
    // If package weighs less than 10 lb.
    if(packageWeightInPounds < 10) {
      // If package weighs less than 3 lb.
      if(packageWeightInPounds < 3) {
        // If the package is not to be delivered during a holiday.
        if(isHolidayDelivery === false) {
          // If sender has membership, they get a 10% discount.
          if(hasMembership === true) {
            console.log(`${packageSender} - $${((minimumPriceInCents / 100) - (0.1 * (minimumPriceInCents / 100))).toFixed(2)}`);
            console.log(`Package Description: ${packageDescription}`);
          // If sender does not have a membership, they don't get a discount.
          } else {
            console.log(`${packageSender} - $${((minimumPriceInCents / 100)).toFixed(2)}`);
            console.log(`Package Description: ${packageDescription}`);
          }
        // If the package is to be delivered during a holiday, then add an extra $5.
        } else {
          if(hasMembership === true) {
            console.log(`${packageSender} - $${((minimumPriceInCents / 100) - (0.1 * (minimumPriceInCents / 100)) + 5).toFixed(2)}`);
            console.log(`Package Description: ${packageDescription}`);
          // If sender does not have a membership, they don't get a discount.
          } else {
            console.log(`${packageSender} - $${((minimumPriceInCents / 100) + 5).toFixed(2)}`);
            console.log(`Package Description: ${packageDescription}`);
          }
        }
      // If the package weighs 3 lb or more, but less than 10 lb.
      } else {
        // If the package is not to be delivered during a holiday.
        if(isHolidayDelivery === false) {
          // If sender has membership.
          if(hasMembership === true) {
            // Print the following strings including the proper calculation applying the 10% discount and using the $1.79 per lb rate on the cost based on conditions.
            console.log(`${packageSender} - $${(((priceInCentsPerPound * packageWeightInPounds) / 100) - (0.1 * (priceInCentsPerPound * packageWeightInPounds) / 100)).toFixed(2)}`); // Use toFixed() method to round final cost to 2 decimal places.
            console.log(`Package Description: ${packageDescription}`);
          // If sender does not have membership, then no discount is applied.
          } else {
            console.log(`${packageSender} - $${(((priceInCentsPerPound * packageWeightInPounds) / 100)).toFixed(2)}`); // Use toFixed() method to round final cost to 2 decimal places.
            console.log(`Package Description: ${packageDescription}`);
          }
          // If package is to be delivered during a holiday, then add an extra $5.  
        } else {
          if(hasMembership === true) {
            console.log(`${packageSender} - $${(((priceInCentsPerPound * packageWeightInPounds) / 100) - (0.1 * (priceInCentsPerPound * packageWeightInPounds) / 100) + 5).toFixed(2)}`); // Use toFixed() method to round final cost to 2 decimal places.
            console.log(`Package Description: ${packageDescription}`);
            // If sender does not have membership do not apply discount, but add an extra $5.
          } else {
              console.log(`${packageSender} - $${(((priceInCentsPerPound * packageWeightInPounds) / 100) + 5).toFixed(2)}`); // Use toFixed() method to round final cost to 2 decimal places.
              console.log(`Package Description: ${packageDescription}`);
          }
        }
      }  
    // Package weighs 10 or more lb.
    } else {
      // If the package is not to be delivered during a holiday.
      if(isHolidayDelivery === false) {
        // If sender has membership.
        if(hasMembership === true) {
          // Print the following strings including the proper calculation applying the 12% discount and using the $1.79 per lb rate on the cost based on conditions.
        console.log(`${packageSender} - $${(((priceInCentsPerPound * packageWeightInPounds) / 100) - (0.12 * (priceInCentsPerPound * packageWeightInPounds) / 100)).toFixed(2)}`); // Use toFixed() method to round final cost to 2 decimal places.
        console.log(`Package Description: ${packageDescription}`);
        // If sender does not have membership, then no discount is applied.
        } else {
          console.log(`${packageSender} - $${(((priceInCentsPerPound * packageWeightInPounds) / 100)).toFixed(2)}`); // Use toFixed() method to round final cost to 2 decimal places.
        console.log(`Package Description: ${packageDescription}`);
        }
      // If package is to be delivered during a holiday, then add an extra $5.  
      } else {
        // If sender has membership apply the 12% discount.
        if(hasMembership === true) {
          console.log(`${packageSender} - $${(((priceInCentsPerPound * packageWeightInPounds) / 100) - (0.12 * (priceInCentsPerPound * packageWeightInPounds) / 100) + 5).toFixed(2)}`); // Use toFixed() method to round final cost to 2 decimal places.
        console.log(`Package Description: ${packageDescription}`);
        // If sender does not have membership, do not apply the discount.
        } else {
          console.log(`${packageSender} - $${(((priceInCentsPerPound * packageWeightInPounds) / 100) + 5).toFixed(2)}`); // Use toFixed() method to round final cost to 2 decimal places.
        console.log(`Package Description: ${packageDescription}`);
        }
      }
    }
  }