const loanAmount = document.getElementById('loanAmount');
const interestRate = document.getElementById('interestRate');
const loanTerm = document.getElementById('loanTerm');
const monthlyPrincipal = document.getElementById('monthlyPrincipal');
const firstBlock = document.getElementById('firstBlock');
const estimatedTaxesInsurance = document.getElementById('estimatedTaxesInsurance');
const estimatedAppraisedValue = document.getElementById('estimatedAppraisedValue');
const estimatedPropertyTaxes = document.getElementById('estimatedPropertyTaxes');

const originationCharges = document.getElementById('originationCharges');
const processing = document.getElementById('processing');
const origination = document.getElementById('origination');
const block3 = document.getElementById('block3');

const servicesCannotShop = document.getElementById('servicesCannotShop');
const appraisal = document.getElementById('appraisal');
const floodDetermination = document.getElementById('floodDetermination');
const block4 = document.getElementById('block4');

const servicesCanShop = document.getElementById('servicesCanShop');
const abstractSearch = document.getElementById('abstractSearch');
const finalTitle = document.getElementById('finalTitle');
const lendersTitle = document.getElementById('lendersTitle');
const titleExamination = document.getElementById('titleExamination');
const closingFee = document.getElementById('closingFee');
const block5 = document.getElementById('block5');

const totalLoanCost = document.getElementById('totalLoanCost');

const transferTaxes = document.getElementById('transferTaxes');
const taxesandGovermentFee = document.getElementById('taxesandGovermentFee');

const insurancePremium = document.getElementById('insurancePremium');
const prepaids = document.getElementById('prepaids');

const months = document.getElementById('months');
const homeownerInsurance = document.getElementById('homeownerInsurance'); 
const period = document.getElementById('period');
const propertyTaxes = document.getElementById('propertyTaxes');
const initialEscrowPaiment = document.getElementById('initialEscrowPaiment');

const other = document.getElementById('other');
const ownersTitleInsuranse = document.getElementById('ownersTitleInsuranse');

const totalOtherCosts = document.getElementById('totalOtherCosts');

const DI = document.getElementById('DI');
const lenderCredits = document.getElementById('lenderCredits');
const DIother = document.getElementById('DIother');

const purchasePrice = document.getElementById('purchasePrice');
const downPayment = document.getElementById('downPayment');
const closingCosts = document.getElementById('closingCosts');
const loanAmountLast = document.getElementById('loanAmountLast');
const cashFrom = document.getElementById('cashFrom');

const bottomBlock = document.getElementById('bottomBlock');

const homeownersDueDate = document.getElementById('datepicker');
const taxesDueDate = document.getElementById('datepicker2');
const firstPaymentDay = document.getElementById('datepicker3');

const closingCostsTop = document.getElementById('closingCostsTop');
const cashToClose = document.getElementById('cashToClose');




function numberTransform(numberT) {
  numberArray = String(numberT).split(".");
  if (numberArray[1] === undefined) {
    return `0.<span class="small-numbers">00</span>`;
  }
  return `${numberArray[0]}.<span class="small-numbers">${numberArray[1]}</span>`;
}

function innerTransform(numberI){
  let numberString = numberI.replace('<span class="small-numbers">', '');
  numberString = numberString.replace('</span>', '');
  return numberString;
}

numberTransform(2.33);


let d1 = new Date(taxesDueDate.value);
let d2 = new Date(firstPaymentDay.value);


let diffTime = Math.abs(d2 - d1);
let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

let monthsDifference = Math.round(diffDays / 30);


let B2 = loanAmount.value;
let B3 = interestRate.value / 100;
let B4 = loanTerm.value;
let E6 = estimatedAppraisedValue.value;


transferTaxes.innerHTML = numberTransform(Math.round(((B2 / 100) * 0.1) + 5).toFixed(2));
taxesandGovermentFee.innerHTML = numberTransform((Number(Math.round(((B2 / 100) * 0.1) + 5).toFixed(2)) + 72).toFixed(2));
estimatedPropertyTaxes.innerHTML = numberTransform((((E6 * 0.12) - 1000 ) * 0.08367).toFixed(2));

