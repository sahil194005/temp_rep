
function display() {
  var form = document.getElementById("myform")
  var name = form.elements["name"].value
  var email = form.elements["email"].value
  var phone = form.elements["phone"].value
  var datetime = form.elements["datetime"].value

  console.log("Name: " + name)
  console.log("Email: " + email)
  console.log("Phone: " + phone)
  console.log("Datetime: " + datetime)
}
