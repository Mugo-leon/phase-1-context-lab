/* Your Code Here */
const allWagesFor = function () {
  const eligibleDates = this.timeInEvents.map(function (e) {
      return e.date
  })

  const payable = eligibleDates.reduce(function (memo, d) {
      return memo + wagesEarnedOnDate.call(this, d)
  }.bind(this), 0) 

  return payable
}

function createEmployeeRecord(data) {
  return {
    firstName: data[0],
    familyName: data[1],
    title: data[2],
    payPerHour: data[3],
    timeInEvents: [],
    timeOutEvents: []
  };
}

function createEmployeeRecords(data) {
  return data.map(createEmployeeRecord);
}

function createTimeInEvent(dateStamp) {
  const [date, hour] = dateStamp.split(' ');
  this.timeInEvents.push({
    type: 'TimeIn',
    date: date,
    hour: parseInt(hour, 10)
  });
  return this;
}

function createTimeOutEvent(dateStamp) {
  const [date, hour] = dateStamp.split(' ');
  this.timeOutEvents.push({
    type: 'TimeOut',
    date: date,
    hour: parseInt(hour, 10)
  });
  return this;
}

function hoursWorkedOnDate(date) {
  const timeIn = this.timeInEvents.find(event => event.date === date);
  const timeOut = this.timeOutEvents.find(event => event.date === date);
  return (timeOut.hour - timeIn.hour) / 100;
}

function wagesEarnedOnDate(date) {
  return hoursWorkedOnDate.call(this, date) * this.payPerHour;
}


function calculatePayroll(employees) {
  return employees.reduce((total, employee) => total + allWagesFor.call(employee), 0);
}

function findEmployeeByFirstName(employees, firstName) {
  return employees.find(employee => employee.firstName === firstName);
}
// Define the createEmployeeRecord function
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */


