fetch("Certificates/json/Rescue_Olympics.json")
  .then((response) => response.json())
  .then((data) => {
    const container0 = document.getElementById("Rescue-Principal");
    const container1 = document.getElementById("Rescue-Teachers");
    const container2 = document.getElementById("Rescue-Clubs");
    const container3 = document.getElementById("Rescue-Officers");
    const container4 = document.getElementById("Rescue-Fire-Member");
    const container5 = document.getElementById("Rescue-DRRM-Member");

    data.v1.forEach((student) => {
      const row = document.createElement("div");
      row.className = "row gx-2";
      row.innerHTML = `
        <div class="col-8">${student.name}</div>
        <div class="col-4">${student.section}</div>
      `;
      container0.appendChild(row);
    });

    data.v2.forEach((student) => {
      const row = document.createElement("div");
      row.className = "row gx-2";
      row.innerHTML = `
        <div class="col-12">${student.name}</div>
      `;
      container1.appendChild(row);
    });

    data.v3.forEach((student) => {
      const row = document.createElement("div");
      row.className = "row gx-2";
      row.innerHTML = `
        <div class="col-12">${student.name}</div>
      `;
      container2.appendChild(row);
    });

    data.v4.forEach((student) => {
      const row = document.createElement("div");
      row.className = "row gx-2";
      row.innerHTML = `
        <div class="col-8">${student.name}</div>
        <div class="col-4">${student.section}</div>
      `;
      container3.appendChild(row);
    });

    data.v5.forEach((student) => {
      const row = document.createElement("div");
      row.className = "row gx-2";
      row.innerHTML = `
        <div class="col-8">${student.name}</div>
        <div class="col-4">${student.section}</div>
      `;
      container4.appendChild(row);
    });

    data.v6.forEach((student) => {
      const row = document.createElement("div");
      row.className = "row gx-2";
      row.innerHTML = `
        <div class="col-8">${student.name}</div>
        <div class="col-4">${student.section}</div>
      `;
      container5.appendChild(row);
    });
  });

fetch("Certificates/json/NSED-4th.json")
  .then((response) => response.json())
  .then((data) => {
    const container0 = document.getElementById("Officer-4th-NSED");
    const container1 = document.getElementById("Member-4th-NSED");

    data.v1.forEach((student) => {
      const row = document.createElement("div");
      row.className = "row gx-2";
      row.innerHTML = `
        <div class="col-8">${student.name}</div>
        <div class="col-4">${student.section}</div>
      `;
      container0.appendChild(row);
    });

    data.v2.forEach((student) => {
      const row = document.createElement("div");
      row.className = "row gx-2";
      row.innerHTML = `
        <div class="col-8">${student.name}</div>
        <div class="col-4">${student.section}</div>
      `;
      container1.appendChild(row);
    });
  });

fetch("Certificates/json/PTA-3rd.json")
  .then((response) => response.json())
  .then((data) => {
    const container = document.getElementById("Sections-PTA-3rd");
    data.forEach((student) => {
      const row = document.createElement("div");
      row.className = "row gx-2";
      row.innerHTML = `
        <div class="col-8">${student.name}</div>
        <div class="col-4">${student.section}</div>
      `;
      container.appendChild(row);
    });
  });

fetch("Certificates/json/Tree_Planting_2026.json")
  .then((response) => response.json())
  .then((data) => {
    const container = document.getElementById("Sections-Tree_planting");
    data.forEach((student) => {
      const row = document.createElement("div");
      row.className = "row gx-2";
      row.innerHTML = `
        <div class="col-8">${student.name}</div>
        <div class="col-4">${student.section}</div>
      `;
      container.appendChild(row);
    });
  });

    fetch("Certificates/json/Gift-Giving_students.json")
  .then((response) => response.json())
  .then((data) => {
    const container = document.getElementById("Sections-GiftGiving_students");
    data.forEach((student) => {
      const row = document.createElement("div");
      row.className = "row gx-2";
      row.innerHTML = `
        <div class="col-8">${student.name}</div>
        <div class="col-4">${student.section}</div>
      `;
      container.appendChild(row);
    });
  });

  fetch("Certificates/json/Gift-Giving_Utility.json")
  .then((response) => response.json())
  .then((data) => {
    const container = document.getElementById("Sections-GiftGiving_Utility");
    data.forEach((student) => {
      const row = document.createElement("div");
      row.className = "row gx-2";
      row.innerHTML = `
        <div class="col-8">${student.name}</div>
        <div class="col-4">${student.section}</div>
      `;
      container.appendChild(row);
    });
  });
  

