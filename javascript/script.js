// === RADIO BUTTONS === //
const metricButton = document.getElementById('metric');
const imperialButton = document.getElementById('imperial')

// === INPUTS === //
const imperialInputs = document.getElementsByClassName('measure-container-imperial');
const metricInputs = document.getElementsByClassName('measure-container-metric');

// === INPUTS ONE BY ONE === //
const metricHeight = document.getElementById('height-metric');
const metricWeight = document.getElementById('weight-metric');

const feetInput = document.getElementById('height-ft');
const inchInput = document.getElementById('height-in');
const stInput = document.getElementById('weight-st');
const lbsInput = document.getElementById('weight-lbs');

// === ERROR STATES === //
const metricHeightErrorMessage = document.getElementById('error-message-height-metric');
const metricWeightErrorMessage = document.getElementById('error-message-weight-metric');

const cm = document.getElementById('cm')
const kg = document.getElementById('kg')


// === MEASUREMENT CHANGER FUNCTION === //
function swithToImperial() {
    imperialButton.addEventListener('change', () => {

        if (imperialButton.checked) {
            for (const element of imperialInputs) {
                element.style.display = 'block';
            }    
            for (const element of metricInputs) {
                element.style.display = 'none';
            }   
          }  
        })
    };      
swithToImperial();

function swithToMetric() {
    metricButton.addEventListener('change', () => {

        if (metricButton.checked) {
            for (const element of metricInputs) {
                element.style.display = 'block';
            }    
            for (const element of imperialInputs) {
                element.style.display = 'none';
            }   
          }  
        })
    };      
swithToMetric();

// === FORM VALIDATION === //

// === METRIC HEIGHT === //
metricHeight.addEventListener('input', () => {
    const typedInValueAsNum = Number(metricHeight.value);

    if (metricHeight.value === '' || isNaN(typedInValueAsNum) || typedInValueAsNum < 0 || typedInValueAsNum > 300) {
        metricHeightErrorMessage.style.display = 'block';
        metricHeight.style.border = '1px solid red'
        cm.style.color = 'red';

    } else {
        metricHeightErrorMessage.style.display = 'none';
        metricHeight.style.border = '';
        cm.style.color = '';


    }
});

// === METRIC WEIGHT === //
metricWeight.addEventListener('input', () => {
    const typedInValueAsNum = Number(metricWeight.value);

    if (metricWeight.value === '' || isNaN(typedInValueAsNum) ||  typedInValueAsNum < 0 || typedInValueAsNum > 500 ) {
        metricWeightErrorMessage.style.display = 'block';
        metricWeight.style.border = '1px solid red'
        kg.style.color = 'red';

    } else {
        metricWeightErrorMessage.style.display = 'none';
        metricWeight.style.border = '';
        kg.style.color = '';


    }
});