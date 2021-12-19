const exercisesAllIrregularVerbs = getElementById(
    'exercises-all-irregular-verbs'
);

const btnGetRandomVerbForExercises = getElementById(
    'get-random-verb-for-exercises'
);

const btnShow = getElementById('btn-show');
const btnClear = getElementById('btn-clear');
const inputV1 = getElementById('input-v1');
const inputV2 = getElementById('input-v2');
const inputV3 = getElementById('input-v3');
const inputGroupText = document.getElementsByClassName("input-group-text");
const verbForExercises = getElementById('verb-for-exercises');
const v1Times = getElementById('v1-times');
const v2Times = getElementById('v2-times');
const v3Times = getElementById('v3-times');

exercisesAllIrregularVerbs.innerHTML = verbList
    .map((verb, index) => {
        return `
        <div class="col-lg-2 mb-3">
           <a onClick='getVerbForExercises(${index})' href='#'>${verb.verb1Name}</a>
        </div>
    `;
    })
    .join('');

getRandomVerbForExercises();
//let h5Text = verbForExercises.textContent;
validateInput();

btnGetRandomVerbForExercises.addEventListener('click', function () {
    getRandomVerbForExercises();
    //h5Text = verbForExercises.textContent;
    validateInput()
});

btnClear.addEventListener('click', function () {
    clearInputs();
    clearVerbsredIcon();
});

function getVerbForExercises(pVerbIndex) {
    verbForExercises.innerHTML = verbList[pVerbIndex].verbTurkish;
    //h5Text = verbForExercises.textContent; 
    validateInput()
    btnShow.addEventListener('click', function () {
        inputV1.value = verbList[pVerbIndex].verb1Name 
        inputV2.value = verbList[pVerbIndex].verb2Name  
        inputV3.value = verbList[pVerbIndex].verb3Name  
        showVerbsGreenIcon();
    });    
}

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