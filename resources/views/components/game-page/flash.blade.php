<script type="text/javascript">
    (function() {
        var flashvars = {
            sw1: "",
            sw2: "",
            sw3: "",
            sw4: "",
            u: "{{ auth()->user()->name }}",
            p: "{{ auth()->user()->password }}",
            sw5: "0",
            lang: "e",
            locale: "es_ES",
            ver: "4828183825",
        };
        var params = {
            play: 'true',
            loop: 'false',
            quality: 'high',
            allowscriptaccess: 'always',
            allowFullScreen: 'true',
            bgcolor: '#0099cc',
        };
        var attributes = {
            id: 'flash_boombang'
        };
        swfobject.embedSWF(
            "{{ asset('static/flash_esp/BoomBangLoader.swf') }}",
            'flash_boombang',
            '1013px',
            '658px',
            '9.0.115',
            './http://boombang.tv/swfobject/expressInstall.swf/',
            flashvars, params, attributes
        );
        window.user_id = "{{ auth()->user()->id }}";
    })();
</script>
