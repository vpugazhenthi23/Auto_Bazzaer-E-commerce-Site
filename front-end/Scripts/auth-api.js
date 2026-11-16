window.AutoBazaarAuthAPI = (() => {
    const apiBaseUrl = window.location.protocol === 'file:' ? 'http://localhost:5000/api' : '/api';
    const storageKey = 'autobazaarAuthToken';

    async function requestAuth(endpoint, payload = null, token = null) {
        const headers = {};
        const options = {
            method: payload ? 'POST' : 'GET',
            headers
        };

        if (payload) {
            headers['Content-Type'] = 'application/json';
            options.body = JSON.stringify(payload);
        }
        if (token) headers.Authorization = `Bearer ${token}`;

        let response;
        try {
            response = await fetch(`${apiBaseUrl}/auth/${endpoint}`, options);
        } catch (error) {
            console.error('Could not reach the AutoBazaar authentication API:', error);
            throw new Error('Unable to reach the AutoBazaar server. Start the backend and try again.');
        }

        let result;
        try {
            result = await response.json();
        } catch (error) {
            console.error('Invalid response from the AutoBazaar authentication API:', error);
            throw new Error('The server returned an invalid response. Please try again.');
        }

        if (!response.ok) {
            const validationMessage = Array.isArray(result.errors)
                ? result.errors.map(item => item.msg).filter(Boolean).join(' ')
                : '';
            const requestError = new Error(
                result.message || validationMessage || `Request failed (${response.status}).`
            );
            requestError.status = response.status;
            throw requestError;
        }

        return result;
    }

    return { requestAuth, storageKey };
})();
