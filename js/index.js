// Run this function on page load to check the initial state of the date input
window.onload = function() {
    const dateInput = document.getElementById('dateInput');
    const placeholder = document.getElementById('datePlaceholder');

    // Set input value to empty string to avoid default browser placeholder (年/月/日)
    dateInput.value = '';

    if (dateInput.value === '') {
        placeholder.style.display = 'block'; // Show placeholder if no date is selected
    } else {
        placeholder.style.display = 'none'; // Hide placeholder if there's already a value
        dateInput.style.color='#fff'
    }
};

function hidePlaceholder() {
    const placeholder = document.getElementById('datePlaceholder');
    placeholder.style.display = 'none'; // Hide placeholder when input is focused
}

// function showPlaceholder() {
//     const dateInput = document.getElementById('dateInput');
//     const placeholder = document.getElementById('datePlaceholder');
//     if (dateInput.value === '') {
//         placeholder.style.display = 'block'; // Show placeholder again if no value
//     } else {
//          dateInput.style.color='#fff'
//     }
// }

function showValue() {
       const dateInput = document.getElementById('dateInput');
    const placeholder = document.getElementById('datePlaceholder');
    if (dateInput.value === '') {
        placeholder.style.display = 'block'; // Show placeholder again if no value
         dateInput.style.color='transparent'
    } else {
         dateInput.style.color='#fff'
    }
}




function submitForm() {
    const name = document.getElementById('name').value; // Corrected the ID here
    const date = document.getElementById('dateInput').value;
    if (!name || !date) {
        alert("请输入完整信息");
        return;
    }
    sessionStorage.setItem('name', name);
    sessionStorage.setItem('date', date);
    window.location.href='card.html'
}
