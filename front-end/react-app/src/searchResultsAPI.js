



async function fetchResults(query) {
    try {
        const response = await fetch('https://neu-bites.com/api/search', {  
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "text": query, "k": 4 })
        });

        if (response.ok) {
            const data = await response.json();
            console.log("✅ API Response:", data); // Debugging line
            return data.body;  // Ensure data.body is an array
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