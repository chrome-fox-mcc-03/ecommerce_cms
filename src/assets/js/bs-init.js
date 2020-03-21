/* eslint-disable no-undef */
/* eslint-disable space-before-blocks */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
// eslint-disable-next-line no-undef
$(document).ready(function (){
  $('[data-bs-chart]').each(function (index, elem) {
    this.chart = new Chart($(elem), $(elem).data('bs-chart'));
  });
});
