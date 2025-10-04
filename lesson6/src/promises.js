function useJson(json) {
    console.log('Received JSON:', json);
    if (json)
        return json;
}

function fetchJsonWithThen(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) throw new Error(`Network response was not ok: ${response.status} ${response.statusText}`);
            return response.json();
        })
        .then(json => {
            const processed = useJson(json);
            return processed;
        });
}

if (typeof require !== 'undefined' && typeof module !== 'undefined') {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    fetchJsonWithThen(url)
        .then(result => console.log('Final result:', result))
        .catch(err => console.error('Error:', err));
}
