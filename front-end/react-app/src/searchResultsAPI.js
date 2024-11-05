const url = 'http://127.0.0.1:5000/search';



async function fetchResults(query) {
    try {
        const response = await fetch(url, {
            method: 'POST', // HTTP method
            headers: {
                'Content-Type': 'application/json', // Content type being sent
            },
            body: JSON.stringify(query)
        });

        if (response.ok) {
            return await response.json();
        } else {
            console.error('Error sending data:', response.statusText);
        }
    } catch (error) {
        console.error('Error occurred:', error);
    }
}



export default fetchResults;