document.getElementById('spinButton').addEventListener('click', function() {
    const wheel = document.getElementById('wheel');
    const randomDegree = Math.floor(Math.random() * 360 + 3600); // 10 полных оборотов плюс случайный угол
    wheel.style.transform = `rotate(${randomDegree}deg)`;
});
