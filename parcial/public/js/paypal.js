paypal.Button.render({
    env: 'sandbox', // Or 'sandbox',

    commit: true, // Show a 'Pay Now' button

    style: {
        color: 'gold',
        size: 'small'
    },

    client: {
        sandbox:    'ARN0jke6aw_-q-rWoYB6c70tBRDkjdwpi75OU6BA1M1k8_CXPsRNyM-lHYZddV1RWxxlUCGhPZZrf34i',
        production: ''
    },

    payment: function (data, actions) {
        return actions.payment.create({
            payment: {
                transactions: [
                    {
                        amount: { total: 100, currency: 'MXN' }
                    }
                ]
            }
        });
    },

    onAuthorize: function (data, actions) {
        return actions.payment.execute().then(function(payment) {

            // The payment is complete!
            // You can now show a confirmation message to the customer
        });
    },

    onCancel: function (data, actions) {
        /* 
         * Buyer cancelled the payment 
         */
    },

    onError: function (err) {
        /* 
         * An error occurred during the transaction 
         */
    }
}, '#paypal-button');