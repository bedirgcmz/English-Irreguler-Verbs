function validateInput(){
    for(i=0;i<verbList.length;i++){
        if(verbList[i].verbTurkish == h5Text){
            let v1Varb = verbList[i].verb1Name;
            let v2Varb = verbList[i].verb2Name;
            let v3Varb = verbList[i].verb3Name;
            
            inputV1.addEventListener('input', updateValue1);
            function updateValue1() {
                if( v1Varb == inputV1.value ){
                    v1Times.innerHTML = `<i class="fas fa-check-circle text-success"></i>` 
                }else{v1Times.innerHTML = `<i class="fas fa-times-circle text-danger"></i>`}
            }
            inputV2.addEventListener('input', updateValue2);
            function updateValue2() {
                if( v2Varb == inputV2.value ){
                    v2Times.innerHTML = `<i class="fas fa-check-circle text-success"></i>` 
                }else{v2Times.innerHTML = `<i class="fas fa-times-circle text-danger"></i>`}
            }
            inputV3.addEventListener('input', updateValue3);
            function updateValue3() {
                if( v3Varb == inputV3.value ){
                    v3Times.innerHTML = `<i class="fas fa-check-circle text-success"></i>` 
                }else{v3Times.innerHTML = `<i class="fas fa-times-circle text-danger"></i>`}
            }
        }
    }
    
}


function getElementById(pId) {
    return document.getElementById(pId);
}

function getRandomNumber(pLength) {
    return Math.floor(Math.random() * pLength);
}

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

function clearInputs() {
    inputV1.value = '';
    inputV2.value = '';
    inputV3.value = '';
}
//let h5Text = getElementById('verb-for-exercises').textContent
//console.log(h5Text)




function showVerbsGreenIcon (){
    v1Times.innerHTML = `<i class="fas fa-check-circle text-success"></i>`
    v2Times.innerHTML = `<i class="fas fa-check-circle text-success"></i>`
    v3Times.innerHTML = `<i class="fas fa-check-circle text-success"></i>`
}
function clearVerbsredIcon (){
    v1Times.innerHTML = `<i class="fas fa-times-circle text-danger"></i>`
    v2Times.innerHTML = `<i class="fas fa-times-circle text-danger"></i>`
    v3Times.innerHTML = `<i class="fas fa-times-circle text-danger"></i>`
}