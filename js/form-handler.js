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
        message: document.getElementById("message").value,
    }
    console.log(fields);
}