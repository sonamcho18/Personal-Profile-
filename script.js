function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

document.body.style.fontFamily = 'Arial, sans-serif';
document.body.style.backgroundColor = '#1a1a1a';
document.body.style.color = '#0a0a0a';
document.body.style.textAlign = 'center';

const header = document.querySelector('header');
header.style.padding = '10px';
header.style.backgroundColor = '#333';

const navButtons = document.querySelectorAll('nav button');
navButtons.forEach(button => {
    button.style.margin = '5px';
    button.style.padding = '10px 15px';
    button.style.backgroundColor = '#444';
    button.style.color = '#fff';
    button.style.border = 'none';
    button.style.cursor = 'pointer';
    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = '#555';
    });
    button.addEventListener('mouseout', () => {
        button.style.backgroundColor = '#444';
    });
});

const portfolioImages = document.querySelectorAll('.portfolio-images img');
portfolioImages.forEach(img => {
    img.style.width = '150px';
    img.style.margin = '10px';
    img.style.borderRadius = '5px';
});

// Show the homepage section by default
document.addEventListener('DOMContentLoaded', () => {
    showSection('home');
});

