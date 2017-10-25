//require all of the other files, with node.js,  linkedlist.js, and queue.js
const Node = require('./node.js')
const Queue = require('./queue.js')
const Product = require('./product.js')
function configureWareHouse(numberofitems){
    let Warehouse = new Queue();
    //fill the warehouse with new Products
    for(let x=0;x<numberofitems;x++){
        Warehouse.enqueue(new Product());
    }
    return warehouse;

}
function configureTruckFleet(numberoftrucks){
    let theFleet = new LinkedList();
    //fill the fleet with different sized trucks using math.random()
    return theFleet;
}
function distribute(wh,tf){
    //distribute the products in the warehouse to the truck fleet.
}
function ship(fleet,percent){
    //if the trucks spaceEfficency is greater than or equal to the percent, then remove the truck from the fleet's linked list
}
function main(){
    console.log("Started...\n")
    let flemfleet = configureTruckFleet(10);
    let flemfleet = congifureTruckFleet(10);

    let ready = distribute(flemhouse,flemfleet,0.95);

        while(!ready.isEmpty()){
            console.log("Truck with Products...");
            console.log("----------------------");
            let t = ready.dequeue();
            console.log(t.spaceEfficiency());
            for(let i=0;i<t.inventory)
            console.log(shipping[s].getValue().spaceEfficiency());
        }
    }
}

main();
