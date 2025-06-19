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

const longerSuggestionsFromToRange = document.getElementById('from-to-range"');
const longerSuggestions = document.getElementById('longer-suggestions');

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

        // === BMI CATEGORIES HEADER === //

        function getBmiCategory(bmi) {
            bmi = Number(bmi);
            if (bmi < 18.5) return "Underweight";
            if (bmi < 25) return "Normal weight";
            if (bmi < 30) return "Overweight";
            if (bmi < 40) return "Obese Class I/II";
            if (bmi> 40) return "Obese Class III (Very Severe)";
        }

        // === BMI CATEGORIES PARAGRAPH === //

        function getBmiSuggestion(bmi) {
            bmi = Number(bmi);
            if (bmi < 18.5) return "You’re underweight. Eat nutrient-rich foods and consult a doctor.";
            if (bmi < 25) return "You’re at a healthy weight. Maintain your current habits!";
            if (bmi < 30) return "You're overweight. Try increasing activity and improving diet.";
            if (bmi < 40) return "You're obese. Consider medical and nutritional support.";
            if (bmi> 40) return "Severe obesity. Seek help from healthcare professionals.";
        }

        const category = getBmiCategory(bmi);
        const suggestion = getBmiSuggestion(bmi);

        resultHeader.textContent = `Your BMI is ${bmi} – ${category}`;
        resultParagraph.textContent = suggestion;

        // === 'WHAT YOUR BMI RESULT MEANS' SECTION === //

        function getLongerSuggestions(bmi) {
            bmi = Number(bmi);
            if (bmi < 18.5) return "<p> A BMI under 18.5 means you're underweight. </p> <br> <strong>Recommendation:</strong> <p> Your BMI falls into the underweight range. This could indicate that you're not consuming enough calories or nutrients for optimal health. Being underweight can lead to weakened immunity, fatigue, and nutrient deficiencies.</p> <br> <strong> Suggestions: </strong> <ul> <li>Increase your calorie intake with balanced meals that include healthy fats, complex carbs, and proteins.</li> <li>Eat more frequently — add snacks between meals (nuts, avocados, smoothies, etc.).</li> <li> Include strength training to help build lean muscle mass. </li> <li> Consider consulting a dietitian or physician to rule out any underlying health issues. </li>" ;
            if (bmi < 25) return "<p> A BMI range from 18.5 to 25 means you're normal weight. </p> <br> <strong>Recommendation:</strong> <p> Your BMI is within the healthy weight range. This is a positive indicator that your weight is appropriate for your height and can lower the risk of many chronic diseases. </p> <strong> Suggestions: </strong> <ul> <li> Maintain your current healthy eating habits and regular physical activity. </li> <li> Keep an eye on portion sizes and limit processed foods and sugary drinks. </li> <li> Aim for a varied diet rich in fruits, vegetables, whole grains, lean proteins, and healthy fats. </li> <li> Continue regular check-ups to monitor your overall health. </li> </ul> ";
            if (bmi < 30) return "<p> A BMI range from 25 to 30 means you're overweight. </p> <br> <strong>Recommendation:</strong> <p> Your BMI suggests that you are overweight. While this may not immediately impact your health, it can increase your risk of conditions such as heart disease, high blood pressure, and type 2 diabetes over time. </p> <strong> Suggestions: </strong> <ul> <li> Start making small, sustainable changes to your diet — reduce sugar and saturated fats, and increase fiber-rich foods. </li> <li> Engage in at least 150 minutes of moderate-intensity physical activity per week (like brisk walking, swimming, or cycling). </li> <li> Consider speaking with a health professional or dietitian for personalized guidance. </li> <li> Focus on habits, not weight — even modest weight loss (5–10%) can bring significant health benefits. </li>";
            if (bmi < 40) return "<p> A BMI range from 30 to 40 means you're obese. </p> <br> <strong>Recommendation:</strong> <p>Your BMI indicates obesity, which can significantly increase the risk of health conditions such as cardiovascular disease, type 2 diabetes, sleep apnea, and joint issues.</p> <strong> Suggestions: </strong> <ul> <li> Work with a healthcare provider to create a weight management plan tailored to your needs. </li> <li> Combine regular physical activity with a structured, nutrient-dense diet. </li> <li> Behavioral therapy, group programs, or professional counseling may support long-term change. </li> <li> Monitor other health indicators like blood pressure, cholesterol, and blood glucose levels. </li> </ul>";
            if (bmi> 40) return "<p> A BMI above 40 means you're severely obese. </p> <br> <strong>Recommendation:</strong> <p>Your BMI falls in the category of severe or morbid obesity. This can have a serious impact on your overall health and quality of life, increasing your risk for life-threatening conditions.</p> <strong> Suggestions: </strong> <ul> <li>Seek comprehensive support from a multidisciplinary healthcare team, including doctors, dietitians, and possibly mental health professionals.</li> <li>Medical interventions may be recommended, such as prescription medications or bariatric surgery, depending on your situation.</li> <li>Focus on realistic goals — even a modest reduction in weight can improve health outcomes.</li> <li>Don't try to do this alone — support groups and medical professionals can guide and encourage you along the way.</li>";
        }

        const generatedLongerSuggestions = getLongerSuggestions(bmi);
        longerSuggestions.innerHTML = `${generatedLongerSuggestions}`;

    }
}

metricHeight.addEventListener('input', calculateMetricBmi);
metricWeight.addEventListener('input', calculateMetricBmi);

