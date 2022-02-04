$(document).ready(function() {
  if (typeof InsalesThemeSettings != 'undefined') {
    if (InsalesThemeSettings.mask_use == '1') {
      $('[name="phone"]').not('[data-use-mask] #client_phone, [data-use-mask] #shipping_address_phone').inputmask('phone');
      $('[name="client[phone]"]').not('[action="/client_account/contacts"] [name="client[phone]"], [data-use-mask] #client_phone, [data-use-mask] #shipping_address_phone').inputmask('phone');
      
      $('[name="phone"], [name="client[phone]"]').each(function(index, el) {
        if ($(this).val().length == 0) {
          $(this).val(InsalesThemeSettings.mask_code);
        }
      });
    }
  }
});