fetch("Certificates/json/Gift-Giving_Community.json")
  .then((response) => response.json())
  .then((data) => {
    const container = document.getElementById("Sections-GiftGiving_Community");
    data.forEach((student) => {
      const row = document.createElement("div");
      row.className = "row gx-2";
      row.innerHTML = `
        <div class="col-8">${student.name}</div>
        <div class="col-4">${student.section}</div>
      `;
      container.appendChild(row);
    });
  });

fetch("Certificates/json/EDDIS-_III_Rescue.json")
  .then((response) => response.json())
  .then((data) => {
    const container0 = document.getElementById("Indv-eddis");
    const container1 = document.getElementById("Clubs-eddis");
    const container2 = document.getElementById("SERT-eddis");
    const container3 = document.getElementById("SERT-Member-eddis");

    data.Indv.forEach((student) => {
      const row = document.createElement("div");
      row.className = "row gx-2";
      row.innerHTML = `
        <div class="col-12">${student.name}</div>
      `;
      container0.appendChild(row);
    });

    data.Clubs.forEach((student) => {
      const row = document.createElement("div");
      row.className = "row gx-2";
      row.innerHTML = `
        <div class="col-12">${student.name}</div>
      `;
      container1.appendChild(row);
    });

    data.Officers.forEach((student) => {
      const row = document.createElement("div");
      row.className = "row gx-2";
      row.innerHTML = `
        <div class="col-8">${student.name}</div>
        <div class="col-4">${student.section}</div>
      `;
      container2.appendChild(row);
    });

    data.Members.forEach((student) => {
      const row = document.createElement("div");
      row.className = "row gx-2";
      row.innerHTML = `
        <div class="col-8">${student.name}</div>
        <div class="col-4">${student.section}</div>
      `;
      container2.appendChild(row);
    });
  });

fetch("Certificates/json/SSS-Oct.json")
  .then((response) => response.json())
  .then((data) => {
    const container = document.getElementById("SSS-Oct");
    data.forEach((student) => {
      const row = document.createElement("div");
      row.className = "row gx-2";
      row.innerHTML = `
        <div class="col-8">${student.name}</div>
        <div class="col-4">${student.section}</div>
      `;
      container.appendChild(row);
    });
  });

fetch("Certificates/json/SSS-Sep.json")
  .then((response) => response.json())
  .then((data) => {
    const container = document.getElementById("SSS-Sep");
    data.forEach((student) => {
      const row = document.createElement("div");
      row.className = "row gx-2";
      row.innerHTML = `
        <div class="col-8">${student.name}</div>
        <div class="col-4">${student.section}</div>
      `;
      container.appendChild(row);
    });
  });

fetch("Certificates/json/3rd_Q_Safecclass.json")
  .then((response) => response.json())
  .then((data) => {
    const container = document.getElementById("Sections");
    data.forEach((student) => {
      const row = document.createElement("div");
      row.className = "row gx-2";
      row.innerHTML = `
        <div class="col-8">${student.name}</div>
        <div class="col-4">${student.section}</div>
      `;
      container.appendChild(row);
    });
  });

fetch("Certificates/json/Search_3rd_Q_Safecclass.json")
  .then((response) => response.json())
  .then((data) => {
    const container = document.getElementById("Sections-Search");
    data.forEach((student) => {
      const row = document.createElement("div");
      row.className = "row gx-2";
      row.innerHTML = `
        <div class="col-8">${student.name}</div>
        <div class="col-4">${student.section}</div>
      `;
      container.appendChild(row);
    });
  });

fetch("Certificates/json/Info_Distribution.json")
  .then((response) => response.json())
  .then((data) => {
    const container = document.getElementById("Info_Distribution");
    data.forEach((student) => {
      const row = document.createElement("div");
      row.className = "row gx-2";
      row.innerHTML = `
        <div class="col-8">${student.name}</div>
        <div class="col-4">${student.section}</div>
      `;
      container.appendChild(row);
    });
  });

fetch("Certificates/json/Sep_Clean-Up.json")
  .then((response) => response.json())
  .then((data) => {
    const container1 = document.getElementById("Officer-sep-cleanup");
    const container2 = document.getElementById("material-sep-cleanup");
    const container3 = document.getElementById("solid-sep-cleanup");

    data.v1.forEach((student) => {
      const row = document.createElement("div");
      row.className = "row gx-2";
      row.innerHTML = `
        <div class="col-8">${student.name}</div>
        <div class="col-4">${student.section}</div>
      `;
      container1.appendChild(row);
    });

    data.v2.forEach((student) => {
      const row = document.createElement("div");
      row.className = "row gx-2";
      row.innerHTML = `
        <div class="col-8">${student.name}</div>
        <div class="col-4">${student.section}</div>
      `;
      container2.appendChild(row);
    });

    data.v3.forEach((student) => {
      const row = document.createElement("div");
      row.className = "row gx-2";
      row.innerHTML = `
        <div class="col-8">${student.name}</div>
        <div class="col-4">${student.section}</div>
      `;
      container3.appendChild(row);
    });
  });

