// Replace 'YOUR_GOOGLE_SHEET_ID' with the actual ID of your Google Sheet
const sheetId = '1oIJG97E38D7bSKv2aDL-bEB7AvBMxthF3UH9yjXg3NA';

// Google Sheets API endpoint
const sheetUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json`;

// Function to fetch and display Google Sheet data
async function fetchGoogleSheetData() {
    try {
        const response = await fetch(sheetUrl);
        const data = await response.text();
        const json = JSON.parse(data.substring(47).slice(0, -2));
        const dataTable = json.table;

        // Process and display data as per your requirements
        const sheetDataContainer = document.getElementById('sheetData');
        sheetDataContainer.innerHTML = JSON.stringify(dataTable, null, 2);
    } catch (error) {
        console.error('Error fetching Google Sheet data:', error);
    }
}

// Call the function to fetch and display data when the page loads
fetchGoogleSheetData();
