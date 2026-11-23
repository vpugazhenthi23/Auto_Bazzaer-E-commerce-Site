
const allBikesData = [
    { id: 1, name: "KTM Duke 200", type: "bike", price: "1,65,000", year: 2020, km: "25,000", fuel: "Petrol", transmission: "Manual", location: "Mumbai", image: "../Assets/Images/KTM-Duke-200.jpg" },
    { id: 2, name: "Royal Enfield Classic 350", type: "bike", price: "1,95,000", year: 2019, km: "18,000", fuel: "Petrol", transmission: "Manual", location: "Chennai", image: "../Assets/Images/Second-hand-Royal-Enfield-Classic-350.jpg" },
    { id: 3, name: "Hero Splendor Plus", type: "bike", price: "65,000", year: 2020, km: "22,000", fuel: "Petrol", transmission: "Manual", location: "Delhi", image: "../Assets/Images/Second-hand-Hero-Splendor-Plus.jpg" },
    { id: 4, name: "Honda Shine", type: "bike", price: "85,000", year: 2019, km: "28,000", fuel: "Petrol", transmission: "Manual", location: "Pune", image: "../Assets/Images/Second-Hand-Honda-Shine-2.jpg" },
    { id: 5, name: "Hero Passion Pro", type: "bike", price: "55,000", year: 2018, km: "35,000", fuel: "Petrol", transmission: "Manual", location: "Bangalore", image: "../Assets/Images/Used-Hero-Passion-Pro.jpg" },
    { id: 6, name: "TVS Radeon", type: "bike", price: "48,000", year: 2021, km: "15,000", fuel: "Petrol", transmission: "Manual", location: "Hyderabad", image: "../Assets/Images/Second-Hand-TVS-Radeon.jpg" },
    { id: 7, name: "Bajaj Pulsar 150", type: "bike", price: "75,000", year: 2019, km: "32,000", fuel: "Petrol", transmission: "Manual", location: "Kolkata", image: "../Assets/Images/images (1).jpeg" },
    { id: 8, name: "TVS Apache RTR 160", type: "bike", price: "95,000", year: 2020, km: "20,000", fuel: "Petrol", transmission: "Manual", location: "Ahmedabad", image: "../Assets/Images/images (2).jpeg" },
    { id: 9, name: "Yamaha FZ-S", type: "bike", price: "1,25,000", year: 2021, km: "15,000", fuel: "Petrol", transmission: "Manual", location: "Jaipur", image: "../Assets/Images/images (3).jpeg" },
    { id: 10, name: "Honda CB Hornet 160R", type: "bike", price: "1,05,000", year: 2020, km: "18,000", fuel: "Petrol", transmission: "Manual", location: "Lucknow", image: "../Assets/Images/images (4).jpeg" },
    { id: 11, name: "Suzuki Gixxer", type: "bike", price: "1,15,000", year: 2019, km: "25,000", fuel: "Petrol", transmission: "Manual", location: "Indore", image: "../Assets/Images/images (5).jpeg" },
    { id: 12, name: "Bajaj Avenger 220", type: "bike", price: "1,35,000", year: 2020, km: "22,000", fuel: "Petrol", transmission: "Manual", location: "Bhopal", image: "../Assets/Images/images (6).jpeg" },
    { id: 13, name: "Hero Xtreme 200R", type: "bike", price: "1,10,000", year: 2019, km: "28,000", fuel: "Petrol", transmission: "Manual", location: "Nagpur", image: "../Assets/Images/images (7).jpeg" },
    { id: 14, name: "TVS Scooty Zest", type: "bike", price: "45,000", year: 2020, km: "12,000", fuel: "Petrol", transmission: "Automatic", location: "Surat", image: "../Assets/Images/TVS-Scooty-Zest-used-Bounce-660.jpg" },
    { id: 15, name: "Honda Activa 6G", type: "bike", price: "65,000", year: 2021, km: "8,000", fuel: "Petrol", transmission: "Automatic", location: "Vadodara", image: "../Assets/Images/images (8).jpeg" },
    { id: 16, name: "Bajaj Platina 110", type: "bike", price: "42,000", year: 2018, km: "35,000", fuel: "Petrol", transmission: "Manual", location: "Rajkot", image: "../Assets/Images/images (9).jpeg" },
    { id: 17, name: "Hero HF Deluxe", type: "bike", price: "38,000", year: 2019, km: "40,000", fuel: "Petrol", transmission: "Manual", location: "Kanpur", image: "../Assets/Images/images (10).jpeg" },
    { id: 18, name: "TVS Star City Plus", type: "bike", price: "52,000", year: 2020, km: "25,000", fuel: "Petrol", transmission: "Manual", location: "Agra", image: "../Assets/Images/images (11).jpeg" },
    { id: 19, name: "Bajaj CT 100", type: "bike", price: "35,000", year: 2018, km: "45,000", fuel: "Petrol", transmission: "Manual", location: "Meerut", image: "../Assets/Images/images (12).jpeg" },
    { id: 20, name: "Honda Dream Yuga", type: "bike", price: "48,000", year: 2019, km: "30,000", fuel: "Petrol", transmission: "Manual", location: "Varanasi", image: "../Assets/Images/4.jpg" }
];

const carPhotoListings = [
    { id: 'car-photo-1', name: 'Compact SUV', type: 'car', price: '7,80,000', year: 2020, km: '32,000', fuel: 'Petrol', transmission: 'Manual', location: 'Mumbai', image: '../Assets/Images/cars%202.jpg', isPhotoPreview: true },
    { id: 'car-photo-2', name: 'Family SUV', type: 'car', price: '8,95,000', year: 2019, km: '48,000', fuel: 'Diesel', transmission: 'Manual', location: 'Delhi', image: '../Assets/Images/cars%203.jpg', isPhotoPreview: true },
    { id: 'car-photo-3', name: 'Off-road SUV', type: 'car', price: '12,50,000', year: 2021, km: '21,000', fuel: 'Diesel', transmission: 'Automatic', location: 'Bangalore', image: '../Assets/Images/cars%204.jpg', isPhotoPreview: true },
    { id: 'car-photo-4', name: 'Premium SUV', type: 'car', price: '10,75,000', year: 2020, km: '39,000', fuel: 'Petrol', transmission: 'Automatic', location: 'Mumbai', image: '../Assets/Images/cars%205.jpg', isPhotoPreview: true },
    { id: 'car-photo-5', name: 'Hatchback', type: 'car', price: '5,60,000', year: 2018, km: '46,000', fuel: 'Petrol', transmission: 'Manual', location: 'Delhi', image: '../Assets/Images/cars%206.jpg', isPhotoPreview: true },
    { id: 'car-photo-6', name: 'Compact Sedan', type: 'car', price: '8,25,000', year: 2022, km: '18,000', fuel: 'Petrol', transmission: 'Automatic', location: 'Bangalore', image: '../Assets/Images/cars%207.jpg', isPhotoPreview: true },
    { id: 'car-photo-7', name: 'Crossover SUV', type: 'car', price: '11,40,000', year: 2021, km: '27,000', fuel: 'Diesel', transmission: 'Automatic', location: 'Mumbai', image: '../Assets/Images/images.jpg', isPhotoPreview: true }
];