fetch("Certificates/json/NSED-3rd.json")
  .then((response) => response.json())
  .then((data) => {
    const container1 = document.getElementById("SERT-nsed3");
    const container2 = document.getElementById("SERT-Member-nsed3");

    data.ver1.forEach((student) => {
      const row = document.createElement("div");
      row.className = "row gx-2";
      row.innerHTML = `
        <div class="col-8">${student.name}</div>
        <div class="col-4">${student.section}</div>
      `;
      container1.appendChild(row);
    });

    data.ver2.forEach((student) => {
      const row = document.createElement("div");
      row.className = "row gx-2";
      row.innerHTML = `
        <div class="col-8">${student.name}</div>
        <div class="col-4">${student.section}</div>
      `;
      container2.appendChild(row);
    });
  });

fetch("Certificates/json/Parent-Teacher_Conference.json")
  .then((response) => response.json())
  .then((data) => {
    const container = document.getElementById("SERT-pta");
    data.forEach((student) => {
      const row = document.createElement("div");
      row.className = "row gx-2";
      row.innerHTML = `
        <div class="col-8">${student.name}</div>
        <div class="col-4">${student.section}</div>
      `;
      container.appendChild(row);
    });
  });

fetch("Certificates/json/wins.json")
  .then((response) => response.json())
  .then((data) => {
    const container0 = document.getElementById("Clubs-wins");
    const container1 = document.getElementById("SERT-wins");
    const container2 = document.getElementById("SERT-Member-wins");
    const container3 = document.getElementById("SSLG-wins");
    const container4 = document.getElementById("Scouts-wins");

    data.Clubs.forEach((student) => {
      const row = document.createElement("div");
      row.className = "row gx-2";
      row.innerHTML = `
        <div class="col-12">${student.name}</div>
      `;
      container0.appendChild(row);
    });

    data.Officers.forEach((student) => {
      const row = document.createElement("div");
      row.className = "row gx-2";
      row.innerHTML = `
        <div class="col-8">${student.name}</div>
        <div class="col-4">${student.section}</div>
      `;
      container1.appendChild(row);
    });

    data.Members.forEach((student) => {
      const row = document.createElement("div");
      row.className = "row gx-2";
      row.innerHTML = `
        <div class="col-8">${student.name}</div>
        <div class="col-4">${student.section}</div>
      `;
      container2.appendChild(row);
    });

    data.SSLG.forEach((student) => {
      const row = document.createElement("div");
      row.className = "row gx-2";
      row.innerHTML = `
        <div class="col-8">${student.name}</div>
        <div class="col-4">${student.section}</div>
      `;
      container3.appendChild(row);
    });

    data.Scouts.forEach((student) => {
      const row = document.createElement("div");
      row.className = "row gx-2";
      row.innerHTML = `
        <div class="col-8">${student.name}</div>
        <div class="col-4">${student.section}</div>
      `;
      container4.appendChild(row);
    });
  });

fetch("Certificates/json/SSS-Aug.json")
  .then((response) => response.json())
  .then((data) => {
    const container = document.getElementById("SSS-Aug");
    data.forEach((student) => {
      const row = document.createElement("div");
      row.className = "row gx-2";
      row.innerHTML = `
        <div class="col-8">${student.name}</div>
        <div class="col-4">${student.section}</div>
      `;
      container.appendChild(row);
    });
  });

fetch("Certificates/json/August Clean-Up.json")
  .then((response) => response.json())
  .then((data) => {
    const container1 = document.getElementById("Officer-aug-cleanup");
    const container2 = document.getElementById("Member-aug-cleanup");

    data.v1.forEach((student) => {
      const row = document.createElement("div");
      row.className = "row gx-2";
      row.innerHTML = `
        <div class="col-8">${student.name}</div>
        <div class="col-4">${student.section}</div>
      `;
      container1.appendChild(row);
    });

    data.v2.forEach((student) => {
      const row = document.createElement("div");
      row.className = "row gx-2";
      row.innerHTML = `
        <div class="col-8">${student.name}</div>
        <div class="col-4">${student.section}</div>
      `;
      container2.appendChild(row);
    });
  });

