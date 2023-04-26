/**
 * Varaibles
 */
let learnVerbsContainer = getElementById("learn-verbs-container");
let learnVerbsExempleContainer = getElementById("learn-verbs-exemple-render-container");
let btnNewVerb = getElementById("new-verb");
let randomNumber = getRandomNumber(verbList.length);
/**
 * Learn verb page render innerHTML
 */
learnVerbsExempleContainer.innerHTML = exampleSentencesRender(randomNumber);
learnVerbsContainer.innerHTML = getNewVerb(randomNumber);
/**
 * Event for new verb
 */
btnNewVerb.addEventListener("click", function () {
  let randomNumber = getRandomNumber(verbList.length);
  learnVerbsContainer.innerHTML = getNewVerb(randomNumber);
  learnVerbsExempleContainer.innerHTML = exampleSentencesRender(randomNumber);
});

{
  /* <div id="learn-verbs-exemple-render-container">
<p id="verb1">
  <span class="text-primary fw-bolder">V1:</span> KAkjijfnoeijf oefj
  <b class="text-danger">oiefe</b> kef kfiewj jnrg
</p>
<p id="verb2">
  <span class="text-primary fw-bolder">V2: </span> KAkjijfnoeijf oefj
  <b class="text-danger">oiefe</b> kef kfiewj jnrg
</p>
<p id="verb3">
  <span class="text-primary fw-bolder">V3:</span> KAkjijfnoeijf oefj
  <b class="text-danger">oiefe</b> kef kfiewj jnrg
</p>
</div> */
}
