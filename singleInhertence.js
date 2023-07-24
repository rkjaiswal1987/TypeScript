var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Human = /** @class */ (function () {
    function Human() {
    }
    return Human;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(_id, _name) {
        var _this = _super.call(this) || this;
        _this.id = _id;
        _this.name = _name;
        return _this;
    }
    Manager.prototype.show = function () {
        console.log("id:".concat(this.id, " , Name:").concat(this.name));
    };
    return Manager;
}(Human));
var m = new Manager(1, 'Jaiswal');
m.show();
