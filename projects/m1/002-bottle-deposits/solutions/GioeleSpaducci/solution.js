let smallContainers = prompt('how many containers under 1l?','');
let bigContainers = prompt('how many containers over 1l?','');
let refund = smallContainers * 0.1 + bigContainers * 0.25;
alert(`you wll be refunded $${refund.toFixed(2)}`)