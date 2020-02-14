function handleForm() {
  fields = {
    name: document.getElementById("name").value,
    address: document.getElementById("address").value,
    email: document.getElementById("email").value,
    service: document.getElementById("select-services").value,
    phone: document.getElementById("phone").value,
    members: document.getElementById("select-member").value,
    startDate: document.getElementById("start-date-input").value,
    startTime: document.getElementById("start-time-input").value,
    message: document.getElementById("message").value
  };

  services = [
    [`${fields.service}`, 10000],
    [`${fields.members} members`, parseInt(fields.members) * 1000]
  ];

  const table_body = document.getElementById("table_body");

  table_body.innerHTML = renderTableInvoice(services);

  console.log(fields);
  const element = document.getElementById("invoice");
  element.style = "display:block";
  html2pdf()
    .from(element)
    .save();
}

function renderTableInvoice(services) {
  output = "";

  for (service of services) {
    output += `<tr><td>${service[0]}</td><td>${service[1]}$</td></tr>`;
  }
  output += `<tr><td><b>TOTAL</td><td>${calculateTotal(services)}$</b></td></tr>`;
  return output;
}

function calculateTotal(services) {
  total = 0;
  for (service of services) {
    total += service[1];
  }
  return total;
}
