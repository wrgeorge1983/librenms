$(document).ready(function() {
    $("[name='override_config']").bootstrapSwitch('offColor','danger');
    $('input[name="override_config"]').on('switchChange.bootstrapSwitch',  function(event, state) {
        event.preventDefault();
        var $this = $(this);
        var attrib = $this.data('attrib');
        var device_id = $this.data('device_id');
        $.ajax({
            type: 'POST',
            url: 'ajax_form.php',
            data: { type: 'override-config', device_id: device_id, attrib: attrib, state: state },
            dataType: 'json',
            success: function(data) {
                if (data.status == 'ok') {
                    toastr.success(data.message);
                }
                else {
                    toastr.error(data.message);
                }
            },
            error: function() {
                toastr.error('Could not set this override');
            }
        });
    });
});