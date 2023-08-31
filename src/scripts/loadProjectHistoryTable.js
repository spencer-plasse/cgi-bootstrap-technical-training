const categoryToColorMap = {
    backend: "success",
    cloud: "primary",
    database: "danger",
    frontend: "info text-light",
    other: "dark"
};

const projectHistoryData = [
    {
        client: "CGI",
        project: "Boot Camp",
        clientProjectID: "cgi-bootcamp",
        technologies: [
            { name: "SQL Server", category: "database" },
            { name: "ASP.NET MVC", category: "backend" },
            { name: "C#", category: "backend" },
            { name: "JavaScript", category: "frontend" },
            { name: "Bootstrap", category: "frontend" }
        ],
        responsibilities: [
            "Full-Stack Development",
            "Documentation"
        ],
        startDate: "2022-01-02",
        endDate: "2022-02-02"
    },
    {
        client: "NASBA",
        project: "CPA Evolution / Gateway 3.0",
        clientProjectID: "nasba-gw",
        technologies: [
            { name: "Amazon Web Services (AWS)", category: "cloud" },
            { name: "AWS Lambda", category: "cloud" },
            { name: "Amazon SQS", category: "cloud" },
            { name: "AWS Step Functions", category: "cloud" },
            { name: "AWS DynamoDB", category: "cloud" },
            { name: "Serverless", category: "cloud" },
            { name: "MySQL", category: "database" },
            { name: "Python", category: "backend" },
            { name: "React", category: "frontend" },
            { name: "TypeScript", category: "frontend" },
            { name: "Bootstrap", category: "frontend" }
        ],
        responsibilities: [
            "Full-Stack Development",
            "Database Development",
            "QA/Defect Resolution",
            "Deployments",
            "Documentation"
        ],
        startDate: "2022-03-02",
        endDate: "2023-08-02"
    },
    {
        client: "Farm Bureau Insurance of Tennessee (FBITN)",
        project: "CXO",
        clientProjectID: "fbitn-cxo",
        technologies: [
            { name: "Next.js", category: "frontend" },
            { name: "React", category: "frontend" },
            { name: "React Testing Library", category: "other" },
            { name: "Jest", category: "other" },
            { name: "TypeScript", category: "frontend" },
            { name: "Material UI", category: "frontend" }
        ],
        responsibilities: [
            "Front-End Development",
            "Testing"
        ],
        startDate: "2023-08-02",
        endDate: "Current"
    },
    {
        client: "CGI",
        project: "YEET",
        clientProjectID: "cgi-yeet",
        technologies: [
            { name: "SQL Server", category: "database" },
            { name: "ASP.NET MVC", category: "backend" },
            { name: "C#", category: "backend" },
            { name: "React", category: "frontend" },
            { name: "JavaScript", category: "frontend" },
            { name: "Bootstrap", category: "frontend" }
        ],
        responsibilities: [
            "Full-Stack Development",
            "Database Development",
            "Code Reviews"
        ],
        startDate: "2023-03-02",
        endDate: "Current"
    },
    {
        client: "CGI",
        project: "React 101 Technical Training",
        clientProjectID: "cgi-react",
        technologies: [
            { name: "HTML5", category: "frontend" },
            { name: "CSS3", category: "frontend" },
            { name: "React", category: "frontend" },
            { name: "JavaScript", category: "frontend" },
            { name: "Bootstrap", category: "frontend" }
        ],
        responsibilities: [
            "Front-End Design",
            "Front-End Development",
            "Documentation",
            "Testing"
        ],
        startDate: "2022-07-02",
        endDate: "2022-08-02"
    },
    {
        client: "CGI",
        project: "Angular 101 Technical Training",
        clientProjectID: "cgi-angular",
        technologies: [
            { name: "HTML5", category: "frontend" },
            { name: "CSS3", category: "frontend" },
            { name: "Angular", category: "frontend" },
            { name: "TypeScript", category: "frontend" },
            { name: "Bootstrap", category: "frontend" },
            { name: "Mock API (rxjs)", category: "other" }
        ],
        responsibilities: [
            "Front-End Design",
            "Full-Stack Development",
            "API Integration",
            "Documentation",
            "Testing"
        ],
        startDate: "2022-09-02",
        endDate: "2022-11-02"
    },
    {
        client: "CGI",
        project: "NextJS Technical Training",
        clientProjectID: "cgi-nextjs",
        technologies: [
            { name: "HTML5", category: "frontend" },
            { name: "CSS3", category: "frontend" },
            { name: "Next.js", category: "frontend" },
            { name: "React", category: "frontend" },
            { name: "TypeScript", category: "frontend" },
            { name: "Tailwind CSS", category: "frontend" },
            { name: "Spotify API", category: "other" }
        ],
        responsibilities: [
            "Front-End Design",
            "Full-Stack Development",
            "API Integration",
            "Documentation",
            "Testing"
        ],
        startDate: "2023-06-02",
        endDate: "2023-07-02"
    },
    {
        client: "CGI",
        project: "Bootstrap/HTML5 Technical Training",
        clientProjectID: "cgi-bootstrap-html5",
        technologies: [
            { name: "HTML5", category: "frontend" },
            { name: "CSS3", category: "frontend" },
            { name: "JavaScript", category: "frontend" },
            { name: "Bootstrap", category: "frontend" }
        ],
        responsibilities: [
            "Front-End Design",
            "Front-End Development",
            "Documentation",
            "Testing"
        ],
        startDate: "2023-08-02",
        endDate: "2023-09-02"
    }
  ];

