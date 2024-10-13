const spinButton = document.getElementById('spinButton');
const wheel = document.getElementById('wheel');
const resultDiv = document.getElementById('result');

spinButton.addEventListener('click', () => {
    const randomDegree = Math.floor(Math.random() * 360 + 720); // 720 - для дополнительного вращения
    wheel.style.transform = `rotate(${randomDegree}deg)`;
    
    const result = getResult(randomDegree % 360);
    setTimeout(() => {
        resultDiv.textContent = `Вы выиграли: ${result}`;
    }, 4000); // Задержка, чтобы показать результат после вращения
});

// Функция для определения результата в зависимости от угла
function getResult(degree) {
    // Здесь можно добавить логику определения сектора
    if (degree < 90) return 'Приз 1';
    else if (degree < 180) return 'Приз 2';
    else if (degree < 270) return 'Приз 3';
    else return 'Приз 4';
document.getElementById('spinButton').addEventListener('click', function() {
    const wheel = document.getElementById('wheel');
    const randomDegree = Math.floor(Math.random() * 360 + 3600); // 10 полных оборотов плюс случайный угол
    wheel.style.transform = `rotate(${randomDegree}deg)`;