const allVehiclesData = [...carPhotoListings, ...allBikesData];
const initialVehiclesData = [...carPhotoListings.slice(0, 3), ...allBikesData.slice(0, 3)];
let vehiclesData = [...initialVehiclesData];
const FAVORITES_STORAGE_KEY = 'autobazaarFavorites';
const MAX_COMPARE_VEHICLES = 4;
let favoriteVehicleIds = [];
let comparedVehicleIds = [];
let favoritesOnly = false;
const AUTH_API = window.AutoBazaarAuthAPI;
const AUTH_STORAGE_KEY = AUTH_API.storageKey;
const requestAuth = AUTH_API.requestAuth;

// ====== DOM ELEMENTS ======
const navMenu = document.getElementById('navMenu');
const menuToggle = document.getElementById('menuToggle');
const sidebarClose = document.getElementById('sidebarClose');
const navbar = document.querySelector('.navbar');
const authModal = document.getElementById('authModal');
const sellModal = document.getElementById('sellModal');
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const logoutBtn = document.getElementById('logoutBtn');
const authFeedback = document.getElementById('authFeedback');
const authNotice = document.getElementById('authNotice');
const sellNowBtn = document.getElementById('sellNowBtn');
const viewAllBtn = document.getElementById('viewAllBtn');
const vehiclesGrid = document.getElementById('vehiclesGrid');
const carouselContainer = document.getElementById('carouselContainer');
const compareToolbar = document.getElementById('compareToolbar');
const compareSelectionStatus = document.getElementById('compareSelectionStatus');
const compareSelectedBtn = document.getElementById('compareSelectedBtn');
const clearCompareBtn = document.getElementById('clearCompareBtn');
const compareAddControls = document.getElementById('compareAddControls');
const compareAddSelect = document.getElementById('compareAddSelect');
const addCompareVehicleBtn = document.getElementById('addCompareVehicleBtn');
const clearCompareModalBtn = document.getElementById('clearCompareModalBtn');
const filterBtns = document.querySelectorAll('.filter-btn');
const closeModalBtns = document.querySelectorAll('.close-modal');
const authTabs = document.querySelectorAll('.auth-tab');
const authForms = document.querySelectorAll('.auth-form');
const navLinks = document.querySelectorAll('.nav-link');
const uploadZone = document.getElementById('uploadZone');
const photoUpload = document.getElementById('photoUpload');

let showingAll = true;
let authToken = null;
let currentUser = null;
let pendingVehicleId = null;
let pendingVehicleAction = null;
let feedbackDeleteMode = false;
let authRestorePromise = Promise.resolve();
let authNoticeTimeout = null;

// ====== INITIALIZATION ======
document.addEventListener('DOMContentLoaded', function() {
    loadFavorites();

    // Load listings
    applyVehicleFilters();
    
    // Setup event listeners
    setupEventListeners();
    
    // Handle scroll effects
    window.addEventListener('scroll', handleScroll);
    
    // Set active nav link
    setActiveNavLink();
    setupRevealAnimations();
    setupBackToTop();

    updateAuthControls();
    authRestorePromise = restoreAuthSession();
});

// ====== RENDER FUNCTIONS ======
function renderVehicles(vehicles, shouldAnimateCards = true) {
    carouselContainer.innerHTML = '';

    document.getElementById('vehicleResultsCount').textContent =
        `${vehicles.length} ${vehicles.length === 1 ? 'vehicle' : 'vehicles'} found`;

    if (!vehicles.length) {
        carouselContainer.innerHTML = favoritesOnly
            ? '<p class="empty-state">No saved vehicles match the current filters. Select the heart on a vehicle to add it to your favorites.</p>'
            : '<p class="empty-state">No vehicles match your search. Try another make, model, or location.</p>';
        updateCompareControls();
        return;
    }
    
    vehicles.forEach(vehicle => {
        const vehicleCard = document.createElement('div');
        vehicleCard.className = vehicle.isPhotoPreview
            ? `vehicle-card vehicle-card-preview${shouldAnimateCards ? '' : ' no-entry-animation'}`
            : `vehicle-card${shouldAnimateCards ? '' : ' no-entry-animation'}`;
        vehicleCard.setAttribute('data-type', vehicle.type);
        const detailItems = [
            { icon: 'fa-calendar', text: vehicle.year },
            { icon: 'fa-tachometer-alt', text: `${vehicle.km} km` },
            { icon: 'fa-gas-pump', text: vehicle.fuel },
            { icon: 'fa-cog', text: vehicle.transmission }
        ];
        const detailsMarkup = detailItems.map(item => `
            <div class="detail-item">
                <i class="fas ${item.icon}"></i>
                <span>${item.text}</span>
            </div>
        `).join('');
        const isCompared = comparedVehicleIds.includes(String(vehicle.id));
        
        vehicleCard.innerHTML = `
            <div class="vehicle-badge">${vehicle.type === 'car' ? (vehicle.isPhotoPreview ? 'Sample Car' : 'Car') : 'Bike'}</div>
            <button class="favorite-toggle${favoriteVehicleIds.includes(String(vehicle.id)) ? ' is-favorite' : ''}" type="button" data-id="${vehicle.id}" aria-label="${favoriteVehicleIds.includes(String(vehicle.id)) ? 'Remove' : 'Save'} ${vehicle.name} ${favoriteVehicleIds.includes(String(vehicle.id)) ? 'from' : 'to'} favorites" aria-pressed="${favoriteVehicleIds.includes(String(vehicle.id))}" title="${favoriteVehicleIds.includes(String(vehicle.id)) ? 'Remove from favorites' : 'Save to favorites'}">
                <i class="fas fa-heart favorite-heart" aria-hidden="true"></i>
            </button>
            <div class="vehicle-image">
                <img src="${vehicle.image}" alt="${vehicle.name}">
            </div>
            <div class="vehicle-info">
                <h3 class="vehicle-title">${vehicle.name}</h3>
                <div class="vehicle-price">₹${vehicle.price}</div>
                <div class="vehicle-details">${detailsMarkup}</div>
                <div class="vehicle-actions">
                    <button class="btn btn-outline view-details" data-id="${vehicle.id}">
                        <i class="fas fa-eye"></i> View Details
                    </button>
                    <button class="btn btn-primary buy-now" data-id="${vehicle.id}">
                        <i class="fas fa-shopping-cart"></i> Buy Now
                    </button>
                    <button class="btn btn-outline compare-toggle${isCompared ? ' is-selected' : ''}" type="button" data-id="${vehicle.id}" aria-pressed="${isCompared}" aria-label="${isCompared ? 'Remove' : 'Add'} ${vehicle.name} ${isCompared ? 'from' : 'to'} comparison">
                        <i class="fas ${isCompared ? 'fa-check' : 'fa-balance-scale'}" aria-hidden="true"></i> ${isCompared ? 'Added to compare' : 'Compare'}
                    </button>
                </div>
            </div>
        `;
        
        carouselContainer.appendChild(vehicleCard);
    });
    
    // Add event listeners to new buttons
    document.querySelectorAll('.view-details').forEach(btn => {
        btn.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            showVehicleDetails(id);
        });
    });
    
    document.querySelectorAll('.buy-now').forEach(btn => {
        btn.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            const vehicle = allVehiclesData.find(item => String(item.id) === id);
            if (vehicle?.isPhotoPreview) {
                showCarPhotoNotice();
            } else {
                buyVehicle(id);
            }
        });
    });

    document.querySelectorAll('.favorite-toggle').forEach(btn => {
        btn.addEventListener('click', function() {
            toggleFavorite(this.getAttribute('data-id'), this);
        });
    });

    document.querySelectorAll('.compare-toggle').forEach(btn => {
        btn.addEventListener('click', function() {
            toggleVehicleComparison(this.getAttribute('data-id'));
        });
    });
    updateCompareControls();
}

