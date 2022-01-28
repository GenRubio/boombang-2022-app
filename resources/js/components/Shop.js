const Shop = {
    shopButtonEl:{
        selector: ".shop-button-js"
    },
    shopModalEl:{
        selector: ".shop-modal-js",
        closeButton: ".shop-modal-close-js"
    },
    init(){
        this.loadTooltip();
        this.setListeners();
    },
    setListeners(){
        $(document).on('click', this.shopButtonEl.selector, () => this.openShopModalHandler());
        $(document).on('click', this.shopModalEl.closeButton, () => this.closeShopModalHandler());
    },
    loadTooltip(){
        $('[data-toggle="tooltip"]').tooltip();
    },
    closeShopModalHandler(){
        $(this.shopModalEl.selector).addClass('d-none');
    },
    openShopModalHandler(){
        $(this.shopModalEl.selector).removeClass('d-none');
    },
    showShopButtonHandler(){
        $(this.shopButtonEl.selector).removeClass('d-none');
    },
    removeShopButtonHandler(){
        $(this.shopButtonEl.selector).addClass('d-none');
        $(this.shopModalEl.selector).addClass('d-none');
    }
}
module.exports = Shop;