fetch("Certificates/json/Back-To-School.json")
  .then((response) => response.json())
  .then((data) => {
    const container = document.getElementById("Back-To-School");
    data.forEach((student) => {
      const row = document.createElement("div");
      row.className = "row gx-2";
      row.innerHTML = `
        <div class="col-8">${student.name}</div>
        <div class="col-4">${student.section}</div>
      `;
      container.appendChild(row);
    });
  });

fetch("Certificates/json/July Clean-Up.json")
  .then((response) => response.json())
  .then((data) => {
    const container = document.getElementById("July_Clean-Up");
    data.forEach((student) => {
      const row = document.createElement("div");
      row.className = "row gx-2";
      row.innerHTML = `
        <div class="col-8">${student.name}</div>
        <div class="col-4">${student.section}</div>
      `;
      container.appendChild(row);
    });
  });

fetch("Certificates/json/SSS-July.json")
  .then((response) => response.json())
  .then((data) => {
    const container = document.getElementById("SSS-July");
    data.forEach((student) => {
      const row = document.createElement("div");
      row.className = "row gx-2";
      row.innerHTML = `
        <div class="col-8">${student.name}</div>
        <div class="col-4">${student.section}</div>
      `;
      container.appendChild(row);
    });
  });

fetch("Certificates/json/Project_ALAGA.json")
  .then((response) => response.json())
  .then((data) => {
    const container = document.getElementById("Project_ALAGA");
    data.forEach((student) => {
      const row = document.createElement("div");
      row.className = "row gx-2";
      row.innerHTML = `
        <div class="col-8">${student.name}</div>
        <div class="col-4">${student.section}</div>
      `;
      container.appendChild(row);
    });
  });

fetch("Certificates/json/Symposium_AP.json")
  .then((response) => response.json())
  .then((data) => {
    const container1 = document.getElementById("Symposium_AP");
    const container2 = document.getElementById("Member1");
    const container3 = document.getElementById("Member2");

    data.Symposium_AP.forEach((student) => {
      const row = document.createElement("div");
      row.className = "row gx-2";
      row.innerHTML = `
        <div class="col-8">${student.name}</div>
        <div class="col-4">${student.section}</div>
      `;
      container1.appendChild(row);
    });

    data.ver1.forEach((student) => {
      const row = document.createElement("div");
      row.className = "row gx-2";
      row.innerHTML = `
        <div class="col-8">${student.name}</div>
        <div class="col-4">${student.section}</div>
      `;
      container2.appendChild(row);
    });

    data.ver2.forEach((student) => {
      const row = document.createElement("div");
      row.className = "row gx-2";
      row.innerHTML = `
        <div class="col-8">${student.name}</div>
        <div class="col-4">${student.section}</div>
      `;
      container3.appendChild(row);
    });
  });

fetch("Certificates/json/Gawad_Kalasag.json")
  .then((response) => response.json())
  .then((data) => {
    const container0 = document.getElementById("Clubs-kalasag");
    const container1 = document.getElementById("SERT-kalasag");
    const container2 = document.getElementById("SERT-Member-kalasag");
    const container3 = document.getElementById("SSLG-kalasag");
    const container4 = document.getElementById("BoyScout-kalasag");

    data.Clubs.forEach((student) => {
      const row = document.createElement("div");
      row.className = "row gx-2";
      row.innerHTML = `
        <div class="col-12">${student.name}</div>
      `;
      container0.appendChild(row);
    });

    data.Officers.forEach((student) => {
      const row = document.createElement("div");
      row.className = "row gx-2";
      row.innerHTML = `
        <div class="col-8">${student.name}</div>
        <div class="col-4">${student.section}</div>
      `;
      container1.appendChild(row);
    });

    data.Members.forEach((student) => {
      const row = document.createElement("div");
      row.className = "row gx-2";
      row.innerHTML = `
        <div class="col-8">${student.name}</div>
        <div class="col-4">${student.section}</div>
      `;
      container2.appendChild(row);
    });

    data.SSLG.forEach((student) => {
      const row = document.createElement("div");
      row.className = "row gx-2";
      row.innerHTML = `
        <div class="col-8">${student.name}</div>
        <div class="col-4">${student.section}</div>
      `;
      container3.appendChild(row);
    });

    data.BoyScout.forEach((student) => {
      const row = document.createElement("div");
      row.className = "row gx-2";
      row.innerHTML = `
        <div class="col-8">${student.name}</div>
        <div class="col-4">${student.section}</div>
      `;
      container4.appendChild(row);
    });
  });
