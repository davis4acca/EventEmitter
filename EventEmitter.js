class EventEmitter {

    constructor() {
        this.events = {}
        // type : [listener1, listener2 ....]
        // type2 : [listener1, listener2 ....]
        // type2 : [listener1, listener2 ....]
        // etc.......
    }


    addEventListener(type, listener) {
        this.events[type] = this.events[type] || [] // line 5
        this.events[type].push(listener);
    }

    emit(type) {
        if (this.events[type]) {
            this.events[type].forEach(listener => {
                listener();
            });
        }
    }
}


module.exports = {
    EventEmitter
}