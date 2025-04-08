window.renderLineChart = (canvasId, labels, data) => {
    const ctx = document.getElementById(canvasId).getContext('2d');
    if (window.lineChart) {
        window.lineChart.destroy();
    }
    window.lineChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Scans per Day',
                data: data,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
                tension: 0.3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
};
