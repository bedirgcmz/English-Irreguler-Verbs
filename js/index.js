let allIrregularVerbsContainer = getElementById(
    'all-irregular-verbs-container'
);

allIrregularVerbsContainer.innerHTML = verbList
    .map((verb, index) => {
        return `
    <tr>
        <th>${verb.verb1Name}</th>
        <td>${verb.verb2Name}</td>
        <td>${verb.verb3Name}</td>
        <td>${verb.verb1Pronunciation}</td>
        <td>${verb.verb2Pronunciation}</td>
        <td>${verb.verb3Pronunciation}</td>
        <td>${verb.verbTurkish}</td>
    </tr>
    `;
    })
    .join('');