let insurancePremiumVar = B2 * 0.012 > 1000 ? B2 * 0.012 : 1000;
insurancePremium.innerHTML = numberTransform(insurancePremiumVar.toFixed(2));
prepaids.innerHTML = numberTransform(insurancePremiumVar.toFixed(2));

homeownerInsurance.innerHTML = numberTransform(((insurancePremiumVar / 12) * months.value).toFixed(2));
period.innerHTML = 12 - monthsDifference + 2;

function MyRound10(val) {
  return Math.floor(val / 10) * 10;
}

propertyTaxes.innerHTML = numberTransform((MyRound10((((E6 * 0.12) - 1000 ) * 0.08367) / 12) * Number(period.innerHTML)).toFixed(2));
initialEscrowPaiment.innerHTML = numberTransform((Number(innerTransform(propertyTaxes.innerHTML)) + Number(innerTransform(homeownerInsurance.innerHTML))).toFixed(2));


function amount() {
  let value = ( - (-B2)*(B3 / 12 * Math.pow((1 + B3 / 12), B4)) / (Math.pow((1 + B3 / 12), B4) - 1)).toFixed(2);
  return value;
}
monthlyPrincipal.innerHTML = numberTransform(amount());


firstBlock.addEventListener('input', e => {
  B2 = loanAmount.value;
  B3 = interestRate.value / 100;
  B4 = loanTerm.value;
  if (!isNaN(amount())) {
    monthlyPrincipal.innerHTML = numberTransform(amount());
  } else {
    monthlyPrincipal.innerHTML = "0";
  }
  transferTaxes.innerHTML = numberTransform(Math.round(((B2 / 100) * 0.1) + 5).toFixed(2));
  taxesandGovermentFee.innerHTML = numberTransform((Number(Math.round(((B2 / 100) * 0.1) + 5).toFixed(2)) + 72).toFixed(2));
  insurancePremiumVar = B2 * 0.012 > 1000 ? B2 * 0.012 : 1000;
  insurancePremium.innerHTML = numberTransform(insurancePremiumVar.toFixed(2));
  prepaids.innerHTML = numberTransform(insurancePremiumVar.toFixed(2));
  homeownerInsurance.innerHTML = numberTransform(((insurancePremiumVar / 12) * months.value).toFixed(2));
  E6 = estimatedAppraisedValue.value;
  estimatedPropertyTaxes.innerHTML = numberTransform((((E6 * 0.12) - 1000 ) * 0.08367).toFixed(2));

  d1 = new Date(taxesDueDate.value);
  d2 = new Date(firstPaymentDay.value);


  diffTime = Math.abs(d2 - d1);
  diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

  period.innerHTML = 12 - monthsDifference + 2;
  propertyTaxes.innerHTML = numberTransform((MyRound10((((E6 * 0.12) - 1000 ) * 0.08367) / 12) * Number(period.innerHTML)).toFixed(2));
  initialEscrowPaiment.innerHTML = numberTransform((Number(innerTransform(propertyTaxes.innerHTML)) + Number(innerTransform(homeownerInsurance.innerHTML))).toFixed(2));

  totalOtherCosts.innerHTML = numberTransform(Number(innerTransform(taxesandGovermentFee.innerHTML)) + Number(innerTransform(prepaids.innerHTML)) + Number(innerTransform(initialEscrowPaiment.innerHTML)) + Number(innerTransform(other.innerHTML)));
  DI.innerHTML = numberTransform((Number(innerTransform(totalOtherCosts.innerHTML)) + Number(innerTransform(totalLoanCost.innerHTML))).toFixed(2));
  DIother.innerHTML = numberTransform((Number(innerTransform(DI.innerHTML)) + Number(innerTransform(lenderCredits.innerHTML))).toFixed(2));
  closingCosts.innerHTML = DIother.innerHTML;
  closingCostsTop.innerHTML = DIother.innerHTML;
  loanAmountLast.innerHTML = numberTransform(Number(loanAmount.value).toFixed(2));
  estimatedTaxesInsurance.innerHTML = numberTransform((Math.ceil((((E6 * 0.12) - 1000 ) * 0.08367).toFixed(2)) / 12  + Number(innerTransform(prepaids.innerHTML))  / 12).toFixed(2));

})


