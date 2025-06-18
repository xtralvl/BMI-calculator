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

// === BMI RESULT === //
const resultHeader = document.getElementById('generated-results-header');
const resultParagraph = document.getElementById('generated-results-paragraph');

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

// === METRIC HEIGHT ERROR STATES === //
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

// === METRIC WEIGHT ERROR STATES === //
metricWeight.addEventListener('input', () => {
    const typedInValueAsNum = Number(metricWeight.value);

    if (metricWeight.value === '' || isNaN(typedInValueAsNum) || typedInValueAsNum < 0 || typedInValueAsNum > 500 ) {
        metricWeightErrorMessage.style.display = 'block';
        metricWeight.style.border = '1px solid red'
        kg.style.color = 'red';

    } else {
        metricWeightErrorMessage.style.display = 'none';
        metricWeight.style.border = '';
        kg.style.color = '';
    }
});

// === METRIC BMI CALCULATION === //
function calculateMetricBmi() {
    if (metricButton.checked) {
        const weight = Number(metricWeight.value);
        const height = Number(metricHeight.value);

        if (
            isNaN(weight) || isNaN(height) ||
            weight < 0 || weight > 500 ||
            height < 0 || height > 300
        ) {
            resultHeader.textContent = '';
            resultParagraph.textContent = '';
            return;
        }

        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        function getBmiCategory(bmi) {
            bmi = Number(bmi);
            if (bmi < 18.5) return "Underweight";
            if (bmi < 25) return "Normal weight";
            if (bmi < 30) return "Overweight";
            if (bmi < 40) return "Obese Class I/II";
            return "Obese Class III (Very Severe)";
        }

        function getBmiSuggestion(bmi) {
            bmi = Number(bmi);
            if (bmi < 18.5) return "You’re underweight. Eat nutrient-rich foods and consult a doctor.";
            if (bmi < 25) return "You’re at a healthy weight. Maintain your current habits!";
            if (bmi < 30) return "You're overweight. Try increasing activity and improving diet.";
            if (bmi < 40) return "You're obese. Consider medical and nutritional support.";
            return "Severe obesity. Seek help from healthcare professionals.";
        }

        const category = getBmiCategory(bmi);
        const suggestion = getBmiSuggestion(bmi);

        resultHeader.textContent = `Your BMI is ${bmi} – ${category}`;
        resultParagraph.textContent = suggestion;
    }
}
metricHeight.addEventListener('input', calculateMetricBmi);
metricWeight.addEventListener('input', calculateMetricBmi);

