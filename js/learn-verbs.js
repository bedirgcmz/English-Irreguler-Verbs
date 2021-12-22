/**
 * Varaibles
 */
let learnVerbsContainer = getElementById('learn-verbs-container');
let btnNewVerb = getElementById('new-verb');
let randomNumber = getRandomNumber(verbList.length);
/**
 * Learn verb page render innerHTML
 */
learnVerbsContainer.innerHTML = getNewVerb(randomNumber);
/**
 * Event for new verb
 */
btnNewVerb.addEventListener('click', function () {
    let randomNumber = getRandomNumber(verbList.length);
    learnVerbsContainer.innerHTML = getNewVerb(randomNumber);
});
