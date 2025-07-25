fetch('Back-To-School.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('Back-To-School');
    data.forEach(student => {
      const row = document.createElement('div');
      row.className = 'row gx-2';
      row.innerHTML = `
        <div class="col-8">${student.name}</div>
        <div class="col-4">${student.section}</div>
      `;
      container.appendChild(row);
    });
  });

  fetch('July Clean-Up.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('July_Clean-Up');
    data.forEach(student => {
      const row = document.createElement('div');
      row.className = 'row gx-2';
      row.innerHTML = `
        <div class="col-8">${student.name}</div>
        <div class="col-4">${student.section}</div>
      `;
      container.appendChild(row);
    });
  });
