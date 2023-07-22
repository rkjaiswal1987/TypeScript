var user = /** @class */ (function () {
    function user(n, a) {
        // ShowDetails=()=>{
        //     console.log(`Name:${this.name},Address:${this.address}`);
        //     setTimeout(() => {
        //     console.log(`Name:${this.name},Address:${this.address}`);
        //     },1000);
        //     }
        this.ShowDetails = function () {
            var _this = this;
            console.log("Name:" + this.name + ",Address:" + this.address);
            // setTimeout(function() {
            setTimeout(function () {
                console.log("Name:" + _this.name + ",Address:" + _this.address);
            }, 1000);
        };
        this.name = n;
        this.address = a;
    }
    return user;
}());
var obj = new user('Mohan', 'Noida');
obj.ShowDetails();
