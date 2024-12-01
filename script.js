// Переключение музыки
function toggleMusic() {
    const music = document.getElementById('background-music');
    const musicButton = document.getElementById('music-button');
  
    try {
      if (music.paused) {
        music.play();
        musicButton.textContent = '⏸️'; // Пауза
      } else {
        music.pause();
        musicButton.textContent = '▶️'; // Воспроизвести
      }
    } catch (e) {
      console.error("Ошибка с аудио: ", e);
    }
  }
  
  // Переход к вопросам
  function showQuestions() {
    document.getElementById('welcome-page').style.display = 'none';
    document.getElementById('questions-page').style.display = 'block';
  }
  
  // Список вопросов
  let questionIndex = 0;
  const questions = ["Как проходит работа?", "Как мама?", "Как твои нервы?"];
  
  // Переход к следующему вопросу
  function nextQuestion() {
    showBoomEffect(); // Вызов эффекта "Бум"
    questionIndex++;
    if (questionIndex < questions.length) {
      document.getElementById('question-text').innerText = questions[questionIndex];
    } else {
      document.getElementById('questions-page').style.display = 'none';
      document.getElementById('missing-page').style.display = 'block';
    }
  }
  
  // Эффект "Бум"
  function showBoomEffect() {
    const boom = document.getElementById('boom-effect');
    boom.style.display = 'block';
    setTimeout(() => {
      boom.style.display = 'none';
    }, 800);
  }
  
  // Перемещение кнопки "Нет"
  function moveNoButton() {
    const button = document.getElementById('no-button');
    button.style.position = 'absolute';
    button.style.left = Math.random() * (window.innerWidth - button.clientWidth) + 'px';
    button.style.top = Math.random() * (window.innerHeight - button.clientHeight) + 'px';
  }
  
  // Показать цветок и финальное сообщение
  function showFlower() {
    document.getElementById('missing-page').style.display = 'none';
    document.getElementById('flower-page').style.display = 'block';
  }
  