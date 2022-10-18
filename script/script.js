let monthList = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december"
  ];
  /*======placeMonth========== */
  let placeMonth = document.querySelector("#inputMonth");
  let mLength = monthList.length;
  
  for (var mNumber = 0; mNumber < mLength; mNumber++) {
    var createOption = document.createElement("option");
  
    createOption.setAttribute("value", `${monthList[mNumber]}`);
  
    createOption.innerHTML = `${monthList[mNumber]}`;
  
    placeMonth.appendChild(createOption);
  }
  /*======placeMonth========== */
  
  /*======event========== */
  let form = document.querySelector("#click");
  form.addEventListener("click", (event) => {
    let inputMonth = document.querySelector("#inputMonth").value;
    let inputYear = document.querySelector("#inputYear").value;
  
    addToFun(inputMonth, inputYear);
  
    console.log(`selectedMonth:${inputMonth} & selectedYear:${inputYear}`);
  });
  /*======event========== */
  
  /*======function========== */
  function addToFun(month, year) {
    let monthFind = monthList.findIndex((value) => month === value);
    let yearNumber = Number(year);
    let monthNumber = monthFind + 1;
    let dateNumber = 1;
  
    let merge = [].concat(yearNumber, monthNumber, dateNumber);
    let convert = merge.join("-");
  
    let startPoint = new Date(convert).getDay();
    let lastDay = new Date(yearNumber, monthNumber, 0).getDate();
  
    renderTask(lastDay, monthFind, startPoint,yearNumber);
    console.log(`start:${startPoint},lastDay:${lastDay}`);
  }
  /*======function========== */
  
  /*======function========== */
  function renderTask(lastDay, month, starting,year) {
    let monthName = monthList[month];
    let lastNumber = lastDay;
  
    let week = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  
    let monthPlace = document.querySelector(".monthName");
    monthPlace.innerHTML = monthName + ',' + year;
  
    var weekLength = week.length;
    var weekPlace = document.querySelector(".week");
  
    var dateContainer = document.querySelector(".support");
    /*week name */
    for (var wTitle = 0; wTitle < weekLength; wTitle++) {
      var weekTitle = document.createElement("div");
      weekTitle.setAttribute("class", "boxer");
      weekTitle.innerHTML = `${week[wTitle]}`;
  
      weekPlace.appendChild(weekTitle);
    }
    /*week name */
    /*date-list*/
    for (var i = 0; i <= 5; i++) {
      var dateList = document.createElement("div");
      dateList.setAttribute("class", "dateList");
      for (var j = 1; j <= 7; j++) {
        var datePlace = document.createElement("div");
        datePlace.setAttribute("class", "boxerList");
  
        var contribute = 7 * i + j - starting;
        datePlace.innerHTML = contribute;
  
        if (contribute > lastNumber) {
          break;
        }
        if (contribute < 0) {
          datePlace.innerHTML = "";
        }
  
        dateList.appendChild(datePlace);
  
        dateContainer.appendChild(dateList);
      }
    }
    /*date-list */
  }
  /*======function========== */
  