jQuery(document).ready(function () {
  jQuery('.nav-tabs li').click(function () {
    jQuery('.nav-tabs li').removeClass('active');
    jQuery(this).addClass('active');
    jQuery('.account-tools').css({'display': 'none'});
    jQuery('#'+jQuery(this).data('target')).css({'display': 'block'});
    console.log('clicked ' + jQuery(this).data('target'));  
  });
});