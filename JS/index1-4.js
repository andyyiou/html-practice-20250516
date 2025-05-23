// const aArray = [6, 1, 2, 3, 4, 5];
// aArray.sort((a, b) => a - b);
// console.log(aArray);
// aArray.sort((a, b) => b - a);
// console.log(aArray);

// const aString = "1,2,3,4,5,6";
// const aStringArray = aString.split(",");   
// console.log(aStringArray);

// const bString = aArray.join("-");
//  console.log(new Date(2025, 4, 0).getDate());

// const cMonth = new Date(y ,m, 0).getDate(); 
//取得可以下拉的年份物件
const currentYear = new Date().getFullYear();
//console.log(currentYear);
const startYear = currentYear - 100;
const endYear = currentYear + 25;
const yearSelect = document.getElementById('year');
for (let year = startYear; year <= endYear; year++) {
    const option = document.createElement('option');
    option.value = year;
    option.textContent = year;
    yearSelect.appendChild(option);
}

//取得可以下拉的月份物件
const monthSelect = document.createElement('select');
            monthSelect.id = 'month';
            for (let month = 1; month <= 12; month++) {
                const option = document.createElement('option');
                option.value = month;
                option.textContent = month;
                monthSelect.appendChild(option);
            }
            document.getElementById('month').replaceWith(monthSelect);
//取得可以下拉的日期物件
const daySelect = document.createElement('select');
            daySelect.id = 'day';
            const updateDays = () => {
                const year = parseInt(document.getElementById('year').value);
                const month = parseInt(document.getElementById('month').value);
                const daysInMonth = new Date(year, month, 0).getDate();
                daySelect.innerHTML = '';
                for (let day = 1; day <= daysInMonth; day++) {
                    const option = document.createElement('option');
                    option.value = day;
                    option.textContent = day;
                    daySelect.appendChild(option);
                }
            };
            document.getElementById('year').addEventListener('change', updateDays);
            document.getElementById('month').addEventListener('change', updateDays);
            updateDays();
            document.getElementById('day').replaceWith(daySelect);

            
            document.getElementById('year').value = currentYear;
            document.getElementById('month').value = new Date().getMonth() + 1;
            document.getElementById('day').value = new Date().getDate();           

//產生日曆
const calendarDiv = document.getElementById('calendar');

const renderCalendar = () => {
    const currentYear1 = new Date().getFullYear();
    // Get the selected year and month
    const year = parseInt(document.getElementById('year').value);
    
    const month = parseInt(document.getElementById('month').value) - 1;
    const day1 = parseInt(document.getElementById('day').value);
    //console.log(year, month);
    // Get the first day of the month and the number of days in the month
    const firstDay = new Date(year, month, 1).getDay();
    // get the number of days in the month
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    calendarDiv.innerHTML = ''; // Clear previous calendar
    // Create the calendar table
    const table = document.createElement('table');
    // Create the header row 
    const headerRow = document.createElement('tr');
    const daysOfWeek = ['日', '一', '二', '三', '四', '五', '六'];
    // Create the header cells
    daysOfWeek.forEach(day => {
        const th = document.createElement('th');
        th.textContent = day;
        headerRow.appendChild(th);
    });
    // Append the header row to the table
    table.appendChild(headerRow);
    // Create the rows for the days of the month
    let row = document.createElement('tr');
    for (let i = 0; i < firstDay; i++) {
        const emptyCell = document.createElement('td');
        row.appendChild(emptyCell);
    }
    //console.log ('daysInMonth' + daysInMonth);
    // Fill in the days of the month
    for (let day = 1; day <= daysInMonth; day++) {
        if ((firstDay + day - 1) % 7 === 0 && day !== 1) {
            table.appendChild(row);
            row = document.createElement('tr');
        }
        
        //console.log(year, month, day);
        const cell = document.createElement('td');
        cell.textContent = day;
        if (day === day1 ) {
           cell.className= 'HighlightToday'; // Highlight today's date
        
        }
        row.appendChild(cell);

    }
    // Fill in empty cells for the last row
    table.appendChild(row);
    // Append the last row to the table
    calendarDiv.appendChild(table);
};


//

document.getElementById('year').addEventListener('change', renderCalendar);
document.getElementById('month').addEventListener('change', renderCalendar);
document.getElementById('day').addEventListener('change', renderCalendar);
//console.log(currentYear);
renderCalendar();