// Load project history table data on load
window.onload = (event) => {
    const sortedProjectHistoryData = projectHistoryData.sort((a, b) => b.startDate.localeCompare(a.startDate));

    for (const projectData of sortedProjectHistoryData) {
        const { client, project, clientProjectID, technologies, responsibilities, startDate, endDate } = projectData;
        const tableBody = document.getElementById("project-history-table-body");

        const tableRow = document.createElement("tr");
        tableRow.id = clientProjectID;
        tableBody.appendChild(tableRow);

        const clientCell = document.createElement("td");
        clientCell.textContent = client;

        const projectCell = document.createElement("td");
        projectCell.textContent = project;

        tableRow.appendChild(clientCell);
        tableRow.appendChild(projectCell);

        // Sort by technology category in ascending alphabetical order
        const sortedTechnologies = technologies.sort((a, b) => a.category.localeCompare(b.category));
        const technologiesID = `${clientProjectID}-technologies`;
        const technologiesList = document.createElement("td");

        // Hacky workaround to two adjacent <td> cells with the d-flex class combining both cells' data
        // into one
        const innerTechnologiesList = document.createElement("div");
        innerTechnologiesList.className = "d-flex flex-wrap gap-2";
        innerTechnologiesList.id = technologiesID;
        
        // Display technologies as rounded badges with their respective colors based on category
        for (const technology of sortedTechnologies) {
            const { name, category } = technology;
            const color = categoryToColorMap[category];
            const technologyCell = document.createElement("span");
            technologyCell.className = `badge rounded-pill text-bg-${color}`;
            technologyCell.textContent = name;
            innerTechnologiesList.appendChild(technologyCell);
        }

        technologiesList.appendChild(innerTechnologiesList);
        tableRow.append(technologiesList);

        const responsibilitiesID = `${clientProjectID}-responsibilities`;
        const responsibilitiesList = document.createElement("td");
        responsibilitiesList.className = "d-flex flex-wrap gap-2";
        responsibilitiesList.id = responsibilitiesID;

        // Display responsibilities as rounded, yellow badges
        for (const responsibility of responsibilities) {
            const responsibilityCell = document.createElement("span");
            responsibilityCell.className = "badge rounded-pill text-bg-warning text-white";
            responsibilityCell.textContent = responsibility;

            responsibilitiesList.appendChild(responsibilityCell);
        }

        tableRow.append(responsibilitiesList);

        const periodCell = document.createElement("td");
        const formattedStartDate = new Date(startDate).toLocaleString("default", {
            month: "long",
            year: "numeric"
        });

        // Display "Current" end dates in bold
        if (endDate === "Current") {
            const currentSpan = document.createElement("span");
            currentSpan.textContent = endDate;
            currentSpan.className = "fw-bold";

            periodCell.textContent = `${formattedStartDate} - `;
            periodCell.appendChild(currentSpan);
        }

        else {
            const formattedEndDate = new Date(endDate).toLocaleString("default", {
                month: "long",
                year: "numeric"
            });
            periodCell.textContent = `${formattedStartDate} - ${formattedEndDate}`;
        }
        
        tableRow.append(periodCell);
    }
};