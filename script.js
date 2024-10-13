let values = [];
const wheel = document.getElementById('wheel');
const result = document.getElementById('result');
const spinButton = document.getElementById('spinButton');
const inputValue = document.getElementById('inputValue');
const addValueButton = document.getElementById('addValueButton');

addValueButton.addEventListener('click', () => {
    const value = inputValue.value.trim();
    if (value) {
        values.push(value);
        inputValue.value = '';
        alert(`Значение "${value}" добавлено!`);
    } else {
        alert('Введите значение!');
    }
});

spinButton.addEventListener('click', () => {
    if (values.length === 0) {
        alert('Добавьте хотя бы одно значение!');
        return;
    }
    
    const randomIndex = Math.floor(Math.random() * values.length);
    const randomDegree = 360 * 5 + randomIndex * (360 / values.length); // 5 полных оборотов + случайный индекс
    wheel.style.transform = `rotate(${randomDegree}deg)`;

    setTimeout(() => {
        result.textContent = `Вы выиграли: ${values[randomIndex]}`;
    }, 4000); // Задержка, чтобы показать результат после анимации
});
