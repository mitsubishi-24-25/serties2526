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

fetch('Project_ALAGA.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('Project_ALAGA');
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

fetch('Symposium_AP.json')
  .then(response => response.json())
  .then(data => {

    const container1 = document.getElementById('Symposium_AP');
    const container2 = document.getElementById('Member1');
    const container3 = document.getElementById('Member2');

    data.Symposium_AP.forEach(student => {
      const row = document.createElement('div');
      row.className = 'row gx-2';
      row.innerHTML = `
        <div class="col-8">${student.name}</div>
        <div class="col-4">${student.section}</div>
      `;
      container1.appendChild(row);
    });

    data.ver1.forEach(student => {
      const row = document.createElement('div');
      row.className = 'row gx-2';
      row.innerHTML = `
        <div class="col-8">${student.name}</div>
        <div class="col-4">${student.section}</div>
      `;
      container2.appendChild(row);
    });

    data.ver2.forEach(student => {
      const row = document.createElement('div');
      row.className = 'row gx-2';
      row.innerHTML = `
        <div class="col-8">${student.name}</div>
        <div class="col-4">${student.section}</div>
      `;
      container3.appendChild(row);
    });
  });
