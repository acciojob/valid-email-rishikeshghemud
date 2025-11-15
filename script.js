function validEmail(str) {
  //your JS code here.
	if (!str) return false; // handle empty string
	
    const local = "[A-Za-z0-9]+(?:[.-][A-Za-z0-9]+)*";

    const domain = "[A-Za-z0-9]+(?:[.-][A-Za-z0-9]+)*";

    const extension = "(?:\\.[A-Za-z]{2,3})+";

    const regex = new RegExp(`^${local}@${domain}${extension}$`);

    return regex.test(str);
}

// Do not change the code below.
const str = prompt("Enter an email address."); 
alert(validEmail(str));
