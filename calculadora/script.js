const display = document.getElementById('display');

    function appendValue(value) {
      if (display.value === "0" && value !== ".") {
        display.value = value;
      } else {
        display.value += value;
      }
    }

    function clearDisplay() {
      display.value = "0";
    }

    function calculateResult() {
      try {
        let expression = display.value.replace(/%/g, "/100");
        display.value = eval(expression);
      } catch (error) {
        display.value = "Erro";
      }
    }

    function toggleSign() {
      if (display.value.startsWith("-")) {
        display.value = display.value.substring(1);
      } else if (display.value !== "0") {
        display.value = "-" + display.value;
      }
    }

    function toggleTheme() {
      const calculator = document.getElementById('calc');
      const icon = document.querySelector('.toggle-theme');
      calculator.classList.toggle('light');
      calculator.classList.toggle('dark');
      icon.textContent = calculator.classList.contains('dark') ? '🌙' : '☀️';
    }
    document.addEventListener("keydown", (e) => {
        const keys = "0123456789/*-+.%";
        if (keys.includes(e.key)) {
          appendValue(e.key);
        } else if (e.key === "Enter") {
          calculateResult();
        } else if (e.key === "Backspace") {
          display.value = display.value.slice(0, -1) || "0";
        } else if (e.key.toLowerCase() === "c") {
          clearDisplay();
        }
      });
    document.addEventListener("DOMContentLoaded", () => {
        const calculator = document.getElementById('calc');
        const icon = document.querySelector('.toggle-theme');
        icon.addEventListener('click', toggleTheme);
        }
    );      

    