const Utils = require('./Utils')
const Login = {
    pageEl:{
        selector: "#login-page"
    },
    loginFormEl:{
        selector: "#login-form"
    },
    init(){
        if (!Utils.checkSection(this.pageEl.selector)) return false;
        this.setListeners();
    },
    setListeners(){
        $(document).on('submit', this.loginFormEl.selector, (e) => this.loginHandler(e));
    },
    loginHandler(e){
        e.preventDefault();
        const form = $(e.currentTarget);

        $.ajax({
            url: form.data('url'),
            method: "POST",
            data: form.serialize(),
            success:function(data){
                if (data.success){
                    location.href = form.data('next-route');
                }
            }
        })
    }
};

module.exports = Login;