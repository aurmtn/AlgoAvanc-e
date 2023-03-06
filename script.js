const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('search-input');
const resultsDiv = document.getElementById('results');

searchBtn.addEventListener('click', searchCompany);

// Active DarkMode 
function toggleDarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

function searchCompany() {
    // Retrieve input value and make API call to get company info
    let companyName = searchInput.value;
    // make api call to retrieve company info using AJAX or Fetch

    // Sample company information for testing purposes
    let creationDate = 'January 1, 2000';
    let legalForm = 'LLC';
    let mainPhone = '+1 123-456-7890';
    let siretNumber = '12345678901234';
    let capitalShare = '$1,000,000';
    let address = '123 Main St, Anytown, USA';
    let turnover = '$10,000,000';
    let mailAddress = 'info@company.com';
    let cybersecurity = 'No known security breaches';
    let website = 'www.company.com';
    let domainList = ['www.company.com', 'www.company.fr', 'www.company.cn'];

    // Create HTML elements to display company info
    let creationDateEl = document.createElement('p');
    let legalFormEl = document.createElement('p');
    let mainPhoneEl = document.createElement('p');
    let siretNumberEl = document.createElement('p');
    let capitalShareEl = document.createElement('p');
    let addressEl = document.createElement('p');
    let turnoverEl = document.createElement('p');
    let mailAddressEl = document.createElement('p');
    let cybersecurityEl = document.createElement('p');
    let websiteEl = document.createElement('p');
    let domainListEl = document.createElement('ul');

    // Set the text content of the HTML elements
    creationDateEl.textContent = 'Creation Date: ' + creationDate;
    legalFormEl.textContent = 'Legal Form: ' + legalForm;
    mainPhoneEl.textContent = 'Main Phone: ' + mainPhone;
    siretNumberEl.textContent = 'SIREN Number: ' + siretNumber;
    capitalShareEl.textContent = 'Capital Share: ' + capitalShare;
    addressEl.textContent = 'Address: ' + address;
    turnoverEl.textContent = 'Turnover: ' + turnover;
    mailAddressEl.textContent = 'General Mail Address: ' + mailAddress;
    cybersecurityEl.textContent = 'Cybersecurity: ' + cybersecurity;
    websiteEl.textContent = 'Website: ' + website;

    // Loop through the domain list and create list items for each domain
    domainList.forEach(function(domain) {
        let domainItem = document.createElement('li');
        domainItem.textContent = domain;
        domainListEl.appendChild(domainItem);
    });

    // Append the HTML elements to the results div
    resultsDiv.innerHTML = '';
    resultsDiv.appendChild(creationDateEl);
    resultsDiv.appendChild(legalFormEl);
    resultsDiv.appendChild(mainPhoneEl);
    resultsDiv.appendChild(siretNumberEl);
    resultsDiv.appendChild(capitalShareEl);
    resultsDiv.appendChild(addressEl);
    resultsDiv.appendChild(turnoverEl);
    resultsDiv.appendChild(mailAddressEl);
    resultsDiv.appendChild(cybersecurityEl);
    resultsDiv.appendChild(websiteEl);
    resultsDiv.appendChild(domainListEl);

    // Show the results div
    resultsDiv.style.display = 'block';

    

    
}
