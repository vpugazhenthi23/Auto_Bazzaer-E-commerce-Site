const authFeedback = document.getElementById('authFeedback');
const authCard = document.querySelector('.auth-card');
const authTabs = document.querySelectorAll('.auth-tab');
const authForms = document.querySelectorAll('.auth-form');
const authStorageKey = window.AutoBazaarAuthAPI.storageKey;

document.addEventListener('DOMContentLoaded', () => {
    authTabs.forEach(tab => {
        tab.addEventListener('click', () => switchAuthTab(tab.dataset.tab));
    });

    document.getElementById('loginFormData').addEventListener('submit', handleLogin);
    document.getElementById('registerFormData').addEventListener('submit', handleRegister);

    const mode = new URLSearchParams(window.location.search).get('mode');
    switchAuthTab(mode === 'register' ? 'register' : 'login');
});

function switchAuthTab(tabName) {
    authCard.classList.toggle('register-mode', tabName === 'register');
    authTabs.forEach(tab => {
        tab.classList.toggle('active', tab.dataset.tab === tabName);
        tab.setAttribute('aria-selected', String(tab.dataset.tab === tabName));
    });
    authForms.forEach(form => {
        form.classList.toggle('active', form.id === `${tabName}Form`);
    });
    setAuthFeedback('');
}

function handleLogin(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    submitAuthForm('login', {
        email: String(formData.get('email') || '').trim().toLowerCase(),
        password: String(formData.get('password') || '')
    }, form);
}

function handleRegister(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const password = String(formData.get('password') || '');
    const confirmPassword = String(formData.get('confirmPassword') || '');

    if (password !== confirmPassword) {
        setAuthFeedback('Passwords do not match.', 'error');
        document.getElementById('registerConfirmPassword').focus();
        return;
    }

    const value = name => String(formData.get(name) || '').trim();
    submitAuthForm('register', {
        name: value('name'),
        email: value('email').toLowerCase(),
        password,
        phone: value('phone'),
        city: value('city'),
        address: value('address'),
        userType: value('userType')
    }, form);
}

async function submitAuthForm(endpoint, payload, form) {
    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonContent = submitButton.innerHTML;
    submitButton.disabled = true;
    submitButton.textContent = endpoint === 'login' ? 'Signing in...' : 'Creating account...';
    setAuthFeedback('');

    try {
        const result = await window.AutoBazaarAuthAPI.requestAuth(endpoint, payload);
        if (!result.success || !result.token || !result.user) {
            throw new Error(result.message || 'The server returned an incomplete authentication response.');
        }

        try {
            sessionStorage.setItem(authStorageKey, result.token);
        } catch (error) {
            console.error('Could not save the AutoBazaar session:', error);
            throw new Error('Could not save your sign-in. Please enable browser storage and try again.');
        }

        setAuthFeedback(`Welcome${result.user.name ? `, ${result.user.name}` : ''}! Redirecting...`, 'success');
        window.setTimeout(() => window.location.replace('index.html'), 500);
    } catch (error) {
        console.error(`AutoBazaar ${endpoint} failed:`, error);
        setAuthFeedback(error.message || 'Authentication failed. Please try again.', 'error');
    } finally {
        submitButton.disabled = false;
        submitButton.innerHTML = originalButtonContent;
    }
}

function setAuthFeedback(message, type = 'info') {
    authFeedback.textContent = message;
    authFeedback.hidden = !message;
    authFeedback.className = `auth-feedback ${type}`;
    authFeedback.setAttribute('role', type === 'error' ? 'alert' : 'status');
}
