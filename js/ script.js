document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('appointment-form');
  const appointmentList = document.getElementById('appointments');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const date = document.getElementById('date').value;
    const type = document.getElementById('type').value;

    if (name && date && type) {
      const listItem = document.createElement('li');
      listItem.textContent = `${name} - ${formatDate(date)} - ${type}`;
      appointmentList.appendChild(listItem);

      form.reset();
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  });

  function formatDate(dateString) {
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
  }
});