let B13 = processing.value;
let B14 = origination.value;

function origCharges() {
  let value = (Number(B13) + Number(B14)).toFixed(2);
  return value;
}

originationCharges.innerHTML = numberTransform(origCharges());

block3.addEventListener('input', e => {
  B13 = processing.value;
  B14 = origination.value;
  originationCharges.innerHTML = numberTransform(origCharges());
  totalLoanCost.innerHTML = Number(services2()) + Number(services()) + Number(origCharges()); 
  DI.innerHTML = numberTransform((Number(innerTransform(totalOtherCosts.innerHTML)) + Number(innerTransform(totalLoanCost.innerHTML))).toFixed(2));
  DIother.innerHTML = numberTransform((Number(innerTransform(DI.innerHTML)) + Number(innerTransform(lenderCredits.innerHTML))).toFixed(2));
  closingCosts.innerHTML = DIother.innerHTML;
  closingCostsTop.innerHTML = DIother.innerHTML;
})


let B17 = appraisal.value;
let B18 = floodDetermination.value;

function services() {
  let value = (Number(B17) + Number(B18)).toFixed(2);
  return value;
}

servicesCannotShop.innerHTML = numberTransform(services());

block4.addEventListener('input', e => {
  B17 = appraisal.value;
  B18 = floodDetermination.value;
  servicesCannotShop.innerHTML = numberTransform(services());
  totalLoanCost.innerHTML = Number(services2()) + Number(services()) + Number(origCharges()); 
  DI.innerHTML = numberTransform((Number(innerTransform(totalOtherCosts.innerHTML)) + Number(innerTransform(totalLoanCost.innerHTML))).toFixed(2));
  DIother.innerHTML = numberTransform((Number(innerTransform(DI.innerHTML)) + Number(innerTransform(lenderCredits.innerHTML))).toFixed(2));
  closingCosts.innerHTML = DIother.innerHTML;
  closingCostsTop.innerHTML = DIother.innerHTML;
  cashFrom.innerHTML = numberTransform(Number((Number(purchasePrice.value) + Number(innerTransform(closingCosts.innerHTML)) - Number(innerTransform(loanAmountLast.innerHTML)) - Number(downPayment.value))).toFixed(2));
  cashToClose.innerHTML = cashFrom.innerHTML;
})


let B24 = !isNaN(Number(abstractSearch.value)) ? abstractSearch.value : 0;
let B25 = !isNaN(Number(finalTitle.value)) ? finalTitle.value : 0;
let B26 = !isNaN(Number(lendersTitle.value)) ? lendersTitle.value : 0;
let B27 = !isNaN(Number(titleExamination.value)) ? titleExamination.value : 0;
let B28 = !isNaN(Number(closingFee.value)) ? closingFee.value : 0;


function services2() {
  let value = (Number(B24) + Number(B25) + Number(B26) + Number(B27) + Number(B28)).toFixed(2);
  return value;
}

servicesCanShop.innerHTML = numberTransform(services2());

block5.addEventListener('input', e => {
  B24 = !isNaN(Number(abstractSearch.value)) ? abstractSearch.value : 0;
  B25 = !isNaN(Number(finalTitle.value)) ? finalTitle.value : 0;
  B26 = !isNaN(Number(lendersTitle.value)) ? lendersTitle.value : 0;
  B27 = !isNaN(Number(titleExamination.value)) ? titleExamination.value : 0;
  B28 = !isNaN(Number(closingFee.value)) ? closingFee.value : 0;
  servicesCanShop.innerHTML = numberTransform(services2());
  totalLoanCost.innerHTML = numberTransform((Number(services2()) + Number(services()) + Number(origCharges())).toFixed(2)); 
  DI.innerHTML = numberTransform((Number(innerTransform(totalOtherCosts.innerHTML)) + Number(innerTransform(totalLoanCost.innerHTML))).toFixed(2));
  DIother.innerHTML = numberTransform((Number(innerTransform(DI.innerHTML)) + Number(innerTransform(lenderCredits.innerHTML))).toFixed(2));
  closingCosts.innerHTML = DIother.innerHTML;
  closingCostsTop.innerHTML = DIother.innerHTML;
  cashFrom.innerHTML = numberTransform(Number((Number(purchasePrice.value) + Number(innerTransform(closingCosts.innerHTML)) - Number(innerTransform(loanAmountLast.innerHTML)) - Number(downPayment.value))).toFixed(2));
})

