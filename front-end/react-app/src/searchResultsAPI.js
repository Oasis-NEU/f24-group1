const url = 'http://127.0.0.1:5000/api/search';



async function fetchResults(query) {
    try {
        const response = await fetch(url, {
            method: 'POST', // HTTP method
            headers: {
                'Content-Type': 'application/json', // Content type being sent
            },
            body: JSON.stringify({"text": query, "k" : 4})
        });

        if (response.ok) {
            const data = await response.json();
            return data.body;
        } else {
            console.error('Error sending data:', response.statusText);
        }
    } catch (error) {
        console.error('Error occurred:', error);
    }
}

// async function main() {
//     const results =  await fetchResults("pizza");
//     console.log(results.body);
// }
//
// main();


export default fetchResults;