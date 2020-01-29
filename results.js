import { productsData } from './productsData.js';
//import { productsArray } from './productsArray.js';

const votes = [];
const labels = [];

productsData.forEach(item => {
    votes.push(item.votes);
    labels.push(item.id);
});

const ctx = document.getElementById('chart').getContext('2d');


new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: '# of Votes',
            data: votes,
            backgroundColor: ['lightblue', 'blue', 'yellow', 'green', 'purple', 'orange']
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});