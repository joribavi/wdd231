const getString = window.location.search;
//console.log(getString);
const myInfo = new URLSearchParams(getString);
console.log(myInfo);
//console.log(myInfo.get('first'));

document.querySelector('#results').innerHTML = `<p><strong>Your Name:</strong> ${myInfo.get('first')} ${myInfo.get('last')} </p>
<p><strong>Organizational title:</strong> ${myInfo.get('Organizational title')} </p >
<p><strong>Your Email Address:</strong>${myInfo.get('email')} </p>
<p><strong>Your Phone Number:</strong> ${myInfo.get('phone')} </p>
<p><strong>Business/Organization's Name:</strong> ${myInfo.get('Organization')} </p>
<p><strong>Your Membership Level:</strong> ${myInfo.get('Membership_level')} </p>
<p><strong>Business Description:</strong> ${myInfo.get('Business description')}</p>


    `