totalLoanCost.innerHTML = numberTransform((Number(services2()) + Number(services()) + Number(origCharges())).toFixed(2)); 

months.addEventListener('input', e => {
  homeownerInsurance.innerHTML = numberTransform(((insurancePremiumVar / 12) * months.value).toFixed(2));
  initialEscrowPaiment.innerHTML = numberTransform((Number(innerTransform(propertyTaxes.innerHTML)) + Number(innerTransform(homeownerInsurance.innerHTML))).toFixed(2));
  totalOtherCosts.innerHTML = numberTransform(Number(Number(innerTransform(taxesandGovermentFee.innerHTML)) + Number(innerTransform(prepaids.innerHTML)) + Number(innerTransform(initialEscrowPaiment.innerHTML)) + Number(innerTransform(other.innerHTML))).toFixed(2));
  DI.innerHTML = numberTransform((Number(innerTransform(totalOtherCosts.innerHTML)) + Number(innerTransform(totalLoanCost.innerHTML))).toFixed(2));
  DIother.innerHTML = numberTransform((Number(innerTransform(DI.innerHTML)) + Number(innerTransform(lenderCredits.innerHTML))).toFixed(2));
  closingCosts.innerHTML = DIother.innerHTML;
  closingCostsTop.innerHTML = DIother.innerHTML;
  cashFrom.innerHTML = numberTransform(Number((Number(purchasePrice.value) + Number(innerTransform(closingCosts.innerHTML)) - Number(innerTransform(loanAmountLast.innerHTML)) - Number(downPayment.value))).toFixed(2));
  cashToClose.innerHTML = cashFrom.innerHTML;
})

other.innerHTML = ownersTitleInsuranse.innerHTML;

totalOtherCosts.innerHTML = numberTransform(Number(Number(innerTransform(taxesandGovermentFee.innerHTML)) + Number(innerTransform(prepaids.innerHTML)) + Number(innerTransform(initialEscrowPaiment.innerHTML)) + Number(innerTransform(other.innerHTML))).toFixed(2));

DI.innerHTML = numberTransform((Number(innerTransform(totalOtherCosts.innerHTML)) + Number(innerTransform(totalLoanCost.innerHTML))).toFixed(2));
DIother.innerHTML = numberTransform((Number(innerTransform(DI.innerHTML)) + Number(innerTransform(lenderCredits.innerHTML))).toFixed(2));

closingCosts.innerHTML = DIother.innerHTML;

loanAmountLast.innerHTML = numberTransform(Number(loanAmount.value).toFixed(2));

bottomBlock.addEventListener ('input', e => {
  cashFrom.innerHTML = numberTransform(Number((Number(purchasePrice.value) + Number(innerTransform(closingCosts.innerHTML)) - Number(innerTransform(loanAmountLast.innerHTML)) - Number(downPayment.value))).toFixed(2));
  cashToClose.innerHTML = cashFrom.innerHTML;
})



cashFrom.innerHTML = numberTransform(Number((Number(purchasePrice.value) + Number(innerTransform(closingCosts.innerHTML)) - Number(innerTransform(loanAmountLast.innerHTML)) - Number(downPayment.value))).toFixed(2));

estimatedTaxesInsurance.innerHTML = numberTransform((Math.ceil((((E6 * 0.12) - 1000 ) * 0.08367).toFixed(2)) / 12  + Number(innerTransform(prepaids.innerHTML))  / 12).toFixed(2));


