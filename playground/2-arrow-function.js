// const square = function (x){
//     return  x * x;

// }

const square = (x)=>{
    return x*x;
}
console.log(square(4));

const event = {
    name :"Birthday Party",
    guestList :['Andrew','mike','jen'],
    printGuestList() {
        console.log('Guest list for ' + this.name);

        this.guestList.forEach((guest)=>{
            console.log(guest + ' is Attending ' + this.name);
        })
    }
}
event.printGuestList();