//this function will find today's date
function calendar(){
    var day=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var month=['January','February','March','April','May','June','July','August','September','October','Novemeber','December'];
    var d=new Date();
    setText('calendar-day',day[d.getDay()]);
    setText('calendar-date',d.getDate());
    setText('calendar-month-year',month[d.getMonth()]+' '+(1900+d.getYear()));

};

//this function will set the text value of<p> tags
function setText(id,val){
if(val<10){
    val='0'+val;
}
document.getElementById(id).innerHTML=val;
};
window.onload=calendar;