// ====== EVENT HANDLERS ======
function setupEventListeners() {
    // Sidebar navigation toggle
    menuToggle.addEventListener('click', () => {
        setNavMenuOpen(!navMenu.classList.contains('active'));
    });
    sidebarClose.addEventListener('click', () => {
        setNavMenuOpen(false);
        menuToggle.focus();
    });

    // Close the sidebar when clicking outside or pressing Escape.
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
            setNavMenuOpen(false);
        }
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            setNavMenuOpen(false);
            menuToggle.focus();
        }
    });

    // Auth modal
    loginBtn.addEventListener('click', () => window.location.assign('auth.html?mode=login'));
    registerBtn.addEventListener('click', () => window.location.assign('auth.html?mode=register'));
    logoutBtn.addEventListener('click', handleLogout);

    // Sell modal
    sellNowBtn.addEventListener('click', () => openModal('sellModal'));
    // Toggle between the initial six vehicles and the complete catalogue.
    viewAllBtn.addEventListener('click', () => {
        const collapsingCatalogue = showingAll;
        showingAll = !showingAll;
        applyVehicleFilters();
        if (collapsingCatalogue) {
            const vehiclesSection = document.getElementById('vehicles');
            vehiclesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });

    document.getElementById('searchForm').addEventListener('submit', event => {
        event.preventDefault();
        showingAll = false;
        applyVehicleFilters();
        const vehiclesSection = document.getElementById('vehicles');
        window.scrollTo({
            top: vehiclesSection.getBoundingClientRect().top + window.scrollY - 90,
            behavior: 'smooth',
        });
    });
    document.getElementById('vehicleSearch').addEventListener('input', () => {
        showingAll = false;
        applyVehicleFilters();
    });
    document.getElementById('locationFilter').addEventListener('change', () => {
        showingAll = false;
        applyVehicleFilters();
    });
    document.getElementById('categoryFilter').addEventListener('change', () => {
        showingAll = false;
        applyVehicleFilters();
    });
    compareSelectedBtn.addEventListener('click', showVehicleComparison);
    clearCompareBtn.addEventListener('click', clearVehicleComparison);
    compareAddSelect.addEventListener('change', () => {
        addCompareVehicleBtn.disabled = !compareAddSelect.value
            || comparedVehicleIds.length >= MAX_COMPARE_VEHICLES;
    });
    addCompareVehicleBtn.addEventListener('click', addVehicleToComparison);
    clearCompareModalBtn.addEventListener('click', clearVehicleComparisonFromModal);

    // Close modals
    closeModalBtns.forEach(btn => {
        btn.addEventListener('click', closeAllModals);
    });

    // Click outside modal to close
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            closeAllModals();
        }
    });

    // Auth tabs
    authTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabName = tab.getAttribute('data-tab');
            switchAuthTab(tabName);
        });
    });

    // Filter buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            filterVehicles(filter);
        });
    });

    // Nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            this.classList.add('active');
            
            setNavMenuOpen(false);
            
            // Scroll to section
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                const category = this.getAttribute('data-filter');
                if (category) filterVehicles(category);
                window.scrollTo({
                    top: targetSection.getBoundingClientRect().top + window.scrollY - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form submissions
    document.getElementById('loginFormData').addEventListener('submit', handleLogin);
    document.getElementById('registerFormData').addEventListener('submit', handleRegister);
    document.getElementById('sellVehicleForm').addEventListener('submit', handleSellVehicle);
    document.getElementById('contactForm').addEventListener('submit', handleContact);
    document.getElementById('feedbackForm').addEventListener('submit', handleFeedback);
    document.getElementById('toggleFeedbackDeleteMode').addEventListener('click', toggleFeedbackDeleteMode);

    // Photo upload
    if (uploadZone && photoUpload) {
        uploadZone.addEventListener('click', () => photoUpload.click());
        uploadZone.addEventListener('dragover', (e) => {
            e.preventDefault();
            uploadZone.classList.add('is-dragging');
        });
        uploadZone.addEventListener('dragleave', () => {
            uploadZone.classList.remove('is-dragging');
        });
        uploadZone.addEventListener('drop', (e) => {
            e.preventDefault();
            uploadZone.classList.remove('is-dragging');
            handleImageUpload(e.dataTransfer.files);
        });
        photoUpload.addEventListener('change', (e) => handleImageUpload(e.target.files));
    }
}

function setNavMenuOpen(isOpen) {
    navMenu.classList.toggle('active', isOpen);
    navbar.classList.toggle('menu-open', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.innerHTML = isOpen
        ? '<i class="fas fa-times" aria-hidden="true"></i>'
        : '<i class="fas fa-bars" aria-hidden="true"></i>';
}

function handleScroll() {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

function setActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

// ====== MODAL FUNCTIONS ======
function openModal(modalId, tab = 'login') {
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    if (modalId === 'authModal') {
        setAuthFeedback('');
        switchAuthTab(tab);
    }
}

function closeAllModals() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.style.display = 'none';
    });
    document.body.style.overflow = 'auto';
}

function switchAuthTab(tabName) {
    setAuthFeedback('');

    // Update tabs
    authTabs.forEach(tab => {
        tab.classList.toggle('active', tab.getAttribute('data-tab') === tabName);
    });
    
    // Update forms
    authForms.forEach(form => {
        form.classList.toggle('active', form.id === `${tabName}Form`);
    });
}

