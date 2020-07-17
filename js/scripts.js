function MakeArray(n) {
    this.length = n;
    for (var i = 1; i <= n; i++) {
        this[i] = 0;
    }
}
days = new MakeArray(7);
days[0] = "Sunday";
days[1] = "Monday";
days[2] = "Tuesday";
days[3] = "Wednesday";
days[4] = "Thursday";
days[5] = "Friday";
days[6] = "Friday";


akanFemale = new MakeArray(7);
akanFemale[0] = "Akosua"
akanFemale[1] = "Adwoa"
akanFemale[2] = "Abenaa"
akanFemale[3] = "Akua"
akanFemale[4] = "Yaa"
akanFemale[5] = "Afua"
akanFemale[6] = "Ama"

akanMale = new MakeArray(7);
akanMale[0] = "Kwasi"
akanMale[1] = "Kwadwo"
akanMale[2] = "Kwabena"
akanMale[3] = "Kwaku"
akanMale[4] = "Yaw"
akanMale[5] = "Kofi"
akanMale[6] = "Kwame"

//Day of Week Function
function compute(form) {
    var val1 = parseInt(form.day.value, 10)
    if ((val1 < 0) && (val1 > 31)) {
        alert("Day is Invalid")
    }
    var val2 = parseInt(form.month.value, 10)
    if ((val2 < 0) && (val2 > 12)) {
        alert("Month is Invalid")
    }
    var val2x = parseInt(form.month.value, 10)
    var val3 = parseInt(form.year.value)
    if (val3 < 1800) {
        alert("You're not that old!")
    }
    function required() {
        var emp = document.forms["form"]["text"]
    }
    var val4 = parseInt(((val2x + 1) * 3) / 5, 10)
    var val5 = parseInt(val3 / 4, 10)
    var val6 = parseInt(val3 / 100, 10)
    var val7 = parseInt(val3 / 400, 10)
    var val8 = val1 + (val2x * 2) + val4 + val3 + val5 - val6 + val7 + 2
    var val9 = parseInt(val8 / 7, 10)
    var val0 = val8 - (val9 * 7)
    form.result2.value = days[val0]
    if (document.getElementById('g2').checked) {
        form.result3.value = akanFemale[val0]
    } else if (document.getElementById('g1').checked) {
        form.result3.value = akanMale[val0]
    }
    document.write(new Date().getFullYear());
}
