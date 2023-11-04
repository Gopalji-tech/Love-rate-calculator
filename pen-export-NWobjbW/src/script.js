const loveForm = document.getElementById('loveForm');
const yourName = document.getElementById('yourName');
const partnerName = document.getElementById('partnerName');
const result = document.getElementById('result');
const loveRate = document.getElementById('loveRate');
const percentage = document.getElementById('percentage');

loveForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const randomLoveRate = Math.floor(Math.random() * 101);
    percentage.textContent = `${randomLoveRate}%`;
    result.classList.remove('hidden');
});

