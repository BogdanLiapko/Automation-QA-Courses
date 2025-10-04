async function fetchWithFallback(primaryUrl, fallbackUrl) {
    try {
        const response = await fetch(primaryUrl);
        if (!response.ok) throw new Error(`Network response was not ok: ${response.status} ${response.statusText}`);
        return await response.json();
    } catch (primaryError) {
        console.log(`Primary fetch failed: ${primaryError.message}. Trying fallback URL...`);
        try {
            const response = await fetch(fallbackUrl);
            if (!response.ok) throw new Error(`Network response was not ok: ${response.status} ${response.statusText}`);
            return await response.json();
        } catch (fallbackError) {
            throw new Error(`Both primary and fallback fetches failed. Fallback error: ${fallbackError.message}`);
        }
    }
}

if (typeof require !== 'undefined' && typeof module !== 'undefined') {
    (async () => {
        try {
            const primaryUrl = 'https://jsonplaceholder.typicode.com/tod';
            const fallbackUrl = 'https://jsonplaceholder.typicode.com/todos/1';
            const result = await fetchWithFallback(primaryUrl, fallbackUrl);
            console.log('Final result:', result);
        } catch (err) {
            console.error('Error:', err);
        }
    })();
}
