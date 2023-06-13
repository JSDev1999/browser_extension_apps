async function fetchData() {
  const res = await fetch("https://api.coronavirus.data.gov.uk/v1/data");
  const record = await res.json();
  console.log(record);
  if (record && record?.length && record?.data?.length) {
    const tableTr = document.getElementById("table_row");

    record.data.forEach((item) => {
      const tr = document.createElement("tr");

      const dateTd = document.createElement("td");
      dateTd.textContent = item.date;
      tr.appendChild(dateTd);

      const areaNameTd = document.createElement("td");
      areaNameTd.textContent = item.areaName;
      tr.appendChild(areaNameTd);

      const latestByTd = document.createElement("td");
      latestByTd.textContent = item.latestBy;
      tr.appendChild(latestByTd);

      const deathNewTd = document.createElement("td");
      deathNewTd.textContent = item.deathNew;
      tr.appendChild(deathNewTd);

      tableTr.appendChild(tr);
    });
  }
}

fetchData();
