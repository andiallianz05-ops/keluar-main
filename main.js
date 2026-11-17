document.addEventListener('DOMContentLoaded', () => {
  // 1. Kalkulator Budget Otomatis
  const transportInput = document.getElementById('transportCost');
  const ticketInput = document.getElementById('ticketCost');
  const foodInput = document.getElementById('foodCost');
  const totalResult = document.getElementById('totalResult');

  function calculateBudget() {
    const transport = parseFloat(transportInput.value) || 0;
    const ticket = parseFloat(ticketInput.value) || 0;
    const food = parseFloat(foodInput.value) || 0;

    const total = transport + ticket + food;
    totalResult.textContent = `Rp${total.toLocaleString('id-ID')}`;
  }

  [transportInput, ticketInput, foodInput].forEach(input => {
    input.addEventListener('input', calculateBudget);
  });

  // 2. Interactive Checklist
  const checkboxes = document.querySelectorAll('.checklist input');
  checkboxes.forEach(box => {
    box.addEventListener('change', (e) => {
      const label = e.target.nextElementSibling;
      if (e.target.checked) {
        label.style.textDecoration = 'line-through';
        label.style.color = '#94a3b8';
      } else {
        label.style.textDecoration = 'none';
        label.style.color = '#1e293b';
      }
    });
  });
});

// 3. Filter Destinasi Berdasarkan Level
function filterDestinasi(level) {
  const cards = document.querySelectorAll('.card-item');
  const buttons = document.querySelectorAll('.filter-btn');

  buttons.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  cards.forEach(card => {
    if (level === 'all' || card.getAttribute('data-level') === level) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// 4. Modal Tambah Trip Sederhana
function tambahDestinasiModal() {
  alert("Fitur tambah trip baru akan dikembangkan! Kamu bisa menghubungkan ini ke database.");
}