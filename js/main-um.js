$(document).ready(function() {

    // change old price
    // changeSale('header, footer, .check-sale', '.new-price', '.old-price', '', 60);

    // Скидка
    function changeSale(container, newPrice, oldPrice, sale, saleNumber) {
        var container = container;

        $(newPrice).each(function() {
            var price = parseInt($(this).text()),
                percent = $(this).closest(container).find(sale).text().replace(/[^0-9]/gim, ''),
                currency = $(this).text().replace(/[0-9]/g, '');

            if (sale.length == '') {
                percent = saleNumber;
            }

            price = Math.ceil((price * 100) / (100 - percent));
            $(this).closest(container).find(oldPrice).text(price + " " + currency);

        });
    }

    $("form").submit(function(event) {
        var size = $(this).find('.selectric .label').text();

        $(this).find('input[name=comments]').val(size);
    });
});