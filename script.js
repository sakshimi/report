document.addEventListener('DOMContentLoaded', function() {
    const reports = [
        { date: '22.07.2021', name: 'APP URL USAGE (Exclude Half Days) 3.6.2021', download: '331,2021' },
        { date: '20.07.2021', name: 'RUR L1 01.01.2021 - 31.03.2021', download: 'το' },
        { date: '19.07.2021', name: 'RUR 12 (Exclude NonWorking Days)', download: '4,1,2021.4.1.2021.csv' }
    ];

    const reportTable = document.getElementById('reportRows');

    // Populate table rows with report data
    reports.forEach(report => {
        const row = document.createElement('tr');

        const dateCell = document.createElement('td');
        dateCell.textContent = report.date;
        row.appendChild(dateCell);

        const nameCell = document.createElement('td');
        nameCell.textContent = report.name;
        row.appendChild(nameCell);

        const downloadCell = document.createElement('td');
        const downloadLink = document.createElement('a');
        downloadLink.textContent = 'Download';
        downloadLink.href = #; // Set the download link here
        downloadCell.appendChild(downloadLink);
        row.appendChild(downloadCell);

        reportTable.appendChild(row);
    });
});
