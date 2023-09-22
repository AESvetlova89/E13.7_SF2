//document.write('Hello, webpack!');
let helloElement = document.createElement("div");
helloElement.innerText = "Hello, SkillFactory!";
document.body.appendChild(helloElement);

let requestButton = document.createElement("button");
let dataField = document.createElement('textarea');

async function requestData() {
    await fetch(`http://localhost:3000/posts`, {
        method: 'GET'
    }).then(async response => response.json())
        .then(async json => {
            dataField.value = "";
            for (let obj of json) {
                for (let item in obj) {
                    dataField.value += item + ": " + obj[item] + "\n";
                }

            }
        });

}

requestButton.innerText = "Get data";
requestButton.addEventListener("click", requestData);
document.body.appendChild(requestButton);
dataField.style.height = "7rem";
document.body.appendChild(dataField);