// ====== VEHICLE FUNCTIONS ======
function applyVehicleFilters(shouldAnimateCards = true) {
    const searchTerm = document.getElementById('vehicleSearch').value.trim().toLowerCase();
    const location = document.getElementById('locationFilter').value.toLowerCase();
    const category = document.getElementById('categoryFilter').value;
    const hasActiveFilters = Boolean(searchTerm || location || category !== 'all' || favoritesOnly);
    vehiclesGrid.classList.toggle('favorites-view', favoritesOnly);
    const matches = allVehiclesData.filter(vehicle => {
        const searchableText = `${vehicle.name} ${vehicle.type} ${vehicle.location} ${vehicle.year} ${vehicle.fuel}`.toLowerCase();
        return (!favoritesOnly || favoriteVehicleIds.includes(String(vehicle.id)))
            && (category === 'all' || vehicle.type === category)
            && (!searchTerm || searchableText.includes(searchTerm))
            && (!location || vehicle.location.toLowerCase().includes(location));
    });

    vehiclesData = showingAll || hasActiveFilters
        ? matches
        : [...initialVehiclesData];
    renderVehicles(vehiclesData, shouldAnimateCards);
    const canToggleCatalogue = !hasActiveFilters && matches.length > 6;
    viewAllBtn.style.display = canToggleCatalogue ? '' : 'none';
    viewAllBtn.setAttribute('aria-expanded', String(showingAll));
    viewAllBtn.innerHTML = showingAll
        ? '<i class="fas fa-chevron-up"></i> Show Less'
        : '<i class="fas fa-eye"></i> View All Vehicles';
    filterBtns.forEach(btn => {
        const filter = btn.getAttribute('data-filter');
        btn.classList.toggle('active', filter === (favoritesOnly ? 'favorites' : category));
    });
    updateFavoritesCount();
}

function loadFavorites() {
    try {
        const savedFavorites = localStorage.getItem(FAVORITES_STORAGE_KEY);
        if (savedFavorites === null) return;

        const parsedFavorites = JSON.parse(savedFavorites);
        if (!Array.isArray(parsedFavorites)) {
            throw new Error('Saved favorites are not in the expected format.');
        }
        favoriteVehicleIds = [...new Set(parsedFavorites.map(String))];
    } catch (error) {
        console.error('Could not load saved AutoBazaar favorites:', error);
        showToast('Saved favorites could not be loaded from this browser.', 'error');
    }
}

function toggleFavorite(id, button) {
    const vehicleId = String(id);
    const wasFavorite = favoriteVehicleIds.includes(vehicleId);
    const updatedFavorites = wasFavorite
        ? favoriteVehicleIds.filter(favoriteId => favoriteId !== vehicleId)
        : [...favoriteVehicleIds, vehicleId];

    try {
        localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(updatedFavorites));
    } catch (error) {
        console.error('Could not save AutoBazaar favorites:', error);
        showToast('Your favorites could not be saved. Check your browser storage settings and try again.', 'error');
        return;
    }

    favoriteVehicleIds = updatedFavorites;
    const isFavorite = !wasFavorite;
    const vehicleName = button.closest('.vehicle-card').querySelector('.vehicle-title').textContent;
    button.classList.toggle('is-favorite', isFavorite);
    button.setAttribute('aria-pressed', String(isFavorite));
    button.setAttribute('aria-label', `${isFavorite ? 'Remove' : 'Save'} ${vehicleName} ${isFavorite ? 'from' : 'to'} favorites`);
    button.title = isFavorite ? 'Remove from favorites' : 'Save to favorites';

    const heart = button.querySelector('.favorite-heart');
    heart.classList.remove('is-animating');
    void heart.offsetWidth;
    heart.classList.add('is-animating');

    showToast(wasFavorite ? 'Vehicle removed from favorites.' : 'Vehicle saved to favorites.', 'success');
    if (favoritesOnly && wasFavorite) {
        applyVehicleFilters(false);
    } else {
        updateFavoritesCount();
    }
}

function updateFavoritesCount() {
    const count = document.getElementById('favoriteCount');
    if (count) count.textContent = String(favoriteVehicleIds.length);
}

function toggleVehicleComparison(id) {
    const vehicleId = String(id);
    if (comparedVehicleIds.includes(vehicleId)) {
        comparedVehicleIds = comparedVehicleIds.filter(comparedId => comparedId !== vehicleId);
    } else if (comparedVehicleIds.length >= MAX_COMPARE_VEHICLES) {
        showToast(`You can compare up to ${MAX_COMPARE_VEHICLES} vehicles at a time. Remove one to add another.`, 'info');
        return;
    } else {
        comparedVehicleIds.push(vehicleId);
    }

    updateCompareControls();
}

function updateCompareControls() {
    const selectedCount = comparedVehicleIds.length;
    compareToolbar.hidden = selectedCount === 0;
    compareSelectedBtn.disabled = selectedCount === 0;
    compareSelectedBtn.innerHTML = `<i class="fas fa-balance-scale" aria-hidden="true"></i> Compare vehicles (${selectedCount})`;
    compareAddControls.hidden = selectedCount >= MAX_COMPARE_VEHICLES;

    if (selectedCount < 2) {
        compareSelectionStatus.textContent = `${selectedCount} vehicle selected. Choose one more to compare.`;
    } else if (selectedCount === MAX_COMPARE_VEHICLES) {
        compareSelectionStatus.textContent = `${selectedCount} vehicles selected (maximum).`;
    } else {
        compareSelectionStatus.textContent = `${selectedCount} vehicles selected. Add one more or compare now.`;
    }

    document.querySelectorAll('.compare-toggle').forEach(button => {
        const vehicleId = button.getAttribute('data-id');
        const vehicle = allVehiclesData.find(item => String(item.id) === vehicleId);
        const isSelected = comparedVehicleIds.includes(vehicleId);
        button.classList.toggle('is-selected', isSelected);
        button.setAttribute('aria-pressed', String(isSelected));
        button.disabled = !isSelected && selectedCount >= MAX_COMPARE_VEHICLES;
        button.setAttribute(
            'aria-label',
            `${isSelected ? 'Remove' : 'Add'} ${vehicle.name} ${isSelected ? 'from' : 'to'} comparison`
        );
        button.innerHTML = `<i class="fas ${isSelected ? 'fa-check' : 'fa-balance-scale'}" aria-hidden="true"></i> ${isSelected ? 'Added to compare' : 'Compare'}`;
    });

    const selectedOption = compareAddSelect.value;
    const availableVehicles = allVehiclesData.filter(
        vehicle => !comparedVehicleIds.includes(String(vehicle.id))
    );
    const placeholder = document.createElement('option');
    placeholder.value = '';
    placeholder.textContent = 'Select a vehicle';
    compareAddSelect.replaceChildren(
        placeholder,
        ...availableVehicles.map(vehicle => {
            const option = document.createElement('option');
            option.value = String(vehicle.id);
            option.textContent = vehicle.name;
            return option;
        })
    );
    compareAddSelect.value = availableVehicles.some(
        vehicle => String(vehicle.id) === selectedOption
    ) ? selectedOption : '';
    addCompareVehicleBtn.disabled = !compareAddSelect.value
        || selectedCount >= MAX_COMPARE_VEHICLES;
}

