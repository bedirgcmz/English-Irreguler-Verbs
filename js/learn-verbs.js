let learnVerbsContainer = getElementById('learn-verbs-container');
let btnNewVerb = getElementById('new-verb');

let randomNumber = getRandomNumber(verbList.length);

learnVerbsContainer.innerHTML = getNewVerb(randomNumber);

btnNewVerb.addEventListener('click', function () {
    let randomNumber = getRandomNumber(verbList.length);
    learnVerbsContainer.innerHTML = getNewVerb(randomNumber);
});
