var Jisp = {

    "Get": function (name) {
        return Jisp[name];
    },

    "Set": function (name, value) {
        return Jisp[name] = Jisp.Eval(value);
    },

    "Function": function (parameters, body) {
        return function () {
            for (var i = 0; i < parameters.length; i++) {
                Jisp[parameters[i]] = arguments[i];
            }
            return Jisp.Eval(body);
        }
    },

    "If": function (condition, trueBody, falseBody) {
        if (Jisp.Eval(condition)) {
            return Jisp.Eval(trueBody);
        }
        else {
            return Jisp.Eval(falseBody);
        }
    },

    "While": function (condition, body) {
        var ret = [];
        while (Jisp.Eval(condition)) {
            ret.push(Jisp.Eval(body));
        }
        return ret;
    },

    "For": function (variable, from, to, step, body) {
        var ret = [];
        from = Jisp.Eval(from);
        to = Jisp.Eval(to);
        steps = Jisp.Eval(step);
        for (var i = from; i <= to; i += steps) {
            Jisp[variable] = i;
            ret.push(Jisp.Eval(body));
        }
        return ret;
    },

    "+": function (left, right) {
        return Jisp.Eval(left) + Jisp.Eval(right);
    },

    "-": function (left, right) {
        return Jisp.Eval(left) - Jisp.Eval(right);
    },

    "*": function (left, right) {
        return Jisp.Eval(left) * Jisp.Eval(right);
    },

    "/": function (left, right) {
        return Jisp.Eval(left) / Jisp.Eval(right);
    },

    "<": function (left, right) {
        return Jisp.Eval(left) < Jisp.Eval(right);
    },

    ">": function (left, right) {
        return Jisp.Eval(left) > Jisp.Eval(right);
    },

    "++": function (variable) {
        var ret = Jisp[variable];
        Jisp[variable] = ret + 1;
        return ret;
    },

    "--": function (variable) {
        var ret = Jisp[variable];
        Jisp[variable] = ret - 1;
        return ret;
    },

    "Print": function (value) {
        value = Jisp.Eval(value);
        console.log(value);
        return value;
    },

    "Sin": function (value) {
        return Math.sin(Jisp.Eval(value));
    },

    "Cos": function (value) {
        return Math.cos(Jisp.Eval(value));
    },

    "Eval": function (exp) {

        //literal
        if (!Array.isArray(exp)) {
            return exp;
        }

        //boş
        if (exp.length == 0) {
            return [];
        }

        //bul
        if (typeof exp[0] == "string") {
            exp[0] = Jisp[exp[0]];
        }

        //call 
        exp[0] = Jisp.Eval(exp[0]);
        if (typeof exp[0] == "function") {
            return exp[0].apply(this, exp.slice(1));
        }

        //liste
        for (var i = 1; i < exp.length; i++) {
            exp[i] = Jisp.Eval(exp[i]);
        }
        return exp;
    }

};
