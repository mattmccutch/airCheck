
function toggleSteps(event, button) {
    event.stopPropagation();
    button.parentElement.classList.toggle('show-steps');
    button.textContent = button.parentElement.classList.contains('show-steps') ? 'Hide Steps' : 'Show Steps';
}
