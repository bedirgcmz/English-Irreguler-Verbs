/**
 * Varaibles
 */
const exercisesAllIrregularVerbs = getElementById('exercises-all-irregular-verbs');
const btnGetRandomVerbForExercises = getElementById('get-random-verb-for-exercises');
const btnShow = getElementById('btn-show');
const btnClear = getElementById('btn-clear');
const inputV1 = getElementById('input-v1');
const inputV2 = getElementById('input-v2');
const inputV3 = getElementById('input-v3');
const verbForExercises = getElementById('verb-for-exercises');
const v1Times = getElementById('v1-times');
const v2Times = getElementById('v2-times');
const v3Times = getElementById('v3-times');
let v1Varb;
let v2Varb;
let v3Varb;
/**
 * Print irregular verbs on page for exercise
 */
exercisesAllIrregularVerbs.innerHTML = verbList
    .map((verb, index) => {
        return `
        <div class="col-lg-2 mb-3">
           <a onClick='getVerbForExercises(${index})' href='#'>${verb.verb1Name}</a>
        </div>
    `;
}).join('');
/**
 * Events
 */
btnGetRandomVerbForExercises.addEventListener('click', function () {
    getRandomVerbForExercises();
    allProcessInputValue()
});
btnClear.addEventListener('click', function () {
    clearInputs();
    clearVerbsredIcon();
});
/**
 * Get verb for exercies
 * @param {*} pVerbIndex 
 */
function getVerbForExercises(pVerbIndex) {
    verbForExercises.innerHTML = verbList[pVerbIndex].verbTurkish;
    allProcessInputValue()
    btnShow.addEventListener('click', function () {
        inputV1.value = verbList[pVerbIndex].verb1Name 
        inputV2.value = verbList[pVerbIndex].verb2Name  
        inputV3.value = verbList[pVerbIndex].verb3Name  
        showVerbsGreenIcon();
    });    
}
/**
 * Get random verb for exercies
 */
function getRandomVerbForExercises() {
    let randomNumber = getRandomNumber(verbList.length);
    let randomVerb = verbList[randomNumber];
    verbForExercises.innerHTML = randomVerb.verbTurkish;
    btnShow.addEventListener('click', function () {
        inputV1.value = randomVerb.verb1Name 
        inputV2.value = randomVerb.verb2Name  
        inputV3.value = randomVerb.verb3Name         
        showVerbsGreenIcon();
    });
}
/**
 * Call function
 */
getRandomVerbForExercises();
allProcessInputValue();