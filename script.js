let button = document.getElementById("sbtn");

const calculate = () => {

    let birthDate = document.getElementById("Day").value;
    let birthMonth = document.getElementById("month").value;
    let birthYear = document.getElementById("year").value;

    let days = parseInt(birthDate);
    let message = document.getElementById("error-message");
    let emptytext = document.getElementById("empty");

    if (days < 1 || days > 31) {
        message.style.display = "block";
    } else {
        message.style.display = "none";
    }

    let month = parseInt(birthMonth);
    let message1 = document.getElementById("error-message1");
    let emptyText1 = document.getElementById("empty1");

    if (month < 1 || month > 12) {
        message1.style.display = "block";
    } else {
        message1.style.display = "none";
    }

    let year = parseInt(birthYear);
    let message2 = document.getElementById("error-message2");
    let emptytext2 = document.getElementById("empty2");

    let fullYear = new Date().getFullYear();

    if (year > fullYear) {
        message2.style.display = "block";
    } else {
        message2.style.display = "none";
    }

    if (birthDate.trim() === "") {
        emptytext.style.display = "block";
    }

    if (birthMonth.trim() === "") {
        emptyText1.style.display = "block";
    }


    if (birthYear.trim() === "") {
        emptytext2.style.display = "block";
    }


    let currentDate = new Date().getDate();
    let currentMonth = new Date().getMonth() + 1;
    let currentYear = new Date().getFullYear();

    // let userBirthDate = ( currentDate - days );
    // console.log(userBirthDate);

    // let userBirthMonth = (month - currentMonth);
    // console.log(userBirthMonth);

    // let userBirthYear = year - currentYear;
    // console.log(userBirthYear);


    let userBirthDate;
    let userBirthMonth;
    let userBirthYear;

    if (currentMonth > month || (currentMonth === month && currentDate >= days)) {
        userBirthYear = currentYear - year;
        userBirthMonth = currentMonth - month;
        userBirthDate = currentDate - days;
    } else {
        currentYear -= 1;
        currentMonth += 12;
        let daysInPreviousMonth = new Date(currentYear, currentMonth - 2, 0).getDate();
        currentDate += daysInPreviousMonth;

        userBirthYear = currentYear - year;
        userBirthMonth = currentMonth - month;
        userBirthDate = currentDate - days;
    }


    let firstMessage = document.getElementById("fmessage");
    firstMessage.innerText = `${userBirthYear}`;

    let secondMessage = document.getElementById("smessage");

    secondMessage.innerText = `${userBirthMonth}`;

    let thirdMessage = document.getElementById("tmessage");
    thirdMessage.innerText = `${userBirthDate}`;

}

button.addEventListener("click", calculate);




