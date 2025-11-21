const getString = window.location.search;
console.log(getString);

const myInfo = new URLSearchParams(getString); // can also put "window.location.search" as the perameter instead of "getString" to get the same result, but with fewer lines of code.
console.log(myInfo);

document.querySelector('#resultes').innerHTML = `
<p>Appointment for ${myInfo.get('first')} ${myInfo.get('last')}</p>
<p>Proxy ${myInfo.get('ordinance')} on ${myInfo.get('date')} in the ${myInfo.get('location')} Temple</p>
<p>Your Phone: ${myInfo.get('phone')}</p>
<p>Your email: ${myInfo.get('email')}</p>`