/// <reference path="../../../typings/lodash/lodash.d.ts" />
import _ = require("lodash");
//import jerr = require("../../errors");
import Store = require("../../stores/Store");
import UpdatePrimitive = require("./UpdatePrimitive");

class DeleteFromObject extends UpdatePrimitive {
    keys: string[];

    constructor(target: string, keys: string[]) {
        super(target);
        this.keys = keys;
    }

    merge(udp: DeleteFromObject): UpdatePrimitive {
        this.keys = _.uniq(this.keys.concat(udp.keys));
        return this;
    }

    apply(store: Store): UpdatePrimitive {
        var item = store.get(this.target);
        this.keys.forEach(function(key) {
            delete item[key];
        });
        return this;
    }
}

export = DeleteFromObject;
