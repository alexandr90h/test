const account = {
    owner: 'Mango',
    balance: 24000,
    discount: 0.1,
    orders: ['order-1', 'order-2', 'order-3'],
    changeDiscount(value) {
        discount = value; // Write code in this line
    },
    showOrders() {
        return orders; // Write code in this line
    },
    addOrder(cost, order) {
        balance -= cost; // Write code in this line
        orders.push(order); // Write code in this line
    },
};
const copyAccount = Object.assign({}, account);
copyAccount.orders = [...account.orders];
// копируем для автотестов ссылочные типы

/*
account.changeDiscount(0.15);
//console.log(account.discount); // 0.15

//console.log(account.showOrders());
// ['order-1', 'order-2', 'order-3']

account.addOrder(5000, 'order-4');
//console.log(account.balance); // 19000

//console.log(account.showOrders());
// ['order-1', 'order-2', 'order-3', 'order-4']
*/