//require('jquery-ui');

const $datepicker = $('.datepicker-container__input');
var disabledDates = [0, 6];

let datepicker = $datepicker.datepicker({
    showOn: "button",
    autoClose: true,
    classes: 'datepicker__calendar',
    position: 'bottom right',
    buttonImage: 'assets/img/icons8-calendar-48.png',
    buttonText: "Select date",
    dateFormat: 'dd.mm.yy',
    onRenderCell: function (date, cellType) {
      if (cellType == 'day') {
        let day = date.getDay();
        let isDisabled = disabledDates.indexOf(day) != -1;
        return {
          disabled: isDisabled
        }
      }
    },
    onSelect: function(formattedDate, date, inst) {
      if(date) {
        //alert(date);
      }
    }
  }).data('datepicker');

