/*****************************************************************************/
/* TodoPay: Event Handlers and Helpers */
/*****************************************************************************/
Template.TodoPay.events({
    'submit #paypal-payment-form': function(evt, tmp){
        evt.preventDefault();


        var card_data = Template.paypalCreditCardForm.card_data();

        //Probably a good idea to disable the submit button here to prevent multiple submissions.

        Meteor.Paypal.purchase(card_data, {total: '100.50', currency: 'USD'}, function(err, results){
            if (err) console.error(err);
            else console.log(results);
        });
    }
});

/*****************************************************************************/
/* TodoPay: Lifecycle Hooks */
/*****************************************************************************/
Template.TodoPay.created = function () {
};

Template.TodoPay.rendered = function () {
};

Template.TodoPay.destroyed = function () {
};
