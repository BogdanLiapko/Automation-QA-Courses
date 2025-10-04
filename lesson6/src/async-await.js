async function useJson(json) {
    console.log('Received JSON:', json);
    if (json)
        return json;
}

async function fetchJsonWithAsync(url) {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Network response was not ok: ${response.status} ${response.statusText}`);
    const json = await response.json();
    const processed = await useJson(json);
    return processed;
}

if (typeof require !== 'undefined' && typeof module !== 'undefined') {
    (async () => {
        try {
            const url = 'https://jsonplaceholder.typicode.com/todos/1';
            const result = await fetchJsonWithAsync(url);
            console.log('Final result:', result);
        } catch (err) {
            console.error('Error:', err);
        }
    })();
}

