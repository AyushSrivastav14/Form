// Global Variables
var countryData;
var disableSubmit = false;

// Main Functions - initial load
GetStateAndCountryData();
document.getElementById("stateDdl").disabled = true;



// Others
function GetStateAndCountryData() {

    $.ajax({
        type: "GET",
        url: "https://raw.githubusercontent.com/stefanbinder/countries-states/master/countries.json",

        dataType: "json",
        success: function (data) {
            var datavalue = data;
            countryData = datavalue;
            var selectCountry = $("#countryDdl");
            $.each(datavalue, function (i,dt)
            {
                selectCountry.append("<option value='" + dt.name + "'>" + dt.name + "</option>")
            });
        },
        error: function (xhr) {
            alert(xhr.responseText);
        }
    });
}


function SetStateDdl(selectedVal){
    var selectState = $("#stateDdl");
    document.getElementById("stateDdl").disabled = true;
    selectState.empty();
    selectState.append('<option value="0" selected="true" disabled="true">--Select State--</option>');
    if(countryData != undefined){
        var selectedCountry = countryData.find(x=> x.name == selectedVal);
        if(selectedCountry != undefined){
            $.each(selectedCountry.states, function (i,dt)
            {
                selectState.append("<option value='" + dt.name + "'>" + dt.name + "</option>")
            });
        }
    }
    document.getElementById("stateDdl").disabled = false;
}

function ValidateData(){
    var name = document.getElementById("nameInp");
    var email = document.getElementById("email");
    var cNumber = document.getElementById("cNumber");
    var dob = document.getElementById("dtInp");
    var countryDdl = document.getElementById("countryDdl");
    var stateDdl = document.getElementById("stateDdl");
    parent.Validatedata(name,email,cNumber,dob,countryDdl,stateDdl);
}
