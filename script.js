document.addEventListener('DOMContentLoaded', function () {
    setInterval(changeBackgroundColor, 3000);

    // Initialize DataTable
    $('#patientDetailsTable').DataTable();

    document.getElementById('loginForm').addEventListener('submit', function (event) {
        event.preventDefault();
        // Implement your login logic here
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // For demonstration purposes, check if the username and password are not empty
        if (username && password) {
            alert('Login successful!');
            showDashboard();
        } else {
            alert('Invalid credentials. Please try again.');
        }
    });

    function showDashboard() {
        document.getElementById('dashboard').style.display = 'block';
        document.querySelector('.login-container').style.display = 'none';
    }

    // Function to create a new account
    function createAccount() {
        const newUsername = document.getElementById('newUsername').value;
        const newPassword = document.getElementById('newPassword').value;

        // For demonstration purposes, show an alert with the new account details
        alert(`Account created successfully!\nUsername: ${newUsername}\nPassword: ${newPassword}`);
    }

    document.getElementById('createAccountBtn').addEventListener('click', createAccount);
});

function changeBackgroundColor() {
    const containers = document.querySelectorAll('.login-container, .dashboard-container');
    containers.forEach(container => {
        container.style.backgroundColor = getRandomColor();
    });
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

    // Fetch and update patient details
    const patientDetailsData = generateSamplePatientDetails(100);

    const patientDetailsBody = document.getElementById('patientDetailsBody');

    patientDetailsData.forEach(patient => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${patient.id}</td>
            <td>${patient.name}</td>
            <td>${patient.admissionDate}</td>
            <td>${patient.dischargeDate}</td>
            <td>${patient.condition}</td>
        `;
        patientDetailsBody.appendChild(row);
    });

    // Add similar code for other metric categories
    // For example:
    // document.getElementById('otherMetricCategory').textContent = otherMetricData;
function generateSamplePatientDetails(count) {
    const patientDetails = [];

    for (let i = 1; i <= count; i++) {
        const patient = {
            id: i,
            name: `Patient ${i}`,
            admissionDate: `2024-02-${i}`,
            dischargeDate: `2024-02-${i + 5}`,
            condition: i % 2 === 0 ? 'Stable' : 'Critical',
        };
        patientDetails.push(patient);
    }

    return patientDetails;
}
