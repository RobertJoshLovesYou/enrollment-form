
function updateInterests() {
    const course = document.getElementById('course').value;
    const interestsContainer = document.getElementById('interest-options');
    

    interestsContainer.innerHTML = '';
    

    const interestsByCourse = {
        BSIT: ['Web Development', 'Networking', 'Cybersecurity', 'Software Engineering'],
        BSSW: ['Community Development', 'Counseling', 'Policy Advocacy', 'Human Rights'],
        BSPA: ['Public Policy', 'Urban Planning', 'Government Management', 'Leadership Training'],
        BSAIS: ['Financial Analysis', 'Auditing', 'Taxation', 'Management Accounting'],
        ABELS: ['Creative Writing', 'Linguistics', 'Language Research', 'Translation Studies'],
        BSE: ['Entrepreneurial Strategy', 'Business Innovation', 'Market Research', 'Product Development'],
        BTVTE: ['Technical Skills Training', 'Curriculum Design', 'Teaching Strategies', 'Workplace Competencies'],
        DHRS: ['Food and Beverage Service', 'Event Planning', 'Hotel Management', 'Customer Service Excellence']
    };


    const interests = interestsByCourse[course] || [];


    if (interests.length > 0) {
        interests.forEach((interest) => {
            const label = document.createElement('label');
            label.innerHTML = `<input type="checkbox" name="interests" value="${interest}"> ${interest}`;
            interestsContainer.appendChild(label);
        });
    } else {
        interestsContainer.innerHTML = '<p>Please select a course to view interests.</p>';
    }
}

function submitForm() {
    const fullName = document.getElementById('full-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const age = parseInt(document.getElementById('age').value.trim(), 10);
    const sex = document.querySelector('input[name="sex"]:checked')?.value;
    const course = document.getElementById('course').value;
    const interests = Array.from(
        document.querySelectorAll('input[name="interests"]:checked')
    ).map((checkbox) => checkbox.value);


    if (!fullName || !email || !age || !sex || !course || interests.length === 0) {
        alert("Please complete all required fields before submitting.");
        return;
    }

    if (!email.includes('@')) {
        alert("Please enter a valid email address with '@'.");
        return;
    }


    if (age > 100) {
        alert("Please enter a valid age below 100.");
        return;
    }


    const table = document.getElementById('student-table');
    const newRow = table.insertRow();
    newRow.innerHTML = `
        <td>${table.rows.length}</td>
        <td>${fullName}</td>
        <td>${email}</td>
        <td>${age}</td>
        <td>${sex}</td>
        <td>${course}</td>
        <td>${interests.join(', ')}</td>
    `;


    document.getElementById('enrollment-form').reset();
    alert("Enrollment Successful!");
}
