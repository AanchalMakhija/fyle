const API_URL = 'https://api.github.com/users/';

async function fetchRepositories(username, page = 1, perPage = 10) {
    // Add loader visibility logic here
    const loader = document.getElementById('loader');
    loader.style.display = 'block';  // Show loader while fetching data

    try {
        const response = await fetch(`${API_URL}${username}/repos?page=${page}&per_page=${perPage}`);
        const repositories = await response.json();
        
        // Hide loader and update UI with repositories
        loader.style.display = 'none';  // Hide loader after fetching data
        displayRepositories(repositories);
    } catch (error) {
        console.error('Error fetching repositories:', error);
        loader.style.display = 'none';  // Hide loader in case of an error
    }
}

function displayRepositories(repositories) {
    const repositoriesList = document.getElementById('repositoriesList');
    repositoriesList.innerHTML = '';

    repositories.forEach(repo => {
        const listItem = document.createElement('li');
        listItem.textContent = repo.name;
        repositoriesList.appendChild(listItem);
    });
}

function handlePagination(totalPages) {
    // Implement pagination controls
    // You can create buttons or links for each page and handle the logic to fetch data for the selected page
}

function searchRepositories() {
    const username = document.getElementById('searchInput').value;
    // Call fetchRepositories with the username and update the UI
    fetchRepositories(username);
}

// Initial load
const defaultUsername = 'johnpapa';
fetchRepositories(defaultUsername);