function clearVehicleComparison() {
    comparedVehicleIds = [];
    updateCompareControls();
}

function clearVehicleComparisonFromModal() {
    clearVehicleComparison();
    renderVehicleComparisonTable([]);
    compareAddSelect.focus();
}

function getComparedVehicles() {
    return comparedVehicleIds
        .map(id => allVehiclesData.find(vehicle => String(vehicle.id) === id))
        .filter(Boolean);
}

function renderVehicleComparisonTable(vehicles) {
    const tableHead = document.getElementById('compareTableHead');
    const tableBody = document.getElementById('compareTableBody');
    if (!vehicles.length) {
        tableHead.replaceChildren();
        const row = document.createElement('tr');
        const message = document.createElement('td');
        message.className = 'compare-empty-state';
        message.colSpan = MAX_COMPARE_VEHICLES + 1;
        message.textContent = 'No vehicles in the comparison list. Add a minimum of 2 vehicles.';
        row.appendChild(message);
        tableBody.replaceChildren(row);
        return;
    }

    const headingRow = document.createElement('tr');
    const specificationHeading = document.createElement('th');
    specificationHeading.scope = 'col';
    specificationHeading.textContent = 'Specification';
    headingRow.appendChild(specificationHeading);

    vehicles.forEach(vehicle => {
        const heading = document.createElement('th');
        heading.scope = 'col';
        const vehicleHeader = document.createElement('div');
        vehicleHeader.className = 'compare-vehicle-heading';
        const image = document.createElement('img');
        image.className = 'compare-vehicle-image';
        image.src = vehicle.image;
        image.alt = '';
        const removeButton = document.createElement('button');
        removeButton.className = 'compare-remove-btn';
        removeButton.type = 'button';
        removeButton.setAttribute('aria-label', `Remove ${vehicle.name} from comparison`);
        removeButton.innerHTML = '<i class="fas fa-times" aria-hidden="true"></i>';
        removeButton.addEventListener('click', () => removeVehicleFromComparison(vehicle.id));
        const vehicleInfo = document.createElement('div');
        vehicleInfo.className = 'compare-vehicle-info';
        const name = document.createElement('span');
        name.className = 'compare-vehicle-name';
        name.textContent = vehicle.name;
        const type = document.createElement('span');
        type.className = 'compare-vehicle-type';
        type.textContent = vehicle.type === 'car' ? 'Car' : 'Bike';
        vehicleInfo.append(name, type);
        vehicleHeader.append(image, removeButton, vehicleInfo);
        heading.appendChild(vehicleHeader);
        headingRow.appendChild(heading);
    });
    tableHead.replaceChildren(headingRow);

    const comparisons = [
        ['Price', vehicle => `₹${vehicle.price}`],
        ['Year', vehicle => String(vehicle.year)],
        ['Mileage', vehicle => `${vehicle.km} km`],
        ['Fuel', vehicle => vehicle.fuel],
        ['Transmission', vehicle => vehicle.transmission]
    ];
    tableBody.replaceChildren(...comparisons.map(([label, getValue]) => {
        const row = document.createElement('tr');
        const rowHeading = document.createElement('th');
        rowHeading.scope = 'row';
        rowHeading.textContent = label;
        row.appendChild(rowHeading);

        vehicles.forEach(vehicle => {
            const cell = document.createElement('td');
            cell.textContent = getValue(vehicle);
            row.appendChild(cell);
        });
        return row;
    }));
}

function showVehicleComparison() {
    const vehicles = getComparedVehicles();
    if (!vehicles.length) return;

    renderVehicleComparisonTable(vehicles);
    openModal('compareModal');
    document.querySelector('#compareModal .close-modal').focus();
}

function addVehicleToComparison() {
    const vehicleId = compareAddSelect.value;
    if (!vehicleId || comparedVehicleIds.includes(vehicleId)) return;
    if (comparedVehicleIds.length >= MAX_COMPARE_VEHICLES) {
        showToast(`You can compare up to ${MAX_COMPARE_VEHICLES} vehicles at a time.`, 'info');
        return;
    }

    const vehicle = allVehiclesData.find(item => String(item.id) === vehicleId);
    if (!vehicle) return;

    comparedVehicleIds.push(vehicleId);
    updateCompareControls();
    renderVehicleComparisonTable(getComparedVehicles());
    document.querySelectorAll('.compare-remove-btn').forEach(button => {
        if (button.getAttribute('aria-label') === `Remove ${vehicle.name} from comparison`) {
            button.focus();
        }
    });
}

function removeVehicleFromComparison(id) {
    comparedVehicleIds = comparedVehicleIds.filter(comparedId => comparedId !== String(id));
    updateCompareControls();

    const vehicles = getComparedVehicles();
    if (!vehicles.length) {
        renderVehicleComparisonTable([]);
        compareAddSelect.focus();
        return;
    }

    renderVehicleComparisonTable(vehicles);
    document.querySelector('#compareTableHead .compare-remove-btn')?.focus();
}

function filterVehicles(filter) {
    favoritesOnly = filter === 'favorites';
    document.getElementById('categoryFilter').value = favoritesOnly ? 'all' : filter;
    showingAll = false;
    applyVehicleFilters();
}

async function showVehicleDetails(id) {
    await authRestorePromise;

    const vehicle = allVehiclesData.find(v => String(v.id) === String(id));
    if (!vehicle) return;

    showDetailsModal(vehicle);
}

function showCarPhotoNotice() {
    showToast('This car listing contains sample details only. A real purchase cannot be started from this preview.', 'info');
}

