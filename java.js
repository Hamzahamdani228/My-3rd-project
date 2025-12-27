let results = JSON.parse(localStorage.getItem("results")) || [];

function addResult() {
    let name = document.getElementById("name").value;
    let math = +document.getElementById("math").value;
    let science = +document.getElementById("science").value;
    let english = +document.getElementById("english").value;

    let total = math + science + english;
    let percentage = (total / 300) * 100;
    let grade = percentage >= 80 ? "A" :
                percentage >= 60 ? "B" :
                percentage >= 40 ? "C" : "Fail";

    let student = { name, total, percentage: percentage.toFixed(2), grade };
    results.push(student);
    localStorage.setItem("results", JSON.stringify(results));

    displayResults();
}

function displayResults() {
    let list = document.getElementById("resultList");
    list.innerHTML = "";

    results.forEach((s, index) => {
        list.innerHTML += `
        <tr>
            <td>${s.name}</td>
            <td>${s.total}</td>
            <td>${s.percentage}%</td>
            <td>${s.grade}</td>
            <td><button onclick="deleteResult(${index})">Delete</button></td>
        </tr>`;
    });
}

function deleteResult(index) {
    results.splice(index, 1);
    localStorage.setItem("results", JSON.stringify(results));
    displayResults();
}

displayResults();
