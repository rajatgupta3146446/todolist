var statusENUMS = {
    ACTIVE: "ACTIVE",
    COMPLETE: "COMPLETE",
    DELETED: "DELETED"
};

var todo = (function () {
    function todo(title) {
        this.title = title;
        this.status = statusENUMS.ACTIVE;
    }
    return todo;
})();

var a = (function () {
    function a() {
        this.list = [];
    }
    a.prototype.add = function (v) {
        var y = new todo(v);
        y.status = statusENUMS.ACTIVE;
        this.list.push(y);
    };

    a.prototype.remove = function (v) {
        this.list[v].status = statusENUMS.DELETED;
    };
    a.prototype.complete = function (v) {
        this.list[v].status = statusENUMS.COMPLETE;
    };
    a.prototype.active = function (v) {
        this.list[v].status = statusENUMS.ACTIVE;
    };

    a.prototype.showList = function () {
        return this.list;
    };
    return a;
})();

var listObj = new a();
