export default function SetEventDays(): void {

  const eventStartDay: Number = 1
  const eventEndDay: Number = 3
  const eventTitle: String = "Holiday"

  function handleEventClick(){
    console.log("click")
    window.location.href = "/calendar/1"
    console.log(document.URL)
  }

  const setEventDays = 
  [...Array(6).keys()].map((row) => {
    [...Array(7).keys()].map((col)=>{
      const calendarDay = document.getElementById(`col-${col}-row-${row}`)
      if (parseInt(calendarDay.innerText) >= eventStartDay && parseInt(calendarDay.innerText) <= eventEndDay) {

        calendarDay.style.backgroundColor = "rgba(255, 0, 0, 0.4)"
        const newPElement = document.createElement("p");
        const addTextToPElement = document.createTextNode(`Event Name: ${eventTitle}`);
        newPElement.appendChild(addTextToPElement)
        calendarDay.appendChild(newPElement)

        calendarDay.style.cursor="pointer"

        calendarDay.addEventListener("click", handleEventClick)
      }
    })
  })
}