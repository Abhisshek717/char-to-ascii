function submitForm() {
    // Get form input values
    var name = document.getElementById("name").value;
  
    // Store values in an object
    var formData = {
      name: name,
    };

    function asciiValue(name) {
        var result = "";
      
        // Iterate over each character in the name string
        for (var i = 0; i < name.length; i++) {
          // Get the ASCII value for the current character and append it to the result string
          result += name.charCodeAt(i) + " ";
        }
      
        // Return the result string
        return result;
      }
  
    // Do something with the form data
    var outputElement = document.getElementById("output");
    outputElement.textContent = asciiValue(formData.name);
  }