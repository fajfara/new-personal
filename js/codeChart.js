const xhttp = new XMLHttpRequest;
const urlCodeStats = 'https://codestats.net/api/users/fajfara';
let HTML;
let xpsCSS;
let JS;
let SCSS;
let Python;
const ctx = document.getElementById("myChart");

function loadData() {

    xhttp.open('GET', urlCodeStats);
    xhttp.onload = function() {
        var data = JSON.parse(xhttp.responseText);
        HTML = data.languages.HTML.xps;
        xpsCSS = data.languages.CSS.xps;
        JS = data.languages.JavaScript.xps;
        SCSS = data.languages.SCSS.xps;
        Python = data.languages.Python.xps;
        Chart.defaults.global.defaultFontColor = '#606372';
        var myChart = new Chart(ctx, {
            type: 'polarArea',
            data: {
                labels: ['HTML', 'CSS', 'SCSS', 'Javascript', 'Python'],
                datasets: [{
                    label: 'Total XP by programming language',
                    data: [HTML, xpsCSS, SCSS, JS, Python],
                    backgroundColor: [
                        'rgb(255, 1, 1)',
                        'rgb(106, 255, 127)',
                        'rgb(51, 203, 204)',
                        'rgb(243,243,21)',
                        'rgb(255, 255, 255)'
                    ],
                    borderColor: [
                        'rgb(0, 0, 0)',
                        'rgba(0, 0, 0, 1)',
                        'rgba(0, 0, 0, 1)',
                        'rgba(0, 0, 0, 1)',
                        'rgba(0, 0, 0, 1)'
                    ],
                    borderWidth: 1
                }] 
            },
            options: {
                responsive: true,
                padding: 10
            }
        })

        
    }
    xhttp.send();
}

loadData();