function showDetailsModal(vehicle) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 700px;">
            <span class="close-modal">&times;</span>
            <div class="modal-body">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; align-items: start;">
                    <div>
                        <img src="${vehicle.image}" alt="${vehicle.name}" style="width: 100%; height: 250px; object-fit: cover; border-radius: 12px; margin-bottom: 1rem;">
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-top: 1rem;">
                            <button class="btn btn-primary details-buy" style="width: 100%;">
                                <i class="fas fa-shopping-cart"></i> Buy Now
                            </button>
                            <button class="btn btn-outline details-contact" style="width: 100%;">
                                <i class="fas fa-phone"></i> Contact
                            </button>
                        </div>
                    </div>
                    
                    <div>
                        <h2 style="color: var(--secondary); margin-bottom: 1rem;">${vehicle.name}</h2>
                        <div style="font-size: 1.8rem; font-weight: 700; color: var(--primary); margin-bottom: 1.5rem;">
                            ₹${vehicle.price}
                        </div>
                        
                        <div style="display: grid; gap: 1rem;">
                            <div style="display: flex; justify-content: space-between; padding: 0.8rem; background: #f8f9fa; border-radius: 8px;">
                                <span style="font-weight: 600;"><i class="fas fa-calendar" style="color: var(--primary); margin-right: 8px;"></i>Year:</span>
                                <span>${vehicle.year}</span>
                            </div>
                            
                            <div style="display: flex; justify-content: space-between; padding: 0.8rem; background: #f8f9fa; border-radius: 8px;">
                                <span style="font-weight: 600;"><i class="fas fa-tachometer-alt" style="color: var(--primary); margin-right: 8px;"></i>Kilometers:</span>
                                <span>${vehicle.km} km</span>
                            </div>
                            
                            <div style="display: flex; justify-content: space-between; padding: 0.8rem; background: #f8f9fa; border-radius: 8px;">
                                <span style="font-weight: 600;"><i class="fas fa-gas-pump" style="color: var(--primary); margin-right: 8px;"></i>Fuel Type:</span>
                                <span>${vehicle.fuel}</span>
                            </div>
                            
                            <div style="display: flex; justify-content: space-between; padding: 0.8rem; background: #f8f9fa; border-radius: 8px;">
                                <span style="font-weight: 600;"><i class="fas fa-cog" style="color: var(--primary); margin-right: 8px;"></i>Transmission:</span>
                                <span>${vehicle.transmission}</span>
                            </div>
                            
                            <div style="display: flex; justify-content: space-between; padding: 0.8rem; background: #f8f9fa; border-radius: 8px;">
                                <span style="font-weight: 600;"><i class="fas fa-map-marker-alt" style="color: var(--primary); margin-right: 8px;"></i>Location:</span>
                                <span>${vehicle.location}</span>
                            </div>
                        </div>
                        
                        <div style="margin-top: 1.5rem; padding: 1rem; background: #f8f9fa; border-radius: 8px;">
                            <p style="margin: 0;">${vehicle.isPhotoPreview ? 'Sample car values shown for display only. Verify the actual price, mileage and seller details before buying.' : 'Contact the seller for more information.'}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    modal.querySelector('.details-buy').addEventListener('click', () => {
        modal.remove();
        if (vehicle.isPhotoPreview) {
            showCarPhotoNotice();
        } else {
            buyVehicle(vehicle.id);
        }
    });
    modal.querySelector('.details-contact').addEventListener('click', () => {
        if (vehicle.isPhotoPreview) {
            showCarPhotoNotice();
        } else {
            contactSeller(vehicle.name);
        }
    });
    modal.querySelector('.close-modal').addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
}

function contactSeller(bikeName) {
    alert(`📞 Contact Seller\n\n🏍️ Bike: ${bikeName}\n📱 Phone: +91 9443566920\n📧 Email: gurudeviiideveloper25@gmail.com\n\n💬 WhatsApp: wa.me/919443566920`);
}

function buyVehicle(id) {
    const vehicle = allVehiclesData.find(v => String(v.id) === String(id));
    if (vehicle) {
        if (vehicle.isPhotoPreview) {
            showCarPhotoNotice();
            return;
        }

        if (!authToken || !currentUser) {
            pendingVehicleId = String(id);
            pendingVehicleAction = 'buy';
            openModal('authModal', 'register');
            setAuthFeedback('Create an account or log in to buy this vehicle.', 'info');
            return;
        }

        showPaymentModal(vehicle);
    }
}

function showPaymentModal(vehicle) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 600px;">
            <span class="close-modal">&times;</span>
            <div class="modal-body">
                <h2 style="text-align: center; margin-bottom: 2rem;">💳 Payment Options</h2>
                <div style="border: 1px solid #ddd; padding: 1rem; margin-bottom: 1rem; border-radius: 8px; background: #f9f9f9;">
                    <h3>🏍️ ${vehicle.name}</h3>
                    <p><strong>💰 Price: ₹${vehicle.price}</strong></p>
                </div>
                
                <div style="display: grid; gap: 1rem;">
                    <button class="btn btn-primary" onclick="payWithUPI('${vehicle.id}', '${vehicle.name}', '${vehicle.price}')" style="width: 100%;">
                        <i class="fas fa-mobile-alt"></i> 📱 UPI (GPay/PhonePe/Paytm)
                    </button>
                    
                    <button class="btn btn-secondary" onclick="payWithCard('${vehicle.id}', '${vehicle.name}', '${vehicle.price}')" style="width: 100%;">
                        <i class="fas fa-credit-card"></i> 💳 Debit/Credit Card
                    </button>
                    
                    <button class="btn btn-outline" onclick="payWithNetBanking('${vehicle.id}', '${vehicle.name}', '${vehicle.price}')" style="width: 100%;">
                        <i class="fas fa-university"></i> 🏦 Net Banking
                    </button>
                    
                    <button class="btn btn-outline" onclick="payWithWallet('${vehicle.id}', '${vehicle.name}', '${vehicle.price}')" style="width: 100%;">
                        <i class="fas fa-wallet"></i> 👛 Digital Wallet
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    modal.querySelector('.close-modal').addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
}

function payWithUPI(id, name, price) {
    const amount = price.replace(/,/g, '');
    const upiUrl = `upi://pay?pa=9443566920@paytm&pn=AutoBazaar&am=${amount}&cu=INR&tn=Bike ${name}`;
    
    const tempLink = document.createElement('a');
    tempLink.href = upiUrl;
    tempLink.click();
    
    setTimeout(() => {
        alert(`📱 UPI Payment Initiated!\n\nIf app didn't open:\n🔸 GPay/PhonePe: 9443566920\n🔸 Amount: ₹${price}\n🔸 Note: ${name}\n\n📸 Take screenshot after payment`);
        closeAllModals();
    }, 1000);
}

function payWithCard(id, name, price) {
    alert(`💳 Card Payment Gateway\n\n🏍️ Bike: ${name}\n💰 Amount: ₹${price}\n\n🔒 Redirecting to secure payment...\n\n✅ Accepts: Visa, MasterCard, RuPay\n🏦 All major banks supported\n\n(Demo: Real integration with Razorpay/Stripe)`);
    closeAllModals();
}

function payWithNetBanking(id, name, price) {
    const banks = ['SBI', 'HDFC Bank', 'ICICI Bank', 'Axis Bank', 'PNB', 'Bank of India', 'Canara Bank', 'Union Bank'];
    const bankList = banks.map((bank, i) => `${i+1}. ${bank}`).join('\n');
    const selectedBank = prompt(`🏦 Select your bank:\n\n${bankList}\n\nEnter number (1-8):`);
    
    if (selectedBank && selectedBank >= 1 && selectedBank <= 8) {
        alert(`🏦 ${banks[selectedBank-1]} Net Banking\n\n🏍️ Bike: ${name}\n💰 Amount: ₹${price}\n\n🔒 Redirecting to ${banks[selectedBank-1]} login...\n\n✅ Secure 256-bit SSL encryption`);
    }
    closeAllModals();
}

function payWithWallet(id, name, price) {
    const wallets = ['Paytm Wallet', 'Amazon Pay', 'Mobikwik', 'Freecharge', 'Airtel Money', 'JioMoney'];
    const walletList = wallets.map((wallet, i) => `${i+1}. ${wallet}`).join('\n');
    const selectedWallet = prompt(`👛 Select wallet:\n\n${walletList}\n\nEnter number (1-6):`);
    
    if (selectedWallet && selectedWallet >= 1 && selectedWallet <= 6) {
        alert(`👛 ${wallets[selectedWallet-1]} Payment\n\n🏍️ Bike: ${name}\n💰 Amount: ₹${price}\n\n🔒 Redirecting to ${wallets[selectedWallet-1]}...\n\n✅ Instant payment processing`);
    }
    closeAllModals();
}

// ====== FORM HANDLERS ======
function handleLogin(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    return submitAuthForm('login', {
        email: String(formData.get('email')).trim().toLowerCase(),
        password: String(formData.get('password'))
    }, e.currentTarget);
}

function handleRegister(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const password = String(formData.get('password'));
    const confirmPassword = String(formData.get('confirmPassword'));
    if (password !== confirmPassword) {
        setAuthFeedback('Passwords do not match.', 'error');
        document.getElementById('registerConfirmPassword').focus();
        return;
    }

    const value = name => String(formData.get(name) || '').trim();
    return submitAuthForm('register', {
        name: value('name'),
        email: value('email').toLowerCase(),
        password,
        phone: value('phone'),
        city: value('city'),
        address: value('address'),
        userType: value('userType')
    }, e.currentTarget);
}

async function submitAuthForm(endpoint, payload, form) {
    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonContent = submitButton.innerHTML;
    submitButton.disabled = true;
    submitButton.textContent = endpoint === 'login' ? 'Signing in...' : 'Creating account...';
    setAuthFeedback('');

    try {
        const result = await requestAuth(endpoint, payload);
        if (!result.success || !result.token || !result.user) {
            throw new Error(result.message || 'The server returned an incomplete authentication response.');
        }

        saveAuthSession(result.token, result.user);
        form.reset();

        const vehicleId = pendingVehicleId;
        const vehicleAction = pendingVehicleAction;
        pendingVehicleId = null;
        pendingVehicleAction = null;
        closeAllModals();
        showAuthNotice(`Welcome${result.user.name ? `, ${result.user.name}` : ''}!`, 'success');

        if (vehicleId && vehicleAction === 'buy') {
            const vehicle = allVehiclesData.find(v => String(v.id) === String(vehicleId));
            if (vehicle && !vehicle.isPhotoPreview) {
                showPaymentModal(vehicle);
                return;
            }
        }

        if (vehicleId) showVehicleDetails(vehicleId);
    } catch (error) {
        console.error(`AutoBazaar ${endpoint} failed:`, error);
        setAuthFeedback(error.message || 'Authentication failed. Please try again.', 'error');
    } finally {
        submitButton.disabled = false;
        submitButton.innerHTML = originalButtonContent;
    }
}

function saveAuthSession(token, user) {
    authToken = token;
    currentUser = user;

    try {
        sessionStorage.setItem(AUTH_STORAGE_KEY, token);
    } catch (error) {
        console.error('Could not save the AutoBazaar session:', error);
        showAuthNotice('You are signed in for this tab, but browser storage is blocked. Keep this tab open.', 'error');
    }

    updateAuthControls();
}

function clearAuthSession() {
    authToken = null;
    currentUser = null;

    try {
        sessionStorage.removeItem(AUTH_STORAGE_KEY);
    } catch (error) {
        console.error('Could not clear the saved AutoBazaar session:', error);
        showAuthNotice('Could not clear the saved sign-in. Close this tab to end the session.', 'error');
    }

    updateAuthControls();
}

async function restoreAuthSession() {
    let token;
    try {
        token = sessionStorage.getItem(AUTH_STORAGE_KEY);
    } catch (error) {
        console.error('Could not read the saved AutoBazaar session:', error);
        showAuthNotice('Browser storage is blocked, so sign-in will not persist after this tab closes.', 'error');
        return;
    }

    if (!token) return;
    authToken = token;

    try {
        const result = await requestAuth('me', null, token);
        if (!result.user) throw new Error('The server did not return the signed-in user.');
        currentUser = result.user;
        updateAuthControls();
    } catch (error) {
        console.error('Could not verify the saved AutoBazaar session:', error);
        clearAuthSession();
        showAuthNotice(
            error.status === 401
                ? 'Your saved session has expired. Please log in again.'
                : 'Unable to verify your saved session. Please log in again.',
            'error'
        );
    }
}

function updateAuthControls() {
    const isAuthenticated = Boolean(authToken && currentUser);
    loginBtn.hidden = isAuthenticated;
    registerBtn.hidden = isAuthenticated;
    logoutBtn.hidden = !isAuthenticated;
}

function handleLogout() {
    clearAuthSession();
    pendingVehicleId = null;
    pendingVehicleAction = null;
    closeAllModals();
    showAuthNotice('You have been signed out.', 'success');
}

function setAuthFeedback(message, type = 'info') {
    authFeedback.textContent = message;
    authFeedback.hidden = !message;
    authFeedback.className = `auth-feedback ${type}`;
    authFeedback.setAttribute('role', type === 'error' ? 'alert' : 'status');
}

function showAuthNotice(message, type = 'success') {
    authNotice.textContent = message;
    authNotice.className = `auth-notice ${type}`;
    authNotice.hidden = false;
    window.clearTimeout(authNoticeTimeout);
    authNoticeTimeout = window.setTimeout(() => {
        authNotice.hidden = true;
    }, 5000);
}

function handleSellVehicle(e) {
    e.preventDefault();
    
    const photoPreview = document.getElementById('photoPreview');
    const uploadedPhotos = photoPreview.querySelectorAll('img').length;
    
    if (uploadedPhotos < 5) {
        showToast('Please upload at least 5 photos of your vehicle.', 'error');
        return;
    }
    
    showToast('Your vehicle has been listed! Our team will contact you within 24 hours for inspection.', 'success');
    closeAllModals();
    
    // Reset form
    e.target.reset();
    photoPreview.innerHTML = '';
}

function handleContact(e) {
    e.preventDefault();
    showToast('Thank you for your message! We will contact you within 24 hours.', 'success');
    e.target.reset();
}

function toggleFeedbackDeleteMode() {
    feedbackDeleteMode = !feedbackDeleteMode;
    const testimonialsContainer = document.querySelector('.testimonials-container');
    testimonialsContainer.classList.toggle('feedback-delete-mode', feedbackDeleteMode);
    if (feedbackDeleteMode) {
        testimonialsContainer.querySelectorAll('.testimonial-card').forEach(addFeedbackRemoveButton);
    }

    const button = document.getElementById('toggleFeedbackDeleteMode');
    button.setAttribute('aria-pressed', String(feedbackDeleteMode));
    button.querySelector('span').textContent = feedbackDeleteMode ? 'Done' : 'Remove Feedback';
    document.getElementById('feedbackStatus').textContent = feedbackDeleteMode
        ? 'Click the minus button on a feedback card to remove it.'
        : 'Feedback removal mode is off.';
}

