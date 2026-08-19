/* =========================
   Check Login
========================= */

const currentUser = JSON.parse(localStorage.getItem("currentUser"));

if (!currentUser) {
    window.location.href = "login.html";
}


/* =========================
   Display User Name
========================= */

const userName = document.getElementById("userName");

if (currentUser) {
    userName.textContent = currentUser.name;
}


/* =========================
   Get Application Container
========================= */

const applicationsContainer =
    document.getElementById("applicationsContainer");


/* =========================
   Fetch Applications
========================= */

fetch("data.json")
    .then(response => response.json())
    .then(applications => {
        renderApplications(applications);
    })
    .catch(error => {
        console.error("Error loading applications:", error);

        applicationsContainer.innerHTML = `
            <p>Unable to load applications.</p>
        `;
    });


/* =========================
   Render Applications
========================= */

function renderApplications(applications) {

    applicationsContainer.innerHTML = "";

    applications.forEach(application => {

        const card = document.createElement("div");

        card.classList.add("application-card");

        card.innerHTML = `
            <h3>${application.domain}</h3>

            <p class="application-date">
                Applied: ${application.date}
            </p>

            ${getStatusBadge(application.status)}

            ${getProgressTracker(application.status)}
        `;

        applicationsContainer.appendChild(card);
    });
}


/* =========================
   Status Badge
========================= */

function getStatusBadge(status) {

    let statusClass = "";

    if (status === "Under Review") {
        statusClass = "status-review";
    }

    else if (status === "Selected") {
        statusClass = "status-selected";
    }

    else if (status === "Rejected") {
        statusClass = "status-rejected";
    }

    return `
        <span class="status-badge ${statusClass}">
            ${status}
        </span>
    `;
}


/* =========================
   Progress Tracker
========================= */

function getProgressTracker(status) {

    let appliedCompleted = true;
    let interviewCompleted = false;
    let resultCompleted = false;

    if (status === "Under Review") {

        interviewCompleted = true;

    }

    else if (
        status === "Selected" ||
        status === "Rejected"
    ) {

        interviewCompleted = true;
        resultCompleted = true;
    }


    return `
        <div class="progress-tracker">

            <div class="progress-step completed">

                <div class="progress-circle">
                    ✓
                </div>

                <span class="progress-label">
                    Applied
                </span>

            </div>


            <div class="progress-line ${
                interviewCompleted ? "completed" : ""
            }"></div>


            <div class="progress-step ${
                interviewCompleted ? "completed" : ""
            }">

                <div class="progress-circle">
                    ${
                        interviewCompleted ? "✓" : "2"
                    }
                </div>

                <span class="progress-label">
                    Interview
                </span>

            </div>


            <div class="progress-line ${
                resultCompleted ? "completed" : ""
            }"></div>


            <div class="progress-step ${
                resultCompleted ? "completed" : ""
            }">

                <div class="progress-circle">
                    ${
                        resultCompleted ? "✓" : "3"
                    }
                </div>

                <span class="progress-label">
                    Result
                </span>

            </div>

        </div>
    `;
}


/* =========================
   Logout
========================= */

const logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", () => {

    localStorage.removeItem("currentUser");

    window.location.href = "login.html";

});