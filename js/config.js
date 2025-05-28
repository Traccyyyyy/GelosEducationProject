// Base path configuration
const BASE_PATH = window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/'));

// Helper function to get full path
function getAssetPath(relativePath) {
    return `${BASE_PATH}/${relativePath}`.replace(/\/+/g, '/');
}

// Update image paths when document loads
document.addEventListener('DOMContentLoaded', function() {
    // Update all images with IDs
    const images = {
        'searchIcon': 'images/icons8-search-50.png',
        'logoImg': 'images/company_logo.png',
        'menuIcon': 'images/menu_icon.png',
        'currentImg': 'images/pexels-cowomen-2041624-2.jpg',
        'facebookIcon': 'images/icons8-facebook-30.png',
        'instagramIcon': 'images/icons8-instagram-48.png',
        'twitterIcon': 'images/icons8-twitter-32.png'
    };

    // Update paths for all images
    Object.entries(images).forEach(([id, path]) => {
        const element = document.getElementById(id);
        if (element) {
            element.src = getAssetPath(path);
        }
    });

    // Update all script and CSS paths
    document.querySelectorAll('script[src], link[rel="stylesheet"]').forEach(element => {
        if (element.src) {
            element.src = getAssetPath(element.getAttribute('src'));
        } else if (element.href) {
            element.href = getAssetPath(element.getAttribute('href'));
        }
    });

    // Update gallery image paths
    document.querySelectorAll('.slides').forEach(element => {
        const href = element.getAttribute('href');
        if (href && !href.startsWith('http')) {
            element.href = getAssetPath(href);
        }
    });
}); 