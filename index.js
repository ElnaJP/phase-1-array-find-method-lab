const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
  ]
function superbowlWin(record) {
    let yearOfSuperBowlWin;
    record.find(function(element,index,record)
    {

        if(record[index].result === "W")
        {
            yearOfSuperBowlWin = record[index].year
            console.log(yearOfSuperBowlWin)
            return yearOfSuperBowlWin
        }
    })
    return yearOfSuperBowlWin
  }
console.log(superbowlWin(record))


    