$( function() {
  $( "#datepicker" ).datepicker(
    {
      dateFormat: "mm/dd/yy",
    }
  );
  $( "#datepicker2" ).datepicker(
    {
      dateFormat: "mm/dd/yy",
      onClose: function() {
        d1 = new Date(taxesDueDate.value);
        d2 = new Date(firstPaymentDay.value);
        diffTime = Math.abs(d2 - d1);
        diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        monthsDifference = Math.round(diffDays / 30);

        period.innerHTML = 12 - monthsDifference + 2;
        propertyTaxes.innerHTML = numberTransform((MyRound10((((E6 * 0.12) - 1000 ) * 0.08367) / 12) * Number(period.innerHTML)).toFixed(2));
        initialEscrowPaiment.innerHTML = numberTransform((Number(innerTransform(propertyTaxes.innerHTML)) + Number(innerTransform(homeownerInsurance.innerHTML))).toFixed(2));
      
        totalOtherCosts.innerHTML = numberTransform(Number(Number(innerTransform(taxesandGovermentFee.innerHTML)) + Number(innerTransform(prepaids.innerHTML)) + Number(innerTransform(initialEscrowPaiment.innerHTML)) + Number(innerTransform(other.innerHTML))).toFixed(2));
        DI.innerHTML = numberTransform((Number(innerTransform(totalOtherCosts.innerHTML)) + Number(innerTransform(totalLoanCost.innerHTML))).toFixed(2));
        DIother.innerHTML = numberTransform((Number(innerTransform(DI.innerHTML)) + Number(innerTransform(lenderCredits.innerHTML))).toFixed(2));
        closingCosts.innerHTML = DIother.innerHTML;
        closingCostsTop.innerHTML = DIother.innerHTML;
        cashFrom.innerHTML = numberTransform(Number((Number(purchasePrice.value) + Number(innerTransform(closingCosts.innerHTML)) - Number(innerTransform(loanAmountLast.innerHTML)) - Number(downPayment.value))).toFixed(2));
        cashToClose.innerHTML = cashFrom.innerHTML;
      },
    }
  );
  $( "#datepicker3" ).datepicker(
    {
      dateFormat: "mm/dd/yy",
      onClose: function() {
        d1 = new Date(taxesDueDate.value);
        d2 = new Date(firstPaymentDay.value);
        diffTime = Math.abs(d2 - d1);
        diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        monthsDifference = Math.round(diffDays / 30);

        period.innerHTML = 12 - monthsDifference + 2;
        propertyTaxes.innerHTML = numberTransform((MyRound10((((E6 * 0.12) - 1000 ) * 0.08367) / 12) * Number(period.innerHTML)).toFixed(2));
        initialEscrowPaiment.innerHTML = numberTransform((Number(innerTransform(propertyTaxes.innerHTML)) + Number(innerTransform(homeownerInsurance.innerHTML))).toFixed(2));
      
        totalOtherCosts.innerHTML = numberTransform(Number(Number(innerTransform(taxesandGovermentFee.innerHTML)) + Number(innerTransform(prepaids.innerHTML)) + Number(innerTransform(initialEscrowPaiment.innerHTML)) + Number(innerTransform(other.innerHTML))).toFixed(2));
        DI.innerHTML = numberTransform((Number(innerTransform(totalOtherCosts.innerHTML)) + Number(innerTransform(totalLoanCost.innerHTML))).toFixed(2));
        DIother.innerHTML = numberTransform((Number(innerTransform(DI.innerHTML)) + Number(innerTransform(lenderCredits.innerHTML))).toFixed(2));
        closingCosts.innerHTML = DIother.innerHTML;
        closingCostsTop.innerHTML = DIother.innerHTML;
        cashFrom.innerHTML = numberTransform(Number((Number(purchasePrice.value) + Number(innerTransform(closingCosts.innerHTML)) - Number(innerTransform(loanAmountLast.innerHTML)) - Number(downPayment.value))).toFixed(2));
        cashToClose.innerHTML = cashFrom.innerHTML;
      },
    }
  );
} );

closingCostsTop.innerHTML = DIother.innerHTML;
cashToClose.innerHTML = cashFrom.innerHTML;

