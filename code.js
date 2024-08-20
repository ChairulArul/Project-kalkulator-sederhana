const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button'); // Memperbaiki querySelectorAll
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

const calculate = (btnValue) => {
    // Fokus input hanya jika dibutuhkan
    if (btnValue !== "=") {
        display.focus();
    }

    if (btnValue === "=" && output !== "") {
        try {
            // Menggunakan try-catch untuk menangani error pada eval
            output = eval(output.replace("%", "/100"));
        } catch (error) {
            output = "Error";
        }
    } else if (btnValue === "AC") {
        output = "";
    } else if (btnValue === "DEL") {
        output = output.toString().slice(0, -1);
    } else {
        if (output === "" && specialChars.includes(btnValue)) return;
        output += btnValue;
    }

    display.value = output;
}

buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
