document.addEventListener("DOMContentLoaded", () => {
    const statusButtons = document.querySelectorAll('.status-btn');
    
    statusButtons.forEach(button => {
        button.addEventListener('click', () => {
            statusButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
        });
    });
});