function addFeedbackRemoveButton(card) {
    if (card.querySelector('.feedback-remove')) return;

    const authorName = card.querySelector('.testimonial-author h4')?.textContent.trim();
    const removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.className = 'feedback-remove';
    removeButton.setAttribute(
        'aria-label',
        authorName ? `Remove feedback from ${authorName}` : 'Remove feedback'
    );
    const removeIcon = document.createElement('i');
    removeIcon.className = 'fas fa-minus';
    removeIcon.setAttribute('aria-hidden', 'true');
    removeButton.appendChild(removeIcon);
    removeButton.addEventListener('click', () => {
        card.remove();
        document.getElementById('feedbackStatus').textContent = 'Feedback has been removed.';
    });
    card.prepend(removeButton);
}

function handleFeedback(e) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get('name') || '').trim();
    const message = String(formData.get('message') || '').trim();
    const rating = Number(formData.get('rating'));
    if (!name || !message || !Number.isInteger(rating) || rating < 1 || rating > 5) {
        document.getElementById('feedbackStatus').textContent =
            'Please enter your name and feedback, and select a star rating.';
        const fieldToFocus = !name
            ? document.getElementById('feedbackName')
            : !message
                ? document.getElementById('feedbackMessage')
                : document.getElementById('feedbackRating5');
        fieldToFocus.focus();
        return;
    }

    const card = document.createElement('article');
    card.className = 'testimonial-card user-feedback';

    const stars = document.createElement('div');
    stars.className = 'testimonial-rating';
    stars.setAttribute('aria-label', `${rating} out of 5 stars`);
    for (let index = 1; index <= 5; index++) {
        const star = document.createElement('i');
        star.className = index <= rating ? 'fas fa-star' : 'far fa-star';
        star.setAttribute('aria-hidden', 'true');
        stars.appendChild(star);
    }

    const feedbackText = document.createElement('p');
    feedbackText.textContent = `“${message}”`;

    const author = document.createElement('div');
    author.className = 'testimonial-author';
    const initials = name.split(/\s+/).slice(0, 2).map(part => part.charAt(0)).join('').toUpperCase();
    const avatar = document.createElement('div');
    avatar.className = 'feedback-avatar';
    avatar.textContent = initials;
    const authorDetails = document.createElement('div');
    const authorName = document.createElement('h4');
    authorName.textContent = name;
    const authorLabel = document.createElement('span');
    authorLabel.textContent = 'AutoBazaar Customer';
    authorDetails.append(authorName, authorLabel);
    author.append(avatar, authorDetails);
    card.append(stars, feedbackText, author);
    addFeedbackRemoveButton(card);

    document.querySelector('.testimonials-container').prepend(card);
    document.getElementById('feedbackStatus').textContent = 'Thank you! Your feedback is now displayed above.';
    form.reset();
}

function handleImageUpload(files) {
    const photoPreview = document.getElementById('photoPreview');
    
    Array.from(files).forEach((file, index) => {
        if (photoPreview.querySelectorAll('img').length >= 10) {
            showToast('Maximum 10 photos allowed.', 'error');
            return;
        }
        
        if (!file.type.startsWith('image/')) {
            showToast('Please upload only image files.', 'error');
            return;
        }
        
        if (file.size > 5 * 1024 * 1024) {
            showToast('File size should be less than 5MB.', 'error');
            return;
        }
        
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.style.width = '100px';
            img.style.height = '100px';
            img.style.objectFit = 'cover';
            img.style.borderRadius = 'var(--radius-sm)';
            img.style.margin = '5px';
            img.style.border = '2px solid var(--light-gray)';
            
            const container = document.createElement('div');
            container.style.position = 'relative';
            container.style.display = 'inline-block';
            container.appendChild(img);
            
            const removeBtn = document.createElement('button');
            removeBtn.innerHTML = '×';
            removeBtn.style.position = 'absolute';
            removeBtn.style.top = '0';
            removeBtn.style.right = '0';
            removeBtn.style.background = 'var(--danger)';
            removeBtn.style.color = 'white';
            removeBtn.style.border = 'none';
            removeBtn.style.borderRadius = '50%';
            removeBtn.style.width = '20px';
            removeBtn.style.height = '20px';
            removeBtn.style.cursor = 'pointer';
            removeBtn.style.fontSize = '12px';
            removeBtn.addEventListener('click', function() {
                container.remove();
            });
            
            container.appendChild(removeBtn);
            photoPreview.appendChild(container);
        };
        reader.readAsDataURL(file);
    });
    
    photoUpload.value = '';
}

// ====== KEYBOARD SHORTCUTS ======
document.addEventListener('keydown', (e) => {
    // Escape to close modals
    if (e.key === 'Escape') {
        closeAllModals();
    }
    
    // Ctrl + / for search focus
    if (e.ctrlKey && e.key === '/') {
        e.preventDefault();
        const searchInput = document.querySelector('.search-input');
        if (searchInput) {
            searchInput.focus();
        }
    }
});

// ====== DEMO DATA GENERATOR ======
function generateDemoData() {
    // Already have demo data
    console.log('AutoBazaar Demo Loaded');
    console.log('Try:');
    console.log('- Click on vehicles to view details');
    console.log('- Use filter buttons to filter vehicles');
    console.log('- Click Buy/Sell buttons');
    console.log('- Submit forms');
    console.log('- Try mobile responsive view');
}

// Initialize demo
generateDemoData();

// ====== MODERN UI HELPERS ======
function showToast(message, type = 'info') {
    const stack = document.getElementById('toastStack');
    if (!stack) { alert(message); return; }

    const icons = { success: 'fa-circle-check', error: 'fa-circle-exclamation', info: 'fa-circle-info' };
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.setAttribute('role', type === 'error' ? 'alert' : 'status');

    const icon = document.createElement('i');
    icon.className = `fas ${icons[type] || icons.info}`;
    icon.setAttribute('aria-hidden', 'true');
    const text = document.createElement('span');
    text.textContent = message;
    toast.append(icon, text);
    stack.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('leaving');
        setTimeout(() => toast.remove(), 300);
    }, 4500);
}

function setupRevealAnimations() {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!('IntersectionObserver' in window) || reduceMotion) return;

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll(
        '.section-header, .step-card, .testimonial-card, .sell-banner, .contact-item, .contact-form, .feedback-panel'
    ).forEach((el, index) => {
        el.classList.add('reveal');
        el.style.setProperty('--d', `${(index % 4) * 70}ms`);
        observer.observe(el);
    });
}

function setupBackToTop() {
    const button = document.getElementById('backToTop');
    if (!button) return;
    window.addEventListener('scroll', () => {
        button.classList.toggle('visible', window.scrollY > 600);
    }, { passive: true });
    button.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}
