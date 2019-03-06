// this is an example of improting data from JSON
import orders from '../data/orders.json';
import user from '../data/users.json';
import companies from '../data/companies.json';

export default (function () {
    const TableHeader = [
        "Transaction ID",
        "User Info",
        "Order Date",
        "Order Amount",
        "Card Number",
        "Card Type",
        "Location"
    ];

    var createTr = function (ArrayTextMass, index) {
        let tr = document.createElement('tr');
        tr.setAttribute("id", index);
        for (let i=0; i < ArrayTextMass.length; i++){
            tr.appendChild(createTd(ArrayTextMass[i].toString()));
        }
        return tr;
    }

    var createTd = function (TextNode) {
        let td = document.createElement('td');
        td.appendChild(document.createTextNode(TextNode));
        return td;
    }

    var body = document.getElementById("app");
    var tbl = document.createElement('table');
    tbl.style.width = '100%';
    tbl.setAttribute('border', '1');

    var thd = document.createElement('thead');
    var thr = document.createElement('tr');
    for (let i=0; i < TableHeader.length; i++) {
        var th = document.createElement('th');
        th.appendChild(document.createTextNode(TableHeader[i].toString()));
        thr.appendChild(th);
    }
    thd.appendChild(thr);
    tbl.appendChild(thd);

    var tbd = document.createElement('tbody');





    for(let i=0; i < orders.length; i++) {
        var mas = [];
        let cardNumber = orders[i]["card_number"].toString();
        let tempStarString="";
        for(let j=0; j<orders[i]["card_number"].toString().length-6; j++) {
            tempStarString = tempStarString + "*";
        }
        cardNumber = cardNumber.substr(0, 2) + tempStarString + cardNumber.substr(-4);
        let  currentDate = new Date;
        currentDate.setTime(orders[i]["created_at"]);

        mas.push(orders[i]["transaction_id"]);
        mas.push(orders[i]["user_id"]);
        mas.push(currentDate.toLocaleDateString());
        mas.push(orders[i]["total"]);
        mas.push(cardNumber);
        mas.push(orders[i]["card_type"]);
        mas.push(orders[i]["order_country"] +" ("+orders[i]["order_ip"]+")");

        tbd.appendChild(createTr(mas, orders[i]["id"]));
    }
        tbl.appendChild(tbd);
    body.appendChild(tbl);


    // YOUR CODE GOES HERE
    // next line is for example only
        //document.getElementById("app").innerHTML = "<h1>Hello WG Forge</h1>";

}());
