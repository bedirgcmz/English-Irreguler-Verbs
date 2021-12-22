/**
 * All process value control function
 */
function allProcessInputValue(){
    let h5Text = verbForExercises.textContent;
    verbList.map(item => {
        if(item.verbTurkish === h5Text){
          v1Varb = item.verb1Name;
          v2Varb = item.verb2Name;
          v3Varb = item.verb3Name;
          allIpuntValidate();  
        }        
    })
}
/**
 * Check the accuracy of the all value content
 */
function allIpuntValidate(){
    inputV1.addEventListener('input', updateValue1);
    updateValue1()
    inputV2.addEventListener('input', updateValue2);
    updateValue2()
    inputV3.addEventListener('input', updateValue3);
    updateValue3()  
} 
/**
* Check the accuracy of the value 1
*/
function updateValue1() {
    if( v1Varb === inputV1.value ){
        v1Times.innerHTML = `<i class="fas fa-check-circle text-success"></i>` 
    }else{v1Times.innerHTML = `<i class="fas fa-times-circle text-danger"></i>`}
}
/**
* Check the accuracy of the value 2
*/
function updateValue2() {
    if( v2Varb == inputV2.value ){
        v2Times.innerHTML = `<i class="fas fa-check-circle text-success"></i>` 
    }else{v2Times.innerHTML = `<i class="fas fa-times-circle text-danger"></i>`}
}
/**
* Check the accuracy of the value 3
*/
function updateValue3() {
    if( v3Varb == inputV3.value ){
        v3Times.innerHTML = `<i class="fas fa-check-circle text-success"></i>` 
    }else{v3Times.innerHTML = `<i class="fas fa-times-circle text-danger"></i>`}
}
/**
 * DOM access function with id
 * @param {*} pId 
 * @returns 
 */
function getElementById(pId) {
    return document.getElementById(pId);
}
/**
 * Get random word function
 * @param {*} pLength 
 * @returns 
 */
function getRandomNumber(pLength) {
    return Math.floor(Math.random() * pLength);
}
/**
 * Get new random word for learn verbs
 * @param {*} pRandomNumber 
 * @returns 
 */
function getNewVerb(pRandomNumber) {
    return `
        <tr>
            <td class="bg-primary text-white">Verb</td>
            <td>${verbList[pRandomNumber].verb1Name}</td>
            <td>${verbList[pRandomNumber].verb2Name}</td>
            <td>${verbList[pRandomNumber].verb3Name}</td>
        </tr>
        <tr>
            <td class="bg-primary text-white">Pron.</td>
            <td>${verbList[pRandomNumber].verb1Pronunciation}</td>
            <td>${verbList[pRandomNumber].verb2Pronunciation}</td>
            <td>${verbList[pRandomNumber].verb3Pronunciation}</td>
        </tr>
        <tr>
            <td class="bg-primary text-white">Turkish</td>
            <td colspan="3">${verbList[pRandomNumber].verbTurkish}</td>
        </tr>
    `;
}
/**
 * delete red icon, add green icon
 */
function showVerbsGreenIcon (){
    v1Times.innerHTML = `<i class="fas fa-check-circle text-success"></i>`
    v2Times.innerHTML = `<i class="fas fa-check-circle text-success"></i>`
    v3Times.innerHTML = `<i class="fas fa-check-circle text-success"></i>`
}
/**
 * delete green icon, add red icon
 */
function clearVerbsredIcon (){
    v1Times.innerHTML = `<i class="fas fa-times-circle text-danger"></i>`
    v2Times.innerHTML = `<i class="fas fa-times-circle text-danger"></i>`
    v3Times.innerHTML = `<i class="fas fa-times-circle text-danger"></i>`
}
/**
 * Deleting the value of All inputs
 */
function clearInputs() {
    inputV1.value = '';
    inputV2.value = '';
    inputV3.value = '';
}