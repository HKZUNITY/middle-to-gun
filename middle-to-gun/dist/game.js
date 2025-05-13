"use strict";

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

let NoticeView_Generate = class NoticeView_Generate extends UIScript {
    get con_top_notice() {
        if (!this.con_top_notice_Internal && this.uiWidgetBase) {
            this.con_top_notice_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/con_top_notice");
        }
        return this.con_top_notice_Internal;
    }
    get con_second_notice() {
        if (!this.con_second_notice_Internal && this.uiWidgetBase) {
            this.con_second_notice_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/con_second_notice");
        }
        return this.con_second_notice_Internal;
    }
    get con_top_notice_2() {
        if (!this.con_top_notice_2_Internal && this.uiWidgetBase) {
            this.con_top_notice_2_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/con_top_notice_2");
        }
        return this.con_top_notice_2_Internal;
    }
    onAwake() {
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {}
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) {}
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    hide() {
        mw.UIService.hideUI(this);
    }
};

NoticeView_Generate = __decorate([ UIBind("UI/common/notice/NoticeView.ui") ], NoticeView_Generate);

var NoticeView_Generate$1 = NoticeView_Generate;

var foreign163 = Object.freeze({
    __proto__: null,
    default: NoticeView_Generate$1
});

let TopNoticeItem_Generate = class TopNoticeItem_Generate extends UIScript {
    get txt_context() {
        if (!this.txt_context_Internal && this.uiWidgetBase) {
            this.txt_context_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/txt_context");
        }
        return this.txt_context_Internal;
    }
    get eff() {
        if (!this.eff_Internal && this.uiWidgetBase) {
            this.eff_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/eff");
        }
        return this.eff_Internal;
    }
    get eff_line_1() {
        if (!this.eff_line_1_Internal && this.uiWidgetBase) {
            this.eff_line_1_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/eff_line_1");
        }
        return this.eff_line_1_Internal;
    }
    get eff_line_1_1() {
        if (!this.eff_line_1_1_Internal && this.uiWidgetBase) {
            this.eff_line_1_1_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/eff_line_1_1");
        }
        return this.eff_line_1_1_Internal;
    }
    onAwake() {
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        this.initLanguage(this.txt_context);
    }
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) {}
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    hide() {
        mw.UIService.hideUI(this);
    }
};

TopNoticeItem_Generate = __decorate([ UIBind("UI/common/notice/TopNoticeItem.ui") ], TopNoticeItem_Generate);

var TopNoticeItem_Generate$1 = TopNoticeItem_Generate;

var foreign165 = Object.freeze({
    __proto__: null,
    default: TopNoticeItem_Generate$1
});

const Easing = {
    Linear: {
        None: function(amount) {
            return amount;
        }
    },
    Quadratic: {
        In: function(amount) {
            return amount * amount;
        },
        Out: function(amount) {
            return amount * (2 - amount);
        },
        InOut: function(amount) {
            if ((amount *= 2) < 1) {
                return .5 * amount * amount;
            }
            return -.5 * (--amount * (amount - 2) - 1);
        }
    },
    Cubic: {
        In: function(amount) {
            return amount * amount * amount;
        },
        Out: function(amount) {
            return --amount * amount * amount + 1;
        },
        InOut: function(amount) {
            if ((amount *= 2) < 1) {
                return .5 * amount * amount * amount;
            }
            return .5 * ((amount -= 2) * amount * amount + 2);
        }
    },
    Quartic: {
        In: function(amount) {
            return amount * amount * amount * amount;
        },
        Out: function(amount) {
            return 1 - --amount * amount * amount * amount;
        },
        InOut: function(amount) {
            if ((amount *= 2) < 1) {
                return .5 * amount * amount * amount * amount;
            }
            return -.5 * ((amount -= 2) * amount * amount * amount - 2);
        }
    },
    Quintic: {
        In: function(amount) {
            return amount * amount * amount * amount * amount;
        },
        Out: function(amount) {
            return --amount * amount * amount * amount * amount + 1;
        },
        InOut: function(amount) {
            if ((amount *= 2) < 1) {
                return .5 * amount * amount * amount * amount * amount;
            }
            return .5 * ((amount -= 2) * amount * amount * amount * amount + 2);
        }
    },
    Sinusoidal: {
        In: function(amount) {
            return 1 - Math.sin((1 - amount) * Math.PI / 2);
        },
        Out: function(amount) {
            return Math.sin(amount * Math.PI / 2);
        },
        InOut: function(amount) {
            return .5 * (1 - Math.sin(Math.PI * (.5 - amount)));
        }
    },
    Exponential: {
        In: function(amount) {
            return amount === 0 ? 0 : Math.pow(1024, amount - 1);
        },
        Out: function(amount) {
            return amount === 1 ? 1 : 1 - Math.pow(2, -10 * amount);
        },
        InOut: function(amount) {
            if (amount === 0) {
                return 0;
            }
            if (amount === 1) {
                return 1;
            }
            if ((amount *= 2) < 1) {
                return .5 * Math.pow(1024, amount - 1);
            }
            return .5 * (-Math.pow(2, -10 * (amount - 1)) + 2);
        }
    },
    Circular: {
        In: function(amount) {
            return 1 - Math.sqrt(1 - amount * amount);
        },
        Out: function(amount) {
            return Math.sqrt(1 - --amount * amount);
        },
        InOut: function(amount) {
            if ((amount *= 2) < 1) {
                return -.5 * (Math.sqrt(1 - amount * amount) - 1);
            }
            return .5 * (Math.sqrt(1 - (amount -= 2) * amount) + 1);
        }
    },
    Elastic: {
        In: function(amount) {
            if (amount === 0) {
                return 0;
            }
            if (amount === 1) {
                return 1;
            }
            return -Math.pow(2, 10 * (amount - 1)) * Math.sin((amount - 1.1) * 5 * Math.PI);
        },
        Out: function(amount) {
            if (amount === 0) {
                return 0;
            }
            if (amount === 1) {
                return 1;
            }
            return Math.pow(2, -10 * amount) * Math.sin((amount - .1) * 5 * Math.PI) + 1;
        },
        InOut: function(amount) {
            if (amount === 0) {
                return 0;
            }
            if (amount === 1) {
                return 1;
            }
            amount *= 2;
            if (amount < 1) {
                return -.5 * Math.pow(2, 10 * (amount - 1)) * Math.sin((amount - 1.1) * 5 * Math.PI);
            }
            return .5 * Math.pow(2, -10 * (amount - 1)) * Math.sin((amount - 1.1) * 5 * Math.PI) + 1;
        }
    },
    Back: {
        In: function(amount) {
            const s = 1.70158;
            return amount === 1 ? 1 : amount * amount * ((s + 1) * amount - s);
        },
        Out: function(amount) {
            const s = 1.70158;
            return amount === 0 ? 0 : --amount * amount * ((s + 1) * amount + s) + 1;
        },
        InOut: function(amount) {
            const s = 1.70158 * 1.525;
            if ((amount *= 2) < 1) {
                return .5 * (amount * amount * ((s + 1) * amount - s));
            }
            return .5 * ((amount -= 2) * amount * ((s + 1) * amount + s) + 2);
        }
    },
    Bounce: {
        In: function(amount) {
            return 1 - Easing.Bounce.Out(1 - amount);
        },
        Out: function(amount) {
            if (amount < 1 / 2.75) {
                return 7.5625 * amount * amount;
            } else if (amount < 2 / 2.75) {
                return 7.5625 * (amount -= 1.5 / 2.75) * amount + .75;
            } else if (amount < 2.5 / 2.75) {
                return 7.5625 * (amount -= 2.25 / 2.75) * amount + .9375;
            } else {
                return 7.5625 * (amount -= 2.625 / 2.75) * amount + .984375;
            }
        },
        InOut: function(amount) {
            if (amount < .5) {
                return Easing.Bounce.In(amount * 2) * .5;
            }
            return Easing.Bounce.Out(amount * 2 - 1) * .5 + .5;
        }
    },
    generatePow: function(power = 4) {
        power = power < Number.EPSILON ? Number.EPSILON : power;
        power = power > 1e4 ? 1e4 : power;
        return {
            In: function(amount) {
                return amount ** power;
            },
            Out: function(amount) {
                return 1 - (1 - amount) ** power;
            },
            InOut: function(amount) {
                if (amount < .5) {
                    return (amount * 2) ** power / 2;
                }
                return (1 - (2 - amount * 2) ** power) / 2 + .5;
            }
        };
    }
};

const Interpolation = {
    Linear: function(v, k) {
        const m = v.length - 1;
        const f = m * k;
        const i = Math.floor(f);
        const fn = Interpolation.Utils.Linear;
        if (k < 0) {
            return fn(v[0], v[1], f);
        }
        if (k > 1) {
            return fn(v[m], v[m - 1], m - f);
        }
        return fn(v[i], v[i + 1 > m ? m : i + 1], f - i);
    },
    Bezier: function(v, k) {
        let b = 0;
        const n = v.length - 1;
        const pw = Math.pow;
        const bn = Interpolation.Utils.Bernstein;
        for (let i = 0; i <= n; i++) {
            b += pw(1 - k, n - i) * pw(k, i) * v[i] * bn(n, i);
        }
        return b;
    },
    CatmullRom: function(v, k) {
        const m = v.length - 1;
        let f = m * k;
        let i = Math.floor(f);
        const fn = Interpolation.Utils.CatmullRom;
        if (v[0] === v[m]) {
            if (k < 0) {
                i = Math.floor(f = m * (1 + k));
            }
            return fn(v[(i - 1 + m) % m], v[i], v[(i + 1) % m], v[(i + 2) % m], f - i);
        } else {
            if (k < 0) {
                return v[0] - (fn(v[0], v[0], v[1], v[1], -f) - v[0]);
            }
            if (k > 1) {
                return v[m] - (fn(v[m], v[m], v[m - 1], v[m - 1], f - m) - v[m]);
            }
            return fn(v[i ? i - 1 : 0], v[i], v[m < i + 1 ? m : i + 1], v[m < i + 2 ? m : i + 2], f - i);
        }
    },
    Utils: {
        Linear: function(p0, p1, t) {
            return (p1 - p0) * t + p0;
        },
        Bernstein: function(n, i) {
            const fc = Interpolation.Utils.Factorial;
            return fc(n) / fc(i) / fc(n - i);
        },
        Factorial: function() {
            const a = [ 1 ];
            return function(n) {
                let s = 1;
                if (a[n]) {
                    return a[n];
                }
                for (let i = n; i > 1; i--) {
                    s *= i;
                }
                a[n] = s;
                return s;
            };
        }(),
        CatmullRom: function(p0, p1, p2, p3, t) {
            const v0 = (p2 - p0) * .5;
            const v1 = (p3 - p1) * .5;
            const t2 = t * t;
            const t3 = t * t2;
            return (2 * p1 - 2 * p2 + v0 + v1) * t3 + (-3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 + v0 * t + p1;
        }
    }
};

class Sequence {
    static nextId() {
        return Sequence._nextId++;
    }
}

Sequence._nextId = 0;

class Group {
    constructor() {
        this._tweens = {};
        this._tweensAddedDuringUpdate = {};
    }
    getAll() {
        return Object.keys(this._tweens).map((tweenId => this._tweens[tweenId]));
    }
    removeAll() {
        this._tweens = {};
    }
    add(tween) {
        this._tweens[tween.getId()] = tween;
        this._tweensAddedDuringUpdate[tween.getId()] = tween;
    }
    remove(tween) {
        delete this._tweens[tween.getId()];
        delete this._tweensAddedDuringUpdate[tween.getId()];
    }
    update(time = now(), preserve = false) {
        let tweenIds = Object.keys(this._tweens);
        if (tweenIds.length === 0) {
            return false;
        }
        while (tweenIds.length > 0) {
            this._tweensAddedDuringUpdate = {};
            for (let i = 0; i < tweenIds.length; i++) {
                const tween = this._tweens[tweenIds[i]];
                const autoStart = !preserve;
                if (tween && tween.update(time, autoStart) === false && !preserve) {
                    delete this._tweens[tweenIds[i]];
                }
            }
            tweenIds = Object.keys(this._tweensAddedDuringUpdate);
        }
        return true;
    }
}

const mainGroup = new Group;

const now = function() {
    return Date.now();
};

let Tween$1 = class Tween {
    constructor(_object, _group = mainGroup) {
        this._object = _object;
        this._group = _group;
        this._isPaused = false;
        this._pauseStart = 0;
        this._valuesStart = {};
        this._valuesEnd = {};
        this._valuesStartRepeat = {};
        this._duration = 1e3;
        this._initialRepeat = 0;
        this._repeat = 0;
        this._yoyo = false;
        this._isPlaying = false;
        this._reversed = false;
        this._delayTime = 0;
        this._startTime = 0;
        this._easingFunction = Easing.Linear.None;
        this._interpolationFunction = Interpolation.Linear;
        this._chainedTweens = [];
        this._onStartCallbackFired = false;
        this._id = Sequence.nextId();
        this._isChainStopped = false;
        this._goToEnd = false;
    }
    getId() {
        return this._id;
    }
    isPlaying() {
        return this._isPlaying;
    }
    isPaused() {
        return this._isPaused;
    }
    to(properties, duration) {
        this._valuesEnd = Object.create(properties);
        if (duration !== undefined) {
            this._duration = duration;
        }
        return this;
    }
    duration(d = 1e3) {
        this._duration = d;
        return this;
    }
    start(time = now()) {
        if (this._isPlaying) {
            return this;
        }
        this._group && this._group.add(this);
        this._repeat = this._initialRepeat;
        if (this._reversed) {
            this._reversed = false;
            for (const property in this._valuesStartRepeat) {
                this._swapEndStartRepeatValues(property);
                this._valuesStart[property] = this._valuesStartRepeat[property];
            }
        }
        this._isPlaying = true;
        this._isPaused = false;
        this._onStartCallbackFired = false;
        this._isChainStopped = false;
        this._startTime = time;
        this._startTime += this._delayTime;
        this._setupProperties(this._object, this._valuesStart, this._valuesEnd, this._valuesStartRepeat);
        return this;
    }
    _setupProperties(_object, _valuesStart, _valuesEnd, _valuesStartRepeat) {
        for (const property in _valuesEnd) {
            const startValue = _object[property];
            const startValueIsArray = Array.isArray(startValue);
            const propType = startValueIsArray ? "array" : typeof startValue;
            const isInterpolationList = !startValueIsArray && Array.isArray(_valuesEnd[property]);
            if (propType === "undefined" || propType === "function") {
                continue;
            }
            if (isInterpolationList) {
                let endValues = _valuesEnd[property];
                if (endValues.length === 0) {
                    continue;
                }
                endValues = endValues.map(this._handleRelativeValue.bind(this, startValue));
                _valuesEnd[property] = [ startValue ].concat(endValues);
            }
            if ((propType === "object" || startValueIsArray) && startValue && !isInterpolationList) {
                _valuesStart[property] = startValueIsArray ? [] : {};
                for (const prop in startValue) {
                    _valuesStart[property][prop] = startValue[prop];
                }
                _valuesStartRepeat[property] = startValueIsArray ? [] : {};
                this._setupProperties(startValue, _valuesStart[property], _valuesEnd[property], _valuesStartRepeat[property]);
            } else {
                if (typeof _valuesStart[property] === "undefined") {
                    _valuesStart[property] = startValue;
                }
                if (!startValueIsArray) {
                    _valuesStart[property] *= 1;
                }
                if (isInterpolationList) {
                    _valuesStartRepeat[property] = _valuesEnd[property].slice().reverse();
                } else {
                    _valuesStartRepeat[property] = _valuesStart[property] || 0;
                }
            }
        }
    }
    stop() {
        if (!this._isChainStopped) {
            this._isChainStopped = true;
            this.stopChainedTweens();
        }
        if (!this._isPlaying) {
            return this;
        }
        this._group && this._group.remove(this);
        this._isPlaying = false;
        this._isPaused = false;
        if (this._onStopCallback) {
            this._onStopCallback(this._object);
        }
        return this;
    }
    end() {
        this._goToEnd = true;
        this.update(Infinity);
        return this;
    }
    pause(time = now()) {
        if (this._isPaused || !this._isPlaying) {
            return this;
        }
        this._isPaused = true;
        this._pauseStart = time;
        this._group && this._group.remove(this);
        return this;
    }
    resume(time = now()) {
        if (!this._isPaused || !this._isPlaying) {
            return this;
        }
        this._isPaused = false;
        this._startTime += time - this._pauseStart;
        this._pauseStart = 0;
        this._group && this._group.add(this);
        return this;
    }
    stopChainedTweens() {
        for (let i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {
            this._chainedTweens[i].stop();
        }
        return this;
    }
    group(group = mainGroup) {
        this._group = group;
        return this;
    }
    delay(amount = 0) {
        this._delayTime = amount;
        return this;
    }
    repeat(times = 0) {
        this._initialRepeat = times;
        this._repeat = times;
        return this;
    }
    repeatDelay(amount) {
        this._repeatDelayTime = amount;
        return this;
    }
    yoyo(yoyo = false) {
        this._yoyo = yoyo;
        return this;
    }
    easing(easingFunction = Easing.Linear.None) {
        this._easingFunction = easingFunction;
        return this;
    }
    interpolation(interpolationFunction = Interpolation.Linear) {
        this._interpolationFunction = interpolationFunction;
        return this;
    }
    chain(...tweens) {
        this._chainedTweens = tweens;
        return this;
    }
    onStart(callback) {
        this._onStartCallback = callback;
        return this;
    }
    onUpdate(callback) {
        this._onUpdateCallback = callback;
        return this;
    }
    onRepeat(callback) {
        this._onRepeatCallback = callback;
        return this;
    }
    onComplete(callback) {
        this._onCompleteCallback = callback;
        return this;
    }
    onStop(callback) {
        this._onStopCallback = callback;
        return this;
    }
    update(time = now(), autoStart = true) {
        if (this._isPaused) return true;
        let property;
        let elapsed;
        const endTime = this._startTime + this._duration;
        if (!this._goToEnd && !this._isPlaying) {
            if (time > endTime) return false;
            if (autoStart) this.start(time);
        }
        this._goToEnd = false;
        if (time < this._startTime) {
            return true;
        }
        if (this._onStartCallbackFired === false) {
            if (this._onStartCallback) {
                this._onStartCallback(this._object);
            }
            this._onStartCallbackFired = true;
        }
        elapsed = (time - this._startTime) / this._duration;
        elapsed = this._duration === 0 || elapsed > 1 ? 1 : elapsed;
        const value = this._easingFunction(elapsed);
        this._updateProperties(this._object, this._valuesStart, this._valuesEnd, value);
        if (this._onUpdateCallback) {
            this._onUpdateCallback(this._object, elapsed);
        }
        if (elapsed === 1) {
            if (this._repeat > 0) {
                if (isFinite(this._repeat)) {
                    this._repeat--;
                }
                for (property in this._valuesStartRepeat) {
                    if (!this._yoyo && typeof this._valuesEnd[property] === "string") {
                        this._valuesStartRepeat[property] = this._valuesStartRepeat[property] + parseFloat(this._valuesEnd[property]);
                    }
                    if (this._yoyo) {
                        this._swapEndStartRepeatValues(property);
                    }
                    this._valuesStart[property] = this._valuesStartRepeat[property];
                }
                if (this._yoyo) {
                    this._reversed = !this._reversed;
                }
                if (this._repeatDelayTime !== undefined) {
                    this._startTime = time + this._repeatDelayTime;
                } else {
                    this._startTime = time + this._delayTime;
                }
                if (this._onRepeatCallback) {
                    this._onRepeatCallback(this._object);
                }
                return true;
            } else {
                if (this._onCompleteCallback) {
                    this._onCompleteCallback(this._object);
                }
                for (let i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {
                    this._chainedTweens[i].start(this._startTime + this._duration);
                }
                this._isPlaying = false;
                return false;
            }
        }
        return true;
    }
    _updateProperties(_object, _valuesStart, _valuesEnd, value) {
        for (const property in _valuesEnd) {
            if (_valuesStart[property] === undefined) {
                continue;
            }
            const start = _valuesStart[property] || 0;
            let end = _valuesEnd[property];
            const startIsArray = Array.isArray(_object[property]);
            const endIsArray = Array.isArray(end);
            const isInterpolationList = !startIsArray && endIsArray;
            if (isInterpolationList) {
                _object[property] = this._interpolationFunction(end, value);
            } else if (typeof end === "object" && end) {
                this._updateProperties(_object[property], start, end, value);
            } else {
                end = this._handleRelativeValue(start, end);
                if (typeof end === "number") {
                    _object[property] = start + (end - start) * value;
                }
            }
        }
    }
    _handleRelativeValue(start, end) {
        if (typeof end !== "string") {
            return end;
        }
        if (end.charAt(0) === "+" || end.charAt(0) === "-") {
            return start + parseFloat(end);
        } else {
            return parseFloat(end);
        }
    }
    _swapEndStartRepeatValues(property) {
        const tmp = this._valuesStartRepeat[property];
        const endValue = this._valuesEnd[property];
        if (typeof endValue === "string") {
            this._valuesStartRepeat[property] = this._valuesStartRepeat[property] + parseFloat(endValue);
        } else {
            this._valuesStartRepeat[property] = this._valuesEnd[property];
        }
        this._valuesEnd[property] = tmp;
    }
};

const nextId = Sequence.nextId;

const TWEEN = mainGroup;

const getAll = TWEEN.getAll.bind(TWEEN);

const removeAll = TWEEN.removeAll.bind(TWEEN);

const add = TWEEN.add.bind(TWEEN);

const remove = TWEEN.remove.bind(TWEEN);

const update = TWEEN.update.bind(TWEEN);

var foreign4 = Object.freeze({
    __proto__: null,
    Easing: Easing,
    Group: Group,
    Interpolation: Interpolation,
    Sequence: Sequence,
    Tween: Tween$1,
    add: add,
    getAll: getAll,
    nextId: nextId,
    now: now,
    remove: remove,
    removeAll: removeAll,
    update: update
});

class UIPool {
    constructor(creator) {
        this.pool = [];
        this.creator = creator;
    }
    get count() {
        return this.pool ? this.pool.length : 0;
    }
    get firstActiveItem() {
        for (let t of this.pool) {
            if (t.uiObject.visibility == mw.SlateVisibility.Hidden) continue;
            return t;
        }
    }
    byIndex(index) {
        return this.pool[index];
    }
    setCreator(func) {
        this.creator = func;
    }
    setPoolGetFunction(func) {
        this.poolGetFunction = func;
    }
    setResetItemFunction(resetItemFunction) {
        this.resetItemFunction = resetItemFunction;
    }
    get() {
        for (let item of this.pool) {
            if (item.uiObject.visibility == mw.SlateVisibility.Hidden) {
                item.uiObject.visibility = mw.SlateVisibility.SelfHitTestInvisible;
                if (this.poolGetFunction) this.poolGetFunction(item);
                return item;
            }
        }
        let result = this.creator();
        this.pool.push(result);
        return result;
    }
    giveBack(item) {
        if (this.resetItemFunction) this.resetItemFunction(item);
        item.uiObject.visibility = mw.SlateVisibility.Hidden;
    }
    resetAll() {
        for (let item of this.pool) {
            this.giveBack(item);
        }
    }
    eachVisibleItem(action) {
        for (let t of this.pool) {
            if (t.uiObject.visibility == mw.SlateVisibility.Hidden) continue;
            action(t);
        }
    }
    eachVisibleItemWithoutFocus(action, focus) {
        for (let t of this.pool) {
            if (t.uiObject.visibility == mw.SlateVisibility.Hidden) continue;
            if (t == focus) continue;
            action(t);
        }
    }
}

class UIElementPool {
    constructor() {
        this.pool = [];
    }
    get count() {
        return this.pool ? this.pool.length : 0;
    }
    get firstActiveItem() {
        for (let t of this.pool) {
            if (t.visibility == mw.SlateVisibility.Hidden) continue;
            return t;
        }
    }
    setCreator(func) {
        this.creator = func;
    }
    get() {
        for (let i of this.pool) {
            if (i.visibility == mw.SlateVisibility.Hidden) {
                i.visibility = mw.SlateVisibility.SelfHitTestInvisible;
                return i;
            }
        }
        let result = this.creator();
        this.pool.push(result);
        return result;
    }
    giveBack(item) {
        item.visibility = mw.SlateVisibility.Hidden;
    }
    resetAll() {
        for (let item of this.pool) {
            this.giveBack(item);
        }
    }
    eachVisibleItem(action) {
        for (let t of this.pool) {
            if (t.visibility == mw.SlateVisibility.Hidden) continue;
            action(t);
        }
    }
}

class WorldUIPool {
    constructor(creatorFunc) {
        this.pool = [];
        if (creatorFunc) this.creator = creatorFunc;
    }
    setCreator(func) {
        this.creator = func;
    }
    setPoolGetFunction(func) {
        this.poolGetFunction = func;
    }
    setResetItemFunction(resetItemFunction) {
        this.resetItemFunction = resetItemFunction;
    }
    eachVisibleItem(action) {
        for (let t of this.pool) {
            if (!t.stage) continue;
            action(t);
        }
    }
    get() {
        for (let item of this.pool) {
            if (item.stage) continue;
            if (this.poolGetFunction) this.poolGetFunction(item);
            item.uiWidget.setVisibility(mw.PropertyStatus.On);
            item.stage = true;
            return item;
        }
        let result = this.creator();
        result.stage = true;
        this.pool.push(result);
        return result;
    }
    giveBack(item) {
        if (this.resetItemFunction) this.resetItemFunction(item);
        item.stage = false;
        item.uiWidget.setVisibility(mw.PropertyStatus.Off);
    }
    resetAll() {
        for (let item of this.pool) {
            this.giveBack(item);
        }
    }
}

var foreign5 = Object.freeze({
    __proto__: null,
    UIElementPool: UIElementPool,
    UIPool: UIPool,
    WorldUIPool: WorldUIPool
});

var updater;

(function(updater) {
    updater.updateByFrameInterval = (interval, targetFunctionName) => function(target, prototypeKey, prototypeDescriptor) {
        let intervalVaryingName = `${prototypeKey.toString()}_current_interval`;
        let targetIntervalVaryingName = `${prototypeKey.toString()}_target_interval`;
        target[intervalVaryingName] = 0;
        target[targetIntervalVaryingName] = interval;
        let updateFunc = target[targetFunctionName || "onUpdate"];
        let targetFunc = prototypeDescriptor.value;
        target[targetFunctionName || "onUpdate"] = function(...args) {
            target[intervalVaryingName]++;
            if (target[intervalVaryingName] >= target[targetIntervalVaryingName]) {
                targetFunc.apply(this, args);
                target[intervalVaryingName] = 0;
            }
            updateFunc.apply(this, args);
        };
    };
})(updater || (updater = {}));

var foreign6 = Object.freeze({
    __proto__: null,
    get updater() {
        return updater;
    }
});

class Notice {
    static showDownNotice(context) {
        this.checkView();
        this.view.topNoticeComponent2.insert((notice => {
            notice.setInfo(context);
        }));
    }
    static checkView() {
        if (this.view) return;
        this.view = mw.UIService.show(NoticeView);
    }
}

class TopNoticeComponent {
    init(targetCanvas) {
        this.visibleNotice = [];
        this.pendingQueue = [];
        this.targetCanvas = targetCanvas;
        this.noticeCanvasHeight = this.targetCanvas.size.y;
        this.insertItemTempLocation = new mw.Vector2;
        this.noticeItemPool = new UIPool((() => {
            let item = mw.UIService.create(TopNoticeItem);
            this.targetCanvas.addChild(item.uiObject);
            item.uiObject.size = new mw.Vector2(700, 60);
            return item;
        }));
    }
    insert(initAction) {
        this.pendingQueue.push(initAction);
    }
    update() {
        if (this.visibleNotice.length == 0) return;
        for (let item of this.visibleNotice) {
            item.lifeTime += .03;
        }
        let first = this.visibleNotice[0];
        if (first.lifeTime >= TopNoticeComponent.NoticeItemLifeTime) {
            this.fadeoutNoticeElement();
        }
        this.noticeItemPool.eachVisibleItem((item => {
            if (item.targetHeight >= item.position.y) return;
            item.setLocation(item.position.x, item.position.y - TopNoticeComponent.NoticeMoveStepCount);
        }));
    }
    insertPendingNotice(initAction) {
        if (this.visibleNotice.length >= TopNoticeComponent.NoticeItemMaxCount) {
            this.fadeoutNoticeElement();
        }
        for (let i = 0; i < this.visibleNotice.length; i++) {
            const element = this.visibleNotice[i];
            element.targetHeight = this.noticeCanvasHeight - TopNoticeComponent.NoticeItemIntervalSpace - (this.visibleNotice.length - i) * TopNoticeComponent.NoticeItemIntervalSpace;
        }
        let recent = this.noticeItemPool.get();
        this.visibleNotice.push(recent);
        initAction(recent);
        recent.lifeTime = 0;
        this.insertItemTempLocation.x = this.targetCanvas.size.x / 2 - recent.uiObject.size.x / 2;
        this.insertItemTempLocation.y = this.targetCanvas.size.y - TopNoticeComponent.NoticeItemIntervalSpace;
        recent.setLocation(this.insertItemTempLocation.x, this.insertItemTempLocation.y);
        recent.targetHeight = this.insertItemTempLocation.y;
        recent.uiObject.renderOpacity = 0;
        new Tween({
            alpha: 0
        }).to({
            alpha: 1
        }, 250).onUpdate((arg => {
            recent.uiObject.renderOpacity = arg.alpha;
        })).start();
    }
    fadeoutNoticeElement() {
        let item = this.visibleNotice.shift();
        new Tween({
            alpha: 1
        }).to({
            alpha: 0
        }, 250).onUpdate((arg => {
            item.uiObject.renderOpacity = arg.alpha;
        })).onComplete((() => {
            this.noticeItemPool.giveBack(item);
        })).start();
    }
    checkPendingNotice() {
        if (this.pendingQueue.length < 1) return;
        this.insertPendingNotice(this.pendingQueue.shift());
    }
}

TopNoticeComponent.NoticeItemLifeTime = 2;

TopNoticeComponent.NoticeItemMaxCount = 3;

TopNoticeComponent.NoticeMoveStepCount = 15;

TopNoticeComponent.NoticeItemIntervalSpace = 75;

__decorate([ updater.updateByFrameInterval(15, "update") ], TopNoticeComponent.prototype, "checkPendingNotice", null);

class TopNoticeComponent2 {
    constructor() {
        this.isLeft = false;
        this.isRemoveing = false;
        this.needmovingNotice = [];
        this.isinsert = false;
    }
    init(targetCanvas) {
        this.visibleNotice = [];
        this.targetCanvas = targetCanvas;
        this.noticeCanvasHeight = this.targetCanvas.size.y;
        this.insertItemTempLocation = new mw.Vector2;
        this.noticeItemPool = new UIPool((() => {
            let item = mw.UIService.create(TopNoticeItem);
            this.targetCanvas.addChild(item.uiObject);
            item.uiObject.size = new mw.Vector2(item.uiObject.size.x, item.uiObject.size.y);
            return item;
        }));
    }
    insert(initAction) {
        this.insertPendingNotice(initAction);
    }
    update() {
        if (this.visibleNotice.length == 0) return;
        for (let item of this.visibleNotice) {
            item.lifeTime += .03;
            if (item.lifeTime >= TopNoticeComponent2.NoticeItemLifeTime) {
                if (!this.needmovingNotice.includes(item)) {
                    this.needmovingNotice.push(item);
                }
            }
        }
        this.eachLeftRightItem();
        this.noticeItemPool.eachVisibleItem((item => {
            if (item.targetHeight >= item.position.y) return;
            item.setLocation(item.position.x, item.position.y - TopNoticeComponent2.NoticeMoveStepCount);
        }));
    }
    insertPendingNotice(initAction) {
        this.isinsert = true;
        if (this.visibleNotice.length >= TopNoticeComponent2.NoticeItemMaxCount) {
            for (let index = 0; index < this.visibleNotice.length; index++) {
                let element = this.visibleNotice[index];
                if (index <= this.visibleNotice.length - TopNoticeComponent2.NoticeItemMaxCount) {
                    element.lifeTime += TopNoticeComponent2.NoticeItemLifeTime;
                }
            }
        }
        if (this.visibleNotice.length >= TopNoticeComponent2.NoticeSameItemMaxCount) {
            let count = this.visibleNotice.length;
            for (let index = 0; index < count; index++) {
                let element = this.visibleNotice[index];
                element.lifeTime += count * TopNoticeComponent2.everydiveidetime;
            }
        }
        this.eachLeftRightItem();
        for (let i = 0; i < this.visibleNotice.length; i++) {
            const element = this.visibleNotice[i];
            element.targetHeight = TopNoticeComponent2.NoticeItemIntervalSpace + i * TopNoticeComponent2.NoticeItemIntervalSpace;
            element.setLocation(this.insertItemTempLocation.x, element.targetHeight);
        }
        let recent = this.noticeItemPool.get();
        this.visibleNotice.push(recent);
        initAction(recent);
        recent.lifeTime = 0;
        this.insertItemTempLocation.x = this.targetCanvas.size.x / 2 - recent.uiObject.size.x / 2;
        let targetHeight = TopNoticeComponent2.NoticeItemIntervalSpace + (this.visibleNotice.length - 1) * TopNoticeComponent2.NoticeItemIntervalSpace;
        this.insertItemTempLocation.y = targetHeight;
        recent.targetHeight = this.insertItemTempLocation.y;
        recent.uiObject.renderOpacity = 0;
        recent.setLocation(this.insertItemTempLocation.x, -500);
        recent.uiObject.renderOpacity = 1;
        new Tween({
            posy: -500
        }).to({
            posy: this.insertItemTempLocation.y
        }, 500).onUpdate((arg => {
            recent.setLocation(this.insertItemTempLocation.x, arg.posy);
        })).start().easing(Easing.Linear.None);
        this.isinsert = false;
    }
    eachLeftRightItem() {
        if (this.needmovingNotice.length <= 0) {
            return;
        }
        if (this.isRemoveing) {
            return;
        }
        this.isRemoveing = true;
        new Tween({
            posX: 0
        }).to({
            posX: 1
        }, 500).onComplete((() => {
            this.isRemoveing = false;
        })).start();
        let arr = this.visibleNotice.filter((e => !this.needmovingNotice.includes(e)));
        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            element.targetHeight = TopNoticeComponent2.NoticeItemIntervalSpace + i * TopNoticeComponent2.NoticeItemIntervalSpace;
            new Tween({
                posy: element.uiObject.position.y
            }).to({
                posy: element.targetHeight
            }, 500).onUpdate((arg => {
                element.setLocation(this.insertItemTempLocation.x, arg.posy);
            })).onComplete((() => {})).easing(Easing.Linear.None).start();
        }
        while (this.needmovingNotice.length > 0) {
            let item = this.needmovingNotice.shift();
            let pos = item.uiObject.position;
            this.isLeft = !this.isLeft;
            let target = new mw.Vector(0, pos.y);
            new Tween({
                posX: 0
            }).to({
                posX: this.isLeft ? 3e3 : -3e3
            }, 250).onUpdate((arg => {
                target.x = arg.posX;
                item.uiObject.position = target;
            })).onComplete((() => {
                this.noticeItemPool.giveBack(item);
            })).easing(Easing.Linear.None).start();
            let index = this.visibleNotice.findIndex((ele => item));
            if (index != -1) {
                this.visibleNotice.splice(index, 1);
            }
        }
    }
}

TopNoticeComponent2.NoticeItemLifeTime = 4;

TopNoticeComponent2.NoticeItemMaxCount = 10;

TopNoticeComponent2.NoticeItemIntervalSpace = 70;

TopNoticeComponent2.NoticeSameItemMaxCount = 3;

TopNoticeComponent2.NoticeMoveStepCount = 15;

TopNoticeComponent2.everydiveidetime = 0;

class NoticeView extends NoticeView_Generate$1 {
    onStart() {
        this.topNoticeComponent = new TopNoticeComponent;
        this.topNoticeComponent.init(this.con_top_notice);
        this.topNoticeComponent2 = new TopNoticeComponent2;
        this.topNoticeComponent2.init(this.con_top_notice_2);
        this.canUpdate = true;
        this.layer = mw.UILayerTop;
    }
    onUpdate() {
        this.topNoticeComponent.update();
        this.topNoticeComponent2.update();
    }
}

class TopNoticeItem extends TopNoticeItem_Generate$1 {
    setLocation(x, y) {
        if (!this.position) {
            this.position = new mw.Vector2(x, y);
        } else {
            this.position.x = x;
            this.position.y = y;
        }
        this.uiObject.position = this.position;
    }
    setInfo(context) {
        this.txt_context.text = context;
    }
}

var foreign3 = Object.freeze({
    __proto__: null,
    Notice: Notice
});

class GlobalData {}

GlobalData.isOpenIAA = false;

GlobalData.languageId = -1;

GlobalData.roomPeopleCount = 20;

GlobalData.soundVolume = 1;

GlobalData.dailyRefreshTime = "4:0";

GlobalData.weeklyRefreshTime = "4:0";

GlobalData.maxHp = 100;

GlobalData.addDiamond = 10;

GlobalData.addCoin = 1e4;

var foreign152 = Object.freeze({
    __proto__: null,
    default: GlobalData
});

class Utils {
    static modifyboxOverlapInLevel(StartLocation, EndLocation, Width, Height, debug, IgnoreObjectsGuid, IgnoreByKind, Source) {
        let halfSize = new Vector(Width / 2, Height / 2);
        let orientation = Vector.subtract(EndLocation, StartLocation).toRotation();
        let results = QueryUtil.boxTrace(StartLocation, EndLocation, halfSize, orientation, true, debug, IgnoreObjectsGuid, IgnoreByKind, Source);
        let objResults = new Array;
        for (let i = 0; i < results.length; i++) {
            let obj = results[i].gameObject;
            if (!obj) continue;
            if (objResults.indexOf(obj) == -1) objResults.push(obj);
        }
        return objResults;
    }
    static isCharacter(obj) {
        if (obj instanceof Character && obj.player != null) {
            return true;
        }
        return false;
    }
    static rpcPlayEffectAtLocation(source, location, loopCount, rotation, scale) {
        let duration = undefined;
        if (loopCount < 0) {
            duration = -loopCount;
            loopCount = undefined;
        }
        return EffectService.playAtPosition(source, location, {
            loopCount: loopCount,
            duration: duration,
            rotation: rotation,
            scale: scale
        });
    }
    static async asyncRpcGetData(key) {
        let value = await DataStorage.asyncGetData(key);
        return value.data;
    }
    static randomInt(min, max) {
        if (min > max) {
            let temp = min;
            min = max;
            max = temp;
        }
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    static async asyncDownloadAsset(InAssetId) {
        if (!mw.AssetUtil.assetLoaded(InAssetId)) {
            await mw.AssetUtil.asyncDownloadAsset(InAssetId);
        }
    }
    static async asyncDownloadAssets(InAssetIds) {
        for (let i = 0; i < InAssetIds.length; ++i) {
            if (mw.AssetUtil.assetLoaded(InAssetIds[i])) continue;
            await mw.AssetUtil.asyncDownloadAsset(InAssetIds[i]);
        }
    }
    static setWidgetVisibility(ui, visibility) {
        if (ui.visibility != visibility) ui.visibility = visibility;
    }
    static setButtonEnable(button, enable) {
        if (button.enable != enable) button.enable = enable;
    }
    static setGameObjectVisibility(model, isVisibility) {
        if (model.getVisibility() != isVisibility) model.setVisibility(isVisibility);
    }
    static randomOneDifferentId(guids, lastId) {
        let newGuids = [];
        newGuids = guids.filter((v => v != lastId));
        lastId = newGuids[this.randomInt(0, newGuids.length - 1)];
        return lastId;
    }
    static setImageByAssetIconData(image, icon) {
        if (this.assetIconDataMap.has(icon)) {
            image.setImageByAssetIconData(this.assetIconDataMap.get(icon));
        } else {
            mw.assetIDChangeIconUrlRequest([ icon ]).then((() => {
                try {
                    let assetIconData = mw.getAssetIconDataByAssetID(icon);
                    image.setImageByAssetIconData(assetIconData);
                    this.assetIconDataMap.set(icon, assetIconData);
                } catch (error) {}
            }));
        }
    }
    static openUITween(mCanvas, onStart, onComplete) {
        let tmpX = 0;
        let tmpY = 0;
        if (this.randomInt(0, 1) == 0) {
            if (this.randomInt(0, 1)) {
                tmpX = mCanvas.size.x;
            } else {
                tmpX = -mCanvas.size.x;
            }
            tmpY = this.randomInt(-mCanvas.size.y, mCanvas.size.y);
        } else {
            tmpX = this.randomInt(-mCanvas.size.x, mCanvas.size.x);
            if (this.randomInt(0, 1)) {
                tmpY = mCanvas.size.y;
            } else {
                tmpY = -mCanvas.size.y;
            }
        }
        new mw.Tween({
            x: tmpX,
            y: tmpY
        }).to({
            x: 0,
            y: 0
        }, .5 * 1e3).onStart((() => {
            mCanvas.position = new mw.Vector2(tmpX, tmpY);
            if (onStart) onStart();
        })).onUpdate((v => {
            mCanvas.position = new mw.Vector2(v.x, v.y);
        })).easing(cubicBezier(.75, 2.9, .46, -.18)).onComplete((() => {
            mCanvas.position = mw.Vector2.zero;
            if (onComplete) onComplete();
        })).start();
        let scaleType = this.randomInt(0, 2);
        new mw.Tween({
            x: 0,
            y: 0
        }).to({
            x: 1,
            y: 1
        }, .5 * 1e3).onStart((() => {
            switch (scaleType) {
              case 0:
                mCanvas.renderScale = new mw.Vector2(1, 0);
                break;

              case 1:
                mCanvas.renderScale = new mw.Vector2(0, 1);
                break;

              case 2:
                mCanvas.renderScale = new mw.Vector2(1, 1);
                break;
            }
        })).onUpdate((v => {
            switch (scaleType) {
              case 0:
                mCanvas.renderScale = new mw.Vector2(1, v.y);
                break;

              case 1:
                mCanvas.renderScale = new mw.Vector2(v.x, 1);
                break;

              case 2:
                mCanvas.renderScale = new mw.Vector2(v.x, v.y);
                break;
            }
        })).onComplete((() => {
            mCanvas.renderScale = mw.Vector2.one;
        })).start();
    }
    static closeUITween(mCanvas, onStart, onComplete) {
        let scaleType = this.randomInt(0, 2);
        new mw.Tween({
            x: 1,
            y: 1
        }).to({
            x: 0,
            y: 0
        }, .5 * 1e3).onStart((() => {
            if (onStart) onStart();
            mCanvas.renderScale = new mw.Vector2(1, 1);
        })).onUpdate((v => {
            switch (scaleType) {
              case 0:
                mCanvas.renderScale = new mw.Vector2(1, v.y);
                break;

              case 1:
                mCanvas.renderScale = new mw.Vector2(v.x, 1);
                break;

              case 2:
                mCanvas.renderScale = new mw.Vector2(v.x, v.y);
                break;
            }
        })).onComplete((() => {
            if (onComplete) onComplete();
            switch (scaleType) {
              case 0:
                mCanvas.renderScale = new mw.Vector2(1, 0);
                break;

              case 1:
                mCanvas.renderScale = new mw.Vector2(0, 1);
                break;

              case 2:
                mCanvas.renderScale = new mw.Vector2(0, 0);
                break;
            }
        })).start();
    }
    static getCurrentTime() {
        let date = new Date;
        return date.getHours() + ":" + date.getMinutes();
    }
    static getWhatDay() {
        let whatDay = "7123456".charAt((new Date).getDay());
        return whatDay;
    }
    static weekNumChangeToCN(num) {
        return "一二三四五六日".charAt(num - 1);
    }
    static getLastDay(day) {
        let whatDay = "7123456".charAt(day);
        return whatDay;
    }
    static iSameWeek(date1, date2) {
        let dt1 = new Date;
        dt1.setTime(date1);
        let dt2 = new Date;
        dt2.setTime(date2);
        let md1 = this.tmonday(dt1);
        let md2 = this.tmonday(dt2);
        return md1 === md2;
    }
    static tmonday(dtm) {
        let dte = new Date(dtm);
        let day = dte.getDay();
        let dty = dte.getDate();
        if (day === 0) {
            day = 7;
        }
        dte.setDate(dty - day + 1);
        return dte.getFullYear() + "-" + dte.getMonth() + "-" + dte.getDate();
    }
    static showRewardAd(callback) {
        if (callback) callback();
        return;
    }
    static showAd(adsType, callback) {
        AdsService.showAd(adsType, (isSuccess => {
            if (isSuccess) {
                callback(AdsState.Success);
                callback(AdsState.Close);
                callback(AdsState.Reward);
            } else {
                callback(AdsState.Fail);
            }
        }));
    }
    static randomColor() {
        let colors = [ mw.LinearColor.red, mw.LinearColor.green, mw.LinearColor.blue, mw.LinearColor.yellow, new mw.LinearColor(1, 0, 1, 1), new mw.LinearColor(0, 1, 1, 1), mw.LinearColor.white ];
        let fontColor = colors[this.randomInt(0, colors.length - 1)];
        let outlineColor = colors[this.randomInt(0, colors.length - 1)];
        while (fontColor.a == outlineColor.a && fontColor.r == outlineColor.r && fontColor.g == outlineColor.g && fontColor.b == outlineColor.b) {
            outlineColor = colors[this.randomInt(0, colors.length - 1)];
        }
        return [ fontColor, outlineColor ];
    }
    static randomNpcName() {
        return this.npcNames[this.randomInt(0, this.npcNames.length - 1)];
    }
    static numChangeToCN(num) {
        if (this.tens[num]) {
            return this.tens[num];
        } else if (num > 10 && num < 20) {
            let numStr = num.toString();
            let n = numStr.substring(1, 2);
            let result = this.digitalUnits[1] + this.tens[n];
            return result;
        } else if (num > 10) {
            let result = "";
            let numStr = num.toString();
            for (var i = 0; i < numStr.length; ++i) {
                let n = numStr.substring(i, i + 1);
                let m = numStr.length - i - 1;
                result += this.tens[n] + this.digitalUnits[m];
            }
            return result;
        } else return "零";
    }
    static randomRevivalPoint(isRedTeam) {
        if (isRedTeam) {
            return this.redTeamRevivalPoint[this.randomInt(0, this.redTeamRevivalPoint.length - 1)];
        } else {
            return this.blueTeamRevivalPoint[this.randomInt(0, this.blueTeamRevivalPoint.length - 1)];
        }
    }
    static setOutLine(player, isTeamMate, width = .5) {
        player.character.setOutline(true, isTeamMate ? mw.LinearColor.blue : mw.LinearColor.red, width);
    }
    static playBirthEffect(player) {
        EffectService.playOnGameObject("142750", player.character, {
            slotType: mw.HumanoidSlotType.Root
        });
    }
    static playBirthSound(player) {
        SoundService.play3DSound("169179", player.character, 1, GlobalData.soundVolume);
    }
    static async applySharedId(character, sharedId) {
        return new Promise((async resolve => {
            mw.AccountService.applySharedId(character, sharedId, (async success => {
                console.error(`success:${success}`);
                if (success) character.syncDescription();
                await character.asyncReady();
                return resolve(success);
            }));
        }));
    }
    static async createSharedId(character) {
        return new Promise((async resolve => {
            mw.AccountService.createSharedId(character, (dataString => {
                console.error(`dataString:${dataString}`);
                return resolve(dataString);
            }));
        }));
    }
    static copyArray(array) {
        let newArray = [];
        for (let i = 0; i < array.length; ++i) {
            newArray.push(array[i]);
        }
        return newArray;
    }
    static colorHexToLinearColorToString(inColorHex) {
        if (this.inColorHexStrMap.has(inColorHex)) return this.inColorHexStrMap.get(inColorHex);
        let inColorHexLinearColor = mw.LinearColor.colorHexToLinearColor(inColorHex);
        this.inColorHexStrMap.set(inColorHex, inColorHexLinearColor);
        return inColorHexLinearColor;
    }
    static isEqulaLinearColor(linearColor1, linearColor2) {
        if (linearColor1.r.toFixed(5) != linearColor2.r.toFixed(5)) return false;
        if (linearColor1.g.toFixed(5) != linearColor2.g.toFixed(5)) return false;
        if (linearColor1.b.toFixed(5) != linearColor2.b.toFixed(5)) return false;
        if (linearColor1.a.toFixed(5) != linearColor2.a.toFixed(5)) return false;
        return true;
    }
    static stringArrayToTransform(strArray) {
        let transform = new mw.Transform;
        if (!strArray || strArray.length != 9) return transform;
        transform.position = new mw.Vector(Number(strArray[0]), Number(strArray[1]), Number(strArray[2]));
        transform.rotation = new mw.Rotation(Number(strArray[3]), Number(strArray[4]), Number(strArray[5]));
        transform.scale = new mw.Vector(Number(strArray[6]), Number(strArray[7]), Number(strArray[8]));
        return transform;
    }
    static accountServiceDownloadData(character) {
        return new Promise((async resolve => {
            mw.AccountService.downloadData(character, (async success => resolve(success)));
        }));
    }
}

Utils.assetIconDataMap = new Map;

Utils.npcNames = [ "张吉惟", "林国瑞", "林玫书", "林雅南", "江奕云", "刘柏宏", "阮建安", "林子帆", "夏志豪", "吉茹定", "李中冰", "谢彦文", "傅智翔", "洪振霞", "刘姿婷", "荣姿康", "吕致盈", "方一强", "黎芸贵", "郑伊雯", "雷进宝", "吴美隆", "吴心真", "王美珠", "郭芳天", "李雅惠", "陈文婷", "曹敏侑", "王依婷", "陈婉璇", "吴美玉", "蔡依婷", "郑昌梦", "林家纶", "黄丽昆", "李育泉", "黄芸欢", "吴韵如", "李肇芬", "卢木仲", "李成白", "方兆玉", "刘翊惠", "丁汉臻", "吴佳瑞", "舒绿珮", "周白芷", "张姿妤", "张虹伦", "周琼玫", "倪怡芳", "郭贵妃", "杨佩芳", "黄盛玫", "郑丽青", "许智云", "张孟涵", "李小爱", "王恩龙", "朱政廷", "邓诗涵", "陈政倩", "吴俊伯", "阮馨学", "翁惠珠", "吴思翰", "林佩玲", "邓海来", "陈翊依", "李建智", "武淑芬", "金雅琪", "赖怡宜", "黄育霖", "张仪湖", "王俊民", "张诗刚", "林慧颖", "沈俊君", "陈淑妤", "李姿伶", "高咏钰", "黄彦宜", "周孟儒", "潘欣臻", "李祯韵", "叶洁启", "梁哲宇", "黄晓萍", "杨雅萍", "卢志铭", "张茂以", "林婉婷", "蔡宜芸", "林珮瑜", "黄柏仪", "周逸珮", "夏雅惠", "王采珮", "林孟霖", "林竹水", "王怡乐", "王爱乐", "金佳蓉", "韩健毓", "李士杰", "陈董珍", "苏姿婷", "张政霖", "李志宏", "陈素达", "陈虹荣", "何美玲", "李仪琳", "张俞幸", "黄秋萍", "潘吉维" ];

Utils.tens = [ "", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十" ];

Utils.digitalUnits = [ "", "十", "百", "千", "万", "亿", "十", "百", "千" ];

Utils.redTeamRevivalPoint = [ new mw.Vector(-3645, -448, 150), new mw.Vector(-3645, 0, 150), new mw.Vector(-3645, 312, 150) ];

Utils.blueTeamRevivalPoint = [ new mw.Vector(3473, -291, 150), new mw.Vector(3473, 160, 150), new mw.Vector(3473, 779, 150) ];

Utils.inColorHexStrMap = new Map;

function cubicBezier(p1x, p1y, p2x, p2y) {
    const ZERO_LIMIT = 1e-6;
    const ax = 3 * p1x - 3 * p2x + 1;
    const bx = 3 * p2x - 6 * p1x;
    const cx = 3 * p1x;
    const ay = 3 * p1y - 3 * p2y + 1;
    const by = 3 * p2y - 6 * p1y;
    const cy = 3 * p1y;
    function sampleCurveDerivativeX(t) {
        return (3 * ax * t + 2 * bx) * t + cx;
    }
    function sampleCurveX(t) {
        return ((ax * t + bx) * t + cx) * t;
    }
    function sampleCurveY(t) {
        return ((ay * t + by) * t + cy) * t;
    }
    function solveCurveX(x) {
        let t2 = x;
        let derivative;
        let x2;
        for (let i = 0; i < 8; i++) {
            x2 = sampleCurveX(t2) - x;
            if (Math.abs(x2) < ZERO_LIMIT) {
                return t2;
            }
            derivative = sampleCurveDerivativeX(t2);
            if (Math.abs(derivative) < ZERO_LIMIT) {
                break;
            }
            t2 -= x2 / derivative;
        }
        let t1 = 1;
        let t0 = 0;
        t2 = x;
        while (t1 > t0) {
            x2 = sampleCurveX(t2) - x;
            if (Math.abs(x2) < ZERO_LIMIT) {
                return t2;
            }
            if (x2 > 0) {
                t1 = t2;
            } else {
                t0 = t2;
            }
            t2 = (t1 + t0) / 2;
        }
        return t2;
    }
    function solve(x) {
        return sampleCurveY(solveCurveX(x));
    }
    return solve;
}

var foreign159 = Object.freeze({
    __proto__: null,
    cubicBezier: cubicBezier,
    default: Utils
});

let AdPanel_Generate = class AdPanel_Generate extends UIScript {
    get mTitleTxt() {
        if (!this.mTitleTxt_Internal && this.uiWidgetBase) {
            this.mTitleTxt_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/Canvas/Canvas_1/mTitleTxt");
        }
        return this.mTitleTxt_Internal;
    }
    get mContentTxt() {
        if (!this.mContentTxt_Internal && this.uiWidgetBase) {
            this.mContentTxt_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/Canvas/Canvas_1/mContentTxt");
        }
        return this.mContentTxt_Internal;
    }
    get mNoBtn() {
        if (!this.mNoBtn_Internal && this.uiWidgetBase) {
            this.mNoBtn_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/Canvas/Canvas_1/mNoBtn");
        }
        return this.mNoBtn_Internal;
    }
    get mYesBtn() {
        if (!this.mYesBtn_Internal && this.uiWidgetBase) {
            this.mYesBtn_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/Canvas/Canvas_1/mYesBtn");
        }
        return this.mYesBtn_Internal;
    }
    get mYesBtn_1() {
        if (!this.mYesBtn_1_Internal && this.uiWidgetBase) {
            this.mYesBtn_1_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/Canvas/Canvas_1/mYesBtn_1");
        }
        return this.mYesBtn_1_Internal;
    }
    onAwake() {
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        this.mNoBtn.onClicked.add((() => {
            Event.dispatchToLocal("PlayButtonClick", "mNoBtn");
        }));
        this.initLanguage(this.mNoBtn);
        this.mNoBtn.touchMethod = mw.ButtonTouchMethod.PreciseTap;
        this.initLanguage(this.mTitleTxt);
        this.initLanguage(this.mContentTxt);
    }
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) {}
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    hide() {
        mw.UIService.hideUI(this);
    }
};

AdPanel_Generate = __decorate([ UIBind("UI/module/AdModule/AdPanel.ui") ], AdPanel_Generate);

var AdPanel_Generate$1 = AdPanel_Generate;

var foreign167 = Object.freeze({
    __proto__: null,
    default: AdPanel_Generate$1
});

class AdPanel extends AdPanel_Generate$1 {
    constructor() {
        super(...arguments);
        this.callback = null;
        this.yesInterval = null;
    }
    onStart() {
        this.canUpdate = false;
        this.layer = mw.UILayerDialog;
        this.bindButtons();
    }
    bindButtons() {
        this.mYesBtn.onClose.add(this.onClickYesButton.bind(this));
        this.mNoBtn.onClicked.add(this.onClickNoButton.bind(this));
        Utils.setWidgetVisibility(this.mYesBtn_1, mw.SlateVisibility.Collapsed);
    }
    onClickYesButton(isSuccess) {
        if (!isSuccess) {
            Notice.showDownNotice("获取失败，请重试");
            return;
        }
        this.hideAdPanel();
        if (this.callback) this.callback();
    }
    onClickNoButton() {
        this.hideAdPanel();
    }
    showRewardAd(callback, contentText, noText = "取消", yesText = "免费领取", isAuto = true) {
        this.callback = callback;
        this.mContentTxt.text = contentText;
        this.mNoBtn.text = noText;
        this.mYesBtn.text = yesText;
        this.mYesBtn_1.text = `${noText}`;
        this.showAdPanel();
    }
    autoYes() {
        this.clearAutoYesInterval();
        let time = 5;
        this.mYesBtn_1.text = "关闭(" + time + ")";
        this.yesInterval = TimeUtil.setInterval((() => {
            time--;
            this.mYesBtn_1.text = "关闭(" + time + ")";
            if (time <= 0) {
                this.hideAdPanel();
                this.clearAutoYesInterval();
            }
        }), 1);
    }
    clearAutoYesInterval() {
        if (this.yesInterval) {
            TimeUtil.clearInterval(this.yesInterval);
            this.yesInterval = null;
        }
    }
    showAdPanel() {
        if (this.visible) return;
        this.show();
    }
    hideAdPanel() {
        if (!this.visible) return;
        Utils.closeUITween(this.rootCanvas, null, (() => {
            this.hide();
        }));
    }
    onShow(...params) {
        Utils.openUITween(this.rootCanvas, null, null);
    }
}

var foreign85 = Object.freeze({
    __proto__: null,
    default: AdPanel
});

let ChangeClothes = class ChangeClothes extends Script {
    constructor() {
        super(...arguments);
        this.shareId = "";
    }
    onStart() {
        if (mw.SystemUtil.isClient()) {
            let trigger = this.gameObject;
            let npc = trigger.parent;
            if (this.shareId && this.shareId != "") Utils.applySharedId(npc, this.shareId);
            trigger.onEnter.add((char => {
                if (char.gameObjectId != Player.localPlayer.character.gameObjectId) return;
                if (!GlobalData.isOpenIAA) {
                    char.setDescription(npc.getDescription());
                    char.asyncReady().then((() => {
                        char.syncDescription();
                    }));
                } else {
                    mw.UIService.getUI(AdPanel).showRewardAd((() => {
                        char.setDescription(npc.getDescription());
                        char.asyncReady().then((() => {
                            char.syncDescription();
                        }));
                    }), `免费使用`, `取消`, `免费使用`);
                }
            }));
        }
    }
    onUpdate(dt) {}
    onDestroy() {}
};

__decorate([ mw.Property({
    displayName: "ShareId",
    group: "脚本设置"
}) ], ChangeClothes.prototype, "shareId", void 0);

ChangeClothes = __decorate([ Component ], ChangeClothes);

var ChangeClothes$1 = ChangeClothes;

var foreign1 = Object.freeze({
    __proto__: null,
    default: ChangeClothes$1
});

let ConfirmPanel_Generate = class ConfirmPanel_Generate extends UIScript {
    get mTitleTextBlock() {
        if (!this.mTitleTextBlock_Internal && this.uiWidgetBase) {
            this.mTitleTextBlock_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/MainCanvas/mTitleTextBlock");
        }
        return this.mTitleTextBlock_Internal;
    }
    get mContentTextBlock() {
        if (!this.mContentTextBlock_Internal && this.uiWidgetBase) {
            this.mContentTextBlock_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/MainCanvas/mContentTextBlock");
        }
        return this.mContentTextBlock_Internal;
    }
    get mSureButton() {
        if (!this.mSureButton_Internal && this.uiWidgetBase) {
            this.mSureButton_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/MainCanvas/mSureButton");
        }
        return this.mSureButton_Internal;
    }
    get mSureTextBlock() {
        if (!this.mSureTextBlock_Internal && this.uiWidgetBase) {
            this.mSureTextBlock_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/MainCanvas/mSureButton/mSureTextBlock");
        }
        return this.mSureTextBlock_Internal;
    }
    get mCancleButton() {
        if (!this.mCancleButton_Internal && this.uiWidgetBase) {
            this.mCancleButton_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/MainCanvas/mCancleButton");
        }
        return this.mCancleButton_Internal;
    }
    get mCancleTextBlock() {
        if (!this.mCancleTextBlock_Internal && this.uiWidgetBase) {
            this.mCancleTextBlock_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/MainCanvas/mCancleButton/mCancleTextBlock");
        }
        return this.mCancleTextBlock_Internal;
    }
    onAwake() {
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        this.mSureButton.onClicked.add((() => {
            Event.dispatchToLocal("PlayButtonClick", "mSureButton");
        }));
        this.mSureButton.touchMethod = mw.ButtonTouchMethod.PreciseTap;
        this.mCancleButton.onClicked.add((() => {
            Event.dispatchToLocal("PlayButtonClick", "mCancleButton");
        }));
        this.mCancleButton.touchMethod = mw.ButtonTouchMethod.PreciseTap;
        this.initLanguage(this.mTitleTextBlock);
        this.initLanguage(this.mContentTextBlock);
        this.initLanguage(this.mSureTextBlock);
        this.initLanguage(this.mCancleTextBlock);
    }
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) {}
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    hide() {
        mw.UIService.hideUI(this);
    }
};

ConfirmPanel_Generate = __decorate([ UIBind("UI/common/ConfirmPanel.ui") ], ConfirmPanel_Generate);

var ConfirmPanel_Generate$1 = ConfirmPanel_Generate;

var foreign161 = Object.freeze({
    __proto__: null,
    default: ConfirmPanel_Generate$1
});

class ConfirmPanel extends ConfirmPanel_Generate$1 {
    constructor() {
        super(...arguments);
        this.callback = null;
    }
    onStart() {
        this.canUpdate = false;
        this.layer = UILayerMiddle;
        this.bindButton();
    }
    bindButton() {
        this.mSureButton.onClicked.add((() => {
            this.hide();
            if (this.callback) this.callback();
        }));
        this.mCancleButton.onClicked.add((() => {
            this.hideTween();
        }));
    }
    confirmTips(callback, contentText, yesText = "购买", noText = "取消", titleText = "提示") {
        this.mSureTextBlock.text = yesText;
        this.mCancleTextBlock.text = noText;
        this.mTitleTextBlock.text = titleText;
        this.mContentTextBlock.text = contentText;
        this.callback = callback;
        this.show();
    }
    onShow(...params) {
        Utils.openUITween(this.rootCanvas, null, null);
    }
    hideTween() {
        Utils.closeUITween(this.rootCanvas, null, (() => {
            this.hide();
        }));
    }
}

var foreign2 = Object.freeze({
    __proto__: null,
    default: ConfirmPanel
});

class ConfigBase {
    constructor(excelData) {
        this.ELEMENTARR = [];
        this.ELEMENTMAP = new Map;
        this.KEYMAP = new Map;
        let headerLine = 2;
        this.ELEMENTARR = new Array(excelData.length - headerLine);
        for (let i = 0; i < this.ELEMENTARR.length; i++) {
            this.ELEMENTARR[i] = {};
        }
        let column = excelData[0].length;
        for (let j = 0; j < column; j++) {
            let name = excelData[0][j];
            let tags = excelData[1][j].split("|");
            if (tags.includes(ConfigBase.TAG_CHILDLANGUAGE)) continue;
            let jOffect = 0;
            if (tags.includes(ConfigBase.TAG_MAINLANGUAGE)) {
                let index = j + ConfigBase.languageIndex;
                let targetTags = excelData[1][index].split("|");
                if (index < column && targetTags.includes(ConfigBase.TAG_CHILDLANGUAGE)) {
                    jOffect = ConfigBase.languageIndex;
                }
            }
            let hasTag_Key = tags.includes(ConfigBase.TAG_KEY);
            let hasTag_Language = tags.includes(ConfigBase.TAG_LANGUAGE);
            for (let i = 0; i < this.ELEMENTARR.length; i++) {
                let ele = this.ELEMENTARR[i];
                let value = excelData[i + headerLine][j + jOffect];
                if (j == 0) {
                    this.ELEMENTMAP.set(value, ele);
                } else {
                    if (hasTag_Key) {
                        this.KEYMAP.set(value, excelData[i + headerLine][0]);
                    }
                    if (hasTag_Language) {
                        if (ConfigBase.getLanguage != null) {
                            value = ConfigBase.getLanguage(value);
                        } else {
                            value = "unknow";
                        }
                    }
                }
                ele[name] = value;
            }
        }
    }
    static initLanguage(languageIndex, getLanguageFun) {
        ConfigBase.languageIndex = languageIndex;
        ConfigBase.getLanguage = getLanguageFun;
        if (ConfigBase.languageIndex < 0) {
            ConfigBase.languageIndex = ConfigBase.getSystemLanguageIndex();
        }
    }
    static getSystemLanguageIndex() {
        let language = LocaleUtil.getDefaultLocale().toString().toLowerCase();
        if (!!language.match("en")) {
            return 0;
        }
        if (!!language.match("zh")) {
            return 1;
        }
        if (!!language.match("ja")) {
            return 2;
        }
        if (!!language.match("de")) {
            return 3;
        }
        return 0;
    }
    getElement(id) {
        let ele = this.ELEMENTMAP.get(Number(id)) || this.ELEMENTMAP.get(this.KEYMAP.get(id));
        if (ele == null) {
            console.warn(this.constructor.name + "配置表中找不到元素 id:" + id);
        }
        return ele;
    }
    findElement(fieldName, fieldValue) {
        for (let i = 0; i < this.ELEMENTARR.length; i++) {
            if (this.ELEMENTARR[i][fieldName] == fieldValue) {
                return this.ELEMENTARR[i];
            }
        }
    }
    findElements(fieldName, fieldValue) {
        let arr = [];
        for (let i = 0; i < this.ELEMENTARR.length; i++) {
            if (this.ELEMENTARR[i][fieldName] == fieldValue) {
                arr.push(this.ELEMENTARR[i]);
            }
        }
        return arr;
    }
    getAllElement() {
        return this.ELEMENTARR;
    }
}

ConfigBase.TAG_KEY = "Key";

ConfigBase.TAG_LANGUAGE = "Language";

ConfigBase.TAG_MAINLANGUAGE = "MainLanguage";

ConfigBase.TAG_CHILDLANGUAGE = "ChildLanguage";

ConfigBase.languageIndex = 0;

var foreign17 = Object.freeze({
    __proto__: null,
    ConfigBase: ConfigBase
});

const EXCELDATA$16 = [ [ "ID", "Describe", "AssetId", "SexType" ], [ "", "", "", "" ], [ 1, null, "292307", 2 ], [ 2, null, "240931", 2 ], [ 3, null, "144441", 2 ], [ 4, null, "137386", 2 ], [ 5, null, "117489", 2 ], [ 6, null, "115847", 2 ], [ 7, null, "67591", 2 ], [ 8, null, "66710", 2 ], [ 9, null, "64416", 2 ], [ 10, null, "60991", 2 ], [ 11, null, "140281", 1 ], [ 12, null, "123710", 1 ], [ 13, null, "119111", 1 ], [ 14, null, "117051", 1 ], [ 15, null, "109070", 1 ] ];

class AccessoriesGlovesConfig extends ConfigBase {
    constructor() {
        super(EXCELDATA$16);
    }
}

var foreign7 = Object.freeze({
    __proto__: null,
    AccessoriesGlovesConfig: AccessoriesGlovesConfig
});

const EXCELDATA$15 = [ [ "ID", "Describe", "AssetId", "SexType" ], [ "", "", "", "" ], [ 1, null, "399525", 2 ], [ 2, null, "264186", 2 ], [ 3, null, "248351", 2 ], [ 4, null, "221716", 2 ], [ 5, null, "221709", 2 ], [ 6, null, "218570", 2 ], [ 7, null, "142606", 2 ], [ 8, null, "137492", 2 ], [ 9, null, "134959", 2 ], [ 10, null, "66353", 2 ], [ 11, null, "64458", 2 ], [ 12, null, "451380", 1 ], [ 13, null, "264153", 1 ], [ 14, null, "218835", 1 ], [ 15, null, "134561", 1 ], [ 16, null, "134559", 1 ], [ 17, null, "74680", 1 ], [ 18, null, "66593", 1 ], [ 19, null, "66553", 1 ], [ 20, null, "66220", 1 ], [ 21, null, "66149", 1 ], [ 22, null, "65725", 1 ], [ 23, null, "64951", 1 ] ];

class ALongCoatTopConfig extends ConfigBase {
    constructor() {
        super(EXCELDATA$15);
    }
}

var foreign8 = Object.freeze({
    __proto__: null,
    ALongCoatTopConfig: ALongCoatTopConfig
});

const EXCELDATA$14 = [ [ "ID", "Describe", "AssetId", "SexType" ], [ "", "", "", "" ], [ 1, "紫袍皇妃", "361904", 2 ], [ 2, "黄袍皇妃", "361909", 2 ], [ 3, "柔弱少女", "361917", 2 ], [ 4, "旗袍", "163277", 2 ], [ 5, "冰雪少女服饰", "163281", 2 ], [ 6, "短款汉服襦裙", "163285", 2 ], [ 7, "西域舞蹈服饰", "163289", 2 ], [ 8, "对襟襦裙", "163295", 2 ], [ 9, "汉服襦裙", "163314", 2 ], [ 10, "民族服饰", "163711", 2 ], [ 11, "古风大唐袖衫", "270466", 2 ], [ 12, "古装潮流女", "299952", 2 ], [ 13, "汉服男套装", "162928", 1 ], [ 14, "作战服", "162951", 1 ], [ 15, "汉服长袍", "162965", 1 ], [ 16, "清代官服", "164358", 1 ], [ 17, "刺绣古装男", "300154", 1 ], [ 18, "古风长发书生", "351095", 1 ], [ 19, "盔甲套装男", "351111", 1 ], [ 20, "富家子弟", "361912", 1 ], [ 21, "黑衣侠客", "361918", 1 ], [ 22, "古代将军", "362520", 1 ], [ 23, "白衣军师", "362525", 1 ], [ 24, "古代诗人", "362539", 1 ] ];

class AncientMoldingOutfitConfig extends ConfigBase {
    constructor() {
        super(EXCELDATA$14);
    }
}

var foreign9 = Object.freeze({
    __proto__: null,
    AncientMoldingOutfitConfig: AncientMoldingOutfitConfig
});

const EXCELDATA$13 = [ [ "ID", "Describe", "AssetId", "Transform", "SexType" ], [ "", "", "", "", "" ], [ 1, "双层翅膀", "334814", [ "0", "0", "0", "0", "0", "90", "1", "1", "1" ], 0 ], [ 2, "翅膀", "135851", [ "0", "0", "0", "0", "0", "90", "1", "1", "1" ], 0 ], [ 3, "六翼翅膀", "399002", [ "0", "0", "0", "0", "0", "90", "1", "1", "1" ], 0 ], [ 4, "精灵翅膀", "339243", [ "0", "0", "0", "0", "0", "90", "1", "1", "1" ], 0 ], [ 5, null, "326976", [ "0", "0", "0", "0", "0", "90", "1", "1", "1" ], 0 ], [ 6, null, "211667", [ "0", "0", "0", "0", "0", "90", "1", "1", "1" ], 0 ], [ 7, null, "452702", [ "0", "0", "0", "0", "0", "90", "1", "1", "1" ], 0 ], [ 8, null, "449694", [ "0", "0", "0", "0", "0", "90", "1", "1", "1" ], 0 ], [ 9, null, "449687", [ "0", "0", "0", "0", "0", "90", "1", "1", "1" ], 0 ], [ 10, null, "449659", [ "0", "0", "0", "0", "0", "90", "1", "1", "1" ], 0 ], [ 11, null, "393543", [ "0", "0", "0", "0", "0", "90", "1", "1", "1" ], 0 ], [ 12, null, "375152", [ "0", "0", "0", "0", "0", "90", "1", "1", "1" ], 0 ], [ 13, null, "375788", [ "0", "0", "0", "0", "0", "90", "1", "1", "1" ], 0 ], [ 14, null, "375145", [ "0", "0", "0", "0", "0", "90", "1", "1", "1" ], 0 ], [ 15, null, "375134", [ "0", "0", "0", "0", "0", "90", "1", "1", "1" ], 0 ], [ 16, null, "145912", [ "0", "0", "0", "0", "0", "90", "1", "1", "1" ], 0 ], [ 17, null, "42805", [ "0", "0", "0", "0", "0", "90", "1", "1", "1" ], 0 ], [ 18, null, "42816", [ "0", "0", "0", "0", "0", "90", "1", "1", "1" ], 0 ], [ 19, null, "342530", [ "0", "0", "0", "0", "0", "90", "1", "1", "1" ], 0 ], [ 20, "棺材", "117847", [ "0", "0", "-132", "0", "0", "90", "1", "1", "1" ], 0 ], [ 21, "环绕", "146784", [ "0", "0", "-18", "0", "0", "0", "1.2", "1.2", "1.2" ], 0 ], [ 22, null, "88757", [ "30", "0", "0", "0", "0", "90", "1", "1", "1" ], 0 ], [ 23, null, "88756", [ "30", "0", "0", "0", "0", "90", "1", "1", "1" ], 0 ], [ 24, null, "88767", [ "30", "0", "0", "0", "0", "90", "1", "1", "1" ], 0 ], [ 25, null, "88770", [ "30", "0", "0", "0", "0", "90", "1", "1", "1" ], 0 ], [ 26, null, "88769", [ "30", "0", "0", "0", "0", "90", "1", "1", "1" ], 0 ], [ 27, null, "127018", [ "30", "0", "-100", "0", "0", "90", "1", "1", "1" ], 0 ], [ 28, null, "127019", [ "30", "0", "-100", "0", "0", "90", "1", "1", "1" ], 0 ], [ 29, null, "155677", [ "30", "0", "0", "0", "0", "90", "1", "1", "1" ], 0 ], [ 30, null, "155680", [ "30", "0", "0", "0", "0", "90", "1", "1", "1" ], 0 ], [ 31, null, "155682", [ "30", "0", "0", "0", "0", "90", "1", "1", "1" ], 0 ], [ 32, null, "155684", [ "30", "0", "0", "0", "0", "90", "1", "1", "1" ], 0 ], [ 33, null, "155705", [ "30", "0", "0", "0", "0", "90", "1", "1", "1" ], 0 ], [ 34, null, "155706", [ "30", "0", "0", "0", "0", "90", "1", "1", "1" ], 0 ], [ 35, null, "155707", [ "30", "0", "0", "0", "0", "90", "1", "1", "1" ], 0 ], [ 36, null, "157113", [ "30", "0", "0", "0", "90", "0", "1", "1", "1" ], 0 ], [ 37, null, "157118", [ "30", "0", "0", "0", "90", "0", "1", "1", "1" ], 0 ], [ 38, null, "157119", [ "30", "0", "0", "0", "90", "0", "1", "1", "1" ], 0 ], [ 39, null, "157253", [ "30", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 40, null, "157254", [ "30", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 41, null, "160335", [ "30", "0", "0", "0", "90", "0", "1", "1", "1" ], 0 ], [ 42, null, "160339", [ "30", "0", "0", "0", "90", "0", "1", "1", "1" ], 0 ], [ 43, null, "160340", [ "30", "0", "0", "0", "90", "0", "1", "1", "1" ], 0 ], [ 44, null, "160342", [ "30", "0", "0", "0", "90", "0", "1", "1", "1" ], 0 ], [ 45, null, "160344", [ "30", "0", "0", "0", "90", "0", "1", "1", "1" ], 0 ], [ 46, null, "160347", [ "30", "0", "0", "0", "90", "0", "1", "1", "1" ], 0 ], [ 47, null, "160345", [ "30", "0", "0", "0", "90", "0", "1", "1", "1" ], 0 ], [ 48, null, "160343", [ "30", "0", "0", "0", "90", "0", "1", "1", "1" ], 0 ], [ 49, null, "301947", [ "30", "0", "0", "0", "0", "90", "1", "1", "1" ], 0 ], [ 50, null, "326208", [ "30", "0", "0", "0", "0", "90", "1", "1", "1" ], 0 ], [ 51, null, "326209", [ "30", "0", "0", "0", "0", "90", "1", "1", "1" ], 0 ], [ 52, null, "326306", [ "30", "0", "0", "0", "0", "90", "1", "1", "1" ], 0 ], [ 53, null, "328807", [ "30", "0", "0", "0", "0", "90", "1", "1", "1" ], 0 ], [ 54, null, "445944", [ "30", "0", "0", "0", "0", "90", "1", "1", "1" ], 0 ], [ 55, null, "499861", [ "30", "0", "0", "0", "0", "90", "1", "1", "1" ], 0 ], [ 56, null, "517323", [ "30", "0", "-100", "0", "0", "90", "1", "1", "1" ], 0 ], [ 57, null, "510179", [ "30", "0", "-100", "0", "0", "90", "1", "1", "1" ], 0 ], [ 58, null, "510182", [ "30", "0", "-100", "0", "0", "90", "1", "1", "1" ], 0 ], [ 59, null, "510184", [ "30", "0", "-100", "0", "0", "90", "1", "1", "1" ], 0 ], [ 60, null, "530877", [ "30", "0", "-100", "0", "0", "90", "1", "1", "1" ], 0 ], [ 61, null, "530878", [ "30", "0", "-100", "0", "0", "90", "1", "1", "1" ], 0 ], [ 62, null, "530881", [ "30", "0", "-100", "0", "0", "90", "1", "1", "1" ], 0 ], [ 63, "闪电", "142950", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 64, "飞行背包", "131208", [ "-6", "0", "-123", "0", "0", "90", "1", "1", "1" ], 0 ], [ 65, "小熊背包", "454815", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 66, "小熊背包", "454822", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 67, "小熊背包", "454833", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 68, "小熊背包", "454834", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 69, null, "132890", [ "30", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 70, null, "132891", [ "30", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 71, null, "132893", [ "30", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 72, null, "132894", [ "30", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 73, null, "132892", [ "30", "0", "0", "0", "0", "90", "1", "1", "1" ], 0 ], [ 74, null, "402315", [ "30", "0", "0", "0", "0", "90", "1", "1", "1" ], 0 ], [ 75, null, "402301", [ "30", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 76, null, "397447", [ "30", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 77, null, "409377", [ "30", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 78, null, "409330", [ "30", "0", "0", "0", "0", "90", "1", "1", "1" ], 0 ], [ 79, null, "424761", [ "30", "0", "0", "0", "90", "0", "1", "1", "1" ], 0 ], [ 80, null, "348269", [ "30", "0", "0", "0", "0", "90", "1", "1", "1" ], 0 ], [ 81, null, "196412", [ "30", "0", "0", "0", "0", "90", "1", "1", "1" ], 0 ], [ 82, null, "155703", [ "30", "0", "0", "0", "0", "90", "1", "1", "1" ], 0 ] ];

class BackConfig extends ConfigBase {
    constructor() {
        super(EXCELDATA$13);
    }
}

var foreign10 = Object.freeze({
    __proto__: null,
    BackConfig: BackConfig
});

const EXCELDATA$12 = [ [ "ID", "Describe", "AssetId", "SexType" ], [ "", "", "", "" ], [ 1, null, "57735", 2 ], [ 2, null, "60080", 2 ], [ 3, null, "60116", 2 ], [ 4, null, "60990", 2 ], [ 5, null, "61002", 2 ], [ 6, null, "62545", 2 ], [ 7, null, "62548", 2 ], [ 8, null, "62786", 2 ], [ 9, null, "62788", 2 ], [ 10, null, "62789", 2 ], [ 11, null, "62966", 2 ], [ 12, null, "62968", 2 ], [ 13, null, "63305", 2 ], [ 14, null, "63306", 2 ], [ 15, null, "63309", 2 ], [ 16, null, "63310", 2 ], [ 17, null, "63311", 2 ], [ 18, null, "63549", 2 ], [ 19, null, "63550", 2 ], [ 20, null, "63551", 2 ], [ 21, null, "63647", 2 ], [ 22, null, "63874", 2 ], [ 23, null, "64148", 2 ], [ 24, null, "64149", 2 ], [ 25, null, "64150", 2 ], [ 26, null, "64259", 2 ], [ 27, null, "64261", 2 ], [ 28, null, "64310", 2 ], [ 29, null, "64415", 2 ], [ 30, null, "64717", 2 ], [ 31, null, "64718", 2 ], [ 32, null, "65663", 2 ], [ 33, null, "65711", 2 ], [ 34, null, "65868", 2 ], [ 35, null, "66357", 2 ], [ 36, null, "66418", 2 ], [ 37, null, "66507", 2 ], [ 38, null, "66563", 2 ], [ 39, null, "66575", 2 ], [ 40, null, "66711", 2 ], [ 41, null, "66734", 2 ], [ 42, null, "67587", 2 ], [ 43, null, "73211", 2 ], [ 44, null, "73212", 2 ], [ 45, null, "74318", 2 ], [ 46, null, "86091", 2 ], [ 47, null, "109838", 2 ], [ 48, null, "117150", 2 ], [ 49, null, "117492", 2 ], [ 50, null, "118421", 2 ], [ 51, null, "118435", 2 ], [ 52, null, "118445", 2 ], [ 53, null, "118452", 2 ], [ 54, null, "118483", 2 ], [ 55, null, "118517", 2 ], [ 56, null, "118531", 2 ], [ 57, null, "118544", 2 ], [ 58, null, "118562", 2 ], [ 59, null, "119413", 2 ], [ 60, null, "119430", 2 ], [ 61, null, "119446", 2 ], [ 62, null, "124779", 2 ], [ 63, null, "124792", 2 ], [ 64, null, "126006", 2 ], [ 65, null, "126617", 2 ], [ 66, null, "127276", 2 ], [ 67, null, "127637", 2 ], [ 68, null, "127680", 2 ], [ 69, null, "132223", 2 ], [ 70, null, "132225", 2 ], [ 71, null, "132227", 2 ], [ 72, null, "132228", 2 ], [ 73, null, "132229", 2 ], [ 74, null, "137381", 2 ], [ 75, null, "137493", 2 ], [ 76, null, "140482", 2 ], [ 77, null, "141711", 2 ], [ 78, null, "142599", 2 ], [ 79, null, "142605", 2 ], [ 80, null, "142676", 2 ], [ 81, null, "142677", 2 ], [ 82, null, "142681", 2 ], [ 83, null, "142836", 2 ], [ 84, null, "142846", 2 ], [ 85, null, "144625", 2 ], [ 86, null, "144680", 2 ], [ 87, null, "181364", 2 ], [ 88, null, "195705", 2 ], [ 89, null, "195706", 2 ], [ 90, null, "217608", 2 ], [ 91, null, "218591", 2 ], [ 92, null, "221652", 2 ], [ 93, null, "240053", 2 ], [ 94, null, "240936", 2 ], [ 95, null, "241188", 2 ], [ 96, null, "241443", 2 ], [ 97, null, "292001", 2 ], [ 98, null, "299080", 2 ], [ 99, null, "346551", 2 ], [ 100, null, "349653", 2 ], [ 101, null, "358219", 2 ], [ 102, null, "392301", 2 ], [ 103, null, "399523", 2 ], [ 104, null, "457926", 2 ], [ 105, null, "468348", 2 ], [ 106, null, "490923", 2 ], [ 107, null, "497920", 2 ], [ 108, null, "60383", 1 ], [ 109, null, "63679", 1 ], [ 110, null, "63910", 1 ], [ 111, null, "64186", 1 ], [ 112, null, "64719", 1 ], [ 113, null, "64998", 1 ], [ 114, null, "65007", 1 ], [ 115, null, "65728", 1 ], [ 116, null, "65777", 1 ], [ 117, null, "65977", 1 ], [ 118, null, "66109", 1 ], [ 119, null, "66151", 1 ], [ 120, null, "66161", 1 ], [ 121, null, "66421", 1 ], [ 122, null, "66422", 1 ], [ 123, null, "66557", 1 ], [ 124, null, "66595", 1 ], [ 125, null, "66698", 1 ], [ 126, null, "74120", 1 ], [ 127, null, "74121", 1 ], [ 128, null, "92012", 1 ], [ 129, null, "119494", 1 ], [ 130, null, "119680", 1 ], [ 131, null, "119696", 1 ], [ 132, null, "119876", 1 ], [ 133, null, "120200", 1 ], [ 134, null, "121120", 1 ], [ 135, null, "121121", 1 ], [ 136, null, "122002", 1 ], [ 137, null, "122920", 1 ], [ 138, null, "124848", 1 ], [ 139, null, "126004", 1 ], [ 140, null, "129175", 1 ], [ 141, null, "129459", 1 ], [ 142, null, "129952", 1 ], [ 143, null, "130755", 1 ], [ 144, null, "140328", 1 ], [ 145, null, "140424", 1 ], [ 146, null, "142603", 1 ], [ 147, null, "144328", 1 ], [ 148, null, "144340", 1 ], [ 149, null, "144412", 1 ], [ 150, null, "241323", 1 ], [ 151, null, "247527", 1 ], [ 152, null, "250942", 1 ], [ 153, null, "250944", 1 ], [ 154, null, "266162", 1 ], [ 155, null, "314482", 1 ] ];

class BackHairConfig extends ConfigBase {
    constructor() {
        super(EXCELDATA$12);
    }
}

var foreign11 = Object.freeze({
    __proto__: null,
    BackHairConfig: BackHairConfig
});

const EXCELDATA$11 = [ [ "ID", "Describe", "AssetId", "SexType" ], [ "", "", "", "" ], [ 1, null, "531764", 0 ], [ 2, null, "370252", 0 ], [ 3, null, "370251", 0 ], [ 4, null, "370250", 0 ], [ 5, null, "370249", 0 ], [ 6, null, "370246", 0 ], [ 7, null, "370245", 0 ], [ 8, null, "370239", 0 ], [ 9, null, "215936", 0 ], [ 10, null, "215935", 0 ], [ 11, null, "215934", 0 ], [ 12, null, "215933", 0 ], [ 13, null, "215932", 0 ], [ 14, null, "215930", 0 ], [ 15, null, "215929", 0 ], [ 16, null, "215928", 0 ], [ 17, null, "215927", 0 ], [ 18, null, "215926", 0 ], [ 19, null, "215925", 0 ], [ 20, null, "215924", 0 ], [ 21, null, "215923", 0 ], [ 22, null, "215922", 0 ], [ 23, null, "215921", 0 ], [ 24, null, "215920", 0 ], [ 25, null, "215919", 0 ], [ 26, null, "215918", 0 ], [ 27, null, "215917", 0 ], [ 28, null, "215916", 0 ], [ 29, null, "215915", 0 ], [ 30, null, "215914", 0 ], [ 31, null, "215913", 0 ], [ 32, null, "215911", 0 ], [ 33, null, "215910", 0 ], [ 34, null, "215909", 0 ], [ 35, null, "215908", 0 ], [ 36, null, "215907", 0 ], [ 37, null, "215906", 0 ], [ 38, null, "215905", 0 ], [ 39, null, "215904", 0 ], [ 40, null, "215903", 0 ], [ 41, null, "215902", 0 ], [ 42, null, "215901", 0 ], [ 43, null, "215900", 0 ], [ 44, null, "215899", 0 ], [ 45, null, "215898", 0 ], [ 46, null, "215897", 0 ], [ 47, null, "215896", 0 ], [ 48, null, "215895", 0 ], [ 49, null, "164837", 0 ], [ 50, null, "129303", 0 ], [ 51, null, "121548", 0 ], [ 52, null, "112597", 0 ], [ 53, null, "112596", 0 ], [ 54, null, "112595", 0 ], [ 55, null, "112594", 0 ], [ 56, null, "112593", 0 ], [ 57, null, "112591", 0 ], [ 58, null, "112590", 0 ], [ 59, null, "112589", 0 ], [ 60, null, "112588", 0 ], [ 61, null, "112586", 0 ], [ 62, null, "107625", 0 ], [ 63, null, "77490", 0 ], [ 64, null, "77489", 0 ], [ 65, null, "77488", 0 ], [ 66, null, "77487", 0 ], [ 67, null, "77442", 0 ], [ 68, null, "77441", 0 ], [ 69, null, "77440", 0 ], [ 70, null, "77439", 0 ], [ 71, null, "77438", 0 ], [ 72, null, "77437", 0 ], [ 73, null, "75674", 0 ], [ 74, null, "75673", 0 ], [ 75, null, "32114", 0 ], [ 76, null, "32103", 0 ] ];

class BlushConfig extends ConfigBase {
    constructor() {
        super(EXCELDATA$11);
    }
}

var foreign12 = Object.freeze({
    __proto__: null,
    BlushConfig: BlushConfig
});

const EXCELDATA$10 = [ [ "ID", "Describe", "Scale", "SexType", "Icon" ], [ "", "", "", "", "" ], [ 1, "0.7倍", .7, 0, "119160" ], [ 2, "0.8倍", .8, 0, "119155" ], [ 3, "0.9倍", .9, 0, "119155" ], [ 4, "正常", 1, 0, "119156" ], [ 5, "1.1倍", 1.1, 0, "119157" ], [ 6, "1.2倍", 1.2, 0, "119157" ], [ 7, "1.3倍", 1.3, 0, "119152" ] ];

class BodyTypeConfig extends ConfigBase {
    constructor() {
        super(EXCELDATA$10);
    }
}

var foreign13 = Object.freeze({
    __proto__: null,
    BodyTypeConfig: BodyTypeConfig
});

const EXCELDATA$$ = [ [ "ID", "Describe", "AssetId", "SexType" ], [ "", "", "", "" ], [ 1, null, "502241", 2 ], [ 2, null, "497874", 2 ], [ 3, null, "497782", 2 ], [ 4, null, "458636", 2 ], [ 5, null, "457812", 2 ], [ 6, null, "440206", 2 ], [ 7, null, "437606", 2 ], [ 8, null, "412090", 2 ], [ 9, null, "298038", 2 ], [ 10, null, "264185", 2 ], [ 11, null, "240934", 2 ], [ 12, null, "240050", 2 ], [ 13, null, "221708", 2 ], [ 14, null, "218866", 2 ], [ 15, null, "140484", 2 ], [ 16, null, "137490", 2 ], [ 17, null, "137383", 2 ], [ 18, null, "134232", 2 ], [ 19, null, "131788", 2 ], [ 20, null, "128835", 2 ], [ 21, null, "125735", 2 ], [ 22, null, "115850", 2 ], [ 23, null, "111252", 2 ], [ 24, null, "111082", 2 ], [ 25, null, "74458", 2 ], [ 26, null, "66709", 2 ], [ 27, null, "64456", 2 ], [ 28, null, "64209", 2 ], [ 29, null, "63297", 2 ], [ 30, null, "63296", 2 ], [ 31, null, "62780", 2 ], [ 32, null, "59427", 2 ], [ 33, null, "502159", 1 ], [ 34, null, "494889", 1 ], [ 35, null, "479088", 1 ], [ 36, null, "218865", 1 ], [ 37, null, "218832", 1 ], [ 38, null, "181111", 1 ], [ 39, null, "140279", 1 ], [ 40, null, "134565", 1 ], [ 41, null, "134558", 1 ], [ 42, null, "131749", 1 ], [ 43, null, "129937", 1 ], [ 44, null, "129248", 1 ], [ 45, null, "129178", 1 ], [ 46, null, "127715", 1 ], [ 47, null, "127498", 1 ], [ 48, null, "125687", 1 ], [ 49, null, "122088", 1 ], [ 50, null, "119774", 1 ], [ 51, null, "119340", 1 ], [ 52, null, "119255", 1 ], [ 53, null, "112569", 1 ], [ 54, null, "111769", 1 ], [ 55, null, "111618", 1 ], [ 56, null, "111393", 1 ], [ 57, null, "111354", 1 ], [ 58, null, "111287", 1 ], [ 59, null, "111160", 1 ], [ 60, null, "94773", 1 ], [ 61, null, "92016", 1 ], [ 62, null, "74116", 1 ], [ 63, null, "66555", 1 ], [ 64, null, "65779", 1 ], [ 65, null, "60385", 1 ] ];

class BootsShoesConfig extends ConfigBase {
    constructor() {
        super(EXCELDATA$$);
    }
}

var foreign14 = Object.freeze({
    __proto__: null,
    BootsShoesConfig: BootsShoesConfig
});

const EXCELDATA$_ = [ [ "ID", "Describe", "AssetId", "SexType" ], [ "", "", "", "" ], [ 1, "套靴长裤", "60386", 1 ], [ 2, "制服短裙", "57736", 2 ] ];

class BottomConfig extends ConfigBase {
    constructor() {
        super(EXCELDATA$_);
    }
}

var foreign15 = Object.freeze({
    __proto__: null,
    BottomConfig: BottomConfig
});

const EXCELDATA$Z = [ [ "ID", "SkinToneColor", "PupilColor", "HairColor", "TopColor", "BottomColor", "ShoeColor", "GloveColor", "EyebrowsColor", "EyeLashColor", "EyeShadow", "BlushColor", "LipstickColor", "PupilStyleColor" ], [ "", "", "", "", "", "", "", "", "", "", "", "", "", "" ], [ 1, "FEF9F6FF", "F76964FF", "D5C7D4FF", "A086DEFF", "A086DEFF", "316459FF", "316459FF", "312E2CFF", "312E2CFF", "FFEEE7FF", "FFD6E6FF", "B56B63FF", "F76964FF" ], [ 2, "F7DACCFF", "FEC574FF", "A77FB8FF", "D95F5DFF", "D95F5DFF", "68605BFF", "68605BFF", "4A2B25FF", "4A2B25FF", "946A7BFF", "FE77B3FF", "F87874FF", "FEC574FF" ], [ 3, "ECC8AEFF", "AD82F7FF", "FBD97FFF", "AED85BFF", "AED85BFF", "F8AC35FF", "F8AC35FF", "7A3730FF", "7A3730FF", "A59273FF", "C14C71FF", "E78863FF", "AD82F7FF" ], [ 4, "805F4CFF", "1F2329FF", "B1AE7BFF", "FCC86DFF", "FCC86DFF", "0C81B4FF", "0C81B4FF", "863F30FF", "863F30FF", "E7B6A5FF", "FDAEB9FF", "F2AEB2FF", "1F2329FF" ], [ 5, "341C10FF", "8EE085FF", "7A92B4FF", "BABEBDFF", "BABEBDFF", "026B47FF", "026B47FF", "B26949FF", "B26949FF", "5A5D5AFF", "FED2D7FF", "FFDAD6FF", "8EE085FF" ], [ 6, "F9E175FF", "47B7F6FF", "2F2629FF", "2E5A8FFF", "2E5A8FFF", "BABEBDFF", "BABEBDFF", "E9A37BFF", "E9A37BFF", "312E2CFF", "F9E2DFFF", "BC6A65FF", "47B7F6FF" ] ];

class ColorValueConfig extends ConfigBase {
    constructor() {
        super(EXCELDATA$Z);
    }
}

var foreign16 = Object.freeze({
    __proto__: null,
    ColorValueConfig: ColorValueConfig
});

const EXCELDATA$Y = [ [ "ID", "Describe", "AssetId", "SexType" ], [ "", "", "", "" ], [ 1, "制服女", "367076", 2 ], [ 2, "制服女", "435694", 2 ], [ 3, "一定过套装", "253153", 2 ], [ 4, "主打求神套装", "264188", 2 ], [ 5, "卡皮巴拉套装1", "270007", 2 ], [ 6, "卡皮巴拉套装2", "213620", 2 ], [ 7, "女学生角色", "343066", 2 ], [ 8, "和服", "334005", 2 ], [ 9, "JK女生", "320751", 2 ], [ 10, "新年毛衣", "298108", 2 ], [ 11, "露肩长裙", "218598", 2 ], [ 12, null, "215971", 2 ], [ 13, null, "213622", 2 ], [ 14, null, "270008", 2 ], [ 15, null, "213535", 2 ], [ 16, null, "213533", 2 ], [ 17, null, "164426", 2 ], [ 18, null, "164421", 2 ], [ 19, null, "164418", 2 ], [ 20, null, "163712", 2 ], [ 21, null, "163710", 2 ], [ 22, null, "163709", 2 ], [ 23, null, "163708", 2 ], [ 24, null, "163707", 2 ], [ 25, null, "163706", 2 ], [ 26, null, "163624", 2 ], [ 27, null, "163551", 2 ], [ 28, null, "163550", 2 ], [ 29, null, "163548", 2 ], [ 30, null, "163547", 2 ], [ 31, null, "163546", 2 ], [ 32, null, "163545", 2 ], [ 33, null, "163544", 2 ], [ 34, null, "163543", 2 ], [ 35, null, "163529", 2 ], [ 36, null, "163528", 2 ], [ 37, null, "163527", 2 ], [ 38, null, "163526", 2 ], [ 39, null, "163525", 2 ], [ 40, null, "163524", 2 ], [ 41, null, "163523", 2 ], [ 42, null, "163522", 2 ], [ 43, null, "163521", 2 ], [ 44, null, "163334", 2 ], [ 45, null, "163333", 2 ], [ 46, null, "163332", 2 ], [ 47, null, "163331", 2 ], [ 48, null, "163328", 2 ], [ 49, null, "163327", 2 ], [ 50, null, "163325", 2 ], [ 51, null, "163324", 2 ], [ 52, null, "163323", 2 ], [ 53, null, "163322", 2 ], [ 54, null, "163321", 2 ], [ 55, null, "163320", 2 ], [ 56, null, "163319", 2 ], [ 57, null, "163318", 2 ], [ 58, null, "163317", 2 ], [ 59, null, "163316", 2 ], [ 60, null, "163315", 2 ], [ 61, null, "163313", 2 ], [ 62, null, "163312", 2 ], [ 63, null, "163311", 2 ], [ 64, null, "163310", 2 ], [ 65, null, "163309", 2 ], [ 66, null, "163308", 2 ], [ 67, null, "163307", 2 ], [ 68, null, "163306", 2 ], [ 69, null, "163305", 2 ], [ 70, null, "163303", 2 ], [ 71, null, "163302", 2 ], [ 72, null, "163301", 2 ], [ 73, null, "163300", 2 ], [ 74, null, "163299", 2 ], [ 75, null, "163298", 2 ], [ 76, null, "163297", 2 ], [ 77, null, "163296", 2 ], [ 78, null, "163294", 2 ], [ 79, null, "163293", 2 ], [ 80, null, "163292", 2 ], [ 81, null, "163291", 2 ], [ 82, null, "163290", 2 ], [ 83, null, "163288", 2 ], [ 84, null, "163287", 2 ], [ 85, null, "163286", 2 ], [ 86, null, "163284", 2 ], [ 87, null, "163283", 2 ], [ 88, null, "163282", 2 ], [ 89, null, "163275", 2 ], [ 90, null, "162960", 2 ], [ 91, null, "162957", 2 ], [ 92, null, "136183", 2 ], [ 93, null, "136184", 2 ], [ 94, null, "136185", 2 ], [ 95, null, "136186", 2 ], [ 96, null, "136187", 2 ], [ 97, null, "136188", 2 ], [ 98, null, "136190", 2 ], [ 99, null, "136191", 2 ], [ 100, null, "136289", 2 ], [ 101, null, "136290", 2 ], [ 102, null, "136291", 2 ], [ 103, null, "136292", 2 ], [ 104, null, "136295", 2 ], [ 105, null, "136300", 2 ], [ 106, null, "136302", 2 ], [ 107, null, "136304", 2 ], [ 108, null, "137840", 2 ], [ 109, null, "137847", 2 ], [ 110, null, "137852", 2 ], [ 111, null, "137855", 2 ], [ 112, null, "141013", 2 ], [ 113, null, "141016", 2 ], [ 114, null, "141019", 2 ], [ 115, null, "141020", 2 ], [ 116, null, "141022", 2 ], [ 117, null, "141023", 2 ], [ 118, null, "141026", 2 ], [ 119, null, "141027", 2 ], [ 120, null, "226377", 1 ], [ 121, null, "263401", 1 ], [ 122, null, "264189", 1 ], [ 123, null, "397887", 1 ], [ 124, null, "392825", 1 ], [ 125, null, "343523", 1 ], [ 126, null, "321374", 1 ], [ 127, null, "305216", 1 ], [ 128, null, "254424", 1 ], [ 129, null, "213621", 1 ], [ 130, null, "213534", 1 ], [ 131, null, "164379", 1 ], [ 132, null, "164376", 1 ], [ 133, null, "164375", 1 ], [ 134, null, "164374", 1 ], [ 135, null, "164372", 1 ], [ 136, null, "164370", 1 ], [ 137, null, "164365", 1 ], [ 138, null, "164363", 1 ], [ 139, null, "164357", 1 ], [ 140, null, "163627", 1 ], [ 141, null, "163626", 1 ], [ 142, null, "163625", 1 ], [ 143, null, "163623", 1 ], [ 144, null, "163622", 1 ], [ 145, null, "162975", 1 ], [ 146, null, "162974", 1 ], [ 147, null, "162973", 1 ], [ 148, null, "162972", 1 ], [ 149, null, "162970", 1 ], [ 150, null, "162969", 1 ], [ 151, null, "162968", 1 ], [ 152, null, "162967", 1 ], [ 153, null, "162966", 1 ], [ 154, null, "162963", 1 ], [ 155, null, "162962", 1 ], [ 156, null, "162961", 1 ], [ 157, null, "162959", 1 ], [ 158, null, "162958", 1 ], [ 159, null, "162956", 1 ], [ 160, null, "162954", 1 ], [ 161, null, "162953", 1 ], [ 162, null, "162952", 1 ], [ 163, null, "162949", 1 ], [ 164, null, "162948", 1 ], [ 165, null, "162947", 1 ], [ 166, null, "162945", 1 ], [ 167, null, "162944", 1 ], [ 168, null, "162943", 1 ], [ 169, null, "162942", 1 ], [ 170, null, "162941", 1 ], [ 171, null, "162940", 1 ], [ 172, null, "162939", 1 ], [ 173, null, "162936", 1 ], [ 174, null, "162935", 1 ], [ 175, null, "162934", 1 ], [ 176, null, "162932", 1 ], [ 177, null, "162931", 1 ], [ 178, null, "162930", 1 ], [ 179, null, "162929", 1 ], [ 180, null, "162927", 1 ], [ 181, null, "162925", 1 ], [ 182, null, "136258", 1 ], [ 183, null, "136259", 1 ], [ 184, null, "136260", 1 ], [ 185, null, "136261", 1 ], [ 186, null, "136293", 1 ], [ 187, null, "136294", 1 ], [ 188, null, "136296", 1 ], [ 189, null, "136297", 1 ], [ 190, null, "136301", 1 ], [ 191, null, "136303", 1 ], [ 192, null, "137809", 1 ], [ 193, null, "137838", 1 ], [ 194, null, "137839", 1 ], [ 195, null, "137842", 1 ], [ 196, null, "137844", 1 ], [ 197, null, "137845", 1 ], [ 198, null, "137846", 1 ], [ 199, null, "137848", 1 ], [ 200, null, "137849", 1 ], [ 201, null, "137850", 1 ], [ 202, null, "137853", 1 ], [ 203, null, "137854", 1 ], [ 204, null, "141014", 1 ], [ 205, null, "141015", 1 ], [ 206, null, "141017", 1 ], [ 207, null, "141018", 1 ], [ 208, null, "141024", 1 ], [ 209, null, "141025", 1 ], [ 210, null, "141028", 1 ], [ 211, null, "141029", 1 ], [ 212, null, "141030", 1 ], [ 213, null, "141031", 1 ], [ 214, null, "141041", 1 ], [ 215, null, "141042", 1 ], [ 216, null, "141043", 1 ], [ 217, null, "141045", 1 ], [ 218, null, "141047", 1 ], [ 219, null, "141050", 1 ], [ 220, null, "141058", 1 ], [ 221, null, "141078", 1 ], [ 222, null, "141079", 1 ], [ 223, null, "141081", 1 ], [ 224, null, "141083", 1 ], [ 225, null, "141088", 1 ], [ 226, null, "141092", 1 ], [ 227, null, "141097", 1 ], [ 228, null, "141098", 1 ], [ 229, null, "141101", 1 ], [ 230, null, "141107", 1 ] ];

class DailyStylingOutfit1Config extends ConfigBase {
    constructor() {
        super(EXCELDATA$Y);
    }
}

var foreign18 = Object.freeze({
    __proto__: null,
    DailyStylingOutfit1Config: DailyStylingOutfit1Config
});

const EXCELDATA$X = [ [ "ID", "Describe", "AssetId", "SexType" ], [ "", "", "", "" ], [ 1, null, "141048", 2 ], [ 2, null, "141049", 2 ], [ 3, null, "141051", 2 ], [ 4, null, "141052", 2 ], [ 5, null, "141053", 2 ], [ 6, null, "141054", 2 ], [ 7, null, "141057", 2 ], [ 8, null, "141059", 2 ], [ 9, null, "141060", 2 ], [ 10, null, "141080", 2 ], [ 11, null, "141082", 2 ], [ 12, null, "141084", 2 ], [ 13, null, "141085", 2 ], [ 14, null, "141089", 2 ], [ 15, null, "141090", 2 ], [ 16, null, "141091", 2 ], [ 17, null, "141093", 2 ], [ 18, null, "141095", 2 ], [ 19, null, "141100", 2 ], [ 20, null, "141102", 2 ], [ 21, null, "141106", 2 ], [ 22, null, "141126", 2 ], [ 23, null, "141141", 2 ], [ 24, null, "141142", 2 ], [ 25, null, "141154", 2 ], [ 26, null, "141483", 2 ], [ 27, null, "141484", 2 ], [ 28, null, "141488", 2 ], [ 29, null, "141490", 2 ], [ 30, null, "141492", 2 ], [ 31, null, "141494", 2 ], [ 32, null, "141501", 2 ], [ 33, null, "141502", 2 ], [ 34, null, "141503", 2 ], [ 35, null, "141505", 2 ], [ 36, null, "141528", 2 ], [ 37, null, "141542", 2 ], [ 38, null, "141620", 2 ], [ 39, null, "141647", 2 ], [ 40, null, "141714", 2 ], [ 41, null, "141717", 2 ], [ 42, null, "141733", 2 ], [ 43, null, "141928", 2 ], [ 44, null, "142185", 2 ], [ 45, null, "142188", 2 ], [ 46, null, "142189", 2 ], [ 47, null, "142191", 2 ], [ 48, null, "142194", 2 ], [ 49, null, "142249", 2 ], [ 50, null, "142257", 2 ], [ 51, null, "142267", 2 ], [ 52, null, "142269", 2 ], [ 53, null, "142274", 2 ], [ 54, null, "142287", 2 ], [ 55, null, "142289", 2 ], [ 56, null, "142304", 2 ], [ 57, null, "142307", 2 ], [ 58, null, "142309", 2 ], [ 59, null, "142348", 2 ], [ 60, null, "142350", 2 ], [ 61, null, "142391", 2 ], [ 62, null, "142392", 2 ], [ 63, null, "142427", 2 ], [ 64, null, "142866", 2 ], [ 65, null, "142867", 2 ], [ 66, null, "142875", 2 ], [ 67, null, "142879", 2 ], [ 68, null, "143391", 2 ], [ 69, null, "143393", 2 ], [ 70, null, "143400", 2 ], [ 71, null, "143401", 2 ], [ 72, null, "143419", 2 ], [ 73, null, "143420", 2 ], [ 74, null, "147934", 2 ], [ 75, null, "226385", 2 ], [ 76, null, "347528", 2 ], [ 77, null, "347564", 2 ], [ 78, null, "347607", 2 ], [ 79, null, "349208", 2 ], [ 80, null, "349214", 2 ], [ 81, null, "349215", 2 ], [ 82, null, "349245", 2 ], [ 83, null, "349269", 2 ], [ 84, null, "349270", 2 ], [ 85, null, "349310", 2 ], [ 86, null, "349315", 2 ], [ 87, null, "349371", 2 ], [ 88, null, "349375", 2 ], [ 89, null, "350314", 2 ], [ 90, null, "350315", 2 ], [ 91, null, "350318", 2 ], [ 92, null, "350568", 2 ], [ 93, null, "350569", 2 ], [ 94, null, "350570", 2 ], [ 95, null, "350574", 2 ], [ 96, null, "350575", 2 ], [ 97, null, "350576", 2 ], [ 98, null, "350667", 2 ], [ 99, null, "350738", 2 ], [ 100, null, "350739", 2 ], [ 101, null, "350740", 2 ], [ 102, null, "350744", 2 ], [ 103, null, "350746", 2 ], [ 104, null, "350752", 2 ], [ 105, null, "350756", 2 ], [ 106, null, "350956", 2 ], [ 107, null, "350958", 2 ], [ 108, null, "350959", 2 ], [ 109, null, "350973", 2 ], [ 110, null, "350987", 2 ], [ 111, null, "351004", 2 ], [ 112, null, "351025", 2 ], [ 113, null, "351397", 2 ], [ 114, null, "351404", 2 ], [ 115, null, "351497", 2 ], [ 116, null, "351500", 2 ], [ 117, null, "351600", 2 ], [ 118, null, "361910", 2 ], [ 119, null, "385222", 2 ], [ 120, null, "141108", 1 ], [ 121, null, "141127", 1 ], [ 122, null, "141140", 1 ], [ 123, null, "141152", 1 ], [ 124, null, "141482", 1 ], [ 125, null, "141485", 1 ], [ 126, null, "141486", 1 ], [ 127, null, "141487", 1 ], [ 128, null, "141489", 1 ], [ 129, null, "141491", 1 ], [ 130, null, "141493", 1 ], [ 131, null, "141526", 1 ], [ 132, null, "141527", 1 ], [ 133, null, "141536", 1 ], [ 134, null, "141537", 1 ], [ 135, null, "141609", 1 ], [ 136, null, "141618", 1 ], [ 137, null, "141623", 1 ], [ 138, null, "141643", 1 ], [ 139, null, "141713", 1 ], [ 140, null, "141715", 1 ], [ 141, null, "141716", 1 ], [ 142, null, "141718", 1 ], [ 143, null, "141719", 1 ], [ 144, null, "141720", 1 ], [ 145, null, "141927", 1 ], [ 146, null, "142139", 1 ], [ 147, null, "142184", 1 ], [ 148, null, "142190", 1 ], [ 149, null, "142192", 1 ], [ 150, null, "142193", 1 ], [ 151, null, "142250", 1 ], [ 152, null, "142258", 1 ], [ 153, null, "142259", 1 ], [ 154, null, "142260", 1 ], [ 155, null, "142266", 1 ], [ 156, null, "142268", 1 ], [ 157, null, "142271", 1 ], [ 158, null, "142275", 1 ], [ 159, null, "142277", 1 ], [ 160, null, "142279", 1 ], [ 161, null, "142280", 1 ], [ 162, null, "142281", 1 ], [ 163, null, "142282", 1 ], [ 164, null, "142283", 1 ], [ 165, null, "142286", 1 ], [ 166, null, "142288", 1 ], [ 167, null, "142290", 1 ], [ 168, null, "142295", 1 ], [ 169, null, "142296", 1 ], [ 170, null, "142297", 1 ], [ 171, null, "142298", 1 ], [ 172, null, "142299", 1 ], [ 173, null, "142301", 1 ], [ 174, null, "142302", 1 ], [ 175, null, "142303", 1 ], [ 176, null, "142305", 1 ], [ 177, null, "142314", 1 ], [ 178, null, "142349", 1 ], [ 179, null, "142390", 1 ], [ 180, null, "142393", 1 ], [ 181, null, "142394", 1 ], [ 182, null, "142395", 1 ], [ 183, null, "142396", 1 ], [ 184, null, "142397", 1 ], [ 185, null, "142398", 1 ], [ 186, null, "142399", 1 ], [ 187, null, "142864", 1 ], [ 188, null, "142865", 1 ], [ 189, null, "142868", 1 ], [ 190, null, "142869", 1 ], [ 191, null, "142870", 1 ], [ 192, null, "142871", 1 ], [ 193, null, "142872", 1 ], [ 194, null, "142873", 1 ], [ 195, null, "142876", 1 ], [ 196, null, "142878", 1 ], [ 197, null, "142882", 1 ], [ 198, null, "142883", 1 ], [ 199, null, "144870", 1 ], [ 200, null, "144871", 1 ], [ 201, null, "144872", 1 ], [ 202, null, "145320", 1 ], [ 203, null, "145321", 1 ], [ 204, null, "148750", 1 ], [ 205, null, "148751", 1 ], [ 206, null, "148752", 1 ], [ 207, null, "346901", 1 ], [ 208, null, "347527", 1 ], [ 209, null, "347872", 1 ], [ 210, null, "347873", 1 ], [ 211, null, "349324", 1 ], [ 212, null, "350317", 1 ], [ 213, null, "350571", 1 ], [ 214, null, "350737", 1 ], [ 215, null, "350741", 1 ], [ 216, null, "350742", 1 ], [ 217, null, "350745", 1 ], [ 218, null, "350971", 1 ], [ 219, null, "350974", 1 ], [ 220, null, "351024", 1 ], [ 221, null, "351098", 1 ], [ 222, null, "351109", 1 ], [ 223, null, "351496", 1 ], [ 224, null, "351679", 1 ], [ 225, null, "361905", 1 ], [ 226, null, "361911", 1 ], [ 227, null, "362521", 1 ], [ 228, null, "362522", 1 ], [ 229, null, "362523", 1 ], [ 230, null, "362524", 1 ], [ 231, null, "362526", 1 ], [ 232, null, "362534", 1 ], [ 233, null, "392830", 1 ], [ 234, null, "398164", 1 ] ];

class DailyStylingOutfit2Config extends ConfigBase {
    constructor() {
        super(EXCELDATA$X);
    }
}

var foreign19 = Object.freeze({
    __proto__: null,
    DailyStylingOutfit2Config: DailyStylingOutfit2Config
});

const EXCELDATA$W = [ [ "ID", "Describe", "AssetId", "Transform", "SexType" ], [ "", "", "", "", "" ], [ 1, "狐狸耳朵", "226479", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 2, "围巾", "295506", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 3, "双马尾辫子", "352615", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 4, "狐耳朵", "404433", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 5, "猫耳", "404473", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 6, "星星", "441348", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 7, "眩晕Buff", "142935", [ "0", "0", "22", "0", "0", "0", "0.4", "0.4", "0.4" ], 0 ], [ 8, "狗头", "462790", [ "0", "0", "-8", "0", "0", "0", "1", "1", "1" ], 0 ], [ 9, "熊猫头", "462791", [ "0", "0", "-8", "0", "0", "0", "1", "1", "1" ], 0 ], [ 10, "问号", "441349", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 11, "问号", "13728", [ "0", "0", "38", "0", "0", "0", "0.5", "0.5", "0.5" ], 0 ], [ 12, "乌云", "169404", [ "0", "0", "47", "0", "0", "0", "0.5", "0.5", "0.5" ], 0 ], [ 13, "问号", "200911", [ "0", "0", "14", "0", "0", "0", "1", "1", "1" ], 0 ], [ 14, "表情", "88831", [ "0", "0", "23", "0", "0", "0", "0.15", "0.15", "0.15" ], 0 ], [ 15, "表情", "88818", [ "0", "0", "23", "0", "0", "0", "0.15", "0.15", "0.15" ], 0 ], [ 16, "表情", "88825", [ "-15", "0", "30", "0", "0", "0", "0.3", "0.3", "0.3" ], 0 ], [ 17, "睡眠", "287819", [ "0", "0", "8", "0", "0", "0", "0.8", "0.8", "0.8" ], 0 ], [ 18, "恶心", "26155", [ "0", "0", "36", "0", "0", "0", "1", "1", "1" ], 0 ], [ 19, "泡泡", "451246", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 20, "蝙蝠", "452716", [ "0", "0", "20", "0", "0", "0", "1", "1", "1" ], 0 ], [ 21, "花瓣环绕", "340179", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 22, "蝴蝶泡泡", "295800", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 23, "星星", "235888", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 24, "五角星泡泡", "295801", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 25, "打瞌睡", "26158", [ "0", "10", "5", "0", "0", "0", "0.3", "0.3", "0.3" ], 0 ], [ 26, "爱心", "184435", [ "0", "0", "32", "0", "0", "0", "0.5", "0.5", "0.5" ], 0 ], [ 27, "梦幻泡泡蝴蝶结", "452232", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 28, "梦幻泡泡蝴蝶结", "452233", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 29, "梦幻泡泡蝴蝶结", "452234", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 30, "梦幻泡泡蝴蝶结", "452235", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 31, "道具", "471540", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 32, "道具", "471541", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 33, "道具", "471542", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 34, "道具", "471543", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 35, "绿蛇头发", "502350", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 36, "青蛇头发", "502351", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 37, "红蛇头发", "502352", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 38, "龙角", "266596", [ "0", "0", "15", "0", "0", "0", "1", "1", "1" ], 0 ], [ 39, "龙角", "266597", [ "0", "0", "15", "0", "0", "0", "1", "1", "1" ], 0 ], [ 40, "龙角", "266598", [ "0", "0", "15", "0", "0", "0", "1", "1", "1" ], 0 ], [ 41, "龙角", "266600", [ "0", "0", "15", "0", "0", "0", "1", "1", "1" ], 0 ], [ 42, "龙角", "266601", [ "0", "0", "15", "0", "0", "0", "1", "1", "1" ], 0 ], [ 43, "龙角", "266602", [ "0", "0", "15", "0", "0", "0", "1", "1", "1" ], 0 ], [ 44, "龙角", "266610", [ "0", "0", "15", "0", "0", "0", "1", "1", "1" ], 0 ], [ 45, "犄角", "467603", [ "0", "0", "16", "0", "0", "0", "1", "1", "1" ], 0 ], [ 46, "发光恶魔角", "266332", [ "0", "0", "18", "0", "0", "0", "1", "1", "1" ], 0 ], [ 47, "帽子", "457013", [ "0", "0", "12", "0", "0", "0", "1", "1", "1" ], 0 ], [ 48, "护目眼镜", "209534", [ "0", "5", "15", "-45", "0", "0", "1", "1", "1" ], 0 ], [ 49, "泳镜", "112801", [ "0", "5", "17", "-45", "0", "0", "1", "1", "1" ], 0 ], [ 50, "男帽子", "173867", [ "0", "0", "0", "0", "0", "0", "1.2", "1.2", "1.2" ], 0 ], [ 51, "尴尬", "26146", [ "0", "0", "30", "0", "0", "0", "1", "1", "1" ], 0 ], [ 52, "眩晕", "26151", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 53, null, "26155", [ "0", "0", "30", "0", "0", "0", "1", "1", "1" ], 0 ], [ 54, "手指", "160743", [ "0", "0", "30", "0", "0", "0", "1", "1", "1" ], 0 ], [ 55, "自动寻路图标", "162012", [ "0", "0", "20", "0", "0", "0", "1", "1", "1" ], 0 ], [ 56, "子弹", "168959", [ "0", "0", "20", "0", "0", "0", "1", "1", "1" ], 0 ], [ 57, "生气", "200925", [ "0", "0", "30", "0", "0", "0", "1", "1", "1" ], 0 ], [ 58, "荧光小人", "403000", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 59, "荧光小人", "403004", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 60, "荧光小人", "403012", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 61, "荧光小人", "403014", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 62, "荧光小人", "403015", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 63, "恭喜发财", "506842", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ] ];

class EarConfig extends ConfigBase {
    constructor() {
        super(EXCELDATA$W);
    }
}

var foreign20 = Object.freeze({
    __proto__: null,
    EarConfig: EarConfig
});

const EXCELDATA$V = [ [ "ID", "Describe", "AssetId", "Transform", "SexType" ], [ "", "", "", "", "" ], [ 1, null, "525387", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 2, null, "501310", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 3, "广告牌", "57202", [ "0", "0", "0", "0", "0", "0", "0.2", "0.2", "0.2" ], 0 ], [ 4, "流光", "365194", [ "0", "0", "0", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 5, "火焰", "28451", [ "0", "0", "0", "0", "0", "0", "10", "10", "10" ], 0 ], [ 6, "雪花", "526080", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 7, null, "144093", [ "0", "0", "120", "0", "0", "0", "0.5", "0.5", "0.5" ], 0 ], [ 8, "星座", "220840", [ "-70", "0", "150", "0", "0", "0", "1", "1", "1" ], 0 ], [ 9, null, "485354", [ "0", "-30", "80", "0", "0", "0", "1", "1", "1" ], 0 ], [ 10, "星座", "220841", [ "-70", "0", "150", "0", "0", "0", "1", "1", "1" ], 0 ], [ 11, "星座", "220842", [ "-70", "0", "150", "0", "0", "0", "1", "1", "1" ], 0 ], [ 12, "星座", "220843", [ "-70", "0", "150", "0", "0", "0", "1", "1", "1" ], 0 ], [ 13, "星座", "220844", [ "-70", "0", "150", "0", "0", "0", "1", "1", "1" ], 0 ], [ 14, "星座", "220845", [ "-70", "0", "150", "0", "0", "0", "1", "1", "1" ], 0 ], [ 15, "星座", "220846", [ "-70", "0", "150", "0", "0", "0", "1", "1", "1" ], 0 ], [ 16, "星座", "220847", [ "-70", "0", "150", "0", "0", "0", "1", "1", "1" ], 0 ], [ 17, "星座", "220848", [ "-70", "0", "150", "0", "0", "0", "1", "1", "1" ], 0 ], [ 18, "星座", "220849", [ "-70", "0", "150", "0", "0", "0", "1", "1", "1" ], 0 ], [ 19, "星座", "220850", [ "-70", "0", "150", "0", "0", "0", "1", "1", "1" ], 0 ], [ 20, "星座", "220851", [ "-70", "0", "150", "0", "0", "0", "1", "1", "1" ], 0 ], [ 21, "星座", "220041", [ "-70", "0", "150", "0", "0", "0", "1", "1", "1" ], 0 ], [ 22, "星座", "220469", [ "-70", "0", "150", "0", "0", "0", "1", "1", "1" ], 0 ], [ 23, "法阵", "31645", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 24, "桃心", "4366", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 25, "睡眠", "4367", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 26, "音符", "4368", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 27, "光环", "32240", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 28, "光环", "59956", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 29, "彩带", "73402", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 30, "传送门", "88762", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 31, "传送门", "88773", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 32, "Buff", "89073", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 33, "禁锢", "89109", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 34, "禁锢", "89111", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 35, "禁锢", "89112", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 36, "防护盾", "89122", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 37, "角色__BUFF", "113903", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 38, "Buff", "113913", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 39, "护盾", "113907", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 40, "音乐", "119917", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 41, "音乐", "130776", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 42, "禁锢Buff", "141655", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 43, "禁锢Buff", "141657", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 44, "治疗Buff", "142753", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 45, "治疗Buff", "142751", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 46, "光环", "142951", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 47, "盾牌", "156399", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 48, null, "157113", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 49, null, "157118", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 50, null, "157119", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 51, "击杀", "271322", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 52, "卡牌", "311092", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 53, "生成光环", "318586", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 54, null, "501294", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 55, "雪花", "127013", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 56, null, "146328", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 57, null, "146328", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 58, null, "146753", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 59, "烟花", "146754", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 60, "全息投影", "144082", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 61, "剪纸", "361275", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ] ];

class EffectsConfig extends ConfigBase {
    constructor() {
        super(EXCELDATA$V);
    }
}

var foreign21 = Object.freeze({
    __proto__: null,
    EffectsConfig: EffectsConfig
});

const EXCELDATA$U = [ [ "ID", "Describe", "AssetId", "SexType" ], [ "", "", "", "" ], [ 1, null, "509867", 2 ], [ 2, null, "478215", 2 ], [ 3, null, "476301", 2 ], [ 4, null, "468352", 2 ], [ 5, null, "457928", 2 ], [ 6, null, "423744", 2 ], [ 7, null, "390744", 2 ], [ 8, null, "390743", 2 ], [ 9, null, "390456", 2 ], [ 10, null, "390439", 2 ], [ 11, null, "390414", 2 ], [ 12, null, "390413", 2 ], [ 13, null, "390412", 2 ], [ 14, null, "383403", 2 ], [ 15, null, "370795", 2 ], [ 16, null, "362125", 2 ], [ 17, null, "356248", 2 ], [ 18, null, "344229", 2 ], [ 19, null, "344057", 2 ], [ 20, null, "325904", 2 ], [ 21, null, "323598", 2 ], [ 22, null, "314288", 2 ], [ 23, null, "313729", 2 ], [ 24, null, "313727", 2 ], [ 25, null, "300487", 2 ], [ 26, null, "297930", 2 ], [ 27, null, "296022", 2 ], [ 28, null, "269621", 2 ], [ 29, null, "269620", 2 ], [ 30, null, "248352", 2 ], [ 31, null, "241431", 2 ], [ 32, null, "241189", 2 ], [ 33, null, "221654", 2 ], [ 34, null, "210326", 2 ], [ 35, null, "137593", 2 ], [ 36, null, "127278", 2 ], [ 37, null, "126614", 2 ], [ 38, null, "119738", 2 ], [ 39, null, "117490", 2 ], [ 40, null, "111204", 2 ], [ 41, null, "111195", 2 ], [ 42, null, "109837", 2 ], [ 43, null, "86089", 2 ], [ 44, null, "74313", 2 ], [ 45, null, "66571", 2 ], [ 46, null, "66505", 2 ], [ 47, null, "66371", 2 ], [ 48, null, "66355", 2 ], [ 49, null, "65662", 2 ], [ 50, null, "65660", 2 ], [ 51, null, "65657", 2 ], [ 52, null, "64206", 2 ], [ 53, null, "63646", 2 ], [ 54, null, "63540", 2 ], [ 55, null, "63303", 2 ], [ 56, null, "63294", 2 ], [ 57, null, "62962", 2 ], [ 58, null, "62782", 2 ], [ 59, null, "62781", 2 ], [ 60, null, "60986", 2 ], [ 61, null, "60985", 2 ], [ 62, null, "57729", 2 ], [ 63, null, "509869", 1 ], [ 64, null, "507452", 1 ], [ 65, null, "504602", 1 ], [ 66, null, "476239", 1 ], [ 67, null, "458751", 1 ], [ 68, null, "382998", 1 ], [ 69, null, "382171", 1 ], [ 70, null, "348898", 1 ], [ 71, null, "320846", 1 ], [ 72, null, "313979", 1 ], [ 73, null, "313679", 1 ], [ 74, null, "299159", 1 ], [ 75, null, "264152", 1 ], [ 76, null, "250455", 1 ], [ 77, null, "247535", 1 ], [ 78, null, "241405", 1 ], [ 79, null, "140277", 1 ], [ 80, null, "127799", 1 ], [ 81, null, "125334", 1 ], [ 82, null, "122826", 1 ], [ 83, null, "122784", 1 ], [ 84, null, "119114", 1 ], [ 85, null, "118076", 1 ], [ 86, null, "111571", 1 ], [ 87, null, "111486", 1 ], [ 88, null, "75658", 1 ], [ 89, null, "74878", 1 ], [ 90, null, "74115", 1 ], [ 91, null, "66700", 1 ], [ 92, null, "66597", 1 ], [ 93, null, "66558", 1 ], [ 94, null, "66417", 1 ], [ 95, null, "66150", 1 ], [ 96, null, "66107", 1 ], [ 97, null, "65726", 1 ], [ 98, null, "65615", 1 ], [ 99, null, "65059", 1 ], [ 100, null, "65058", 1 ], [ 101, null, "65056", 1 ], [ 102, null, "64994", 1 ], [ 103, null, "64952", 1 ], [ 104, null, "64814", 1 ], [ 105, null, "64804", 1 ], [ 106, null, "64713", 1 ], [ 107, null, "63885", 1 ], [ 108, null, "63677", 1 ], [ 109, null, "63675", 1 ], [ 110, null, "63673", 1 ] ];

class EverydayShoesConfig extends ConfigBase {
    constructor() {
        super(EXCELDATA$U);
    }
}

var foreign22 = Object.freeze({
    __proto__: null,
    EverydayShoesConfig: EverydayShoesConfig
});

const EXCELDATA$T = [ [ "ID", "AssetId" ], [ "", "" ], [ 1, "117806" ], [ 2, "117804" ], [ 3, "117807" ], [ 4, "117803" ], [ 5, "117808" ], [ 6, "117809" ], [ 7, "117812" ], [ 8, "164705" ], [ 9, "164706" ], [ 10, "164707" ], [ 11, "164708" ], [ 12, "164709" ], [ 13, "164710" ], [ 14, "184427" ], [ 15, "184428" ], [ 16, "184429" ], [ 17, "184430" ], [ 18, "184431" ], [ 19, "184432" ], [ 20, "184433" ], [ 21, "184434" ], [ 22, "184437" ], [ 23, "184438" ], [ 24, "184439" ], [ 25, "184440" ], [ 26, "184441" ], [ 27, "184443" ], [ 28, "184444" ], [ 29, "184445" ], [ 30, "184446" ], [ 31, "185312" ], [ 32, "185313" ], [ 33, "185314" ], [ 34, "185315" ], [ 35, "185316" ], [ 36, "185317" ], [ 37, "185318" ], [ 38, "185319" ], [ 39, "185320" ], [ 40, "185321" ], [ 41, "185322" ], [ 42, "185323" ], [ 43, "185324" ], [ 44, "185325" ], [ 45, "185326" ], [ 46, "185327" ], [ 47, "185328" ] ];

class ExpressionConfig extends ConfigBase {
    constructor() {
        super(EXCELDATA$T);
    }
}

var foreign23 = Object.freeze({
    __proto__: null,
    ExpressionConfig: ExpressionConfig
});

const EXCELDATA$S = [ [ "ID", "Describe", "AssetId", "SexType" ], [ "", "", "", "" ], [ 1, null, "398608", 2 ], [ 2, null, "370228", 2 ], [ 3, null, "370227", 2 ], [ 4, null, "370226", 2 ], [ 5, null, "370225", 2 ], [ 6, null, "370224", 2 ], [ 7, null, "370199", 2 ], [ 8, null, "370198", 2 ], [ 9, null, "370197", 2 ], [ 10, null, "287385", 2 ], [ 11, null, "286897", 2 ], [ 12, null, "267306", 2 ], [ 13, null, "267305", 2 ], [ 14, null, "267304", 2 ], [ 15, null, "267303", 2 ], [ 16, null, "267301", 2 ], [ 17, null, "267284", 2 ], [ 18, null, "266356", 2 ], [ 19, null, "266355", 2 ], [ 20, null, "266354", 2 ], [ 21, null, "227067", 2 ], [ 22, null, "227066", 2 ], [ 23, null, "215692", 2 ], [ 24, null, "215691", 2 ], [ 25, null, "215690", 2 ], [ 26, null, "215689", 2 ], [ 27, null, "215688", 2 ], [ 28, null, "215687", 2 ], [ 29, null, "215686", 2 ], [ 30, null, "215685", 2 ], [ 31, null, "215684", 2 ], [ 32, null, "215683", 2 ], [ 33, null, "215682", 2 ], [ 34, null, "215681", 2 ], [ 35, null, "215680", 2 ], [ 36, null, "215679", 2 ], [ 37, null, "215678", 2 ], [ 38, null, "215677", 2 ], [ 39, null, "215676", 2 ], [ 40, null, "215675", 2 ], [ 41, null, "215674", 2 ], [ 42, null, "215673", 2 ], [ 43, null, "215672", 2 ], [ 44, null, "215671", 2 ], [ 45, null, "215670", 2 ], [ 46, null, "215669", 2 ], [ 47, null, "215668", 2 ], [ 48, null, "215471", 2 ], [ 49, null, "215469", 2 ], [ 50, null, "215467", 2 ], [ 51, null, "215466", 2 ], [ 52, null, "215461", 2 ], [ 53, null, "215460", 2 ], [ 54, null, "215459", 2 ], [ 55, null, "215458", 2 ], [ 56, null, "215457", 2 ], [ 57, null, "215455", 2 ], [ 58, null, "215454", 2 ], [ 59, null, "215453", 2 ], [ 60, null, "215451", 2 ], [ 61, null, "215449", 2 ], [ 62, null, "215448", 2 ], [ 63, null, "215445", 2 ], [ 64, null, "215444", 2 ], [ 65, null, "215443", 2 ], [ 66, null, "215442", 2 ], [ 67, null, "215435", 2 ], [ 68, null, "215434", 2 ], [ 69, null, "215432", 2 ], [ 70, null, "215430", 2 ], [ 71, null, "215429", 2 ], [ 72, null, "215428", 2 ], [ 73, null, "215420", 2 ], [ 74, null, "215419", 2 ], [ 75, null, "215418", 2 ], [ 76, null, "215417", 2 ], [ 77, null, "215415", 2 ], [ 78, null, "115868", 2 ], [ 79, null, "48612", 2 ], [ 80, null, "48611", 2 ], [ 81, null, "48610", 2 ], [ 82, null, "48607", 2 ], [ 83, null, "48605", 2 ], [ 84, null, "48603", 2 ], [ 85, null, "48598", 2 ], [ 86, null, "48597", 2 ], [ 87, null, "48596", 2 ], [ 88, null, "48595", 2 ], [ 89, null, "48594", 2 ], [ 90, null, "48593", 2 ], [ 91, null, "48592", 2 ], [ 92, null, "48591", 2 ], [ 93, null, "48590", 2 ], [ 94, null, "32105", 2 ], [ 95, null, "25933", 2 ], [ 96, null, "266478", 1 ], [ 97, null, "266477", 1 ], [ 98, null, "266366", 1 ], [ 99, null, "228109", 1 ], [ 100, null, "227065", 1 ], [ 101, null, "215710", 1 ], [ 102, null, "215709", 1 ], [ 103, null, "215598", 1 ], [ 104, null, "215597", 1 ], [ 105, null, "215596", 1 ], [ 106, null, "215595", 1 ], [ 107, null, "215594", 1 ], [ 108, null, "215593", 1 ], [ 109, null, "215592", 1 ], [ 110, null, "215591", 1 ], [ 111, null, "215590", 1 ], [ 112, null, "215589", 1 ], [ 113, null, "215588", 1 ], [ 114, null, "215587", 1 ], [ 115, null, "215586", 1 ], [ 116, null, "215585", 1 ], [ 117, null, "215584", 1 ], [ 118, null, "215583", 1 ], [ 119, null, "215582", 1 ], [ 120, null, "215581", 1 ], [ 121, null, "215580", 1 ], [ 122, null, "215579", 1 ], [ 123, null, "215578", 1 ], [ 124, null, "215577", 1 ], [ 125, null, "215576", 1 ], [ 126, null, "215575", 1 ], [ 127, null, "215574", 1 ], [ 128, null, "215472", 1 ], [ 129, null, "215470", 1 ], [ 130, null, "215468", 1 ], [ 131, null, "215465", 1 ], [ 132, null, "215464", 1 ], [ 133, null, "215463", 1 ], [ 134, null, "215462", 1 ], [ 135, null, "215456", 1 ], [ 136, null, "215452", 1 ], [ 137, null, "215450", 1 ], [ 138, null, "215447", 1 ], [ 139, null, "215446", 1 ], [ 140, null, "215441", 1 ], [ 141, null, "215440", 1 ], [ 142, null, "215439", 1 ], [ 143, null, "215438", 1 ], [ 144, null, "215437", 1 ], [ 145, null, "215436", 1 ], [ 146, null, "215433", 1 ], [ 147, null, "215431", 1 ], [ 148, null, "215427", 1 ], [ 149, null, "215426", 1 ], [ 150, null, "215425", 1 ], [ 151, null, "215424", 1 ], [ 152, null, "215423", 1 ], [ 153, null, "215422", 1 ], [ 154, null, "215421", 1 ], [ 155, null, "215416", 1 ], [ 156, null, "215414", 1 ], [ 157, null, "215413", 1 ], [ 158, null, "121549", 1 ], [ 159, null, "116440", 1 ], [ 160, null, "99653", 1 ], [ 161, null, "77764", 1 ], [ 162, null, "77763", 1 ], [ 163, null, "77527", 1 ], [ 164, null, "70426", 1 ], [ 165, null, "70425", 1 ], [ 166, null, "48609", 1 ], [ 167, null, "48608", 1 ], [ 168, null, "48606", 1 ], [ 169, null, "48604", 1 ], [ 170, null, "48602", 1 ], [ 171, null, "48601", 1 ], [ 172, null, "48600", 1 ], [ 173, null, "48599", 1 ], [ 174, null, "30392", 1 ] ];

class EyebrowsConfig extends ConfigBase {
    constructor() {
        super(EXCELDATA$S);
    }
}

var foreign24 = Object.freeze({
    __proto__: null,
    EyebrowsConfig: EyebrowsConfig
});

const EXCELDATA$R = [ [ "ID", "Describe", "AssetId", "SexType" ], [ "", "", "", "" ], [ 1, null, "531763", 0 ], [ 2, null, "531762", 0 ], [ 3, null, "461642", 0 ], [ 4, null, "458214", 0 ], [ 5, null, "457287", 0 ], [ 6, null, "399318", 0 ], [ 7, null, "398607", 0 ], [ 8, null, "370302", 0 ], [ 9, null, "370301", 0 ], [ 10, null, "370299", 0 ], [ 11, null, "370298", 0 ], [ 12, null, "370297", 0 ], [ 13, null, "370296", 0 ], [ 14, null, "370295", 0 ], [ 15, null, "370294", 0 ], [ 16, null, "370293", 0 ], [ 17, null, "286895", 0 ], [ 18, null, "270028", 0 ], [ 19, null, "267293", 0 ], [ 20, null, "267292", 0 ], [ 21, null, "267290", 0 ], [ 22, null, "267287", 0 ], [ 23, null, "266471", 0 ], [ 24, null, "266470", 0 ], [ 25, null, "266469", 0 ], [ 26, null, "266370", 0 ], [ 27, null, "266368", 0 ], [ 28, null, "266367", 0 ], [ 29, null, "266353", 0 ], [ 30, null, "266352", 0 ], [ 31, null, "266351", 0 ], [ 32, null, "266350", 0 ], [ 33, null, "266349", 0 ], [ 34, null, "266348", 0 ], [ 35, null, "227072", 0 ], [ 36, null, "227071", 0 ], [ 37, null, "227070", 0 ], [ 38, null, "227069", 0 ], [ 39, null, "215412", 0 ], [ 40, null, "215411", 0 ], [ 41, null, "215410", 0 ], [ 42, null, "215409", 0 ], [ 43, null, "215408", 0 ], [ 44, null, "215407", 0 ], [ 45, null, "215406", 0 ], [ 46, null, "215405", 0 ], [ 47, null, "215404", 0 ], [ 48, null, "215403", 0 ], [ 49, null, "215402", 0 ], [ 50, null, "215401", 0 ], [ 51, null, "215400", 0 ], [ 52, null, "215399", 0 ], [ 53, null, "215398", 0 ], [ 54, null, "215397", 0 ], [ 55, null, "215396", 0 ], [ 56, null, "215395", 0 ], [ 57, null, "215394", 0 ], [ 58, null, "215393", 0 ], [ 59, null, "215392", 0 ], [ 60, null, "215391", 0 ], [ 61, null, "215390", 0 ], [ 62, null, "215389", 0 ], [ 63, null, "215388", 0 ], [ 64, null, "215387", 0 ], [ 65, null, "215386", 0 ], [ 66, null, "215385", 0 ], [ 67, null, "215384", 0 ], [ 68, null, "215383", 0 ], [ 69, null, "215382", 0 ], [ 70, null, "215381", 0 ], [ 71, null, "215380", 0 ], [ 72, null, "215379", 0 ], [ 73, null, "215378", 0 ], [ 74, null, "215377", 0 ], [ 75, null, "215376", 0 ], [ 76, null, "215375", 0 ], [ 77, null, "215374", 0 ], [ 78, null, "215373", 0 ], [ 79, null, "215372", 0 ], [ 80, null, "215371", 0 ], [ 81, null, "215370", 0 ], [ 82, null, "215369", 0 ], [ 83, null, "215368", 0 ], [ 84, null, "107622", 0 ], [ 85, null, "101141", 0 ], [ 86, null, "77467", 0 ], [ 87, null, "77466", 0 ], [ 88, null, "77456", 0 ], [ 89, null, "77455", 0 ], [ 90, null, "77454", 0 ], [ 91, null, "77453", 0 ], [ 92, null, "77452", 0 ], [ 93, null, "77451", 0 ], [ 94, null, "77450", 0 ], [ 95, null, "77449", 0 ], [ 96, null, "77448", 0 ], [ 97, null, "68982", 0 ], [ 98, null, "68981", 0 ], [ 99, null, "48067", 0 ], [ 100, null, "48066", 0 ], [ 101, null, "48065", 0 ], [ 102, null, "48064", 0 ], [ 103, null, "48063", 0 ], [ 104, null, "48062", 0 ], [ 105, null, "48061", 0 ], [ 106, null, "48060", 0 ], [ 107, null, "48059", 0 ], [ 108, null, "48058", 0 ], [ 109, null, "48057", 0 ], [ 110, null, "48056", 0 ], [ 111, null, "48055", 0 ], [ 112, null, "48054", 0 ], [ 113, null, "48053", 0 ], [ 114, null, "48052", 0 ], [ 115, null, "48051", 0 ], [ 116, null, "48050", 0 ], [ 117, null, "48049", 0 ], [ 118, null, "48048", 0 ], [ 119, null, "32096", 0 ], [ 120, null, "22747", 0 ] ];

class EyelashesConfig extends ConfigBase {
    constructor() {
        super(EXCELDATA$R);
    }
}

var foreign25 = Object.freeze({
    __proto__: null,
    EyelashesConfig: EyelashesConfig
});

const EXCELDATA$Q = [ [ "ID", "Describe", "AssetId", "SexType" ], [ "", "", "", "" ], [ 1, "眼影", "531761", 0 ], [ 2, "眼影", "370255", 0 ], [ 3, "眼影", "370254", 0 ], [ 4, "眼影", "370248", 0 ], [ 5, "眼影", "370247", 0 ], [ 6, null, "370244", 0 ], [ 7, null, "370243", 0 ], [ 8, null, "367134", 0 ], [ 9, null, "286896", 0 ], [ 10, null, "270029", 0 ], [ 11, null, "267302", 0 ], [ 12, null, "267299", 0 ], [ 13, null, "267298", 0 ], [ 14, null, "266369", 0 ], [ 15, null, "266365", 0 ], [ 16, null, "266364", 0 ], [ 17, null, "266347", 0 ], [ 18, null, "266346", 0 ], [ 19, null, "266345", 0 ], [ 20, null, "266344", 0 ], [ 21, null, "223838", 0 ], [ 22, null, "215796", 0 ], [ 23, null, "215517", 0 ], [ 24, null, "215516", 0 ], [ 25, null, "215515", 0 ], [ 26, null, "215514", 0 ], [ 27, null, "215513", 0 ], [ 28, null, "215512", 0 ], [ 29, null, "215511", 0 ], [ 30, null, "215510", 0 ], [ 31, null, "215509", 0 ], [ 32, null, "215508", 0 ], [ 33, null, "215507", 0 ], [ 34, null, "215506", 0 ], [ 35, null, "215505", 0 ], [ 36, null, "215504", 0 ], [ 37, null, "215503", 0 ], [ 38, null, "215502", 0 ], [ 39, null, "215501", 0 ], [ 40, null, "215500", 0 ], [ 41, null, "215499", 0 ], [ 42, null, "215498", 0 ], [ 43, null, "215497", 0 ], [ 44, null, "215496", 0 ], [ 45, null, "215495", 0 ], [ 46, null, "215494", 0 ], [ 47, null, "215493", 0 ], [ 48, null, "215492", 0 ], [ 49, null, "215491", 0 ], [ 50, null, "215490", 0 ], [ 51, null, "215489", 0 ], [ 52, null, "215488", 0 ], [ 53, null, "215358", 0 ], [ 54, null, "215357", 0 ], [ 55, null, "215356", 0 ], [ 56, null, "215355", 0 ], [ 57, null, "215354", 0 ], [ 58, null, "215353", 0 ], [ 59, null, "215352", 0 ], [ 60, null, "215351", 0 ], [ 61, null, "215350", 0 ], [ 62, null, "215349", 0 ], [ 63, null, "215348", 0 ], [ 64, null, "215347", 0 ], [ 65, null, "215346", 0 ], [ 66, null, "215345", 0 ], [ 67, null, "164825", 0 ], [ 68, null, "116441", 0 ], [ 69, null, "116390", 0 ], [ 70, null, "107624", 0 ], [ 71, null, "107623", 0 ], [ 72, null, "77600", 0 ], [ 73, null, "77599", 0 ], [ 74, null, "77530", 0 ], [ 75, null, "77529", 0 ], [ 76, null, "77528", 0 ], [ 77, null, "77497", 0 ], [ 78, null, "77496", 0 ], [ 79, null, "77495", 0 ], [ 80, null, "77494", 0 ], [ 81, null, "75951", 0 ], [ 82, null, "70245", 0 ], [ 83, null, "32082", 0 ], [ 84, null, "32081", 0 ] ];

class EyeshadowConfig extends ConfigBase {
    constructor() {
        super(EXCELDATA$Q);
    }
}

var foreign26 = Object.freeze({
    __proto__: null,
    EyeshadowConfig: EyeshadowConfig
});

const EXCELDATA$P = [ [ "ID", "Describe", "AssetId", "SexType" ], [ "", "", "", "" ], [ 1, "标准脸型-男", "161675", 1 ], [ 2, "标准脸型-女", "161676", 2 ] ];

class FaceConfig extends ConfigBase {
    constructor() {
        super(EXCELDATA$P);
    }
}

var foreign27 = Object.freeze({
    __proto__: null,
    FaceConfig: FaceConfig
});

const EXCELDATA$O = [ [ "ID", "Describe", "Name", "ExpressionType", "SexType", "Icon" ], [ "", "", "Language", "", "", "" ], [ 1, "默认表情", "Text_Expression_Default", 0, 0, "306265" ], [ 2, "微笑", "Text_Expression_Smile", 1, 0, "306265" ], [ 3, "开心", "Text_Expression_HaveFun", 2, 0, "306265" ], [ 4, "伤心", "Text_Expression_Sad", 3, 0, "306265" ], [ 5, "生气", "Text_Expression_GetAngry", 4, 0, "306265" ], [ 6, "尴尬", "Text_Expression_Embarrassment", 5, 0, "306265" ], [ 7, "笑", "Text_Expression_Laugh", 6, 0, "306265" ], [ 8, "调皮", "Text_Expression_BeNaughty", 7, 0, "306265" ], [ 9, "可爱", "Text_Expression_Cute", 8, 0, "306265" ], [ 10, "疑惑", "Text_Expression_Doubt", 9, 0, "306265" ] ];

class FaceExpressionConfig extends ConfigBase {
    constructor() {
        super(EXCELDATA$O);
    }
}

var foreign28 = Object.freeze({
    __proto__: null,
    FaceExpressionConfig: FaceExpressionConfig
});

const EXCELDATA$N = [ [ "ID", "Describe", "AssetId", "SexType" ], [ "", "", "", "" ], [ 1, "套靴长裤", "60386", 1 ], [ 2, "制服短裙", "57736", 2 ] ];

class FaceTattooConfig extends ConfigBase {
    constructor() {
        super(EXCELDATA$N);
    }
}

var foreign29 = Object.freeze({
    __proto__: null,
    FaceTattooConfig: FaceTattooConfig
});

const EXCELDATA$M = [ [ "ID", "Describe", "AssetId", "Transform", "SexType" ], [ "", "", "", "", "" ], [ 1, "眼镜", "324491", [ "-13", "0", "-6", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 2, "眼镜", "225166", [ "-10", "0", "-5", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 3, "眼镜", "366489", [ "-11", "0", "-7", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 4, "眼镜", "225171", [ "-4", "0", "0", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 5, "眼罩", "278280", [ "-13", "0", "-5", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 6, "面纱", "269783", [ "0", "0", "-23", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 7, "面具", "470153", [ "-4", "0", "-12", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 8, "面具", "121405", [ "-9.5", "0", "-5", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 9, "面具", "470154", [ "-4", "0", "-11", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 10, "面具", "455257", [ "-4", "0", "-11", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 11, "面具", "455263", [ "-4", "0", "-11", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 12, "面具", "455274", [ "-4", "0", "-11", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 13, "面具", "455275", [ "-4", "0", "-11", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 14, "狐狸面具", "405768", [ "-5", "0", "-5", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 15, "眼饰面具", "229148", [ "-14", "0", "-151.5", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 16, "南瓜", "442771", [ "-15", "0", "-14", "0", "0", "-90", "0.6", "0.6", "0.6" ], 0 ], [ 17, "恶魔头", "136506", [ "-5", "0", "-13.5", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 18, "头套", "234390", [ "-14", "0", "-15", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 19, "头套", "292089", [ "-14", "0", "-15", "0", "0", "-90", "1", "1", "1" ], 0 ] ];

class FacingConfig extends ConfigBase {
    constructor() {
        super(EXCELDATA$M);
    }
}

var foreign30 = Object.freeze({
    __proto__: null,
    FacingConfig: FacingConfig
});

const EXCELDATA$L = [ [ "ID", "Describe", "AssetId", "SexType" ], [ "", "", "", "" ], [ 1, "魔后", "136189", 2 ], [ 2, "白人女魔使", "137836", 2 ], [ 3, "白人女天使", "137837", 2 ], [ 4, "黑人女天使", "137841", 2 ], [ 5, "女战神", "137843", 2 ], [ 6, "女水手白人", "137851", 2 ], [ 7, "青年智慧女神", "141148", 2 ], [ 8, "黑天使", "142140", 2 ], [ 9, "刺客女性", "142254", 2 ], [ 10, "纳米机甲女性", "142255", 2 ], [ 11, "卡魔拉", "142263", 2 ], [ 12, "魔术师女", "142270", 2 ], [ 13, "哨兵冰", "142272", 2 ], [ 14, "女浩克", "142294", 2 ], [ 15, "羊角女巫", "142308", 2 ], [ 16, "冰雪王后", "142311", 2 ], [ 17, "海洋王后", "142312", 2 ], [ 18, "Dva", "142860", 2 ], [ 19, "雏田", "142913", 2 ], [ 20, "春野樱", "142914", 2 ], [ 21, "纲手", "142918", 2 ], [ 22, "娜美", "142926", 2 ], [ 23, "妮可罗宾", "142927", 2 ], [ 24, "女帝", "142928", 2 ], [ 25, "天天", "142929", 2 ], [ 26, "小南", "143226", 2 ], [ 27, "小樱", "143227", 2 ], [ 28, "灶门祢豆子", "143232", 2 ], [ 29, "暗影芭比", "143388", 2 ], [ 30, "粉毛怪", "143389", 2 ], [ 31, "蓝毛怪", "143394", 2 ], [ 32, "魔莱坞学院院长", "143396", 2 ], [ 33, "魔法少女", "347741", 2 ], [ 34, "弓箭少女", "351393", 2 ], [ 35, "西方神女", "351405", 2 ], [ 36, "狐耳少女", "361906", 2 ], [ 37, "魔法少女服饰", "163278", 2 ], [ 38, "魔法女巫套装", "164419", 2 ], [ 39, "绿色怪人服", "164369", 1 ], [ 40, "变异人套装", "164423", 1 ], [ 41, "怪人套装", "164424", 1 ], [ 42, "马戏团小丑服", "232208", 1 ], [ 43, "小爱神", "136262", 1 ], [ 44, "中年冥神", "141147", 1 ], [ 45, "白人男天使", "141149", 1 ], [ 46, "黑人男天使", "141150", 1 ], [ 47, "老山城", "141153", 1 ], [ 48, "太阳神", "141498", 1 ], [ 49, "魔王", "141499", 1 ], [ 50, "海王神", "141500", 1 ], [ 51, "神使", "141504", 1 ], [ 52, "魔使男", "141917", 1 ], [ 53, "魔使男", "141920", 1 ], [ 54, "魔兵", "142141", 1 ], [ 55, "魔兵", "142142", 1 ], [ 56, "魔兵", "142143", 1 ], [ 57, "兽人", "142144", 1 ], [ 58, "兽人", "142145", 1 ], [ 59, "兽人", "142146", 1 ], [ 60, "未来战士", "142153", 1 ], [ 61, "未来战士", "142154", 1 ], [ 62, "哨兵石", "142291", 1 ], [ 63, "哨兵木", "142292", 1 ], [ 64, "哨兵火", "142293", 1 ], [ 65, "青年地精", "142300", 1 ], [ 66, "老年地精", "142306", 1 ], [ 67, "天神", "142310", 1 ], [ 68, "狼人001", "142351", 1 ], [ 69, "黑男哨兵铁", "142389", 1 ], [ 70, "男丧尸", "142874", 1 ], [ 71, "外星人", "142880", 1 ], [ 72, "大蛇丸", "142915", 1 ], [ 73, "飞段", "142916", 1 ], [ 74, "干柿鬼鲛", "142917", 1 ], [ 75, "角都", "142919", 1 ], [ 76, "卡卡西", "142920", 1 ], [ 77, "炼狱杏寿郎", "142921", 1 ], [ 78, "路飞", "142922", 1 ], [ 79, "索隆", "142923", 1 ], [ 80, "洛克李", "142924", 1 ], [ 81, "鸣人", "142925", 1 ], [ 82, "我爱罗", "142930", 1 ], [ 83, "我妻善逸", "142931", 1 ], [ 84, "悟空", "142932", 1 ], [ 85, "蝎", "143228", 1 ], [ 86, "宇智波斑", "143229", 1 ], [ 87, "宇智波带土", "143230", 1 ], [ 88, "宇智波鼬", "143231", 1 ], [ 89, "长门", "143233", 1 ], [ 90, "嘴平伊之助", "143235", 1 ], [ 91, "宇智波佐助", "143236", 1 ], [ 92, "史瑞克", "143386", 1 ], [ 93, "迷雾鬼影", "143395", 1 ], [ 94, "屠夫", "143398", 1 ], [ 95, "玄魁", "143402", 1 ], [ 96, "专家", "143404", 1 ], [ 97, "Ghost Face", "144873", 1 ], [ 98, "巫医", "145319", 1 ], [ 99, "灶门炭治郎", "145322", 1 ], [ 100, "长胡子老者", "351396", 1 ], [ 101, "大耳男", "351403", 1 ], [ 102, "侦探小子", "361907", 1 ] ];

class FantasyModelingOutfitConfig extends ConfigBase {
    constructor() {
        super(EXCELDATA$L);
    }
}

var foreign31 = Object.freeze({
    __proto__: null,
    FantasyModelingOutfitConfig: FantasyModelingOutfitConfig
});

const EXCELDATA$K = [ [ "ID", "Describe", "AssetId", "SexType" ], [ "", "", "", "" ], [ 1, null, "224014", 2 ], [ 2, null, "181359", 2 ], [ 3, null, "119225", 2 ], [ 4, null, "75456", 2 ], [ 5, null, "66300", 2 ], [ 6, null, "63869", 2 ], [ 7, null, "63301", 2 ], [ 8, null, "224163", 1 ], [ 9, null, "213066", 1 ], [ 10, null, "213065", 1 ], [ 11, null, "213064", 1 ], [ 12, null, "212896", 1 ], [ 13, null, "200241", 1 ], [ 14, null, "129276", 1 ], [ 15, null, "129088", 1 ], [ 16, null, "126683", 1 ], [ 17, null, "120573", 1 ], [ 18, null, "119392", 1 ], [ 19, null, "117679", 1 ], [ 20, null, "75459", 1 ], [ 21, null, "64632", 1 ], [ 22, null, "64541", 1 ] ];

class FootCoverShoesConfig extends ConfigBase {
    constructor() {
        super(EXCELDATA$K);
    }
}

var foreign32 = Object.freeze({
    __proto__: null,
    FootCoverShoesConfig: FootCoverShoesConfig
});

const EXCELDATA$J = [ [ "ID", "Describe", "AssetId", "SexType" ], [ "", "", "", "" ], [ 1, null, "490924", 2 ], [ 2, null, "468351", 2 ], [ 3, null, "457927", 2 ], [ 4, null, "412114", 2 ], [ 5, null, "399481", 2 ], [ 6, null, "392302", 2 ], [ 7, null, "358218", 2 ], [ 8, null, "349652", 2 ], [ 9, null, "346552", 2 ], [ 10, null, "313095", 2 ], [ 11, null, "299084", 2 ], [ 12, null, "292003", 2 ], [ 13, null, "269615", 2 ], [ 14, null, "241441", 2 ], [ 15, null, "241185", 2 ], [ 16, null, "240055", 2 ], [ 17, null, "221653", 2 ], [ 18, null, "218592", 2 ], [ 19, null, "217607", 2 ], [ 20, null, "181366", 2 ], [ 21, null, "152033", 2 ], [ 22, null, "144946", 2 ], [ 23, null, "144679", 2 ], [ 24, null, "144678", 2 ], [ 25, null, "144677", 2 ], [ 26, null, "144676", 2 ], [ 27, null, "144673", 2 ], [ 28, null, "144672", 2 ], [ 29, null, "144626", 2 ], [ 30, null, "144613", 2 ], [ 31, null, "142837", 2 ], [ 32, null, "142680", 2 ], [ 33, null, "142678", 2 ], [ 34, null, "142598", 2 ], [ 35, null, "142597", 2 ], [ 36, null, "141709", 2 ], [ 37, null, "140478", 2 ], [ 38, null, "137486", 2 ], [ 39, null, "137384", 2 ], [ 40, null, "132493", 2 ], [ 41, null, "132025", 2 ], [ 42, null, "131781", 2 ], [ 43, null, "127635", 2 ], [ 44, null, "126005", 2 ], [ 45, null, "124777", 2 ], [ 46, null, "119445", 2 ], [ 47, null, "119428", 2 ], [ 48, null, "119414", 2 ], [ 49, null, "118689", 2 ], [ 50, null, "118590", 2 ], [ 51, null, "118560", 2 ], [ 52, null, "118545", 2 ], [ 53, null, "118530", 2 ], [ 54, null, "118516", 2 ], [ 55, null, "118484", 2 ], [ 56, null, "118434", 2 ], [ 57, null, "118420", 2 ], [ 58, null, "117482", 2 ], [ 59, null, "117151", 2 ], [ 60, null, "115848", 2 ], [ 61, null, "115629", 2 ], [ 62, null, "109834", 2 ], [ 63, null, "92726", 2 ], [ 64, null, "86090", 2 ], [ 65, null, "74868", 2 ], [ 66, null, "74448", 2 ], [ 67, null, "74317", 2 ], [ 68, null, "67584", 2 ], [ 69, null, "66708", 2 ], [ 70, null, "66573", 2 ], [ 71, null, "66506", 2 ], [ 72, null, "66354", 2 ], [ 73, null, "65866", 2 ], [ 74, null, "65713", 2 ], [ 75, null, "65664", 2 ], [ 76, null, "65661", 2 ], [ 77, null, "64716", 2 ], [ 78, null, "64714", 2 ], [ 79, null, "64414", 2 ], [ 80, null, "64311", 2 ], [ 81, null, "64257", 2 ], [ 82, null, "64255", 2 ], [ 83, null, "64254", 2 ], [ 84, null, "64146", 2 ], [ 85, null, "64145", 2 ], [ 86, null, "64143", 2 ], [ 87, null, "63872", 2 ], [ 88, null, "63547", 2 ], [ 89, null, "63546", 2 ], [ 90, null, "63544", 2 ], [ 91, null, "63302", 2 ], [ 92, null, "63299", 2 ], [ 93, null, "63298", 2 ], [ 94, null, "62965", 2 ], [ 95, null, "62963", 2 ], [ 96, null, "62785", 2 ], [ 97, null, "62784", 2 ], [ 98, null, "62544", 2 ], [ 99, null, "62543", 2 ], [ 100, null, "60989", 2 ], [ 101, null, "60988", 2 ], [ 102, null, "60987", 2 ], [ 103, null, "60115", 2 ], [ 104, null, "60079", 2 ], [ 105, null, "57731", 2 ], [ 106, null, "266161", 1 ], [ 107, null, "252586", 1 ], [ 108, null, "252585", 1 ], [ 109, null, "247526", 1 ], [ 110, null, "241399", 1 ], [ 111, null, "145064", 1 ], [ 112, null, "144413", 1 ], [ 113, null, "144341", 1 ], [ 114, null, "144329", 1 ], [ 115, null, "142594", 1 ], [ 116, null, "140425", 1 ], [ 117, null, "140327", 1 ], [ 118, null, "129951", 1 ], [ 119, null, "129460", 1 ], [ 120, null, "126007", 1 ], [ 121, null, "124847", 1 ], [ 122, null, "123342", 1 ], [ 123, null, "122918", 1 ], [ 124, null, "122001", 1 ], [ 125, null, "121122", 1 ], [ 126, null, "120199", 1 ], [ 127, null, "119877", 1 ], [ 128, null, "119695", 1 ], [ 129, null, "119681", 1 ], [ 130, null, "119567", 1 ], [ 131, null, "119495", 1 ], [ 132, null, "115935", 1 ], [ 133, null, "92724", 1 ], [ 134, null, "92011", 1 ], [ 135, null, "74118", 1 ], [ 136, null, "74117", 1 ], [ 137, null, "66697", 1 ], [ 138, null, "66594", 1 ], [ 139, null, "66556", 1 ], [ 140, null, "66420", 1 ], [ 141, null, "66419", 1 ], [ 142, null, "66162", 1 ], [ 143, null, "66152", 1 ], [ 144, null, "66108", 1 ], [ 145, null, "65975", 1 ], [ 146, null, "65781", 1 ], [ 147, null, "65729", 1 ], [ 148, null, "65008", 1 ], [ 149, null, "64996", 1 ], [ 150, null, "64715", 1 ], [ 151, null, "64185", 1 ], [ 152, null, "63909", 1 ], [ 153, null, "63676", 1 ] ];

class FrontHairConfig extends ConfigBase {
    constructor() {
        super(EXCELDATA$J);
    }
}

var foreign33 = Object.freeze({
    __proto__: null,
    FrontHairConfig: FrontHairConfig
});

const EXCELDATA$I = [ [ "ID", "Describe", "AssetId", "SexType" ], [ "", "", "", "" ], [ 1, null, "61001", 2 ], [ 2, null, "62967", 2 ], [ 3, null, "63873", 2 ], [ 4, null, "64777", 2 ], [ 5, null, "91904", 2 ], [ 6, null, "111076", 2 ], [ 7, null, "117626", 2 ], [ 8, null, "118571", 2 ], [ 9, null, "119228", 2 ], [ 10, null, "119744", 2 ], [ 11, null, "120586", 2 ], [ 12, null, "124743", 2 ], [ 13, null, "124878", 2 ], [ 14, null, "125736", 2 ], [ 15, null, "128594", 2 ], [ 16, null, "128836", 2 ], [ 17, null, "131787", 2 ], [ 18, null, "134960", 2 ], [ 19, null, "137426", 2 ], [ 20, null, "142679", 2 ], [ 21, null, "142838", 2 ], [ 22, null, "217368", 2 ], [ 23, null, "221707", 2 ], [ 24, null, "224013", 2 ], [ 25, null, "248350", 2 ], [ 26, null, "264187", 2 ], [ 27, null, "269617", 2 ], [ 28, null, "269619", 2 ], [ 29, null, "296024", 2 ], [ 30, null, "298036", 2 ], [ 31, null, "300484", 2 ], [ 32, null, "314287", 2 ], [ 33, null, "321372", 2 ], [ 34, null, "325907", 2 ], [ 35, null, "344231", 2 ], [ 36, null, "356247", 2 ], [ 37, null, "362143", 2 ], [ 38, null, "370792", 2 ], [ 39, null, "383402", 2 ], [ 40, null, "383404", 2 ], [ 41, null, "391374", 2 ], [ 42, null, "436993", 2 ], [ 43, null, "437605", 2 ], [ 44, null, "440231", 2 ], [ 45, null, "455469", 2 ], [ 46, null, "457745", 2 ], [ 47, null, "457814", 2 ], [ 48, null, "458635", 2 ], [ 49, null, "476304", 2 ], [ 50, null, "478217", 2 ], [ 51, null, "494915", 2 ], [ 52, null, "497739", 2 ], [ 53, null, "497918", 2 ], [ 54, null, "502240", 2 ], [ 55, null, "63595", 1 ], [ 56, null, "63678", 1 ], [ 57, null, "63887", 1 ], [ 58, null, "64546", 1 ], [ 59, null, "64549", 1 ], [ 60, null, "64550", 1 ], [ 61, null, "65060", 1 ], [ 62, null, "65617", 1 ], [ 63, null, "66727", 1 ], [ 64, null, "94781", 1 ], [ 65, null, "99383", 1 ], [ 66, null, "109069", 1 ], [ 67, null, "109143", 1 ], [ 68, null, "111158", 1 ], [ 69, null, "111277", 1 ], [ 70, null, "111397", 1 ], [ 71, null, "111404", 1 ], [ 72, null, "111410", 1 ], [ 73, null, "111411", 1 ], [ 74, null, "111578", 1 ], [ 75, null, "111619", 1 ], [ 76, null, "115940", 1 ], [ 77, null, "117115", 1 ], [ 78, null, "117680", 1 ], [ 79, null, "118075", 1 ], [ 80, null, "119113", 1 ], [ 81, null, "119256", 1 ], [ 82, null, "119339", 1 ], [ 83, null, "119394", 1 ], [ 84, null, "119574", 1 ], [ 85, null, "119668", 1 ], [ 86, null, "119772", 1 ], [ 87, null, "119790", 1 ], [ 88, null, "119865", 1 ], [ 89, null, "119951", 1 ], [ 90, null, "120073", 1 ], [ 91, null, "120576", 1 ], [ 92, null, "121521", 1 ], [ 93, null, "121522", 1 ], [ 94, null, "121523", 1 ], [ 95, null, "125688", 1 ], [ 96, null, "126010", 1 ], [ 97, null, "126011", 1 ], [ 98, null, "126325", 1 ], [ 99, null, "126681", 1 ], [ 100, null, "127350", 1 ], [ 101, null, "127497", 1 ], [ 102, null, "127651", 1 ], [ 103, null, "127717", 1 ], [ 104, null, "127797", 1 ], [ 105, null, "127798", 1 ], [ 106, null, "129089", 1 ], [ 107, null, "129247", 1 ], [ 108, null, "129277", 1 ], [ 109, null, "131748", 1 ], [ 110, null, "134562", 1 ], [ 111, null, "134564", 1 ], [ 112, null, "137448", 1 ], [ 113, null, "137964", 1 ], [ 114, null, "138104", 1 ], [ 115, null, "142601", 1 ], [ 116, null, "142682", 1 ], [ 117, null, "144422", 1 ], [ 118, null, "174741", 1 ], [ 119, null, "193165", 1 ], [ 120, null, "200240", 1 ], [ 121, null, "212898", 1 ], [ 122, null, "218833", 1 ], [ 123, null, "224165", 1 ], [ 124, null, "240888", 1 ], [ 125, null, "264151", 1 ], [ 126, null, "266189", 1 ], [ 127, null, "266190", 1 ], [ 128, null, "299160", 1 ], [ 129, null, "313980", 1 ], [ 130, null, "320847", 1 ], [ 131, null, "336197", 1 ], [ 132, null, "336704", 1 ], [ 133, null, "348895", 1 ], [ 134, null, "348925", 1 ], [ 135, null, "356546", 1 ], [ 136, null, "381502", 1 ], [ 137, null, "382167", 1 ], [ 138, null, "382995", 1 ], [ 139, null, "451396", 1 ], [ 140, null, "458130", 1 ], [ 141, null, "458789", 1 ], [ 142, null, "476243", 1 ], [ 143, null, "479104", 1 ], [ 144, null, "494888", 1 ], [ 145, null, "502264", 1 ], [ 146, null, "504635", 1 ], [ 147, null, "507478", 1 ] ];

class FullHairConfig extends ConfigBase {
    constructor() {
        super(EXCELDATA$I);
    }
}

var foreign34 = Object.freeze({
    __proto__: null,
    FullHairConfig: FullHairConfig
});

const EXCELDATA$H = [ [ "ID", "Describe", "AssetId", "SexType" ], [ "", "", "", "" ], [ 1, null, "502239", 2 ], [ 2, null, "497737", 2 ], [ 3, null, "476303", 2 ], [ 4, null, "458634", 2 ], [ 5, null, "457816", 2 ], [ 6, null, "457731", 2 ], [ 7, null, "440212", 2 ], [ 8, null, "412073", 2 ], [ 9, null, "390741", 2 ], [ 10, null, "390739", 2 ], [ 11, null, "390343", 2 ], [ 12, null, "344061", 2 ], [ 13, null, "322893", 2 ], [ 14, null, "321369", 2 ], [ 15, null, "314289", 2 ], [ 16, null, "300485", 2 ], [ 17, null, "299083", 2 ], [ 18, null, "292847", 2 ], [ 19, null, "269618", 2 ], [ 20, null, "241439", 2 ], [ 21, null, "240051", 2 ], [ 22, null, "224012", 2 ], [ 23, null, "218567", 2 ], [ 24, null, "213470", 2 ], [ 25, null, "213469", 2 ], [ 26, null, "213468", 2 ], [ 27, null, "131791", 2 ], [ 28, null, "121945", 2 ], [ 29, null, "119226", 2 ], [ 30, null, "111259", 2 ], [ 31, null, "111087", 2 ], [ 32, null, "75663", 2 ], [ 33, null, "66574", 2 ], [ 34, null, "66423", 2 ], [ 35, null, "66299", 2 ], [ 36, null, "65658", 2 ], [ 37, null, "64721", 2 ], [ 38, null, "64720", 2 ], [ 39, null, "63875", 2 ], [ 40, null, "63308", 2 ], [ 41, null, "63307", 2 ], [ 42, null, "62547", 2 ], [ 43, null, "60992", 2 ], [ 44, null, "60081", 2 ], [ 45, null, "507471", 1 ], [ 46, null, "502262", 1 ], [ 47, null, "336268", 1 ], [ 48, null, "320848", 1 ], [ 49, null, "313978", 1 ], [ 50, null, "313678", 1 ], [ 51, null, "299158", 1 ], [ 52, null, "293136", 1 ], [ 53, null, "247534", 1 ], [ 54, null, "224167", 1 ], [ 55, null, "218834", 1 ], [ 56, null, "213090", 1 ], [ 57, null, "213089", 1 ], [ 58, null, "213088", 1 ], [ 59, null, "212894", 1 ], [ 60, null, "200235", 1 ], [ 61, null, "150735", 1 ], [ 62, null, "134566", 1 ], [ 63, null, "131746", 1 ], [ 64, null, "129935", 1 ], [ 65, null, "129274", 1 ], [ 66, null, "129090", 1 ], [ 67, null, "127718", 1 ], [ 68, null, "127496", 1 ], [ 69, null, "126680", 1 ], [ 70, null, "122780", 1 ], [ 71, null, "120574", 1 ], [ 72, null, "119892", 1 ], [ 73, null, "119663", 1 ], [ 74, null, "119391", 1 ], [ 75, null, "119254", 1 ], [ 76, null, "118078", 1 ], [ 77, null, "117683", 1 ], [ 78, null, "115939", 1 ], [ 79, null, "112037", 1 ], [ 80, null, "111576", 1 ], [ 81, null, "111390", 1 ], [ 82, null, "111285", 1 ], [ 83, null, "109141", 1 ], [ 84, null, "94783", 1 ], [ 85, null, "75664", 1 ], [ 86, null, "65778", 1 ], [ 87, null, "65730", 1 ], [ 88, null, "64631", 1 ], [ 89, null, "64551", 1 ], [ 90, null, "63890", 1 ], [ 91, null, "60384", 1 ] ];

class GlovesGlovesConfig extends ConfigBase {
    constructor() {
        super(EXCELDATA$H);
    }
}

var foreign37 = Object.freeze({
    __proto__: null,
    GlovesGlovesConfig: GlovesGlovesConfig
});

const EXCELDATA$G = [ [ "ID", "Describe", "AssetId", "SexType" ], [ "", "", "", "" ], [ 1, "翻毛黄金首饰", "137386", 1 ], [ 2, "清洁手套", "119254", 2 ] ];

class GlovesConfig extends ConfigBase {
    constructor() {
        super(EXCELDATA$G);
    }
}

var foreign36 = Object.freeze({
    __proto__: null,
    GlovesConfig: GlovesConfig
});

const EXCELDATA$F = [ [ "ID", "GUNNAME", "GUNPREFAB", "GUNICON", "GUNICON_M", "GUNLOC", "GUNSCALE", "IATURNICON", "PRICETYPE", "PRICE", "FIREINTERVAL", "BULLETCOUNT", "HURT" ], [ "", "", "", "", "", "", "", "", "", "", "", "", "" ], [ 1, "水枪", "587777AD4056DC3AB465FBA7D3F5F7BA", null, "166941", new mw.Vector(0, 0, 0), new mw.Vector(1, 2, 1), 0, 1, [ 1, 15888 ], "0.2", 30, 25 ], [ 2, "泡泡枪", "0D543D5346C331F41DA890A5E6DD3DB5", null, "155696", new mw.Vector(0, 0, 0), new mw.Vector(1, 1, 1), 0, 1, [ 1, 15888 ], "0.2", 30, 25 ], [ 3, "霰弹枪", "E3E0C2994D3518540DBB6D8C00C8AB83", null, "226214", new mw.Vector(0, 0, 0), new mw.Vector(2, 2, 2), 0, 1, [ 1, 15888 ], "0.15", 30, 25 ], [ 4, "金枪鱼", "5181250F44DF914A714B668F99177E3A", null, "138213", new mw.Vector(0, 0, 0), new mw.Vector(1, 1, 1), 0, 1, [ 1, 15888 ], "0.15", 30, 25 ], [ 5, "脉冲枪", "1CD6AEAB4602DF140ACE93BD49D5CA19", null, "153110", new mw.Vector(0, 0, 0), new mw.Vector(2, 2.5, 2), 0, 1, [ 1, 15888 ], "0.1", 35, 25 ], [ 6, "喷火枪", "A469CCC84AAA873815243BB25439707C", null, "226213", new mw.Vector(0, 0, 0), new mw.Vector(2, 2, 2), 0, 1, [ 1, 15888 ], "0.1", 35, 25 ], [ 7, "散弹喷枪", "68E812DC47B714F9A2BB2ABE18304C5B", null, "155702", new mw.Vector(0, 0, 0), new mw.Vector(1, 1, 1), 0, 1, [ 2, 28888 ], "0.1", 35, 25 ], [ 8, "霰弹枪枪身", "BA1BDC034FCDE8574CBBAA8C4831A950", null, "318664", new mw.Vector(0, 0, 0), new mw.Vector(1, 1, 1), 0, 1, [ 2, 28888 ], "0.1", 40, 25 ], [ 9, "火箭发射器", "FCFE18BE440FAEBD5AB999A222F10AA9", null, "226826", new mw.Vector(0, 0, 0), new mw.Vector(1.5, 1, 1), 0, 1, [ 2, 28888 ], "0.2", 100, 25 ], [ 10, "激光幽灵枪", "23240FEE4F3BD25DE8EA6DBE525B3A20", null, "122716", new mw.Vector(0, 0, 0), new mw.Vector(1, 1, 1), 1, 1, [ 3, 38888 ], "0.3", 40, 50 ], [ 11, "烟花枪", "A830458640D6EA21FB7AEA8F7E029CB7", null, "122726", new mw.Vector(0, 0, 0), new mw.Vector(1, 1, 1), 0, 1, [ 3, 38888 ], "0.3", 40, 50 ], [ 12, "激光烈火枪", "0C7F278C4254F90F69614086DCA0B906", null, "95676", new mw.Vector(-30, 0, 0), new mw.Vector(1, 1, 1), 0, 1, [ 100, 888888 ], "0.3", 40, 50 ], [ 13, "激光冰雷枪", "29CD5E6145D1B05590E887A050E0D3C8", null, "122720", new mw.Vector(-30, 0, 0), new mw.Vector(1, 1, 1), 0, 1, [ 666, 8888888 ], "0.3", 40, 50 ], [ 14, "尖叫鸡", "015C826546EBC60F95EF399D16523B78", null, "20799", new mw.Vector(0, 0, 0), new mw.Vector(2, 2, 3), 1, 1, [ 888, 888888888 ], "1", 10, 100 ] ];

class GUNConfig extends ConfigBase {
    constructor() {
        super(EXCELDATA$F);
    }
}

var foreign38 = Object.freeze({
    __proto__: null,
    GUNConfig: GUNConfig
});

const EXCELDATA$E = [ [ "ID", "Describe", "AssetId", "SexType" ], [ "", "", "", "" ], [ 1, "风暴女", "142261", 2 ], [ 2, "绯红女巫", "142262", 2 ], [ 3, "黑寡妇", "142891", 2 ], [ 4, "惊奇队长", "142893", 2 ], [ 5, "神奇女侠", "142902", 2 ], [ 6, "女战士", "349374", 2 ], [ 7, "魔法女孩", "350260", 2 ], [ 8, "战士服", "164416", 2 ], [ 9, "作战服", "164420", 2 ], [ 10, "紧身作战服", "164425", 2 ], [ 11, "塞西亚套装", "321428", 2 ], [ 12, "男式紧身服", "162938", 1 ], [ 13, "道服", "162937", 1 ], [ 14, "男作战服", "162946", 1 ], [ 15, "雷电战士服饰", "164355", 1 ], [ 16, "鱼族战士服", "164360", 1 ], [ 17, "战士服", "164361", 1 ], [ 18, "法师服饰", "164362", 1 ], [ 19, "面具骑士服", "164371", 1 ], [ 20, "黑夜战士服", "164373", 1 ], [ 21, "黄金战甲", "164378", 1 ], [ 22, "蝙蝠侠", "142884", 1 ], [ 23, "超人", "142885", 1 ], [ 24, "毒液", "142886", 1 ], [ 25, "恶灵骑士", "142887", 1 ], [ 26, "钢铁侠", "142888", 1 ], [ 27, "海王", "142889", 1 ], [ 28, "黑豹", "142890", 1 ], [ 29, "金刚狼", "142892", 1 ], [ 30, "雷神", "142894", 1 ], [ 31, "洛基", "142895", 1 ], [ 32, "绿灯侠", "142896", 1 ], [ 33, "绿巨人", "142897", 1 ], [ 34, "美国队长", "142898", 1 ], [ 35, "灭霸", "142899", 1 ], [ 36, "奇异博士", "142900", 1 ], [ 37, "闪电侠", "142901", 1 ], [ 38, "死侍", "142903", 1 ], [ 39, "万磁王", "142904", 1 ], [ 40, "蚁人", "142905", 1 ], [ 41, "鹰眼", "142906", 1 ], [ 42, "蜘蛛侠", "142907", 1 ] ];

class HeroStylingOutfitConfig extends ConfigBase {
    constructor() {
        super(EXCELDATA$E);
    }
}

var foreign39 = Object.freeze({
    __proto__: null,
    HeroStylingOutfitConfig: HeroStylingOutfitConfig
});

const EXCELDATA$D = [ [ "ID", "Describe", "AssetId", "SexType" ], [ "", "", "", "" ], [ 1, null, "497741", 2 ], [ 2, null, "490925", 2 ], [ 3, null, "436992", 2 ], [ 4, null, "358106", 2 ], [ 5, null, "321373", 2 ], [ 6, null, "299079", 2 ], [ 7, null, "218443", 2 ], [ 8, null, "211008", 2 ], [ 9, null, "164845", 2 ], [ 10, null, "141712", 2 ], [ 11, null, "137428", 2 ], [ 12, null, "127638", 2 ], [ 13, null, "67592", 2 ], [ 14, null, "66562", 2 ], [ 15, null, "65867", 2 ], [ 16, null, "64775", 2 ], [ 17, null, "64712", 2 ], [ 18, null, "64304", 2 ], [ 19, null, "64144", 2 ], [ 20, null, "63870", 2 ], [ 21, null, "63541", 2 ], [ 22, null, "62961", 2 ], [ 23, null, "62960", 2 ], [ 24, null, "62541", 2 ], [ 25, null, "62539", 2 ], [ 26, null, "60984", 2 ], [ 27, null, "60117", 2 ], [ 28, null, "60078", 2 ] ];

class HighHeelsShoesConfig extends ConfigBase {
    constructor() {
        super(EXCELDATA$D);
    }
}

var foreign40 = Object.freeze({
    __proto__: null,
    HighHeelsShoesConfig: HighHeelsShoesConfig
});

const EXCELDATA$C = [ [ "ID", "Describe", "AssetId", "Transform", "SexType" ], [ "", "", "", "", "" ], [ 1, "尾巴", "136179", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 2, "孔雀尾巴", "292600", [ "0", "0", "0", "-90", "0", "90", "1", "1", "1" ], 0 ], [ 3, "尾巴", "136173", [ "0", "0", "0", "-90", "0", "-90", "1", "1", "1" ], 0 ], [ 4, "尾巴", "453459", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 5, "尾巴", "453460", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 6, "尾巴", "404432", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 7, "狐狸尾巴", "226476", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 8, "人鱼尾巴", "493583", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 9, "尾巴", "323388", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 10, null, "404432", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 11, null, "136172", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 12, null, "136182", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 13, null, "136174", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 14, null, "136162", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 15, null, "212788", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 16, null, "213045", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 17, null, "212598", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 18, null, "213046", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 19, null, "212911", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 20, null, "212761", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 21, null, "212762", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 22, null, "212599", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 23, null, "212786", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 24, null, "215996", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 25, null, "348230", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 26, null, "323953", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ] ];

class HipConfig extends ConfigBase {
    constructor() {
        super(EXCELDATA$C);
    }
}

var foreign41 = Object.freeze({
    __proto__: null,
    HipConfig: HipConfig
});

const EXCELDATA$B = [ [ "ID", "Describe", "AssetId", "SexType" ], [ "", "", "", "" ], [ 1, "圣诞节女", "136298", 2 ], [ 2, "煎饼狗子", "141608", 2 ], [ 3, "新年双马尾女", "141918", 2 ], [ 4, "新年女", "142187", 2 ], [ 5, "雪人001", "142264", 2 ], [ 6, "新年女青年", "142285", 2 ], [ 7, "万圣节女", "143399", 2 ], [ 8, "圣诞服装", "162933", 2 ], [ 9, "汉服襦裙", "163276", 2 ], [ 10, "圣诞公主裙", "163326", 2 ], [ 11, "圣诞装", "163549", 2 ], [ 12, "春节时装", "163552", 2 ], [ 13, "雪人装", "164566", 2 ], [ 14, "新年装", "297941", 2 ], [ 15, "兔子套装", "314666", 2 ], [ 16, "汉服长袍", "162964", 1 ], [ 17, "春节时装", "164565", 1 ], [ 18, "摇滚歌手服饰", "164567", 1 ], [ 19, "圣诞老人服", "164568", 1 ], [ 20, "巫医服饰", "164569", 1 ], [ 21, "教廷服饰", "164570", 1 ], [ 22, "鬼脸套装", "164571", 1 ], [ 23, "圣诞老人套装", "164572", 1 ], [ 24, "圣诞装", "164573", 1 ], [ 25, "鸡蛋套装", "314226", 1 ], [ 26, "兔子套装", "314664", 1 ], [ 27, "圣诞老人", "136299", 1 ], [ 28, "Cupid", "141077", 1 ], [ 29, "凌羽琪", "141155", 1 ], [ 30, "新年男", "142186", 1 ], [ 31, "新年男青年", "142273", 1 ], [ 32, "新年男中年", "142284", 1 ], [ 33, "新年男005", "142313", 1 ] ];

class HolidayStylingOutfitConfig extends ConfigBase {
    constructor() {
        super(EXCELDATA$B);
    }
}

var foreign42 = Object.freeze({
    __proto__: null,
    HolidayStylingOutfitConfig: HolidayStylingOutfitConfig
});

const EXCELDATA$A = [ [ "Id", "Name", "Value", "Value_Ch", "Value_Cht", "Value_J", "Value_K" ], [ "", "Key|ReadByName", "MainLanguage", "ChildLanguage", "ChildLanguage", "ChildLanguage", "ChildLanguage" ], [ 1, "CannotResetPositionWithinSeconds", "Cannot Reset Position Within {0} Seconds", "{0}秒内不可重置位置", null, null, null ], [ 2, "DoYouWantToResetThePosition", "Do You Want To Reset The Position", "是否重置位置", null, null, null ], [ 3, "Yes", "Yes", "是", null, null, null ], [ 4, "No", "No", "否", null, null, null ], [ 5, "ResetPosition", "Reset Position", "重置位置", null, null, null ], [ 6, "DoYouWantToUseItImmediately", "Do You Want To Use It Immediately", "是否立即使用", null, null, null ], [ 7, "Buy", "Buy", "购买", null, null, null ], [ 8, "ConfirmExpenses", "Confirm Expenses", "确认花费", null, null, null ], [ 9, "Diamonds", "Diamonds", "钻石", null, null, null ], [ 10, "GoldCoins", "Gold Coins", "金币", null, null, null ], [ 11, "Cancel", "Cancel", "取消", null, null, null ], [ 12, "Tips", "Tips", "提示", null, null, null ], [ 13, "AcquisitionFailedPleaseTryAgain", "Acquisition Failed, Please Try Again", "获取失败，请重试", null, null, null ], [ 14, "FreeCollectionOfCoins", "Free Collection Of {0} Coins", "免费领取{0}金币", null, null, null ], [ 15, "FreeToReceive", "Free To Receive", "免费领取", null, null, null ], [ 16, "DoubleTheRewardMaximumHealthIncreasedTo", "Double The Reward\nMaximum Health Increased To {0}", "奖励翻倍\n最大生命值提高到{0}", null, null, null ], [ 17, "FreeIncrease", "Free Increase", "免费提高", null, null, null ], [ 18, "FreeUseOfOneRound", "{0}\nFree Use Of One Round", "{0}\n免费使用一局", null, null, null ], [ 19, "FreeToUse", "Free To Use", "免费使用", null, null, null ], [ 20, "FreeCollectionOfDiamonds", "Free Collection Of {0} Diamonds", "免费领取{0}钻石", null, null, null ], [ 21, "Get", "Get", "获得", null, null, null ], [ 22, "Spend", "Spend", "花费", null, null, null ], [ 23, "Lurking", "Lurkers", "潜伏者", null, null, null ], [ 24, "Defenders", "Defenders", "保卫者", null, null, null ], [ 25, "Life", "Hp", "生命", null, null, null ], [ 26, "InvincibleTime", "Invincible Time", "无敌时间", null, null, null ], [ 27, "ResurrectionCountdown", "Resurrection Countdown", "复活倒计时", null, null, null ], [ 28, "InvincibleWithinSecondsAfterResurrection", "Invincible Within {0} Seconds After Resurrection", "复活后{0}秒内无敌", null, null, null ], [ 29, "SetUp", "Set Up", "设置", null, null, null ], [ 30, "FiringSensitivity", "Firing Sensitivity", "开火灵敏度", null, null, null ], [ 31, "ControlSensitivity", "Control Sensitivity", "控制灵敏度", null, null, null ], [ 32, "BackgroundMusicSize", "Background Music Size", "背景音乐大小", null, null, null ], [ 33, "SfxVolume", "Sfx Volume", "音效大小", null, null, null ], [ 34, "Defeated", " Defeated ", " 击败了 ", null, null, null ], [ 35, "YouHaveBeenDefeatedBy", "You Have Been Defeated By {0}", "你已被 {0} 击败", null, null, null ], [ 36, "DefeatToCompleteRevenge", "Defeat {0} To Complete Revenge", "击败 {0} 完成复仇", null, null, null ], [ 37, "RdPlace", "{0}: {1}Rd Place", "{0}：第{1}名", null, null, null ], [ 38, "DefeatedPeople_2", "Defeated 2 People", "连续消灭2人！势不可当！", null, null, null ], [ 39, "DefeatedPeople_3", "Defeated 3 People", "连续消灭3人！勇冠三军！", null, null, null ], [ 40, "DefeatedPeople_4", "Defeated 4 People", "连续消灭4人！无人能敌！", null, null, null ], [ 41, "DefeatedPeople_5", "Defeated 5 People", "连续消灭5人！横扫千军！", null, null, null ], [ 42, "DefeatedPeople_6", "Defeated 6 People", "连续消灭6人！接近神了！", null, null, null ], [ 43, "DefeatedPeople_7", "Defeated {0} People", "连续消灭{0}人！超越神了！", null, null, null ], [ 44, "Ranking", "Ranking", "排名", null, null, null ], [ 45, "Nickname", "Nickname", "昵称", null, null, null ], [ 46, "Beat", "Beat", "击败", null, null, null ], [ 47, "Death", "Death", "死亡", null, null, null ], [ 48, "TopInTheEntireServer", "Top {0} In The Entire Server", "全服前{0}名", null, null, null ], [ 49, "TotalDefeat", "Total Defeat", "总击败", null, null, null ], [ 50, "TotalDeaths", "Total Deaths", "总死亡", null, null, null ], [ 51, "RankingOfAchievements", "Ranking\nAchievements", "战绩排行榜", null, null, null ], [ 52, "FullServerRankingList", "Full Server\nRanking List", "全服排行榜", null, null, null ], [ 53, "Weapon", "Weapon", "武器", null, null, null ], [ 54, "Skin", "Skin", "皮肤", null, null, null ], [ 55, "Trailing", "Trailing", "拖尾", null, null, null ], [ 56, "Use", "Use", "使用", null, null, null ], [ 57, "Obtained", "Obtained", "已获得", null, null, null ], [ 58, "NotObtained", "Not Obtained", "未获得", null, null, null ], [ 59, "Hurt", "Hurt", "伤害", null, null, null ], [ 60, "Bullet", "Bullet", "子弹", null, null, null ], [ 61, "TimeLimited", "Time Limited", "限时", null, null, null ], [ 62, "Permanent", "Permanent", "永久", null, null, null ], [ 63, "Error", "Error", "出错啦", null, null, null ], [ 64, "TransformationStatusCannotOpenTheStore", "Transformation Status Cannot Open The Store", "变身状态不可打开商店", null, null, null ], [ 65, "PurchaseSuccessful", "Purchase Successful", "购买成功", null, null, null ], [ 66, "InsufficientGoldCoins", "Insufficient Gold Coins", "金币不足", null, null, null ], [ 67, "DiamondShortage", "Diamond Shortage", "钻石不足", null, null, null ], [ 68, "WearingIt", "Wearing It", "穿戴中", null, null, null ], [ 69, "SkinSuccessfullyWorn", "Skin Successfully Worn", "皮肤成功穿戴", null, null, null ], [ 70, "TailSuccessfullyWorn", "Tail Successfully Worn", "尾迹成功穿戴", null, null, null ], [ 71, "Previewing", "Previewing", "正在预览", null, null, null ], [ 72, "Pistol", "Pistol", "手枪", null, null, null ], [ 73, "BubbleGun", "Bubble Gun", "泡泡枪", null, null, null ], [ 74, "ShotgunSprayGun", "Shotgun Spray Gun", "散弹喷枪", null, null, null ], [ 75, "Shotgun", "Shotgun", "霰弹枪", null, null, null ], [ 76, "SpitfireGun", "Spitfire Gun", "喷火枪", null, null, null ], [ 77, "FireGun", "Fire Gun", "火枪", null, null, null ], [ 78, "LaserGun", "Laser Gun", "激光枪", null, null, null ], [ 79, "WaterGun", "Water Gun", "水枪", null, null, null ], [ 80, "RocketLauncher", "Rocket Launcher", "火箭发射器", null, null, null ], [ 81, "JustinGatlin", "Justin Gatlin", "加特林", null, null, null ], [ 82, "Tunas", "Tunas", "金枪鱼", null, null, null ], [ 83, "BowAndArrow", "Bow And Arrow", "弓箭", null, null, null ], [ 84, "ParticleTailing", "Particle Tailing", "粒子拖尾", null, null, null ], [ 85, "SmokeTrail", "Smoke Trail", "烟雾拖尾", null, null, null ], [ 86, "BeamTrailing", "Beam Trailing", "光束拖尾", null, null, null ], [ 87, "Tail", "Tail", "拖尾", null, null, null ], [ 88, "WaterTailing", "Water Tailing", "水拖尾", null, null, null ], [ 89, "FlameTrailing", "Flame Trailing", "火焰拖尾", null, null, null ], [ 90, "ThunderTail", "Thunder Tail", "雷拖尾", null, null, null ], [ 91, "RainbowTail", "Rainbow Tail", "彩虹拖尾", null, null, null ], [ 92, "TirePrintTailing", "Tire Print Tailing", "胎印拖尾", null, null, null ], [ 93, "ScrewTail", "Screw Tail", "螺丝钉拖尾", null, null, null ], [ 94, "FootballTail", "Football Tail", "足球拖尾", null, null, null ], [ 95, "CandyTail", "Candy Tail", "糖果拖尾", null, null, null ], [ 96, "TrophyTail", "Trophy Tail", "奖杯拖尾", null, null, null ], [ 97, "CrownTail", "Crown Tail", "皇冠拖尾", null, null, null ], [ 98, "LoveTail", "Love Tail", "爱心拖尾", null, null, null ], [ 99, "SkullTail", "Skull Tail", "骷髅拖尾", null, null, null ], [ 100, "BananaTail", "Banana Tail", "香蕉拖尾", null, null, null ], [ 102, "SnowflakeTail", "Snowflake Tail", "雪花拖尾", null, null, null ], [ 103, "Tail2023", "2023 Tail", "2023拖尾", null, null, null ], [ 104, "FirecrackerTail", "Firecracker Tail", "爆竹拖尾", null, null, null ], [ 105, "FireworksTail", "Fireworks Tail", "烟花拖尾", null, null, null ], [ 106, "GiftTail", "Gift Tail", "礼物拖尾", null, null, null ], [ 107, "TailOfBanknotes", "Tail Of Banknotes", "钞票拖尾", null, null, null ], [ 108, "BubbleTail", "Bubble Tail", "泡泡拖尾", null, null, null ], [ 109, "RibbonTrailing", "Ribbon Trailing", "彩带拖尾", null, null, null ], [ 110, "TailOfFeces", "Tail Of Feces", "便便拖尾", null, null, null ], [ 111, "MapleLeafTail", "Maple Leaf Tail", "枫叶拖尾", null, null, null ], [ 112, "SixPointedStarTail", "Six Pointed Star Tail", "六芒星拖尾", null, null, null ], [ 113, "ButterflyTail", "Butterfly Tail", "蝴蝶拖尾", null, null, null ], [ 114, "IceCreamTrail", "Ice Cream Trail", "冰淇淋拖尾", null, null, null ], [ 115, "BirdTail", "Bird Tail", "鸟拖尾", null, null, null ], [ 116, "BatTail", "Bat Tail", "蝙蝠拖尾", null, null, null ], [ 117, "XiangyunTail", "Xiangyun Tail", "祥云拖尾", null, null, null ], [ 118, "Print", "Print", "爪印", null, null, null ], [ 119, "HoodedMan", "Hooded Man", "兜帽男", null, null, null ], [ 120, "DoublePonytailGirl", "Double Ponytail Girl", "双马尾女", null, null, null ], [ 121, "MaleWarrior", "Male Warrior", "男战士", null, null, null ], [ 122, "MechGirl", "Mech Girl", "机甲少女", null, null, null ], [ 123, "MaleKnight", "Male Knight", "男骑士", null, null, null ], [ 124, "NanoMechWomen", "Nano Mech Women", "纳米机甲女性", null, null, null ], [ 125, "CyberYouth", "Cyber Youth", "赛博少年", null, null, null ], [ 126, "CyberGirls", "Cyber Girls", "赛博少女", null, null, null ], [ 127, "DefinitelyPotBoy", "Definitely Pot Boy", "一定锅少年", null, null, null ], [ 128, "SeekingGodYoungMan", "Seeking God, Young Man", "求神少年", null, null, null ], [ 129, "DefinitelyPotGirl", "Definitely Pot Girl", "一定锅少女", null, null, null ], [ 130, "SeekingGodGirl", "Seeking God Girl", "求神少女", null, null, null ], [ 131, "GemstoneArmoredMan", "Gemstone Armored Man", "宝石铠甲男", null, null, null ], [ 132, "ArmoredMaleWarrior", "Armored Male Warrior", "铠甲男战士", null, null, null ], [ 133, "BlackMaleNanomecha", "Black Male Nanomecha", "黑人男纳米机甲", null, null, null ], [ 134, "WhiteMaleNanomecha", "White Male Nanomecha", "白人男纳米机甲", null, null, null ], [ 135, "SilverKnights", "Silver Knights", "白银骑士", null, null, null ], [ 136, "EagleWarrior", "Eagle Warrior", "鹰战士", null, null, null ], [ 137, "Warrior", "Warrior", "战士", null, null, null ], [ 138, "VenomMonster", "Venom Monster", "毒液怪人", null, null, null ], [ 139, "AntWarrior", "Ant Warrior", "蚁侠士", null, null, null ], [ 140, "TheStrongestCaptain", "The Strongest Captain", "最强队长", null, null, null ], [ 141, "SuperHandsomeHero", "Super Handsome Hero", "超帅侠", null, null, null ], [ 142, "StrangeWarrior", "Strange Warrior", "奇异战士", null, null, null ], [ 143, "LightningMonster", "Lightning Monster", "闪电怪", null, null, null ], [ 144, "EvilSpiritSkull", "Evil Spirit Skull", "恶灵骷髅", null, null, null ], [ 145, "IronMan", "Iron Man", "铁人", null, null, null ], [ 146, "WindbreakerGirl", "Windbreaker Girl", "风衣女", null, null, null ], [ 147, "HanfuGirl", "Hanfu Girl", "汉服少女", null, null, null ], [ 148, "FashionableGirl", "Fashionable Girl", "时尚少女", null, null, null ], [ 149, "TrendyGirl", "Trendy Girl", "潮流少女", null, null, null ], [ 150, "AncientScholars", "Ancient Scholars", "古代书生", null, null, null ], [ 151, "OrangeLaserGun", "Orange Laser Gun", "橘黄激光枪", null, null, null ], [ 152, "Text_ClaimRewards", "Claim Rewards", "领取奖励", null, null, null ], [ 153, "Text_HangInTheAir", "Hang In The Air", "未完成", null, null, null ], [ 154, "Text_DailyTasks", "Daily Tasks", "每日任务", null, null, null ], [ 155, "Text_AllTasksHaveBeenCompletedWaitingForRefresh", "All Tasks Have Been Completed, Waiting For Refresh", "任务已全部完成，等待刷新...", null, null, null ], [ 156, "Text_RemainingHours", "Remaining: {0} Hours", "剩余：{0}小时", null, null, null ], [ 157, "Text_RemainingDays", "Remaining: {0} Days", "剩余：{0}天", null, null, null ], [ 158, "Text_WeeklyTasks", "Weekly Tasks", "每周任务", null, null, null ], [ 159, "Dailylogintothegame", "Daily login to the game ({0}/{1})", "每日登录游戏（{0}/{1}）", null, null, null ], [ 160, "Dailyonlinedurationminutes", "Daily online duration {2} minutes ({0}/{1})", "每日在线时长{2}分钟（{0}/{1}）", null, null, null ], [ 161, "Defeatplayersdaily", "Defeat {2} players daily ({0}/{1})", "每日击败{2}个玩家（{0}/{1}）", null, null, null ], [ 162, "Logindaysperweek", "Login {2} days per week ({0}/{1})", "每周登录{2}天（{0}/{1}）", null, null, null ], [ 163, "Join", "Join", "加入", null, null, null ], [ 164, "WeaponEquipmentSuccessful", "Weapon Equipment Successful", "武器装备成功", null, null, null ], [ 165, "SwitchingFailedYouAreAlreadyIn", "Switching Failed, You Are Already In {0}", "切换失败,你已在{0}中", null, null, null ], [ 166, "CannotSwitchTeamsFrequentlyTryAgainInSeconds", "Cannot Switch Teams Frequently, Try Again In {0} Seconds", "不能频繁切换队伍，{0}秒后再试", null, null, null ], [ 167, "SuccessfullySwitchedTeams", "Successfully Switched Teams", "切换队伍成功", null, null, null ], [ 168, "SwitchingFailedThisTeamIsFull", "Switching Failed, This Team Is Full", "切换失败,此队已满", null, null, null ], [ 169, "SwitchingFailedUnequalNumberOfPeople", "Switching Failed, Unequal Number Of People", "切换失败,人数不平等", null, null, null ], [ 170, "AlreadyOnThisTeam", "Already On This Team", "已在此队", null, null, null ], [ 171, "bazooka", "bazooka", "火箭筒", null, null, null ], [ 172, "Text_TheItemBarIsFull", "The item bar is full", "道具栏已满", null, null, null ], [ 173, "Text_ThisItemIsInUse", "This item is in use", "正在使用此道具", null, null, null ], [ 174, "Text_Tips1", "Someone is using it, please try another one", "有人正在使用，请换个试试", null, null, null ], [ 175, "Text_SetUp1", "Base Setup", "基础设置", null, null, null ], [ 176, "Text_PictureQuality", "Picture Quality", "画质", null, null, null ], [ 177, "Text_SoundEffects", "Sound Effects", "音效", null, null, null ], [ 178, "Text_BackgroundMusic", "Background Music", "背景音乐", null, null, null ], [ 179, "Text_ViewAngleScaling", "View Angle Scaling", "视角缩放", null, null, null ], [ 180, "Text_DisplayNicknames", "Display Nicknames", "显示昵称", null, null, null ], [ 181, "Text_ResetLocation", "Reset Location", "重置位置", null, null, null ], [ 182, "Text_RestoringSettings", "Restoring Settings", "还原设置", null, null, null ], [ 183, "Text_On", "ON", "开", null, null, null ], [ 184, "Text_Off", "OFF", "关", null, null, null ], [ 185, "Text_ObtainedTips", "Obtained, open the knapsack to use", "已获得，打开背包使用", null, null, null ], [ 186, "Text_Advertising", "Advertising", "广告奖励", null, null, null ], [ 187, "Text_ADGetTips", "See the AD for free guide you get", "看广告免费指引你获得", null, null, null ], [ 188, "Text_Dont", "Don't", "不要", null, null, null ], [ 189, "Text_Free", "free", "免费获得", null, null, null ], [ 190, "Text_Fail", "Fail", "指引失败，请重试", null, null, null ], [ 191, "Text_NoOnTheList", "Not", "未上榜", null, null, null ], [ 192, "Text_Ranking", "Ranking", "排名", null, null, null ], [ 193, "Text_Nickname", "Nickname", "昵称", null, null, null ], [ 194, "Text_Score", "Score", "分数", null, null, null ], [ 195, "Text_Duration", "Duration", "时长", null, null, null ], [ 196, "Text_TopInTermsOfDuration", "Top {0} In Terms Of Duration", "时长全服前{0}名", null, null, null ], [ 197, "Text_StartGame", "Start the game", "开始游戏", null, null, null ], [ 198, "Text_WelcomeTo", "Welcome to\nMy Cherry blossom town", "欢迎来到\n我的樱花小镇", null, null, null ], [ 199, "Text_UpNext", "Up next", "下一个", null, null, null ], [ 200, "Text_GuideEnd", "With the guide over, start your trip to the cherry blossom town", "引导结束，开启你的樱花小镇之旅吧", null, null, null ], [ 201, "Text_Close", "Close", "关闭", null, null, null ], [ 202, "Text_MyCharacterId", "My Character ID- Share Friend Try On", "我的角色ID-分享好友试穿", null, null, null ], [ 203, "Text_PleaseEnter", "Please Enter The Friend Role ID", "请输入好友角色ID", null, null, null ], [ 204, "Text_Cancel", "Cancel", "取消", null, null, null ], [ 205, "Text_FreeTryOn", "Free Try On", "免费试穿", null, null, null ], [ 206, "Text_SaveImagesForFree", "Save images for free", "免费保存形象", null, null, null ], [ 207, "Text_TryOnYourFriendAvatarForFree", "Try On Your Friend's Avatar For Free", "免费试穿好友的角色形象", null, null, null ], [ 208, "Text_CopySuccessfully", "Copy Successfully", "复制成功", null, null, null ], [ 209, "Text_InvalidID", "Invalid ID!", "ID无效！", null, null, null ], [ 210, "Text_Loading", "Loading", "加载中", null, null, null ], [ 211, "Text_TryItOnSuccessfully", "Try it on successfully", "试穿成功", null, null, null ], [ 212, "Text_CopyTheCharacterIDShareFriendsTryOn", "Copy the character ID share friends try on", "复制角色ID分享好友试穿", null, null, null ], [ 213, "Text_TryItOnForFree", "Try it on for free", "看广告免费试穿", null, null, null ], [ 214, "Text_GuideTips", "Reach near the target point", "达到目标点附近", null, null, null ], [ 215, "Text_HUDTips1", null, "签到任务", null, null, null ], [ 216, "Text_HUDTips2", null, "排行榜", null, null, null ], [ 217, "Text_HUDTips3", null, "设置", null, null, null ], [ 218, "Text_HUDTips4", null, "换装商店", null, null, null ], [ 219, "Text_HUDTips5", null, "武器商店", null, null, null ], [ 220, "Text_HUDTips6", null, "切换阵营", null, null, null ], [ 221, "Text_HUDTips7", null, "免费换装", null, null, null ], [ 222, "Text_HUDTips8", null, null, null, null, null ], [ 223, "Text_Tab1_1", "Appearance", "捏脸", null, null, null ], [ 224, "Text_Tab1_2", "Clothing", "换装", null, null, null ], [ 225, "Text_Tab1_3", "Collection", "收藏", null, null, null ], [ 226, "Text_Tab1_4", "Test", "测试", null, null, null ], [ 227, "Text_Tab2_101", "Body Type", "体型", null, null, null ], [ 228, "Text_Tab2_102", "Skin Tone", "肤色", null, null, null ], [ 229, "Text_Tab2_103", "Face", "脸型", null, null, null ], [ 230, "Text_Tab2_104", "Eyes", "眼睛", null, null, null ], [ 231, "Text_Tab2_105", "Eyebrows", "眉毛", null, null, null ], [ 232, "Text_Tab2_106", "Makeup", "妆容", null, null, null ], [ 233, "Text_Tab2_107", "Expression", "表情", null, null, null ], [ 234, "Text_Tab2_108", "Outfit", "套装", null, null, null ], [ 235, "Text_Tab2_109", "Hair", "头发", null, null, null ], [ 236, "Text_Tab2_110", "Top", "上衣", null, null, null ], [ 237, "Text_Tab2_111", "Bottom", "下衣", null, null, null ], [ 238, "Text_Tab2_112", "Gloves", "鞋子", null, null, null ], [ 239, "Text_Tab2_113", "Shoes", "手套", null, null, null ], [ 240, "Text_Tab2_114", "Pet", "宠物", null, null, null ], [ 241, "Text_Tab2_115", "Accessory", "饰品", null, null, null ], [ 242, "Text_Tab2_501", "Body Type", "体型", "收藏", null, null ], [ 243, "Text_Tab2_502", "Skin Tone", "肤色", "收藏", null, null ], [ 244, "Text_Tab2_503", "Face", "脸型", "收藏", null, null ], [ 245, "Text_Tab2_504", "Eyes", "眼睛", "收藏", null, null ], [ 246, "Text_Tab2_505", "Eyebrows", "眉毛", "收藏", null, null ], [ 247, "Text_Tab2_506", "Makeup", "妆容", "收藏", null, null ], [ 248, "Text_Tab2_507", "Expression", "表情", "收藏", null, null ], [ 249, "Text_Tab2_508", "Outfit", "套装", "收藏", null, null ], [ 250, "Text_Tab2_509", "Hair", "头发", "收藏", null, null ], [ 251, "Text_Tab2_510", "Top", "上衣", "收藏", null, null ], [ 252, "Text_Tab2_511", "Bottom", "下衣", "收藏", null, null ], [ 253, "Text_Tab2_512", "Gloves", "鞋子", "收藏", null, null ], [ 254, "Text_Tab2_513", "Shoes", "手套", "收藏", null, null ], [ 255, "Text_Tab2_514", "Pet", "宠物", "收藏", null, null ], [ 256, "Text_Tab2_515", "Accessory", "饰品", "收藏", null, null ], [ 257, "Text_Tab3_1001", "Pupil Style", "瞳孔样式", null, null, null ], [ 258, "Text_Tab3_1002", "Lens", "瞳孔贴花", null, null, null ], [ 259, "Text_Tab3_1003", "Upper Highlight", "上高光", null, null, null ], [ 260, "Text_Tab3_1004", "Lower Highlight", "下高光", null, null, null ], [ 261, "Text_Tab3_1005", "Eyelashes", "睫毛", null, null, null ], [ 262, "Text_Tab3_1006", "Eyeshadow", "眼影", null, null, null ], [ 263, "Text_Tab3_1007", "Blush", "腮红", null, null, null ], [ 264, "Text_Tab3_1008", "Lip Makeup", "口红", null, null, null ], [ 265, "Text_Tab3_1009", "Face Tattoo", "面部彩绘", null, null, null ], [ 266, "Text_Tab3_1010", "Full Hair", "整体发型", null, null, null ], [ 267, "Text_Tab3_1011", "Front Hair", "前发", null, null, null ], [ 268, "Text_Tab3_1012", "Back Hair", "后发", null, null, null ], [ 269, "Text_Tab3_1013", "Left Hand", "左手", null, null, null ], [ 270, "Text_Tab3_1014", "Right Hand", "右手", null, null, null ], [ 271, "Text_Tab3_1015", "Back", "背饰", null, null, null ], [ 272, "Text_Tab3_1016", "Head", "头饰", null, null, null ], [ 273, "Text_Tab3_1017", "Face", "面饰", null, null, null ], [ 274, "Text_Tab3_1018", "Hip", "臀部", null, null, null ], [ 275, "Text_Tab3_1019", "Shoulder", "肩部", null, null, null ], [ 276, "Text_Tab3_1020", "Effects", "特效", null, null, null ], [ 277, "Text_Tab3_2001", "Pupil Style", "瞳孔样式", "收藏", null, null ], [ 278, "Text_Tab3_2002", "Lens", "瞳孔贴花", "收藏", null, null ], [ 279, "Text_Tab3_2003", "Upper Highlight", "上高光", "收藏", null, null ], [ 280, "Text_Tab3_2004", "Lower Highlight", "下高光", "收藏", null, null ], [ 281, "Text_Tab3_2005", "Eyelashes", "睫毛", "收藏", null, null ], [ 282, "Text_Tab3_2006", "Eyeshadow", "眼影", "收藏", null, null ], [ 283, "Text_Tab3_2007", "Blush", "腮红", "收藏", null, null ], [ 284, "Text_Tab3_2008", "Lip Makeup", "口红", "收藏", null, null ], [ 285, "Text_Tab3_2009", "Face Tattoo", "面部彩绘", "收藏", null, null ], [ 286, "Text_Tab3_2010", "Full Hair", "整体发型", "收藏", null, null ], [ 287, "Text_Tab3_2011", "Front Hair", "前发", "收藏", null, null ], [ 288, "Text_Tab3_2012", "Back Hair", "后发", "收藏", null, null ], [ 289, "Text_Tab3_2013", "Left Hand", "左手", "收藏", null, null ], [ 290, "Text_Tab3_2014", "Right Hand", "右手", "收藏", null, null ], [ 291, "Text_Tab3_2015", "Back", "背饰", "收藏", null, null ], [ 292, "Text_Tab3_2016", "Ear", "耳饰", "收藏", null, null ], [ 293, "Text_Tab3_2017", "Face", "面饰", "收藏", null, null ], [ 294, "Text_Tab3_2018", "Hip", "臀部", "收藏", null, null ], [ 295, "Text_Tab3_2019", "Shoulder", "肩部", "收藏", null, null ], [ 296, "Text_Tab3_2020", "Effects", "特效", "收藏", null, null ], [ 297, "Text_OpenClothTextBlock", "Shop", "换装商店", null, null, null ], [ 298, "Text_MallItem_Free", "Free", "免费", null, null, null ], [ 299, "Text_ThisFeatureIsNotEnabled", "This feature is not enabled", "此功能未开启", null, null, null ], [ 300, "Text_BodyTypeDescribe", "{0} times", "{0}倍", null, null, null ], [ 301, "Text_Expression_Default", "Default", "默认表情", null, null, null ], [ 302, "Text_Expression_Smile", "Smile", "微笑", null, null, null ], [ 303, "Text_Expression_HaveFun", "Have Fun", "开心", null, null, null ], [ 304, "Text_Expression_Sad", "Sad", "伤心", null, null, null ], [ 305, "Text_Expression_GetAngry", "Get Angry", "生气", null, null, null ], [ 306, "Text_Expression_Embarrassment", "Embarrassment", "尴尬", null, null, null ], [ 307, "Text_Expression_Laugh", "Laugh", "笑", null, null, null ], [ 308, "Text_Expression_BeNaughty", "Be Naughty", "调皮", null, null, null ], [ 309, "Text_Expression_Cute", "Cute", "可爱", null, null, null ], [ 310, "Text_Expression_Doubt", "Doubt", "疑惑", null, null, null ], [ 311, "Text_Tab3_1021", "Trailing", "拖尾", null, null, null ], [ 312, "Text_Tab3_2021", "Trailing", "拖尾", "收藏", null, null ], [ 313, "Text_ColorPick", "Color Pick", "调色板", null, null, null ], [ 314, "Text_ColorPart", "Part {0}", "部位 {0}", null, null, null ], [ 315, "Text_NotSupportToning", "This {0} Does Not Support Toning", "这个{0}不支持调色", null, null, null ], [ 316, "Text_PupilColor", "Pupil Color", "瞳孔颜色", null, null, null ], [ 317, "Text_LeftPupilColor", "Left Pupil Color", "左瞳孔颜色", null, null, null ], [ 318, "Text_RightPupilColor", "Right Pupil Color", "右瞳孔颜色", null, null, null ], [ 319, "Text_DecalColor", "Decal Color", "贴花颜色", null, null, null ], [ 320, "Text_UpperHighlightColor", "Upper Highlight Color", "上高光颜色", null, null, null ], [ 321, "Text_LowerHighlightColor", "Lower Highlight Color", "下高光颜色", null, null, null ], [ 322, "Text_EyelashColor", "Eyelash Color", "睫毛颜色", null, null, null ], [ 323, "Text_EyeshaowColor", "Eyeshaow Color", "眼影颜色", null, null, null ], [ 324, "Text_BlushColor", "Blush Color", "腮红颜色", null, null, null ], [ 325, "Text_LipstickColor", "Lipstick Color", "口红颜色", null, null, null ], [ 326, "Text_Monochrome", "Monochrome", "单色", null, null, null ], [ 327, "Text_TopColor", "Top Color", "发顶色", null, null, null ], [ 328, "Text_TailColor", "Tail Color", "发尾色", null, null, null ], [ 329, "Text_FreeSave", "Free Save", "免费保存", null, null, null ], [ 330, "Text_ResetImage", "Reset Image", "重置平台形象", null, null, null ], [ 331, "Text_ResetImageFaild", "Failed to reset platform image", "重置平台形象失败", null, null, null ], [ 332, "Text_SaveColor", "Save {0} Color", "保存{0}颜色", null, null, null ], [ 333, "Text_SaveTips", "Save Tips", "保存提示", null, null, null ], [ 334, "Text_Save", "Save", "保存", null, null, null ], [ 335, "Text_NoSave", "No Save", "不保存", null, null, null ], [ 336, "Text_WhetherSaveImage", "Whether Save Image", "是否保存当前角色形象", null, null, null ], [ 337, "Text_CloseTips", "Close Tips", "关闭提示", null, null, null ], [ 338, "Text_SaveSuccessfully", "Save Successfully", "保存成功", null, null, null ], [ 339, "Text_ResetSuccessfully", "Reset Successfully", "重置成功", null, null, null ], [ 340, "Text_SwitchSuccessfully", "Switch Successfully", "切换成功", null, null, null ], [ 341, "Text_WhetherToKeepTheCurrentColor", "Whether to keep the current color", "是否保留当前颜色", null, null, null ], [ 342, "Text_Retain", "Retain", "保留", null, null, null ], [ 343, "Text_NoRetain", "No Retain", "不保留", null, null, null ], [ 344, "Text_Tab3_1022", "Daily Styling", "日常造型1", null, null, null ], [ 345, "Text_Tab3_1023", "Muppet Styling", "布偶造型", null, null, null ], [ 346, "Text_Tab3_1024", "Hero Styling", "英雄造型", null, null, null ], [ 347, "Text_Tab3_1025", "Fantasy Modeling", "幻想造型", null, null, null ], [ 348, "Text_Tab3_1026", "Holiday Styling", "节日造型", null, null, null ], [ 349, "Text_Tab3_1027", "Science Fiction Styling", "科幻造型", null, null, null ], [ 350, "Text_Tab3_1028", "Ancient Molding", "古代造型", null, null, null ], [ 351, "Text_Tab3_1029", "Long Piece", "长单件", null, null, null ], [ 352, "Text_Tab3_1030", "Jacket", "短外套", null, null, null ], [ 353, "Text_Tab3_1031", "Short Piece", "短单件", null, null, null ], [ 354, "Text_Tab3_1032", "Outfit", "套装", null, null, null ], [ 355, "Text_Tab3_1033", "Long Coat", "长外套", null, null, null ], [ 356, "Text_Tab3_1034", "Kilt", "短裙", null, null, null ], [ 357, "Text_Tab3_1035", "Trousers", "长裤", null, null, null ], [ 358, "Text_Tab3_1036", "Shorts", "短裤", null, null, null ], [ 359, "Text_Tab3_1037", "Long Dress", "长裙", null, null, null ], [ 360, "Text_Tab3_1038", "Pantyhose", "裤袜", null, null, null ], [ 361, "Text_Tab3_1039", "Gloves", "手套", null, null, null ], [ 362, "Text_Tab3_1040", "Glove Accessory", "手套饰品", null, null, null ], [ 363, "Text_Tab3_1041", "Everyday Shoes", "日常鞋", null, null, null ], [ 364, "Text_Tab3_1042", "Boots", "靴子", null, null, null ], [ 365, "Text_Tab3_1043", "Toe Brace", "足套", null, null, null ], [ 366, "Text_Tab3_1044", "Nudity", "裸饰", null, null, null ], [ 367, "Text_Tab3_1045", "High Heeled Shoes", "高跟鞋", null, null, null ], [ 368, "Text_Tab3_1046", "Sneakers", "运动鞋", null, null, null ], [ 369, "Text_Tab3_1047", "Daily Styling", "日常造型2", null, null, null ] ];

class LanguageConfig extends ConfigBase {
    constructor() {
        super(EXCELDATA$A);
    }
    get CannotResetPositionWithinSeconds() {
        return this.getElement(1);
    }
    get DoYouWantToResetThePosition() {
        return this.getElement(2);
    }
    get Yes() {
        return this.getElement(3);
    }
    get No() {
        return this.getElement(4);
    }
    get ResetPosition() {
        return this.getElement(5);
    }
    get DoYouWantToUseItImmediately() {
        return this.getElement(6);
    }
    get Buy() {
        return this.getElement(7);
    }
    get ConfirmExpenses() {
        return this.getElement(8);
    }
    get Diamonds() {
        return this.getElement(9);
    }
    get GoldCoins() {
        return this.getElement(10);
    }
    get Cancel() {
        return this.getElement(11);
    }
    get Tips() {
        return this.getElement(12);
    }
    get AcquisitionFailedPleaseTryAgain() {
        return this.getElement(13);
    }
    get FreeCollectionOfCoins() {
        return this.getElement(14);
    }
    get FreeToReceive() {
        return this.getElement(15);
    }
    get DoubleTheRewardMaximumHealthIncreasedTo() {
        return this.getElement(16);
    }
    get FreeIncrease() {
        return this.getElement(17);
    }
    get FreeUseOfOneRound() {
        return this.getElement(18);
    }
    get FreeToUse() {
        return this.getElement(19);
    }
    get FreeCollectionOfDiamonds() {
        return this.getElement(20);
    }
    get Get() {
        return this.getElement(21);
    }
    get Spend() {
        return this.getElement(22);
    }
    get Lurking() {
        return this.getElement(23);
    }
    get Defenders() {
        return this.getElement(24);
    }
    get Life() {
        return this.getElement(25);
    }
    get InvincibleTime() {
        return this.getElement(26);
    }
    get ResurrectionCountdown() {
        return this.getElement(27);
    }
    get InvincibleWithinSecondsAfterResurrection() {
        return this.getElement(28);
    }
    get SetUp() {
        return this.getElement(29);
    }
    get FiringSensitivity() {
        return this.getElement(30);
    }
    get ControlSensitivity() {
        return this.getElement(31);
    }
    get BackgroundMusicSize() {
        return this.getElement(32);
    }
    get SfxVolume() {
        return this.getElement(33);
    }
    get Defeated() {
        return this.getElement(34);
    }
    get YouHaveBeenDefeatedBy() {
        return this.getElement(35);
    }
    get DefeatToCompleteRevenge() {
        return this.getElement(36);
    }
    get RdPlace() {
        return this.getElement(37);
    }
    get DefeatedPeople_2() {
        return this.getElement(38);
    }
    get DefeatedPeople_3() {
        return this.getElement(39);
    }
    get DefeatedPeople_4() {
        return this.getElement(40);
    }
    get DefeatedPeople_5() {
        return this.getElement(41);
    }
    get DefeatedPeople_6() {
        return this.getElement(42);
    }
    get DefeatedPeople_7() {
        return this.getElement(43);
    }
    get Ranking() {
        return this.getElement(44);
    }
    get Nickname() {
        return this.getElement(45);
    }
    get Beat() {
        return this.getElement(46);
    }
    get Death() {
        return this.getElement(47);
    }
    get TopInTheEntireServer() {
        return this.getElement(48);
    }
    get TotalDefeat() {
        return this.getElement(49);
    }
    get TotalDeaths() {
        return this.getElement(50);
    }
    get RankingOfAchievements() {
        return this.getElement(51);
    }
    get FullServerRankingList() {
        return this.getElement(52);
    }
    get Weapon() {
        return this.getElement(53);
    }
    get Skin() {
        return this.getElement(54);
    }
    get Trailing() {
        return this.getElement(55);
    }
    get Use() {
        return this.getElement(56);
    }
    get Obtained() {
        return this.getElement(57);
    }
    get NotObtained() {
        return this.getElement(58);
    }
    get Hurt() {
        return this.getElement(59);
    }
    get Bullet() {
        return this.getElement(60);
    }
    get TimeLimited() {
        return this.getElement(61);
    }
    get Permanent() {
        return this.getElement(62);
    }
    get Error() {
        return this.getElement(63);
    }
    get TransformationStatusCannotOpenTheStore() {
        return this.getElement(64);
    }
    get PurchaseSuccessful() {
        return this.getElement(65);
    }
    get InsufficientGoldCoins() {
        return this.getElement(66);
    }
    get DiamondShortage() {
        return this.getElement(67);
    }
    get WearingIt() {
        return this.getElement(68);
    }
    get SkinSuccessfullyWorn() {
        return this.getElement(69);
    }
    get TailSuccessfullyWorn() {
        return this.getElement(70);
    }
    get Previewing() {
        return this.getElement(71);
    }
    get Pistol() {
        return this.getElement(72);
    }
    get BubbleGun() {
        return this.getElement(73);
    }
    get ShotgunSprayGun() {
        return this.getElement(74);
    }
    get Shotgun() {
        return this.getElement(75);
    }
    get SpitfireGun() {
        return this.getElement(76);
    }
    get FireGun() {
        return this.getElement(77);
    }
    get LaserGun() {
        return this.getElement(78);
    }
    get WaterGun() {
        return this.getElement(79);
    }
    get RocketLauncher() {
        return this.getElement(80);
    }
    get JustinGatlin() {
        return this.getElement(81);
    }
    get Tunas() {
        return this.getElement(82);
    }
    get BowAndArrow() {
        return this.getElement(83);
    }
    get ParticleTailing() {
        return this.getElement(84);
    }
    get SmokeTrail() {
        return this.getElement(85);
    }
    get BeamTrailing() {
        return this.getElement(86);
    }
    get Tail() {
        return this.getElement(87);
    }
    get WaterTailing() {
        return this.getElement(88);
    }
    get FlameTrailing() {
        return this.getElement(89);
    }
    get ThunderTail() {
        return this.getElement(90);
    }
    get RainbowTail() {
        return this.getElement(91);
    }
    get TirePrintTailing() {
        return this.getElement(92);
    }
    get ScrewTail() {
        return this.getElement(93);
    }
    get FootballTail() {
        return this.getElement(94);
    }
    get CandyTail() {
        return this.getElement(95);
    }
    get TrophyTail() {
        return this.getElement(96);
    }
    get CrownTail() {
        return this.getElement(97);
    }
    get LoveTail() {
        return this.getElement(98);
    }
    get SkullTail() {
        return this.getElement(99);
    }
    get BananaTail() {
        return this.getElement(100);
    }
    get SnowflakeTail() {
        return this.getElement(102);
    }
    get Tail2023() {
        return this.getElement(103);
    }
    get FirecrackerTail() {
        return this.getElement(104);
    }
    get FireworksTail() {
        return this.getElement(105);
    }
    get GiftTail() {
        return this.getElement(106);
    }
    get TailOfBanknotes() {
        return this.getElement(107);
    }
    get BubbleTail() {
        return this.getElement(108);
    }
    get RibbonTrailing() {
        return this.getElement(109);
    }
    get TailOfFeces() {
        return this.getElement(110);
    }
    get MapleLeafTail() {
        return this.getElement(111);
    }
    get SixPointedStarTail() {
        return this.getElement(112);
    }
    get ButterflyTail() {
        return this.getElement(113);
    }
    get IceCreamTrail() {
        return this.getElement(114);
    }
    get BirdTail() {
        return this.getElement(115);
    }
    get BatTail() {
        return this.getElement(116);
    }
    get XiangyunTail() {
        return this.getElement(117);
    }
    get Print() {
        return this.getElement(118);
    }
    get HoodedMan() {
        return this.getElement(119);
    }
    get DoublePonytailGirl() {
        return this.getElement(120);
    }
    get MaleWarrior() {
        return this.getElement(121);
    }
    get MechGirl() {
        return this.getElement(122);
    }
    get MaleKnight() {
        return this.getElement(123);
    }
    get NanoMechWomen() {
        return this.getElement(124);
    }
    get CyberYouth() {
        return this.getElement(125);
    }
    get CyberGirls() {
        return this.getElement(126);
    }
    get DefinitelyPotBoy() {
        return this.getElement(127);
    }
    get SeekingGodYoungMan() {
        return this.getElement(128);
    }
    get DefinitelyPotGirl() {
        return this.getElement(129);
    }
    get SeekingGodGirl() {
        return this.getElement(130);
    }
    get GemstoneArmoredMan() {
        return this.getElement(131);
    }
    get ArmoredMaleWarrior() {
        return this.getElement(132);
    }
    get BlackMaleNanomecha() {
        return this.getElement(133);
    }
    get WhiteMaleNanomecha() {
        return this.getElement(134);
    }
    get SilverKnights() {
        return this.getElement(135);
    }
    get EagleWarrior() {
        return this.getElement(136);
    }
    get Warrior() {
        return this.getElement(137);
    }
    get VenomMonster() {
        return this.getElement(138);
    }
    get AntWarrior() {
        return this.getElement(139);
    }
    get TheStrongestCaptain() {
        return this.getElement(140);
    }
    get SuperHandsomeHero() {
        return this.getElement(141);
    }
    get StrangeWarrior() {
        return this.getElement(142);
    }
    get LightningMonster() {
        return this.getElement(143);
    }
    get EvilSpiritSkull() {
        return this.getElement(144);
    }
    get IronMan() {
        return this.getElement(145);
    }
    get WindbreakerGirl() {
        return this.getElement(146);
    }
    get HanfuGirl() {
        return this.getElement(147);
    }
    get FashionableGirl() {
        return this.getElement(148);
    }
    get TrendyGirl() {
        return this.getElement(149);
    }
    get AncientScholars() {
        return this.getElement(150);
    }
    get OrangeLaserGun() {
        return this.getElement(151);
    }
    get Text_ClaimRewards() {
        return this.getElement(152);
    }
    get Text_HangInTheAir() {
        return this.getElement(153);
    }
    get Text_DailyTasks() {
        return this.getElement(154);
    }
    get Text_AllTasksHaveBeenCompletedWaitingForRefresh() {
        return this.getElement(155);
    }
    get Text_RemainingHours() {
        return this.getElement(156);
    }
    get Text_RemainingDays() {
        return this.getElement(157);
    }
    get Text_WeeklyTasks() {
        return this.getElement(158);
    }
    get Dailylogintothegame() {
        return this.getElement(159);
    }
    get Dailyonlinedurationminutes() {
        return this.getElement(160);
    }
    get Defeatplayersdaily() {
        return this.getElement(161);
    }
    get Logindaysperweek() {
        return this.getElement(162);
    }
    get Join() {
        return this.getElement(163);
    }
    get WeaponEquipmentSuccessful() {
        return this.getElement(164);
    }
    get SwitchingFailedYouAreAlreadyIn() {
        return this.getElement(165);
    }
    get CannotSwitchTeamsFrequentlyTryAgainInSeconds() {
        return this.getElement(166);
    }
    get SuccessfullySwitchedTeams() {
        return this.getElement(167);
    }
    get SwitchingFailedThisTeamIsFull() {
        return this.getElement(168);
    }
    get SwitchingFailedUnequalNumberOfPeople() {
        return this.getElement(169);
    }
    get AlreadyOnThisTeam() {
        return this.getElement(170);
    }
    get bazooka() {
        return this.getElement(171);
    }
    get Text_TheItemBarIsFull() {
        return this.getElement(172);
    }
    get Text_ThisItemIsInUse() {
        return this.getElement(173);
    }
    get Text_Tips1() {
        return this.getElement(174);
    }
    get Text_SetUp1() {
        return this.getElement(175);
    }
    get Text_PictureQuality() {
        return this.getElement(176);
    }
    get Text_SoundEffects() {
        return this.getElement(177);
    }
    get Text_BackgroundMusic() {
        return this.getElement(178);
    }
    get Text_ViewAngleScaling() {
        return this.getElement(179);
    }
    get Text_DisplayNicknames() {
        return this.getElement(180);
    }
    get Text_ResetLocation() {
        return this.getElement(181);
    }
    get Text_RestoringSettings() {
        return this.getElement(182);
    }
    get Text_On() {
        return this.getElement(183);
    }
    get Text_Off() {
        return this.getElement(184);
    }
    get Text_ObtainedTips() {
        return this.getElement(185);
    }
    get Text_Advertising() {
        return this.getElement(186);
    }
    get Text_ADGetTips() {
        return this.getElement(187);
    }
    get Text_Dont() {
        return this.getElement(188);
    }
    get Text_Free() {
        return this.getElement(189);
    }
    get Text_Fail() {
        return this.getElement(190);
    }
    get Text_NoOnTheList() {
        return this.getElement(191);
    }
    get Text_Ranking() {
        return this.getElement(192);
    }
    get Text_Nickname() {
        return this.getElement(193);
    }
    get Text_Score() {
        return this.getElement(194);
    }
    get Text_Duration() {
        return this.getElement(195);
    }
    get Text_TopInTermsOfDuration() {
        return this.getElement(196);
    }
    get Text_StartGame() {
        return this.getElement(197);
    }
    get Text_WelcomeTo() {
        return this.getElement(198);
    }
    get Text_UpNext() {
        return this.getElement(199);
    }
    get Text_GuideEnd() {
        return this.getElement(200);
    }
    get Text_Close() {
        return this.getElement(201);
    }
    get Text_MyCharacterId() {
        return this.getElement(202);
    }
    get Text_PleaseEnter() {
        return this.getElement(203);
    }
    get Text_Cancel() {
        return this.getElement(204);
    }
    get Text_FreeTryOn() {
        return this.getElement(205);
    }
    get Text_SaveImagesForFree() {
        return this.getElement(206);
    }
    get Text_TryOnYourFriendAvatarForFree() {
        return this.getElement(207);
    }
    get Text_CopySuccessfully() {
        return this.getElement(208);
    }
    get Text_InvalidID() {
        return this.getElement(209);
    }
    get Text_Loading() {
        return this.getElement(210);
    }
    get Text_TryItOnSuccessfully() {
        return this.getElement(211);
    }
    get Text_CopyTheCharacterIDShareFriendsTryOn() {
        return this.getElement(212);
    }
    get Text_TryItOnForFree() {
        return this.getElement(213);
    }
    get Text_GuideTips() {
        return this.getElement(214);
    }
    get Text_HUDTips1() {
        return this.getElement(215);
    }
    get Text_HUDTips2() {
        return this.getElement(216);
    }
    get Text_HUDTips3() {
        return this.getElement(217);
    }
    get Text_HUDTips4() {
        return this.getElement(218);
    }
    get Text_HUDTips5() {
        return this.getElement(219);
    }
    get Text_HUDTips6() {
        return this.getElement(220);
    }
    get Text_HUDTips7() {
        return this.getElement(221);
    }
    get Text_HUDTips8() {
        return this.getElement(222);
    }
    get Text_Tab1_1() {
        return this.getElement(223);
    }
    get Text_Tab1_2() {
        return this.getElement(224);
    }
    get Text_Tab1_3() {
        return this.getElement(225);
    }
    get Text_Tab1_4() {
        return this.getElement(226);
    }
    get Text_Tab2_101() {
        return this.getElement(227);
    }
    get Text_Tab2_102() {
        return this.getElement(228);
    }
    get Text_Tab2_103() {
        return this.getElement(229);
    }
    get Text_Tab2_104() {
        return this.getElement(230);
    }
    get Text_Tab2_105() {
        return this.getElement(231);
    }
    get Text_Tab2_106() {
        return this.getElement(232);
    }
    get Text_Tab2_107() {
        return this.getElement(233);
    }
    get Text_Tab2_108() {
        return this.getElement(234);
    }
    get Text_Tab2_109() {
        return this.getElement(235);
    }
    get Text_Tab2_110() {
        return this.getElement(236);
    }
    get Text_Tab2_111() {
        return this.getElement(237);
    }
    get Text_Tab2_112() {
        return this.getElement(238);
    }
    get Text_Tab2_113() {
        return this.getElement(239);
    }
    get Text_Tab2_114() {
        return this.getElement(240);
    }
    get Text_Tab2_115() {
        return this.getElement(241);
    }
    get Text_Tab2_501() {
        return this.getElement(242);
    }
    get Text_Tab2_502() {
        return this.getElement(243);
    }
    get Text_Tab2_503() {
        return this.getElement(244);
    }
    get Text_Tab2_504() {
        return this.getElement(245);
    }
    get Text_Tab2_505() {
        return this.getElement(246);
    }
    get Text_Tab2_506() {
        return this.getElement(247);
    }
    get Text_Tab2_507() {
        return this.getElement(248);
    }
    get Text_Tab2_508() {
        return this.getElement(249);
    }
    get Text_Tab2_509() {
        return this.getElement(250);
    }
    get Text_Tab2_510() {
        return this.getElement(251);
    }
    get Text_Tab2_511() {
        return this.getElement(252);
    }
    get Text_Tab2_512() {
        return this.getElement(253);
    }
    get Text_Tab2_513() {
        return this.getElement(254);
    }
    get Text_Tab2_514() {
        return this.getElement(255);
    }
    get Text_Tab2_515() {
        return this.getElement(256);
    }
    get Text_Tab3_1001() {
        return this.getElement(257);
    }
    get Text_Tab3_1002() {
        return this.getElement(258);
    }
    get Text_Tab3_1003() {
        return this.getElement(259);
    }
    get Text_Tab3_1004() {
        return this.getElement(260);
    }
    get Text_Tab3_1005() {
        return this.getElement(261);
    }
    get Text_Tab3_1006() {
        return this.getElement(262);
    }
    get Text_Tab3_1007() {
        return this.getElement(263);
    }
    get Text_Tab3_1008() {
        return this.getElement(264);
    }
    get Text_Tab3_1009() {
        return this.getElement(265);
    }
    get Text_Tab3_1010() {
        return this.getElement(266);
    }
    get Text_Tab3_1011() {
        return this.getElement(267);
    }
    get Text_Tab3_1012() {
        return this.getElement(268);
    }
    get Text_Tab3_1013() {
        return this.getElement(269);
    }
    get Text_Tab3_1014() {
        return this.getElement(270);
    }
    get Text_Tab3_1015() {
        return this.getElement(271);
    }
    get Text_Tab3_1016() {
        return this.getElement(272);
    }
    get Text_Tab3_1017() {
        return this.getElement(273);
    }
    get Text_Tab3_1018() {
        return this.getElement(274);
    }
    get Text_Tab3_1019() {
        return this.getElement(275);
    }
    get Text_Tab3_1020() {
        return this.getElement(276);
    }
    get Text_Tab3_2001() {
        return this.getElement(277);
    }
    get Text_Tab3_2002() {
        return this.getElement(278);
    }
    get Text_Tab3_2003() {
        return this.getElement(279);
    }
    get Text_Tab3_2004() {
        return this.getElement(280);
    }
    get Text_Tab3_2005() {
        return this.getElement(281);
    }
    get Text_Tab3_2006() {
        return this.getElement(282);
    }
    get Text_Tab3_2007() {
        return this.getElement(283);
    }
    get Text_Tab3_2008() {
        return this.getElement(284);
    }
    get Text_Tab3_2009() {
        return this.getElement(285);
    }
    get Text_Tab3_2010() {
        return this.getElement(286);
    }
    get Text_Tab3_2011() {
        return this.getElement(287);
    }
    get Text_Tab3_2012() {
        return this.getElement(288);
    }
    get Text_Tab3_2013() {
        return this.getElement(289);
    }
    get Text_Tab3_2014() {
        return this.getElement(290);
    }
    get Text_Tab3_2015() {
        return this.getElement(291);
    }
    get Text_Tab3_2016() {
        return this.getElement(292);
    }
    get Text_Tab3_2017() {
        return this.getElement(293);
    }
    get Text_Tab3_2018() {
        return this.getElement(294);
    }
    get Text_Tab3_2019() {
        return this.getElement(295);
    }
    get Text_Tab3_2020() {
        return this.getElement(296);
    }
    get Text_OpenClothTextBlock() {
        return this.getElement(297);
    }
    get Text_MallItem_Free() {
        return this.getElement(298);
    }
    get Text_ThisFeatureIsNotEnabled() {
        return this.getElement(299);
    }
    get Text_BodyTypeDescribe() {
        return this.getElement(300);
    }
    get Text_Expression_Default() {
        return this.getElement(301);
    }
    get Text_Expression_Smile() {
        return this.getElement(302);
    }
    get Text_Expression_HaveFun() {
        return this.getElement(303);
    }
    get Text_Expression_Sad() {
        return this.getElement(304);
    }
    get Text_Expression_GetAngry() {
        return this.getElement(305);
    }
    get Text_Expression_Embarrassment() {
        return this.getElement(306);
    }
    get Text_Expression_Laugh() {
        return this.getElement(307);
    }
    get Text_Expression_BeNaughty() {
        return this.getElement(308);
    }
    get Text_Expression_Cute() {
        return this.getElement(309);
    }
    get Text_Expression_Doubt() {
        return this.getElement(310);
    }
    get Text_Tab3_1021() {
        return this.getElement(311);
    }
    get Text_Tab3_2021() {
        return this.getElement(312);
    }
    get Text_ColorPick() {
        return this.getElement(313);
    }
    get Text_ColorPart() {
        return this.getElement(314);
    }
    get Text_NotSupportToning() {
        return this.getElement(315);
    }
    get Text_PupilColor() {
        return this.getElement(316);
    }
    get Text_LeftPupilColor() {
        return this.getElement(317);
    }
    get Text_RightPupilColor() {
        return this.getElement(318);
    }
    get Text_DecalColor() {
        return this.getElement(319);
    }
    get Text_UpperHighlightColor() {
        return this.getElement(320);
    }
    get Text_LowerHighlightColor() {
        return this.getElement(321);
    }
    get Text_EyelashColor() {
        return this.getElement(322);
    }
    get Text_EyeshaowColor() {
        return this.getElement(323);
    }
    get Text_BlushColor() {
        return this.getElement(324);
    }
    get Text_LipstickColor() {
        return this.getElement(325);
    }
    get Text_Monochrome() {
        return this.getElement(326);
    }
    get Text_TopColor() {
        return this.getElement(327);
    }
    get Text_TailColor() {
        return this.getElement(328);
    }
    get Text_FreeSave() {
        return this.getElement(329);
    }
    get Text_ResetImage() {
        return this.getElement(330);
    }
    get Text_ResetImageFaild() {
        return this.getElement(331);
    }
    get Text_SaveColor() {
        return this.getElement(332);
    }
    get Text_SaveTips() {
        return this.getElement(333);
    }
    get Text_Save() {
        return this.getElement(334);
    }
    get Text_NoSave() {
        return this.getElement(335);
    }
    get Text_WhetherSaveImage() {
        return this.getElement(336);
    }
    get Text_CloseTips() {
        return this.getElement(337);
    }
    get Text_SaveSuccessfully() {
        return this.getElement(338);
    }
    get Text_ResetSuccessfully() {
        return this.getElement(339);
    }
    get Text_SwitchSuccessfully() {
        return this.getElement(340);
    }
    get Text_WhetherToKeepTheCurrentColor() {
        return this.getElement(341);
    }
    get Text_Retain() {
        return this.getElement(342);
    }
    get Text_NoRetain() {
        return this.getElement(343);
    }
    get Text_Tab3_1022() {
        return this.getElement(344);
    }
    get Text_Tab3_1023() {
        return this.getElement(345);
    }
    get Text_Tab3_1024() {
        return this.getElement(346);
    }
    get Text_Tab3_1025() {
        return this.getElement(347);
    }
    get Text_Tab3_1026() {
        return this.getElement(348);
    }
    get Text_Tab3_1027() {
        return this.getElement(349);
    }
    get Text_Tab3_1028() {
        return this.getElement(350);
    }
    get Text_Tab3_1029() {
        return this.getElement(351);
    }
    get Text_Tab3_1030() {
        return this.getElement(352);
    }
    get Text_Tab3_1031() {
        return this.getElement(353);
    }
    get Text_Tab3_1032() {
        return this.getElement(354);
    }
    get Text_Tab3_1033() {
        return this.getElement(355);
    }
    get Text_Tab3_1034() {
        return this.getElement(356);
    }
    get Text_Tab3_1035() {
        return this.getElement(357);
    }
    get Text_Tab3_1036() {
        return this.getElement(358);
    }
    get Text_Tab3_1037() {
        return this.getElement(359);
    }
    get Text_Tab3_1038() {
        return this.getElement(360);
    }
    get Text_Tab3_1039() {
        return this.getElement(361);
    }
    get Text_Tab3_1040() {
        return this.getElement(362);
    }
    get Text_Tab3_1041() {
        return this.getElement(363);
    }
    get Text_Tab3_1042() {
        return this.getElement(364);
    }
    get Text_Tab3_1043() {
        return this.getElement(365);
    }
    get Text_Tab3_1044() {
        return this.getElement(366);
    }
    get Text_Tab3_1045() {
        return this.getElement(367);
    }
    get Text_Tab3_1046() {
        return this.getElement(368);
    }
    get Text_Tab3_1047() {
        return this.getElement(369);
    }
}

var foreign43 = Object.freeze({
    __proto__: null,
    LanguageConfig: LanguageConfig
});

const EXCELDATA$z = [ [ "ID", "Describe", "AssetId", "Transform", "SexType" ], [ "", "", "", "", "" ], [ 1, "单手刀", "334208", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 2, "星月魔杖", "291285", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 3, "散弹喷枪", "155702", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 4, "紫光剑", "304952", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 5, "弓箭", "304643", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 6, "星月魔杖", "304949", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 7, "法杖", "304953", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ] ];

class LeftHandConfig extends ConfigBase {
    constructor() {
        super(EXCELDATA$z);
    }
}

var foreign44 = Object.freeze({
    __proto__: null,
    LeftHandConfig: LeftHandConfig
});

const EXCELDATA$y = [ [ "ID", "Describe", "AssetId", "SexType" ], [ "", "", "", "" ], [ 1, null, "291374", 0 ], [ 2, null, "291373", 0 ], [ 3, null, "291372", 0 ], [ 4, null, "291371", 0 ], [ 5, null, "291370", 0 ], [ 6, null, "291369", 0 ], [ 7, null, "291368", 0 ], [ 8, null, "291367", 0 ], [ 9, null, "291366", 0 ], [ 10, null, "291365", 0 ], [ 11, null, "291364", 0 ], [ 12, null, "291363", 0 ], [ 13, null, "291362", 0 ], [ 14, null, "291361", 0 ], [ 15, null, "291360", 0 ], [ 16, null, "291359", 0 ], [ 17, null, "291358", 0 ], [ 18, null, "291357", 0 ], [ 19, null, "291356", 0 ], [ 20, null, "291355", 0 ], [ 21, null, "291354", 0 ], [ 22, null, "291353", 0 ], [ 23, null, "291352", 0 ], [ 24, null, "291351", 0 ], [ 25, null, "291350", 0 ], [ 26, null, "291349", 0 ], [ 27, null, "291348", 0 ], [ 28, null, "291347", 0 ], [ 29, null, "291346", 0 ], [ 30, null, "291345", 0 ], [ 31, null, "291344", 0 ], [ 32, null, "291343", 0 ], [ 33, null, "291342", 0 ], [ 34, null, "291341", 0 ], [ 35, null, "291340", 0 ], [ 36, null, "270031", 0 ], [ 37, null, "228490", 0 ], [ 38, null, "193330", 0 ], [ 39, null, "193329", 0 ], [ 40, null, "193328", 0 ], [ 41, null, "185329", 0 ], [ 42, null, "116948", 0 ], [ 43, null, "116947", 0 ], [ 44, null, "116946", 0 ], [ 45, null, "116945", 0 ], [ 46, null, "116944", 0 ], [ 47, null, "116625", 0 ], [ 48, null, "115870", 0 ], [ 49, null, "115869", 0 ], [ 50, null, "112641", 0 ], [ 51, null, "112592", 0 ], [ 52, null, "109582", 0 ], [ 53, null, "108744", 0 ], [ 54, null, "108743", 0 ], [ 55, null, "108742", 0 ], [ 56, null, "100892", 0 ], [ 57, null, "98605", 0 ], [ 58, null, "77768", 0 ], [ 59, null, "77767", 0 ], [ 60, null, "77766", 0 ], [ 61, null, "77590", 0 ], [ 62, null, "77589", 0 ], [ 63, null, "77588", 0 ], [ 64, null, "77587", 0 ], [ 65, null, "77586", 0 ], [ 66, null, "77585", 0 ], [ 67, null, "77584", 0 ], [ 68, null, "77583", 0 ], [ 69, null, "77582", 0 ], [ 70, null, "77581", 0 ], [ 71, null, "77509", 0 ], [ 72, null, "77508", 0 ], [ 73, null, "77507", 0 ], [ 74, null, "77506", 0 ], [ 75, null, "77505", 0 ], [ 76, null, "77504", 0 ], [ 77, null, "77503", 0 ], [ 78, null, "77502", 0 ], [ 79, null, "77477", 0 ], [ 80, null, "77476", 0 ], [ 81, null, "77475", 0 ], [ 82, null, "77474", 0 ], [ 83, null, "77473", 0 ], [ 84, null, "77472", 0 ], [ 85, null, "77471", 0 ], [ 86, null, "77470", 0 ], [ 87, null, "77469", 0 ], [ 88, null, "77446", 0 ], [ 89, null, "77445", 0 ], [ 90, null, "77444", 0 ], [ 91, null, "68986", 0 ], [ 92, null, "68985", 0 ], [ 93, null, "68984", 0 ], [ 94, null, "48672", 0 ], [ 95, null, "48671", 0 ], [ 96, null, "48670", 0 ], [ 97, null, "48669", 0 ], [ 98, null, "48668", 0 ], [ 99, null, "48667", 0 ], [ 100, null, "48666", 0 ], [ 101, null, "48665", 0 ], [ 102, null, "48664", 0 ], [ 103, null, "48663", 0 ], [ 104, null, "32111", 0 ], [ 105, null, "32110", 0 ], [ 106, null, "32109", 0 ], [ 107, null, "32107", 0 ], [ 108, null, "32106", 0 ], [ 109, null, "32104", 0 ], [ 110, null, "32102", 0 ], [ 111, null, "32100", 0 ], [ 112, null, "32099", 0 ], [ 113, null, "32097", 0 ], [ 114, null, "32087", 0 ], [ 115, null, "32086", 0 ], [ 116, null, "32085", 0 ], [ 117, null, "32084", 0 ], [ 118, null, "32083", 0 ], [ 119, null, "22746", 0 ] ];

class LensConfig extends ConfigBase {
    constructor() {
        super(EXCELDATA$y);
    }
}

var foreign45 = Object.freeze({
    __proto__: null,
    LensConfig: LensConfig
});

const EXCELDATA$x = [ [ "ID", "Describe", "AssetId", "SexType" ], [ "", "", "", "" ], [ 1, null, "531767", 0 ], [ 2, null, "531766", 0 ], [ 3, null, "370253", 0 ], [ 4, null, "370242", 0 ], [ 5, null, "370241", 0 ], [ 6, null, "370240", 0 ], [ 7, null, "370238", 0 ], [ 8, null, "367137", 0 ], [ 9, null, "270030", 0 ], [ 10, null, "267300", 0 ], [ 11, null, "267297", 0 ], [ 12, null, "267289", 0 ], [ 13, null, "267288", 0 ], [ 14, null, "267286", 0 ], [ 15, null, "215818", 0 ], [ 16, null, "215817", 0 ], [ 17, null, "215816", 0 ], [ 18, null, "215815", 0 ], [ 19, null, "215814", 0 ], [ 20, null, "215813", 0 ], [ 21, null, "215812", 0 ], [ 22, null, "215811", 0 ], [ 23, null, "215810", 0 ], [ 24, null, "215809", 0 ], [ 25, null, "215808", 0 ], [ 26, null, "215807", 0 ], [ 27, null, "215806", 0 ], [ 28, null, "215805", 0 ], [ 29, null, "215804", 0 ], [ 30, null, "215803", 0 ], [ 31, null, "215802", 0 ], [ 32, null, "215800", 0 ], [ 33, null, "215799", 0 ], [ 34, null, "215798", 0 ], [ 35, null, "215797", 0 ], [ 36, null, "215795", 0 ], [ 37, null, "215794", 0 ], [ 38, null, "215793", 0 ], [ 39, null, "215792", 0 ], [ 40, null, "215791", 0 ], [ 41, null, "215790", 0 ], [ 42, null, "215789", 0 ], [ 43, null, "215788", 0 ], [ 44, null, "215787", 0 ], [ 45, null, "215786", 0 ], [ 46, null, "215785", 0 ], [ 47, null, "215784", 0 ], [ 48, null, "215783", 0 ], [ 49, null, "215782", 0 ], [ 50, null, "215781", 0 ], [ 51, null, "215780", 0 ], [ 52, null, "215779", 0 ], [ 53, null, "215778", 0 ], [ 54, null, "215777", 0 ], [ 55, null, "215776", 0 ], [ 56, null, "215775", 0 ], [ 57, null, "215774", 0 ], [ 58, null, "215773", 0 ], [ 59, null, "215772", 0 ], [ 60, null, "129304", 0 ], [ 61, null, "112587", 0 ], [ 62, null, "77603", 0 ], [ 63, null, "77602", 0 ], [ 64, null, "77526", 0 ], [ 65, null, "77525", 0 ], [ 66, null, "77524", 0 ], [ 67, null, "77523", 0 ], [ 68, null, "77522", 0 ], [ 69, null, "77521", 0 ], [ 70, null, "77520", 0 ], [ 71, null, "75947", 0 ], [ 72, null, "32092", 0 ], [ 73, null, "32091", 0 ], [ 74, null, "32090", 0 ], [ 75, null, "32089", 0 ], [ 76, null, "32088", 0 ], [ 77, null, "32080", 0 ] ];

class LipMakeupConfig extends ConfigBase {
    constructor() {
        super(EXCELDATA$x);
    }
}

var foreign46 = Object.freeze({
    __proto__: null,
    LipMakeupConfig: LipMakeupConfig
});

const EXCELDATA$w = [ [ "ID", "Describe", "AssetId", "SexType" ], [ "", "", "", "" ], [ 1, null, "509866", 2 ], [ 2, null, "502242", 2 ], [ 3, null, "478216", 2 ], [ 4, null, "476300", 2 ], [ 5, null, "390742", 2 ], [ 6, null, "390421", 2 ], [ 7, null, "390411", 2 ], [ 8, null, "390344", 2 ], [ 9, null, "340073", 2 ], [ 10, null, "313728", 2 ], [ 11, null, "300486", 2 ], [ 12, null, "269622", 2 ], [ 13, null, "241444", 2 ], [ 14, null, "240054", 2 ], [ 15, null, "192595", 2 ], [ 16, null, "171302", 2 ], [ 17, null, "142607", 2 ], [ 18, null, "138105", 2 ], [ 19, null, "137427", 2 ], [ 20, null, "131790", 2 ], [ 21, null, "127682", 2 ], [ 22, null, "119278", 2 ], [ 23, null, "117488", 2 ], [ 24, null, "116974", 2 ], [ 25, null, "115846", 2 ], [ 26, null, "112206", 2 ], [ 27, null, "111724", 2 ], [ 28, null, "111723", 2 ], [ 29, null, "111718", 2 ], [ 30, null, "111251", 2 ], [ 31, null, "111248", 2 ], [ 32, null, "111085", 2 ], [ 33, null, "109832", 2 ], [ 34, null, "64729", 2 ], [ 35, null, "64152", 2 ], [ 36, null, "63878", 2 ], [ 37, null, "63314", 2 ], [ 38, null, "63313", 2 ], [ 39, null, "62550", 2 ], [ 40, null, "509876", 1 ], [ 41, null, "507470", 1 ], [ 42, null, "504605", 1 ], [ 43, null, "502160", 1 ], [ 44, null, "494890", 1 ], [ 45, null, "479103", 1 ], [ 46, null, "476241", 1 ], [ 47, null, "458750", 1 ], [ 48, null, "458131", 1 ], [ 49, null, "382997", 1 ], [ 50, null, "356545", 1 ], [ 51, null, "348896", 1 ], [ 52, null, "320845", 1 ], [ 53, null, "313981", 1 ], [ 54, null, "299161", 1 ], [ 55, null, "291008", 1 ], [ 56, null, "264150", 1 ], [ 57, null, "250472", 1 ], [ 58, null, "240886", 1 ], [ 59, null, "224166", 1 ], [ 60, null, "221669", 1 ], [ 61, null, "212897", 1 ], [ 62, null, "200239", 1 ], [ 63, null, "192555", 1 ], [ 64, null, "181106", 1 ], [ 65, null, "171317", 1 ], [ 66, null, "144965", 1 ], [ 67, null, "144877", 1 ], [ 68, null, "140276", 1 ], [ 69, null, "134563", 1 ], [ 70, null, "134560", 1 ], [ 71, null, "131745", 1 ], [ 72, null, "129275", 1 ], [ 73, null, "129250", 1 ], [ 74, null, "129179", 1 ], [ 75, null, "129091", 1 ], [ 76, null, "127714", 1 ], [ 77, null, "127500", 1 ], [ 78, null, "126682", 1 ], [ 79, null, "125690", 1 ], [ 80, null, "122778", 1 ], [ 81, null, "120577", 1 ], [ 82, null, "119891", 1 ], [ 83, null, "119341", 1 ], [ 84, null, "119290", 1 ], [ 85, null, "119257", 1 ], [ 86, null, "118077", 1 ], [ 87, null, "117682", 1 ], [ 88, null, "116983", 1 ], [ 89, null, "115941", 1 ], [ 90, null, "112575", 1 ], [ 91, null, "111761", 1 ], [ 92, null, "111613", 1 ], [ 93, null, "111575", 1 ], [ 94, null, "111487", 1 ], [ 95, null, "111418", 1 ], [ 96, null, "111395", 1 ], [ 97, null, "111352", 1 ], [ 98, null, "111159", 1 ], [ 99, null, "109149", 1 ], [ 100, null, "109063", 1 ], [ 101, null, "98552", 1 ], [ 102, null, "94784", 1 ], [ 103, null, "75659", 1 ], [ 104, null, "74122", 1 ], [ 105, null, "74119", 1 ], [ 106, null, "66699", 1 ], [ 107, null, "66596", 1 ], [ 108, null, "66426", 1 ], [ 109, null, "66425", 1 ], [ 110, null, "66164", 1 ], [ 111, null, "65982", 1 ], [ 112, null, "65782", 1 ], [ 113, null, "65727", 1 ], [ 114, null, "65062", 1 ], [ 115, null, "65010", 1 ], [ 116, null, "64997", 1 ], [ 117, null, "64950", 1 ], [ 118, null, "64805", 1 ], [ 119, null, "64794", 1 ], [ 120, null, "64723", 1 ], [ 121, null, "64554", 1 ], [ 122, null, "63965", 1 ], [ 123, null, "63917", 1 ], [ 124, null, "63682", 1 ], [ 125, null, "63681", 1 ], [ 126, null, "63680", 1 ], [ 127, null, "63594", 1 ], [ 128, null, "60386", 1 ] ];

class LongPantsBottomConfig extends ConfigBase {
    constructor() {
        super(EXCELDATA$w);
    }
}

var foreign47 = Object.freeze({
    __proto__: null,
    LongPantsBottomConfig: LongPantsBottomConfig
});

const EXCELDATA$v = [ [ "ID", "Describe", "AssetId", "SexType" ], [ "", "", "", "" ], [ 1, null, "502238", 2 ], [ 2, null, "497919", 2 ], [ 3, null, "497780", 2 ], [ 4, null, "497738", 2 ], [ 5, null, "495176", 2 ], [ 6, null, "490926", 2 ], [ 7, null, "468350", 2 ], [ 8, null, "457968", 2 ], [ 9, null, "457815", 2 ], [ 10, null, "457732", 2 ], [ 11, null, "455507", 2 ], [ 12, null, "440246", 2 ], [ 13, null, "437604", 2 ], [ 14, null, "437075", 2 ], [ 15, null, "412080", 2 ], [ 16, null, "390746", 2 ], [ 17, null, "390457", 2 ], [ 18, null, "390445", 2 ], [ 19, null, "390420", 2 ], [ 20, null, "390417", 2 ], [ 21, null, "390415", 2 ], [ 22, null, "383397", 2 ], [ 23, null, "383392", 2 ], [ 24, null, "358152", 2 ], [ 25, null, "340074", 2 ], [ 26, null, "325905", 2 ], [ 27, null, "323597", 2 ], [ 28, null, "313726", 2 ], [ 29, null, "299082", 2 ], [ 30, null, "298037", 2 ], [ 31, null, "269653", 2 ], [ 32, null, "269652", 2 ], [ 33, null, "224242", 2 ], [ 34, null, "224241", 2 ], [ 35, null, "224240", 2 ], [ 36, null, "224239", 2 ], [ 37, null, "224238", 2 ], [ 38, null, "192850", 2 ], [ 39, null, "171802", 2 ], [ 40, null, "171092", 2 ], [ 41, null, "171091", 2 ], [ 42, null, "140483", 2 ], [ 43, null, "137385", 2 ], [ 44, null, "125737", 2 ], [ 45, null, "121055", 2 ], [ 46, null, "117491", 2 ], [ 47, null, "111205", 2 ], [ 48, null, "64774", 2 ], [ 49, null, "64140", 2 ], [ 50, null, "63295", 2 ], [ 51, null, "62537", 2 ], [ 52, null, "62536", 2 ], [ 53, null, "60982", 2 ], [ 54, null, "60114", 2 ], [ 55, null, "504623", 1 ], [ 56, null, "502263", 1 ], [ 57, null, "494891", 1 ], [ 58, null, "477531", 1 ], [ 59, null, "192842", 1 ], [ 60, null, "181113", 1 ], [ 61, null, "140280", 1 ], [ 62, null, "127800", 1 ], [ 63, null, "126679", 1 ], [ 64, null, "122919", 1 ], [ 65, null, "122779", 1 ], [ 66, null, "119483", 1 ], [ 67, null, "119338", 1 ], [ 68, null, "112568", 1 ], [ 69, null, "109058", 1 ], [ 70, null, "96576", 1 ], [ 71, null, "66726", 1 ], [ 72, null, "65973", 1 ], [ 73, null, "63710", 1 ] ];

class LongSinglePieceTopConfig extends ConfigBase {
    constructor() {
        super(EXCELDATA$v);
    }
}

var foreign48 = Object.freeze({
    __proto__: null,
    LongSinglePieceTopConfig: LongSinglePieceTopConfig
});

const EXCELDATA$u = [ [ "ID", "Describe", "AssetId", "SexType" ], [ "", "", "", "" ], [ 1, null, "313993", 2 ], [ 2, null, "296021", 2 ], [ 3, null, "128837", 2 ], [ 4, null, "127279", 2 ], [ 5, null, "121054", 2 ], [ 6, null, "64418", 2 ], [ 7, null, "62971", 2 ], [ 8, null, "193166", 1 ], [ 9, null, "127801", 1 ], [ 10, null, "127348", 1 ] ];

class LongSkirtBottomConfig extends ConfigBase {
    constructor() {
        super(EXCELDATA$u);
    }
}

var foreign49 = Object.freeze({
    __proto__: null,
    LongSkirtBottomConfig: LongSkirtBottomConfig
});

const EXCELDATA$t = [ [ "ID", "Describe", "AssetId", "SexType" ], [ "", "", "", "" ], [ 1, null, "32098", 0 ], [ 2, null, "48017", 0 ], [ 3, null, "48018", 0 ], [ 4, null, "48019", 0 ], [ 5, null, "48020", 0 ], [ 6, null, "48021", 0 ], [ 7, null, "48022", 0 ], [ 8, null, "48023", 0 ], [ 9, null, "48024", 0 ], [ 10, null, "48025", 0 ], [ 11, null, "48026", 0 ], [ 12, null, "48027", 0 ], [ 13, null, "48028", 0 ], [ 14, null, "48029", 0 ], [ 15, null, "48035", 0 ] ];

class LowerHighlightConfig extends ConfigBase {
    constructor() {
        super(EXCELDATA$t);
    }
}

var foreign50 = Object.freeze({
    __proto__: null,
    LowerHighlightConfig: LowerHighlightConfig
});

const EXCELDATA$s = [ [ "ID", "AssetId", "OffsetPos", "OffsetRot", "OffsetSca" ], [ "", "", "", "", "" ], [ 1, "C665A5E44F6F23B13103ADB63B6DB8FE", new mw.Vector(0, 0, 0), new mw.Vector(0, 0, -90), new mw.Vector(1, 1, 1) ], [ 2, "7EFE3FDB48F92FD44D7B9C9B4617847B", new mw.Vector(0, 0, 0), new mw.Vector(0, 0, -90), new mw.Vector(1, 1, 1) ], [ 3, "0FCB78664DCD1BB057543DB8A067C122", new mw.Vector(0, 0, 0), new mw.Vector(0, 0, -90), new mw.Vector(1, 1, 1) ], [ 4, "6EEEE3FE4889D23A286CC8B30701C8EE", new mw.Vector(0, 0, 0), new mw.Vector(0, 0, -90), new mw.Vector(1, 1, 1) ], [ 5, "EE3A158548986A567D4741AF925DEA34", new mw.Vector(0, 0, 0), new mw.Vector(0, 0, -90), new mw.Vector(1, 1, 1) ], [ 6, "B40762884A5A907F6FC1018C2E8185C8", new mw.Vector(0, 0, 0), new mw.Vector(0, 0, -90), new mw.Vector(1, 1, 1) ], [ 7, "77796AE5405E9B5B173C9EA0E0131A7D", new mw.Vector(0, 0, 0), new mw.Vector(0, 0, -90), new mw.Vector(1, 1, 1) ], [ 8, "6CF59C074F7CD23EEEA26B8CCFFBC2C2", new mw.Vector(0, 0, 0), new mw.Vector(0, 0, -90), new mw.Vector(1, 1, 1) ], [ 9, "B04EE94540EE3000A660AEA94FDB25D2", new mw.Vector(0, 0, 0), new mw.Vector(0, 0, -90), new mw.Vector(1, 1, 1) ], [ 10, "471E86844D001CE4E84DA8BABEB0DDEA", new mw.Vector(0, 0, 0), new mw.Vector(0, 0, -90), new mw.Vector(1, 1, 1) ], [ 11, "98CDBDE94A8C79B6C5DD8E96AF07FAF7", new mw.Vector(0, 0, 0), new mw.Vector(0, 0, -90), new mw.Vector(1, 1, 1) ], [ 12, "967939744A6C3F5FB4E850A3E7B33E3B", new mw.Vector(0, 0, 0), new mw.Vector(0, 0, -90), new mw.Vector(1, 1, 1) ], [ 13, "4F5E80FC46C55F6F7F5ED0AFCA5D414A", new mw.Vector(0, 0, 0), new mw.Vector(0, 0, -90), new mw.Vector(1, 1, 1) ], [ 14, "6D4B721A4E1B76493972E08A824F8AE7", new mw.Vector(0, 0, 0), new mw.Vector(0, 0, -90), new mw.Vector(1, 1, 1) ], [ 15, "424A2E254F9FD0AABA1BE3B4E7992B60", new mw.Vector(0, 0, 0), new mw.Vector(0, 0, -90), new mw.Vector(1, 1, 1) ], [ 16, "AFC3939B401019F2DEE37784CC1803A5", new mw.Vector(0, 0, 0), new mw.Vector(0, 0, -90), new mw.Vector(1, 1, 1) ], [ 17, "63D0E8894374EF73151267AE2CD7A6E8", new mw.Vector(0, 0, 0), new mw.Vector(0, 0, -90), new mw.Vector(1, 1, 1) ], [ 18, "CA3C71F24708B24B97555584A526400D", new mw.Vector(0, 0, 0), new mw.Vector(0, 0, -90), new mw.Vector(1, 1, 1) ], [ 19, "473BEFA7481C557195E608A058891B5A", new mw.Vector(0, 0, 0), new mw.Vector(0, 0, -90), new mw.Vector(1, 1, 1) ], [ 20, "A62514214509E9BB6FFCD286F0A8CACE", new mw.Vector(0, 0, 0), new mw.Vector(0, 0, -90), new mw.Vector(1, 1, 1) ], [ 21, "7CDBD4B148DCD0CB517E88819C62FD4D", new mw.Vector(0, 0, 0), new mw.Vector(0, 0, -90), new mw.Vector(1, 1, 1) ], [ 22, "429C69244E35328DF8D73CA554BFE01C", new mw.Vector(0, 0, 0), new mw.Vector(0, 0, -90), new mw.Vector(1, 1, 1) ], [ 23, "662BFCAD46B8DDB2C1F15E95DC1D71FB", new mw.Vector(0, 0, 0), new mw.Vector(0, 0, -90), new mw.Vector(1, 1, 1) ], [ 24, "C7AF1DB740B957C45B589589961D4E9A", new mw.Vector(0, 0, 0), new mw.Vector(0, 0, -90), new mw.Vector(1, 1, 1) ], [ 25, "B1C3D37445115C0FD6602D86C18F5A5E", new mw.Vector(0, 0, 0), new mw.Vector(0, 0, -90), new mw.Vector(1, 1, 1) ], [ 26, "4241E3D6474673648F132C9EE621BB2F", new mw.Vector(0, 0, 0), new mw.Vector(0, 0, -90), new mw.Vector(1, 1, 1) ], [ 27, "893BFC51454BD89A3F56B99C7D87C45D", new mw.Vector(0, 0, 0), new mw.Vector(0, 0, -90), new mw.Vector(1, 1, 1) ], [ 28, "C54732A548232206595D87B7BB339EF7", new mw.Vector(0, 0, 0), new mw.Vector(0, 0, -90), new mw.Vector(1, 1, 1) ] ];

class MorphConfig extends ConfigBase {
    constructor() {
        super(EXCELDATA$s);
    }
}

var foreign51 = Object.freeze({
    __proto__: null,
    MorphConfig: MorphConfig
});

const EXCELDATA$r = [ [ "ID", "Describe", "AssetId", "SexType" ], [ "", "", "", "" ], [ 1, "回声战士", "141606", 2 ], [ 2, "福瑞", "141617", 2 ], [ 3, "海绵宝宝装", "142135", 2 ], [ 4, "猫人装", "142137", 2 ], [ 5, "长腿妈妈", "143403", 2 ], [ 6, "猫猫头套服饰", "163304", 2 ], [ 7, "猫咪玩偶服", "164422", 2 ], [ 8, "大头玩偶服", "164427", 2 ], [ 9, "交个朋友鸭", "270464", 2 ], [ 10, "交个朋友鸭", "270465", 2 ], [ 11, "卡通玩偶服饰", "162955", 1 ], [ 12, "玩偶熊服饰", "164354", 1 ], [ 13, "小蓝人服饰", "164356", 1 ], [ 14, "方块玩偶服", "164359", 1 ], [ 15, "兔子玩偶服", "164364", 1 ], [ 16, "玩具鸡服饰", "164366", 1 ], [ 17, "刺猬玩偶服", "164367", 1 ], [ 18, "玩具兔服饰", "164368", 1 ], [ 19, "狗头毛毛虫玩偶服", "164377", 1 ], [ 20, "雪人装", "164417", 1 ], [ 21, "橘龙", "212971", 1 ], [ 22, "跳舞熊", "213498", 1 ], [ 23, "蓝龙", "216268", 1 ], [ 24, "绿龙", "216269", 1 ], [ 25, "黑龙", "216270", 1 ], [ 26, "成都五彩熊", "141156", 1 ], [ 27, "小黑子", "141476", 1 ], [ 28, "鸡人装", "142136", 1 ], [ 29, "兔人装", "142138", 1 ], [ 30, "熊人装", "142147", 1 ], [ 31, "Bunzo bunny", "143383", 1 ], [ 32, "Enderman", "143384", 1 ], [ 33, "Rainbow friends", "143385", 1 ], [ 34, "索尼克", "143387", 1 ], [ 35, "狗头毛毛虫", "143390", 1 ] ];

class MuppetStylingOutfitConfig extends ConfigBase {
    constructor() {
        super(EXCELDATA$r);
    }
}

var foreign52 = Object.freeze({
    __proto__: null,
    MuppetStylingOutfitConfig: MuppetStylingOutfitConfig
});

const EXCELDATA$q = [ [ "id", "Guid", "Annotation" ], [ "", "", "" ], [ 1, "63341", "Chirp" ], [ 2, "118698", "STAY" ], [ 3, "118699", "bad guy" ], [ 4, "117222", "I will live" ], [ 5, "118697", "Let Me Love You" ], [ 6, "118700", "Running up That Hill" ], [ 7, "118701", "Love To Hate Me" ], [ 8, "118702", "TOMBOY" ], [ 9, "118703", "Shut Down" ], [ 10, "118704", "Celestial" ], [ 11, "118712", "As It Was" ], [ 12, "118706", "Good Morning" ], [ 13, "118707", "Alone" ], [ 14, "118709", "Chanderiler" ], [ 15, "118711", "Don't Wanna Know" ], [ 16, "118716", "Mood" ], [ 17, "117220", "Golden wheel" ], [ 18, "128884", "I don't know what it's called" ], [ 19, "128888", "I don't know what it's called" ] ];

class MusicConfig extends ConfigBase {
    constructor() {
        super(EXCELDATA$q);
    }
}

var foreign53 = Object.freeze({
    __proto__: null,
    MusicConfig: MusicConfig
});

const EXCELDATA$p = [ [ "ID", "Describe", "AssetId", "SexType" ], [ "", "", "", "" ], [ 1, null, "124879", 2 ], [ 2, null, "65712", 2 ], [ 3, null, "64412", 2 ], [ 4, null, "64142", 2 ], [ 5, null, "127349", 1 ], [ 6, null, "109137", 1 ] ];

class NakedDressShoesConfig extends ConfigBase {
    constructor() {
        super(EXCELDATA$p);
    }
}

var foreign54 = Object.freeze({
    __proto__: null,
    NakedDressShoesConfig: NakedDressShoesConfig
});

const EXCELDATA$o = [ [ "ID", "Describe", "AssetId", "SexType", "IsTransition" ], [ "", "", "", "", "" ], [ 1, "一定过套装", "253153", 2, 0 ], [ 2, "一定过套装", "263401", 1, 0 ], [ 3, "主打求神套装", "264188", 2, 0 ], [ 4, "主打求神套装", "264189", 1, 0 ], [ 5, "新年装", "297941", 2, 0 ], [ 6, "温柔女孩", "303702", 2, 0 ], [ 7, "阳光男", "303705", 1, 0 ], [ 8, "叛逆女孩", "303706", 2, 0 ], [ 9, "叛逆男孩", "303703", 1, 0 ], [ 10, "制服女", "367076", 2, 1 ], [ 11, "制服女", "435694", 2, 1 ], [ 12, "白人女天使", "137837", 2, 1 ], [ 13, "白人举重运动员", "141018", 1, 1 ], [ 14, "钢铁侠", "357563", 1, 1 ], [ 15, "女仆套装女", "350569", 2, 1 ], [ 16, "橘龙", "212971", 1, 1 ], [ 17, "华丽海盗服", "163624", 2, 0 ] ];

class OutfitConfig extends ConfigBase {
    constructor() {
        super(EXCELDATA$o);
    }
}

var foreign55 = Object.freeze({
    __proto__: null,
    OutfitConfig: OutfitConfig
});

const EXCELDATA$n = [ [ "ID", "Describe", "AssetId", "Transform", "SexType" ], [ "", "", "", "", "" ], [ 1, null, "420535", [ "0", "50", "0", "0", "0", "0", "2", "2", "2" ], 0 ], [ 2, null, "156405", [ "0", "50", "0", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 3, null, "267954", [ "0", "50", "0", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 4, null, "289523", [ "0", "50", "0", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 5, null, "289524", [ "0", "50", "0", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 6, null, "289525", [ "0", "50", "0", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 7, null, "289526", [ "0", "50", "0", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 8, null, "289527", [ "0", "50", "0", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 9, null, "365903", [ "0", "50", "0", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 10, null, "365906", [ "0", "50", "0", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 11, null, "365918", [ "0", "50", "0", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 12, null, "365921", [ "0", "50", "0", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 13, null, "365922", [ "0", "50", "0", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 14, null, "366268", [ "0", "50", "0", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 15, null, "379426", [ "0", "50", "25", "0", "0", "0", "1", "1", "1" ], 0 ], [ 16, null, "379427", [ "0", "50", "25", "0", "0", "0", "1", "1", "1" ], 0 ], [ 17, null, "380285", [ "0", "50", "25", "0", "0", "0", "1", "1", "1" ], 0 ], [ 18, null, "380286", [ "0", "50", "25", "0", "0", "0", "1", "1", "1" ], 0 ], [ 19, null, "260129", [ "0", "50", "0", "0", "0", "0", "1", "1", "1" ], 0 ] ];

class PetConfig extends ConfigBase {
    constructor() {
        super(EXCELDATA$n);
    }
}

var foreign56 = Object.freeze({
    __proto__: null,
    PetConfig: PetConfig
});

const EXCELDATA$m = [ [ "ID", "Describe", "AssetId", "SexType" ], [ "", "", "", "" ], [ 1, "美瞳", "531757", 0 ], [ 2, "美瞳", "531159", 0 ], [ 3, "美瞳", "461646", 0 ], [ 4, null, "458422", 0 ], [ 5, null, "398609", 0 ], [ 6, null, "267296", 0 ], [ 7, null, "267295", 0 ], [ 8, null, "267294", 0 ], [ 9, null, "267291", 0 ], [ 10, null, "267285", 0 ], [ 11, null, "266476", 0 ], [ 12, null, "266475", 0 ], [ 13, null, "266474", 0 ], [ 14, null, "266473", 0 ], [ 15, null, "266472", 0 ], [ 16, null, "266372", 0 ], [ 17, null, "266371", 0 ], [ 18, null, "266363", 0 ], [ 19, null, "266362", 0 ], [ 20, null, "266361", 0 ], [ 21, null, "266360", 0 ], [ 22, null, "266359", 0 ], [ 23, null, "266358", 0 ], [ 24, null, "215181", 0 ], [ 25, null, "215180", 0 ], [ 26, null, "215179", 0 ], [ 27, null, "215178", 0 ], [ 28, null, "215177", 0 ], [ 29, null, "215176", 0 ], [ 30, null, "215175", 0 ], [ 31, null, "215174", 0 ], [ 32, null, "215173", 0 ], [ 33, null, "215172", 0 ], [ 34, null, "215171", 0 ], [ 35, null, "215170", 0 ], [ 36, null, "215169", 0 ], [ 37, null, "215168", 0 ], [ 38, null, "215167", 0 ], [ 39, null, "215166", 0 ], [ 40, null, "215165", 0 ], [ 41, null, "215164", 0 ], [ 42, null, "215163", 0 ], [ 43, null, "215162", 0 ], [ 44, null, "185330", 0 ], [ 45, null, "121577", 0 ], [ 46, null, "117054", 0 ], [ 47, null, "77770", 0 ], [ 48, null, "77769", 0 ], [ 49, null, "77598", 0 ], [ 50, null, "77597", 0 ], [ 51, null, "77596", 0 ], [ 52, null, "77518", 0 ], [ 53, null, "77517", 0 ], [ 54, null, "77485", 0 ], [ 55, null, "77484", 0 ], [ 56, null, "70244", 0 ], [ 57, null, "70243", 0 ], [ 58, null, "70242", 0 ], [ 59, null, "70241", 0 ], [ 60, null, "47973", 0 ], [ 61, null, "47972", 0 ], [ 62, null, "47971", 0 ], [ 63, null, "47970", 0 ], [ 64, null, "47969", 0 ], [ 65, null, "47968", 0 ], [ 66, null, "47967", 0 ], [ 67, null, "47966", 0 ], [ 68, null, "47965", 0 ], [ 69, null, "47964", 0 ], [ 70, null, "47963", 0 ], [ 71, null, "47962", 0 ], [ 72, null, "47961", 0 ], [ 73, null, "47960", 0 ], [ 74, null, "47959", 0 ], [ 75, null, "47958", 0 ], [ 76, null, "47957", 0 ], [ 77, null, "47956", 0 ], [ 78, null, "32093", 0 ], [ 79, null, "30422", 0 ], [ 80, null, "25891", 0 ], [ 81, null, "22599", 0 ] ];

class PupilStyleConfig extends ConfigBase {
    constructor() {
        super(EXCELDATA$m);
    }
}

var foreign57 = Object.freeze({
    __proto__: null,
    PupilStyleConfig: PupilStyleConfig
});

const EXCELDATA$l = [ [ "ID", "Describe", "AssetId", "Transform", "SexType" ], [ "", "", "", "", "" ], [ 1, "单手刀", "334208", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 2, null, "297029", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 3, "散弹喷枪", "155702", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 4, null, "122956", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 5, null, "122952", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 6, null, "31734", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 7, null, "31728", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 8, null, "31724", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 9, null, "221099", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 10, null, "122716", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 11, null, "166941", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 12, null, "155696", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 13, null, "122726", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 14, null, "168811", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 15, null, "155702", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 16, null, "122720", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ] ];

class RightHandConfig extends ConfigBase {
    constructor() {
        super(EXCELDATA$l);
    }
}

var foreign58 = Object.freeze({
    __proto__: null,
    RightHandConfig: RightHandConfig
});

const EXCELDATA$k = [ [ "ID", "ROLEID", "PRICETYPE", "PRICE", "NAME" ], [ "", "", "", "", "" ], [ 1, "181562", 1, [ 1, 5888 ], "兜帽男" ], [ 2, "143400", 1, [ 1, 5888 ], "双马尾女" ], [ 3, "142292", 1, [ 1, 5888 ], "男战士" ], [ 4, "142272", 1, [ 1, 5888 ], "机甲少女" ], [ 5, "142293", 1, [ 1, 5888 ], "男骑士" ], [ 6, "142255", 1, [ 1, 5888 ], "纳米机甲女性" ], [ 7, "219915", 1, [ 1, 5888 ], "赛博少年" ], [ 8, "226379", 1, [ 1, 5888 ], "赛博少年" ], [ 9, "219912", 1, [ 1, 5888 ], "赛博少女" ], [ 10, "226386", 1, [ 1, 5888 ], "赛博少女" ], [ 11, "266641", 1, [ 1, 5888 ], "一定锅少年" ], [ 12, "267183", 1, [ 1, 5888 ], "求神少年" ], [ 13, "264622", 1, [ 1, 5888 ], "一定锅少女" ], [ 14, "266861", 1, [ 1, 5888 ], "求神少女" ], [ 15, "142302", 1, [ 1, 5888 ], "宝石铠甲男" ], [ 16, "142303", 1, [ 1, 5888 ], "铠甲男战士" ], [ 17, "142396", 1, [ 1, 5888 ], "黑人男纳米机甲" ], [ 18, "142397", 1, [ 1, 5888 ], "白人男纳米机甲" ], [ 19, "142398", 1, [ 1, 5888 ], "白银骑士" ], [ 20, "142906", 1, [ 1, 5888 ], "鹰战士" ], [ 21, "142895", 1, [ 1, 5888 ], "战士" ], [ 22, "142886", 1, [ 1, 5888 ], "毒液怪人" ], [ 23, "142905", 1, [ 1, 5888 ], "蚁侠士" ], [ 24, "142898", 1, [ 1, 5888 ], "最强队长" ], [ 25, "142885", 1, [ 1, 5888 ], "超帅侠" ], [ 26, "142900", 1, [ 1, 5888 ], "奇异战士" ], [ 27, "142901", 1, [ 1, 5888 ], "闪电怪" ], [ 28, "142887", 1, [ 1, 5888 ], "恶灵骷髅" ], [ 29, "142888", 1, [ 1, 5888 ], "铁人" ], [ 30, "222475", 1, [ 1, 5888 ], "风衣女" ], [ 31, "219916", 1, [ 1, 5888 ], "汉服少女" ], [ 32, "266860", 1, [ 1, 5888 ], "时尚少女" ], [ 33, "226382", 1, [ 1, 5888 ], "潮流少女" ], [ 34, "222476", 1, [ 1, 5888 ], "古代书生" ] ];

class ROLEConfig extends ConfigBase {
    constructor() {
        super(EXCELDATA$k);
    }
}

var foreign59 = Object.freeze({
    __proto__: null,
    ROLEConfig: ROLEConfig
});

const EXCELDATA$j = [ [ "ID", "Describe", "AssetId", "SexType" ], [ "", "", "", "" ], [ 1, "短发女", "351026", 2 ], [ 2, "短发女", "411825", 2 ], [ 3, "机械女", "163329", 2 ], [ 4, "赛博套装", "163330", 2 ], [ 5, "机甲套装", "163553", 2 ], [ 6, "机器人", "162950", 1 ], [ 7, "赛博服饰", "162971", 1 ], [ 8, "机甲套装", "164428", 1 ], [ 9, "刺猬小子", "351402", 1 ], [ 10, "魔法男孩", "361919", 1 ] ];

class ScienceFictionStylingOutfitConfig extends ConfigBase {
    constructor() {
        super(EXCELDATA$j);
    }
}

var foreign60 = Object.freeze({
    __proto__: null,
    ScienceFictionStylingOutfitConfig: ScienceFictionStylingOutfitConfig
});

const EXCELDATA$i = [ [ "ID", "Describe", "AssetId", "SexType" ], [ "", "", "", "" ], [ 1, "长袜制服鞋", "57729", 2 ], [ 2, "细跟尖头鞋", "60078", 1 ], [ 3, "猫猫鞋套", "63301", 0 ], [ 4, "皮鞋", "383403", 2 ], [ 5, "小熊鞋", "362125", 2 ] ];

class ShoesConfig extends ConfigBase {
    constructor() {
        super(EXCELDATA$i);
    }
}

var foreign61 = Object.freeze({
    __proto__: null,
    ShoesConfig: ShoesConfig
});

const EXCELDATA$h = [ [ "ID", "CommodityId", "PartyPrice", "Count", "Des", "Icon" ], [ "", "", "", "", "", "" ], [ 1, "2up8k7U7ULm0000hZ", 98, 100, "钻石*100", "103220" ], [ 2, "9ZHaEgphvWq0000ha", 580, 600, "钻石*600", "103221" ], [ 3, "6JfMPeEBARi0000hb", 980, 1e3, "钻石*1000", "103215" ], [ 4, "55OB9kdnutU0000hc", 2800, 3e3, "钻石*3000", "103214" ], [ 5, "7BktFJ9eIPI0000hd", 6800, 7e3, "钻石*7000", "103214" ], [ 6, "8CbboTcgQAn0000he", 9800, 1e4, "钻石*10000", "103217" ], [ 7, "6I0UekjBePp0000hf", 19800, 2e4, "钻石*20000", "103217" ], [ 8, "6U1htY0UV3i0000hg", 45800, 5e4, "钻石*50000", "103218" ], [ 9, "A2d5Hp0SiF40000hh", 88800, 1e5, "钻石*100000", "103218" ] ];

class ShopItemConfig extends ConfigBase {
    constructor() {
        super(EXCELDATA$h);
    }
}

var foreign62 = Object.freeze({
    __proto__: null,
    ShopItemConfig: ShopItemConfig
});

const EXCELDATA$g = [ [ "ID", "Describe", "AssetId", "SexType" ], [ "", "", "", "" ], [ 1, null, "509868", 2 ], [ 2, null, "478218", 2 ], [ 3, null, "383390", 2 ], [ 4, null, "370735", 2 ], [ 5, null, "356245", 2 ], [ 6, null, "344228", 2 ], [ 7, null, "321370", 2 ], [ 8, null, "313079", 2 ], [ 9, null, "297929", 2 ], [ 10, null, "296023", 2 ], [ 11, null, "292004", 2 ], [ 12, null, "171377", 2 ], [ 13, null, "171301", 2 ], [ 14, null, "137425", 2 ], [ 15, null, "121948", 2 ], [ 16, null, "119366", 2 ], [ 17, null, "119350", 2 ], [ 18, null, "115922", 2 ], [ 19, null, "111253", 2 ], [ 20, null, "111241", 2 ], [ 21, null, "109839", 2 ], [ 22, null, "65656", 2 ], [ 23, null, "63648", 2 ], [ 24, null, "63539", 2 ], [ 25, null, "63300", 2 ], [ 26, null, "62958", 2 ], [ 27, null, "62777", 2 ], [ 28, null, "59857", 2 ], [ 29, null, "509895", 1 ], [ 30, null, "479087", 1 ], [ 31, null, "383409", 1 ], [ 32, null, "356544", 1 ], [ 33, null, "336269", 1 ], [ 34, null, "300136", 1 ], [ 35, null, "291009", 1 ], [ 36, null, "266166", 1 ], [ 37, null, "171318", 1 ], [ 38, null, "171118", 1 ], [ 39, null, "140934", 1 ], [ 40, null, "137437", 1 ], [ 41, null, "127499", 1 ], [ 42, null, "122089", 1 ], [ 43, null, "120060", 1 ], [ 44, null, "120059", 1 ], [ 45, null, "120058", 1 ], [ 46, null, "120056", 1 ], [ 47, null, "119893", 1 ], [ 48, null, "118079", 1 ], [ 49, null, "116791", 1 ], [ 50, null, "115938", 1 ], [ 51, null, "112202", 1 ], [ 52, null, "112201", 1 ], [ 53, null, "111573", 1 ], [ 54, null, "111518", 1 ], [ 55, null, "111161", 1 ], [ 56, null, "98550", 1 ], [ 57, null, "74113", 1 ], [ 58, null, "66414", 1 ], [ 59, null, "66160", 1 ], [ 60, null, "65006", 1 ], [ 61, null, "64995", 1 ], [ 62, null, "64803", 1 ], [ 63, null, "64544", 1 ], [ 64, null, "63883", 1 ], [ 65, null, "63674", 1 ], [ 66, null, "63671", 1 ] ];

class ShortJacketTopConfig extends ConfigBase {
    constructor() {
        super(EXCELDATA$g);
    }
}

var foreign63 = Object.freeze({
    __proto__: null,
    ShortJacketTopConfig: ShortJacketTopConfig
});

const EXCELDATA$f = [ [ "ID", "Describe", "AssetId", "SexType" ], [ "", "", "", "" ], [ 1, null, "497740", 2 ], [ 2, null, "457813", 2 ], [ 3, null, "457730", 2 ], [ 4, null, "390740", 2 ], [ 5, null, "390416", 2 ], [ 6, null, "383395", 2 ], [ 7, null, "344230", 2 ], [ 8, null, "344064", 2 ], [ 9, null, "321371", 2 ], [ 10, null, "294324", 2 ], [ 11, null, "241190", 2 ], [ 12, null, "218442", 2 ], [ 13, null, "210327", 2 ], [ 14, null, "181361", 2 ], [ 15, null, "144575", 2 ], [ 16, null, "140329", 2 ], [ 17, null, "125734", 2 ], [ 18, null, "122110", 2 ], [ 19, null, "111722", 2 ], [ 20, null, "66424", 2 ], [ 21, null, "66302", 2 ], [ 22, null, "64457", 2 ], [ 23, null, "63552", 2 ], [ 24, null, "63315", 2 ], [ 25, null, "59855", 2 ], [ 26, null, "383411", 1 ], [ 27, null, "382168", 1 ], [ 28, null, "266167", 1 ], [ 29, null, "250471", 1 ], [ 30, null, "241332", 1 ], [ 31, null, "145069", 1 ], [ 32, null, "111510", 1 ], [ 33, null, "75460", 1 ], [ 34, null, "66110", 1 ], [ 35, null, "65616", 1 ], [ 36, null, "64783", 1 ], [ 37, null, "64553", 1 ], [ 38, null, "64187", 1 ], [ 39, null, "63915", 1 ], [ 40, null, "63688", 1 ] ];

class ShortsBottomConfig extends ConfigBase {
    constructor() {
        super(EXCELDATA$f);
    }
}

var foreign64 = Object.freeze({
    __proto__: null,
    ShortsBottomConfig: ShortsBottomConfig
});

const EXCELDATA$e = [ [ "ID", "Describe", "AssetId", "SexType" ], [ "", "", "", "" ], [ 1, null, "458656", 2 ], [ 2, null, "390745", 2 ], [ 3, null, "390419", 2 ], [ 4, null, "390332", 2 ], [ 5, null, "383400", 2 ], [ 6, null, "362161", 2 ], [ 7, null, "346550", 2 ], [ 8, null, "344058", 2 ], [ 9, null, "323610", 2 ], [ 10, null, "322900", 2 ], [ 11, null, "322894", 2 ], [ 12, null, "314285", 2 ], [ 13, null, "313848", 2 ], [ 14, null, "313730", 2 ], [ 15, null, "313078", 2 ], [ 16, null, "300488", 2 ], [ 17, null, "241187", 2 ], [ 18, null, "240938", 2 ], [ 19, null, "240052", 2 ], [ 20, null, "224080", 2 ], [ 21, null, "224079", 2 ], [ 22, null, "224078", 2 ], [ 23, null, "224077", 2 ], [ 24, null, "224076", 2 ], [ 25, null, "223960", 2 ], [ 26, null, "223959", 2 ], [ 27, null, "223958", 2 ], [ 28, null, "223957", 2 ], [ 29, null, "192596", 2 ], [ 30, null, "174758", 2 ], [ 31, null, "171064", 2 ], [ 32, null, "152034", 2 ], [ 33, null, "140330", 2 ], [ 34, null, "138031", 2 ], [ 35, null, "137599", 2 ], [ 36, null, "137518", 2 ], [ 37, null, "137505", 2 ], [ 38, null, "128834", 2 ], [ 39, null, "127681", 2 ], [ 40, null, "127522", 2 ], [ 41, null, "127277", 2 ], [ 42, null, "126615", 2 ], [ 43, null, "122100", 2 ], [ 44, null, "119362", 2 ], [ 45, null, "119358", 2 ], [ 46, null, "119354", 2 ], [ 47, null, "119277", 2 ], [ 48, null, "119229", 2 ], [ 49, null, "117497", 2 ], [ 50, null, "115921", 2 ], [ 51, null, "115849", 2 ], [ 52, null, "111721", 2 ], [ 53, null, "111714", 2 ], [ 54, null, "111673", 2 ], [ 55, null, "111529", 2 ], [ 56, null, "111519", 2 ], [ 57, null, "111517", 2 ], [ 58, null, "111516", 2 ], [ 59, null, "111509", 2 ], [ 60, null, "111507", 2 ], [ 61, null, "111505", 2 ], [ 62, null, "111497", 2 ], [ 63, null, "111496", 2 ], [ 64, null, "111307", 2 ], [ 65, null, "111303", 2 ], [ 66, null, "111240", 2 ], [ 67, null, "111203", 2 ], [ 68, null, "111088", 2 ], [ 69, null, "66413", 2 ], [ 70, null, "66301", 2 ], [ 71, null, "64728", 2 ], [ 72, null, "64545", 2 ], [ 73, null, "64410", 2 ], [ 74, null, "63953", 2 ], [ 75, null, "63304", 2 ], [ 76, null, "62959", 2 ], [ 77, null, "62956", 2 ], [ 78, null, "60983", 2 ], [ 79, null, "59880", 2 ], [ 80, null, "59853", 2 ], [ 81, null, "57730", 2 ], [ 82, null, "507453", 1 ], [ 83, null, "476242", 1 ], [ 84, null, "458752", 1 ], [ 85, null, "458129", 1 ], [ 86, null, "383410", 1 ], [ 87, null, "383002", 1 ], [ 88, null, "382166", 1 ], [ 89, null, "313977", 1 ], [ 90, null, "313681", 1 ], [ 91, null, "250440", 1 ], [ 92, null, "250439", 1 ], [ 93, null, "241389", 1 ], [ 94, null, "240885", 1 ], [ 95, null, "224168", 1 ], [ 96, null, "196935", 1 ], [ 97, null, "192556", 1 ], [ 98, null, "140278", 1 ], [ 99, null, "129334", 1 ], [ 100, null, "129249", 1 ], [ 101, null, "129177", 1 ], [ 102, null, "129087", 1 ], [ 103, null, "128801", 1 ], [ 104, null, "127802", 1 ], [ 105, null, "127716", 1 ], [ 106, null, "127351", 1 ], [ 107, null, "125689", 1 ], [ 108, null, "122009", 1 ], [ 109, null, "121533", 1 ], [ 110, null, "120575", 1 ], [ 111, null, "120057", 1 ], [ 112, null, "119289", 1 ], [ 113, null, "119112", 1 ], [ 114, null, "117681", 1 ], [ 115, null, "116726", 1 ], [ 116, null, "112200", 1 ], [ 117, null, "111498", 1 ], [ 118, null, "111403", 1 ], [ 119, null, "111282", 1 ], [ 120, null, "94782", 1 ], [ 121, null, "74114", 1 ], [ 122, null, "66696", 1 ], [ 123, null, "66415", 1 ], [ 124, null, "65780", 1 ], [ 125, null, "65614", 1 ], [ 126, null, "64793", 1 ], [ 127, null, "64708", 1 ], [ 128, null, "64543", 1 ], [ 129, null, "64542", 1 ], [ 130, null, "63906", 1 ], [ 131, null, "63686", 1 ], [ 132, null, "63672", 1 ], [ 133, null, "63593", 1 ] ];

class ShortSinglePieceTopConfig extends ConfigBase {
    constructor() {
        super(EXCELDATA$e);
    }
}

var foreign65 = Object.freeze({
    __proto__: null,
    ShortSinglePieceTopConfig: ShortSinglePieceTopConfig
});

const EXCELDATA$d = [ [ "ID", "Describe", "AssetId", "SexType" ], [ "", "", "", "" ], [ 1, null, "468349", 2 ], [ 2, null, "440230", 2 ], [ 3, null, "412115", 2 ], [ 4, null, "390433", 2 ], [ 5, null, "383391", 2 ], [ 6, null, "370794", 2 ], [ 7, null, "356246", 2 ], [ 8, null, "314286", 2 ], [ 9, null, "297931", 2 ], [ 10, null, "292002", 2 ], [ 11, null, "240937", 2 ], [ 12, null, "174757", 2 ], [ 13, null, "138032", 2 ], [ 14, null, "127523", 2 ], [ 15, null, "126616", 2 ], [ 16, null, "122101", 2 ], [ 17, null, "121947", 2 ], [ 18, null, "119227", 2 ], [ 19, null, "116967", 2 ], [ 20, null, "116956", 2 ], [ 21, null, "116955", 2 ], [ 22, null, "66356", 2 ], [ 23, null, "65665", 2 ], [ 24, null, "64334", 2 ], [ 25, null, "64333", 2 ], [ 26, null, "63650", 2 ], [ 27, null, "62970", 2 ], [ 28, null, "62790", 2 ], [ 29, null, "60994", 2 ], [ 30, null, "60113", 2 ], [ 31, null, "57736", 2 ] ];

class ShortSkirtBottomConfig extends ConfigBase {
    constructor() {
        super(EXCELDATA$d);
    }
}

var foreign66 = Object.freeze({
    __proto__: null,
    ShortSkirtBottomConfig: ShortSkirtBottomConfig
});

const EXCELDATA$c = [ [ "ID", "Describe", "AssetId", "Transform", "SexType" ], [ "", "", "", "", "" ], [ 1, null, "152404", [ "0", "-35", "-25", "0", "0", "0", "0.1", "0.1", "0.1" ], 0 ], [ 2, null, "152387", [ "0", "-35", "-25", "0", "0", "0", "0.1", "0.1", "0.1" ], 0 ], [ 3, null, "152384", [ "0", "-35", "-25", "0", "0", "0", "0.1", "0.1", "0.1" ], 0 ], [ 4, null, "152395", [ "0", "-35", "-25", "0", "0", "0", "0.1", "0.1", "0.1" ], 0 ], [ 5, null, "152380", [ "0", "-35", "-25", "0", "0", "0", "0.1", "0.1", "0.1" ], 0 ], [ 6, null, "152393", [ "0", "-35", "-25", "0", "0", "0", "0.1", "0.1", "0.1" ], 0 ], [ 7, null, "152400", [ "0", "-35", "-25", "0", "0", "0", "0.1", "0.1", "0.1" ], 0 ], [ 8, null, "152407", [ "0", "-35", "-25", "0", "0", "0", "0.1", "0.1", "0.1" ], 0 ], [ 9, null, "152382", [ "0", "-35", "-25", "0", "0", "0", "0.1", "0.1", "0.1" ], 0 ], [ 10, null, "152397", [ "0", "-35", "-25", "0", "0", "0", "0.1", "0.1", "0.1" ], 0 ], [ 11, null, "152381", [ "0", "-35", "-25", "0", "0", "0", "0.1", "0.1", "0.1" ], 0 ], [ 12, null, "152396", [ "0", "-35", "-25", "0", "0", "0", "0.1", "0.1", "0.1" ], 0 ], [ 13, null, "152392", [ "0", "-35", "-25", "0", "0", "0", "0.1", "0.1", "0.1" ], 0 ], [ 14, null, "152399", [ "0", "-35", "-25", "0", "0", "0", "0.1", "0.1", "0.1" ], 0 ], [ 15, null, "152408", [ "0", "-35", "-25", "0", "0", "0", "0.1", "0.1", "0.1" ], 0 ], [ 16, null, "152391", [ "0", "-35", "-25", "0", "0", "0", "0.1", "0.1", "0.1" ], 0 ], [ 17, null, "152405", [ "0", "-35", "-25", "0", "0", "0", "0.1", "0.1", "0.1" ], 0 ], [ 18, null, "152402", [ "0", "-35", "-25", "0", "0", "0", "0.1", "0.1", "0.1" ], 0 ], [ 19, null, "152409", [ "0", "-35", "-25", "0", "0", "0", "0.1", "0.1", "0.1" ], 0 ], [ 20, null, "152383", [ "0", "-35", "-25", "0", "0", "0", "0.1", "0.1", "0.1" ], 0 ], [ 21, null, "152406", [ "0", "-35", "-25", "0", "0", "0", "0.1", "0.1", "0.1" ], 0 ], [ 22, null, "152403", [ "0", "-35", "-25", "0", "0", "0", "0.1", "0.1", "0.1" ], 0 ], [ 23, null, "152385", [ "0", "-35", "-25", "0", "0", "0", "0.1", "0.1", "0.1" ], 0 ], [ 24, null, "152386", [ "0", "-35", "-25", "0", "0", "0", "0.1", "0.1", "0.1" ], 0 ], [ 25, null, "152388", [ "0", "-35", "-25", "0", "0", "0", "0.1", "0.1", "0.1" ], 0 ], [ 26, null, "152389", [ "0", "-35", "-25", "0", "0", "0", "0.1", "0.1", "0.1" ], 0 ], [ 27, null, "152390", [ "0", "-35", "-25", "0", "0", "0", "0.1", "0.1", "0.1" ], 0 ], [ 28, null, "152394", [ "0", "-35", "-25", "0", "0", "0", "0.1", "0.1", "0.1" ], 0 ], [ 29, null, "152398", [ "0", "-35", "-25", "0", "0", "0", "0.1", "0.1", "0.1" ], 0 ], [ 30, null, "152401", [ "0", "-35", "-25", "0", "0", "0", "0.1", "0.1", "0.1" ], 0 ], [ 31, null, "87027", [ "0", "-35", "-50", "0", "0", "-90", "0.5", "0.5", "0.5" ], 0 ], [ 32, null, "152259", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 33, null, "177575", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 34, null, "177646", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 35, null, "178141", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 36, null, "179400", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 37, null, "179470", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 38, null, "179487", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 39, null, "180526", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 40, null, "180527", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 41, null, "180962", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 42, null, "180963", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 43, null, "180965", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 44, null, "180966", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 45, null, "180967", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 46, null, "180968", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 47, null, "181639", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 48, null, "184402", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 49, null, "184489", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 50, null, "184541", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 51, null, "184555", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 52, null, "184556", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 53, null, "184561", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 54, null, "185376", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 55, null, "185448", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 56, null, "185537", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 57, null, "185598", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 58, null, "185627", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 59, null, "185708", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 60, null, "186357", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 61, null, "186532", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 62, null, "186533", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 63, null, "186534", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 64, null, "186655", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 65, null, "186656", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 66, null, "186657", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 67, null, "186685", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 68, null, "186807", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 69, null, "186897", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 70, null, "191800", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 71, null, "191806", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 72, null, "191852", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 73, null, "191950", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 74, null, "192290", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 75, null, "192359", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 76, null, "192385", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 77, null, "192395", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 78, null, "192420", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 79, null, "192533", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 80, null, "192579", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 81, null, "194960", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 82, null, "194965", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 83, null, "195014", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 84, null, "195088", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 85, null, "195089", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 86, null, "195090", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 87, null, "195162", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 88, null, "195260", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 89, null, "195261", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 90, null, "195262", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 91, null, "195771", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 92, null, "195772", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 93, null, "195773", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 94, null, "195774", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 95, null, "196299", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 96, null, "196300", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 97, null, "196301", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 98, null, "196302", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 99, null, "196536", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 100, null, "197005", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 101, null, "197006", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 102, null, "197007", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 103, null, "197008", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 104, null, "198126", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 105, null, "198127", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 106, null, "198128", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 107, null, "198630", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 108, null, "198631", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 109, null, "198632", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 110, null, "198633", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 111, null, "198651", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 112, null, "198652", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 113, null, "198653", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 114, null, "198654", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 115, null, "199401", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 116, null, "199402", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 117, null, "199403", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 118, null, "199404", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 119, null, "200181", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 120, null, "200182", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 121, null, "200183", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 122, null, "203716", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 123, null, "203717", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 124, null, "203718", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 125, null, "203719", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 126, null, "209370", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 127, null, "209371", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 128, null, "209372", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 129, null, "209373", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 130, null, "217695", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 131, null, "217700", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 132, null, "217949", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 133, null, "218295", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ], [ 134, null, "218316", [ "0", "-35", "-50", "0", "0", "-90", "1", "1", "1" ], 0 ] ];

class ShoulderConfig extends ConfigBase {
    constructor() {
        super(EXCELDATA$c);
    }
}

var foreign67 = Object.freeze({
    __proto__: null,
    ShoulderConfig: ShoulderConfig
});

const EXCELDATA$b = [ [ "ID", "Describe", "SkinTone", "SexType" ], [ "", "", "", "" ], [ 1, null, "ColorPick", 0 ], [ 2, null, "FDF4EFFF", 0 ], [ 3, null, "FAEDE5FF", 0 ], [ 4, null, "F8E7E0FF", 0 ], [ 5, null, "F5E2D4FF", 0 ], [ 6, null, "F3D8C7FF", 0 ], [ 7, null, "EACCC1FF", 0 ], [ 8, null, "F6E6D6FF", 0 ], [ 9, null, "F0DEC8FF", 0 ], [ 10, null, "EDD9BEFF", 0 ], [ 11, null, "E8D0B4FF", 0 ], [ 12, null, "E7CAA2FF", 0 ], [ 13, null, "DCBB8EFF", 0 ], [ 14, null, "DCC2A7FF", 0 ], [ 15, null, "C7A58CFF", 0 ], [ 16, null, "AB8874FF", 0 ], [ 17, null, "96735FFF", 0 ], [ 18, null, "805F4CFF", 0 ], [ 19, null, "5B4337FF", 0 ], [ 20, null, "D0B9ABFF", 0 ], [ 21, null, "C1ABA0FF", 0 ], [ 22, null, "A38881FF", 0 ], [ 23, null, "806B68FF", 0 ], [ 24, null, "64504FFF", 0 ], [ 25, null, "423431FF", 0 ], [ 26, null, "E4C3A0FF", 0 ], [ 27, null, "E3BA8CFF", 0 ], [ 28, null, "D1A173FF", 0 ], [ 29, null, "B37D51FF", 0 ], [ 30, null, "976238FF", 0 ], [ 31, null, "6D3F25FF", 0 ], [ 32, null, "7D553CFF", 0 ], [ 33, null, "794F37FF", 0 ], [ 34, null, "5F3C26FF", 0 ], [ 35, null, "5B3822FF", 0 ], [ 36, null, "3D2314FF", 0 ], [ 37, null, "341C10FF", 0 ], [ 38, null, "F9E175FF", 0 ], [ 39, null, "B0C87EFF", 0 ], [ 40, null, "8AB8DCFF", 0 ], [ 41, null, "FBF5F5FF", 0 ] ];

class SkinToneConfig extends ConfigBase {
    constructor() {
        super(EXCELDATA$b);
    }
}

var foreign68 = Object.freeze({
    __proto__: null,
    SkinToneConfig: SkinToneConfig
});

const EXCELDATA$a = [ [ "ID", "Describe", "AssetId", "SexType" ], [ "", "", "", "" ], [ 1, null, "121946", 2 ], [ 2, null, "115634", 2 ], [ 3, null, "111207", 2 ], [ 4, null, "111206", 2 ], [ 5, null, "64727", 2 ], [ 6, null, "64711", 2 ], [ 7, null, "64147", 2 ], [ 8, null, "59854", 2 ], [ 9, null, "458132", 1 ], [ 10, null, "356543", 1 ], [ 11, null, "266168", 1 ], [ 12, null, "250456", 1 ], [ 13, null, "240887", 1 ], [ 14, null, "129210", 1 ], [ 15, null, "119890", 1 ], [ 16, null, "115937", 1 ], [ 17, null, "66416", 1 ], [ 18, null, "66163", 1 ], [ 19, null, "65009", 1 ], [ 20, null, "64792", 1 ], [ 21, null, "63687", 1 ], [ 22, null, "63596", 1 ] ];

class SportsShoesShoesConfig extends ConfigBase {
    constructor() {
        super(EXCELDATA$a);
    }
}

var foreign69 = Object.freeze({
    __proto__: null,
    SportsShoesShoesConfig: SportsShoesShoesConfig
});

const EXCELDATA$9 = [ [ "ID", "Describe", "AssetId", "SexType" ], [ "", "", "", "" ], [ 1, null, "241445", 2 ], [ 2, null, "221704", 2 ], [ 3, null, "211010", 2 ], [ 4, null, "210328", 2 ], [ 5, null, "181365", 2 ], [ 6, null, "171774", 2 ], [ 7, null, "142608", 2 ], [ 8, null, "141708", 2 ], [ 9, null, "134234", 2 ], [ 10, null, "131789", 2 ], [ 11, null, "127639", 2 ], [ 12, null, "124880", 2 ], [ 13, null, "119745", 2 ], [ 14, null, "86088", 2 ], [ 15, null, "71960", 2 ], [ 16, null, "67583", 2 ], [ 17, null, "67582", 2 ], [ 18, null, "67541", 2 ], [ 19, null, "66712", 2 ], [ 20, null, "66572", 2 ], [ 21, null, "65870", 2 ], [ 22, null, "65710", 2 ], [ 23, null, "65655", 2 ], [ 24, null, "65654", 2 ], [ 25, null, "64710", 2 ], [ 26, null, "64709", 2 ], [ 27, null, "64627", 2 ], [ 28, null, "64559", 2 ], [ 29, null, "64305", 2 ], [ 30, null, "64141", 2 ], [ 31, null, "64138", 2 ], [ 32, null, "63954", 2 ], [ 33, null, "63871", 2 ], [ 34, null, "63868", 2 ], [ 35, null, "63538", 2 ], [ 36, null, "63536", 2 ], [ 37, null, "63292", 2 ], [ 38, null, "63291", 2 ], [ 39, null, "63290", 2 ], [ 40, null, "62778", 2 ], [ 41, null, "62776", 2 ], [ 42, null, "62535", 2 ], [ 43, null, "60981", 2 ], [ 44, null, "60077", 2 ], [ 45, null, "59955", 2 ], [ 46, null, "59536", 2 ], [ 47, null, "320844", 1 ], [ 48, null, "212895", 1 ], [ 49, null, "200242", 1 ], [ 50, null, "186268", 1 ], [ 51, null, "131747", 1 ], [ 52, null, "129936", 1 ], [ 53, null, "119773", 1 ], [ 54, null, "119669", 1 ], [ 55, null, "119393", 1 ], [ 56, null, "111612", 1 ], [ 57, null, "109144", 1 ], [ 58, null, "92015", 1 ], [ 59, null, "75457", 1 ], [ 60, null, "66615", 1 ], [ 61, null, "66554", 1 ], [ 62, null, "64813", 1 ], [ 63, null, "63711", 1 ], [ 64, null, "60381", 1 ] ];

class SuitTopConfig extends ConfigBase {
    constructor() {
        super(EXCELDATA$9);
    }
}

var foreign70 = Object.freeze({
    __proto__: null,
    SuitTopConfig: SuitTopConfig
});

const EXCELDATA$8 = [ [ "ID", "Describe", "Text", "Tab2" ], [ "", "", "Language", "" ], [ 1, "捏脸", "Text_Tab1_1", [ 101, 102, 103, 104, 105, 106, 107 ] ], [ 2, "换装", "Text_Tab1_2", [ 108, 109, 110, 111, 112, 113, 115, 114 ] ], [ 3, "收藏", "Text_Tab1_3", null ] ];

class Tab1Config extends ConfigBase {
    constructor() {
        super(EXCELDATA$8);
    }
}

var foreign71 = Object.freeze({
    __proto__: null,
    Tab1Config: Tab1Config
});

const EXCELDATA$7 = [ [ "ID", "Describe", "Text", "Tab3" ], [ "", "", "Language", "" ], [ 101, "体型", "Text_Tab2_101", null ], [ 102, "肤色", "Text_Tab2_102", null ], [ 103, "脸型", "Text_Tab2_103", null ], [ 104, "眼睛", "Text_Tab2_104", [ 1001, 1002, 1003, 1004, 1005 ] ], [ 105, "眉毛", "Text_Tab2_105", null ], [ 106, "妆容", "Text_Tab2_106", [ 1006, 1007, 1008, 1009 ] ], [ 107, "表情", "Text_Tab2_107", null ], [ 108, "套装", "Text_Tab2_108", [ 1022, 1047, 1023, 1024, 1025, 1026, 1027, 1028 ] ], [ 109, "头发", "Text_Tab2_109", [ 1010, 1011, 1012 ] ], [ 110, "上衣", "Text_Tab2_110", [ 1029, 1030, 1031, 1032, 1033 ] ], [ 111, "下衣", "Text_Tab2_111", [ 1034, 1035, 1036, 1037, 1038 ] ], [ 112, "鞋子", "Text_Tab2_112", [ 1041, 1042, 1043, 1044, 1045, 1046 ] ], [ 113, "手套", "Text_Tab2_113", [ 1039, 1040 ] ], [ 114, "宠物", "Text_Tab2_114", null ], [ 115, "饰品", "Text_Tab2_115", [ 1020, 1015, 1014, 1018, 1016, 1017, 1019, 1021 ] ], [ 501, "体型_收藏", "Text_Tab2_501", null ], [ 502, "肤色_收藏", "Text_Tab2_502", null ], [ 503, "脸型_收藏", "Text_Tab2_503", null ], [ 504, "眼睛_收藏", "Text_Tab2_504", [ 2001, 2002, 2003, 2004, 2005 ] ], [ 505, "眉毛_收藏", "Text_Tab2_505", null ], [ 506, "妆容_收藏", "Text_Tab2_506", [ 2006, 2007, 2008, 2009 ] ], [ 507, "表情_收藏", "Text_Tab2_507", null ], [ 508, "套装_收藏", "Text_Tab2_508", null ], [ 509, "头发_收藏", "Text_Tab2_509", [ 2010, 2011, 2012 ] ], [ 510, "上衣_收藏", "Text_Tab2_510", null ], [ 511, "下衣_收藏", "Text_Tab2_511", null ], [ 512, "鞋子_收藏", "Text_Tab2_512", null ], [ 513, "手套_收藏", "Text_Tab2_513", null ], [ 514, "宠物_收藏", "Text_Tab2_514", null ], [ 515, "饰品_收藏", "Text_Tab2_515", [ 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021 ] ] ];

class Tab2Config extends ConfigBase {
    constructor() {
        super(EXCELDATA$7);
    }
}

var foreign72 = Object.freeze({
    __proto__: null,
    Tab2Config: Tab2Config
});

const EXCELDATA$6 = [ [ "ID", "Describe", "Text" ], [ "", "", "Language" ], [ 1001, "瞳孔样式", "Text_Tab3_1001" ], [ 1002, "瞳孔贴画", "Text_Tab3_1002" ], [ 1003, "上高光", "Text_Tab3_1003" ], [ 1004, "下高光", "Text_Tab3_1004" ], [ 1005, "睫毛", "Text_Tab3_1005" ], [ 1006, "眼影", "Text_Tab3_1006" ], [ 1007, "腮红", "Text_Tab3_1007" ], [ 1008, "口红", "Text_Tab3_1008" ], [ 1009, "面部彩绘", "Text_Tab3_1009" ], [ 1010, "整体发型", "Text_Tab3_1010" ], [ 1011, "前发", "Text_Tab3_1011" ], [ 1012, "后发", "Text_Tab3_1012" ], [ 1013, "左手", "Text_Tab3_1013" ], [ 1014, "右手", "Text_Tab3_1014" ], [ 1015, "背饰", "Text_Tab3_1015" ], [ 1016, "耳饰", "Text_Tab3_1016" ], [ 1017, "面饰", "Text_Tab3_1017" ], [ 1018, "臀部", "Text_Tab3_1018" ], [ 1019, "肩部", "Text_Tab3_1019" ], [ 1020, "特效", "Text_Tab3_1020" ], [ 1021, "拖尾", "Text_Tab3_1021" ], [ 1022, "日常造型1", "Text_Tab3_1022" ], [ 1023, "布偶造型", "Text_Tab3_1023" ], [ 1024, "英雄造型", "Text_Tab3_1024" ], [ 1025, "幻想造型", "Text_Tab3_1025" ], [ 1026, "节日造型", "Text_Tab3_1026" ], [ 1027, "科幻造型", "Text_Tab3_1027" ], [ 1028, "古代造型", "Text_Tab3_1028" ], [ 1029, "长单件", "Text_Tab3_1029" ], [ 1030, "短外套", "Text_Tab3_1030" ], [ 1031, "短单件", "Text_Tab3_1031" ], [ 1032, "套装", "Text_Tab3_1032" ], [ 1033, "长外套", "Text_Tab3_1033" ], [ 1034, "短裙", "Text_Tab3_1034" ], [ 1035, "长裤", "Text_Tab3_1035" ], [ 1036, "短裤", "Text_Tab3_1036" ], [ 1037, "长裙", "Text_Tab3_1037" ], [ 1038, "裤袜", "Text_Tab3_1038" ], [ 1039, "手套", "Text_Tab3_1039" ], [ 1040, "手套饰品", "Text_Tab3_1040" ], [ 1041, "日常鞋", "Text_Tab3_1041" ], [ 1042, "靴子", "Text_Tab3_1042" ], [ 1043, "足套", "Text_Tab3_1043" ], [ 1044, "裸饰", "Text_Tab3_1044" ], [ 1045, "高跟鞋", "Text_Tab3_1045" ], [ 1046, "运动鞋", "Text_Tab3_1046" ], [ 1047, "日常造型2", "Text_Tab3_1047" ], [ 2001, "瞳孔样式_收藏", "Text_Tab3_2001" ], [ 2002, "瞳孔贴花_收藏", "Text_Tab3_2002" ], [ 2003, "上高光_收藏", "Text_Tab3_2003" ], [ 2004, "下高光_收藏", "Text_Tab3_2004" ], [ 2005, "睫毛_收藏", "Text_Tab3_2005" ], [ 2006, "眼影_收藏", "Text_Tab3_2006" ], [ 2007, "腮红_收藏", "Text_Tab3_2007" ], [ 2008, "口红_收藏", "Text_Tab3_2008" ], [ 2009, "面部彩绘_收藏", "Text_Tab3_2009" ], [ 2010, "整体发型_收藏", "Text_Tab3_2010" ], [ 2011, "前发_收藏", "Text_Tab3_2011" ], [ 2012, "后发_收藏", "Text_Tab3_2012" ], [ 2013, "左手_收藏", "Text_Tab3_2013" ], [ 2014, "右手_收藏", "Text_Tab3_2014" ], [ 2015, "背饰_收藏", "Text_Tab3_2015" ], [ 2016, "耳饰_收藏", "Text_Tab3_2016" ], [ 2017, "面饰_收藏", "Text_Tab3_2017" ], [ 2018, "臀部_收藏", "Text_Tab3_2018" ], [ 2019, "肩部_收藏", "Text_Tab3_2019" ], [ 2020, "特效_收藏", "Text_Tab3_2020" ], [ 2021, "拖尾_收藏", "Text_Tab3_1021" ] ];

class Tab3Config extends ConfigBase {
    constructor() {
        super(EXCELDATA$6);
    }
}

var foreign73 = Object.freeze({
    __proto__: null,
    Tab3Config: Tab3Config
});

const EXCELDATA$5 = [ [ "ID", "Name", "TaskType", "TaskItemType", "NextId", "TragetNum", "Coin", "Diamond" ], [ "", "", "", "", "", "", "", "" ], [ 1, "每日登录游戏（{0}/{1}）", 1, 1, 0, 1, 100, 1 ], [ 11, "每日在线时长5分钟（{0}/{1}）", 1, 11, 0, 5, 500, 1 ], [ 12, "每日在线时长10分钟（{0}/{1}）", 1, 12, 0, 10, 500, 1 ], [ 13, "每日在线时长15分钟（{0}/{1}）", 1, 13, 0, 15, 500, 1 ], [ 14, "每日在线时长20分钟（{0}/{1}）", 1, 14, 0, 20, 500, 10 ], [ 15, "每日在线时长25分钟（{0}/{1}）", 1, 15, 0, 25, 500, 30 ], [ 16, "每日在线时长30分钟（{0}/{1}）", 1, 16, 0, 30, 500, 40 ], [ 17, "每日在线时长40分钟（{0}/{1}）", 1, 17, 0, 40, 1e3, 50 ], [ 18, "每日在线时长50分钟（{0}/{1}）", 1, 18, 0, 50, 1e3, 60 ], [ 19, "每日在线时长60分钟（{0}/{1}）", 1, 19, 0, 60, 1e3, 1 ], [ 31, "每日击败1个玩家（{0}/{1}）", 1, 31, 0, 1, 20, 1 ], [ 32, "每日击败5个玩家（{0}/{1}）", 1, 32, 0, 5, 80, 1 ], [ 33, "每日击败10个玩家（{0}/{1}）", 1, 33, 0, 10, 100, 1 ], [ 34, "每日击败20个玩家（{0}/{1}）", 1, 34, 0, 20, 200, 1 ], [ 35, "每日击败30个玩家（{0}/{1}）", 1, 35, 0, 30, 200, 5 ], [ 36, "每日击败50个玩家（{0}/{1}）", 1, 36, 0, 50, 400, 10 ], [ 37, "每日击败100个玩家（{0}/{1}）", 1, 37, 0, 100, 1e3, 20 ], [ 38, "每日击败200个玩家（{0}/{1}）", 1, 38, 0, 200, 2e3, 50 ], [ 39, "每日击败300个玩家（{0}/{1}）", 1, 39, 0, 300, 2e3, 100 ], [ 101, "每周登录1天（{0}/{1}）", 2, 101, 0, 1, 1e3, 1 ], [ 102, "每周登录2天（{0}/{1}）", 2, 102, 0, 2, 1e3, 10 ], [ 103, "每周登录3天（{0}/{1}）", 2, 103, 0, 3, 1e3, 100 ], [ 104, "每周登录4天（{0}/{1}）", 2, 104, 0, 4, 1e3, 200 ], [ 105, "每周登录5天（{0}/{1}）", 2, 105, 0, 5, 1e3, 300 ], [ 106, "每周登录6天（{0}/{1}）", 2, 106, 0, 6, 1e3, 400 ], [ 107, "每周登录7天（{0}/{1}）", 2, 107, 0, 7, 1e3, 700 ] ];

class TaskConfig extends ConfigBase {
    constructor() {
        super(EXCELDATA$5);
    }
}

var foreign74 = Object.freeze({
    __proto__: null,
    TaskConfig: TaskConfig
});

const EXCELDATA$4 = [ [ "ID", "Describe", "AssetId", "SexType" ], [ "", "", "", "" ], [ 1, null, "497927", 2 ], [ 2, null, "497783", 2 ], [ 3, null, "458637", 2 ], [ 4, null, "437607", 2 ], [ 5, null, "299081", 2 ], [ 6, null, "224015", 2 ], [ 7, null, "221706", 2 ], [ 8, null, "217271", 2 ], [ 9, null, "211009", 2 ], [ 10, null, "141710", 2 ], [ 11, null, "137517", 2 ], [ 12, null, "137504", 2 ], [ 13, null, "137491", 2 ], [ 14, null, "137382", 2 ], [ 15, null, "134233", 2 ], [ 16, null, "127636", 2 ], [ 17, null, "119743", 2 ], [ 18, null, "116973", 2 ], [ 19, null, "67589", 2 ], [ 20, null, "66576", 2 ], [ 21, null, "65869", 2 ], [ 22, null, "65659", 2 ], [ 23, null, "64776", 2 ], [ 24, null, "64722", 2 ], [ 25, null, "64309", 2 ], [ 26, null, "64153", 2 ], [ 27, null, "63877", 2 ], [ 28, null, "63553", 2 ], [ 29, null, "63312", 2 ], [ 30, null, "62792", 2 ], [ 31, null, "62791", 2 ], [ 32, null, "62549", 2 ], [ 33, null, "60993", 2 ], [ 34, null, "64815", 1 ] ];

class TightsBottomConfig extends ConfigBase {
    constructor() {
        super(EXCELDATA$4);
    }
}

var foreign75 = Object.freeze({
    __proto__: null,
    TightsBottomConfig: TightsBottomConfig
});

const EXCELDATA$3 = [ [ "ID", "Describe", "AssetId", "SexType" ], [ "", "", "", "" ], [ 1, "弓道服", "59536", 2 ], [ 2, "毛衣外套", "59857", 2 ], [ 3, "拖尾婚纱", "60077", 2 ], [ 4, "蝴蝶结桃心裙", "59955", 2 ], [ 5, "恐龙玩偶服", "509868", 2 ], [ 6, "恐龙玩偶服", "509895", 1 ], [ 7, "礼服", "476302", 2 ], [ 8, "礼服", "458752", 1 ], [ 9, "战损休闲装", "458129", 1 ], [ 10, "披风长袖", "455507", 1 ], [ 11, "紧身衣", "64542", 1 ], [ 12, "长袍上衣", "504623", 1 ], [ 13, "礼服", "476242", 1 ], [ 14, "学士服", "264153", 1 ] ];

class TopConfig extends ConfigBase {
    constructor() {
        super(EXCELDATA$3);
    }
}

var foreign76 = Object.freeze({
    __proto__: null,
    TopConfig: TopConfig
});

const EXCELDATA$2 = [ [ "ID", "Describe", "AssetId", "Transform", "SexType" ], [ "", "", "", "", "" ], [ 1, null, "484538", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 2, null, "472914", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 3, null, "472706", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 4, null, "467037", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 5, null, "444603", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 6, null, "398522", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 7, null, "397400", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 8, null, "384139", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 9, null, "380860", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 10, null, "380858", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 11, null, "380849", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 12, null, "379886", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 13, null, "375147", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 14, null, "375146", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 15, null, "357366", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 16, null, "357364", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 17, null, "351325", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 18, null, "350256", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 19, null, "350163", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 20, null, "350055", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 21, null, "350053", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 22, null, "349960", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 23, null, "317495", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 24, null, "314952", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 25, null, "314951", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 26, null, "314950", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 27, null, "314949", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 28, null, "314948", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 29, null, "314947", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 30, null, "314946", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 31, null, "314945", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 32, null, "314944", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 33, null, "314943", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 34, null, "290033", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 35, null, "289529", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 36, null, "289528", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 37, null, "287117", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 38, null, "267975", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 39, null, "271639", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 40, null, "265670", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 41, null, "225996", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 42, null, "221187", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 43, null, "221186", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 44, null, "197804", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 45, null, "196217", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 46, null, "195115", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 47, null, "193220", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 48, null, "192273", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 49, null, "186344", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 50, null, "181013", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 51, null, "181011", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 52, null, "153613", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 53, null, "151528", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 54, null, "151527", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 55, null, "150907", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 56, null, "145513", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 57, null, "145510", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 58, null, "145509", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 59, null, "145508", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 60, null, "145507", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 61, null, "145506", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 62, null, "145505", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 63, null, "145504", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 64, null, "145503", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 65, null, "145502", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 66, null, "145500", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 67, null, "145499", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 68, null, "145498", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 69, null, "145497", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 70, null, "145496", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 71, null, "145495", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 72, null, "145494", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 73, null, "145493", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ], [ 74, null, "145492", [ "0", "0", "0", "0", "0", "0", "1", "1", "1" ], 0 ] ];

class TrailingsConfig extends ConfigBase {
    constructor() {
        super(EXCELDATA$2);
    }
}

var foreign78 = Object.freeze({
    __proto__: null,
    TrailingsConfig: TrailingsConfig
});

const EXCELDATA$1 = [ [ "ID", "TRAILING", "PRICETYPE", "PRICE", "NAME" ], [ "", "", "", "", "" ], [ 1, "14317", 1, [ 1, 8888 ], "烟雾拖尾" ], [ 2, "14319", 1, [ 1, 8888 ], "烟雾拖尾" ], [ 3, "27399", 1, [ 1, 8888 ], "烟雾拖尾" ], [ 4, "27447", 1, [ 1, 8888 ], "粒子拖尾" ], [ 5, "30497", 1, [ 1, 8888 ], "烟雾拖尾" ], [ 6, "88020", 1, [ 1, 8888 ], "光束拖尾" ], [ 7, "88442", 1, [ 1, 8888 ], "光束拖尾" ], [ 8, "88443", 1, [ 1, 8888 ], "光束拖尾" ], [ 9, "88796", 1, [ 1, 8888 ], "烟雾拖尾" ], [ 10, "88794", 1, [ 1, 8888 ], "烟雾拖尾" ], [ 11, "88797", 1, [ 1, 8888 ], "烟雾拖尾" ], [ 12, "88798", 1, [ 1, 8888 ], "烟雾拖尾" ], [ 13, "89592", 1, [ 1, 8888 ], "光束拖尾" ], [ 14, "128512", 1, [ 1, 8888 ], "光束拖尾" ], [ 15, "128513", 1, [ 1, 8888 ], "光束拖尾" ], [ 16, "128514", 1, [ 1, 8888 ], "光束拖尾" ], [ 17, "128515", 1, [ 1, 8888 ], "光束拖尾" ], [ 18, "128516", 1, [ 1, 8888 ], "光束拖尾" ], [ 19, "128517", 1, [ 1, 8888 ], "光束拖尾" ], [ 20, "128518", 1, [ 1, 8888 ], "光束拖尾" ], [ 21, "146783", 1, [ 1, 8888 ], "烟雾拖尾" ], [ 22, "148710", 1, [ 1, 8888 ], "拖尾" ], [ 23, "150907", 1, [ 1, 8888 ], "水拖尾" ], [ 24, "145511", 1, [ 1, 8888 ], "火焰拖尾" ], [ 25, "151527", 1, [ 1, 8888 ], "烟雾拖尾" ], [ 26, "151528", 1, [ 1, 8888 ], "烟雾拖尾" ], [ 27, "153603", 1, [ 1, 8888 ], "拖尾" ], [ 28, "153613", 1, [ 1, 8888 ], "拖尾" ], [ 29, "128519", 1, [ 1, 8888 ], "光束拖尾" ], [ 30, "128520", 1, [ 1, 8888 ], "光束拖尾" ], [ 31, "145496", 1, [ 1, 8888 ], "烟雾拖尾" ], [ 32, "145506", 1, [ 1, 8888 ], "拖尾" ], [ 33, "128521", 1, [ 1, 8888 ], "光束拖尾" ], [ 34, "4399", 1, [ 1, 8888 ], "雷拖尾" ], [ 35, "27392", 1, [ 1, 8888 ], "彩虹拖尾" ], [ 36, "133481", 1, [ 1, 8888 ], "胎印拖尾" ], [ 37, "145492", 1, [ 1, 8888 ], "螺丝钉拖尾" ], [ 38, "145493", 1, [ 1, 8888 ], "足球拖尾" ], [ 39, "145494", 1, [ 1, 8888 ], "彩虹拖尾" ], [ 40, "145495", 1, [ 1, 8888 ], "糖果拖尾" ], [ 41, "145497", 1, [ 1, 8888 ], "奖杯拖尾" ], [ 42, "145498", 1, [ 1, 8888 ], "皇冠拖尾" ], [ 43, "145499", 1, [ 1, 8888 ], "爱心拖尾" ], [ 44, "145500", 1, [ 1, 8888 ], "骷髅拖尾" ], [ 45, "145502", 1, [ 1, 8888 ], "香蕉拖尾" ], [ 46, "145503", 1, [ 1, 8888 ], "雷电拖尾" ], [ 47, "145504", 1, [ 1, 8888 ], "雪花拖尾" ], [ 48, "145505", 1, [ 1, 8888 ], "2023拖尾" ], [ 49, "145507", 1, [ 1, 8888 ], "爆竹拖尾" ], [ 50, "145508", 1, [ 1, 8888 ], "烟花拖尾" ], [ 51, "145509", 1, [ 1, 8888 ], "礼物拖尾" ], [ 52, "145510", 1, [ 1, 8888 ], "钞票拖尾" ], [ 53, "145512", 1, [ 1, 8888 ], "泡泡拖尾" ], [ 54, "145513", 1, [ 1, 8888 ], "彩带拖尾" ], [ 55, "186344", 1, [ 1, 8888 ], "便便拖尾" ], [ 56, "195115", 1, [ 1, 8888 ], "枫叶拖尾" ], [ 57, "196217", 1, [ 1, 8888 ], "六芒星拖尾" ], [ 58, "221186", 1, [ 1, 8888 ], "蝴蝶拖尾" ], [ 59, "221187", 1, [ 1, 8888 ], "冰淇淋拖尾" ], [ 60, "267975", 1, [ 1, 8888 ], "鸟拖尾" ], [ 61, "271639", 1, [ 1, 8888 ], "蝙蝠拖尾" ], [ 62, "289528", 1, [ 1, 8888 ], "祥云拖尾" ], [ 63, "290033", 1, [ 1, 8888 ], "爪印" ] ];

class TRAILINGConfig extends ConfigBase {
    constructor() {
        super(EXCELDATA$1);
    }
}

var foreign77 = Object.freeze({
    __proto__: null,
    TRAILINGConfig: TRAILINGConfig
});

const EXCELDATA = [ [ "ID", "Describe", "AssetId", "SexType" ], [ "", "", "", "" ], [ 1, null, "152735", 0 ], [ 2, null, "77447", 0 ], [ 3, null, "48629", 0 ], [ 4, null, "48041", 0 ], [ 5, null, "48040", 0 ], [ 6, null, "48039", 0 ], [ 7, null, "48038", 0 ], [ 8, null, "48037", 0 ], [ 9, null, "48036", 0 ], [ 10, null, "48034", 0 ], [ 11, null, "48033", 0 ], [ 12, null, "48032", 0 ], [ 13, null, "48031", 0 ], [ 14, null, "48030", 0 ], [ 15, null, "32112", 0 ], [ 16, null, "22660", 0 ], [ 17, null, "22616", 0 ] ];

class UpperHighlightConfig extends ConfigBase {
    constructor() {
        super(EXCELDATA);
    }
}

var foreign79 = Object.freeze({
    __proto__: null,
    UpperHighlightConfig: UpperHighlightConfig
});

class GameConfig {
    static initLanguage(languageIndex, getLanguageFun) {
        ConfigBase.initLanguage(languageIndex, getLanguageFun);
        this.configMap.clear();
    }
    static getConfig(ConfigClass) {
        if (!this.configMap.has(ConfigClass.name)) {
            this.configMap.set(ConfigClass.name, new ConfigClass);
        }
        return this.configMap.get(ConfigClass.name);
    }
    static get AccessoriesGloves() {
        return this.getConfig(AccessoriesGlovesConfig);
    }
    static get ALongCoatTop() {
        return this.getConfig(ALongCoatTopConfig);
    }
    static get AncientMoldingOutfit() {
        return this.getConfig(AncientMoldingOutfitConfig);
    }
    static get BackHair() {
        return this.getConfig(BackHairConfig);
    }
    static get Back() {
        return this.getConfig(BackConfig);
    }
    static get Blush() {
        return this.getConfig(BlushConfig);
    }
    static get BodyType() {
        return this.getConfig(BodyTypeConfig);
    }
    static get BootsShoes() {
        return this.getConfig(BootsShoesConfig);
    }
    static get Bottom() {
        return this.getConfig(BottomConfig);
    }
    static get ColorValue() {
        return this.getConfig(ColorValueConfig);
    }
    static get DailyStylingOutfit1() {
        return this.getConfig(DailyStylingOutfit1Config);
    }
    static get DailyStylingOutfit2() {
        return this.getConfig(DailyStylingOutfit2Config);
    }
    static get Ear() {
        return this.getConfig(EarConfig);
    }
    static get Effects() {
        return this.getConfig(EffectsConfig);
    }
    static get EverydayShoes() {
        return this.getConfig(EverydayShoesConfig);
    }
    static get Expression() {
        return this.getConfig(ExpressionConfig);
    }
    static get Eyebrows() {
        return this.getConfig(EyebrowsConfig);
    }
    static get Eyelashes() {
        return this.getConfig(EyelashesConfig);
    }
    static get Eyeshadow() {
        return this.getConfig(EyeshadowConfig);
    }
    static get FaceExpression() {
        return this.getConfig(FaceExpressionConfig);
    }
    static get FaceTattoo() {
        return this.getConfig(FaceTattooConfig);
    }
    static get Face() {
        return this.getConfig(FaceConfig);
    }
    static get Facing() {
        return this.getConfig(FacingConfig);
    }
    static get FantasyModelingOutfit() {
        return this.getConfig(FantasyModelingOutfitConfig);
    }
    static get FootCoverShoes() {
        return this.getConfig(FootCoverShoesConfig);
    }
    static get FrontHair() {
        return this.getConfig(FrontHairConfig);
    }
    static get FullHair() {
        return this.getConfig(FullHairConfig);
    }
    static get GlovesGloves() {
        return this.getConfig(GlovesGlovesConfig);
    }
    static get Gloves() {
        return this.getConfig(GlovesConfig);
    }
    static get GUN() {
        return this.getConfig(GUNConfig);
    }
    static get HeroStylingOutfit() {
        return this.getConfig(HeroStylingOutfitConfig);
    }
    static get HighHeelsShoes() {
        return this.getConfig(HighHeelsShoesConfig);
    }
    static get Hip() {
        return this.getConfig(HipConfig);
    }
    static get HolidayStylingOutfit() {
        return this.getConfig(HolidayStylingOutfitConfig);
    }
    static get Language() {
        return this.getConfig(LanguageConfig);
    }
    static get LeftHand() {
        return this.getConfig(LeftHandConfig);
    }
    static get Lens() {
        return this.getConfig(LensConfig);
    }
    static get LipMakeup() {
        return this.getConfig(LipMakeupConfig);
    }
    static get LongPantsBottom() {
        return this.getConfig(LongPantsBottomConfig);
    }
    static get LongSinglePieceTop() {
        return this.getConfig(LongSinglePieceTopConfig);
    }
    static get LongSkirtBottom() {
        return this.getConfig(LongSkirtBottomConfig);
    }
    static get LowerHighlight() {
        return this.getConfig(LowerHighlightConfig);
    }
    static get Morph() {
        return this.getConfig(MorphConfig);
    }
    static get MuppetStylingOutfit() {
        return this.getConfig(MuppetStylingOutfitConfig);
    }
    static get Music() {
        return this.getConfig(MusicConfig);
    }
    static get NakedDressShoes() {
        return this.getConfig(NakedDressShoesConfig);
    }
    static get Outfit() {
        return this.getConfig(OutfitConfig);
    }
    static get Pet() {
        return this.getConfig(PetConfig);
    }
    static get PupilStyle() {
        return this.getConfig(PupilStyleConfig);
    }
    static get RightHand() {
        return this.getConfig(RightHandConfig);
    }
    static get ROLE() {
        return this.getConfig(ROLEConfig);
    }
    static get ScienceFictionStylingOutfit() {
        return this.getConfig(ScienceFictionStylingOutfitConfig);
    }
    static get Shoes() {
        return this.getConfig(ShoesConfig);
    }
    static get ShopItem() {
        return this.getConfig(ShopItemConfig);
    }
    static get ShortJacketTop() {
        return this.getConfig(ShortJacketTopConfig);
    }
    static get ShortsBottom() {
        return this.getConfig(ShortsBottomConfig);
    }
    static get ShortSinglePieceTop() {
        return this.getConfig(ShortSinglePieceTopConfig);
    }
    static get ShortSkirtBottom() {
        return this.getConfig(ShortSkirtBottomConfig);
    }
    static get Shoulder() {
        return this.getConfig(ShoulderConfig);
    }
    static get SkinTone() {
        return this.getConfig(SkinToneConfig);
    }
    static get SportsShoesShoes() {
        return this.getConfig(SportsShoesShoesConfig);
    }
    static get SuitTop() {
        return this.getConfig(SuitTopConfig);
    }
    static get Tab1() {
        return this.getConfig(Tab1Config);
    }
    static get Tab2() {
        return this.getConfig(Tab2Config);
    }
    static get Tab3() {
        return this.getConfig(Tab3Config);
    }
    static get Task() {
        return this.getConfig(TaskConfig);
    }
    static get TightsBottom() {
        return this.getConfig(TightsBottomConfig);
    }
    static get Top() {
        return this.getConfig(TopConfig);
    }
    static get Trailings() {
        return this.getConfig(TrailingsConfig);
    }
    static get TRAILING() {
        return this.getConfig(TRAILINGConfig);
    }
    static get UpperHighlight() {
        return this.getConfig(UpperHighlightConfig);
    }
}

GameConfig.configMap = new Map;

var foreign35 = Object.freeze({
    __proto__: null,
    GameConfig: GameConfig
});

class ActivityData extends Subdata {
    constructor() {
        super(...arguments);
        this.whatDay = 0;
        this.minutes = 0;
    }
    initDefaultData() {
        this.whatDay = 0;
        this.minutes = 0;
    }
    setData(whatDay) {
        this.whatDay = whatDay;
        this.minutes = 0;
        this.save(true);
    }
    setMinutes(minutes) {
        this.minutes = minutes;
        this.save(true);
    }
}

__decorate([ Decorator.persistence() ], ActivityData.prototype, "whatDay", void 0);

__decorate([ Decorator.persistence() ], ActivityData.prototype, "minutes", void 0);

var foreign81 = Object.freeze({
    __proto__: null,
    default: ActivityData
});

var EventType;

(function(EventType) {
    EventType["OnOffMainHUD"] = "OnOffMainHUD";
    EventType["TryOutGun"] = "TryOutGun";
    EventType["OnOffWeaponUI"] = "OnOffWeaponUI";
})(EventType || (EventType = {}));

var foreign149 = Object.freeze({
    __proto__: null,
    get EventType() {
        return EventType;
    }
});

let LoadingPanel_Generate = class LoadingPanel_Generate extends UIScript {
    get mMainCanvas() {
        if (!this.mMainCanvas_Internal && this.uiWidgetBase) {
            this.mMainCanvas_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/MainCanvas/mMainCanvas");
        }
        return this.mMainCanvas_Internal;
    }
    get mLoadingImage() {
        if (!this.mLoadingImage_Internal && this.uiWidgetBase) {
            this.mLoadingImage_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/MainCanvas/mMainCanvas/mLoadingImage");
        }
        return this.mLoadingImage_Internal;
    }
    get mLoadingTextblock() {
        if (!this.mLoadingTextblock_Internal && this.uiWidgetBase) {
            this.mLoadingTextblock_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/MainCanvas/mMainCanvas/mLoadingTextblock");
        }
        return this.mLoadingTextblock_Internal;
    }
    onAwake() {
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        this.initLanguage(this.mLoadingTextblock);
    }
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) {}
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    hide() {
        mw.UIService.hideUI(this);
    }
};

LoadingPanel_Generate = __decorate([ UIBind("UI/tools/LoadingPanel.ui") ], LoadingPanel_Generate);

var LoadingPanel_Generate$1 = LoadingPanel_Generate;

var foreign200 = Object.freeze({
    __proto__: null,
    default: LoadingPanel_Generate$1
});

class LoadingPanel extends LoadingPanel_Generate$1 {
    onStart() {
        this.canUpdate = false;
        this.layer = mw.UILayerTop;
    }
    onUpdate(dt) {
        this.mLoadingImage.renderTransformAngle = this.mLoadingImage.renderTransformAngle + 180 * dt;
        if (this.mLoadingImage.renderTransformAngle > 180) this.mLoadingImage.renderTransformAngle = -180 + this.mLoadingImage.renderTransformAngle - 180;
    }
    setLock(isLock) {
        if (isLock) {
            this.canUpdate = true;
            this.rootCanvas.visibility = mw.SlateVisibility.SelfHitTestInvisible;
        } else {
            this.canUpdate = false;
            this.rootCanvas.visibility = mw.SlateVisibility.Collapsed;
        }
    }
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    hide() {
        mw.UIService.hideUI(this);
    }
}

var foreign158 = Object.freeze({
    __proto__: null,
    default: LoadingPanel
});

class ExecutorBase {
    execute() {}
}

class Executor extends ExecutorBase {
    execute() {
        this.func(this.arg);
    }
}

class AsyncExecutor extends ExecutorBase {
    constructor() {
        super(...arguments);
        this.lockInput = true;
    }
    async execute() {
        await this.asyncFunc(this.arg);
    }
}

class ExecutorManager {
    constructor() {
        this.executorList = new Array;
        this.running = false;
        this.index = 0;
        this.doneCb = new Action;
    }
    static get instance() {
        if (ExecutorManager._instance == undefined) ExecutorManager._instance = new ExecutorManager;
        return ExecutorManager._instance;
    }
    pushExecutor(func, arg = undefined, record = false, resetFunc = undefined) {
        let executor = new Executor;
        executor.func = func;
        executor.arg = arg;
        executor.record = record;
        executor.resetFunc = resetFunc;
        this.push(executor);
    }
    pushAsyncExecutor(asyncFunc, arg = undefined, isAwait = true, record = false, resetFunc = undefined, lockInput = true) {
        let asyncExecutor = new AsyncExecutor;
        asyncExecutor.asyncFunc = asyncFunc;
        asyncExecutor.arg = arg;
        asyncExecutor.isAwait = isAwait;
        asyncExecutor.record = record;
        asyncExecutor.lockInput = lockInput;
        asyncExecutor.resetFunc = resetFunc;
        this.push(asyncExecutor);
    }
    push(executor) {
        this.executorList.push(executor);
        this.run();
    }
    async run() {
        if (this.running) return;
        this.running = true;
        let executor = this.executorList[this.index];
        UIService.getUI(LoadingPanel).show();
        while (executor) {
            try {
                if (executor instanceof Executor) {
                    executor.execute();
                } else {
                    let asyncExecutor = executor;
                    UIService.getUI(LoadingPanel).setLock(asyncExecutor.lockInput);
                    if (asyncExecutor.isAwait) {
                        await this.runExecute(asyncExecutor.execute.bind(asyncExecutor));
                    } else {
                        asyncExecutor.execute();
                    }
                }
            } catch (error) {
                console.error(`命令执行异常:${error}`);
            }
            this.index++;
            executor = this.executorList[this.index];
        }
        UIService.getUI(LoadingPanel).hide();
        this.running = false;
        this.doneCb.call();
    }
    runExecute(exeFunc) {
        return new Promise((async resolve => {
            let timeOut = setTimeout((() => {
                console.error(`命令执行10秒超时`);
                return resolve();
            }), 10 * 1e3);
            await exeFunc();
            clearTimeout(timeOut);
            return resolve();
        }));
    }
    awaitDone() {
        return new Promise((resolve => {
            if (!this.running) return resolve();
            const doneFunc = () => {
                this.doneCb.remove(doneFunc, this);
                return resolve();
            };
            this.doneCb.add(doneFunc, this);
        }));
    }
}

ExecutorManager._instance = undefined;

var foreign160 = Object.freeze({
    __proto__: null,
    default: ExecutorManager
});

let CoinPanel_Generate = class CoinPanel_Generate extends UIScript {
    get mCoinCanvas() {
        if (!this.mCoinCanvas_Internal && this.uiWidgetBase) {
            this.mCoinCanvas_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/CoinCanvas/mCoinCanvas");
        }
        return this.mCoinCanvas_Internal;
    }
    get mCoinTextBlock() {
        if (!this.mCoinTextBlock_Internal && this.uiWidgetBase) {
            this.mCoinTextBlock_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/CoinCanvas/mCoinCanvas/CoinCanvas/mCoinTextBlock");
        }
        return this.mCoinTextBlock_Internal;
    }
    get mAddCoinButton() {
        if (!this.mAddCoinButton_Internal && this.uiWidgetBase) {
            this.mAddCoinButton_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/CoinCanvas/mCoinCanvas/mAddCoinButton");
        }
        return this.mAddCoinButton_Internal;
    }
    get mDiamondCanvas() {
        if (!this.mDiamondCanvas_Internal && this.uiWidgetBase) {
            this.mDiamondCanvas_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/CoinCanvas/mDiamondCanvas");
        }
        return this.mDiamondCanvas_Internal;
    }
    get mDiamondTextBlock() {
        if (!this.mDiamondTextBlock_Internal && this.uiWidgetBase) {
            this.mDiamondTextBlock_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/CoinCanvas/mDiamondCanvas/DiamondCanvas/mDiamondTextBlock");
        }
        return this.mDiamondTextBlock_Internal;
    }
    get mAddDiamondButton() {
        if (!this.mAddDiamondButton_Internal && this.uiWidgetBase) {
            this.mAddDiamondButton_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/CoinCanvas/mDiamondCanvas/mAddDiamondButton");
        }
        return this.mAddDiamondButton_Internal;
    }
    onAwake() {
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        this.mAddCoinButton.onClicked.add((() => {
            Event.dispatchToLocal("PlayButtonClick", "mAddCoinButton");
        }));
        this.mAddCoinButton.touchMethod = mw.ButtonTouchMethod.PreciseTap;
        this.mAddDiamondButton.onClicked.add((() => {
            Event.dispatchToLocal("PlayButtonClick", "mAddDiamondButton");
        }));
        this.mAddDiamondButton.touchMethod = mw.ButtonTouchMethod.PreciseTap;
        this.initLanguage(this.mCoinTextBlock);
        this.initLanguage(this.mDiamondTextBlock);
    }
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) {}
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    hide() {
        mw.UIService.hideUI(this);
    }
};

CoinPanel_Generate = __decorate([ UIBind("UI/module/CoinModule/CoinPanel.ui") ], CoinPanel_Generate);

var CoinPanel_Generate$1 = CoinPanel_Generate;

var foreign168 = Object.freeze({
    __proto__: null,
    default: CoinPanel_Generate$1
});

class CoinModuleC extends ModuleC {
    constructor() {
        super(...arguments);
        this.coinPanel = null;
        this.adPanel = null;
        this.confirmPanel = null;
        this.onAddCoinAction = new Action;
        this.onAddDiamondAction = new Action;
        this.coin = 0;
        this.diamond = 0;
    }
    get getCoinPanel() {
        if (this.coinPanel == null) {
            this.coinPanel = mw.UIService.getUI(CoinPanel);
        }
        return this.coinPanel;
    }
    get getAdPanel() {
        if (this.adPanel == null) {
            this.adPanel = UIService.getUI(AdPanel);
        }
        return this.adPanel;
    }
    get getConfirmPanel() {
        if (this.confirmPanel == null) {
            this.confirmPanel = UIService.getUI(ConfirmPanel);
        }
        return this.confirmPanel;
    }
    onStart() {
        this.initUIPanel();
        this.bindEventAction();
    }
    initUIPanel() {
        this.coinPanel = mw.UIService.getUI(CoinPanel);
        this.adPanel = UIService.getUI(AdPanel);
    }
    bindEventAction() {
        this.onAddCoinAction.add(this.getCoinByAd.bind(this));
        this.onAddDiamondAction.add(this.getDiamondByAd.bind(this));
    }
    onEnterScene(sceneType) {
        this.getCoinPanel.show();
        this.coin = this.data.coin;
        this.diamond = this.data.diamond;
        this.getCoinPanel.setCoinAndDiamond(this.coin, this.diamond);
    }
    setCoin(coin) {
        this.coin += coin;
        this.popupNotice(coin, true);
        if (this.coin < 0) this.coin = 0;
        this.server.net_setCoin(this.coin);
        this.getCoinPanel.setCoin(this.coin);
    }
    setDiamond(diamond) {
        this.diamond += diamond;
        this.popupNotice(diamond, false);
        if (this.diamond < 0) this.diamond = 0;
        this.server.net_setDiamond(this.diamond);
        this.getCoinPanel.setDiamond(this.diamond);
    }
    get getCoin() {
        return this.coin;
    }
    get getDiamond() {
        return this.diamond;
    }
    getCoinByAd() {
        this.getAdPanel.showRewardAd((() => {
            this.setCoin(GlobalData.addCoin);
        }), `免费领取${GlobalData.addCoin}金币`);
    }
    getDiamondByAd(diamond) {
        this.getAdPanel.showRewardAd((() => {
            this.setDiamond(GlobalData.addDiamond);
        }), `免费领取${GlobalData.addDiamond}个钻石`);
    }
    net_killPlayerAddCoin(coin) {
        this.coin += coin;
        this.popupNotice(coin, true);
        this.getCoinPanel.setCoin(this.coin);
    }
    popupNotice(num, isCoin) {
        if (num == 0) return;
        Notice.showDownNotice("<color=#" + (num > 0 ? "yellow>" : "red>") + (num > 0 ? "获得" : "花费") + (isCoin ? "金币" : "钻石") + num + "</color>");
    }
}

var foreign87 = Object.freeze({
    __proto__: null,
    default: CoinModuleC
});

class CoinPanel extends CoinPanel_Generate$1 {
    constructor() {
        super(...arguments);
        this.coinModuleC = null;
    }
    get getCoinModuleC() {
        if (this.coinModuleC == null) {
            this.coinModuleC = ModuleService.getModule(CoinModuleC);
        }
        return this.coinModuleC;
    }
    onStart() {
        this.canUpdate = false;
        this.layer = UILayerMiddle;
        this.bindButtons();
    }
    bindButtons() {
        this.mAddCoinButton.onClicked.add(this.bindAddCoinButton.bind(this));
        this.mAddDiamondButton.onClicked.add(this.bindAddDiamondButton.bind(this));
    }
    bindAddCoinButton() {
        this.getCoinModuleC.onAddCoinAction.call();
    }
    bindAddDiamondButton() {
        this.getCoinModuleC.onAddDiamondAction.call();
    }
    setCoin(coin) {
        this.mCoinTextBlock.text = coin + "";
    }
    setDiamond(diamond) {
        this.mDiamondTextBlock.text = diamond + "";
    }
    setCoinAndDiamond(coin, diamond) {
        this.mDiamondTextBlock.text = diamond + "";
        this.mCoinTextBlock.text = coin + "";
    }
}

var foreign89 = Object.freeze({
    __proto__: null,
    default: CoinPanel
});

class HUDData extends Subdata {
    constructor() {
        super(...arguments);
        this.fireScale = .05;
        this.controlScale = .3;
        this.bgmVolume = 1;
        this.soundVolume = 1;
    }
    initDefaultData() {
        this.fireScale = .05;
        this.controlScale = .3;
        this.bgmVolume = 1;
        this.soundVolume = 1;
    }
}

__decorate([ Decorator.persistence() ], HUDData.prototype, "fireScale", void 0);

__decorate([ Decorator.persistence() ], HUDData.prototype, "controlScale", void 0);

__decorate([ Decorator.persistence() ], HUDData.prototype, "bgmVolume", void 0);

__decorate([ Decorator.persistence() ], HUDData.prototype, "soundVolume", void 0);

class KillTipData {}

var KillTipType;

(function(KillTipType) {
    KillTipType[KillTipType["None"] = 0] = "None";
    KillTipType[KillTipType["Killer"] = 1] = "Killer";
    KillTipType[KillTipType["Killed"] = 2] = "Killed";
    KillTipType[KillTipType["revenge"] = 3] = "revenge";
})(KillTipType || (KillTipType = {}));

var foreign97 = Object.freeze({
    __proto__: null,
    HUDData: HUDData,
    KillTipData: KillTipData,
    get KillTipType() {
        return KillTipType;
    }
});

let HUDPanel_Generate = class HUDPanel_Generate extends UIScript {
    get mVirtualJoystickPanel() {
        if (!this.mVirtualJoystickPanel_Internal && this.uiWidgetBase) {
            this.mVirtualJoystickPanel_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/MainCanvas/mVirtualJoystickPanel");
        }
        return this.mVirtualJoystickPanel_Internal;
    }
    get mTouchPad() {
        if (!this.mTouchPad_Internal && this.uiWidgetBase) {
            this.mTouchPad_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/MainCanvas/mTouchPad");
        }
        return this.mTouchPad_Internal;
    }
    get mRedCountTextBlock() {
        if (!this.mRedCountTextBlock_Internal && this.uiWidgetBase) {
            this.mRedCountTextBlock_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/VsCanvas/RedVsCanvas/mRedCountTextBlock");
        }
        return this.mRedCountTextBlock_Internal;
    }
    get mBlueCountTextBlock() {
        if (!this.mBlueCountTextBlock_Internal && this.uiWidgetBase) {
            this.mBlueCountTextBlock_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/VsCanvas/BlueVsCanvas/mBlueCountTextBlock");
        }
        return this.mBlueCountTextBlock_Internal;
    }
    get mActivityButton() {
        if (!this.mActivityButton_Internal && this.uiWidgetBase) {
            this.mActivityButton_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/LeftButtonCanvas/ActivityCanvas/mActivityButton");
        }
        return this.mActivityButton_Internal;
    }
    get mActivityPointImage() {
        if (!this.mActivityPointImage_Internal && this.uiWidgetBase) {
            this.mActivityPointImage_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/LeftButtonCanvas/ActivityCanvas/mActivityPointImage");
        }
        return this.mActivityPointImage_Internal;
    }
    get mSetButton() {
        if (!this.mSetButton_Internal && this.uiWidgetBase) {
            this.mSetButton_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/RightButtonCanvas/SetCanvas/mSetButton");
        }
        return this.mSetButton_Internal;
    }
    get mSetButtonTextBlock() {
        if (!this.mSetButtonTextBlock_Internal && this.uiWidgetBase) {
            this.mSetButtonTextBlock_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/RightButtonCanvas/SetCanvas/mSetButtonTextBlock");
        }
        return this.mSetButtonTextBlock_Internal;
    }
    get mRankButton() {
        if (!this.mRankButton_Internal && this.uiWidgetBase) {
            this.mRankButton_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/RightButtonCanvas/RankCanvas/mRankButton");
        }
        return this.mRankButton_Internal;
    }
    get mRankButtonTextBlock() {
        if (!this.mRankButtonTextBlock_Internal && this.uiWidgetBase) {
            this.mRankButtonTextBlock_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/RightButtonCanvas/RankCanvas/mRankButtonTextBlock");
        }
        return this.mRankButtonTextBlock_Internal;
    }
    get mTaskButton() {
        if (!this.mTaskButton_Internal && this.uiWidgetBase) {
            this.mTaskButton_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/RightButtonCanvas/TaskCanvas/mTaskButton");
        }
        return this.mTaskButton_Internal;
    }
    get mTaskPointImage() {
        if (!this.mTaskPointImage_Internal && this.uiWidgetBase) {
            this.mTaskPointImage_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/RightButtonCanvas/TaskCanvas/mTaskPointImage");
        }
        return this.mTaskPointImage_Internal;
    }
    get mTaskBgImage() {
        if (!this.mTaskBgImage_Internal && this.uiWidgetBase) {
            this.mTaskBgImage_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/RightButtonCanvas/TaskCanvas/mTaskBgImage");
        }
        return this.mTaskBgImage_Internal;
    }
    get mTaskTextBlock() {
        if (!this.mTaskTextBlock_Internal && this.uiWidgetBase) {
            this.mTaskTextBlock_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/RightButtonCanvas/TaskCanvas/mTaskTextBlock");
        }
        return this.mTaskTextBlock_Internal;
    }
    get mTeamButton() {
        if (!this.mTeamButton_Internal && this.uiWidgetBase) {
            this.mTeamButton_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/RightButtonCanvas/TeamCanvas/mTeamButton");
        }
        return this.mTeamButton_Internal;
    }
    get mTeamBgImage() {
        if (!this.mTeamBgImage_Internal && this.uiWidgetBase) {
            this.mTeamBgImage_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/RightButtonCanvas/TeamCanvas/mTeamBgImage");
        }
        return this.mTeamBgImage_Internal;
    }
    get mTeamIconImage() {
        if (!this.mTeamIconImage_Internal && this.uiWidgetBase) {
            this.mTeamIconImage_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/RightButtonCanvas/TeamCanvas/mTeamIconImage");
        }
        return this.mTeamIconImage_Internal;
    }
    get mTeamTextBlock() {
        if (!this.mTeamTextBlock_Internal && this.uiWidgetBase) {
            this.mTeamTextBlock_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/RightButtonCanvas/TeamCanvas/mTeamTextBlock");
        }
        return this.mTeamTextBlock_Internal;
    }
    get mShopButton() {
        if (!this.mShopButton_Internal && this.uiWidgetBase) {
            this.mShopButton_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/RightButtonCanvas/ShopCanvas/mShopButton");
        }
        return this.mShopButton_Internal;
    }
    get mShopTextBlock() {
        if (!this.mShopTextBlock_Internal && this.uiWidgetBase) {
            this.mShopTextBlock_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/RightButtonCanvas/ShopCanvas/mShopTextBlock");
        }
        return this.mShopTextBlock_Internal;
    }
    get mRoleButton() {
        if (!this.mRoleButton_Internal && this.uiWidgetBase) {
            this.mRoleButton_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/RightButtonCanvas/RoleCanvas/mRoleButton");
        }
        return this.mRoleButton_Internal;
    }
    get mRoleTextBlock() {
        if (!this.mRoleTextBlock_Internal && this.uiWidgetBase) {
            this.mRoleTextBlock_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/RightButtonCanvas/RoleCanvas/mRoleTextBlock");
        }
        return this.mRoleTextBlock_Internal;
    }
    get mOpenShareImage() {
        if (!this.mOpenShareImage_Internal && this.uiWidgetBase) {
            this.mOpenShareImage_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/RightButtonCanvas/mOpenShareImage");
        }
        return this.mOpenShareImage_Internal;
    }
    get mOpenShareButton() {
        if (!this.mOpenShareButton_Internal && this.uiWidgetBase) {
            this.mOpenShareButton_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/RightButtonCanvas/mOpenShareImage/mOpenShareButton");
        }
        return this.mOpenShareButton_Internal;
    }
    get mShareTextBlock() {
        if (!this.mShareTextBlock_Internal && this.uiWidgetBase) {
            this.mShareTextBlock_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/RightButtonCanvas/mOpenShareImage/mShareTextBlock");
        }
        return this.mShareTextBlock_Internal;
    }
    get mIconmage() {
        if (!this.mIconmage_Internal && this.uiWidgetBase) {
            this.mIconmage_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/PlayerCanvas/PlayerIconCanvas/mIconmage");
        }
        return this.mIconmage_Internal;
    }
    get mRankTextBlock() {
        if (!this.mRankTextBlock_Internal && this.uiWidgetBase) {
            this.mRankTextBlock_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/PlayerCanvas/RankCanvas/mRankTextBlock");
        }
        return this.mRankTextBlock_Internal;
    }
    get mHpProgressBar() {
        if (!this.mHpProgressBar_Internal && this.uiWidgetBase) {
            this.mHpProgressBar_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/PlayerCanvas/HpCanvas/mHpProgressBar");
        }
        return this.mHpProgressBar_Internal;
    }
    get mHpTextBlock() {
        if (!this.mHpTextBlock_Internal && this.uiWidgetBase) {
            this.mHpTextBlock_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/PlayerCanvas/HpCanvas/mHpTextBlock");
        }
        return this.mHpTextBlock_Internal;
    }
    get mKillTipCountCanvas() {
        if (!this.mKillTipCountCanvas_Internal && this.uiWidgetBase) {
            this.mKillTipCountCanvas_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/KillStreakCanvas/mKillTipCountCanvas");
        }
        return this.mKillTipCountCanvas_Internal;
    }
    get mKillTipTextBlock1() {
        if (!this.mKillTipTextBlock1_Internal && this.uiWidgetBase) {
            this.mKillTipTextBlock1_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/KillStreakCanvas/mKillTipCountCanvas/mKillTipTextBlock1");
        }
        return this.mKillTipTextBlock1_Internal;
    }
    get mKillTipTextBlock2() {
        if (!this.mKillTipTextBlock2_Internal && this.uiWidgetBase) {
            this.mKillTipTextBlock2_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/KillStreakCanvas/mKillTipCountCanvas/mKillTipTextBlock2");
        }
        return this.mKillTipTextBlock2_Internal;
    }
    get mKillTipTextBlock3() {
        if (!this.mKillTipTextBlock3_Internal && this.uiWidgetBase) {
            this.mKillTipTextBlock3_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/KillStreakCanvas/mKillTipTextBlock3");
        }
        return this.mKillTipTextBlock3_Internal;
    }
    get mKillTipCanvas() {
        if (!this.mKillTipCanvas_Internal && this.uiWidgetBase) {
            this.mKillTipCanvas_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mKillTipCanvas");
        }
        return this.mKillTipCanvas_Internal;
    }
    get mInvincibleCanvas() {
        if (!this.mInvincibleCanvas_Internal && this.uiWidgetBase) {
            this.mInvincibleCanvas_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mInvincibleCanvas");
        }
        return this.mInvincibleCanvas_Internal;
    }
    get mInvincibleProgressBar() {
        if (!this.mInvincibleProgressBar_Internal && this.uiWidgetBase) {
            this.mInvincibleProgressBar_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mInvincibleCanvas/mInvincibleProgressBar");
        }
        return this.mInvincibleProgressBar_Internal;
    }
    get mInvincibleTextBlock() {
        if (!this.mInvincibleTextBlock_Internal && this.uiWidgetBase) {
            this.mInvincibleTextBlock_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mInvincibleCanvas/mInvincibleTextBlock");
        }
        return this.mInvincibleTextBlock_Internal;
    }
    get mDeadCanvas() {
        if (!this.mDeadCanvas_Internal && this.uiWidgetBase) {
            this.mDeadCanvas_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mDeadCanvas");
        }
        return this.mDeadCanvas_Internal;
    }
    get mDeadCountDownTextBlock() {
        if (!this.mDeadCountDownTextBlock_Internal && this.uiWidgetBase) {
            this.mDeadCountDownTextBlock_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mDeadCanvas/mDeadCountDownTextBlock");
        }
        return this.mDeadCountDownTextBlock_Internal;
    }
    get mSetCanvas() {
        if (!this.mSetCanvas_Internal && this.uiWidgetBase) {
            this.mSetCanvas_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mSetCanvas");
        }
        return this.mSetCanvas_Internal;
    }
    get mFireCanvas() {
        if (!this.mFireCanvas_Internal && this.uiWidgetBase) {
            this.mFireCanvas_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mFireCanvas");
        }
        return this.mFireCanvas_Internal;
    }
    get mFireProgressBar() {
        if (!this.mFireProgressBar_Internal && this.uiWidgetBase) {
            this.mFireProgressBar_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mFireCanvas/mFireProgressBar");
        }
        return this.mFireProgressBar_Internal;
    }
    get mControlCanvas() {
        if (!this.mControlCanvas_Internal && this.uiWidgetBase) {
            this.mControlCanvas_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mControlCanvas");
        }
        return this.mControlCanvas_Internal;
    }
    get mControlProgressBar() {
        if (!this.mControlProgressBar_Internal && this.uiWidgetBase) {
            this.mControlProgressBar_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mControlCanvas/mControlProgressBar");
        }
        return this.mControlProgressBar_Internal;
    }
    get mBgmCanvas() {
        if (!this.mBgmCanvas_Internal && this.uiWidgetBase) {
            this.mBgmCanvas_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mBgmCanvas");
        }
        return this.mBgmCanvas_Internal;
    }
    get mBgmProgressBar() {
        if (!this.mBgmProgressBar_Internal && this.uiWidgetBase) {
            this.mBgmProgressBar_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mBgmCanvas/mBgmProgressBar");
        }
        return this.mBgmProgressBar_Internal;
    }
    get mSoundCanvas() {
        if (!this.mSoundCanvas_Internal && this.uiWidgetBase) {
            this.mSoundCanvas_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mSoundCanvas");
        }
        return this.mSoundCanvas_Internal;
    }
    get mSoundProgressBar() {
        if (!this.mSoundProgressBar_Internal && this.uiWidgetBase) {
            this.mSoundProgressBar_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mSoundCanvas/mSoundProgressBar");
        }
        return this.mSoundProgressBar_Internal;
    }
    get mSetCloseButton() {
        if (!this.mSetCloseButton_Internal && this.uiWidgetBase) {
            this.mSetCloseButton_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mSetCanvas/SetBgCanvas/mSetCloseButton");
        }
        return this.mSetCloseButton_Internal;
    }
    get mResetPosButton() {
        if (!this.mResetPosButton_Internal && this.uiWidgetBase) {
            this.mResetPosButton_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mSetCanvas/SetBgCanvas/mResetPosButton");
        }
        return this.mResetPosButton_Internal;
    }
    get mMorphCanvas() {
        if (!this.mMorphCanvas_Internal && this.uiWidgetBase) {
            this.mMorphCanvas_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mMorphCanvas");
        }
        return this.mMorphCanvas_Internal;
    }
    get mMorphButton() {
        if (!this.mMorphButton_Internal && this.uiWidgetBase) {
            this.mMorphButton_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mMorphCanvas/mMorphButton");
        }
        return this.mMorphButton_Internal;
    }
    get mUnMorphCanvas() {
        if (!this.mUnMorphCanvas_Internal && this.uiWidgetBase) {
            this.mUnMorphCanvas_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mUnMorphCanvas");
        }
        return this.mUnMorphCanvas_Internal;
    }
    get mUnMorphButton() {
        if (!this.mUnMorphButton_Internal && this.uiWidgetBase) {
            this.mUnMorphButton_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mUnMorphCanvas/mUnMorphButton");
        }
        return this.mUnMorphButton_Internal;
    }
    get mJumpCanvas() {
        if (!this.mJumpCanvas_Internal && this.uiWidgetBase) {
            this.mJumpCanvas_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mJumpCanvas");
        }
        return this.mJumpCanvas_Internal;
    }
    get mJumpButton() {
        if (!this.mJumpButton_Internal && this.uiWidgetBase) {
            this.mJumpButton_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mJumpCanvas/mJumpButton");
        }
        return this.mJumpButton_Internal;
    }
    onAwake() {
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        this.mOpenShareButton.onClicked.add((() => {
            Event.dispatchToLocal("PlayButtonClick", "mOpenShareButton");
        }));
        this.initLanguage(this.mOpenShareButton);
        this.mOpenShareButton.touchMethod = mw.ButtonTouchMethod.PreciseTap;
        this.mActivityButton.onClicked.add((() => {
            Event.dispatchToLocal("PlayButtonClick", "mActivityButton");
        }));
        this.mActivityButton.touchMethod = mw.ButtonTouchMethod.PreciseTap;
        this.mSetButton.onClicked.add((() => {
            Event.dispatchToLocal("PlayButtonClick", "mSetButton");
        }));
        this.mSetButton.touchMethod = mw.ButtonTouchMethod.PreciseTap;
        this.mRankButton.onClicked.add((() => {
            Event.dispatchToLocal("PlayButtonClick", "mRankButton");
        }));
        this.mRankButton.touchMethod = mw.ButtonTouchMethod.PreciseTap;
        this.mTaskButton.onClicked.add((() => {
            Event.dispatchToLocal("PlayButtonClick", "mTaskButton");
        }));
        this.mTaskButton.touchMethod = mw.ButtonTouchMethod.PreciseTap;
        this.mTeamButton.onClicked.add((() => {
            Event.dispatchToLocal("PlayButtonClick", "mTeamButton");
        }));
        this.mTeamButton.touchMethod = mw.ButtonTouchMethod.PreciseTap;
        this.mShopButton.onClicked.add((() => {
            Event.dispatchToLocal("PlayButtonClick", "mShopButton");
        }));
        this.mShopButton.touchMethod = mw.ButtonTouchMethod.PreciseTap;
        this.mRoleButton.onClicked.add((() => {
            Event.dispatchToLocal("PlayButtonClick", "mRoleButton");
        }));
        this.mRoleButton.touchMethod = mw.ButtonTouchMethod.PreciseTap;
        this.mSetCloseButton.onClicked.add((() => {
            Event.dispatchToLocal("PlayButtonClick", "mSetCloseButton");
        }));
        this.mSetCloseButton.touchMethod = mw.ButtonTouchMethod.PreciseTap;
        this.mResetPosButton.onClicked.add((() => {
            Event.dispatchToLocal("PlayButtonClick", "mResetPosButton");
        }));
        this.mResetPosButton.touchMethod = mw.ButtonTouchMethod.PreciseTap;
        this.mMorphButton.onClicked.add((() => {
            Event.dispatchToLocal("PlayButtonClick", "mMorphButton");
        }));
        this.mMorphButton.touchMethod = mw.ButtonTouchMethod.PreciseTap;
        this.mUnMorphButton.onClicked.add((() => {
            Event.dispatchToLocal("PlayButtonClick", "mUnMorphButton");
        }));
        this.mUnMorphButton.touchMethod = mw.ButtonTouchMethod.PreciseTap;
        this.mJumpButton.onClicked.add((() => {
            Event.dispatchToLocal("PlayButtonClick", "mJumpButton");
        }));
        this.mJumpButton.touchMethod = mw.ButtonTouchMethod.PreciseTap;
        this.initLanguage(this.mRedCountTextBlock);
        this.initLanguage(this.mBlueCountTextBlock);
        this.initLanguage(this.mSetButtonTextBlock);
        this.initLanguage(this.mRankButtonTextBlock);
        this.initLanguage(this.mTaskTextBlock);
        this.initLanguage(this.mTeamTextBlock);
        this.initLanguage(this.mShopTextBlock);
        this.initLanguage(this.mRoleTextBlock);
        this.initLanguage(this.mShareTextBlock);
        this.initLanguage(this.mRankTextBlock);
        this.initLanguage(this.mHpTextBlock);
        this.initLanguage(this.mKillTipTextBlock1);
        this.initLanguage(this.mKillTipTextBlock2);
        this.initLanguage(this.mKillTipTextBlock3);
        this.initLanguage(this.mInvincibleTextBlock);
        this.initLanguage(this.mDeadCountDownTextBlock);
        this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/VsCanvas/RedVsCanvas/RedVsTextBlock"));
        this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/VsCanvas/BlueVsCanvas/BlueVsTextBlock"));
        this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/PlayerCanvas/HpCanvas/HpTextBlock"));
        this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/mDeadCanvas/DeadTextBlock"));
        this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/mDeadCanvas/DeadTipsTextBlock"));
        this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/mSetCanvas/SetBgCanvas/SetTextBlock"));
        this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mFireCanvas/FireTextBlock"));
        this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mFireCanvas/LowFireTextBlock"));
        this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mFireCanvas/MiddleFireTextBlock"));
        this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mFireCanvas/HighFireTextBlock"));
        this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mControlCanvas/ControlTextBlock"));
        this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mControlCanvas/LowControlTextBlock"));
        this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mControlCanvas/MiddleControlTextBlock"));
        this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mControlCanvas/HighControlTextBlock"));
        this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mBgmCanvas/BgmTextBlock"));
        this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mBgmCanvas/LowBgmTextBlock"));
        this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mBgmCanvas/MiddleBgmTextBlock"));
        this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mBgmCanvas/HighBgmTextBlock"));
        this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mSoundCanvas/SoundTextBlock"));
        this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mSoundCanvas/LowSoundTextBlock"));
        this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mSoundCanvas/MiddleSoundTextBlock"));
        this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mSoundCanvas/HighSoundTextBlock"));
        this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/mSetCanvas/SetBgCanvas/mResetPosButton/ResetTextBlock"));
        this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/mMorphCanvas/MorphTextBlock"));
    }
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) {}
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    hide() {
        mw.UIService.hideUI(this);
    }
};

HUDPanel_Generate = __decorate([ UIBind("UI/module/HUDModule/HUDPanel.ui") ], HUDPanel_Generate);

var HUDPanel_Generate$1 = HUDPanel_Generate;

var foreign174 = Object.freeze({
    __proto__: null,
    default: HUDPanel_Generate$1
});

let SharePanel_Generate = class SharePanel_Generate extends UIScript {
    get mMainImage() {
        if (!this.mMainImage_Internal && this.uiWidgetBase) {
            this.mMainImage_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mMainImage");
        }
        return this.mMainImage_Internal;
    }
    get mMyselfTipsTextBlock() {
        if (!this.mMyselfTipsTextBlock_Internal && this.uiWidgetBase) {
            this.mMyselfTipsTextBlock_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mMainImage/mMyselfTipsTextBlock");
        }
        return this.mMyselfTipsTextBlock_Internal;
    }
    get mMyselfTextBlock() {
        if (!this.mMyselfTextBlock_Internal && this.uiWidgetBase) {
            this.mMyselfTextBlock_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mMainImage/mMyselfTextBlock");
        }
        return this.mMyselfTextBlock_Internal;
    }
    get mCopyButton() {
        if (!this.mCopyButton_Internal && this.uiWidgetBase) {
            this.mCopyButton_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mMainImage/mMyselfTextBlock/mCopyButton");
        }
        return this.mCopyButton_Internal;
    }
    get mOtherTipsTextBlock() {
        if (!this.mOtherTipsTextBlock_Internal && this.uiWidgetBase) {
            this.mOtherTipsTextBlock_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mMainImage/mOtherTipsTextBlock");
        }
        return this.mOtherTipsTextBlock_Internal;
    }
    get mInputBgImage() {
        if (!this.mInputBgImage_Internal && this.uiWidgetBase) {
            this.mInputBgImage_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mMainImage/mInputBgImage");
        }
        return this.mInputBgImage_Internal;
    }
    get mInputBox() {
        if (!this.mInputBox_Internal && this.uiWidgetBase) {
            this.mInputBox_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mMainImage/mInputBgImage/mInputBox");
        }
        return this.mInputBox_Internal;
    }
    get mCancelButton() {
        if (!this.mCancelButton_Internal && this.uiWidgetBase) {
            this.mCancelButton_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mMainImage/mCancelButton");
        }
        return this.mCancelButton_Internal;
    }
    get mCancelTextBlock() {
        if (!this.mCancelTextBlock_Internal && this.uiWidgetBase) {
            this.mCancelTextBlock_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mMainImage/mCancelButton/mCancelTextBlock");
        }
        return this.mCancelTextBlock_Internal;
    }
    get mUseButton() {
        if (!this.mUseButton_Internal && this.uiWidgetBase) {
            this.mUseButton_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mMainImage/mUseButton");
        }
        return this.mUseButton_Internal;
    }
    get mUseTextBlock() {
        if (!this.mUseTextBlock_Internal && this.uiWidgetBase) {
            this.mUseTextBlock_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mMainImage/mUseButton/mUseTextBlock");
        }
        return this.mUseTextBlock_Internal;
    }
    get mAdsButton() {
        if (!this.mAdsButton_Internal && this.uiWidgetBase) {
            this.mAdsButton_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mMainImage/mAdsButton");
        }
        return this.mAdsButton_Internal;
    }
    onAwake() {
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        this.mCopyButton.onClicked.add((() => {
            Event.dispatchToLocal("PlayButtonClick", "mCopyButton");
        }));
        this.mCopyButton.touchMethod = mw.ButtonTouchMethod.PreciseTap;
        this.mCancelButton.onClicked.add((() => {
            Event.dispatchToLocal("PlayButtonClick", "mCancelButton");
        }));
        this.mCancelButton.touchMethod = mw.ButtonTouchMethod.PreciseTap;
        this.mUseButton.onClicked.add((() => {
            Event.dispatchToLocal("PlayButtonClick", "mUseButton");
        }));
        this.mUseButton.touchMethod = mw.ButtonTouchMethod.PreciseTap;
        this.initLanguage(this.mMyselfTipsTextBlock);
        this.initLanguage(this.mMyselfTextBlock);
        this.initLanguage(this.mOtherTipsTextBlock);
        this.initLanguage(this.mCancelTextBlock);
        this.initLanguage(this.mUseTextBlock);
    }
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) {}
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    hide() {
        mw.UIService.hideUI(this);
    }
};

SharePanel_Generate = __decorate([ UIBind("UI/module/ShareModule/SharePanel.ui") ], SharePanel_Generate);

var SharePanel_Generate$1 = SharePanel_Generate;

var foreign193 = Object.freeze({
    __proto__: null,
    default: SharePanel_Generate$1
});

let KillTipItem_Generate = class KillTipItem_Generate extends UIScript {
    get mBgImage() {
        if (!this.mBgImage_Internal && this.uiWidgetBase) {
            this.mBgImage_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mBgImage");
        }
        return this.mBgImage_Internal;
    }
    get mMainCanvas() {
        if (!this.mMainCanvas_Internal && this.uiWidgetBase) {
            this.mMainCanvas_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mMainCanvas");
        }
        return this.mMainCanvas_Internal;
    }
    get mKillerTextBlock() {
        if (!this.mKillerTextBlock_Internal && this.uiWidgetBase) {
            this.mKillerTextBlock_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mMainCanvas/KillerCanvas/mKillerTextBlock");
        }
        return this.mKillerTextBlock_Internal;
    }
    get mKilledTextBlock() {
        if (!this.mKilledTextBlock_Internal && this.uiWidgetBase) {
            this.mKilledTextBlock_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mMainCanvas/KilledCanvas/mKilledTextBlock");
        }
        return this.mKilledTextBlock_Internal;
    }
    onAwake() {
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        this.initLanguage(this.mKillerTextBlock);
        this.initLanguage(this.mKilledTextBlock);
        this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/mMainCanvas/KillCanvas/KillTextBlock"));
    }
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) {}
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    hide() {
        mw.UIService.hideUI(this);
    }
};

KillTipItem_Generate = __decorate([ UIBind("UI/module/HUDModule/KillTipItem.ui") ], KillTipItem_Generate);

var KillTipItem_Generate$1 = KillTipItem_Generate;

var foreign175 = Object.freeze({
    __proto__: null,
    default: KillTipItem_Generate$1
});

class KillTipItem extends KillTipItem_Generate$1 {
    onAwake() {}
    setInfo(killTipDatas) {
        this.mKillerTextBlock.text = killTipDatas.killerName;
        this.mKilledTextBlock.text = killTipDatas.killedName;
        switch (killTipDatas.killTipType) {
          case KillTipType.None:
            this.mKillerTextBlock.fontColor = mw.LinearColor.white;
            this.mKillerTextBlock.shadowColor = mw.LinearColor.white;
            this.mKilledTextBlock.fontColor = mw.LinearColor.white;
            this.mKilledTextBlock.shadowColor = mw.LinearColor.white;
            break;

          case KillTipType.Killer:
            this.mKillerTextBlock.fontColor = mw.LinearColor.yellow;
            this.mKillerTextBlock.shadowColor = mw.LinearColor.red;
            this.mKilledTextBlock.fontColor = mw.LinearColor.white;
            this.mKilledTextBlock.shadowColor = mw.LinearColor.white;
            break;

          case KillTipType.Killed:
            this.mKillerTextBlock.fontColor = mw.LinearColor.white;
            this.mKillerTextBlock.shadowColor = mw.LinearColor.white;
            this.mKilledTextBlock.fontColor = mw.LinearColor.yellow;
            this.mKilledTextBlock.shadowColor = mw.LinearColor.red;
            break;
        }
        Utils.setWidgetVisibility(this.uiObject, mw.SlateVisibility.SelfHitTestInvisible);
        setTimeout((() => {
            this.mBgImage.size = new mw.Vector2(this.mMainCanvas.size.x + 20, this.mMainCanvas.size.y);
        }), 1);
    }
}

var foreign101 = Object.freeze({
    __proto__: null,
    KillTipItem: KillTipItem
});

class HUDPanel extends HUDPanel_Generate$1 {
    constructor() {
        super(...arguments);
        this.hudModuleC = null;
        this.coinModuleC = null;
        this.hideKillTipIntervalId = null;
        this.killTipItems = [];
        this.killTipDatas = [];
        this.killTipsTimeOutId1 = null;
        this.killTipsTimeOutId2 = null;
        this.deadCountDownInterval = null;
        this.deadCountDown = 3;
        this.flickerTextTween1 = null;
        this.flickerTextTween2 = null;
        this.setRotateTween1 = null;
        this.setRotateTween2 = null;
        this.taskRedPointTween1 = null;
        this.taskRedPointTween2 = null;
        this.activityRedPointTween1 = null;
        this.activityRedPointTween2 = null;
    }
    get getHUDModuleC() {
        if (this.hudModuleC == null) {
            this.hudModuleC = ModuleService.getModule(HUDModuleC);
        }
        return this.hudModuleC;
    }
    get getCoinModuleC() {
        if (this.coinModuleC == null) {
            this.coinModuleC = ModuleService.getModule(CoinModuleC);
        }
        return this.coinModuleC;
    }
    onStart() {
        this.initModule();
        this.initUI();
        this.bindButtons();
    }
    initModule() {
        this.hudModuleC = ModuleService.getModule(HUDModuleC);
    }
    initUI() {
        this.initKillTipItems();
        this.initDeadCountDown();
        this.initFlickerInvincibleText();
        this.initTaskTween();
        this.initUITweens();
        Utils.setWidgetVisibility(this.mKillTipCountCanvas, mw.SlateVisibility.Collapsed);
        Utils.setWidgetVisibility(this.mKillTipTextBlock3, mw.SlateVisibility.Collapsed);
        Utils.setWidgetVisibility(this.mUnMorphCanvas, mw.SlateVisibility.Collapsed);
        Utils.setWidgetVisibility(this.mJumpCanvas, mw.SlateVisibility.Collapsed);
        this.mSetButtonTextBlock.text = GameConfig.Language.Text_HUDTips3.Value;
        this.mTaskTextBlock.text = GameConfig.Language.Text_HUDTips1.Value;
        this.mRankButtonTextBlock.text = GameConfig.Language.Text_HUDTips2.Value;
        this.mRoleTextBlock.text = GameConfig.Language.Text_HUDTips4.Value;
        this.mShareTextBlock.text = GameConfig.Language.Text_HUDTips7.Value;
        this.mTeamTextBlock.text = GameConfig.Language.Text_HUDTips6.Value;
        this.mShopTextBlock.text = GameConfig.Language.Text_HUDTips5.Value;
    }
    bindButtons() {
        this.mShopButton.onClicked.add(this.onClickOpenShopButton.bind(this));
        this.mTeamButton.onClicked.add(this.onClickOpenTeamButton.bind(this));
        this.mRankButton.onClicked.add(this.onClickOpenRankButton.bind(this));
        this.mActivityButton.onClicked.add(this.onClickOpenActivityButton.bind(this));
        this.mTaskButton.onClicked.add(this.onClickOpenTaskButton.bind(this));
        this.mResetPosButton.onClicked.add(this.onClickResetPosButton.bind(this));
        this.mMorphButton.onClicked.add(this.onClickMorphButton.bind(this));
        this.mUnMorphButton.onClicked.add(this.onClickUnMorphButton.bind(this));
        this.mJumpButton.onClicked.add(this.onClickJumpButton.bind(this));
        this.mRoleButton.onClicked.add(this.onClickOpenRoleButton.bind(this));
        this.mOpenShareButton.onClicked.add(this.addOpenShareButton.bind(this));
        this.bindSetButton();
    }
    onClickOpenShopButton() {
        this.getHUDModuleC.onOpenShopAction.call();
    }
    onClickOpenTeamButton() {
        this.getHUDModuleC.onOpenTeamAction.call();
    }
    onClickOpenRankButton() {
        this.getHUDModuleC.onOpenRankAction.call();
    }
    onClickOpenActivityButton() {
        this.getHUDModuleC.onOpenActivityAction.call();
    }
    onClickOpenTaskButton() {
        this.getHUDModuleC.onOpenTaskAction.call();
    }
    onClickResetPosButton() {
        this.getHUDModuleC.onResetPosAction.call();
    }
    onClickOpenRoleButton() {
        this.getHUDModuleC.onOpenRoleAction.call();
    }
    addOpenShareButton() {
        this.getHUDModuleC.onOpenShareAction.call(1);
    }
    onClickMorphButton() {
        this.getHUDModuleC.onMorphAction.call(true);
        Utils.setWidgetVisibility(this.mUnMorphCanvas, mw.SlateVisibility.SelfHitTestInvisible);
        Utils.setWidgetVisibility(this.mJumpCanvas, mw.SlateVisibility.SelfHitTestInvisible);
    }
    onClickUnMorphButton() {
        this.getHUDModuleC.onMorphAction.call(false);
        Utils.setWidgetVisibility(this.mUnMorphCanvas, mw.SlateVisibility.Collapsed);
        Utils.setWidgetVisibility(this.mJumpCanvas, mw.SlateVisibility.Collapsed);
    }
    onClickJumpButton() {
        this.getHUDModuleC.onJumpAction.call(false);
    }
    updateVsUI(redCount, blueCount) {
        this.mRedCountTextBlock.text = redCount + "";
        this.mBlueCountTextBlock.text = blueCount + "";
    }
    onHide() {
        this.mVirtualJoystickPanel.resetJoyStick();
    }
    initKillTipItems() {
        for (let i = 0; i < 4; ++i) {
            let killTipItem = UIService.create(KillTipItem);
            killTipItem.uiObject.position = new mw.Vector2(0, 37 * i);
            Utils.setWidgetVisibility(killTipItem.uiObject, mw.SlateVisibility.Collapsed);
            this.mKillTipCanvas.addChild(killTipItem.uiObject);
            this.killTipItems.push(killTipItem);
        }
    }
    killTip(killTipType, killerName, killedName) {
        let killTipData = new KillTipData;
        killTipData.killTipType = killTipType;
        killTipData.killerName = killerName;
        killTipData.killedName = killedName;
        if (this.killTipDatas.length >= 4) {
            this.killTipDatas.shift();
        }
        this.killTipDatas.push(killTipData);
        this.updateKillTipItems();
        this.clearHideKillTipIntervalId();
        this.hideKillTipIntervalId = TimeUtil.setInterval((() => {
            if (this.killTipDatas && this.killTipDatas.length > 0) {
                this.killTipDatas.shift();
                this.updateKillTipItems();
            } else {
                this.clearHideKillTipIntervalId();
            }
        }), 5);
    }
    clearHideKillTipIntervalId() {
        if (this.hideKillTipIntervalId) {
            TimeUtil.clearInterval(this.hideKillTipIntervalId);
            this.hideKillTipIntervalId = null;
        }
    }
    updateKillTipItems() {
        for (let i = 0; i < this.killTipDatas.length; ++i) {
            this.killTipItems[i].setInfo(this.killTipDatas[i]);
        }
        for (let i = this.killTipDatas.length; i < 4; ++i) {
            Utils.setWidgetVisibility(this.killTipItems[i].uiObject, mw.SlateVisibility.Collapsed);
        }
    }
    showKillTips1(killTips, killerName, killedName) {
        Notice.showDownNotice("<color=#lime>" + "<size=18>" + killerName + " 击败了 " + killedName + "</size>" + "</color>" + "\n" + "<color=#red>" + killTips + "</color>");
    }
    clearKillTipsTimeOutId1() {
        if (this.killTipsTimeOutId1) {
            clearTimeout(this.killTipsTimeOutId1);
            this.killTipsTimeOutId1 = null;
        }
    }
    showKillTips2(killerName, killedName, killTipType) {
        if (killTipType == KillTipType.None) return;
        this.clearKillTipsTimeOutId2();
        if (killTipType == KillTipType.Killed) {
            this.mKillTipTextBlock3.text = "你已被 " + killerName + " 击败";
        } else if (killTipType == KillTipType.revenge) {
            this.mKillTipTextBlock3.text = "击败 " + killedName + " 完成复仇";
        }
        Utils.setWidgetVisibility(this.mKillTipTextBlock3, mw.SlateVisibility.SelfHitTestInvisible);
        this.killTipsTimeOutId2 = setTimeout((() => {
            Utils.setWidgetVisibility(this.mKillTipTextBlock3, mw.SlateVisibility.Collapsed);
            this.clearKillTipsTimeOutId2();
        }), 3 * 1e3);
    }
    clearKillTipsTimeOutId2() {
        if (this.killTipsTimeOutId2) {
            clearTimeout(this.killTipsTimeOutId2);
            this.killTipsTimeOutId2 = null;
        }
    }
    updateHpUI(hp) {
        if (hp < 0) hp = 0;
        this.mHpProgressBar.currentValue = hp;
        this.mHpTextBlock.text = hp + "";
    }
    updateProgressBarMaxHp(maxHp) {
        this.mHpProgressBar.sliderMaxValue = maxHp;
    }
    updateRankUIText(isRedTeam, rank) {
        let teamStr = "潜伏者：第";
        let rankTextBlockColor = mw.LinearColor.red;
        if (!isRedTeam) {
            teamStr = "保卫者：第";
            rankTextBlockColor = mw.LinearColor.blue;
        }
        this.mRankTextBlock.text = teamStr + rank + "名";
        this.mRankTextBlock.fontColor = rankTextBlockColor;
    }
    initDeadCountDown() {
        Utils.setWidgetVisibility(this.mDeadCanvas, mw.SlateVisibility.Collapsed);
    }
    startDeadCountDown() {
        this.mVirtualJoystickPanel.resetJoyStick();
        Utils.setWidgetVisibility(this.mDeadCanvas, mw.SlateVisibility.SelfHitTestInvisible);
        this.deadCountDown = 3;
        this.mDeadCountDownTextBlock.text = this.deadCountDown-- + "";
        this.clearCountDownInterval();
        this.deadCountDownInterval = TimeUtil.setInterval((() => {
            this.mDeadCountDownTextBlock.text = this.deadCountDown-- + "";
            if (this.deadCountDown < 0) this.clearCountDownInterval();
        }), 1);
    }
    clearCountDownInterval() {
        if (this.deadCountDownInterval) {
            TimeUtil.clearInterval(this.deadCountDownInterval);
            this.deadCountDownInterval = null;
        }
    }
    endDeadCountDown() {
        Utils.setWidgetVisibility(this.mDeadCanvas, mw.SlateVisibility.Collapsed);
        this.clearCountDownInterval();
        this.showInvincibleTimeUI(2);
    }
    showInvincibleTimeUI(invincibleTime) {
        new mw.Tween({
            x: 0
        }).to({
            x: 1
        }, invincibleTime * 1e3).onStart((() => {
            Utils.setWidgetVisibility(this.mInvincibleCanvas, mw.SlateVisibility.SelfHitTestInvisible);
            this.mInvincibleProgressBar.currentValue = 0;
            this.startFlickerText();
        })).onUpdate((v => {
            this.mInvincibleProgressBar.currentValue = v.x;
        })).onComplete((() => {
            Utils.setWidgetVisibility(this.mInvincibleCanvas, mw.SlateVisibility.Collapsed);
            this.stopFlickerText();
        })).start();
    }
    initFlickerInvincibleText() {
        Utils.setWidgetVisibility(this.mInvincibleCanvas, mw.SlateVisibility.Collapsed);
        this.flickerTextTween1 = new mw.Tween({
            x: 1
        }).to({
            x: 0
        }, .4 * 1e3).onStart((() => {
            this.mInvincibleTextBlock.renderOpacity = 1;
        })).onUpdate((v => {
            this.mInvincibleTextBlock.renderOpacity = v.x;
        })).onComplete((() => {
            this.flickerTextTween2.start();
        }));
        this.flickerTextTween2 = new mw.Tween({
            x: 0
        }).to({
            x: 1
        }, .4 * 1e3).onStart((() => {
            this.mInvincibleTextBlock.renderOpacity = 0;
        })).onUpdate((v => {
            this.mInvincibleTextBlock.renderOpacity = v.x;
        })).onComplete((() => {
            this.flickerTextTween1.start();
        }));
    }
    startFlickerText() {
        if (this.flickerTextTween1) this.flickerTextTween1.start();
    }
    stopFlickerText() {
        if (this.flickerTextTween1) this.flickerTextTween1.stop();
        if (this.flickerTextTween2) this.flickerTextTween2.stop();
    }
    initSetData(fireScale, controlScale, bgmVolume, soundVolume) {
        this.mFireProgressBar.currentValue = fireScale;
        this.mControlProgressBar.currentValue = controlScale;
        this.mBgmProgressBar.currentValue = bgmVolume;
        this.mSoundProgressBar.currentValue = soundVolume;
        this.mTouchPad.inputScale = new mw.Vector2(controlScale, controlScale);
        this.initSetTween();
        this.startSetTween();
    }
    bindSetButton() {
        this.mSetButton.onClicked.add((() => {
            Utils.openUITween(this.mSetCanvas, (() => {
                Utils.setWidgetVisibility(this.mSetCanvas, mw.SlateVisibility.SelfHitTestInvisible);
            }), null);
        }));
        this.mSetCloseButton.onClicked.add((() => {
            Utils.closeUITween(this.mSetCanvas, (() => {
                this.getHUDModuleC.saveSetData();
            }), (() => {
                Utils.setWidgetVisibility(this.mSetCanvas, mw.SlateVisibility.Collapsed);
            }));
        }));
        this.mFireProgressBar.onSliderValueChanged.add((value => {
            this.getHUDModuleC.onFireScaleAction.call(value);
        }));
        this.mControlProgressBar.onSliderValueChanged.add((value => {
            this.getHUDModuleC.onControlScaleAction.call(value);
            this.mTouchPad.inputScale = new mw.Vector2(value, value);
        }));
        this.mBgmProgressBar.onSliderValueChanged.add((value => {
            this.getHUDModuleC.onBgmVolumeAction.call(value);
        }));
        this.mSoundProgressBar.onSliderValueChanged.add((value => {
            this.getHUDModuleC.onSoundVolumeAction.call(value);
        }));
    }
    startSetTween() {
        if (!this.setRotateTween1 || !this.setRotateTween1) this.initSetTween();
        if (this.setRotateTween1) this.setRotateTween1.start();
    }
    stopSetTween() {
        if (this.setRotateTween1) this.setRotateTween1.stop();
        if (this.setRotateTween2) this.setRotateTween2.stop();
    }
    initSetTween() {
        this.setRotateTween1 = new mw.Tween({
            angle: 0
        }).to({
            angle: 360
        }, 2 * 1e3).onStart((() => {
            this.mSetButton.renderTransformAngle = 0;
        })).onUpdate((v => {
            this.mSetButton.renderTransformAngle = v.angle;
        })).onComplete((() => {
            if (this.setRotateTween2) this.setRotateTween2.start();
        }));
        this.setRotateTween2 = new mw.Tween({
            angle: 0
        }).to({
            angle: 360
        }, 2 * 1e3).onStart((() => {
            this.mSetButton.renderTransformAngle = 0;
        })).onUpdate((v => {
            this.mSetButton.renderTransformAngle = v.angle;
        })).onComplete((() => {
            if (this.setRotateTween1) this.setRotateTween1.start();
        }));
    }
    initUITweens() {
        this.initRankButtonTweens();
        this.initTaskTween();
        this.initTeamTweens();
        this.initShakeActivityTween();
        this.initShakeShopTween();
        this.initShakeRoleTween();
        this.initMorphButtonTween();
        this.initShakeShareTween();
    }
    initRankButtonTweens() {
        let rankButtonTween1 = this.getScaleTween(this.mRankButton, .4, .8, .8, 1.2, 1.2);
        let rankButtonsTween2 = this.getScaleTween(this.mRankButton, .4, 1.2, 1.2, .8, .8);
        rankButtonTween1.start().onComplete((() => {
            rankButtonsTween2.start().onComplete((() => {
                rankButtonTween1.start();
            }));
        }));
    }
    startTaskRedPointTween() {
        if (!this.taskRedPointTween1 || !this.taskRedPointTween2) this.initTaskRedPointTweens();
        this.taskRedPointTween1.start();
        Utils.setWidgetVisibility(this.mTaskPointImage, mw.SlateVisibility.SelfHitTestInvisible);
    }
    stopTaskRedPointTween() {
        if (this.taskRedPointTween1) this.taskRedPointTween1.stop();
        if (this.taskRedPointTween2) this.taskRedPointTween2.stop();
        Utils.setWidgetVisibility(this.mTaskPointImage, mw.SlateVisibility.Collapsed);
    }
    initTaskRedPointTweens() {
        Utils.setWidgetVisibility(this.mTaskPointImage, mw.SlateVisibility.Collapsed);
        this.taskRedPointTween1 = new mw.Tween({
            value: .8
        }).to({
            value: 1.2
        }, .2 * 1e3).onStart((() => {
            this.mTaskPointImage.renderScale = mw.Vector2.one.multiply(.8);
        })).onUpdate((v => {
            this.mTaskPointImage.renderScale = mw.Vector2.one.multiply(v.value);
        })).onComplete((() => {
            if (this.taskRedPointTween2) this.taskRedPointTween2.start();
        })).easing(cubicBezier(.25, .1, .25, 1));
        this.taskRedPointTween2 = new mw.Tween({
            value: 1.2
        }).to({
            value: .8
        }, .2 * 1e3).onStart((() => {
            this.mTaskPointImage.renderScale = mw.Vector2.one.multiply(1.2);
        })).onUpdate((v => {
            this.mTaskPointImage.renderScale = mw.Vector2.one.multiply(v.value);
        })).onComplete((() => {
            if (this.taskRedPointTween1) this.taskRedPointTween1.start();
        })).easing(cubicBezier(.25, .1, .25, 1));
    }
    initTaskTween() {
        let leftToRight = this.getPosTween(this.mTaskBgImage, .5, 0, 15, 40, 15);
        let rightToLeft = this.getPosTween(this.mTaskBgImage, .5, 40, 15, 0, 15);
        leftToRight.start().onComplete((() => {
            TimeUtil.delaySecond(.1).then((() => {
                rightToLeft.start().onComplete((() => {
                    TimeUtil.delaySecond(.1).then((() => {
                        leftToRight.start();
                    }));
                }));
            }));
        }));
        this.initTaskRedPointTweens();
    }
    initTeamTweens() {
        let teamBgTween1 = this.getRenderOpacityTween(this.mTeamBgImage, .75, 1, 0);
        let teamBgTween2 = this.getRenderOpacityTween(this.mTeamBgImage, .75, 0, 1);
        teamBgTween1.start().onComplete((() => {
            TimeUtil.delaySecond(.2).then((() => {
                teamBgTween2.start().onComplete((() => {
                    TimeUtil.delaySecond(.2).then((() => {
                        teamBgTween1.start();
                    }));
                }));
            }));
        }));
        let teamIconTween1 = this.getScaleTween(this.mTeamIconImage, .75, 1, 1, 0, 1);
        let teamIconTween2 = this.getScaleTween(this.mTeamIconImage, .75, 0, 1, 1, 1);
        TimeUtil.delaySecond(.75).then((() => {
            teamIconTween1.start().onComplete((() => {
                TimeUtil.delaySecond(.2).then((() => {
                    teamIconTween2.start().onComplete((() => {
                        TimeUtil.delaySecond(.2).then((() => {
                            teamIconTween1.start();
                        }));
                    }));
                }));
            }));
        }));
    }
    initShakeShopTween() {
        let rightBigToLeftSmall = this.getShakeScaleTween(this.mShopButton, .8, 20, -20, 1.1, .9);
        let leftSamllToRightBig = this.getShakeScaleTween(this.mShopButton, .8, -20, 20, .9, 1.1);
        rightBigToLeftSmall.start().onComplete((() => {
            TimeUtil.delaySecond(.1).then((() => {
                leftSamllToRightBig.start().onComplete((() => {
                    TimeUtil.delaySecond(.1).then((() => {
                        rightBigToLeftSmall.start();
                    }));
                }));
            }));
        }));
    }
    initShakeRoleTween() {
        let rightBigToLeftSmall = this.getShakeScaleTween(this.mRoleButton, .8, 20, -20, 1.1, .9);
        let leftSamllToRightBig = this.getShakeScaleTween(this.mRoleButton, .8, -20, 20, .9, 1.1);
        rightBigToLeftSmall.start().onComplete((() => {
            TimeUtil.delaySecond(.1).then((() => {
                leftSamllToRightBig.start().onComplete((() => {
                    TimeUtil.delaySecond(.1).then((() => {
                        rightBigToLeftSmall.start();
                    }));
                }));
            }));
        }));
    }
    startActivityRedPointTween() {
        if (!this.activityRedPointTween1 || !this.activityRedPointTween2) this.initActivityRedPointTweens();
        this.activityRedPointTween1.start();
        Utils.setWidgetVisibility(this.mActivityPointImage, mw.SlateVisibility.SelfHitTestInvisible);
    }
    stopActivityRedPointTween() {
        if (this.activityRedPointTween1) this.activityRedPointTween1.stop();
        if (this.activityRedPointTween2) this.activityRedPointTween2.stop();
        Utils.setWidgetVisibility(this.mActivityPointImage, mw.SlateVisibility.Collapsed);
    }
    initActivityRedPointTweens() {
        Utils.setWidgetVisibility(this.mActivityPointImage, mw.SlateVisibility.Collapsed);
        this.activityRedPointTween1 = new mw.Tween({
            value: .8
        }).to({
            value: 1.2
        }, .2 * 1e3).onStart((() => {
            this.mActivityPointImage.renderScale = mw.Vector2.one.multiply(.8);
        })).onUpdate((v => {
            this.mActivityPointImage.renderScale = mw.Vector2.one.multiply(v.value);
        })).onComplete((() => {
            if (this.activityRedPointTween2) this.activityRedPointTween2.start();
        })).easing(cubicBezier(.25, .1, .25, 1));
        this.activityRedPointTween2 = new mw.Tween({
            value: 1.2
        }).to({
            value: .8
        }, .2 * 1e3).onStart((() => {
            this.mActivityPointImage.renderScale = mw.Vector2.one.multiply(1.2);
        })).onUpdate((v => {
            this.mActivityPointImage.renderScale = mw.Vector2.one.multiply(v.value);
        })).onComplete((() => {
            if (this.activityRedPointTween1) this.activityRedPointTween1.start();
        })).easing(cubicBezier(.25, .1, .25, 1));
    }
    initShakeActivityTween() {
        let middleToRight = this.getShakeTween(this.mActivityButton, .05, 0, 15);
        let rightToLeft = this.getShakeTween(this.mActivityButton, .1, 15, -15);
        let leftToRight = this.getShakeTween(this.mActivityButton, .1, -15, 15);
        let rightToMiddle = this.getShakeTween(this.mActivityButton, .05, 15, 0);
        middleToRight.start().onComplete((() => {
            rightToLeft.start().onComplete((() => {
                leftToRight.start().onComplete((() => {
                    rightToMiddle.start().onComplete((() => {
                        TimeUtil.delaySecond(1).then((() => {
                            middleToRight.start();
                        }));
                    }));
                }));
            }));
        }));
        this.initActivityRedPointTweens();
    }
    initMorphButtonTween() {
        let rotate1 = this.getShakeTween(this.mMorphButton, 1, 0, 360);
        let rotate2 = this.getShakeTween(this.mMorphButton, 1, 0, 360);
        rotate1.start().onComplete((() => {
            rotate2.start().onComplete((() => {
                rotate1.start();
            }));
        }));
    }
    initShakeShareTween() {
        let rightBigToLeftSmall = this.getShakeScaleTween(this.mOpenShareButton, .8, 20, -20, 1.1, .9);
        let leftSamllToRightBig = this.getShakeScaleTween(this.mOpenShareButton, .8, -20, 20, .9, 1.1);
        rightBigToLeftSmall.start().onComplete((() => {
            TimeUtil.delaySecond(.1).then((() => {
                leftSamllToRightBig.start().onComplete((() => {
                    TimeUtil.delaySecond(.1).then((() => {
                        rightBigToLeftSmall.start();
                    }));
                }));
            }));
        }));
    }
    getShakeTween(widget, angleTime, startAngle, endAngle) {
        return new Tween({
            angle: startAngle
        }).to({
            angle: endAngle
        }, angleTime * 1e3).onUpdate((v => {
            widget.renderTransformAngle = v.angle;
        })).easing(cubicBezier(.22, .9, .28, .92));
    }
    getScaleTween(widget, scaleTime, startScaleX, startScaleY, endScaleX, endScaleY) {
        return new Tween({
            scaleX: startScaleX,
            scaleY: startScaleY
        }).to({
            scaleX: endScaleX,
            scaleY: endScaleY
        }, scaleTime * 1e3).onUpdate((v => {
            widget.renderScale = new mw.Vector2(v.scaleX, v.scaleY);
        })).easing(cubicBezier(.22, .9, .28, .92));
    }
    getShakeScaleTween(widget, shakeScaleTime, startAngle, endAngle, startScale, endScale) {
        return new Tween({
            angle: startAngle,
            scale: startScale
        }).to({
            angle: endAngle,
            scale: endScale
        }, shakeScaleTime * 1e3).onUpdate((v => {
            widget.renderTransformAngle = v.angle;
            widget.renderScale = new mw.Vector2(v.scale, v.scale);
        })).easing(cubicBezier(.22, .9, .28, .92));
    }
    getRenderOpacityTween(widget, time, startOpacity, endOpacity) {
        return new Tween({
            opacity: startOpacity
        }).to({
            opacity: endOpacity
        }, time * 1e3).onUpdate((v => {
            widget.renderOpacity = v.opacity;
        })).easing(cubicBezier(.22, .9, .28, .92));
    }
    getPosTween(widget, posTime, startPosX, startPosY, endPosX, endPosY) {
        return new Tween({
            posX: startPosX,
            posY: startPosY
        }).to({
            posX: endPosX,
            posY: endPosY
        }, posTime * 1e3).onUpdate((v => {
            widget.position = new mw.Vector2(v.posX, v.posY);
        })).easing(cubicBezier(.22, .9, .28, .92));
    }
}

class SharePanel extends SharePanel_Generate$1 {
    constructor() {
        super(...arguments);
        this.hudModuleC = null;
    }
    get getHUDModuleC() {
        if (this.hudModuleC == null) {
            this.hudModuleC = ModuleService.getModule(HUDModuleC);
        }
        return this.hudModuleC;
    }
    onStart() {
        this.initUI();
        this.bindButton();
    }
    initUI() {
        this.mMyselfTipsTextBlock.text = `我的角色ID-分享好友试穿`;
        this.mOtherTipsTextBlock.text = `免费试穿好友的角色形象`;
        this.mInputBox.text = "";
        this.mInputBox.hintString = `请输入好友角色ID`;
        this.mCancelTextBlock.text = `取消`;
        this.mUseTextBlock.text = `免费试穿`;
        this.mAdsButton.text = `免费试穿`;
        Utils.setWidgetVisibility(this.mAdsButton, mw.SlateVisibility.Collapsed);
    }
    bindButton() {
        this.mCopyButton.onClicked.add(this.addCopyButton.bind(this));
        this.mCancelButton.onClicked.add(this.addCancelButton.bind(this));
        this.mUseButton.onClicked.add(this.addUseButton.bind(this));
    }
    addCopyButton() {
        let copyText = this.mMyselfTextBlock.text;
        if (!copyText || copyText == "" || copyText.length == 0) return;
        StringUtil.clipboardCopy(copyText);
        Notice.showDownNotice(`复制成功`);
    }
    addCancelButton() {
        this.hide();
    }
    addUseButton() {
        let shareId = this.mInputBox.text;
        if (!shareId || shareId == "" || shareId.length == 0) return;
        this.getHUDModuleC.onUseShareAction.call(shareId);
        this.hide();
    }
    showPanel(shareId) {
        this.mMyselfTextBlock.text = shareId;
        Utils.setWidgetVisibility(this.mInputBgImage, mw.SlateVisibility.SelfHitTestInvisible);
        this.mOtherTipsTextBlock.text = `免费试穿好友的角色形象`;
    }
    onShow(...params) {
        this.mMyselfTextBlock.text = `加载中`;
        this.mInputBox.text = ``;
    }
}

var foreign100 = Object.freeze({
    __proto__: null,
    SharePanel: SharePanel,
    default: HUDPanel
});

class HUDModuleC extends ModuleC {
    constructor() {
        super(...arguments);
        this.hudPanel = null;
        this.sharePanel = null;
        this.adPanel = null;
        this.onOpenShopAction = new Action;
        this.onOpenTeamAction = new Action;
        this.onOpenRankAction = new Action;
        this.onOpenActivityAction = new Action;
        this.onOpenTaskAction = new Action;
        this.onResetPosAction = new Action;
        this.onMorphAction = new Action1;
        this.onJumpAction = new Action;
        this.onOpenRoleAction = new Action;
        this.onOpenShareAction = new Action;
        this.onUseShareAction = new Action1;
        this.killCountMap = new Map;
        this.revengeUserIdMap = new Set;
        this.onFireScaleAction = new Action1;
        this.onControlScaleAction = new Action1;
        this.onBgmVolumeAction = new Action1;
        this.onSoundVolumeAction = new Action1;
        this.currentFireScale = .05;
        this.currentControlScale = .3;
        this.currentBgmVolume = 1;
        this.currentSoundVolume = 1;
        this.clickId = null;
        this.isMorph = false;
    }
    get getHUDPanel() {
        if (!this.hudPanel) {
            this.hudPanel = UIService.getUI(HUDPanel);
        }
        return this.hudPanel;
    }
    get getSharePanel() {
        if (!this.sharePanel) {
            this.sharePanel = UIService.getUI(SharePanel);
        }
        return this.sharePanel;
    }
    get getAdPanel() {
        if (!this.adPanel) {
            this.adPanel = UIService.getUI(AdPanel);
        }
        return this.adPanel;
    }
    onStart() {
        this.initUIPanel();
        this.initEventAction();
    }
    initUIPanel() {
        this.hudPanel = UIService.getUI(HUDPanel);
    }
    initEventAction() {
        this.initSetAction();
        this.initSoundEvent();
        this.initMorphAction();
        this.onJumpAction.add(this.addJumpAction.bind(this));
        this.onOpenRoleAction.add(this.addOpenRoleAction.bind(this));
        this.onOpenShareAction.add(this.onOpenShareActionHandler.bind(this));
        this.onUseShareAction.add(this.onUseShareActionHandler.bind(this));
        Event.addLocalListener(EventType.OnOffMainHUD, this.addOnOffHUDPannel.bind(this));
        let isOpen = true;
        InputUtil.onKeyDown(mw.Keys.NumPadFive, (() => {
            isOpen = !isOpen;
            isOpen ? UIService.getUI(CoinPanel).show() : UIService.getUI(CoinPanel).hide();
            Event.dispatchToLocal(EventType.OnOffMainHUD, isOpen);
        }));
    }
    addOnOffHUDPannel(isOpen) {
        if (isOpen) {
            this.localPlayer.character.moveFacingDirection = mw.MoveFacingDirection.ControllerDirection;
            this.getHUDPanel.show();
        } else {
            this.getHUDPanel.hide();
            this.localPlayer.character.moveFacingDirection = mw.MoveFacingDirection.MovementDirection;
        }
    }
    addJumpAction() {
        this.localPlayer.character.jump();
        if (!this.localPlayer.character.movementEnabled) this.localPlayer.character.movementEnabled = true;
    }
    async onOpenShareActionHandler() {
        return;
    }
    onUseShareActionHandler(shareId) {
        if (GlobalData.isOpenIAA) {
            this.getAdPanel.showRewardAd((() => {
                this.useShareId(shareId);
            }), `看广告免费试穿`, `取消`, `免费试穿`);
        } else {
            this.useShareId(shareId);
        }
    }
    async useShareId(shareId) {
        let isSuccess = await Utils.applySharedId(this.localPlayer.character, shareId);
        if (isSuccess) {
            Notice.showDownNotice(`试穿成功`);
        } else {
            Notice.showDownNotice(`ID无效`);
        }
    }
    addOpenRoleAction() {
        ExecutorManager.instance.pushAsyncExecutor((async () => {
            await AvatarEditorService.asyncOpenAvatarEditorModule();
        }));
    }
    onEnterScene(sceneType) {
        this.getHUDPanel.show();
        this.setPlayerIcon();
        this.initSetData();
        this.playBgm();
    }
    updateVsUI(redCount, blueCount) {
        this.getHUDPanel.updateVsUI(redCount, blueCount);
    }
    killTip(killerUserId, killerName, killedUserId, killedName) {
        let killTipType = KillTipType.None;
        if (killerUserId == this.localPlayer.userId) {
            killTipType = KillTipType.Killer;
        } else if (killedUserId == this.localPlayer.userId) {
            killTipType = KillTipType.Killed;
        }
        this.getHUDPanel.killTip(killTipType, killerName, killedName);
        this.killTipsSound(killerUserId, killerName, killedUserId, killedName);
    }
    killTipsSound(killerUserId, killerName, killedUserId, killedName) {
        let killTipType = KillTipType.None;
        if (killedUserId == this.localPlayer.userId) {
            killTipType = KillTipType.Killed;
            if (!this.revengeUserIdMap.has(killerUserId)) this.revengeUserIdMap.add(killerUserId);
            SoundService.playSound("294343", 1, GlobalData.soundVolume);
        } else if (killerUserId == this.localPlayer.userId && this.revengeUserIdMap.has(killedUserId)) {
            killTipType = KillTipType.revenge;
            this.revengeUserIdMap.delete(killedUserId);
            SoundService.playSound("294342", 1, GlobalData.soundVolume);
        }
        this.getHUDPanel.showKillTips2(killerName, killedName, killTipType);
        if (this.killCountMap.has(killedUserId)) this.killCountMap.delete(killedUserId);
        let killCount = 0;
        if (this.killCountMap.has(killerUserId)) {
            killCount = this.killCountMap.get(killerUserId);
        }
        killCount++;
        this.killCountMap.set(killerUserId, killCount);
        if (killCount <= 1) return;
        let soundId = "";
        let killCountTips = "";
        switch (killCount) {
          case 2:
            soundId = "65877";
            killCountTips = "连续消灭2人！势不可当！";
            break;

          case 3:
            soundId = "65874";
            killCountTips = "连续消灭3人！勇冠三军！";
            break;

          case 4:
            soundId = "65873";
            killCountTips = "连续消灭4人！无人能敌！";
            break;

          case 5:
            soundId = "65881";
            killCountTips = "连续消灭5人！横扫千军！";
            break;

          case 6:
            soundId = "65871";
            killCountTips = "连续消灭6人！接近神了！";
            break;

          case 7:
            soundId = "65879";
            killCountTips = "连续消灭7人！超越神了！";
            break;

          default:
            soundId = "65879";
            killCountTips = "连续消灭" + Utils.numChangeToCN(killCount) + "人！超越神了！";
            break;
        }
        SoundService.playSound(soundId, 1, GlobalData.soundVolume);
        this.getHUDPanel.showKillTips1(killCountTips, killerName, killedName);
    }
    setPlayerIcon() {
        if (mw.SystemUtil.isPIE) return;
        mw.AccountService.fillAvatar(this.getHUDPanel.mIconmage);
    }
    updateHpUI(hp, isUpdateBarMaxHp = false) {
        if (hp < 0) hp = 0;
        if (isUpdateBarMaxHp) this.getHUDPanel.updateProgressBarMaxHp(hp);
        this.getHUDPanel.updateHpUI(hp);
        if (hp <= 0) this.getHUDPanel.startDeadCountDown();
        if (hp == GlobalData.maxHp) this.getHUDPanel.endDeadCountDown();
    }
    updateRankUIText(isRedTeam, rank) {
        this.getHUDPanel.updateRankUIText(isRedTeam, rank);
    }
    initSetData() {
        this.currentFireScale = this.data.fireScale;
        this.currentControlScale = this.data.controlScale;
        this.currentBgmVolume = this.data.bgmVolume;
        this.currentSoundVolume = this.data.soundVolume;
        GlobalData.soundVolume = this.currentSoundVolume;
        this.getHUDPanel.initSetData(this.currentFireScale, this.currentControlScale, this.currentBgmVolume, this.currentSoundVolume);
    }
    initSetAction() {
        this.onFireScaleAction.add((scale => {
            this.currentFireScale = scale;
        }));
        this.onControlScaleAction.add((scale => {
            this.currentControlScale = scale;
        }));
        this.onBgmVolumeAction.add((volume => {
            this.currentBgmVolume = volume;
            SoundService.BGMVolumeScale = volume;
        }));
        this.onSoundVolumeAction.add((volume => {
            this.currentSoundVolume = volume;
            GlobalData.soundVolume = volume;
        }));
    }
    get getFireScale() {
        return this.currentFireScale;
    }
    saveSetData() {
        if (this.data.fireScale == this.currentFireScale && this.data.controlScale == this.currentControlScale && this.data.bgmVolume == this.currentBgmVolume && this.data.soundVolume == this.currentFireScale) return;
        this.server.net_saveSetData(this.currentFireScale, this.currentControlScale, this.currentBgmVolume, this.currentSoundVolume);
    }
    playBgm() {
        return;
    }
    initSoundEvent() {
        Event.addLocalListener("PlayButtonClick", (btnName => {
            if (btnName == "reload" || btnName == "jump" || btnName == "aim" || btnName == "left_fire" || btnName == "mJumpButton") return;
            this.playClickSound();
        }));
    }
    playClickSound() {
        if (this.clickId) SoundService.stopSound(this.clickId);
        this.clickId = SoundService.playSound("200082", 1, GlobalData.soundVolume);
    }
    initMorphAction() {
        this.onMorphAction.add(this.addMorphAction.bind(this));
    }
    get getIsMorph() {
        return this.isMorph;
    }
    addMorphAction(isMorph) {
        this.isMorph = isMorph;
        Event.dispatchToLocal(EventType.OnOffWeaponUI, isMorph);
        if (!isMorph) Event.dispatchToLocal(EventType.TryOutGun);
    }
}

var foreign98 = Object.freeze({
    __proto__: null,
    default: HUDModuleC
});

var MapEx;

(function(MapEx) {
    function isNull(map) {
        return !map || map == null || map == undefined;
    }
    MapEx.isNull = isNull;
    function get(map, key) {
        if (map[key]) {
            return map[key];
        }
        let has = false;
        let keys = Object.keys(map);
        for (let i = 0; i < keys.length; ++i) {
            if (keys[i] == key) {
                has = true;
                break;
            }
        }
        if (has) {
            return map[key];
        }
        return null;
    }
    MapEx.get = get;
    function set(map, key, val) {
        map[key] = val;
    }
    MapEx.set = set;
    function del(map, key) {
        if (map[key]) {
            delete map[key];
            return true;
        }
        let has = false;
        let keys = Object.keys(map);
        for (let i = 0; i < keys.length; ++i) {
            if (keys[i] == key) {
                has = true;
                break;
            }
        }
        if (has) {
            delete map[key];
            return true;
        }
        return false;
    }
    MapEx.del = del;
    function has(map, key) {
        if (map[key]) {
            return true;
        }
        let has = false;
        let keys = Object.keys(map);
        for (let i = 0; i < keys.length; ++i) {
            if (keys[i] == key) {
                has = true;
                break;
            }
        }
        if (has) {
            return true;
        }
        return false;
    }
    MapEx.has = has;
    function count(map) {
        let res = 0;
        forEach(map, (e => {
            ++res;
        }));
        return res;
    }
    MapEx.count = count;
    function forEach(map, callback) {
        for (let key in map) {
            if (map[key]) {
                callback(key, map[key]);
            }
        }
    }
    MapEx.forEach = forEach;
    function copy(map) {
        let res = {};
        for (let key in map) {
            res[key] = map[key];
        }
        return res;
    }
    MapEx.copy = copy;
})(MapEx || (MapEx = {}));

var foreign155 = Object.freeze({
    __proto__: null,
    get MapEx() {
        return MapEx;
    }
});

class GunModuleC extends ModuleC {
    onStart() {}
    switchGun(gunId) {
        this.server.net_switchGun(gunId);
    }
}

var foreign93 = Object.freeze({
    __proto__: null,
    default: GunModuleC
});

var ShopType;

(function(ShopType) {
    ShopType[ShopType["Gun"] = 0] = "Gun";
    ShopType[ShopType["Role"] = 1] = "Role";
    ShopType[ShopType["Trailing"] = 2] = "Trailing";
})(ShopType || (ShopType = {}));

var PriceType;

(function(PriceType) {
    PriceType[PriceType["Free"] = 0] = "Free";
    PriceType[PriceType["CoinAds"] = 1] = "CoinAds";
    PriceType[PriceType["Ads"] = 2] = "Ads";
})(PriceType || (PriceType = {}));

class ShopData extends Subdata {
    constructor() {
        super(...arguments);
        this.shopIds = {};
        this.useShopIds = {};
    }
    initDefaultData() {
        let gunId = Utils.randomInt(1, 2);
        let roleId = Utils.randomInt(1, 5);
        this.shopIds = {
            [ShopType.Gun]: [ gunId ],
            [ShopType.Role]: [ roleId ]
        };
        this.useShopIds = {
            [ShopType.Gun]: gunId,
            [ShopType.Role]: roleId
        };
    }
    setShopId(shopType, shopId) {
        if (MapEx.has(this.shopIds, shopType)) {
            MapEx.get(this.shopIds, shopType).push(shopId);
        } else {
            MapEx.set(this.shopIds, shopType, [ shopId ]);
        }
        this.save(true);
    }
    setUseShopId(shopType, shopId) {
        MapEx.set(this.useShopIds, shopType, shopId);
        this.save(true);
    }
    buyComplete() {
        this.shopIds = {};
        let weaponIds = [];
        for (let i = 1; i <= 14; ++i) {
            weaponIds.push(i);
        }
        MapEx.set(this.shopIds, ShopType.Gun, weaponIds);
        let skinIds = [];
        for (let i = 1; i < 34; ++i) {
            skinIds.push(i);
        }
        MapEx.set(this.shopIds, ShopType.Role, skinIds);
        let trailIds = [];
        for (let i = 1; i < 63; ++i) {
            trailIds.push(i);
        }
        MapEx.set(this.shopIds, ShopType.Trailing, trailIds);
        this.save(false);
    }
}

__decorate([ Decorator.persistence() ], ShopData.prototype, "shopIds", void 0);

__decorate([ Decorator.persistence() ], ShopData.prototype, "useShopIds", void 0);

var foreign135 = Object.freeze({
    __proto__: null,
    get PriceType() {
        return PriceType;
    },
    get ShopType() {
        return ShopType;
    },
    default: ShopData
});

let ShopPanel_Generate = class ShopPanel_Generate extends UIScript {
    get mTabCanvas() {
        if (!this.mTabCanvas_Internal && this.uiWidgetBase) {
            this.mTabCanvas_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/RightCanvas/mTabCanvas");
        }
        return this.mTabCanvas_Internal;
    }
    get mTabButton_0() {
        if (!this.mTabButton_0_Internal && this.uiWidgetBase) {
            this.mTabButton_0_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/RightCanvas/mTabCanvas/mTabButton_0");
        }
        return this.mTabButton_0_Internal;
    }
    get mTabButton_1() {
        if (!this.mTabButton_1_Internal && this.uiWidgetBase) {
            this.mTabButton_1_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/RightCanvas/mTabCanvas/mTabButton_1");
        }
        return this.mTabButton_1_Internal;
    }
    get mTabButton_2() {
        if (!this.mTabButton_2_Internal && this.uiWidgetBase) {
            this.mTabButton_2_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/RightCanvas/mTabCanvas/mTabButton_2");
        }
        return this.mTabButton_2_Internal;
    }
    get mBuyButton() {
        if (!this.mBuyButton_Internal && this.uiWidgetBase) {
            this.mBuyButton_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/RightCanvas/mTabCanvas/mBuyButton");
        }
        return this.mBuyButton_Internal;
    }
    get mScrollBox() {
        if (!this.mScrollBox_Internal && this.uiWidgetBase) {
            this.mScrollBox_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/RightCanvas/mScrollBox");
        }
        return this.mScrollBox_Internal;
    }
    get mContentCanvas() {
        if (!this.mContentCanvas_Internal && this.uiWidgetBase) {
            this.mContentCanvas_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/RightCanvas/mScrollBox/mContentCanvas");
        }
        return this.mContentCanvas_Internal;
    }
    get mCloseButton() {
        if (!this.mCloseButton_Internal && this.uiWidgetBase) {
            this.mCloseButton_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mCloseButton");
        }
        return this.mCloseButton_Internal;
    }
    onAwake() {
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        this.mTabButton_0.onClicked.add((() => {
            Event.dispatchToLocal("PlayButtonClick", "mTabButton_0");
        }));
        this.mTabButton_0.touchMethod = mw.ButtonTouchMethod.PreciseTap;
        this.mTabButton_1.onClicked.add((() => {
            Event.dispatchToLocal("PlayButtonClick", "mTabButton_1");
        }));
        this.mTabButton_1.touchMethod = mw.ButtonTouchMethod.PreciseTap;
        this.mTabButton_2.onClicked.add((() => {
            Event.dispatchToLocal("PlayButtonClick", "mTabButton_2");
        }));
        this.mTabButton_2.touchMethod = mw.ButtonTouchMethod.PreciseTap;
        this.mBuyButton.onClicked.add((() => {
            Event.dispatchToLocal("PlayButtonClick", "mBuyButton");
        }));
        this.mBuyButton.touchMethod = mw.ButtonTouchMethod.PreciseTap;
        this.mCloseButton.onClicked.add((() => {
            Event.dispatchToLocal("PlayButtonClick", "mCloseButton");
        }));
        this.mCloseButton.touchMethod = mw.ButtonTouchMethod.PreciseTap;
        this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/RightCanvas/mTabCanvas/mTabButton_0/TabTextBlock_0"));
        this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/RightCanvas/mTabCanvas/mTabButton_1/TabTextBlock_1"));
        this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/RightCanvas/mTabCanvas/mTabButton_2/TabTextBlock_2"));
        this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/RightCanvas/mTabCanvas/mBuyButton/TabTextBlock"));
    }
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) {}
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    hide() {
        mw.UIService.hideUI(this);
    }
};

ShopPanel_Generate = __decorate([ UIBind("UI/module/ShopModule/ShopPanel.ui") ], ShopPanel_Generate);

var ShopPanel_Generate$1 = ShopPanel_Generate;

var foreign195 = Object.freeze({
    __proto__: null,
    default: ShopPanel_Generate$1
});

let ShopItem_Generate = class ShopItem_Generate extends UIScript {
    get mICONImage() {
        if (!this.mICONImage_Internal && this.uiWidgetBase) {
            this.mICONImage_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/MainCanvas/mICONImage");
        }
        return this.mICONImage_Internal;
    }
    get mNameTextBlock() {
        if (!this.mNameTextBlock_Internal && this.uiWidgetBase) {
            this.mNameTextBlock_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/MainCanvas/mNameTextBlock");
        }
        return this.mNameTextBlock_Internal;
    }
    get mHasTypeTextBlock() {
        if (!this.mHasTypeTextBlock_Internal && this.uiWidgetBase) {
            this.mHasTypeTextBlock_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/MainCanvas/mHasTypeTextBlock");
        }
        return this.mHasTypeTextBlock_Internal;
    }
    get mHasTextBlock() {
        if (!this.mHasTextBlock_Internal && this.uiWidgetBase) {
            this.mHasTextBlock_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/MainCanvas/mHasTextBlock");
        }
        return this.mHasTextBlock_Internal;
    }
    get mPreButton() {
        if (!this.mPreButton_Internal && this.uiWidgetBase) {
            this.mPreButton_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/MainCanvas/mPreButton");
        }
        return this.mPreButton_Internal;
    }
    get mPropCanvas() {
        if (!this.mPropCanvas_Internal && this.uiWidgetBase) {
            this.mPropCanvas_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/MainCanvas/mPropCanvas");
        }
        return this.mPropCanvas_Internal;
    }
    get mHurtCanvas() {
        if (!this.mHurtCanvas_Internal && this.uiWidgetBase) {
            this.mHurtCanvas_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/MainCanvas/mPropCanvas/mHurtCanvas");
        }
        return this.mHurtCanvas_Internal;
    }
    get mHurtTextBlock() {
        if (!this.mHurtTextBlock_Internal && this.uiWidgetBase) {
            this.mHurtTextBlock_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/MainCanvas/mPropCanvas/mHurtCanvas/mHurtTextBlock");
        }
        return this.mHurtTextBlock_Internal;
    }
    get mBulletCanvas() {
        if (!this.mBulletCanvas_Internal && this.uiWidgetBase) {
            this.mBulletCanvas_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/MainCanvas/mPropCanvas/mBulletCanvas");
        }
        return this.mBulletCanvas_Internal;
    }
    get mBulletCountTextBlock() {
        if (!this.mBulletCountTextBlock_Internal && this.uiWidgetBase) {
            this.mBulletCountTextBlock_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/MainCanvas/mPropCanvas/mBulletCanvas/mBulletCountTextBlock");
        }
        return this.mBulletCountTextBlock_Internal;
    }
    get mBuyCanvas() {
        if (!this.mBuyCanvas_Internal && this.uiWidgetBase) {
            this.mBuyCanvas_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/MainCanvas/mBuyCanvas");
        }
        return this.mBuyCanvas_Internal;
    }
    get mDiamondBuyCanvas() {
        if (!this.mDiamondBuyCanvas_Internal && this.uiWidgetBase) {
            this.mDiamondBuyCanvas_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/MainCanvas/mBuyCanvas/mDiamondBuyCanvas");
        }
        return this.mDiamondBuyCanvas_Internal;
    }
    get mDiamondBuyButton() {
        if (!this.mDiamondBuyButton_Internal && this.uiWidgetBase) {
            this.mDiamondBuyButton_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/MainCanvas/mBuyCanvas/mDiamondBuyCanvas/mDiamondBuyButton");
        }
        return this.mDiamondBuyButton_Internal;
    }
    get mDiamondBuyTextBlock() {
        if (!this.mDiamondBuyTextBlock_Internal && this.uiWidgetBase) {
            this.mDiamondBuyTextBlock_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/MainCanvas/mBuyCanvas/mDiamondBuyCanvas/mDiamondBuyTextBlock");
        }
        return this.mDiamondBuyTextBlock_Internal;
    }
    get mCoinBuyCanvas() {
        if (!this.mCoinBuyCanvas_Internal && this.uiWidgetBase) {
            this.mCoinBuyCanvas_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/MainCanvas/mBuyCanvas/mCoinBuyCanvas");
        }
        return this.mCoinBuyCanvas_Internal;
    }
    get mCoinBuyButton() {
        if (!this.mCoinBuyButton_Internal && this.uiWidgetBase) {
            this.mCoinBuyButton_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/MainCanvas/mBuyCanvas/mCoinBuyCanvas/mCoinBuyButton");
        }
        return this.mCoinBuyButton_Internal;
    }
    get mCoinPriceTextBlock() {
        if (!this.mCoinPriceTextBlock_Internal && this.uiWidgetBase) {
            this.mCoinPriceTextBlock_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/MainCanvas/mBuyCanvas/mCoinBuyCanvas/mCoinPriceTextBlock");
        }
        return this.mCoinPriceTextBlock_Internal;
    }
    get mUseCanvas() {
        if (!this.mUseCanvas_Internal && this.uiWidgetBase) {
            this.mUseCanvas_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/MainCanvas/mUseCanvas");
        }
        return this.mUseCanvas_Internal;
    }
    get mUseButton() {
        if (!this.mUseButton_Internal && this.uiWidgetBase) {
            this.mUseButton_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/MainCanvas/mUseCanvas/mUseButton");
        }
        return this.mUseButton_Internal;
    }
    get mUesTextBlock() {
        if (!this.mUesTextBlock_Internal && this.uiWidgetBase) {
            this.mUesTextBlock_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/MainCanvas/mUseCanvas/mUesTextBlock");
        }
        return this.mUesTextBlock_Internal;
    }
    onAwake() {
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        this.mPreButton.onClicked.add((() => {
            Event.dispatchToLocal("PlayButtonClick", "mPreButton");
        }));
        this.mPreButton.touchMethod = mw.ButtonTouchMethod.PreciseTap;
        this.mDiamondBuyButton.onClicked.add((() => {
            Event.dispatchToLocal("PlayButtonClick", "mDiamondBuyButton");
        }));
        this.mDiamondBuyButton.touchMethod = mw.ButtonTouchMethod.PreciseTap;
        this.mCoinBuyButton.onClicked.add((() => {
            Event.dispatchToLocal("PlayButtonClick", "mCoinBuyButton");
        }));
        this.mCoinBuyButton.touchMethod = mw.ButtonTouchMethod.PreciseTap;
        this.mUseButton.onClicked.add((() => {
            Event.dispatchToLocal("PlayButtonClick", "mUseButton");
        }));
        this.mUseButton.touchMethod = mw.ButtonTouchMethod.PreciseTap;
        this.initLanguage(this.mNameTextBlock);
        this.initLanguage(this.mHasTypeTextBlock);
        this.initLanguage(this.mHasTextBlock);
        this.initLanguage(this.mHurtTextBlock);
        this.initLanguage(this.mBulletCountTextBlock);
        this.initLanguage(this.mDiamondBuyTextBlock);
        this.initLanguage(this.mCoinPriceTextBlock);
        this.initLanguage(this.mUesTextBlock);
    }
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) {}
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    hide() {
        mw.UIService.hideUI(this);
    }
};

ShopItem_Generate = __decorate([ UIBind("UI/module/ShopModule/ShopItem.ui") ], ShopItem_Generate);

var ShopItem_Generate$1 = ShopItem_Generate;

var foreign194 = Object.freeze({
    __proto__: null,
    default: ShopItem_Generate$1
});

class ShopItem extends ShopItem_Generate$1 {
    constructor() {
        super(...arguments);
        this.shopModuleC = null;
        this.confirmPanel = null;
        this.key = null;
        this.shopType = null;
        this.isHas = false;
    }
    get getShopModuleC() {
        if (this.shopModuleC == null) {
            this.shopModuleC = ModuleService.getModule(ShopModuleC);
        }
        return this.shopModuleC;
    }
    get getConfirmPanel() {
        if (this.confirmPanel == null) {
            this.confirmPanel = UIService.getUI(ConfirmPanel);
        }
        return this.confirmPanel;
    }
    onStart() {
        this.canUpdate = false;
        this.layer = UILayerMiddle;
        this.initModule();
        this.initUIPanel();
        this.bindBUttons();
    }
    initModule() {
        this.shopModuleC = ModuleService.getModule(ShopModuleC);
    }
    initUIPanel() {
        this.confirmPanel = UIService.getUI(ConfirmPanel);
    }
    bindBUttons() {
        this.mCoinBuyButton.onClicked.add(this.onClickCoinBuyButton.bind(this));
        this.mDiamondBuyButton.onClicked.add(this.onClickDiamondBuyButton.bind(this));
        this.mUseButton.onClicked.add(this.onClickUseButton.bind(this));
        this.mPreButton.onClicked.add(this.onClickPreButton.bind(this));
    }
    onClickCoinBuyButton() {
        if (!this.isCanSuccessfulClick()) return;
        this.getShopModuleC.previewShopItem(this.key, this.shopType);
        let contentText = "<size=80>确认花费</size>\n" + "<size=100><color=#yellow>" + this.getShopModuleC.getGoodPrice(this.key, this.shopType)[1] + "</color></size><size=80>金币</size>";
        this.getConfirmPanel.confirmTips((() => {
            if (!this.getShopModuleC.buyShopItemByCoin(this.key, this.shopType)) return;
            this.buyCompleted();
            this.getConfirmPanel.confirmTips((() => {
                this.getShopModuleC.useShopItem(this.key, this.shopType);
            }), "是否立即使用", "是", "否");
        }), contentText, "购买");
    }
    onClickDiamondBuyButton() {
        if (!this.isCanSuccessfulClick()) return;
        this.getShopModuleC.previewShopItem(this.key, this.shopType);
        let contentText = "<size=80>确认花费</size>\n" + "<size=100><color=#blue>" + this.getShopModuleC.getGoodPrice(this.key, this.shopType)[0] + "</color></size><size=80>钻石</size>";
        this.getConfirmPanel.confirmTips((() => {
            if (!this.getShopModuleC.buyShopItemByDiamond(this.key, this.shopType)) return;
            this.buyCompleted();
            this.getConfirmPanel.confirmTips((() => {
                this.getShopModuleC.useShopItem(this.key, this.shopType);
            }), "是否立即使用", "是", "否");
        }), contentText, "购买");
    }
    onClickUseButton() {
        if (!this.isCanSuccessfulClick()) return;
        this.getShopModuleC.useShopItem(this.key, this.shopType);
    }
    onClickPreButton() {
        if (!this.isCanSuccessfulClick()) return;
        this.getShopModuleC.previewShopItem(this.key, this.shopType);
    }
    buyCompleted() {
        this.isHas = true;
        this.mHasTextBlock.text = this.isHas ? "已获得" : "未获得";
        this.updateHasState();
    }
    isCanSuccessfulClick() {
        if (this.key == null || this.shopType == null) {
            Notice.showDownNotice("出错啦");
            return false;
        }
        return true;
    }
    setData(key, shopType) {
        this.key = key;
        this.shopType = shopType;
        this.isHas = this.getShopModuleC.isHasShopId(this.key, this.shopType);
        this.mHasTextBlock.text = this.isHas ? "已获得" : "未获得";
        switch (this.shopType) {
          case ShopType.Gun:
            this.setGun(key);
            break;

          case ShopType.Role:
            this.setRole(key);
            break;

          case ShopType.Trailing:
            this.setTrailing(key);
            break;
        }
        Utils.setWidgetVisibility(this.mPropCanvas, shopType == ShopType.Gun ? mw.SlateVisibility.SelfHitTestInvisible : mw.SlateVisibility.Collapsed);
        this.updateHasState();
    }
    setGun(key) {
        let gunElement = GameConfig.GUN.getElement(key);
        this.setIcon(gunElement.GUNICON_M, true);
        if (key == 1) this.mICONImage.renderScale = mw.Vector2.one.multiply(.8); else if (key == 14) this.mICONImage.renderTransformAngle = 90; else {
            this.mICONImage.renderScale = mw.Vector2.one;
            this.mICONImage.renderTransformAngle = 0;
        }
        this.mNameTextBlock.text = gunElement.GUNNAME;
        this.mHasTypeTextBlock.text = gunElement.PRICETYPE == PriceType.Ads ? "限时" : "永久";
        this.mHurtTextBlock.text = "伤害:" + gunElement.HURT;
        this.mBulletCountTextBlock.text = "子弹:" + gunElement.BULLETCOUNT + "/∞";
        if (this.isHas) return;
        this.updatePrice(gunElement.PRICETYPE, gunElement.PRICE);
    }
    setRole(key) {
        let roleElement = GameConfig.ROLE.getElement(key);
        this.setIcon(roleElement.ROLEID, false);
        this.mICONImage.renderScale = mw.Vector2.one;
        this.mICONImage.renderTransformAngle = 0;
        this.mNameTextBlock.text = roleElement.NAME;
        this.mHasTypeTextBlock.text = roleElement.PRICETYPE == PriceType.Ads ? "限时" : "永久";
        if (this.isHas) return;
        this.updatePrice(roleElement.PRICETYPE, roleElement.PRICE);
    }
    setTrailing(key) {
        let trailingElement = GameConfig.TRAILING.getElement(key);
        this.setIcon(trailingElement.TRAILING, false);
        this.mICONImage.renderScale = mw.Vector2.one;
        this.mICONImage.renderTransformAngle = 0;
        this.mNameTextBlock.text = trailingElement.NAME;
        this.mHasTypeTextBlock.text = trailingElement.PRICETYPE == PriceType.Ads ? "限时" : "永久";
        if (this.isHas) return;
        this.updatePrice(trailingElement.PRICETYPE, trailingElement.PRICE);
    }
    setIcon(guid, isGunIcon) {
        Utils.setImageByAssetIconData(this.mICONImage, guid);
        let size = new mw.Vector2(200, 200);
        let position = new mw.Vector2(100, 0);
        if (isGunIcon) {
            size = new mw.Vector2(300, 300);
            position = new mw.Vector2(50, -50);
        }
        this.mICONImage.size = size;
        this.mICONImage.position = position;
    }
    updateHasState() {
        Utils.setWidgetVisibility(this.mUseCanvas, this.isHas ? mw.SlateVisibility.SelfHitTestInvisible : mw.SlateVisibility.Collapsed);
        Utils.setWidgetVisibility(this.mBuyCanvas, this.isHas ? mw.SlateVisibility.Collapsed : mw.SlateVisibility.SelfHitTestInvisible);
    }
    updatePrice(priceType, prices) {
        if (priceType == PriceType.Ads) {
            Utils.setWidgetVisibility(this.mCoinBuyCanvas, mw.SlateVisibility.Collapsed);
            this.mDiamondBuyCanvas.position = new mw.Vector2(111, 0);
        } else {
            Utils.setWidgetVisibility(this.mCoinBuyCanvas, mw.SlateVisibility.SelfHitTestInvisible);
            this.mDiamondBuyCanvas.position = new mw.Vector2(0, 0);
            this.mCoinPriceTextBlock.text = prices[1] + "";
        }
        this.mDiamondBuyTextBlock.text = prices[0] + "";
    }
}

var foreign138 = Object.freeze({
    __proto__: null,
    default: ShopItem
});

class ShopPanel extends ShopPanel_Generate$1 {
    constructor() {
        super(...arguments);
        this.shopModuleC = null;
        this.shopTypes = [ 14, 34, 63 ];
        this.mTabButtons = [];
        this.currentShopType = ShopType.Gun;
        this.currentTabButton = null;
        this.shopItems = [];
    }
    get getShopModuleC() {
        if (this.shopModuleC == null) {
            this.shopModuleC = ModuleService.getModule(ShopModuleC);
        }
        return this.shopModuleC;
    }
    onStart() {
        this.canUpdate = false;
        this.layer = UILayerMiddle;
        this.initUI();
        this.initModule();
        this.bindButtons();
    }
    initModule() {
        this.shopModuleC = ModuleService.getModule(ShopModuleC);
    }
    bindButtons() {
        this.mCloseButton.onClicked.add(this.onClickCloseButton.bind(this));
        this.mBuyButton.onClicked.add(this.addBuyButton.bind(this));
    }
    addBuyButton() {
        this.getShopModuleC.onBuyAction.call();
    }
    initUI() {
        for (let i = 0; i < 3; ++i) {
            this.mTabButtons.push(this["mTabButton_" + i]);
            this.mTabButtons[i].onClicked.add(this.onClickTabButton.bind(this, i));
        }
        this.updateTabState();
    }
    onClickTabButton(shopType) {
        if (this.currentShopType == shopType) return;
        this.currentShopType = shopType;
        this.updateTabState();
        this.getShopModuleC.switchPreviewShopType(this.currentShopType);
    }
    onClickCloseButton() {
        this.hideTween();
        this.getShopModuleC.onSwitchCameraAction.call(0);
        Event.dispatchToLocal(EventType.OnOffMainHUD, true);
    }
    updateTabState() {
        if (this.currentTabButton) Utils.setButtonEnable(this.currentTabButton, true);
        this.currentTabButton = this.mTabButtons[this.currentShopType];
        Utils.setButtonEnable(this.currentTabButton, false);
        this.updateShopItem();
    }
    updateShopItem() {
        if (this.shopItems.length > this.shopTypes[this.currentShopType]) {
            for (let i = 0; i < this.shopTypes[this.currentShopType]; ++i) {
                this.shopItems[i].setData(i + 1, this.currentShopType);
                Utils.setWidgetVisibility(this.shopItems[i].uiObject, mw.SlateVisibility.SelfHitTestInvisible);
            }
            for (let i = this.shopTypes[this.currentShopType]; i < this.shopItems.length; ++i) {
                Utils.setWidgetVisibility(this.shopItems[i].uiObject, mw.SlateVisibility.Collapsed);
            }
        } else {
            for (let i = 0; i < this.shopItems.length; ++i) {
                this.shopItems[i].setData(i + 1, this.currentShopType);
                Utils.setWidgetVisibility(this.shopItems[i].uiObject, mw.SlateVisibility.SelfHitTestInvisible);
            }
            for (let i = this.shopItems.length; i < this.shopTypes[this.currentShopType]; ++i) {
                let shopItem = UIService.create(ShopItem);
                shopItem.setData(i + 1, this.currentShopType);
                this.mContentCanvas.addChild(shopItem.uiObject);
                this.shopItems.push(shopItem);
            }
        }
        if (this.currentShopType == ShopType.Role) {
            Utils.setWidgetVisibility(this.shopItems[7].uiObject, mw.SlateVisibility.Collapsed);
            Utils.setWidgetVisibility(this.shopItems[9].uiObject, mw.SlateVisibility.Collapsed);
            Utils.setWidgetVisibility(this.shopItems[13].uiObject, mw.SlateVisibility.Collapsed);
            Utils.setWidgetVisibility(this.shopItems[32].uiObject, mw.SlateVisibility.Collapsed);
        }
    }
    onShow(...params) {
        this.updateShopItem();
        Utils.openUITween(this.rootCanvas, null, null);
    }
    hideTween() {
        Utils.closeUITween(this.rootCanvas, null, (() => {
            this.hide();
        }));
    }
}

var foreign139 = Object.freeze({
    __proto__: null,
    default: ShopPanel
});

class ShopModuleC extends ModuleC {
    constructor() {
        super(...arguments);
        this.hudModuleC = null;
        this.coinModuleC = null;
        this.gunModuleC = null;
        this.shopPanel = null;
        this.onBuyAction = new Action;
        this.shopIds = {};
        this.useShopIds = {};
        this.onSwitchCameraAction = new Action1;
        this.shopAnchor = null;
        this.shopNpcIntegratedMover = null;
        this.gunModel = null;
        this.gunkey = null;
        this.shopNpc = null;
        this.roleKey = null;
        this.trailingAnchor = null;
        this.trailingIntegratedMover = null;
        this.trailingEffect = null;
        this.trailingKey = null;
        this.holdGun = null;
        this.holdGunModelIds = [ "222534", "226213", "122720", "95676" ];
        this.holdGunScales = [ new mw.Vector(1.5, 1.5, 1.5), new mw.Vector(2, 2, 1.5), new mw.Vector(1, 1, 1), new mw.Vector(1, 1, 1) ];
        this.lastGunModelId = "";
        this.maleAnimationIds = [ "97864", "180888", "181135", "97854", "287708" ];
        this.femaleAnimationIds = [ "97863", "97865", "180888", "287708", "35438" ];
        this.lastAnimationId = "";
    }
    get getHUDModuleC() {
        if (this.hudModuleC == null) {
            this.hudModuleC = ModuleService.getModule(HUDModuleC);
        }
        return this.hudModuleC;
    }
    get getCoinModuleC() {
        if (this.coinModuleC == null) {
            this.coinModuleC = ModuleService.getModule(CoinModuleC);
        }
        return this.coinModuleC;
    }
    get getGunModuleC() {
        if (this.gunModuleC == null) {
            this.gunModuleC = ModuleService.getModule(GunModuleC);
        }
        return this.gunModuleC;
    }
    get getShopPanel() {
        if (this.shopPanel == null) {
            this.shopPanel = UIService.getUI(ShopPanel);
        }
        return this.shopPanel;
    }
    onStart() {
        this.initModule();
        this.bindActions();
        this.initEvent();
    }
    initModule() {
        this.hudModuleC = ModuleService.getModule(HUDModuleC);
        this.coinModuleC = ModuleService.getModule(CoinModuleC);
        this.gunModuleC = ModuleService.getModule(GunModuleC);
    }
    bindActions() {
        this.getHUDModuleC.onOpenShopAction.add(this.bindOpenShopAction.bind(this));
    }
    initEvent() {
        Event.addLocalListener(EventType.TryOutGun, this.setCharacterGun.bind(this));
        this.onBuyAction.add((() => {
            if (mw.SystemUtil.isPIE) {
                Notice.showDownNotice(`购买成功`);
                this.buyComplete();
            } else {
                mw.PurchaseService.placeOrder(`80oxZhv8bsv0002V4`, 1, ((status, msg) => {
                    mw.PurchaseService.getArkBalance();
                    if (status != 200) return;
                }));
            }
        }));
    }
    net_deliverGoods(commodityId, amount) {
        if (commodityId == "80oxZhv8bsv0002V4") {
            Notice.showDownNotice(`购买成功`);
            this.buyComplete();
        }
    }
    buyComplete() {
        this.shopIds = {};
        let weaponIds = [];
        for (let i = 1; i <= 14; ++i) {
            weaponIds.push(i);
        }
        MapEx.set(this.shopIds, ShopType.Gun, weaponIds);
        let skinIds = [];
        for (let i = 1; i <= 34; ++i) {
            skinIds.push(i);
        }
        MapEx.set(this.shopIds, ShopType.Role, skinIds);
        let trailIds = [];
        for (let i = 1; i <= 63; ++i) {
            trailIds.push(i);
        }
        MapEx.set(this.shopIds, ShopType.Trailing, trailIds);
        this.server.net_buyComplete();
        this.getShopPanel.updateShopItem();
    }
    bindOpenShopAction() {
        if (this.getHUDModuleC.getIsMorph && !this.localPlayer.character.getVisibility()) {
            Notice.showDownNotice("变身状态不可打开商店");
            return;
        }
        this.getShopPanel.show();
        this.onSwitchCameraAction.call(1);
        Event.dispatchToLocal(EventType.OnOffMainHUD, false);
    }
    onEnterScene(sceneType) {
        this.initShopData();
        this.initShopCamera();
        this.initShopAnchor();
        this.initShopNpc();
        this.initTrailingAnchor();
    }
    initShopData() {
        this.shopIds = this.data.shopIds;
        this.useShopIds = this.data.useShopIds;
        this.initUseShopItem();
        this.shopPanel = UIService.getUI(ShopPanel);
    }
    initUseShopItem() {
        if (MapEx.has(this.useShopIds, ShopType.Gun)) this.setCharacterGun();
        if (MapEx.has(this.useShopIds, ShopType.Trailing)) this.setCharacterTrailing(MapEx.get(this.useShopIds, ShopType.Trailing));
    }
    isAds(shopId, shopType) {
        switch (shopType) {
          case ShopType.Gun:
            return GameConfig.GUN.getElement(shopId).PRICETYPE == PriceType.Ads;

          case ShopType.Role:
            return GameConfig.ROLE.getElement(shopId).PRICETYPE == PriceType.Ads;

          case ShopType.Trailing:
            return GameConfig.TRAILING.getElement(shopId).PRICETYPE == PriceType.Ads;
        }
    }
    setShopId(shopType, shopId) {
        if (MapEx.has(this.shopIds, shopType)) {
            MapEx.get(this.shopIds, shopType).push(shopId);
        } else {
            MapEx.set(this.shopIds, shopType, [ shopId ]);
        }
        if (this.isAds(shopId, shopType)) return;
        this.server.net_setShopId(shopType, shopId);
    }
    isHasShopId(shopId, shopType) {
        return MapEx.has(this.shopIds, shopType) && MapEx.get(this.shopIds, shopType).includes(shopId);
    }
    buyShopItemByCoin(shopId, shopType) {
        let costPrice = this.getGoodPrice(shopId, shopType);
        if (this.getCoinModuleC.getCoin >= costPrice[1]) {
            this.getCoinModuleC.setCoin(-costPrice[1]);
            this.setShopId(shopType, shopId);
            Notice.showDownNotice("购买成功");
            return true;
        } else {
            Notice.showDownNotice("金币不足");
            this.getCoinModuleC.getCoinByAd();
            return false;
        }
    }
    buyShopItemByDiamond(shopId, shopType) {
        let costPrice = this.getGoodPrice(shopId, shopType);
        if (this.getCoinModuleC.getDiamond >= costPrice[0]) {
            this.getCoinModuleC.setDiamond(-costPrice[0]);
            this.setShopId(shopType, shopId);
            Notice.showDownNotice("购买成功");
            return true;
        } else {
            Notice.showDownNotice("钻石不足");
            this.getCoinModuleC.getDiamondByAd(costPrice[0]);
            return false;
        }
    }
    getGoodPrice(shopId, shopType) {
        switch (shopType) {
          case ShopType.Gun:
            return GameConfig.GUN.getElement(shopId).PRICE;

          case ShopType.Role:
            return GameConfig.ROLE.getElement(shopId).PRICE;

          case ShopType.Trailing:
            return GameConfig.TRAILING.getElement(shopId).PRICE;
        }
    }
    useShopItem(shopId, shopType) {
        this.previewShopItem(shopId, shopType);
        if (!this.setUseShopId(shopType, shopId)) {
            Notice.showDownNotice("穿戴中");
        }
        switch (shopType) {
          case ShopType.Gun:
            break;

          case ShopType.Role:
            this.setCharacterDescription(shopId);
            break;

          case ShopType.Trailing:
            this.setCharacterTrailing(shopId);
            break;
        }
    }
    setUseShopId_Gun(shopId) {
        if (MapEx.has(this.useShopIds, ShopType.Gun) && MapEx.get(this.useShopIds, ShopType.Gun) == shopId) return;
        MapEx.set(this.useShopIds, ShopType.Gun, shopId);
    }
    setUseShopId(shopType, shopId) {
        if (MapEx.has(this.useShopIds, shopType) && MapEx.get(this.useShopIds, shopType) == shopId) return false;
        MapEx.set(this.useShopIds, shopType, shopId);
        if (this.isAds(shopId, shopType)) return true;
        this.server.net_setUseShopId(shopType, shopId);
        return true;
    }
    setCharacterGun() {
        let gunId = MapEx.get(this.useShopIds, ShopType.Gun);
        this.getGunModuleC.switchGun(gunId);
    }
    async setCharacterDescription(shopId) {
        let roleId = GameConfig.ROLE.getElement(shopId).ROLEID;
        await Utils.asyncDownloadAsset(roleId);
        this.localPlayer.character.setDescription([ roleId ]);
        this.localPlayer.character.syncDescription();
        Notice.showDownNotice("皮肤成功穿戴");
    }
    setCharacterTrailing(shopId) {
        let trailingId = GameConfig.TRAILING.getElement(shopId).TRAILING;
        this.server.net_setCharacterTrailing(trailingId);
        Notice.showDownNotice("尾迹成功穿戴");
    }
    async initShopCamera() {
        let myCamera = Camera.currentCamera;
        let cameraAnchor = await GameObject.asyncFindGameObjectById("2547D5CE");
        let shopCamera = await GameObject.asyncSpawn("Camera", {
            replicates: false,
            transform: cameraAnchor.worldTransform
        });
        this.onSwitchCameraAction.add((cameraType => {
            if (cameraType == 0) {
                Camera.switch(myCamera);
                this.shopNpcIntegratedMover.enable = false;
                this.trailingIntegratedMover.enable = false;
                this.setCharacterGun();
            } else {
                Camera.switch(shopCamera, .5, mw.CameraSwitchBlendFunction.Linear);
                this.shopNpcIntegratedMover.enable = true;
                this.trailingIntegratedMover.enable = true;
            }
        }));
    }
    async initShopAnchor() {
        this.shopAnchor = await GameObject.asyncFindGameObjectById("3D9DE30C");
        this.shopNpcIntegratedMover = await GameObject.asyncSpawn("IntegratedMover");
        this.shopNpcIntegratedMover.parent = this.shopAnchor;
        this.shopNpcIntegratedMover.localTransform.position = mw.Vector.zero;
        this.shopNpcIntegratedMover.rotationSpeed = new mw.Vector(0, 0, 90);
        this.switchGunModel(MapEx.get(this.useShopIds, ShopType.Gun));
    }
    switchPreviewShopType(shopType) {
        this.setShopNpcGunState(shopType == ShopType.Gun);
    }
    previewShopItem(key, shopType) {
        switch (shopType) {
          case ShopType.Gun:
            this.switchGunModel(key);
            break;

          case ShopType.Role:
            this.setShopNpcDescription(key);
            break;

          case ShopType.Trailing:
            this.switchTrailing(key);
            break;
        }
    }
    async switchGunModel(key) {
        if (this.gunkey == key) {
            Notice.showDownNotice("正在预览");
            return;
        }
        this.gunkey = key;
        if (this.gunModel) GameObjPool.despawn(this.gunModel);
        let gunElement = GameConfig.GUN.getElement(key);
        let gunId = gunElement.GUNICON_M;
        await Utils.asyncDownloadAsset(gunId);
        this.gunModel = await GameObjPool.asyncSpawn(gunId, mwext.GameObjPoolSourceType.Asset);
        this.gunModel.parent = this.shopAnchor;
        this.gunModel.localTransform.position = gunElement.GUNLOC;
        this.gunModel.localTransform.rotation = new mw.Rotation(0, 15, 0);
        this.gunModel.localTransform.scale = gunElement.GUNSCALE;
        this.setShopNpcGunState(true);
    }
    async initShopNpc() {
        this.shopNpc = await GameObject.asyncSpawn("Character");
        this.shopNpc.parent = this.shopAnchor;
        this.shopNpc.localTransform.position = mw.Vector.zero;
        this.shopNpc.localTransform.rotation = mw.Rotation.zero;
        this.shopNpc.complexMovementEnabled = false;
        this.shopNpc.displayName = "";
        await this.setShopNpcDescription(MapEx.get(this.useShopIds, ShopType.Role));
        Utils.setGameObjectVisibility(this.shopNpc, false);
        Utils.setGameObjectVisibility(this.holdGun, false);
    }
    async setShopNpcDescription(key) {
        if (this.roleKey == key) {
            Notice.showDownNotice("正在预览");
            return;
        }
        this.roleKey = key;
        let roleId = GameConfig.ROLE.getElement(key).ROLEID;
        await Utils.asyncDownloadAsset(roleId);
        this.shopNpc.setDescription([ roleId ]);
        this.setShopNpcGunState(false);
        await this.setShopNpcState();
    }
    async initTrailingAnchor() {
        this.trailingAnchor = await GameObject.asyncFindGameObjectById("29541486");
        this.trailingIntegratedMover = await GameObject.asyncSpawn("IntegratedMover");
        this.trailingIntegratedMover.parent = this.trailingAnchor;
        this.trailingIntegratedMover.localTransform.position = mw.Vector.zero;
        this.trailingIntegratedMover.rotationSpeed = new mw.Vector(0, 0, 360);
    }
    switchTrailing(key) {
        if (this.trailingKey == key) {
            Notice.showDownNotice("正在预览");
            return;
        }
        this.trailingKey = key;
        if (this.trailingEffect) EffectService.stop(this.trailingEffect);
        this.trailingEffect = EffectService.playOnGameObject(GameConfig.TRAILING.getElement(key).TRAILING, this.trailingAnchor, {
            loopCount: 0,
            position: new mw.Vector(50, 0, 0)
        });
        this.setShopNpcGunState(false);
    }
    setShopNpcGunState(isShowGun) {
        if (this.shopNpc) Utils.setGameObjectVisibility(this.shopNpc, !isShowGun);
        if (this.gunModel) Utils.setGameObjectVisibility(this.gunModel, isShowGun);
    }
    async setShopNpcState() {
        if (!this.shopNpc) return;
        await this.switchHoldGunModle();
        await this.switchShopNpcAnimation();
    }
    async switchHoldGunModle() {
        if (!this.shopNpc) return;
        if (this.holdGun) GameObjPool.despawn(this.holdGun);
        this.lastGunModelId = Utils.randomOneDifferentId(this.holdGunModelIds, this.lastGunModelId);
        await Utils.asyncDownloadAsset(this.lastGunModelId);
        this.holdGun = await GameObjPool.asyncSpawn(this.lastGunModelId, mwext.GameObjPoolSourceType.Asset);
        this.shopNpc.attachToSlot(this.holdGun, mw.HumanoidSlotType.RightHand);
        this.holdGun.localTransform.position = mw.Vector.zero;
        this.holdGun.localTransform.rotation = mw.Rotation.zero;
        this.holdGun.localTransform.scale = this.holdGunScales[this.holdGunModelIds.indexOf(this.lastGunModelId)];
    }
    async switchShopNpcAnimation() {
        if (!this.shopNpc) return;
        await this.shopNpc.asyncReady();
        let isFemale = this.shopNpc.description.advance.base.characterSetting.somatotype % 2 == 0;
        this.lastAnimationId = Utils.randomOneDifferentId(isFemale ? this.femaleAnimationIds : this.maleAnimationIds, this.lastAnimationId);
        await Utils.asyncDownloadAsset(this.lastAnimationId);
        let shopNpcAnim = this.shopNpc.loadAnimation(this.lastAnimationId);
        shopNpcAnim.loop = 0;
        shopNpcAnim.play();
    }
}

var foreign136 = Object.freeze({
    __proto__: null,
    default: ShopModuleC
});

let ActivityPanel_Generate = class ActivityPanel_Generate extends UIScript {
    get mWhatDayTextBlock() {
        if (!this.mWhatDayTextBlock_Internal && this.uiWidgetBase) {
            this.mWhatDayTextBlock_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mWhatDayTextBlock");
        }
        return this.mWhatDayTextBlock_Internal;
    }
    get mAdsGetButton() {
        if (!this.mAdsGetButton_Internal && this.uiWidgetBase) {
            this.mAdsGetButton_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mAdsGetButton");
        }
        return this.mAdsGetButton_Internal;
    }
    get mMinutesTextBlock() {
        if (!this.mMinutesTextBlock_Internal && this.uiWidgetBase) {
            this.mMinutesTextBlock_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/GetCanvas/mMinutesTextBlock");
        }
        return this.mMinutesTextBlock_Internal;
    }
    get mGetButton() {
        if (!this.mGetButton_Internal && this.uiWidgetBase) {
            this.mGetButton_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/GetCanvas/mGetButton");
        }
        return this.mGetButton_Internal;
    }
    get mIconImage() {
        if (!this.mIconImage_Internal && this.uiWidgetBase) {
            this.mIconImage_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/ICONCanvas/mIconImage");
        }
        return this.mIconImage_Internal;
    }
    get mIconTextBlock() {
        if (!this.mIconTextBlock_Internal && this.uiWidgetBase) {
            this.mIconTextBlock_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/ICONCanvas/mIconTextBlock");
        }
        return this.mIconTextBlock_Internal;
    }
    get mLeftButton() {
        if (!this.mLeftButton_Internal && this.uiWidgetBase) {
            this.mLeftButton_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/PreviewCanvas/mLeftButton");
        }
        return this.mLeftButton_Internal;
    }
    get mIndexTextBlock() {
        if (!this.mIndexTextBlock_Internal && this.uiWidgetBase) {
            this.mIndexTextBlock_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/PreviewCanvas/mIndexTextBlock");
        }
        return this.mIndexTextBlock_Internal;
    }
    get mRightButton() {
        if (!this.mRightButton_Internal && this.uiWidgetBase) {
            this.mRightButton_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/PreviewCanvas/mRightButton");
        }
        return this.mRightButton_Internal;
    }
    get mCloseButton() {
        if (!this.mCloseButton_Internal && this.uiWidgetBase) {
            this.mCloseButton_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mCloseButton");
        }
        return this.mCloseButton_Internal;
    }
    onAwake() {
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        this.mAdsGetButton.onClicked.add((() => {
            Event.dispatchToLocal("PlayButtonClick", "mAdsGetButton");
        }));
        this.mAdsGetButton.touchMethod = mw.ButtonTouchMethod.PreciseTap;
        this.mGetButton.onClicked.add((() => {
            Event.dispatchToLocal("PlayButtonClick", "mGetButton");
        }));
        this.mGetButton.touchMethod = mw.ButtonTouchMethod.PreciseTap;
        this.mLeftButton.onClicked.add((() => {
            Event.dispatchToLocal("PlayButtonClick", "mLeftButton");
        }));
        this.mLeftButton.touchMethod = mw.ButtonTouchMethod.PreciseTap;
        this.mRightButton.onClicked.add((() => {
            Event.dispatchToLocal("PlayButtonClick", "mRightButton");
        }));
        this.mRightButton.touchMethod = mw.ButtonTouchMethod.PreciseTap;
        this.mCloseButton.onClicked.add((() => {
            Event.dispatchToLocal("PlayButtonClick", "mCloseButton");
        }));
        this.mCloseButton.touchMethod = mw.ButtonTouchMethod.PreciseTap;
        this.initLanguage(this.mWhatDayTextBlock);
        this.initLanguage(this.mMinutesTextBlock);
        this.initLanguage(this.mIconTextBlock);
        this.initLanguage(this.mIndexTextBlock);
        this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/mAdsGetButton/AdsTextBlock"));
        this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/GetCanvas/mGetButton/GetTextBlock"));
    }
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) {}
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    hide() {
        mw.UIService.hideUI(this);
    }
};

ActivityPanel_Generate = __decorate([ UIBind("UI/module/ActivityModule/ActivityPanel.ui") ], ActivityPanel_Generate);

var ActivityPanel_Generate$1 = ActivityPanel_Generate;

var foreign166 = Object.freeze({
    __proto__: null,
    default: ActivityPanel_Generate$1
});

class ActivityPanel extends ActivityPanel_Generate$1 {
    constructor() {
        super(...arguments);
        this.activityModuleC = null;
        this.adPanel = null;
        this.confirmPanel = null;
        this.coinModuleC = null;
        this.activityData = [ {
            shopId: 2,
            shopType: ShopType.Gun,
            shopIcon: "155696"
        }, {
            shopId: 3,
            shopType: ShopType.Gun,
            shopIcon: "226214"
        }, {
            shopId: 4,
            shopType: ShopType.Gun,
            shopIcon: "138213"
        }, {
            shopId: 5,
            shopType: ShopType.Gun,
            shopIcon: "153110"
        }, {
            shopId: 6,
            shopType: ShopType.Gun,
            shopIcon: "226213"
        }, {
            shopId: 7,
            shopType: ShopType.Gun,
            shopIcon: "155702"
        }, {
            shopId: 8,
            shopType: ShopType.Gun,
            shopIcon: "318664"
        } ];
        this.currentIndex = -1;
        this.minutes = 0;
    }
    get getActivityModuleC() {
        if (!this.activityModuleC) {
            this.activityModuleC = ModuleService.getModule(ActivityModuleC);
        }
        return this.activityModuleC;
    }
    get getAdPanel() {
        if (this.adPanel == null) {
            this.adPanel = UIService.getUI(AdPanel);
        }
        return this.adPanel;
    }
    get getConfirmPanel() {
        if (this.confirmPanel == null) {
            this.confirmPanel = UIService.getUI(ConfirmPanel);
        }
        return this.confirmPanel;
    }
    get getCoinModuleC() {
        if (this.coinModuleC == null) {
            this.coinModuleC = ModuleService.getModule(CoinModuleC);
        }
        return this.coinModuleC;
    }
    onStart() {
        this.canUpdate = false;
        this.layer = UILayerMiddle;
        this.initModule();
        this.initUIPanel();
        this.initUI();
        this.bindButtons();
    }
    initModule() {
        this.activityModuleC = ModuleService.getModule(ActivityModuleC);
    }
    initUIPanel() {
        this.adPanel = UIService.getUI(AdPanel);
    }
    initUI() {
        this.currentIndex = Number(Utils.getWhatDay());
        this.updateIconTextUI();
    }
    bindButtons() {
        this.mCloseButton.onClicked.add(this.onClickCloseButton.bind(this));
        this.mLeftButton.onClicked.add(this.onClickLeftButton.bind(this));
        this.mRightButton.onClicked.add(this.onClickRightButton.bind(this));
        this.mGetButton.onClicked.add(this.onClickGetButton.bind(this));
        this.mAdsGetButton.onClicked.add(this.onClickAdsGetButton.bind(this));
    }
    onClickCloseButton() {
        this.hideTween();
        Event.dispatchToLocal(EventType.OnOffMainHUD, true);
    }
    onClickLeftButton() {
        this.currentIndex--;
        if (this.currentIndex < 1) this.currentIndex = this.activityData.length;
        this.updateIconTextUI();
    }
    onClickRightButton() {
        this.currentIndex++;
        if (this.currentIndex > this.activityData.length) this.currentIndex = 1;
        this.updateIconTextUI();
    }
    onClickGetButton() {
        if (!this.isHasCondition(false)) return;
        if (this.minutes < 30) {
            Notice.showDownNotice("今日在线时长不足30分钟(" + this.minutes + "/30)");
            return;
        }
        this.setGetActivity();
    }
    onClickAdsGetButton() {
        if (!this.isHasCondition(true)) return;
        this.getAdPanel.showRewardAd((() => {
            this.setGetActivity();
        }), "免费领取" + this.getActicityShopTypeStr());
    }
    setGetActivity() {
        this.getActivityModuleC.setGetActivity(this.activityData[this.currentIndex - 1].shopId, this.activityData[this.currentIndex - 1].shopType);
        Notice.showDownNotice("领取成功");
    }
    updateIconTextUI() {
        this.mIndexTextBlock.text = this.currentIndex + "/7";
        this.mWhatDayTextBlock.text = this.getWhatDayStr() + "\n(星期" + Utils.weekNumChangeToCN(this.currentIndex) + ")";
        Utils.setImageByAssetIconData(this.mIconImage, this.activityData[this.currentIndex - 1].shopIcon);
        this.mIconTextBlock.text = this.getActicityShopTypeStr();
    }
    getWhatDayStr() {
        let whatDay = this.getActivityModuleC.getData();
        let offsetDay = this.currentIndex - whatDay;
        if (whatDay == 1 && offsetDay == 6) return "昨日奖励";
        if (whatDay == 7 && offsetDay == -6) return "明日奖励";
        if (offsetDay == 0) return "今日奖励";
        if (offsetDay == 1) return "明日奖励";
        if (offsetDay == -1) return "昨日奖励";
        return "星期" + Utils.weekNumChangeToCN(this.currentIndex) + "奖励";
    }
    getActicityShopTypeStr() {
        switch (this.activityData[this.currentIndex - 1].shopType) {
          case ShopType.Gun:
            return "步枪";

          case ShopType.Role:
            return "皮肤";

          case ShopType.Trailing:
            return "拖尾";
        }
    }
    updateMinutesUI(minutes) {
        this.minutes = minutes;
        this.mMinutesTextBlock.text = "已在线 " + minutes + "/30(分钟)";
    }
    isHasCondition(isAds) {
        if (this.getActivityModuleC.isHasGet(this.activityData[this.currentIndex - 1].shopId, this.activityData[this.currentIndex - 1].shopType)) {
            Notice.showDownNotice("已领取");
            return false;
        }
        if (isAds) return true;
        let whatDay = this.getActivityModuleC.getData();
        if (whatDay != this.currentIndex) {
            Notice.showDownNotice("今天星期" + Utils.weekNumChangeToCN(whatDay));
            Notice.showDownNotice("不能领取星期" + Utils.weekNumChangeToCN(this.currentIndex) + "的奖励");
            return false;
        }
        return true;
    }
    onShow(...params) {
        Utils.openUITween(this.rootCanvas, null, null);
    }
    hideTween() {
        Utils.closeUITween(this.rootCanvas, null, (() => {
            this.hide();
        }));
    }
}

var foreign84 = Object.freeze({
    __proto__: null,
    default: ActivityPanel
});

class ActivityModuleC extends ModuleC {
    constructor() {
        super(...arguments);
        this.hudModuleC = null;
        this.hudPanel = null;
        this.shopModuleC = null;
        this.activityPanel = null;
        this.whatDay = 0;
        this.miniutes = 0;
        this.timer = 0;
        this.time = 60;
    }
    get getHUDModuleC() {
        if (this.hudModuleC == null) {
            this.hudModuleC = ModuleService.getModule(HUDModuleC);
        }
        return this.hudModuleC;
    }
    get getHUDPanel() {
        if (this.hudPanel == null) {
            this.hudPanel = UIService.getUI(HUDPanel);
        }
        return this.hudPanel;
    }
    get getShopModuleC() {
        if (this.shopModuleC == null) {
            this.shopModuleC = ModuleService.getModule(ShopModuleC);
        }
        return this.shopModuleC;
    }
    get getActivityPanel() {
        if (this.activityPanel == null) {
            this.activityPanel = UIService.getUI(ActivityPanel);
        }
        return this.activityPanel;
    }
    onStart() {
        this.initModule();
        this.initUIPanel();
        this.initActionEvent();
    }
    initModule() {
        this.hudModuleC = ModuleService.getModule(HUDModuleC);
        this.shopModuleC = ModuleService.getModule(ShopModuleC);
    }
    initUIPanel() {
        this.hudPanel = UIService.getUI(HUDPanel);
    }
    initActionEvent() {
        this.getHUDModuleC.onOpenActivityAction.add(this.addOnOffActivityPanel.bind(this));
    }
    addOnOffActivityPanel() {
        this.getActivityPanel.show();
        Event.dispatchToLocal(EventType.OnOffMainHUD, false);
    }
    onEnterScene(sceneType) {
        this.initActivityData();
        this.activityPanel = UIService.getUI(ActivityPanel);
    }
    initActivityData() {
        this.whatDay = this.data.whatDay;
        this.miniutes = this.data.minutes;
        let currentWhatDay = Number(Utils.getWhatDay());
        if (currentWhatDay != this.whatDay) {
            this.whatDay = currentWhatDay;
            this.miniutes = 0;
            this.setData(this.whatDay);
        }
        this.getActivityPanel.updateMinutesUI(this.miniutes);
        if (this.miniutes < 30) this.getHUDPanel.startActivityRedPointTween();
    }
    onUpdate(dt) {
        if (this.miniutes >= 30) return;
        this.timer += dt;
        if (this.timer >= this.time) {
            this.timer = 0;
            this.miniutes++;
            this.setMinutes(this.miniutes);
        }
    }
    setData(whatDay) {
        this.server.net_setData(whatDay);
    }
    getData() {
        return this.whatDay;
    }
    setMinutes(minutes) {
        this.getActivityPanel.updateMinutesUI(minutes);
        this.server.net_setMinutes(minutes);
    }
    isHasGet(shopId, shopType) {
        return this.getShopModuleC.isHasShopId(shopId, shopType);
    }
    setGetActivity(shopId, shopType) {
        this.getHUDPanel.stopActivityRedPointTween();
        this.getShopModuleC.setShopId(shopType, shopId);
    }
}

var foreign82 = Object.freeze({
    __proto__: null,
    default: ActivityModuleC
});

class ActivityModuleS extends ModuleS {
    onStart() {}
    net_setData(whatDay) {
        this.currentData.setData(whatDay);
    }
    net_setMinutes(minutes) {
        this.currentData.setMinutes(minutes);
    }
}

__decorate([ Decorator.noReply() ], ActivityModuleS.prototype, "net_setData", null);

__decorate([ Decorator.noReply() ], ActivityModuleS.prototype, "net_setMinutes", null);

var foreign83 = Object.freeze({
    __proto__: null,
    default: ActivityModuleS
});

class CoinData extends Subdata {
    constructor() {
        super(...arguments);
        this.coin = 0;
        this.diamond = 0;
        this.isFirstBuy = true;
    }
    initDefaultData() {
        this.coin = 5e3;
        this.diamond = 0;
        this.isFirstBuy = true;
    }
    setCoin(coin) {
        this.coin = coin;
        this.save(true);
    }
    setDiamond(diamond) {
        this.diamond = diamond;
        this.save(true);
    }
    setFirstBuy(isFirstBuy) {
        this.isFirstBuy = isFirstBuy;
        this.save(true);
    }
}

__decorate([ Decorator.persistence() ], CoinData.prototype, "coin", void 0);

__decorate([ Decorator.persistence() ], CoinData.prototype, "diamond", void 0);

__decorate([ Decorator.persistence() ], CoinData.prototype, "isFirstBuy", void 0);

var foreign86 = Object.freeze({
    __proto__: null,
    default: CoinData
});

class CoinModuleS extends ModuleS {
    onStart() {
        this.bindEvent();
    }
    bindEvent() {}
    net_setCoin(coin) {
        this.currentData.setCoin(coin);
    }
    net_setDiamond(diamond) {
        this.currentData.setDiamond(diamond);
    }
    net_setFirstBuy(isFirstBuy) {
        this.currentData.setFirstBuy(isFirstBuy);
    }
    killPlayerAddCoin(player) {
        let coinData = DataCenterS.getData(player, CoinData);
        let randomCoin = Utils.randomInt(10, 30);
        coinData.coin += randomCoin;
        coinData.save(true);
        this.getClient(player).net_killPlayerAddCoin(randomCoin);
    }
}

__decorate([ Decorator.noReply() ], CoinModuleS.prototype, "net_setCoin", null);

__decorate([ Decorator.noReply() ], CoinModuleS.prototype, "net_setDiamond", null);

__decorate([ Decorator.noReply() ], CoinModuleS.prototype, "net_setFirstBuy", null);

var foreign88 = Object.freeze({
    __proto__: null,
    default: CoinModuleS
});

class GunModuleS extends ModuleS {
    constructor() {
        super(...arguments);
        this.weaponMap = new Map;
    }
    onStart() {}
    onPlayerLeft(player) {
        let userId = player.userId;
        if (!this.weaponMap.has(userId)) return;
        let weapon = this.weaponMap.get(userId);
        weapon?.getChildren().forEach((value => {
            value?.destroy();
        }));
        weapon?.destroy();
        this.weaponMap.delete(userId);
    }
    setGunState(userId, isHide) {
        if (!this.weaponMap.has(userId)) return;
    }
    net_switchGun(gunId) {
        let player = this.currentPlayer;
        this.switchStance(player);
        this.switchGun(gunId, player);
    }
    async switchStance(player) {
        let somatotype = player.character.description.advance.base.characterSetting.somatotype;
        let stanceId = somatotype % 2 == 0 ? "49098" : "94261";
        await Utils.asyncDownloadAsset(stanceId);
        player.character.loadSubStance(stanceId).play();
    }
    async switchGun(gunId, player) {
        player.character.movementEnabled = false;
        let weapon = await GameObject.asyncSpawn(GameConfig.GUN.getElement(gunId).GUNPREFAB, {
            replicates: true
        });
        await weapon.asyncReady();
        player.character.attachToSlot(weapon, mw.HumanoidSlotType.BackOrnamental);
        weapon.localTransform.position = mw.Vector.zero;
        weapon.localTransform.rotation = mw.Rotation.zero;
        player.character.movementEnabled = true;
        await TimeUtil.delaySecond(2);
        let userId = player.userId;
        if (this.weaponMap.has(userId)) {
            let weapon = this.weaponMap.get(userId);
            weapon?.getChildren().forEach((value => {
                value?.destroy();
            }));
            weapon?.destroy();
        }
        this.weaponMap.set(userId, weapon);
    }
}

__decorate([ Decorator.noReply() ], GunModuleS.prototype, "net_switchGun", null);

var foreign94 = Object.freeze({
    __proto__: null,
    default: GunModuleS
});

class HUDModuleS extends ModuleS {
    onStart() {}
    net_saveSetData(fireScale, controlScale, bgmVolume, soundVolume) {
        this.currentData.fireScale = fireScale;
        this.currentData.controlScale = controlScale;
        this.currentData.bgmVolume = bgmVolume;
        this.currentData.soundVolume = soundVolume;
        this.currentData.save(true);
    }
}

__decorate([ Decorator.noReply() ], HUDModuleS.prototype, "net_saveSetData", null);

var foreign99 = Object.freeze({
    __proto__: null,
    default: HUDModuleS
});

class MallData extends Subdata {}

class TabIdData {
    constructor() {
        this.tabId = 0;
        this.isOn = false;
        this.tabIdDataMap = new Map;
    }
}

class ColorPickTab2Data {
    constructor(text, color) {
        this.text = null;
        this.color = null;
        this.text = text;
        this.color = color;
    }
}

class AssetIdInfoData {
    constructor(assetId, slotType, slotIndex) {
        this.assetId = null;
        this.slotType = -1;
        this.slotIndex = -1;
        this.assetId = assetId;
        this.slotType = slotType;
        this.slotIndex = slotIndex;
    }
}

var TabType;

(function(TabType) {
    TabType[TabType["None"] = 0] = "None";
    TabType[TabType["Tab1"] = 1] = "Tab1";
    TabType[TabType["Tab2"] = 2] = "Tab2";
    TabType[TabType["Tab3"] = 3] = "Tab3";
})(TabType || (TabType = {}));

var Tab1Type;

(function(Tab1Type) {
    Tab1Type[Tab1Type["Ta1_None"] = 0] = "Ta1_None";
    Tab1Type[Tab1Type["Tab1_Appearance"] = 1] = "Tab1_Appearance";
    Tab1Type[Tab1Type["Tab1_Clothing"] = 2] = "Tab1_Clothing";
    Tab1Type[Tab1Type["Tab1_Collection"] = 3] = "Tab1_Collection";
    Tab1Type[Tab1Type["Tab1_Test"] = 4] = "Tab1_Test";
})(Tab1Type || (Tab1Type = {}));

var Tab2Type;

(function(Tab2Type) {
    Tab2Type[Tab2Type["Tab2_None"] = 0] = "Tab2_None";
    Tab2Type[Tab2Type["Tab2_BodyType"] = 101] = "Tab2_BodyType";
    Tab2Type[Tab2Type["Tab2_SkinTone"] = 102] = "Tab2_SkinTone";
    Tab2Type[Tab2Type["Tab2_Face"] = 103] = "Tab2_Face";
    Tab2Type[Tab2Type["Tab2_Eyes"] = 104] = "Tab2_Eyes";
    Tab2Type[Tab2Type["Tab2_Eyebrows"] = 105] = "Tab2_Eyebrows";
    Tab2Type[Tab2Type["Tab2_Makeup"] = 106] = "Tab2_Makeup";
    Tab2Type[Tab2Type["Tab2_Expression"] = 107] = "Tab2_Expression";
    Tab2Type[Tab2Type["Tab2_Outfit"] = 108] = "Tab2_Outfit";
    Tab2Type[Tab2Type["Tab2_Hair"] = 109] = "Tab2_Hair";
    Tab2Type[Tab2Type["Tab2_Top"] = 110] = "Tab2_Top";
    Tab2Type[Tab2Type["Tab2_Bottom"] = 111] = "Tab2_Bottom";
    Tab2Type[Tab2Type["Tab2_Shoes"] = 112] = "Tab2_Shoes";
    Tab2Type[Tab2Type["Tab2_Gloves"] = 113] = "Tab2_Gloves";
    Tab2Type[Tab2Type["Tab2_Pet"] = 114] = "Tab2_Pet";
    Tab2Type[Tab2Type["Tab2_Accessory"] = 115] = "Tab2_Accessory";
    Tab2Type[Tab2Type["Tab2_BodyType_Collection"] = 501] = "Tab2_BodyType_Collection";
    Tab2Type[Tab2Type["Tab2_SkinTone_Collection"] = 502] = "Tab2_SkinTone_Collection";
    Tab2Type[Tab2Type["Tab2_Face_Collection"] = 503] = "Tab2_Face_Collection";
    Tab2Type[Tab2Type["Tab2_Eyes_Collection"] = 504] = "Tab2_Eyes_Collection";
    Tab2Type[Tab2Type["Tab2_Eyebrows_Collection"] = 505] = "Tab2_Eyebrows_Collection";
    Tab2Type[Tab2Type["Tab2_Makeup_Collection"] = 506] = "Tab2_Makeup_Collection";
    Tab2Type[Tab2Type["Tab2_Expression_Collection"] = 507] = "Tab2_Expression_Collection";
    Tab2Type[Tab2Type["Tab2_Outfit_Collection"] = 508] = "Tab2_Outfit_Collection";
    Tab2Type[Tab2Type["Tab2_Hair_Collection"] = 509] = "Tab2_Hair_Collection";
    Tab2Type[Tab2Type["Tab2_Top_Collection"] = 510] = "Tab2_Top_Collection";
    Tab2Type[Tab2Type["Tab2_Bottom_Collection"] = 511] = "Tab2_Bottom_Collection";
    Tab2Type[Tab2Type["Tab2_Gloves_Collection"] = 512] = "Tab2_Gloves_Collection";
    Tab2Type[Tab2Type["Tab2_Shoes_Collection"] = 513] = "Tab2_Shoes_Collection";
    Tab2Type[Tab2Type["Tab2_Pet_Collection"] = 514] = "Tab2_Pet_Collection";
    Tab2Type[Tab2Type["Tab2_Accessory_Collection"] = 515] = "Tab2_Accessory_Collection";
})(Tab2Type || (Tab2Type = {}));

var Tab3Type;

(function(Tab3Type) {
    Tab3Type[Tab3Type["Tab3_None"] = 0] = "Tab3_None";
    Tab3Type[Tab3Type["Tab3_PupilStyle"] = 1001] = "Tab3_PupilStyle";
    Tab3Type[Tab3Type["Tab3_Lens"] = 1002] = "Tab3_Lens";
    Tab3Type[Tab3Type["Tab3_UpperHighlight"] = 1003] = "Tab3_UpperHighlight";
    Tab3Type[Tab3Type["Tab3_LowerHighlight"] = 1004] = "Tab3_LowerHighlight";
    Tab3Type[Tab3Type["Tab3_Eyelashes"] = 1005] = "Tab3_Eyelashes";
    Tab3Type[Tab3Type["Tab3_Eyeshadow"] = 1006] = "Tab3_Eyeshadow";
    Tab3Type[Tab3Type["Tab3_Blush"] = 1007] = "Tab3_Blush";
    Tab3Type[Tab3Type["Tab3_LipMakeup"] = 1008] = "Tab3_LipMakeup";
    Tab3Type[Tab3Type["Tab3_FaceTattoo"] = 1009] = "Tab3_FaceTattoo";
    Tab3Type[Tab3Type["Tab3_FullHair"] = 1010] = "Tab3_FullHair";
    Tab3Type[Tab3Type["Tab3_FrontHair"] = 1011] = "Tab3_FrontHair";
    Tab3Type[Tab3Type["Tab3_BackHair"] = 1012] = "Tab3_BackHair";
    Tab3Type[Tab3Type["Tab3_LeftHand"] = 1013] = "Tab3_LeftHand";
    Tab3Type[Tab3Type["Tab3_RightHand"] = 1014] = "Tab3_RightHand";
    Tab3Type[Tab3Type["Tab3_Back"] = 1015] = "Tab3_Back";
    Tab3Type[Tab3Type["Tab3_Ear"] = 1016] = "Tab3_Ear";
    Tab3Type[Tab3Type["Tab3_Face"] = 1017] = "Tab3_Face";
    Tab3Type[Tab3Type["Tab3_Hip"] = 1018] = "Tab3_Hip";
    Tab3Type[Tab3Type["Tab3_Shoulder"] = 1019] = "Tab3_Shoulder";
    Tab3Type[Tab3Type["Tab3_Effects"] = 1020] = "Tab3_Effects";
    Tab3Type[Tab3Type["Tab3_Trailing"] = 1021] = "Tab3_Trailing";
    Tab3Type[Tab3Type["Tab3_DailyStyling_Suit1"] = 1022] = "Tab3_DailyStyling_Suit1";
    Tab3Type[Tab3Type["Tab3_MuppetStyling_Suit"] = 1023] = "Tab3_MuppetStyling_Suit";
    Tab3Type[Tab3Type["Tab3_HeroStyling_Suit"] = 1024] = "Tab3_HeroStyling_Suit";
    Tab3Type[Tab3Type["Tab3_FantasyModeling_Suit"] = 1025] = "Tab3_FantasyModeling_Suit";
    Tab3Type[Tab3Type["Tab3_HolidayStyling_Suit"] = 1026] = "Tab3_HolidayStyling_Suit";
    Tab3Type[Tab3Type["Tab3_ScienceFictionStyling_Suit"] = 1027] = "Tab3_ScienceFictionStyling_Suit";
    Tab3Type[Tab3Type["Tab3_AncientMolding_Suit"] = 1028] = "Tab3_AncientMolding_Suit";
    Tab3Type[Tab3Type["Tab3_LongSinglePiece_Top"] = 1029] = "Tab3_LongSinglePiece_Top";
    Tab3Type[Tab3Type["Tab3_ShortJacket_Top"] = 1030] = "Tab3_ShortJacket_Top";
    Tab3Type[Tab3Type["Tab3_ShortSinglePiece_Top"] = 1031] = "Tab3_ShortSinglePiece_Top";
    Tab3Type[Tab3Type["Tab3_Suit_Top"] = 1032] = "Tab3_Suit_Top";
    Tab3Type[Tab3Type["Tab3_ALongCoat_Top"] = 1033] = "Tab3_ALongCoat_Top";
    Tab3Type[Tab3Type["Tab3_ShortSkirt_Bottom"] = 1034] = "Tab3_ShortSkirt_Bottom";
    Tab3Type[Tab3Type["Tab3_LongPants_Bottom"] = 1035] = "Tab3_LongPants_Bottom";
    Tab3Type[Tab3Type["Tab3_Shorts_Bottom"] = 1036] = "Tab3_Shorts_Bottom";
    Tab3Type[Tab3Type["Tab3_LongSkirt_Bottom"] = 1037] = "Tab3_LongSkirt_Bottom";
    Tab3Type[Tab3Type["Tab3_Tights_Bottom"] = 1038] = "Tab3_Tights_Bottom";
    Tab3Type[Tab3Type["Tab3_Gloves_Gloves"] = 1039] = "Tab3_Gloves_Gloves";
    Tab3Type[Tab3Type["Tab3_Accessories_Gloves"] = 1040] = "Tab3_Accessories_Gloves";
    Tab3Type[Tab3Type["Tab3_Everyday_Shoes"] = 1041] = "Tab3_Everyday_Shoes";
    Tab3Type[Tab3Type["Tab3_Boots_Shoes"] = 1042] = "Tab3_Boots_Shoes";
    Tab3Type[Tab3Type["Tab3_FootCover_Shoes"] = 1043] = "Tab3_FootCover_Shoes";
    Tab3Type[Tab3Type["Tab3_NakedDress_Shoes"] = 1044] = "Tab3_NakedDress_Shoes";
    Tab3Type[Tab3Type["Tab3_HighHeels_Shoes"] = 1045] = "Tab3_HighHeels_Shoes";
    Tab3Type[Tab3Type["Tab3_SportsShoes_Shoes"] = 1046] = "Tab3_SportsShoes_Shoes";
    Tab3Type[Tab3Type["Tab3_DailyStyling_Suit2"] = 1047] = "Tab3_DailyStyling_Suit2";
    Tab3Type[Tab3Type["Tab3_PupilStyle_Collection"] = 2001] = "Tab3_PupilStyle_Collection";
    Tab3Type[Tab3Type["Tab3_Lens_Collection"] = 2002] = "Tab3_Lens_Collection";
    Tab3Type[Tab3Type["Tab3_UpperHighlight_Collection"] = 2003] = "Tab3_UpperHighlight_Collection";
    Tab3Type[Tab3Type["Tab3_LowerHighlight_Collection"] = 2004] = "Tab3_LowerHighlight_Collection";
    Tab3Type[Tab3Type["Tab3_Eyelashes_Collection"] = 2005] = "Tab3_Eyelashes_Collection";
    Tab3Type[Tab3Type["Tab3_Eyeshadow_Collection"] = 2006] = "Tab3_Eyeshadow_Collection";
    Tab3Type[Tab3Type["Tab3_Blush_Collection"] = 2007] = "Tab3_Blush_Collection";
    Tab3Type[Tab3Type["Tab3_LipMakeup_Collection"] = 2008] = "Tab3_LipMakeup_Collection";
    Tab3Type[Tab3Type["Tab3_FaceTattoo_Collection"] = 2009] = "Tab3_FaceTattoo_Collection";
    Tab3Type[Tab3Type["Tab3_FullHair_Collection"] = 2010] = "Tab3_FullHair_Collection";
    Tab3Type[Tab3Type["Tab3_FrontHair_Collection"] = 2011] = "Tab3_FrontHair_Collection";
    Tab3Type[Tab3Type["Tab3_BackHair_Collection"] = 2012] = "Tab3_BackHair_Collection";
    Tab3Type[Tab3Type["Tab3_LeftHand_Collection"] = 2013] = "Tab3_LeftHand_Collection";
    Tab3Type[Tab3Type["Tab3_RightHand_Collection"] = 2014] = "Tab3_RightHand_Collection";
    Tab3Type[Tab3Type["Tab3_Back_Collection"] = 2015] = "Tab3_Back_Collection";
    Tab3Type[Tab3Type["Tab3_Ear_Collection"] = 2016] = "Tab3_Ear_Collection";
    Tab3Type[Tab3Type["Tab3_Face_Collection"] = 2017] = "Tab3_Face_Collection";
    Tab3Type[Tab3Type["Tab3_Hip_Collection"] = 2018] = "Tab3_Hip_Collection";
    Tab3Type[Tab3Type["Tab3_Shoulder_Collection"] = 2019] = "Tab3_Shoulder_Collection";
    Tab3Type[Tab3Type["Tab3_Effects_Collection"] = 2020] = "Tab3_Effects_Collection";
    Tab3Type[Tab3Type["Tab3_Trailing_Collection"] = 2021] = "Tab3_Trailing_Collection";
})(Tab3Type || (Tab3Type = {}));

var foreign103 = Object.freeze({
    __proto__: null,
    AssetIdInfoData: AssetIdInfoData,
    ColorPickTab2Data: ColorPickTab2Data,
    get Tab1Type() {
        return Tab1Type;
    },
    get Tab2Type() {
        return Tab2Type;
    },
    get Tab3Type() {
        return Tab3Type;
    },
    TabIdData: TabIdData,
    get TabType() {
        return TabType;
    },
    default: MallData
});

class Mall {
    static async copyCharacterSlot(fromCharacter, toCharacter) {
        if (!fromCharacter || !toCharacter) return;
        let slotDataArrStr = this.getSlotDataArrStr(fromCharacter);
        await this.setSlotByDataArrStr(toCharacter, slotDataArrStr);
    }
    static getSlotDataArrStr(character) {
        let slot = character.description.advance.slotAndDecoration.slot;
        let dataStrArr = [];
        for (let i = 0; i < slot.length; ++i) {
            for (let j = 0; j < slot[i].decoration.length; ++j) {
                let decoration = slot[i].decoration[j];
                if (!decoration.attachmentAssetId || !decoration.attachmentGameObject || !decoration.attachmentOffset) continue;
                let transform = new Transform;
                transform.position = new Vector(Number(decoration.attachmentOffset.position.x.toFixed(3)), Number(decoration.attachmentOffset.position.y.toFixed(3)), Number(decoration.attachmentOffset.position.z.toFixed(3)));
                transform.rotation = new Rotation(Number(decoration.attachmentOffset.rotation.x.toFixed(3)), Number(decoration.attachmentOffset.rotation.y.toFixed(3)), Number(decoration.attachmentOffset.rotation.z.toFixed(3)));
                transform.scale = new Vector(Number(decoration.attachmentOffset.scale.x.toFixed(3)), Number(decoration.attachmentOffset.scale.y.toFixed(3)), Number(decoration.attachmentOffset.scale.z.toFixed(3)));
                let str = `${i}${this.slotSplit}${decoration.attachmentAssetId}${this.slotSplit}${transform.toString()}`;
                dataStrArr.push(str);
            }
        }
        return dataStrArr.length > 0 ? dataStrArr : null;
    }
    static async setSlotByDataArrStr(character, strArr) {
        if (!strArr || strArr?.length == 0) return;
        for (let i = 0; i < strArr.length; ++i) {
            let [slotIndexStr, assetId, transform] = strArr[i].split(this.slotSplit);
            let slotIndex = Number(slotIndexStr);
            if (slotIndex >= 0 && slotIndex < character.description.advance.slotAndDecoration.slot.length) {
                await this.setDecoraBase(character, slotIndex, assetId, Transform.fromString(transform));
            }
        }
        await character.asyncReady();
    }
    static async setDecoraBase(character, slotIndex, assetId, offset) {
        await Utils.asyncDownloadAsset(assetId);
        let model = await GameObject.asyncSpawn(assetId);
        if (!model) return false;
        model.setCollision(mw.PropertyStatus.Off, true);
        if (model instanceof mw.Effect) {
            this.clearOneDecoraBySlotIndex(slotIndex, character);
        } else {
            this.clearOneDecoraBySlotIndex(slotIndex, character);
        }
        character.description.advance.slotAndDecoration.slot[slotIndex].decoration.add(model, offset);
        return true;
    }
    static clearOneDecoraBySlotIndex(slotIndex, character) {
        character.description.advance.slotAndDecoration.slot[slotIndex].decoration.clear();
    }
    static async copyCharacterClothingAndHair(fromCharacter, toCharacter) {
        if (!fromCharacter || !toCharacter) return;
        let fromClothing = fromCharacter.description.advance.clothing;
        let fromHair = fromCharacter.description.advance.hair;
        let toClothing = toCharacter.description.advance.clothing;
        let toHair = toCharacter.description.advance.hair;
        let frontHairStyle = fromHair?.frontHair?.style;
        if (frontHairStyle) {
            await Utils.asyncDownloadAsset(frontHairStyle);
            toHair.frontHair.style = frontHairStyle;
        }
        let frontHairColor = fromHair?.frontHair?.color?.color;
        if (frontHairColor) toHair.frontHair.color.color = frontHairColor;
        let frontHairGradientColor = fromHair?.frontHair?.color?.gradientColor;
        if (frontHairGradientColor) toHair.frontHair.color.gradientColor = frontHairGradientColor;
        let frontHairGradientArea = fromHair?.frontHair?.color?.gradientArea;
        if (frontHairGradientArea) toHair.frontHair.color.gradientArea = frontHairGradientArea;
        let frontHairHighlightStyle = fromHair?.frontHair?.highlight?.highlightStyle;
        if (frontHairHighlightStyle) toHair.frontHair.highlight.highlightStyle = frontHairHighlightStyle;
        let frontHairAccessories = fromHair?.frontHair?.accessories;
        if (frontHairAccessories && frontHairAccessories.length > 0) {
            for (let i = 0; i < frontHairAccessories.length; ++i) {
                let accessoryColor = frontHairAccessories[i]?.color?.accessoryColor;
                if (accessoryColor) fromHair.frontHair.accessories[i].color.accessoryColor = accessoryColor;
                let designStyle = frontHairAccessories[i]?.design?.designStyle;
                if (designStyle) fromHair.frontHair.accessories[i].design.designStyle = designStyle;
                let designColor = frontHairAccessories[i]?.design?.designColor;
                if (designColor) fromHair.frontHair.accessories[i].design.designColor = designColor;
                let designRotation = frontHairAccessories[i]?.design?.designRotation;
                if (designRotation) fromHair.frontHair.accessories[i].design.designRotation = designRotation;
                let designScale = frontHairAccessories[i]?.design?.designScale;
                if (designScale) fromHair.frontHair.accessories[i].design.designScale = designScale;
                let patternStyle = frontHairAccessories[i]?.pattern?.patternStyle;
                if (patternStyle) fromHair.frontHair.accessories[i].pattern.patternStyle = patternStyle;
                let patternColor = frontHairAccessories[i]?.pattern?.patternColor;
                if (patternColor) fromHair.frontHair.accessories[i].pattern.patternColor = patternColor;
                let patternHorizontalScale = frontHairAccessories[i]?.pattern?.patternHorizontalScale;
                if (patternHorizontalScale) fromHair.frontHair.accessories[i].pattern.patternHorizontalScale = patternHorizontalScale;
                let patternVerticalScale = frontHairAccessories[i]?.pattern?.patternVerticalScale;
                if (patternVerticalScale) fromHair.frontHair.accessories[i].pattern.patternVerticalScale = patternVerticalScale;
                let patternRotation = frontHairAccessories[i]?.pattern?.patternRotation;
                if (patternRotation) fromHair.frontHair.accessories[i].pattern.patternRotation = patternRotation;
                let patternVisibility = frontHairAccessories[i]?.pattern?.patternVisibility;
                if (patternVisibility) fromHair.frontHair.accessories[i].pattern.patternVisibility = patternVisibility;
            }
        }
        let backHairStyle = fromHair?.backHair?.style;
        if (backHairStyle) {
            await Utils.asyncDownloadAsset(backHairStyle);
            toHair.backHair.style = backHairStyle;
        }
        let backHairColor = fromHair?.backHair?.color?.color;
        if (backHairColor) toHair.backHair.color.color = backHairColor;
        let backHairGradientColor = fromHair?.backHair?.color?.gradientColor;
        if (backHairGradientColor) toHair.backHair.color.gradientColor = backHairGradientColor;
        let backHairGradientArea = fromHair?.backHair?.color?.gradientArea;
        if (backHairGradientArea) toHair.backHair.color.gradientArea = backHairGradientArea;
        let backHairHighlightStyle = fromHair?.backHair?.highlight?.highlightStyle;
        if (backHairHighlightStyle) toHair.backHair.highlight.highlightStyle = backHairHighlightStyle;
        let backHairAccessories = fromHair?.backHair?.accessories;
        if (backHairAccessories && backHairAccessories.length > 0) {
            for (let i = 0; i < backHairAccessories.length; ++i) {
                let accessoryColor = backHairAccessories[i]?.color?.accessoryColor;
                if (accessoryColor) fromHair.backHair.accessories[i].color.accessoryColor = accessoryColor;
                let designStyle = backHairAccessories[i]?.design?.designStyle;
                if (designStyle) fromHair.backHair.accessories[i].design.designStyle = designStyle;
                let designColor = backHairAccessories[i]?.design?.designColor;
                if (designColor) fromHair.backHair.accessories[i].design.designColor = designColor;
                let designRotation = backHairAccessories[i]?.design?.designRotation;
                if (designRotation) fromHair.backHair.accessories[i].design.designRotation = designRotation;
                let designScale = backHairAccessories[i]?.design?.designScale;
                if (designScale) fromHair.backHair.accessories[i].design.designScale = designScale;
                let patternStyle = backHairAccessories[i]?.pattern?.patternStyle;
                if (patternStyle) fromHair.backHair.accessories[i].pattern.patternStyle = patternStyle;
                let patternColor = backHairAccessories[i]?.pattern?.patternColor;
                if (patternColor) fromHair.backHair.accessories[i].pattern.patternColor = patternColor;
                let patternHorizontalScale = backHairAccessories[i]?.pattern?.patternHorizontalScale;
                if (patternHorizontalScale) fromHair.backHair.accessories[i].pattern.patternHorizontalScale = patternHorizontalScale;
                let patternVerticalScale = backHairAccessories[i]?.pattern?.patternVerticalScale;
                if (patternVerticalScale) fromHair.backHair.accessories[i].pattern.patternVerticalScale = patternVerticalScale;
                let patternRotation = backHairAccessories[i]?.pattern?.patternRotation;
                if (patternRotation) fromHair.backHair.accessories[i].pattern.patternRotation = patternRotation;
                let patternVisibility = backHairAccessories[i]?.pattern?.patternVisibility;
                if (patternVisibility) fromHair.backHair.accessories[i].pattern.patternVisibility = patternVisibility;
            }
        }
        let upperClothStyle = fromClothing?.upperCloth?.style;
        if (upperClothStyle) {
            await Utils.asyncDownloadAsset(upperClothStyle);
            toClothing.upperCloth.style = upperClothStyle;
        }
        let upperClothPart = fromClothing?.upperCloth?.part;
        if (upperClothPart && upperClothPart.length > 0) {
            for (let i = 0; i < upperClothPart.length; ++i) {
                let areaColor = upperClothPart[i]?.color?.areaColor;
                if (areaColor) toClothing.upperCloth.part[i].color.areaColor = areaColor;
                let patternStyle = upperClothPart[i]?.pattern?.patternStyle;
                if (patternStyle) toClothing.upperCloth.part[i].pattern.patternStyle = patternStyle;
                let patternColor = upperClothPart[i]?.pattern?.patternColor;
                if (patternColor) toClothing.upperCloth.part[i].pattern.patternColor = patternColor;
                let patternHorizontalScale = upperClothPart[i]?.pattern?.patternHorizontalScale;
                if (patternHorizontalScale) toClothing.upperCloth.part[i].pattern.patternHorizontalScale = patternHorizontalScale;
                let patternVerticalScale = upperClothPart[i]?.pattern?.patternVerticalScale;
                if (patternVerticalScale) toClothing.upperCloth.part[i].pattern.patternVerticalScale = patternVerticalScale;
                let patternRotation = upperClothPart[i]?.pattern?.patternRotation;
                if (patternRotation) toClothing.upperCloth.part[i].pattern.patternRotation = patternRotation;
                let patternVisibility = upperClothPart[i]?.pattern?.patternVisibility;
                if (patternVisibility) toClothing.upperCloth.part[i].pattern.patternVisibility = patternVisibility;
                let designStyle = upperClothPart[i]?.design?.designStyle;
                if (designStyle) toClothing.upperCloth.part[i].design.designStyle = designStyle;
                let designColor = upperClothPart[i]?.design?.designColor;
                if (designColor) toClothing.upperCloth.part[i].design.designColor = designColor;
                let designRotation = upperClothPart[i]?.design?.designRotation;
                if (designRotation) toClothing.upperCloth.part[i].design.designRotation = patternVisibility;
            }
        }
        let lowerClothStyle = fromClothing?.lowerCloth?.style;
        if (lowerClothStyle) {
            await Utils.asyncDownloadAsset(lowerClothStyle);
            toClothing.lowerCloth.style = lowerClothStyle;
        }
        let lowerClothPart = fromClothing?.lowerCloth?.part;
        if (lowerClothPart && lowerClothPart.length > 0) {
            for (let i = 0; i < lowerClothPart.length; ++i) {
                let areaColor = lowerClothPart[i]?.color?.areaColor;
                if (areaColor) toClothing.lowerCloth.part[i].color.areaColor = areaColor;
                let patternStyle = lowerClothPart[i]?.pattern?.patternStyle;
                if (patternStyle) toClothing.lowerCloth.part[i].pattern.patternStyle = patternStyle;
                let patternColor = lowerClothPart[i]?.pattern?.patternColor;
                if (patternColor) toClothing.lowerCloth.part[i].pattern.patternColor = patternColor;
                let patternHorizontalScale = lowerClothPart[i]?.pattern?.patternHorizontalScale;
                if (patternHorizontalScale) toClothing.lowerCloth.part[i].pattern.patternHorizontalScale = patternHorizontalScale;
                let patternVerticalScale = lowerClothPart[i]?.pattern?.patternVerticalScale;
                if (patternVerticalScale) toClothing.lowerCloth.part[i].pattern.patternVerticalScale = patternVerticalScale;
                let patternRotation = lowerClothPart[i]?.pattern?.patternRotation;
                if (patternRotation) toClothing.lowerCloth.part[i].pattern.patternRotation = patternRotation;
                let patternVisibility = lowerClothPart[i]?.pattern?.patternVisibility;
                if (patternVisibility) toClothing.lowerCloth.part[i].pattern.patternVisibility = patternVisibility;
                let designStyle = lowerClothPart[i]?.design?.designStyle;
                if (designStyle) toClothing.lowerCloth.part[i].design.designStyle = designStyle;
                let designColor = lowerClothPart[i]?.design?.designColor;
                if (designColor) toClothing.lowerCloth.part[i].design.designColor = designColor;
                let designRotation = lowerClothPart[i]?.design?.designRotation;
                if (designRotation) toClothing.lowerCloth.part[i].design.designRotation = patternVisibility;
            }
        }
        let shoesStyle = fromClothing?.shoes?.style;
        if (shoesStyle) {
            await Utils.asyncDownloadAsset(shoesStyle);
            toClothing.shoes.style = shoesStyle;
        }
        let shoesPart = fromClothing?.shoes?.part;
        if (shoesPart && shoesPart.length > 0) {
            for (let i = 0; i < shoesPart.length; ++i) {
                let areaColor = shoesPart[i]?.color?.areaColor;
                if (areaColor) toClothing.shoes.part[i].color.areaColor = areaColor;
                let patternStyle = shoesPart[i]?.pattern?.patternStyle;
                if (patternStyle) toClothing.shoes.part[i].pattern.patternStyle = patternStyle;
                let patternColor = shoesPart[i]?.pattern?.patternColor;
                if (patternColor) toClothing.shoes.part[i].pattern.patternColor = patternColor;
                let patternHorizontalScale = shoesPart[i]?.pattern?.patternHorizontalScale;
                if (patternHorizontalScale) toClothing.shoes.part[i].pattern.patternHorizontalScale = patternHorizontalScale;
                let patternVerticalScale = shoesPart[i]?.pattern?.patternVerticalScale;
                if (patternVerticalScale) toClothing.shoes.part[i].pattern.patternVerticalScale = patternVerticalScale;
                let patternRotation = shoesPart[i]?.pattern?.patternRotation;
                if (patternRotation) toClothing.shoes.part[i].pattern.patternRotation = patternRotation;
                let patternVisibility = shoesPart[i]?.pattern?.patternVisibility;
                if (patternVisibility) toClothing.shoes.part[i].pattern.patternVisibility = patternVisibility;
                let designStyle = shoesPart[i]?.design?.designStyle;
                if (designStyle) toClothing.shoes.part[i].design.designStyle = designStyle;
                let designColor = shoesPart[i]?.design?.designColor;
                if (designColor) toClothing.shoes.part[i].design.designColor = designColor;
                let designRotation = shoesPart[i]?.design?.designRotation;
                if (designRotation) toClothing.shoes.part[i].design.designRotation = patternVisibility;
            }
        }
        let glovesStyle = fromClothing?.gloves?.style;
        if (glovesStyle) {
            await Utils.asyncDownloadAsset(glovesStyle);
            toClothing.gloves.style = glovesStyle;
        }
        let glovesPart = fromClothing?.gloves?.part;
        if (glovesPart && glovesPart.length > 0) {
            for (let i = 0; i < glovesPart.length; ++i) {
                let areaColor = glovesPart[i]?.color?.areaColor;
                if (areaColor) toClothing.gloves.part[i].color.areaColor = areaColor;
                let patternStyle = glovesPart[i]?.pattern?.patternStyle;
                if (patternStyle) toClothing.gloves.part[i].pattern.patternStyle = patternStyle;
                let patternColor = glovesPart[i]?.pattern?.patternColor;
                if (patternColor) toClothing.gloves.part[i].pattern.patternColor = patternColor;
                let patternHorizontalScale = glovesPart[i]?.pattern?.patternHorizontalScale;
                if (patternHorizontalScale) toClothing.gloves.part[i].pattern.patternHorizontalScale = patternHorizontalScale;
                let patternVerticalScale = glovesPart[i]?.pattern?.patternVerticalScale;
                if (patternVerticalScale) toClothing.gloves.part[i].pattern.patternVerticalScale = patternVerticalScale;
                let patternRotation = glovesPart[i]?.pattern?.patternRotation;
                if (patternRotation) toClothing.gloves.part[i].pattern.patternRotation = patternRotation;
                let patternVisibility = glovesPart[i]?.pattern?.patternVisibility;
                if (patternVisibility) toClothing.gloves.part[i].pattern.patternVisibility = patternVisibility;
                let designStyle = glovesPart[i]?.design?.designStyle;
                if (designStyle) toClothing.gloves.part[i].design.designStyle = designStyle;
                let designColor = glovesPart[i]?.design?.designColor;
                if (designColor) toClothing.gloves.part[i].design.designColor = designColor;
                let designRotation = glovesPart[i]?.design?.designRotation;
                if (designRotation) toClothing.gloves.part[i].design.designRotation = patternVisibility;
            }
        }
    }
    static isSupportColorPick(tabId) {
        return this.colorPickTabIds.includes(tabId);
    }
    static isRemovableTabId(tabId) {
        return this.removableTabIds.includes(tabId);
    }
    static isSlot(tabId) {
        return this.slotTabIds.includes(tabId);
    }
    static isClothingTabId(tabId) {
        return this.clothingTabIds.includes(tabId);
    }
    static isDefaultAssetId(assetId) {
        return this.defaultAssetIds.includes(assetId);
    }
    static isHeadTabId(tabId) {
        return this.headTabIds.includes(tabId);
    }
    static getAssetId(type, character) {
        if (!character) character = Player.localPlayer.character;
        switch (type) {
          case Tab2Type.Tab2_Face:
            return character.description.advance.headFeatures.head.style;

          case Tab2Type.Tab2_Eyebrows:
            return character.description.advance.makeup.eyebrows.eyebrowStyle;

          case Tab2Type.Tab2_Top:
          case Tab3Type.Tab3_LongSinglePiece_Top:
          case Tab3Type.Tab3_ShortJacket_Top:
          case Tab3Type.Tab3_ShortSinglePiece_Top:
          case Tab3Type.Tab3_Suit_Top:
          case Tab3Type.Tab3_ALongCoat_Top:
            return character.description.advance.clothing.upperCloth.style;

          case Tab2Type.Tab2_Bottom:
          case Tab3Type.Tab3_ShortSkirt_Bottom:
          case Tab3Type.Tab3_LongPants_Bottom:
          case Tab3Type.Tab3_Shorts_Bottom:
          case Tab3Type.Tab3_LongSkirt_Bottom:
          case Tab3Type.Tab3_Tights_Bottom:
            return character.description.advance.clothing.lowerCloth.style;

          case Tab2Type.Tab2_Shoes:
          case Tab3Type.Tab3_Everyday_Shoes:
          case Tab3Type.Tab3_Boots_Shoes:
          case Tab3Type.Tab3_FootCover_Shoes:
          case Tab3Type.Tab3_NakedDress_Shoes:
          case Tab3Type.Tab3_HighHeels_Shoes:
          case Tab3Type.Tab3_SportsShoes_Shoes:
            return character.description.advance.clothing.shoes.style;

          case Tab2Type.Tab2_Gloves:
          case Tab3Type.Tab3_Gloves_Gloves:
          case Tab3Type.Tab3_Accessories_Gloves:
            return character.description.advance.clothing.gloves.style;

          case Tab3Type.Tab3_PupilStyle:
            return character.description.advance.makeup.coloredContacts.style.pupilStyle;

          case Tab3Type.Tab3_Lens:
            return character.description.advance.makeup.coloredContacts.decal.pupilStyle;

          case Tab3Type.Tab3_UpperHighlight:
            return character.description.advance.makeup.coloredContacts.highlight.upperHighlightStyle;

          case Tab3Type.Tab3_LowerHighlight:
            return character.description.advance.makeup.coloredContacts.highlight.lowerHighlightStyle;

          case Tab3Type.Tab3_Eyelashes:
            return character.description.advance.makeup.eyelashes.eyelashStyle;

          case Tab3Type.Tab3_Eyeshadow:
            return character.description.advance.makeup.eyeShadow.eyeshadowStyle;

          case Tab3Type.Tab3_Blush:
            return character.description.advance.makeup.blush.blushStyle;

          case Tab3Type.Tab3_LipMakeup:
            return character.description.advance.makeup.lipstick.lipstickStyle;

          case Tab3Type.Tab3_FullHair:
            return character.description.advance.hair.backHair.style;

          case Tab3Type.Tab3_FrontHair:
            return character.description.advance.hair.frontHair.style;

          case Tab3Type.Tab3_BackHair:
            return character.description.advance.hair.backHair.style;
        }
    }
}

Mall.slotSplit = "$";

Mall.colorPickTabIds = [ Tab2Type.Tab2_Eyebrows, Tab2Type.Tab2_Top, Tab3Type.Tab3_LongSinglePiece_Top, Tab3Type.Tab3_ShortJacket_Top, Tab3Type.Tab3_ShortSinglePiece_Top, Tab3Type.Tab3_Suit_Top, Tab3Type.Tab3_ALongCoat_Top, Tab2Type.Tab2_Bottom, Tab3Type.Tab3_ShortSkirt_Bottom, Tab3Type.Tab3_LongPants_Bottom, Tab3Type.Tab3_Shorts_Bottom, Tab3Type.Tab3_LongSkirt_Bottom, Tab3Type.Tab3_Tights_Bottom, Tab3Type.Tab3_Gloves_Gloves, Tab3Type.Tab3_Accessories_Gloves, Tab3Type.Tab3_Everyday_Shoes, Tab3Type.Tab3_Boots_Shoes, Tab3Type.Tab3_FootCover_Shoes, Tab3Type.Tab3_NakedDress_Shoes, Tab3Type.Tab3_HighHeels_Shoes, Tab3Type.Tab3_SportsShoes_Shoes, Tab2Type.Tab2_Shoes, Tab2Type.Tab2_Gloves, Tab3Type.Tab3_PupilStyle, Tab3Type.Tab3_Lens, Tab3Type.Tab3_UpperHighlight, Tab3Type.Tab3_LowerHighlight, Tab3Type.Tab3_Eyelashes, Tab3Type.Tab3_Eyeshadow, Tab3Type.Tab3_Blush, Tab3Type.Tab3_LipMakeup, Tab3Type.Tab3_FullHair, Tab3Type.Tab3_FrontHair, Tab3Type.Tab3_BackHair ];

Mall.removableTabIds = [ Tab2Type.Tab2_Eyebrows, Tab2Type.Tab2_Top, Tab3Type.Tab3_LongSinglePiece_Top, Tab3Type.Tab3_ShortJacket_Top, Tab3Type.Tab3_ShortSinglePiece_Top, Tab3Type.Tab3_Suit_Top, Tab3Type.Tab3_ALongCoat_Top, Tab2Type.Tab2_Bottom, Tab3Type.Tab3_ShortSkirt_Bottom, Tab3Type.Tab3_LongPants_Bottom, Tab3Type.Tab3_Shorts_Bottom, Tab3Type.Tab3_LongSkirt_Bottom, Tab3Type.Tab3_Tights_Bottom, Tab3Type.Tab3_Gloves_Gloves, Tab3Type.Tab3_Accessories_Gloves, Tab3Type.Tab3_Everyday_Shoes, Tab3Type.Tab3_Boots_Shoes, Tab3Type.Tab3_FootCover_Shoes, Tab3Type.Tab3_NakedDress_Shoes, Tab3Type.Tab3_HighHeels_Shoes, Tab3Type.Tab3_SportsShoes_Shoes, Tab2Type.Tab2_Shoes, Tab2Type.Tab2_Gloves, Tab3Type.Tab3_PupilStyle, Tab3Type.Tab3_Lens, Tab3Type.Tab3_UpperHighlight, Tab3Type.Tab3_LowerHighlight, Tab3Type.Tab3_Eyelashes, Tab3Type.Tab3_Eyeshadow, Tab3Type.Tab3_Blush, Tab3Type.Tab3_LipMakeup, Tab3Type.Tab3_FullHair, Tab3Type.Tab3_FrontHair, Tab3Type.Tab3_BackHair, Tab3Type.Tab3_LeftHand, Tab3Type.Tab3_RightHand, Tab3Type.Tab3_Back, Tab3Type.Tab3_Ear, Tab3Type.Tab3_Face, Tab3Type.Tab3_Hip, Tab3Type.Tab3_Shoulder, Tab3Type.Tab3_Effects, Tab3Type.Tab3_Trailing, Tab2Type.Tab2_Outfit, Tab3Type.Tab3_DailyStyling_Suit1, Tab3Type.Tab3_DailyStyling_Suit2, Tab3Type.Tab3_MuppetStyling_Suit, Tab3Type.Tab3_HeroStyling_Suit, Tab3Type.Tab3_FantasyModeling_Suit, Tab3Type.Tab3_HolidayStyling_Suit, Tab3Type.Tab3_ScienceFictionStyling_Suit, Tab3Type.Tab3_AncientMolding_Suit, Tab2Type.Tab2_Pet ];

Mall.slotTabIds = [ Tab3Type.Tab3_LeftHand, Tab3Type.Tab3_RightHand, Tab3Type.Tab3_Back, Tab3Type.Tab3_Ear, Tab3Type.Tab3_Face, Tab3Type.Tab3_Hip, Tab2Type.Tab2_Pet, Tab3Type.Tab3_Shoulder, Tab3Type.Tab3_Effects, Tab3Type.Tab3_Trailing ];

Mall.clothingTabIds = [ Tab2Type.Tab2_Eyebrows, Tab2Type.Tab2_Top, Tab3Type.Tab3_LongSinglePiece_Top, Tab3Type.Tab3_ShortJacket_Top, Tab3Type.Tab3_ShortSinglePiece_Top, Tab3Type.Tab3_Suit_Top, Tab3Type.Tab3_ALongCoat_Top, Tab3Type.Tab3_ShortSkirt_Bottom, Tab3Type.Tab3_LongPants_Bottom, Tab3Type.Tab3_Shorts_Bottom, Tab3Type.Tab3_LongSkirt_Bottom, Tab3Type.Tab3_Tights_Bottom, Tab3Type.Tab3_Gloves_Gloves, Tab3Type.Tab3_Accessories_Gloves, Tab3Type.Tab3_Everyday_Shoes, Tab3Type.Tab3_Boots_Shoes, Tab3Type.Tab3_FootCover_Shoes, Tab3Type.Tab3_NakedDress_Shoes, Tab3Type.Tab3_HighHeels_Shoes, Tab3Type.Tab3_SportsShoes_Shoes, Tab2Type.Tab2_Bottom, Tab2Type.Tab2_Shoes, Tab2Type.Tab2_Gloves, Tab3Type.Tab3_PupilStyle, Tab3Type.Tab3_Lens, Tab3Type.Tab3_UpperHighlight, Tab3Type.Tab3_LowerHighlight, Tab3Type.Tab3_Eyelashes, Tab3Type.Tab3_Eyeshadow, Tab3Type.Tab3_Blush, Tab3Type.Tab3_LipMakeup, Tab3Type.Tab3_FullHair, Tab3Type.Tab3_FrontHair, Tab3Type.Tab3_BackHair ];

Mall.defaultAssetIds = [ `398608`, `77763`, `292004`, `343474`, `292002`, `343467`, `66505`, `343475`, `75663`, `343466`, `398609`, `47968`, `48041`, `32112`, `48026`, `32098`, `398607`, `48062`, `292003`, `292001`, `343471`, `343476` ];

Mall.headTabIds = [ Tab2Type.Tab2_Face, Tab2Type.Tab2_Eyebrows, Tab2Type.Tab2_Expression, Tab3Type.Tab3_PupilStyle, Tab3Type.Tab3_Lens, Tab3Type.Tab3_UpperHighlight, Tab3Type.Tab3_LowerHighlight, Tab3Type.Tab3_Eyelashes, Tab3Type.Tab3_Eyeshadow, Tab3Type.Tab3_Blush, Tab3Type.Tab3_LipMakeup, Tab3Type.Tab3_FaceTattoo, Tab3Type.Tab3_FullHair, Tab3Type.Tab3_FrontHair, Tab3Type.Tab3_BackHair ];

var foreign102 = Object.freeze({
    __proto__: null,
    default: Mall
});

let ColorPickPanel_Generate = class ColorPickPanel_Generate extends UIScript {
    get mSaveCanvas() {
        if (!this.mSaveCanvas_Internal && this.uiWidgetBase) {
            this.mSaveCanvas_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mSaveCanvas");
        }
        return this.mSaveCanvas_Internal;
    }
    get mSaveButton() {
        if (!this.mSaveButton_Internal && this.uiWidgetBase) {
            this.mSaveButton_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mSaveCanvas/SaveCanvas/mSaveButton");
        }
        return this.mSaveButton_Internal;
    }
    get mSaveTextBlock() {
        if (!this.mSaveTextBlock_Internal && this.uiWidgetBase) {
            this.mSaveTextBlock_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mSaveCanvas/SaveCanvas/mSaveTextBlock");
        }
        return this.mSaveTextBlock_Internal;
    }
    get mListBgImage() {
        if (!this.mListBgImage_Internal && this.uiWidgetBase) {
            this.mListBgImage_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/ListCanvas/mListBgImage");
        }
        return this.mListBgImage_Internal;
    }
    get mListCanvas() {
        if (!this.mListCanvas_Internal && this.uiWidgetBase) {
            this.mListCanvas_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/ListCanvas/mListCanvas");
        }
        return this.mListCanvas_Internal;
    }
    get mTab1Canvas() {
        if (!this.mTab1Canvas_Internal && this.uiWidgetBase) {
            this.mTab1Canvas_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/ListCanvas/mListCanvas/mTab1Canvas");
        }
        return this.mTab1Canvas_Internal;
    }
    get mTab1ScrollBox() {
        if (!this.mTab1ScrollBox_Internal && this.uiWidgetBase) {
            this.mTab1ScrollBox_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/ListCanvas/mListCanvas/mTab1Canvas/mTab1ScrollBox");
        }
        return this.mTab1ScrollBox_Internal;
    }
    get mTab1ContentCanvas() {
        if (!this.mTab1ContentCanvas_Internal && this.uiWidgetBase) {
            this.mTab1ContentCanvas_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/ListCanvas/mListCanvas/mTab1Canvas/mTab1ScrollBox/mTab1ContentCanvas");
        }
        return this.mTab1ContentCanvas_Internal;
    }
    get mTab2Canvas() {
        if (!this.mTab2Canvas_Internal && this.uiWidgetBase) {
            this.mTab2Canvas_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/ListCanvas/mListCanvas/mTab2Canvas");
        }
        return this.mTab2Canvas_Internal;
    }
    get mTab2ScrollBox() {
        if (!this.mTab2ScrollBox_Internal && this.uiWidgetBase) {
            this.mTab2ScrollBox_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/ListCanvas/mListCanvas/mTab2Canvas/mTab2ScrollBox");
        }
        return this.mTab2ScrollBox_Internal;
    }
    get mTab2ContentCanvas() {
        if (!this.mTab2ContentCanvas_Internal && this.uiWidgetBase) {
            this.mTab2ContentCanvas_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/ListCanvas/mListCanvas/mTab2Canvas/mTab2ScrollBox/mTab2ContentCanvas");
        }
        return this.mTab2ContentCanvas_Internal;
    }
    get mTab3Canvas() {
        if (!this.mTab3Canvas_Internal && this.uiWidgetBase) {
            this.mTab3Canvas_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/ListCanvas/mListCanvas/mTab3Canvas");
        }
        return this.mTab3Canvas_Internal;
    }
    get mTab3ScrollBox() {
        if (!this.mTab3ScrollBox_Internal && this.uiWidgetBase) {
            this.mTab3ScrollBox_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/ListCanvas/mListCanvas/mTab3Canvas/mTab3ScrollBox");
        }
        return this.mTab3ScrollBox_Internal;
    }
    get mTab3ContentCanvas() {
        if (!this.mTab3ContentCanvas_Internal && this.uiWidgetBase) {
            this.mTab3ContentCanvas_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/ListCanvas/mListCanvas/mTab3Canvas/mTab3ScrollBox/mTab3ContentCanvas");
        }
        return this.mTab3ContentCanvas_Internal;
    }
    get mColorPickCanvas() {
        if (!this.mColorPickCanvas_Internal && this.uiWidgetBase) {
            this.mColorPickCanvas_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/ListCanvas/mListCanvas/mTab3Canvas/mColorPickCanvas");
        }
        return this.mColorPickCanvas_Internal;
    }
    get mColorPick() {
        if (!this.mColorPick_Internal && this.uiWidgetBase) {
            this.mColorPick_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/ListCanvas/mListCanvas/mTab3Canvas/mColorPickCanvas/mColorPick");
        }
        return this.mColorPick_Internal;
    }
    get mCloseButton() {
        if (!this.mCloseButton_Internal && this.uiWidgetBase) {
            this.mCloseButton_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/ListCanvas/mCloseButton");
        }
        return this.mCloseButton_Internal;
    }
    get mCloseImage() {
        if (!this.mCloseImage_Internal && this.uiWidgetBase) {
            this.mCloseImage_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/ListCanvas/mCloseButton/mCloseImage");
        }
        return this.mCloseImage_Internal;
    }
    onAwake() {
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        this.mSaveButton.onClicked.add((() => {
            Event.dispatchToLocal("PlayButtonClick", "mSaveButton");
        }));
        this.mSaveButton.touchMethod = mw.ButtonTouchMethod.PreciseTap;
        this.mCloseButton.onClicked.add((() => {
            Event.dispatchToLocal("PlayButtonClick", "mCloseButton");
        }));
        this.mCloseButton.touchMethod = mw.ButtonTouchMethod.PreciseTap;
        this.initLanguage(this.mSaveTextBlock);
    }
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) {}
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    hide() {
        mw.UIService.hideUI(this);
    }
};

ColorPickPanel_Generate = __decorate([ UIBind("UI/module/MallModule/ColorPickPanel.ui") ], ColorPickPanel_Generate);

var ColorPickPanel_Generate$1 = ColorPickPanel_Generate;

var foreign176 = Object.freeze({
    __proto__: null,
    default: ColorPickPanel_Generate$1
});

let ColorPickTab1_Generate = class ColorPickTab1_Generate extends UIScript {
    get mTitleTextBlock() {
        if (!this.mTitleTextBlock_Internal && this.uiWidgetBase) {
            this.mTitleTextBlock_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mTitleTextBlock");
        }
        return this.mTitleTextBlock_Internal;
    }
    onAwake() {
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        this.initLanguage(this.mTitleTextBlock);
    }
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) {}
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    hide() {
        mw.UIService.hideUI(this);
    }
};

ColorPickTab1_Generate = __decorate([ UIBind("UI/module/MallModule/ColorPickTab1.ui") ], ColorPickTab1_Generate);

var ColorPickTab1_Generate$1 = ColorPickTab1_Generate;

var foreign177 = Object.freeze({
    __proto__: null,
    default: ColorPickTab1_Generate$1
});

class ColorPickTab1 extends ColorPickTab1_Generate$1 {
    onStart() {
        this.canUpdate = false;
        this.layer = UILayerMiddle;
    }
    refreshColorPickTab1(text) {
        this.mTitleTextBlock.text = text;
    }
}

var foreign107 = Object.freeze({
    __proto__: null,
    default: ColorPickTab1
});

let ColorPickTab2_Generate = class ColorPickTab2_Generate extends UIScript {
    get mTab2Canvas() {
        if (!this.mTab2Canvas_Internal && this.uiWidgetBase) {
            this.mTab2Canvas_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mTab2Canvas");
        }
        return this.mTab2Canvas_Internal;
    }
    get mColorImage() {
        if (!this.mColorImage_Internal && this.uiWidgetBase) {
            this.mColorImage_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mTab2Canvas/mColorImage");
        }
        return this.mColorImage_Internal;
    }
    get mTab2Button() {
        if (!this.mTab2Button_Internal && this.uiWidgetBase) {
            this.mTab2Button_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mTab2Canvas/mTab2Button");
        }
        return this.mTab2Button_Internal;
    }
    get mTab2TextBlock() {
        if (!this.mTab2TextBlock_Internal && this.uiWidgetBase) {
            this.mTab2TextBlock_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mTab2Canvas/mTab2TextBlock");
        }
        return this.mTab2TextBlock_Internal;
    }
    get mSelectTab2Canvas() {
        if (!this.mSelectTab2Canvas_Internal && this.uiWidgetBase) {
            this.mSelectTab2Canvas_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mTab2Canvas/mSelectTab2Canvas");
        }
        return this.mSelectTab2Canvas_Internal;
    }
    get mSelectTab2BgImage() {
        if (!this.mSelectTab2BgImage_Internal && this.uiWidgetBase) {
            this.mSelectTab2BgImage_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mTab2Canvas/mSelectTab2Canvas/mSelectTab2BgImage");
        }
        return this.mSelectTab2BgImage_Internal;
    }
    onAwake() {
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        this.mTab2Button.onClicked.add((() => {
            Event.dispatchToLocal("PlayButtonClick", "mTab2Button");
        }));
        this.mTab2Button.touchMethod = mw.ButtonTouchMethod.PreciseTap;
        this.initLanguage(this.mTab2TextBlock);
    }
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) {}
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    hide() {
        mw.UIService.hideUI(this);
    }
};

ColorPickTab2_Generate = __decorate([ UIBind("UI/module/MallModule/ColorPickTab2.ui") ], ColorPickTab2_Generate);

var ColorPickTab2_Generate$1 = ColorPickTab2_Generate;

var foreign178 = Object.freeze({
    __proto__: null,
    default: ColorPickTab2_Generate$1
});

class ColorPickTab2 extends ColorPickTab2_Generate$1 {
    constructor() {
        super(...arguments);
        this.mallModuleC = null;
        this.index = -1;
        this.colorPickTab2Data = null;
        this.isSelect = false;
    }
    get getMallModuleC() {
        if (!this.mallModuleC) {
            this.mallModuleC = ModuleService.getModule(MallModuleC);
        }
        return this.mallModuleC;
    }
    onStart() {
        this.canUpdate = false;
        this.layer = UILayerMiddle;
        this.initUI();
        this.bindButton();
        this.bindAction();
    }
    initUI() {
        this.updateSelectStateUI();
    }
    bindButton() {
        this.mTab2Button.onClicked.add(this.addTab2Button.bind(this));
    }
    bindAction() {
        this.getMallModuleC.onSelectColorPickTab2Action.add(this.addSelectColorPickTab2Action.bind(this));
    }
    addTab2Button() {
        this.getMallModuleC.onSelectColorPickTab2Action.call(this.index);
    }
    initTab2(index, colorPickTab2Data) {
        this.index = index;
        this.colorPickTab2Data = colorPickTab2Data;
        this.mTab2TextBlock.text = colorPickTab2Data.text;
        this.mColorImage.imageColor = colorPickTab2Data.color;
        this.updateSelectState(false);
    }
    refreshColorImage(color) {
        this.mColorImage.imageColor = color;
    }
    addSelectColorPickTab2Action(index) {
        this.updateSelectState(this.index == index);
    }
    updateSelectState(isSelect) {
        if (this.isSelect == isSelect) return;
        this.isSelect = isSelect;
        this.updateSelectStateUI();
    }
    updateSelectStateUI() {
        if (this.isSelect) {
            Utils.setWidgetVisibility(this.mSelectTab2BgImage, mw.SlateVisibility.SelfHitTestInvisible);
            this.mTab2TextBlock.setFontColorByHex(`000000E5`);
            this.mTab2TextBlock.glyph = mw.UIFontGlyph.Bold;
        } else {
            Utils.setWidgetVisibility(this.mSelectTab2BgImage, mw.SlateVisibility.Collapsed);
            this.mTab2TextBlock.setFontColorByHex(`00000099`);
            this.mTab2TextBlock.glyph = mw.UIFontGlyph.Normal;
        }
    }
}

var foreign108 = Object.freeze({
    __proto__: null,
    default: ColorPickTab2
});

let ColorPickTab3_Generate = class ColorPickTab3_Generate extends UIScript {
    get mBgImage() {
        if (!this.mBgImage_Internal && this.uiWidgetBase) {
            this.mBgImage_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mBgImage");
        }
        return this.mBgImage_Internal;
    }
    get mSelectImage() {
        if (!this.mSelectImage_Internal && this.uiWidgetBase) {
            this.mSelectImage_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mSelectImage");
        }
        return this.mSelectImage_Internal;
    }
    get mSelectButton() {
        if (!this.mSelectButton_Internal && this.uiWidgetBase) {
            this.mSelectButton_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mSelectButton");
        }
        return this.mSelectButton_Internal;
    }
    onAwake() {
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        this.mSelectButton.onClicked.add((() => {
            Event.dispatchToLocal("PlayButtonClick", "mSelectButton");
        }));
        this.mSelectButton.touchMethod = mw.ButtonTouchMethod.PreciseTap;
    }
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) {}
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    hide() {
        mw.UIService.hideUI(this);
    }
};

ColorPickTab3_Generate = __decorate([ UIBind("UI/module/MallModule/ColorPickTab3.ui") ], ColorPickTab3_Generate);

var ColorPickTab3_Generate$1 = ColorPickTab3_Generate;

var foreign179 = Object.freeze({
    __proto__: null,
    default: ColorPickTab3_Generate$1
});

class ColorPickTab3 extends ColorPickTab3_Generate$1 {
    constructor() {
        super(...arguments);
        this.mallModuleC = null;
        this.index = -1;
        this.color = null;
        this.isSelect = false;
    }
    get getMallModuleC() {
        if (!this.mallModuleC) {
            this.mallModuleC = ModuleService.getModule(MallModuleC);
        }
        return this.mallModuleC;
    }
    onStart() {
        this.canUpdate = false;
        this.layer = UILayerMiddle;
        this.initUI();
        this.bindButton();
        this.bindAction();
    }
    initUI() {
        this.mBgImage.imageGuid = `199136`;
        this.updateSelectStateUI();
    }
    bindButton() {
        this.mSelectButton.onClicked.add(this.addSelectButton.bind(this));
    }
    bindAction() {
        this.getMallModuleC.onSelectColorPickTab3Action.add(this.addSelectItemAction.bind(this));
    }
    addSelectButton() {
        this.getMallModuleC.onSelectColorPickTab3Action.call(this.index);
    }
    initColorPickTab3(index, color) {
        this.index = index;
        this.color = color;
        this.mBgImage.setImageColorByHex(color);
        this.updateSelectState(false);
    }
    addSelectItemAction(index) {
        this.updateSelectState(this.index == index);
    }
    updateSelectState(isSelect) {
        if (this.isSelect == isSelect) return;
        this.isSelect = isSelect;
        this.updateSelectStateUI();
    }
    updateSelectStateUI() {
        this.mSelectImage.renderOpacity = this.isSelect ? 1 : 0;
    }
}

var foreign109 = Object.freeze({
    __proto__: null,
    default: ColorPickTab3
});

var Enums;

(function(Enums) {
    (function(TouchEvent) {
        TouchEvent[TouchEvent["DOWN"] = 0] = "DOWN";
        TouchEvent[TouchEvent["MOVE"] = 1] = "MOVE";
        TouchEvent[TouchEvent["UP"] = 2] = "UP";
    })(Enums.TouchEvent || (Enums.TouchEvent = {}));
})(Enums || (Enums = {}));

class TouchScript {
    constructor() {
        this.captureMap = new Map;
        this.screenListeners = [];
    }
    onStart() {}
    static get instance() {
        if (this._ins == null) {
            this._ins = new TouchScript;
        }
        return this._ins;
    }
    addScreenListener(widget, callback, adjuestCenter) {
        this.screenListeners.push({
            widget: widget,
            callback: callback,
            adjuestCenter: adjuestCenter
        });
    }
    removeScreenListener(widget) {
        for (let i = 0; i < this.screenListeners.length; i++) {
            if (this.screenListeners[i].widget == widget) {
                this.screenListeners.splice(i, 1);
                i--;
            }
        }
    }
    onTouchStarted(inGemory, inPointerEvent) {
        for (let i = 0; i < this.screenListeners.length; i++) {
            const position = inPointerEvent.screenSpacePosition;
            const localPosition = mw.absoluteToLocal(inGemory, position);
            const pos = new mw.Vector2(this.screenListeners[i].widget.position.x, this.screenListeners[i].widget.position.y);
            const size = this.screenListeners[i].widget.size;
            if (localPosition.x > pos.x && localPosition.y > pos.y && localPosition.x < pos.x + size.x && localPosition.y < pos.y + size.y) {
                this.captureMap.set(inPointerEvent.pointerIndex, this.screenListeners[i]);
                this.screenListeners[i].callback(this.screenListeners[i].widget, Enums.TouchEvent.DOWN, localPosition.x, localPosition.y, inPointerEvent);
                return mw.EventReply.handled;
            }
        }
        return mw.EventReply.handled;
    }
    onTouchMoved(inGemory, inPointerEvent) {
        if (this.captureMap.has(inPointerEvent.pointerIndex)) {
            const position = inPointerEvent.screenSpacePosition;
            const localPosition = mw.absoluteToLocal(inGemory, position);
            let capture = this.captureMap.get(inPointerEvent.pointerIndex);
            const pos = new mw.Vector2(capture.widget.position.x, capture.widget.position.y);
            const size = capture.widget.size;
            if (localPosition.x > pos.x && localPosition.y > pos.y && localPosition.x < pos.x + size.x && localPosition.y < pos.y + size.y) {
                capture.callback(capture.widget, Enums.TouchEvent.MOVE, localPosition.x, localPosition.y, inPointerEvent);
            }
        }
        return mw.EventReply.handled;
    }
    onTouchEnded(inGemory, inPointerEvent) {
        if (this.captureMap.has(inPointerEvent.pointerIndex)) {
            const position = inPointerEvent.screenSpacePosition;
            const localPosition = mw.absoluteToLocal(inGemory, position);
            let capture = this.captureMap.get(inPointerEvent.pointerIndex);
            capture.callback(capture.widget, Enums.TouchEvent.UP, localPosition.x, localPosition.y, inPointerEvent);
            this.captureMap.delete(inPointerEvent.pointerIndex);
        }
        return mw.EventReply.handled;
    }
}

var foreign157 = Object.freeze({
    __proto__: null,
    get Enums() {
        return Enums;
    },
    TouchScript: TouchScript
});

let MallPanel_Generate = class MallPanel_Generate extends UIScript {
    get mTouchImage() {
        if (!this.mTouchImage_Internal && this.uiWidgetBase) {
            this.mTouchImage_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mTouchImage");
        }
        return this.mTouchImage_Internal;
    }
    get mLeftCanvas() {
        if (!this.mLeftCanvas_Internal && this.uiWidgetBase) {
            this.mLeftCanvas_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mLeftCanvas");
        }
        return this.mLeftCanvas_Internal;
    }
    get mResetButton() {
        if (!this.mResetButton_Internal && this.uiWidgetBase) {
            this.mResetButton_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mLeftCanvas/mResetButton");
        }
        return this.mResetButton_Internal;
    }
    get mResetTextBlock() {
        if (!this.mResetTextBlock_Internal && this.uiWidgetBase) {
            this.mResetTextBlock_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mLeftCanvas/mResetButton/mResetTextBlock");
        }
        return this.mResetTextBlock_Internal;
    }
    get mSaveButton() {
        if (!this.mSaveButton_Internal && this.uiWidgetBase) {
            this.mSaveButton_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mLeftCanvas/mSaveButton");
        }
        return this.mSaveButton_Internal;
    }
    get mSaveTextBlock() {
        if (!this.mSaveTextBlock_Internal && this.uiWidgetBase) {
            this.mSaveTextBlock_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mLeftCanvas/mSaveButton/mSaveTextBlock");
        }
        return this.mSaveTextBlock_Internal;
    }
    get mSexButton() {
        if (!this.mSexButton_Internal && this.uiWidgetBase) {
            this.mSexButton_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mLeftCanvas/mSexButton");
        }
        return this.mSexButton_Internal;
    }
    get mSexImage() {
        if (!this.mSexImage_Internal && this.uiWidgetBase) {
            this.mSexImage_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mLeftCanvas/mSexButton/mSexImage");
        }
        return this.mSexImage_Internal;
    }
    get mSelfCanvas() {
        if (!this.mSelfCanvas_Internal && this.uiWidgetBase) {
            this.mSelfCanvas_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mSelfCanvas");
        }
        return this.mSelfCanvas_Internal;
    }
    get mSelfScrollBox() {
        if (!this.mSelfScrollBox_Internal && this.uiWidgetBase) {
            this.mSelfScrollBox_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mSelfCanvas/mSelfScrollBox");
        }
        return this.mSelfScrollBox_Internal;
    }
    get mSelfContentCanvas() {
        if (!this.mSelfContentCanvas_Internal && this.uiWidgetBase) {
            this.mSelfContentCanvas_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mSelfCanvas/mSelfScrollBox/mSelfContentCanvas");
        }
        return this.mSelfContentCanvas_Internal;
    }
    get mListBgImage() {
        if (!this.mListBgImage_Internal && this.uiWidgetBase) {
            this.mListBgImage_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/ListCanvas/mListBgImage");
        }
        return this.mListBgImage_Internal;
    }
    get mListCanvas() {
        if (!this.mListCanvas_Internal && this.uiWidgetBase) {
            this.mListCanvas_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/ListCanvas/mListCanvas");
        }
        return this.mListCanvas_Internal;
    }
    get mTab1Canvas() {
        if (!this.mTab1Canvas_Internal && this.uiWidgetBase) {
            this.mTab1Canvas_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/ListCanvas/mListCanvas/mTab1Canvas");
        }
        return this.mTab1Canvas_Internal;
    }
    get mTab1ScrollBox() {
        if (!this.mTab1ScrollBox_Internal && this.uiWidgetBase) {
            this.mTab1ScrollBox_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/ListCanvas/mListCanvas/mTab1Canvas/mTab1ScrollBox");
        }
        return this.mTab1ScrollBox_Internal;
    }
    get mTab1ContentCanvas() {
        if (!this.mTab1ContentCanvas_Internal && this.uiWidgetBase) {
            this.mTab1ContentCanvas_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/ListCanvas/mListCanvas/mTab1Canvas/mTab1ScrollBox/mTab1ContentCanvas");
        }
        return this.mTab1ContentCanvas_Internal;
    }
    get mTab2Canvas() {
        if (!this.mTab2Canvas_Internal && this.uiWidgetBase) {
            this.mTab2Canvas_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/ListCanvas/mListCanvas/mTab2Canvas");
        }
        return this.mTab2Canvas_Internal;
    }
    get mTab2ScrollBox() {
        if (!this.mTab2ScrollBox_Internal && this.uiWidgetBase) {
            this.mTab2ScrollBox_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/ListCanvas/mListCanvas/mTab2Canvas/mTab2ScrollBox");
        }
        return this.mTab2ScrollBox_Internal;
    }
    get mTab2ContentCanvas() {
        if (!this.mTab2ContentCanvas_Internal && this.uiWidgetBase) {
            this.mTab2ContentCanvas_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/ListCanvas/mListCanvas/mTab2Canvas/mTab2ScrollBox/mTab2ContentCanvas");
        }
        return this.mTab2ContentCanvas_Internal;
    }
    get mTab3Canvas() {
        if (!this.mTab3Canvas_Internal && this.uiWidgetBase) {
            this.mTab3Canvas_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/ListCanvas/mListCanvas/mTab3Canvas");
        }
        return this.mTab3Canvas_Internal;
    }
    get mTab3ScrollBox() {
        if (!this.mTab3ScrollBox_Internal && this.uiWidgetBase) {
            this.mTab3ScrollBox_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/ListCanvas/mListCanvas/mTab3Canvas/mTab3ScrollBox");
        }
        return this.mTab3ScrollBox_Internal;
    }
    get mTab3ContentCanvas() {
        if (!this.mTab3ContentCanvas_Internal && this.uiWidgetBase) {
            this.mTab3ContentCanvas_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/ListCanvas/mListCanvas/mTab3Canvas/mTab3ScrollBox/mTab3ContentCanvas");
        }
        return this.mTab3ContentCanvas_Internal;
    }
    get mItemScrollBox() {
        if (!this.mItemScrollBox_Internal && this.uiWidgetBase) {
            this.mItemScrollBox_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/ListCanvas/mListCanvas/mItemScrollBox");
        }
        return this.mItemScrollBox_Internal;
    }
    get mItemContentCanvas() {
        if (!this.mItemContentCanvas_Internal && this.uiWidgetBase) {
            this.mItemContentCanvas_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/ListCanvas/mListCanvas/mItemScrollBox/mItemContentCanvas");
        }
        return this.mItemContentCanvas_Internal;
    }
    get mCloseButton() {
        if (!this.mCloseButton_Internal && this.uiWidgetBase) {
            this.mCloseButton_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/ListCanvas/mCloseButton");
        }
        return this.mCloseButton_Internal;
    }
    get mCloseImage() {
        if (!this.mCloseImage_Internal && this.uiWidgetBase) {
            this.mCloseImage_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/ListCanvas/mCloseButton/mCloseImage");
        }
        return this.mCloseImage_Internal;
    }
    onAwake() {
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        this.mResetButton.onClicked.add((() => {
            Event.dispatchToLocal("PlayButtonClick", "mResetButton");
        }));
        this.mResetButton.touchMethod = mw.ButtonTouchMethod.PreciseTap;
        this.mSaveButton.onClicked.add((() => {
            Event.dispatchToLocal("PlayButtonClick", "mSaveButton");
        }));
        this.mSaveButton.touchMethod = mw.ButtonTouchMethod.PreciseTap;
        this.mSexButton.onClicked.add((() => {
            Event.dispatchToLocal("PlayButtonClick", "mSexButton");
        }));
        this.mSexButton.touchMethod = mw.ButtonTouchMethod.PreciseTap;
        this.mCloseButton.onClicked.add((() => {
            Event.dispatchToLocal("PlayButtonClick", "mCloseButton");
        }));
        this.mCloseButton.touchMethod = mw.ButtonTouchMethod.PreciseTap;
        this.initLanguage(this.mResetTextBlock);
        this.initLanguage(this.mSaveTextBlock);
    }
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) {}
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    hide() {
        mw.UIService.hideUI(this);
    }
};

MallPanel_Generate = __decorate([ UIBind("UI/module/MallModule/MallPanel.ui") ], MallPanel_Generate);

var MallPanel_Generate$1 = MallPanel_Generate;

var foreign184 = Object.freeze({
    __proto__: null,
    default: MallPanel_Generate$1
});

let MallItem_Big_Generate = class MallItem_Big_Generate extends UIScript {
    get mBgImage() {
        if (!this.mBgImage_Internal && this.uiWidgetBase) {
            this.mBgImage_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mBgImage");
        }
        return this.mBgImage_Internal;
    }
    get mIconImage() {
        if (!this.mIconImage_Internal && this.uiWidgetBase) {
            this.mIconImage_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mIconImage");
        }
        return this.mIconImage_Internal;
    }
    get mSelectButton() {
        if (!this.mSelectButton_Internal && this.uiWidgetBase) {
            this.mSelectButton_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mSelectButton");
        }
        return this.mSelectButton_Internal;
    }
    get mCoinCanvas() {
        if (!this.mCoinCanvas_Internal && this.uiWidgetBase) {
            this.mCoinCanvas_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mCoinCanvas");
        }
        return this.mCoinCanvas_Internal;
    }
    get mCoinIconImage() {
        if (!this.mCoinIconImage_Internal && this.uiWidgetBase) {
            this.mCoinIconImage_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mCoinCanvas/mCoinIconImage");
        }
        return this.mCoinIconImage_Internal;
    }
    get mPriceTextBlock() {
        if (!this.mPriceTextBlock_Internal && this.uiWidgetBase) {
            this.mPriceTextBlock_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mCoinCanvas/mPriceTextBlock");
        }
        return this.mPriceTextBlock_Internal;
    }
    onAwake() {
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        this.mSelectButton.onClicked.add((() => {
            Event.dispatchToLocal("PlayButtonClick", "mSelectButton");
        }));
        this.mSelectButton.touchMethod = mw.ButtonTouchMethod.PreciseTap;
        this.initLanguage(this.mPriceTextBlock);
    }
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) {}
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    hide() {
        mw.UIService.hideUI(this);
    }
};

MallItem_Big_Generate = __decorate([ UIBind("UI/module/MallModule/MallItem_Big.ui") ], MallItem_Big_Generate);

var MallItem_Big_Generate$1 = MallItem_Big_Generate;

var foreign180 = Object.freeze({
    __proto__: null,
    default: MallItem_Big_Generate$1
});

class MallItem_Big extends MallItem_Big_Generate$1 {
    constructor() {
        super(...arguments);
        this.mallModuleC = null;
        this.tabType = TabType.None;
        this.tabId = 0;
        this.assetId = null;
        this.isSelect = false;
    }
    get getMallModuleC() {
        if (!this.mallModuleC) {
            this.mallModuleC = ModuleService.getModule(MallModuleC);
        }
        return this.mallModuleC;
    }
    onStart() {
        this.canUpdate = false;
        this.layer = UILayerMiddle;
        this.initUI();
        this.bindButton();
        this.bindAction();
    }
    initUI() {
        this.mIconImage.imageGuid = `32115`;
        this.updateSelectStateUI();
    }
    bindButton() {
        this.mSelectButton.onClicked.add(this.addItemButton.bind(this));
    }
    bindAction() {
        this.getMallModuleC.onSelectItemAction.add(this.addSelectItemAction.bind(this));
    }
    addItemButton() {
        this.getMallModuleC.onSelectItemAction.call(this.tabType, this.tabId, this.assetId);
    }
    initItem(tabType, tabId, assetId) {
        this.tabType = tabType;
        this.tabId = tabId;
        this.assetId = assetId;
        switch (tabId) {
          case Tab2Type.Tab2_BodyType:
            let bodyTypeElement = GameConfig.BodyType.getElement(assetId);
            this.mIconImage.imageGuid = bodyTypeElement.Icon;
            Utils.setWidgetVisibility(this.mCoinIconImage, mw.SlateVisibility.Collapsed);
            this.mPriceTextBlock.text = StringUtil.format(GameConfig.Language.Text_BodyTypeDescribe.Value, bodyTypeElement.Scale);
            break;

          case Tab2Type.Tab2_Outfit:
            let outfitElement = GameConfig.Outfit.getElement(assetId);
            this.mIconImage.imageInfo.setByAssetIcon(outfitElement.AssetId, mw.AssetIconSize.Icon_128px);
            Utils.setWidgetVisibility(this.mCoinIconImage, mw.SlateVisibility.SelfHitTestInvisible);
            this.mPriceTextBlock.text = GameConfig.Language.Text_MallItem_Free.Value;
            break;

          case Tab3Type.Tab3_DailyStyling_Suit1:
            let dailyStylingOutfit1Element = GameConfig.DailyStylingOutfit1.getElement(assetId);
            this.mIconImage.imageInfo.setByAssetIcon(dailyStylingOutfit1Element.AssetId, mw.AssetIconSize.Icon_128px);
            Utils.setWidgetVisibility(this.mCoinIconImage, mw.SlateVisibility.SelfHitTestInvisible);
            this.mPriceTextBlock.text = GameConfig.Language.Text_MallItem_Free.Value;
            break;

          case Tab3Type.Tab3_DailyStyling_Suit2:
            let dailyStylingOutfit2Element = GameConfig.DailyStylingOutfit2.getElement(assetId);
            this.mIconImage.imageInfo.setByAssetIcon(dailyStylingOutfit2Element.AssetId, mw.AssetIconSize.Icon_128px);
            Utils.setWidgetVisibility(this.mCoinIconImage, mw.SlateVisibility.SelfHitTestInvisible);
            this.mPriceTextBlock.text = GameConfig.Language.Text_MallItem_Free.Value;
            break;

          case Tab3Type.Tab3_MuppetStyling_Suit:
            let muppetStylingOutfitElement = GameConfig.MuppetStylingOutfit.getElement(assetId);
            this.mIconImage.imageInfo.setByAssetIcon(muppetStylingOutfitElement.AssetId, mw.AssetIconSize.Icon_128px);
            Utils.setWidgetVisibility(this.mCoinIconImage, mw.SlateVisibility.SelfHitTestInvisible);
            this.mPriceTextBlock.text = GameConfig.Language.Text_MallItem_Free.Value;
            break;

          case Tab3Type.Tab3_HeroStyling_Suit:
            let heroStylingOutfitElement = GameConfig.HeroStylingOutfit.getElement(assetId);
            this.mIconImage.imageInfo.setByAssetIcon(heroStylingOutfitElement.AssetId, mw.AssetIconSize.Icon_128px);
            Utils.setWidgetVisibility(this.mCoinIconImage, mw.SlateVisibility.SelfHitTestInvisible);
            this.mPriceTextBlock.text = GameConfig.Language.Text_MallItem_Free.Value;
            break;

          case Tab3Type.Tab3_FantasyModeling_Suit:
            let fantasyModelingOutfitElement = GameConfig.FantasyModelingOutfit.getElement(assetId);
            this.mIconImage.imageInfo.setByAssetIcon(fantasyModelingOutfitElement.AssetId, mw.AssetIconSize.Icon_128px);
            Utils.setWidgetVisibility(this.mCoinIconImage, mw.SlateVisibility.SelfHitTestInvisible);
            this.mPriceTextBlock.text = GameConfig.Language.Text_MallItem_Free.Value;
            break;

          case Tab3Type.Tab3_HolidayStyling_Suit:
            let holidayStylingOutfitElement = GameConfig.HolidayStylingOutfit.getElement(assetId);
            this.mIconImage.imageInfo.setByAssetIcon(holidayStylingOutfitElement.AssetId, mw.AssetIconSize.Icon_128px);
            Utils.setWidgetVisibility(this.mCoinIconImage, mw.SlateVisibility.SelfHitTestInvisible);
            this.mPriceTextBlock.text = GameConfig.Language.Text_MallItem_Free.Value;
            break;

          case Tab3Type.Tab3_ScienceFictionStyling_Suit:
            let scienceFictionStylingOutfitElement = GameConfig.ScienceFictionStylingOutfit.getElement(assetId);
            this.mIconImage.imageInfo.setByAssetIcon(scienceFictionStylingOutfitElement.AssetId, mw.AssetIconSize.Icon_128px);
            Utils.setWidgetVisibility(this.mCoinIconImage, mw.SlateVisibility.SelfHitTestInvisible);
            this.mPriceTextBlock.text = GameConfig.Language.Text_MallItem_Free.Value;
            break;

          case Tab3Type.Tab3_AncientMolding_Suit:
            let ancientMoldingOutfitElement = GameConfig.AncientMoldingOutfit.getElement(assetId);
            this.mIconImage.imageInfo.setByAssetIcon(ancientMoldingOutfitElement.AssetId, mw.AssetIconSize.Icon_128px);
            Utils.setWidgetVisibility(this.mCoinIconImage, mw.SlateVisibility.SelfHitTestInvisible);
            this.mPriceTextBlock.text = GameConfig.Language.Text_MallItem_Free.Value;
            break;

          default:
            this.mIconImage.imageInfo.setByAssetIcon(assetId, mw.AssetIconSize.Icon_128px);
            Utils.setWidgetVisibility(this.mCoinIconImage, mw.SlateVisibility.SelfHitTestInvisible);
            this.mPriceTextBlock.text = GameConfig.Language.Text_MallItem_Free.Value;
            break;
        }
        this.updateSelectState(false);
    }
    addSelectItemAction(tabType, tabId, assetId) {
        if (this.tabType != tabType || this.tabId != tabId) return;
        this.updateSelectState(this.assetId == assetId);
    }
    updateSelectState(isSelect) {
        if (this.isSelect == isSelect) return;
        this.isSelect = isSelect;
        this.updateSelectStateUI();
    }
    updateSelectStateUI() {
        this.mSelectButton.renderOpacity = this.isSelect ? 1 : 0;
    }
}

var foreign110 = Object.freeze({
    __proto__: null,
    default: MallItem_Big
});

let MallItem_Color_Generate = class MallItem_Color_Generate extends UIScript {
    get mBgImage() {
        if (!this.mBgImage_Internal && this.uiWidgetBase) {
            this.mBgImage_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mBgImage");
        }
        return this.mBgImage_Internal;
    }
    get mSelectImage() {
        if (!this.mSelectImage_Internal && this.uiWidgetBase) {
            this.mSelectImage_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mSelectImage");
        }
        return this.mSelectImage_Internal;
    }
    get mSelectButton() {
        if (!this.mSelectButton_Internal && this.uiWidgetBase) {
            this.mSelectButton_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mSelectButton");
        }
        return this.mSelectButton_Internal;
    }
    onAwake() {
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        this.mSelectButton.onClicked.add((() => {
            Event.dispatchToLocal("PlayButtonClick", "mSelectButton");
        }));
        this.mSelectButton.touchMethod = mw.ButtonTouchMethod.PreciseTap;
    }
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) {}
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    hide() {
        mw.UIService.hideUI(this);
    }
};

MallItem_Color_Generate = __decorate([ UIBind("UI/module/MallModule/MallItem_Color.ui") ], MallItem_Color_Generate);

var MallItem_Color_Generate$1 = MallItem_Color_Generate;

var foreign181 = Object.freeze({
    __proto__: null,
    default: MallItem_Color_Generate$1
});

class MallItem_Color extends MallItem_Color_Generate$1 {
    constructor() {
        super(...arguments);
        this.mallModuleC = null;
        this.tabType = TabType.None;
        this.tabId = 0;
        this.assetId = null;
        this.isSelect = false;
    }
    get getMallModuleC() {
        if (!this.mallModuleC) {
            this.mallModuleC = ModuleService.getModule(MallModuleC);
        }
        return this.mallModuleC;
    }
    onStart() {
        this.canUpdate = false;
        this.layer = UILayerMiddle;
        this.initUI();
        this.bindButton();
        this.bindAction();
    }
    initUI() {
        this.updateSelectStateUI();
    }
    bindButton() {
        this.mSelectButton.onClicked.add(this.addItemButton.bind(this));
    }
    bindAction() {
        this.getMallModuleC.onSelectItemAction.add(this.addSelectItemAction.bind(this));
    }
    addItemButton() {
        if (this.assetId == `ColorPick`) {
            this.getMallModuleC.onOpenColorPickAction.call(this.tabType, this.tabId);
        } else {
            this.getMallModuleC.onSelectItemAction.call(this.tabType, this.tabId, this.assetId);
        }
    }
    initItem(tabType, tabId, assetId) {
        this.tabType = tabType;
        this.tabId = tabId;
        this.assetId = assetId;
        if (assetId == `ColorPick`) {
            this.mBgImage.imageGuid = `169864`;
        } else {
            this.mBgImage.imageGuid = `199136`;
            this.mBgImage.setImageColorByHex(assetId);
        }
        this.updateSelectState(false);
    }
    addSelectItemAction(tabType, tabId, assetId) {
        if (this.tabType != tabType || this.tabId != tabId) return;
        this.updateSelectState(this.assetId == assetId);
    }
    updateSelectState(isSelect) {
        if (this.isSelect == isSelect) return;
        this.isSelect = isSelect;
        this.updateSelectStateUI();
    }
    updateSelectStateUI() {
        this.mSelectImage.renderOpacity = this.isSelect ? 1 : 0;
    }
}

var foreign111 = Object.freeze({
    __proto__: null,
    default: MallItem_Color
});

let MallItem_Self_Generate = class MallItem_Self_Generate extends UIScript {
    get mBgImage() {
        if (!this.mBgImage_Internal && this.uiWidgetBase) {
            this.mBgImage_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mBgImage");
        }
        return this.mBgImage_Internal;
    }
    get mIconImage() {
        if (!this.mIconImage_Internal && this.uiWidgetBase) {
            this.mIconImage_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mIconImage");
        }
        return this.mIconImage_Internal;
    }
    get mMaskImage() {
        if (!this.mMaskImage_Internal && this.uiWidgetBase) {
            this.mMaskImage_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mMaskImage");
        }
        return this.mMaskImage_Internal;
    }
    get mCloseButton() {
        if (!this.mCloseButton_Internal && this.uiWidgetBase) {
            this.mCloseButton_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mCloseButton");
        }
        return this.mCloseButton_Internal;
    }
    onAwake() {
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        this.mCloseButton.onClicked.add((() => {
            Event.dispatchToLocal("PlayButtonClick", "mCloseButton");
        }));
        this.initLanguage(this.mCloseButton);
        this.mCloseButton.touchMethod = mw.ButtonTouchMethod.PreciseTap;
    }
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) {}
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    hide() {
        mw.UIService.hideUI(this);
    }
};

MallItem_Self_Generate = __decorate([ UIBind("UI/module/MallModule/MallItem_Self.ui") ], MallItem_Self_Generate);

var MallItem_Self_Generate$1 = MallItem_Self_Generate;

var foreign182 = Object.freeze({
    __proto__: null,
    default: MallItem_Self_Generate$1
});

class MallItem_Self extends MallItem_Self_Generate$1 {
    constructor() {
        super(...arguments);
        this.mallModuleC = null;
        this.assetType = 0;
        this.assetId = null;
        this.isDefault = false;
    }
    get getMallModuleC() {
        if (!this.mallModuleC) {
            this.mallModuleC = ModuleService.getModule(MallModuleC);
        }
        return this.mallModuleC;
    }
    onStart() {
        this.canUpdate = false;
        this.layer = UILayerMiddle;
        this.initUI();
        this.bindButton();
    }
    initUI() {
        this.mIconImage.imageGuid = `32115`;
    }
    bindButton() {
        this.mCloseButton.onClicked.add(this.addCloseButton.bind(this));
    }
    addCloseButton() {
        this.getMallModuleC.onCloseMallItemSelfAction.call(this.assetType, this.assetId);
    }
    initItem(assetType, assetIdInfoData) {
        this.assetType = assetType;
        this.assetId = assetIdInfoData.assetId;
        this.mIconImage.imageInfo.setByAssetIcon(this.assetId, mw.AssetIconSize.Icon_128px);
        this.mIconImage.imageColor = mw.LinearColor.white;
        switch (assetType) {
          case Tab3Type.Tab3_Lens:
          case Tab3Type.Tab3_UpperHighlight:
          case Tab3Type.Tab3_LowerHighlight:
            this.mIconImage.imageColor = new mw.LinearColor(.3098, .1921, .7176);
            break;
        }
        this.isDefault = Mall.isDefaultAssetId(this.assetId);
        Utils.setWidgetVisibility(this.mCloseButton, this.isDefault ? mw.SlateVisibility.Collapsed : mw.SlateVisibility.Visible);
    }
}

var foreign112 = Object.freeze({
    __proto__: null,
    default: MallItem_Self
});

let MallItem_Small_Generate = class MallItem_Small_Generate extends UIScript {
    get mBgImage() {
        if (!this.mBgImage_Internal && this.uiWidgetBase) {
            this.mBgImage_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mBgImage");
        }
        return this.mBgImage_Internal;
    }
    get mIconImage() {
        if (!this.mIconImage_Internal && this.uiWidgetBase) {
            this.mIconImage_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mIconImage");
        }
        return this.mIconImage_Internal;
    }
    get mMaskImage() {
        if (!this.mMaskImage_Internal && this.uiWidgetBase) {
            this.mMaskImage_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mMaskImage");
        }
        return this.mMaskImage_Internal;
    }
    get mSelectButton() {
        if (!this.mSelectButton_Internal && this.uiWidgetBase) {
            this.mSelectButton_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mSelectButton");
        }
        return this.mSelectButton_Internal;
    }
    get mColorButton() {
        if (!this.mColorButton_Internal && this.uiWidgetBase) {
            this.mColorButton_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mColorButton");
        }
        return this.mColorButton_Internal;
    }
    get mCoinCanvas() {
        if (!this.mCoinCanvas_Internal && this.uiWidgetBase) {
            this.mCoinCanvas_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mCoinCanvas");
        }
        return this.mCoinCanvas_Internal;
    }
    get mCoinIconImage() {
        if (!this.mCoinIconImage_Internal && this.uiWidgetBase) {
            this.mCoinIconImage_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mCoinCanvas/mCoinIconImage");
        }
        return this.mCoinIconImage_Internal;
    }
    get mPriceTextBlock() {
        if (!this.mPriceTextBlock_Internal && this.uiWidgetBase) {
            this.mPriceTextBlock_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mCoinCanvas/mPriceTextBlock");
        }
        return this.mPriceTextBlock_Internal;
    }
    onAwake() {
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        this.mSelectButton.onClicked.add((() => {
            Event.dispatchToLocal("PlayButtonClick", "mSelectButton");
        }));
        this.mSelectButton.touchMethod = mw.ButtonTouchMethod.PreciseTap;
        this.mColorButton.onClicked.add((() => {
            Event.dispatchToLocal("PlayButtonClick", "mColorButton");
        }));
        this.mColorButton.touchMethod = mw.ButtonTouchMethod.PreciseTap;
        this.initLanguage(this.mPriceTextBlock);
    }
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) {}
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    hide() {
        mw.UIService.hideUI(this);
    }
};

MallItem_Small_Generate = __decorate([ UIBind("UI/module/MallModule/MallItem_Small.ui") ], MallItem_Small_Generate);

var MallItem_Small_Generate$1 = MallItem_Small_Generate;

var foreign183 = Object.freeze({
    __proto__: null,
    default: MallItem_Small_Generate$1
});

class MallItem_Small extends MallItem_Small_Generate$1 {
    constructor() {
        super(...arguments);
        this.mallModuleC = null;
        this.tabType = TabType.None;
        this.tabId = 0;
        this.assetId = null;
        this.isSupportColor = false;
        this.isRemovableTabId = false;
        this.isSelect = false;
    }
    get getMallModuleC() {
        if (!this.mallModuleC) {
            this.mallModuleC = ModuleService.getModule(MallModuleC);
        }
        return this.mallModuleC;
    }
    onStart() {
        this.canUpdate = false;
        this.layer = UILayerMiddle;
        this.initUI();
        this.bindButton();
        this.bindAction();
    }
    initUI() {
        this.mIconImage.imageGuid = `32115`;
        this.mPriceTextBlock.text = GameConfig.Language.Text_MallItem_Free.Value;
        this.updateSelectStateUI();
    }
    bindButton() {
        this.mSelectButton.onClicked.add(this.addItemButton.bind(this));
        this.mColorButton.onClicked.add(this.addColorButton.bind(this));
    }
    bindAction() {
        this.getMallModuleC.onSelectItemAction.add(this.addSelectItemAction.bind(this));
    }
    addItemButton() {
        this.getMallModuleC.onSelectItemAction.call(this.tabType, this.tabId, this.assetId);
    }
    addColorButton() {
        this.getMallModuleC.onOpenColorPickAction.call(this.tabType, this.tabId);
    }
    initItem(tabType, tabId, assetId) {
        this.tabType = tabType;
        this.tabId = tabId;
        this.assetId = assetId;
        this.mIconImage.imageColor = mw.LinearColor.white;
        this.isSupportColor = Mall.isSupportColorPick(tabId);
        this.isRemovableTabId = Mall.isRemovableTabId(tabId);
        switch (tabId) {
          case Tab3Type.Tab3_Lens:
          case Tab3Type.Tab3_UpperHighlight:
          case Tab3Type.Tab3_LowerHighlight:
            this.mIconImage.imageColor = new mw.LinearColor(.3098, .1921, .7176);
            this.mIconImage.imageInfo.setByAssetIcon(assetId, mw.AssetIconSize.Icon_128px);
            Utils.setWidgetVisibility(this.mCoinIconImage, mw.SlateVisibility.SelfHitTestInvisible);
            this.mPriceTextBlock.text = GameConfig.Language.Text_MallItem_Free.Value;
            break;

          case Tab2Type.Tab2_Expression:
            let faceExpressionElement = GameConfig.FaceExpression.getElement(assetId);
            this.mIconImage.imageColor = new mw.LinearColor(.3098, .1921, .7176);
            this.mIconImage.imageGuid = faceExpressionElement.Icon;
            Utils.setWidgetVisibility(this.mCoinIconImage, mw.SlateVisibility.Collapsed);
            this.mPriceTextBlock.text = faceExpressionElement.Name;
            break;

          case Tab3Type.Tab3_LeftHand:
            let leftHandElement = GameConfig.LeftHand.getElement(assetId);
            this.mIconImage.imageInfo.setByAssetIcon(leftHandElement.AssetId, mw.AssetIconSize.Icon_128px);
            Utils.setWidgetVisibility(this.mCoinIconImage, mw.SlateVisibility.SelfHitTestInvisible);
            this.mPriceTextBlock.text = GameConfig.Language.Text_MallItem_Free.Value;
            break;

          case Tab3Type.Tab3_RightHand:
            let rightHandElement = GameConfig.RightHand.getElement(assetId);
            this.mIconImage.imageInfo.setByAssetIcon(rightHandElement.AssetId, mw.AssetIconSize.Icon_128px);
            Utils.setWidgetVisibility(this.mCoinIconImage, mw.SlateVisibility.SelfHitTestInvisible);
            this.mPriceTextBlock.text = GameConfig.Language.Text_MallItem_Free.Value;
            break;

          case Tab3Type.Tab3_Back:
            let backElement = GameConfig.Back.getElement(assetId);
            this.mIconImage.imageInfo.setByAssetIcon(backElement.AssetId, mw.AssetIconSize.Icon_128px);
            Utils.setWidgetVisibility(this.mCoinIconImage, mw.SlateVisibility.SelfHitTestInvisible);
            this.mPriceTextBlock.text = GameConfig.Language.Text_MallItem_Free.Value;
            break;

          case Tab3Type.Tab3_Ear:
            let earElement = GameConfig.Ear.getElement(assetId);
            this.mIconImage.imageInfo.setByAssetIcon(earElement.AssetId, mw.AssetIconSize.Icon_128px);
            Utils.setWidgetVisibility(this.mCoinIconImage, mw.SlateVisibility.SelfHitTestInvisible);
            this.mPriceTextBlock.text = GameConfig.Language.Text_MallItem_Free.Value;
            break;

          case Tab3Type.Tab3_Face:
            let facingElement = GameConfig.Facing.getElement(assetId);
            this.mIconImage.imageInfo.setByAssetIcon(facingElement.AssetId, mw.AssetIconSize.Icon_128px);
            Utils.setWidgetVisibility(this.mCoinIconImage, mw.SlateVisibility.SelfHitTestInvisible);
            this.mPriceTextBlock.text = GameConfig.Language.Text_MallItem_Free.Value;
            break;

          case Tab3Type.Tab3_Hip:
            let hipElement = GameConfig.Hip.getElement(assetId);
            this.mIconImage.imageInfo.setByAssetIcon(hipElement.AssetId, mw.AssetIconSize.Icon_128px);
            Utils.setWidgetVisibility(this.mCoinIconImage, mw.SlateVisibility.SelfHitTestInvisible);
            this.mPriceTextBlock.text = GameConfig.Language.Text_MallItem_Free.Value;
            break;

          case Tab3Type.Tab3_Shoulder:
            let shoulderElement = GameConfig.Shoulder.getElement(assetId);
            this.mIconImage.imageInfo.setByAssetIcon(shoulderElement.AssetId, mw.AssetIconSize.Icon_128px);
            Utils.setWidgetVisibility(this.mCoinIconImage, mw.SlateVisibility.SelfHitTestInvisible);
            this.mPriceTextBlock.text = GameConfig.Language.Text_MallItem_Free.Value;
            break;

          case Tab3Type.Tab3_Effects:
            let effectsElement = GameConfig.Effects.getElement(assetId);
            this.mIconImage.imageInfo.setByAssetIcon(effectsElement.AssetId, mw.AssetIconSize.Icon_128px);
            Utils.setWidgetVisibility(this.mCoinIconImage, mw.SlateVisibility.SelfHitTestInvisible);
            this.mPriceTextBlock.text = GameConfig.Language.Text_MallItem_Free.Value;
            break;

          case Tab3Type.Tab3_Trailing:
            let trailingElement = GameConfig.Trailings.getElement(assetId);
            this.mIconImage.imageInfo.setByAssetIcon(trailingElement.AssetId, mw.AssetIconSize.Icon_128px);
            Utils.setWidgetVisibility(this.mCoinIconImage, mw.SlateVisibility.SelfHitTestInvisible);
            this.mPriceTextBlock.text = GameConfig.Language.Text_MallItem_Free.Value;
            break;

          case Tab3Type.Tab3_LongSinglePiece_Top:
            let longSinglePieceTopElement = GameConfig.LongSinglePieceTop.getElement(assetId);
            this.mIconImage.imageInfo.setByAssetIcon(longSinglePieceTopElement.AssetId, mw.AssetIconSize.Icon_128px);
            Utils.setWidgetVisibility(this.mCoinIconImage, mw.SlateVisibility.SelfHitTestInvisible);
            this.mPriceTextBlock.text = GameConfig.Language.Text_MallItem_Free.Value;
            break;

          case Tab3Type.Tab3_ShortJacket_Top:
            let shortJacketTopElement = GameConfig.ShortJacketTop.getElement(assetId);
            this.mIconImage.imageInfo.setByAssetIcon(shortJacketTopElement.AssetId, mw.AssetIconSize.Icon_128px);
            Utils.setWidgetVisibility(this.mCoinIconImage, mw.SlateVisibility.SelfHitTestInvisible);
            this.mPriceTextBlock.text = GameConfig.Language.Text_MallItem_Free.Value;
            break;

          case Tab3Type.Tab3_ShortSinglePiece_Top:
            let shortSinglePieceTopElement = GameConfig.ShortSinglePieceTop.getElement(assetId);
            this.mIconImage.imageInfo.setByAssetIcon(shortSinglePieceTopElement.AssetId, mw.AssetIconSize.Icon_128px);
            Utils.setWidgetVisibility(this.mCoinIconImage, mw.SlateVisibility.SelfHitTestInvisible);
            this.mPriceTextBlock.text = GameConfig.Language.Text_MallItem_Free.Value;
            break;

          case Tab3Type.Tab3_Suit_Top:
            let suitTopElement = GameConfig.SuitTop.getElement(assetId);
            this.mIconImage.imageInfo.setByAssetIcon(suitTopElement.AssetId, mw.AssetIconSize.Icon_128px);
            Utils.setWidgetVisibility(this.mCoinIconImage, mw.SlateVisibility.SelfHitTestInvisible);
            this.mPriceTextBlock.text = GameConfig.Language.Text_MallItem_Free.Value;
            break;

          case Tab3Type.Tab3_ALongCoat_Top:
            let aLongCoatTopElement = GameConfig.ALongCoatTop.getElement(assetId);
            this.mIconImage.imageInfo.setByAssetIcon(aLongCoatTopElement.AssetId, mw.AssetIconSize.Icon_128px);
            Utils.setWidgetVisibility(this.mCoinIconImage, mw.SlateVisibility.SelfHitTestInvisible);
            this.mPriceTextBlock.text = GameConfig.Language.Text_MallItem_Free.Value;
            break;

          case Tab3Type.Tab3_ShortSkirt_Bottom:
            let shortSkirtBottomElement = GameConfig.ShortSkirtBottom.getElement(assetId);
            this.mIconImage.imageInfo.setByAssetIcon(shortSkirtBottomElement.AssetId, mw.AssetIconSize.Icon_128px);
            Utils.setWidgetVisibility(this.mCoinIconImage, mw.SlateVisibility.SelfHitTestInvisible);
            this.mPriceTextBlock.text = GameConfig.Language.Text_MallItem_Free.Value;
            break;

          case Tab3Type.Tab3_LongPants_Bottom:
            let longPantsBottomElement = GameConfig.LongPantsBottom.getElement(assetId);
            this.mIconImage.imageInfo.setByAssetIcon(longPantsBottomElement.AssetId, mw.AssetIconSize.Icon_128px);
            Utils.setWidgetVisibility(this.mCoinIconImage, mw.SlateVisibility.SelfHitTestInvisible);
            this.mPriceTextBlock.text = GameConfig.Language.Text_MallItem_Free.Value;
            break;

          case Tab3Type.Tab3_Shorts_Bottom:
            let shortsBottomElement = GameConfig.ShortsBottom.getElement(assetId);
            this.mIconImage.imageInfo.setByAssetIcon(shortsBottomElement.AssetId, mw.AssetIconSize.Icon_128px);
            Utils.setWidgetVisibility(this.mCoinIconImage, mw.SlateVisibility.SelfHitTestInvisible);
            this.mPriceTextBlock.text = GameConfig.Language.Text_MallItem_Free.Value;
            break;

          case Tab3Type.Tab3_LongSkirt_Bottom:
            let longSkirtBottomElement = GameConfig.LongSkirtBottom.getElement(assetId);
            this.mIconImage.imageInfo.setByAssetIcon(longSkirtBottomElement.AssetId, mw.AssetIconSize.Icon_128px);
            Utils.setWidgetVisibility(this.mCoinIconImage, mw.SlateVisibility.SelfHitTestInvisible);
            this.mPriceTextBlock.text = GameConfig.Language.Text_MallItem_Free.Value;
            break;

          case Tab3Type.Tab3_Tights_Bottom:
            let tightsBottomElement = GameConfig.TightsBottom.getElement(assetId);
            this.mIconImage.imageInfo.setByAssetIcon(tightsBottomElement.AssetId, mw.AssetIconSize.Icon_128px);
            Utils.setWidgetVisibility(this.mCoinIconImage, mw.SlateVisibility.SelfHitTestInvisible);
            this.mPriceTextBlock.text = GameConfig.Language.Text_MallItem_Free.Value;
            break;

          case Tab3Type.Tab3_Gloves_Gloves:
            let glovesGlovesElement = GameConfig.GlovesGloves.getElement(assetId);
            this.mIconImage.imageInfo.setByAssetIcon(glovesGlovesElement.AssetId, mw.AssetIconSize.Icon_128px);
            Utils.setWidgetVisibility(this.mCoinIconImage, mw.SlateVisibility.SelfHitTestInvisible);
            this.mPriceTextBlock.text = GameConfig.Language.Text_MallItem_Free.Value;
            break;

          case Tab3Type.Tab3_Accessories_Gloves:
            let accessoriesGlovesElement = GameConfig.AccessoriesGloves.getElement(assetId);
            this.mIconImage.imageInfo.setByAssetIcon(accessoriesGlovesElement.AssetId, mw.AssetIconSize.Icon_128px);
            Utils.setWidgetVisibility(this.mCoinIconImage, mw.SlateVisibility.SelfHitTestInvisible);
            this.mPriceTextBlock.text = GameConfig.Language.Text_MallItem_Free.Value;
            break;

          case Tab3Type.Tab3_Everyday_Shoes:
            let everydayShoesElement = GameConfig.EverydayShoes.getElement(assetId);
            this.mIconImage.imageInfo.setByAssetIcon(everydayShoesElement.AssetId, mw.AssetIconSize.Icon_128px);
            Utils.setWidgetVisibility(this.mCoinIconImage, mw.SlateVisibility.SelfHitTestInvisible);
            this.mPriceTextBlock.text = GameConfig.Language.Text_MallItem_Free.Value;
            break;

          case Tab3Type.Tab3_Boots_Shoes:
            let bootsShoesElement = GameConfig.BootsShoes.getElement(assetId);
            this.mIconImage.imageInfo.setByAssetIcon(bootsShoesElement.AssetId, mw.AssetIconSize.Icon_128px);
            Utils.setWidgetVisibility(this.mCoinIconImage, mw.SlateVisibility.SelfHitTestInvisible);
            this.mPriceTextBlock.text = GameConfig.Language.Text_MallItem_Free.Value;
            break;

          case Tab3Type.Tab3_FootCover_Shoes:
            let footCoverShoesElement = GameConfig.FootCoverShoes.getElement(assetId);
            this.mIconImage.imageInfo.setByAssetIcon(footCoverShoesElement.AssetId, mw.AssetIconSize.Icon_128px);
            Utils.setWidgetVisibility(this.mCoinIconImage, mw.SlateVisibility.SelfHitTestInvisible);
            this.mPriceTextBlock.text = GameConfig.Language.Text_MallItem_Free.Value;
            break;

          case Tab3Type.Tab3_NakedDress_Shoes:
            let nakedDressShoesElement = GameConfig.NakedDressShoes.getElement(assetId);
            this.mIconImage.imageInfo.setByAssetIcon(nakedDressShoesElement.AssetId, mw.AssetIconSize.Icon_128px);
            Utils.setWidgetVisibility(this.mCoinIconImage, mw.SlateVisibility.SelfHitTestInvisible);
            this.mPriceTextBlock.text = GameConfig.Language.Text_MallItem_Free.Value;
            break;

          case Tab3Type.Tab3_HighHeels_Shoes:
            let highHeelsShoesElement = GameConfig.HighHeelsShoes.getElement(assetId);
            this.mIconImage.imageInfo.setByAssetIcon(highHeelsShoesElement.AssetId, mw.AssetIconSize.Icon_128px);
            Utils.setWidgetVisibility(this.mCoinIconImage, mw.SlateVisibility.SelfHitTestInvisible);
            this.mPriceTextBlock.text = GameConfig.Language.Text_MallItem_Free.Value;
            break;

          case Tab3Type.Tab3_SportsShoes_Shoes:
            let sportsShoesShoesElement = GameConfig.SportsShoesShoes.getElement(assetId);
            this.mIconImage.imageInfo.setByAssetIcon(sportsShoesShoesElement.AssetId, mw.AssetIconSize.Icon_128px);
            Utils.setWidgetVisibility(this.mCoinIconImage, mw.SlateVisibility.SelfHitTestInvisible);
            this.mPriceTextBlock.text = GameConfig.Language.Text_MallItem_Free.Value;
            break;

          case Tab2Type.Tab2_Pet:
            let petElement = GameConfig.Pet.getElement(assetId);
            this.mIconImage.imageInfo.setByAssetIcon(petElement.AssetId, mw.AssetIconSize.Icon_128px);
            Utils.setWidgetVisibility(this.mCoinIconImage, mw.SlateVisibility.SelfHitTestInvisible);
            this.mPriceTextBlock.text = GameConfig.Language.Text_MallItem_Free.Value;
            break;

          default:
            this.mIconImage.imageInfo.setByAssetIcon(assetId, mw.AssetIconSize.Icon_128px);
            Utils.setWidgetVisibility(this.mCoinIconImage, mw.SlateVisibility.SelfHitTestInvisible);
            this.mPriceTextBlock.text = GameConfig.Language.Text_MallItem_Free.Value;
            break;
        }
        this.updateSelectState(false);
    }
    addSelectItemAction(tabType, tabId, assetId) {
        if (this.tabType != tabType || this.tabId != tabId) return;
        this.updateSelectState(this.assetId == assetId, false);
    }
    updateSelectState(isSelect, isDriectUpdate = true) {
        if (isDriectUpdate) {
            if (this.isSelect == isSelect) return;
            this.isSelect = isSelect;
        } else {
            if (this.isRemovableTabId) {
                if (!this.isSelect && this.isSelect == isSelect) {
                    return;
                } else if (!this.isSelect && this.isSelect != isSelect) {
                    this.isSelect = isSelect;
                } else if (this.isSelect && this.isSelect == isSelect) {
                    this.isSelect = false;
                } else if (this.isSelect && this.isSelect != isSelect) {
                    this.isSelect = isSelect;
                }
            } else {
                if (this.isSelect == isSelect) return;
            }
        }
        this.updateSelectStateUI();
    }
    updateSelectStateUI() {
        if (this.isSelect) {
            this.mSelectButton.renderOpacity = 1;
            if (this.isSupportColor) {
                Utils.setWidgetVisibility(this.mColorButton, mw.SlateVisibility.Visible);
            } else {
                Utils.setWidgetVisibility(this.mColorButton, mw.SlateVisibility.Collapsed);
            }
        } else {
            this.mSelectButton.renderOpacity = 0;
            Utils.setWidgetVisibility(this.mColorButton, mw.SlateVisibility.Collapsed);
        }
    }
}

var foreign113 = Object.freeze({
    __proto__: null,
    default: MallItem_Small
});

let MallTab1_Generate = class MallTab1_Generate extends UIScript {
    get mTab1Canvas() {
        if (!this.mTab1Canvas_Internal && this.uiWidgetBase) {
            this.mTab1Canvas_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mTab1Canvas");
        }
        return this.mTab1Canvas_Internal;
    }
    get mTab1Button() {
        if (!this.mTab1Button_Internal && this.uiWidgetBase) {
            this.mTab1Button_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mTab1Canvas/mTab1Button");
        }
        return this.mTab1Button_Internal;
    }
    get mTab1TextBlock() {
        if (!this.mTab1TextBlock_Internal && this.uiWidgetBase) {
            this.mTab1TextBlock_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mTab1Canvas/mTab1TextBlock");
        }
        return this.mTab1TextBlock_Internal;
    }
    get mSelectTab1Canvas() {
        if (!this.mSelectTab1Canvas_Internal && this.uiWidgetBase) {
            this.mSelectTab1Canvas_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mTab1Canvas/mSelectTab1Canvas");
        }
        return this.mSelectTab1Canvas_Internal;
    }
    get mSelectTab1BgImage() {
        if (!this.mSelectTab1BgImage_Internal && this.uiWidgetBase) {
            this.mSelectTab1BgImage_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mTab1Canvas/mSelectTab1Canvas/mSelectTab1BgImage");
        }
        return this.mSelectTab1BgImage_Internal;
    }
    onAwake() {
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        this.mTab1Button.onClicked.add((() => {
            Event.dispatchToLocal("PlayButtonClick", "mTab1Button");
        }));
        this.mTab1Button.touchMethod = mw.ButtonTouchMethod.PreciseTap;
        this.initLanguage(this.mTab1TextBlock);
    }
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) {}
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    hide() {
        mw.UIService.hideUI(this);
    }
};

MallTab1_Generate = __decorate([ UIBind("UI/module/MallModule/MallTab1.ui") ], MallTab1_Generate);

var MallTab1_Generate$1 = MallTab1_Generate;

var foreign185 = Object.freeze({
    __proto__: null,
    default: MallTab1_Generate$1
});

class MallTab1 extends MallTab1_Generate$1 {
    constructor() {
        super(...arguments);
        this.mallModuleC = null;
        this.tab1Id = 0;
        this.isSelect = false;
    }
    get getMallModuleC() {
        if (!this.mallModuleC) {
            this.mallModuleC = ModuleService.getModule(MallModuleC);
        }
        return this.mallModuleC;
    }
    onStart() {
        this.canUpdate = false;
        this.layer = UILayerMiddle;
        this.initUI();
        this.bindButton();
        this.bindAction();
    }
    initUI() {
        this.updateSelectStateUI();
    }
    bindButton() {
        this.mTab1Button.onClicked.add(this.addTab1Button.bind(this));
    }
    bindAction() {
        this.getMallModuleC.onSelectTab1Action.add(this.addSelectTab1Action.bind(this));
    }
    addTab1Button() {
        this.getMallModuleC.onSelectTab1Action.call(this.tab1Id);
    }
    initTab1(tab1Id) {
        this.tab1Id = tab1Id;
        this.mTab1TextBlock.text = GameConfig.Tab1.getElement(this.tab1Id).Text;
    }
    addSelectTab1Action(tab1Id) {
        this.updateSelectState(this.tab1Id == tab1Id);
    }
    updateSelectState(isSelect) {
        if (this.isSelect == isSelect) return;
        this.isSelect = isSelect;
        this.updateSelectStateUI();
    }
    updateSelectStateUI() {
        if (this.isSelect) {
            Utils.setWidgetVisibility(this.mSelectTab1BgImage, mw.SlateVisibility.SelfHitTestInvisible);
            this.mTab1TextBlock.setFontColorByHex(`000000E5`);
            this.mTab1TextBlock.glyph = mw.UIFontGlyph.Bold;
        } else {
            Utils.setWidgetVisibility(this.mSelectTab1BgImage, mw.SlateVisibility.Collapsed);
            this.mTab1TextBlock.setFontColorByHex(`00000099`);
            this.mTab1TextBlock.glyph = mw.UIFontGlyph.Normal;
        }
    }
}

var foreign115 = Object.freeze({
    __proto__: null,
    default: MallTab1
});

let MallTab2_Generate = class MallTab2_Generate extends UIScript {
    get mTab2Canvas() {
        if (!this.mTab2Canvas_Internal && this.uiWidgetBase) {
            this.mTab2Canvas_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mTab2Canvas");
        }
        return this.mTab2Canvas_Internal;
    }
    get mTab2Button() {
        if (!this.mTab2Button_Internal && this.uiWidgetBase) {
            this.mTab2Button_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mTab2Canvas/mTab2Button");
        }
        return this.mTab2Button_Internal;
    }
    get mTab2TextBlock() {
        if (!this.mTab2TextBlock_Internal && this.uiWidgetBase) {
            this.mTab2TextBlock_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mTab2Canvas/mTab2TextBlock");
        }
        return this.mTab2TextBlock_Internal;
    }
    onAwake() {
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        this.mTab2Button.onClicked.add((() => {
            Event.dispatchToLocal("PlayButtonClick", "mTab2Button");
        }));
        this.mTab2Button.touchMethod = mw.ButtonTouchMethod.PreciseTap;
        this.initLanguage(this.mTab2TextBlock);
    }
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) {}
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    hide() {
        mw.UIService.hideUI(this);
    }
};

MallTab2_Generate = __decorate([ UIBind("UI/module/MallModule/MallTab2.ui") ], MallTab2_Generate);

var MallTab2_Generate$1 = MallTab2_Generate;

var foreign186 = Object.freeze({
    __proto__: null,
    default: MallTab2_Generate$1
});

class MallTab2 extends MallTab2_Generate$1 {
    constructor() {
        super(...arguments);
        this.mallModuleC = null;
        this.tab2Id = 0;
        this.isSelect = false;
    }
    get getMallModuleC() {
        if (!this.mallModuleC) {
            this.mallModuleC = ModuleService.getModule(MallModuleC);
        }
        return this.mallModuleC;
    }
    onStart() {
        this.canUpdate = false;
        this.layer = UILayerMiddle;
        this.initUI();
        this.bindButton();
        this.bindAction();
    }
    initUI() {
        this.updateSelectStateUI();
    }
    bindButton() {
        this.mTab2Button.onClicked.add(this.addTab2Button.bind(this));
    }
    bindAction() {
        this.getMallModuleC.onSelectTab2Action.add(this.addSelectTab2Action.bind(this));
    }
    addTab2Button() {
        this.getMallModuleC.onSelectTab2Action.call(this.tab2Id);
    }
    initTab2(tab2Id) {
        this.tab2Id = tab2Id;
        this.mTab2TextBlock.text = GameConfig.Tab2.getElement(this.tab2Id).Text;
    }
    addSelectTab2Action(tab2Id) {
        this.updateSelectState(this.tab2Id == tab2Id);
    }
    updateSelectState(isSelect) {
        if (this.isSelect == isSelect) return;
        this.isSelect = isSelect;
        this.updateSelectStateUI();
    }
    updateSelectStateUI() {
        if (this.isSelect) {
            this.mTab2TextBlock.setFontColorByHex(`000000E5`);
            this.mTab2TextBlock.glyph = mw.UIFontGlyph.Bold;
        } else {
            this.mTab2TextBlock.setFontColorByHex(`00000099`);
            this.mTab2TextBlock.glyph = mw.UIFontGlyph.Normal;
        }
    }
}

var foreign116 = Object.freeze({
    __proto__: null,
    default: MallTab2
});

let MallTab3_Generate = class MallTab3_Generate extends UIScript {
    get mTab3Canvas() {
        if (!this.mTab3Canvas_Internal && this.uiWidgetBase) {
            this.mTab3Canvas_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mTab3Canvas");
        }
        return this.mTab3Canvas_Internal;
    }
    get mTab3Button() {
        if (!this.mTab3Button_Internal && this.uiWidgetBase) {
            this.mTab3Button_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mTab3Canvas/mTab3Button");
        }
        return this.mTab3Button_Internal;
    }
    get mTab3TextBlock() {
        if (!this.mTab3TextBlock_Internal && this.uiWidgetBase) {
            this.mTab3TextBlock_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mTab3Canvas/mTab3TextBlock");
        }
        return this.mTab3TextBlock_Internal;
    }
    onAwake() {
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        this.mTab3Button.onClicked.add((() => {
            Event.dispatchToLocal("PlayButtonClick", "mTab3Button");
        }));
        this.mTab3Button.touchMethod = mw.ButtonTouchMethod.PreciseTap;
        this.initLanguage(this.mTab3TextBlock);
    }
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) {}
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    hide() {
        mw.UIService.hideUI(this);
    }
};

MallTab3_Generate = __decorate([ UIBind("UI/module/MallModule/MallTab3.ui") ], MallTab3_Generate);

var MallTab3_Generate$1 = MallTab3_Generate;

var foreign187 = Object.freeze({
    __proto__: null,
    default: MallTab3_Generate$1
});

class MallTab3 extends MallTab3_Generate$1 {
    constructor() {
        super(...arguments);
        this.mallModuleC = null;
        this.tab3Id = 0;
        this.isSelect = false;
    }
    get getMallModuleC() {
        if (!this.mallModuleC) {
            this.mallModuleC = ModuleService.getModule(MallModuleC);
        }
        return this.mallModuleC;
    }
    onStart() {
        this.canUpdate = false;
        this.layer = UILayerMiddle;
        this.initUI();
        this.bindButton();
        this.bindAction();
    }
    initUI() {
        this.updateSelectStateUI();
    }
    bindButton() {
        this.mTab3Button.onClicked.add(this.addTab3Button.bind(this));
    }
    bindAction() {
        this.getMallModuleC.onSelectTab3Action.add(this.addSelectTab3Action.bind(this));
    }
    addTab3Button() {
        this.getMallModuleC.onSelectTab3Action.call(this.tab3Id);
    }
    initTab3(tab3Id) {
        this.tab3Id = tab3Id;
        this.mTab3TextBlock.text = GameConfig.Tab3.getElement(this.tab3Id).Text;
    }
    addSelectTab3Action(tab3Id) {
        this.updateSelectState(this.tab3Id == tab3Id);
    }
    updateSelectState(isSelect) {
        if (this.isSelect == isSelect) return;
        this.isSelect = isSelect;
        this.updateSelectStateUI();
    }
    updateSelectStateUI() {
        if (this.isSelect) {
            this.mTab3TextBlock.setFontColorByHex(`000000E5`);
            this.mTab3TextBlock.glyph = mw.UIFontGlyph.Bold;
        } else {
            this.mTab3TextBlock.setFontColorByHex(`00000099`);
            this.mTab3TextBlock.glyph = mw.UIFontGlyph.Normal;
        }
    }
}

var foreign117 = Object.freeze({
    __proto__: null,
    default: MallTab3
});

class MallPanel extends MallPanel_Generate$1 {
    constructor() {
        super(...arguments);
        this.mallModuleC = null;
        this.currentSomatotype = -1;
        this.tab1Elements = [];
        this.tab1Ids = [];
        this.tab1Id = 0;
        this.tab2Ids = [];
        this.tab2Id = 0;
        this.tab3Ids = [];
        this.tab3Id = 0;
        this.currentTabType = TabType.None;
        this.tabIdDataMap = new Map;
        this.mallItem_Color = [];
        this.mallItem_Small = [];
        this.mallItem_Big = [];
        this.mallItemAssetIds = [];
        this.mallItemMap = new Map;
        this.mallItemHasBig = [ Tab2Type.Tab2_BodyType, Tab2Type.Tab2_Outfit, Tab3Type.Tab3_DailyStyling_Suit1, Tab3Type.Tab3_DailyStyling_Suit2, Tab3Type.Tab3_MuppetStyling_Suit, Tab3Type.Tab3_HeroStyling_Suit, Tab3Type.Tab3_FantasyModeling_Suit, Tab3Type.Tab3_HolidayStyling_Suit, Tab3Type.Tab3_ScienceFictionStyling_Suit, Tab3Type.Tab3_AncientMolding_Suit ];
        this.mallItemHasColor = [ Tab2Type.Tab2_SkinTone ];
        this.currentConfigId = 0;
        this.mallTab1s = [];
        this.mallTab2s = [];
        this.mallTab3s = [];
        this.mallItem_Selfs = [];
        this.moveId = -1;
        this.moveVec = [];
        this.dir = 0;
        this.onMoveTouchEvent = (widget, event, x, y, inPointerEvent) => {
            if (this.movePos) {
                if (event == Enums.TouchEvent.DOWN) {
                    if (this.moveId < 0) {
                        this.moveId = inPointerEvent.pointerIndex;
                        this.moveVec[0] = x;
                        this.moveVec[1] = y;
                    }
                } else if (event == Enums.TouchEvent.MOVE) {
                    if (this.moveId >= 0) {
                        let xoffset = x - this.moveVec[0];
                        let yoffset = y - this.moveVec[1];
                        this.dir = 0;
                        if (Math.abs(xoffset) > Math.abs(yoffset)) {
                            this.dir = Math.floor(xoffset);
                        }
                        this.moveVec[0] = x;
                        this.moveVec[1] = y;
                    }
                } else if (event == Enums.TouchEvent.UP) {
                    if (this.moveId >= 0) {
                        this.moveId = -1;
                        this.dir = 0;
                    }
                }
            }
        };
    }
    get getMallModuleC() {
        if (!this.mallModuleC) {
            this.mallModuleC = ModuleService.getModule(MallModuleC);
        }
        return this.mallModuleC;
    }
    onStart() {
        this.canUpdate = false;
        this.layer = UILayerMiddle;
        this.initUI();
        this.bindButton();
        this.bindAction();
        this.initMallRot();
    }
    initUI() {
        this.mSaveTextBlock.text = GameConfig.Language.Text_FreeSave.Value;
        this.mResetTextBlock.text = GameConfig.Language.Text_ResetImage.Value;
    }
    bindButton() {
        this.mCloseButton.onClicked.add(this.addCloseButton.bind(this));
        this.mResetButton.onClicked.add(this.addResetButton.bind(this));
        this.mSaveButton.onClicked.add(this.addSaveButton.bind(this));
        this.mSexButton.onClicked.add(this.addSexButton.bind(this));
    }
    addCloseButton() {
        this.getMallModuleC.onCloseMallPanelAction.call();
    }
    addResetButton() {
        this.getMallModuleC.onResetAction.call();
    }
    addSaveButton() {
        this.getMallModuleC.onSaveAction.call();
    }
    addSexButton() {
        this.getMallModuleC.onSexAction.call();
    }
    switchSexImage(somatotype) {
        if (this.currentSomatotype == somatotype) return;
        this.currentSomatotype = somatotype;
        if (somatotype % 2 == 0) {
            this.mSexButton.normalImageGuid = `311549`;
        } else {
            this.mSexButton.normalImageGuid = `311563`;
        }
    }
    bindAction() {
        this.getMallModuleC.onSelectTab1Action.add(this.addSelectTab1Action.bind(this));
        this.getMallModuleC.onSelectTab2Action.add(this.addSelectTab2Action.bind(this));
        this.getMallModuleC.onSelectTab3Action.add(this.addSelectTab3Action.bind(this));
    }
    checkSkinToneMallItemStateAndShowMallPanel() {
        this.onOffLeftCanvas(true);
        this.checkSkinToneMallItemState();
    }
    initMallPanel(somatotype, usingAssetIdMap) {
        this.clearTabIdDataMap();
        this.switchSexImage(somatotype);
        this.refreshMallItemSelf(usingAssetIdMap);
        this.initTab1();
    }
    initTab1() {
        this.tab1Elements = GameConfig.Tab1.getAllElement();
        if (!this.tab1Elements || this.tab1Elements?.length == 0) {
            this.tab1Ids.length = 0;
            this.tab1Id = 0;
            this.hideTab123Canvas();
            this.initItem(TabType.None);
            return;
        }
        this.showTab1Canvas();
        this.tab1Ids.length = 0;
        this.tab1Elements.forEach((value => {
            this.tab1Ids.push(value.ID);
        }));
        this.updateTab1();
        this.tab1Id = this.tab1Ids[0];
        this.getMallModuleC.onSelectTab1Action.call(this.tab1Id);
        this.initTab2();
    }
    initTab2() {
        let tab1Element = GameConfig.Tab1.getElement(this.tab1Id);
        if (!tab1Element || !tab1Element?.Tab2 || tab1Element.Tab2?.length == 0) {
            this.tab2Ids.length = 0;
            this.tab2Id = 0;
            this.hideTab23Canvas();
            this.initItem(TabType.Tab1);
            return;
        }
        this.showTab2Canvas();
        this.tab2Ids.length = 0;
        this.tab2Ids = Utils.copyArray(tab1Element.Tab2);
        this.updateTab2();
        this.tab2Id = this.getTab2();
        this.getMallModuleC.onSelectTab2Action.call(this.tab2Id);
        this.initTab3();
    }
    initTab3() {
        let tab2Element = GameConfig.Tab2.getElement(this.tab2Id);
        if (!tab2Element || !tab2Element?.Tab3 || tab2Element.Tab3?.length == 0) {
            this.tab3Ids.length = 0;
            this.tab3Id = 0;
            this.hideTab3Canvas();
            this.initItem(TabType.Tab2);
            return;
        }
        this.showTab3Canvas();
        this.tab3Ids.length = 0;
        this.tab3Ids = Utils.copyArray(tab2Element.Tab3);
        this.updateTab3();
        this.tab3Id = this.getTab3();
        this.getMallModuleC.onSelectTab3Action.call(this.tab3Id);
        this.initItem(TabType.Tab3);
    }
    initItem(tabType) {
        this.currentTabType = tabType;
        this.calculateItemCanvas(tabType);
        switch (tabType) {
          case TabType.None:
            this.clearTabIdDataMap();
            break;

          case TabType.Tab1:
            this.initTab1IdDataMap();
            console.error(`tab1Id:${this.tab1Id}`);
            this.initTab1Item();
            break;

          case TabType.Tab2:
            this.initTab2IdDataMap();
            console.error(`tab2Id:${this.tab2Id}`);
            this.initTab2Item();
            break;

          case TabType.Tab3:
            this.initTab3IdDataMap();
            console.error(`tab3Id:${this.tab3Id}`);
            this.initTab3Item();
            break;
        }
    }
    calculateItemCanvas(tabType) {
        let positionY = 0;
        let sizeY = 0;
        switch (tabType) {
          case TabType.Tab1:
            positionY = this.mTab1Canvas.position.y;
            sizeY = this.mTab1Canvas.size.y;
            break;

          case TabType.Tab2:
            positionY = this.mTab2Canvas.position.y;
            sizeY = this.mTab2Canvas.size.y;
            break;

          case TabType.Tab3:
            positionY = this.mTab3Canvas.position.y;
            sizeY = this.mTab3Canvas.size.y;
            break;

          default:
            positionY = this.mTab3Canvas.position.y;
            sizeY = this.mTab3Canvas.size.y;
            break;
        }
        this.mItemScrollBox.position = new mw.Vector(0, positionY + sizeY);
        this.mItemScrollBox.size = new mw.Vector(this.mItemScrollBox.size.x, this.rootCanvas.size.y - this.mItemScrollBox.position.y);
    }
    clearTabIdDataMap() {
        this.tabIdDataMap.clear();
    }
    getTab2() {
        let tab2Id = this.tab2Ids[this.getDefaultTab2Index];
        if (this.tabIdDataMap.has(this.tab1Id)) {
            let tab2IdDataMap = this.tabIdDataMap.get(this.tab1Id).tabIdDataMap;
            if (!tab2IdDataMap || tab2IdDataMap.size == 0) return tab2Id;
            tab2IdDataMap.forEach(((value, key) => {
                if (value.isOn) tab2Id = key;
            }));
            return tab2Id;
        } else {
            return tab2Id;
        }
    }
    get getDefaultTab2Index() {
        if (this.tab1Id == Tab1Type.Tab1_Appearance) return 5;
        if (this.tab1Id == Tab1Type.Tab1_Clothing) return 0;
        return 0;
    }
    getTab3() {
        let tab3Id = this.tab3Ids[0];
        if (this.tabIdDataMap.has(this.tab1Id)) {
            let tab2IdDataMap = this.tabIdDataMap.get(this.tab1Id).tabIdDataMap;
            if (!tab2IdDataMap || tab2IdDataMap.size == 0) return tab3Id;
            if (tab2IdDataMap.has(this.tab2Id)) {
                let tab3IdDataMap = tab2IdDataMap.get(this.tab2Id).tabIdDataMap;
                if (!tab3IdDataMap || tab3IdDataMap.size == 0) return tab3Id;
                tab3IdDataMap.forEach(((value, key) => {
                    if (value.isOn) tab3Id = key;
                }));
                return tab3Id;
            } else {
                return tab3Id;
            }
        } else {
            return tab3Id;
        }
    }
    initTab1IdDataMap() {
        if (this.tabIdDataMap.has(this.tab1Id)) return;
        let tab1IdData = new TabIdData;
        tab1IdData.tabId = this.tab1Id;
        this.tabIdDataMap.set(this.tab1Id, tab1IdData);
        this.tabIdDataMap.forEach(((value, key) => {
            value.isOn = key == this.tab1Id;
        }));
    }
    initTab2IdDataMap() {
        let tab1IdData = null;
        if (this.tabIdDataMap.has(this.tab1Id)) {
            tab1IdData = this.tabIdDataMap.get(this.tab1Id);
            if (tab1IdData.tabIdDataMap.has(this.tab2Id)) ; else {
                let tab2IdData = new TabIdData;
                tab2IdData.tabId = this.tab2Id;
                tab1IdData.tabIdDataMap.set(this.tab2Id, tab2IdData);
            }
            tab1IdData.tabIdDataMap.forEach(((value, key) => {
                value.isOn = key == this.tab2Id;
            }));
        } else {
            tab1IdData = new TabIdData;
            tab1IdData.tabId = this.tab1Id;
            let tab2IdData = new TabIdData;
            tab2IdData.tabId = this.tab2Id;
            tab1IdData.tabIdDataMap.set(this.tab2Id, tab2IdData);
            tab1IdData.tabIdDataMap.forEach(((value, key) => {
                value.isOn = key == this.tab2Id;
            }));
            this.tabIdDataMap.set(this.tab1Id, tab1IdData);
            this.tabIdDataMap.forEach(((value, key) => {
                value.isOn = key == this.tab1Id;
            }));
        }
    }
    initTab3IdDataMap() {
        let tab1IdData = null;
        if (this.tabIdDataMap.has(this.tab1Id)) {
            tab1IdData = this.tabIdDataMap.get(this.tab1Id);
            let tab2IdData = new TabIdData;
            if (tab1IdData.tabIdDataMap.has(this.tab2Id)) {
                tab2IdData = tab1IdData.tabIdDataMap.get(this.tab2Id);
                if (tab2IdData.tabIdDataMap.has(this.tab3Id)) ; else {
                    let tab3IdData = new TabIdData;
                    tab3IdData.tabId = this.tab3Id;
                    tab2IdData.tabIdDataMap.set(this.tab3Id, tab3IdData);
                }
                tab2IdData.tabIdDataMap.forEach(((value, key) => {
                    value.isOn = key == this.tab3Id;
                }));
            } else {
                tab2IdData.tabId = this.tab2Id;
                tab1IdData.tabIdDataMap.set(this.tab2Id, tab2IdData);
                tab1IdData.tabIdDataMap.forEach(((value, key) => {
                    value.isOn = key == this.tab2Id;
                }));
                let tab3IdData = new TabIdData;
                tab3IdData.tabId = this.tab3Id;
                tab2IdData.tabIdDataMap.set(this.tab3Id, tab3IdData);
                tab2IdData.tabIdDataMap.forEach(((value, key) => {
                    value.isOn = key == this.tab3Id;
                }));
            }
        } else {
            tab1IdData = new TabIdData;
            tab1IdData.tabId = this.tab1Id;
            let tab2IdData = new TabIdData;
            tab2IdData.tabId = this.tab2Id;
            tab1IdData.tabIdDataMap.set(this.tab2Id, tab2IdData);
            tab1IdData.tabIdDataMap.forEach(((value, key) => {
                value.isOn = key == this.tab2Id;
            }));
            let tab3IdData = new TabIdData;
            tab3IdData.tabId = this.tab3Id;
            tab2IdData.tabIdDataMap.set(this.tab3Id, tab3IdData);
            tab2IdData.tabIdDataMap.forEach(((value, key) => {
                value.isOn = key == this.tab3Id;
            }));
            this.tabIdDataMap.set(this.tab1Id, tab1IdData);
            this.tabIdDataMap.forEach(((value, key) => {
                value.isOn = key == this.tab1Id;
            }));
        }
    }
    clearMallItemData() {
        this.mallItemMap.clear();
        this.mallItemAssetIds.length = 0;
    }
    initTab2Item() {
        this.clearMallItemData();
        switch (this.tab2Id) {
          case Tab2Type.Tab2_BodyType:
            GameConfig.BodyType.getAllElement().forEach((value => {
                if (value.SexType == 0 || value.SexType == this.currentSomatotype) this.mallItemAssetIds.push(`${value.ID}`);
            }));
            break;

          case Tab2Type.Tab2_SkinTone:
            GameConfig.SkinTone.getAllElement().forEach((value => {
                if (value.SexType == 0 || value.SexType == this.currentSomatotype) this.mallItemAssetIds.push(value.SkinTone);
            }));
            break;

          case Tab2Type.Tab2_Face:
            GameConfig.Face.getAllElement().forEach((value => {
                if (value.SexType == 0 || value.SexType == this.currentSomatotype) this.mallItemAssetIds.push(value.AssetId);
            }));
            break;

          case Tab2Type.Tab2_Eyebrows:
            GameConfig.Eyebrows.getAllElement().forEach((value => {
                if (value.SexType == 0 || value.SexType == this.currentSomatotype) this.mallItemAssetIds.push(value.AssetId);
            }));
            break;

          case Tab2Type.Tab2_Expression:
            GameConfig.FaceExpression.getAllElement().forEach((value => {
                if (value.SexType == 0 || value.SexType == this.currentSomatotype) this.mallItemAssetIds.push(`${value.ID}`);
            }));
            break;

          case Tab2Type.Tab2_Outfit:
            GameConfig.Outfit.getAllElement().forEach((value => {
                if (value.SexType == 0 || value.SexType == this.currentSomatotype) this.mallItemAssetIds.push(`${value.ID}`);
            }));
            break;

          case Tab2Type.Tab2_Top:
            GameConfig.Top.getAllElement().forEach((value => {
                if (value.SexType == 0 || value.SexType == this.currentSomatotype) this.mallItemAssetIds.push(value.AssetId);
            }));
            break;

          case Tab2Type.Tab2_Bottom:
            GameConfig.Bottom.getAllElement().forEach((value => {
                if (value.SexType == 0 || value.SexType == this.currentSomatotype) this.mallItemAssetIds.push(value.AssetId);
            }));
            break;

          case Tab2Type.Tab2_Shoes:
            GameConfig.Shoes.getAllElement().forEach((value => {
                if (value.SexType == 0 || value.SexType == this.currentSomatotype) this.mallItemAssetIds.push(value.AssetId);
            }));
            break;

          case Tab2Type.Tab2_Gloves:
            GameConfig.Gloves.getAllElement().forEach((value => {
                if (value.SexType == 0 || value.SexType == this.currentSomatotype) this.mallItemAssetIds.push(value.AssetId);
            }));
            break;

          case Tab2Type.Tab2_Pet:
            GameConfig.Pet.getAllElement().forEach((value => {
                if (value.SexType == 0 || value.SexType == this.currentSomatotype) this.mallItemAssetIds.push(`${value.ID}`);
            }));
            break;
        }
        this.currentConfigId = this.tab2Id;
        this.initMallItem();
    }
    initTab3Item() {
        this.clearMallItemData();
        switch (this.tab3Id) {
          case Tab3Type.Tab3_PupilStyle:
            GameConfig.PupilStyle.getAllElement().forEach((value => {
                if (value.SexType == 0 || value.SexType == this.currentSomatotype) this.mallItemAssetIds.push(value.AssetId);
            }));
            break;

          case Tab3Type.Tab3_Lens:
            GameConfig.Lens.getAllElement().forEach((value => {
                if (value.SexType == 0 || value.SexType == this.currentSomatotype) this.mallItemAssetIds.push(value.AssetId);
            }));
            break;

          case Tab3Type.Tab3_UpperHighlight:
            GameConfig.UpperHighlight.getAllElement().forEach((value => {
                if (value.SexType == 0 || value.SexType == this.currentSomatotype) this.mallItemAssetIds.push(value.AssetId);
            }));
            break;

          case Tab3Type.Tab3_LowerHighlight:
            GameConfig.LowerHighlight.getAllElement().forEach((value => {
                if (value.SexType == 0 || value.SexType == this.currentSomatotype) this.mallItemAssetIds.push(value.AssetId);
            }));
            break;

          case Tab3Type.Tab3_Eyelashes:
            GameConfig.Eyelashes.getAllElement().forEach((value => {
                if (value.SexType == 0 || value.SexType == this.currentSomatotype) this.mallItemAssetIds.push(value.AssetId);
            }));
            break;

          case Tab3Type.Tab3_Eyeshadow:
            GameConfig.Eyeshadow.getAllElement().forEach((value => {
                if (value.SexType == 0 || value.SexType == this.currentSomatotype) this.mallItemAssetIds.push(value.AssetId);
            }));
            break;

          case Tab3Type.Tab3_Blush:
            GameConfig.Blush.getAllElement().forEach((value => {
                if (value.SexType == 0 || value.SexType == this.currentSomatotype) this.mallItemAssetIds.push(value.AssetId);
            }));
            break;

          case Tab3Type.Tab3_LipMakeup:
            GameConfig.LipMakeup.getAllElement().forEach((value => {
                if (value.SexType == 0 || value.SexType == this.currentSomatotype) this.mallItemAssetIds.push(value.AssetId);
            }));
            break;

          case Tab3Type.Tab3_FaceTattoo:
            break;

          case Tab3Type.Tab3_FullHair:
            GameConfig.FullHair.getAllElement().forEach((value => {
                if (value.SexType == 0 || value.SexType == this.currentSomatotype) this.mallItemAssetIds.push(value.AssetId);
            }));
            break;

          case Tab3Type.Tab3_FrontHair:
            GameConfig.FrontHair.getAllElement().forEach((value => {
                if (value.SexType == 0 || value.SexType == this.currentSomatotype) this.mallItemAssetIds.push(value.AssetId);
            }));
            break;

          case Tab3Type.Tab3_BackHair:
            GameConfig.BackHair.getAllElement().forEach((value => {
                if (value.SexType == 0 || value.SexType == this.currentSomatotype) this.mallItemAssetIds.push(value.AssetId);
            }));
            break;

          case Tab3Type.Tab3_LeftHand:
            GameConfig.LeftHand.getAllElement().forEach((value => {
                if (value.SexType == 0 || value.SexType == this.currentSomatotype) this.mallItemAssetIds.push(`${value.ID}`);
            }));
            break;

          case Tab3Type.Tab3_RightHand:
            GameConfig.RightHand.getAllElement().forEach((value => {
                if (value.SexType == 0 || value.SexType == this.currentSomatotype) this.mallItemAssetIds.push(`${value.ID}`);
            }));
            break;

          case Tab3Type.Tab3_Back:
            GameConfig.Back.getAllElement().forEach((value => {
                if (value.SexType == 0 || value.SexType == this.currentSomatotype) this.mallItemAssetIds.push(`${value.ID}`);
            }));
            break;

          case Tab3Type.Tab3_Ear:
            GameConfig.Ear.getAllElement().forEach((value => {
                if (value.SexType == 0 || value.SexType == this.currentSomatotype) this.mallItemAssetIds.push(`${value.ID}`);
            }));
            break;

          case Tab3Type.Tab3_Face:
            GameConfig.Facing.getAllElement().forEach((value => {
                if (value.SexType == 0 || value.SexType == this.currentSomatotype) this.mallItemAssetIds.push(`${value.ID}`);
            }));
            break;

          case Tab3Type.Tab3_Hip:
            GameConfig.Hip.getAllElement().forEach((value => {
                if (value.SexType == 0 || value.SexType == this.currentSomatotype) this.mallItemAssetIds.push(`${value.ID}`);
            }));
            break;

          case Tab3Type.Tab3_Shoulder:
            GameConfig.Shoulder.getAllElement().forEach((value => {
                if (value.SexType == 0 || value.SexType == this.currentSomatotype) this.mallItemAssetIds.push(`${value.ID}`);
            }));
            break;

          case Tab3Type.Tab3_Effects:
            GameConfig.Effects.getAllElement().forEach((value => {
                if (value.SexType == 0 || value.SexType == this.currentSomatotype) this.mallItemAssetIds.push(`${value.ID}`);
            }));
            break;

          case Tab3Type.Tab3_Trailing:
            GameConfig.Trailings.getAllElement().forEach((value => {
                if (value.SexType == 0 || value.SexType == this.currentSomatotype) this.mallItemAssetIds.push(`${value.ID}`);
            }));
            break;

          case Tab3Type.Tab3_DailyStyling_Suit1:
            GameConfig.DailyStylingOutfit1.getAllElement().forEach((value => {
                if (value.SexType == 0 || value.SexType == this.currentSomatotype) this.mallItemAssetIds.push(`${value.ID}`);
            }));
            break;

          case Tab3Type.Tab3_DailyStyling_Suit2:
            GameConfig.DailyStylingOutfit2.getAllElement().forEach((value => {
                if (value.SexType == 0 || value.SexType == this.currentSomatotype) this.mallItemAssetIds.push(`${value.ID}`);
            }));
            break;

          case Tab3Type.Tab3_MuppetStyling_Suit:
            GameConfig.MuppetStylingOutfit.getAllElement().forEach((value => {
                if (value.SexType == 0 || value.SexType == this.currentSomatotype) this.mallItemAssetIds.push(`${value.ID}`);
            }));
            break;

          case Tab3Type.Tab3_HeroStyling_Suit:
            GameConfig.HeroStylingOutfit.getAllElement().forEach((value => {
                if (value.SexType == 0 || value.SexType == this.currentSomatotype) this.mallItemAssetIds.push(`${value.ID}`);
            }));
            break;

          case Tab3Type.Tab3_FantasyModeling_Suit:
            GameConfig.FantasyModelingOutfit.getAllElement().forEach((value => {
                if (value.SexType == 0 || value.SexType == this.currentSomatotype) this.mallItemAssetIds.push(`${value.ID}`);
            }));
            break;

          case Tab3Type.Tab3_HolidayStyling_Suit:
            GameConfig.HolidayStylingOutfit.getAllElement().forEach((value => {
                if (value.SexType == 0 || value.SexType == this.currentSomatotype) this.mallItemAssetIds.push(`${value.ID}`);
            }));
            break;

          case Tab3Type.Tab3_ScienceFictionStyling_Suit:
            GameConfig.ScienceFictionStylingOutfit.getAllElement().forEach((value => {
                if (value.SexType == 0 || value.SexType == this.currentSomatotype) this.mallItemAssetIds.push(`${value.ID}`);
            }));
            break;

          case Tab3Type.Tab3_AncientMolding_Suit:
            GameConfig.AncientMoldingOutfit.getAllElement().forEach((value => {
                if (value.SexType == 0 || value.SexType == this.currentSomatotype) this.mallItemAssetIds.push(`${value.ID}`);
            }));
            break;

          case Tab3Type.Tab3_LongSinglePiece_Top:
            GameConfig.LongSinglePieceTop.getAllElement().forEach((value => {
                if (value.SexType == 0 || value.SexType == this.currentSomatotype) this.mallItemAssetIds.push(`${value.ID}`);
            }));
            break;

          case Tab3Type.Tab3_ShortJacket_Top:
            GameConfig.ShortJacketTop.getAllElement().forEach((value => {
                if (value.SexType == 0 || value.SexType == this.currentSomatotype) this.mallItemAssetIds.push(`${value.ID}`);
            }));
            break;

          case Tab3Type.Tab3_ShortSinglePiece_Top:
            GameConfig.ShortSinglePieceTop.getAllElement().forEach((value => {
                if (value.SexType == 0 || value.SexType == this.currentSomatotype) this.mallItemAssetIds.push(`${value.ID}`);
            }));
            break;

          case Tab3Type.Tab3_Suit_Top:
            GameConfig.SuitTop.getAllElement().forEach((value => {
                if (value.SexType == 0 || value.SexType == this.currentSomatotype) this.mallItemAssetIds.push(`${value.ID}`);
            }));
            break;

          case Tab3Type.Tab3_ALongCoat_Top:
            GameConfig.ALongCoatTop.getAllElement().forEach((value => {
                if (value.SexType == 0 || value.SexType == this.currentSomatotype) this.mallItemAssetIds.push(`${value.ID}`);
            }));
            break;

          case Tab3Type.Tab3_ShortSkirt_Bottom:
            GameConfig.ShortSkirtBottom.getAllElement().forEach((value => {
                if (value.SexType == 0 || value.SexType == this.currentSomatotype) this.mallItemAssetIds.push(`${value.ID}`);
            }));
            break;

          case Tab3Type.Tab3_LongPants_Bottom:
            GameConfig.LongPantsBottom.getAllElement().forEach((value => {
                if (value.SexType == 0 || value.SexType == this.currentSomatotype) this.mallItemAssetIds.push(`${value.ID}`);
            }));
            break;

          case Tab3Type.Tab3_Shorts_Bottom:
            GameConfig.ShortsBottom.getAllElement().forEach((value => {
                if (value.SexType == 0 || value.SexType == this.currentSomatotype) this.mallItemAssetIds.push(`${value.ID}`);
            }));
            break;

          case Tab3Type.Tab3_LongSkirt_Bottom:
            GameConfig.LongSkirtBottom.getAllElement().forEach((value => {
                if (value.SexType == 0 || value.SexType == this.currentSomatotype) this.mallItemAssetIds.push(`${value.ID}`);
            }));
            break;

          case Tab3Type.Tab3_Tights_Bottom:
            GameConfig.TightsBottom.getAllElement().forEach((value => {
                if (value.SexType == 0 || value.SexType == this.currentSomatotype) this.mallItemAssetIds.push(`${value.ID}`);
            }));
            break;

          case Tab3Type.Tab3_Gloves_Gloves:
            GameConfig.GlovesGloves.getAllElement().forEach((value => {
                if (value.SexType == 0 || value.SexType == this.currentSomatotype) this.mallItemAssetIds.push(`${value.ID}`);
            }));
            break;

          case Tab3Type.Tab3_Accessories_Gloves:
            GameConfig.AccessoriesGloves.getAllElement().forEach((value => {
                if (value.SexType == 0 || value.SexType == this.currentSomatotype) this.mallItemAssetIds.push(`${value.ID}`);
            }));
            break;

          case Tab3Type.Tab3_Everyday_Shoes:
            GameConfig.EverydayShoes.getAllElement().forEach((value => {
                if (value.SexType == 0 || value.SexType == this.currentSomatotype) this.mallItemAssetIds.push(`${value.ID}`);
            }));
            break;

          case Tab3Type.Tab3_Boots_Shoes:
            GameConfig.BootsShoes.getAllElement().forEach((value => {
                if (value.SexType == 0 || value.SexType == this.currentSomatotype) this.mallItemAssetIds.push(`${value.ID}`);
            }));
            break;

          case Tab3Type.Tab3_FootCover_Shoes:
            GameConfig.FootCoverShoes.getAllElement().forEach((value => {
                if (value.SexType == 0 || value.SexType == this.currentSomatotype) this.mallItemAssetIds.push(`${value.ID}`);
            }));
            break;

          case Tab3Type.Tab3_NakedDress_Shoes:
            GameConfig.NakedDressShoes.getAllElement().forEach((value => {
                if (value.SexType == 0 || value.SexType == this.currentSomatotype) this.mallItemAssetIds.push(`${value.ID}`);
            }));
            break;

          case Tab3Type.Tab3_HighHeels_Shoes:
            GameConfig.HighHeelsShoes.getAllElement().forEach((value => {
                if (value.SexType == 0 || value.SexType == this.currentSomatotype) this.mallItemAssetIds.push(`${value.ID}`);
            }));
            break;

          case Tab3Type.Tab3_SportsShoes_Shoes:
            GameConfig.SportsShoesShoes.getAllElement().forEach((value => {
                if (value.SexType == 0 || value.SexType == this.currentSomatotype) this.mallItemAssetIds.push(`${value.ID}`);
            }));
            break;
        }
        this.currentConfigId = this.tab3Id;
        this.initMallItem();
    }
    initTab1Item() {
        this.clearMallItemData();
        this.currentConfigId = this.tab1Id;
        this.initMallItem();
    }
    thisFeatureIsNotEnabled() {
        if (!this.mallItemAssetIds || this.mallItemAssetIds.length == 0) {
            Notice.showDownNotice(GameConfig.Language.Text_ThisFeatureIsNotEnabled.Value);
        }
    }
    hideMallItemSmallAndBig() {
        this.mallItem_Small.forEach((value => {
            Utils.setWidgetVisibility(value.uiObject, mw.SlateVisibility.Collapsed);
        }));
        this.mallItem_Big.forEach((value => {
            Utils.setWidgetVisibility(value.uiObject, mw.SlateVisibility.Collapsed);
        }));
    }
    hideMallItemSamllAndColor() {
        this.mallItem_Small.forEach((value => {
            Utils.setWidgetVisibility(value.uiObject, mw.SlateVisibility.Collapsed);
        }));
        this.mallItem_Color.forEach((value => {
            Utils.setWidgetVisibility(value.uiObject, mw.SlateVisibility.Collapsed);
        }));
    }
    hideMallItemBigAndColor() {
        this.mallItem_Big.forEach((value => {
            Utils.setWidgetVisibility(value.uiObject, mw.SlateVisibility.Collapsed);
        }));
        this.mallItem_Color.forEach((value => {
            Utils.setWidgetVisibility(value.uiObject, mw.SlateVisibility.Collapsed);
        }));
    }
    initMallItem() {
        this.thisFeatureIsNotEnabled();
        if (this.mallItemHasBig.includes(this.currentConfigId)) {
            this.hideMallItemSamllAndColor();
            this.initMallItemBig();
        } else if (this.mallItemHasColor.includes(this.currentConfigId)) {
            this.hideMallItemSmallAndBig();
            this.initMallItemColor();
        } else {
            this.hideMallItemBigAndColor();
            this.initMallItemSmall();
        }
        this.checkMallItemState();
        this.getMallModuleC.onSwitchCameraAction.call(Mall.isHeadTabId(this.currentConfigId) ? 1 : 2);
    }
    initMallItemBig() {
        if (this.mallItemAssetIds.length > this.mallItem_Big.length) {
            for (let i = 0; i < this.mallItem_Big.length; ++i) {
                this.mallItem_Big[i].initItem(this.currentTabType, this.currentConfigId, this.mallItemAssetIds[i]);
                Utils.setWidgetVisibility(this.mallItem_Big[i].uiObject, mw.SlateVisibility.SelfHitTestInvisible);
                this.mallItemMap.set(this.mallItemAssetIds[i], this.mallItem_Big[i]);
            }
            for (let i = this.mallItem_Big.length; i < this.mallItemAssetIds.length; ++i) {
                let mallItem_Big = UIService.create(MallItem_Big);
                mallItem_Big.initItem(this.currentTabType, this.currentConfigId, this.mallItemAssetIds[i]);
                this.mItemContentCanvas.addChild(mallItem_Big.uiObject);
                this.mallItem_Big.push(mallItem_Big);
                this.mallItemMap.set(this.mallItemAssetIds[i], mallItem_Big);
            }
        } else {
            for (let i = 0; i < this.mallItemAssetIds.length; ++i) {
                this.mallItem_Big[i].initItem(this.currentTabType, this.currentConfigId, this.mallItemAssetIds[i]);
                Utils.setWidgetVisibility(this.mallItem_Big[i].uiObject, mw.SlateVisibility.SelfHitTestInvisible);
                this.mallItemMap.set(this.mallItemAssetIds[i], this.mallItem_Big[i]);
            }
            for (let i = this.mallItemAssetIds.length; i < this.mallItem_Big.length; ++i) {
                Utils.setWidgetVisibility(this.mallItem_Big[i].uiObject, mw.SlateVisibility.Collapsed);
            }
        }
    }
    initMallItemSmall() {
        if (this.mallItemAssetIds.length > this.mallItem_Small.length) {
            for (let i = 0; i < this.mallItem_Small.length; ++i) {
                this.mallItem_Small[i].initItem(this.currentTabType, this.currentConfigId, this.mallItemAssetIds[i]);
                Utils.setWidgetVisibility(this.mallItem_Small[i].uiObject, mw.SlateVisibility.SelfHitTestInvisible);
                this.mallItemMap.set(this.mallItemAssetIds[i], this.mallItem_Small[i]);
            }
            for (let i = this.mallItem_Small.length; i < this.mallItemAssetIds.length; ++i) {
                let mallItem_Small = UIService.create(MallItem_Small);
                mallItem_Small.initItem(this.currentTabType, this.currentConfigId, this.mallItemAssetIds[i]);
                this.mItemContentCanvas.addChild(mallItem_Small.uiObject);
                this.mallItem_Small.push(mallItem_Small);
                this.mallItemMap.set(this.mallItemAssetIds[i], mallItem_Small);
            }
        } else {
            for (let i = 0; i < this.mallItemAssetIds.length; ++i) {
                this.mallItem_Small[i].initItem(this.currentTabType, this.currentConfigId, this.mallItemAssetIds[i]);
                Utils.setWidgetVisibility(this.mallItem_Small[i].uiObject, mw.SlateVisibility.SelfHitTestInvisible);
                this.mallItemMap.set(this.mallItemAssetIds[i], this.mallItem_Small[i]);
            }
            for (let i = this.mallItemAssetIds.length; i < this.mallItem_Small.length; ++i) {
                Utils.setWidgetVisibility(this.mallItem_Small[i].uiObject, mw.SlateVisibility.Collapsed);
            }
        }
    }
    initMallItemColor() {
        if (this.mallItemAssetIds.length > this.mallItem_Color.length) {
            for (let i = 0; i < this.mallItem_Color.length; ++i) {
                this.mallItem_Color[i].initItem(this.currentTabType, this.currentConfigId, this.mallItemAssetIds[i]);
                Utils.setWidgetVisibility(this.mallItem_Color[i].uiObject, mw.SlateVisibility.SelfHitTestInvisible);
                this.mallItemMap.set(this.mallItemAssetIds[i], this.mallItem_Color[i]);
            }
            for (let i = this.mallItem_Color.length; i < this.mallItemAssetIds.length; ++i) {
                let mallItem_Color = UIService.create(MallItem_Color);
                mallItem_Color.initItem(this.currentTabType, this.currentConfigId, this.mallItemAssetIds[i]);
                this.mItemContentCanvas.addChild(mallItem_Color.uiObject);
                this.mallItem_Color.push(mallItem_Color);
                this.mallItemMap.set(this.mallItemAssetIds[i], mallItem_Color);
            }
        } else {
            for (let i = 0; i < this.mallItemAssetIds.length; ++i) {
                this.mallItem_Color[i].initItem(this.currentTabType, this.currentConfigId, this.mallItemAssetIds[i]);
                Utils.setWidgetVisibility(this.mallItem_Color[i].uiObject, mw.SlateVisibility.SelfHitTestInvisible);
                this.mallItemMap.set(this.mallItemAssetIds[i], this.mallItem_Color[i]);
            }
            for (let i = this.mallItemAssetIds.length; i < this.mallItem_Color.length; ++i) {
                Utils.setWidgetVisibility(this.mallItem_Color[i].uiObject, mw.SlateVisibility.Collapsed);
            }
        }
    }
    checkMallItemState() {
        ExecutorManager.instance.pushAsyncExecutor((async () => {
            let assetId = null;
            switch (this.currentConfigId) {
              case Tab2Type.Tab2_SkinTone:
                assetId = await this.getMallModuleC.getCharacterAssetId(this.currentConfigId);
                let colorKey = `ColorPick`;
                for (let key of this.mallItemMap.keys()) {
                    if (Utils.isEqulaLinearColor(assetId, Utils.colorHexToLinearColorToString(key))) {
                        colorKey = key;
                        break;
                    }
                }
                if (!this.mallItemMap.has(colorKey)) return;
                this.mallItemMap.get(colorKey).updateSelectState(true);
                break;

              default:
                assetId = await this.getMallModuleC.getCharacterAssetId(this.currentConfigId);
                if (!assetId || assetId.length == 0 || !this.mallItemMap.has(assetId)) return;
                this.mallItemMap.get(assetId).updateSelectState(true);
                break;
            }
        }));
    }
    checkSkinToneMallItemState() {
        if (this.currentConfigId != Tab2Type.Tab2_SkinTone) return;
        ExecutorManager.instance.pushAsyncExecutor((async () => {
            let assetId = await this.getMallModuleC.getCharacterAssetId(this.currentConfigId);
            let isHasSelect = false;
            this.mallItemMap.forEach(((value, key) => {
                if (Utils.isEqulaLinearColor(Utils.colorHexToLinearColorToString(key), assetId)) {
                    isHasSelect = true;
                    value.updateSelectState(true);
                } else {
                    value.updateSelectState(false);
                }
            }));
            if (!isHasSelect) this.mallItemMap.get(`ColorPick`).updateSelectState(true);
        }));
    }
    hideTab123Canvas() {
        Utils.setWidgetVisibility(this.mTab1Canvas, mw.SlateVisibility.Collapsed);
        Utils.setWidgetVisibility(this.mTab2Canvas, mw.SlateVisibility.Collapsed);
        Utils.setWidgetVisibility(this.mTab3Canvas, mw.SlateVisibility.Collapsed);
    }
    hideTab23Canvas() {
        Utils.setWidgetVisibility(this.mTab2Canvas, mw.SlateVisibility.Collapsed);
        Utils.setWidgetVisibility(this.mTab3Canvas, mw.SlateVisibility.Collapsed);
    }
    hideTab3Canvas() {
        Utils.setWidgetVisibility(this.mTab3Canvas, mw.SlateVisibility.Collapsed);
    }
    showTab1Canvas() {
        Utils.setWidgetVisibility(this.mTab1Canvas, mw.SlateVisibility.SelfHitTestInvisible);
    }
    showTab2Canvas() {
        Utils.setWidgetVisibility(this.mTab2Canvas, mw.SlateVisibility.SelfHitTestInvisible);
    }
    showTab3Canvas() {
        Utils.setWidgetVisibility(this.mTab3Canvas, mw.SlateVisibility.SelfHitTestInvisible);
    }
    addSelectTab1Action(tab1Id) {
        if (this.tab1Id == tab1Id) return;
        this.tab1Id = tab1Id;
        this.initTab2();
    }
    addSelectTab2Action(tab2Id) {
        if (this.tab2Id == tab2Id) return;
        this.tab2Id = tab2Id;
        this.initTab3();
    }
    addSelectTab3Action(tab3Id) {
        if (this.tab3Id == tab3Id) return;
        this.tab3Id = tab3Id;
        this.initItem(TabType.Tab3);
    }
    updateTab1() {
        if (this.tab1Ids.length >= this.mallTab1s.length) {
            for (let i = 0; i < this.mallTab1s.length; ++i) {
                this.mallTab1s[i].initTab1(this.tab1Ids[i]);
                Utils.setWidgetVisibility(this.mallTab1s[i].uiObject, mw.SlateVisibility.SelfHitTestInvisible);
            }
            for (let i = this.mallTab1s.length; i < this.tab1Ids.length; ++i) {
                let mallTab1 = UIService.create(MallTab1);
                mallTab1.initTab1(this.tab1Ids[i]);
                this.mTab1ContentCanvas.addChild(mallTab1.uiObject);
                this.mallTab1s.push(mallTab1);
            }
        } else {
            for (let i = 0; i < this.tab1Ids.length; ++i) {
                Utils.setWidgetVisibility(this.mallTab1s[i].uiObject, mw.SlateVisibility.SelfHitTestInvisible);
                this.mallTab1s[i].initTab1(this.tab1Ids[i]);
            }
            for (let i = this.tab1Ids.length; i < this.mallTab1s.length; ++i) {
                Utils.setWidgetVisibility(this.mallTab1s[i].uiObject, mw.SlateVisibility.Collapsed);
            }
        }
    }
    updateTab2() {
        if (this.tab2Ids.length >= this.mallTab2s.length) {
            for (let i = 0; i < this.mallTab2s.length; ++i) {
                this.mallTab2s[i].initTab2(this.tab2Ids[i]);
                Utils.setWidgetVisibility(this.mallTab2s[i].uiObject, mw.SlateVisibility.SelfHitTestInvisible);
            }
            for (let i = this.mallTab2s.length; i < this.tab2Ids.length; ++i) {
                let mallTab2 = UIService.create(MallTab2);
                mallTab2.initTab2(this.tab2Ids[i]);
                this.mTab2ContentCanvas.addChild(mallTab2.uiObject);
                this.mallTab2s.push(mallTab2);
            }
        } else {
            for (let i = 0; i < this.tab2Ids.length; ++i) {
                Utils.setWidgetVisibility(this.mallTab2s[i].uiObject, mw.SlateVisibility.SelfHitTestInvisible);
                this.mallTab2s[i].initTab2(this.tab2Ids[i]);
            }
            for (let i = this.tab2Ids.length; i < this.mallTab2s.length; ++i) {
                Utils.setWidgetVisibility(this.mallTab2s[i].uiObject, mw.SlateVisibility.Collapsed);
            }
        }
    }
    updateTab3() {
        if (this.tab3Ids.length >= this.mallTab3s.length) {
            for (let i = 0; i < this.mallTab3s.length; ++i) {
                this.mallTab3s[i].initTab3(this.tab3Ids[i]);
                Utils.setWidgetVisibility(this.mallTab3s[i].uiObject, mw.SlateVisibility.SelfHitTestInvisible);
            }
            for (let i = this.mallTab3s.length; i < this.tab3Ids.length; ++i) {
                let mallTab3 = UIService.create(MallTab3);
                mallTab3.initTab3(this.tab3Ids[i]);
                this.mTab3ContentCanvas.addChild(mallTab3.uiObject);
                this.mallTab3s.push(mallTab3);
            }
        } else {
            for (let i = 0; i < this.tab3Ids.length; ++i) {
                Utils.setWidgetVisibility(this.mallTab3s[i].uiObject, mw.SlateVisibility.SelfHitTestInvisible);
                this.mallTab3s[i].initTab3(this.tab3Ids[i]);
            }
            for (let i = this.tab3Ids.length; i < this.mallTab3s.length; ++i) {
                Utils.setWidgetVisibility(this.mallTab3s[i].uiObject, mw.SlateVisibility.Collapsed);
            }
        }
    }
    refreshMallItemSelf(usingAssetIdMap, isCheck = false) {
        if (isCheck) this.checkMallItemState();
        let valueArr = Array.from(usingAssetIdMap);
        if (this.mallItem_Selfs.length > valueArr.length) {
            for (let i = 0; i < valueArr.length; ++i) {
                this.mallItem_Selfs[i].initItem(valueArr[i][0], valueArr[i][1]);
                Utils.setWidgetVisibility(this.mallItem_Selfs[i].uiObject, mw.SlateVisibility.SelfHitTestInvisible);
            }
            for (let i = valueArr.length; i < this.mallItem_Selfs.length; ++i) {
                Utils.setWidgetVisibility(this.mallItem_Selfs[i].uiObject, mw.SlateVisibility.Collapsed);
            }
        } else {
            for (let i = 0; i < this.mallItem_Selfs.length; ++i) {
                this.mallItem_Selfs[i].initItem(valueArr[i][0], valueArr[i][1]);
                Utils.setWidgetVisibility(this.mallItem_Selfs[i].uiObject, mw.SlateVisibility.SelfHitTestInvisible);
            }
            for (let i = this.mallItem_Selfs.length; i < valueArr.length; ++i) {
                let mallItem_Self = UIService.create(MallItem_Self);
                mallItem_Self.initItem(valueArr[i][0], valueArr[i][1]);
                this.mSelfContentCanvas.addChild(mallItem_Self.uiObject);
                this.mallItem_Selfs.push(mallItem_Self);
            }
        }
    }
    onShow(...params) {
        Event.dispatchToLocal(EventType.OnOffMainHUD, false);
        this.canUpdate = true;
        TouchScript.instance.addScreenListener(this.mTouchImage, this.onMoveTouchEvent.bind(this), false);
    }
    onHide() {
        Event.dispatchToLocal(EventType.OnOffMainHUD, true);
        this.canUpdate = false;
        TouchScript.instance.removeScreenListener(this.mTouchImage);
    }
    onOffLeftCanvas(isOpen) {
        Utils.setWidgetVisibility(this.mLeftCanvas, isOpen ? mw.SlateVisibility.SelfHitTestInvisible : mw.SlateVisibility.Collapsed);
        Utils.setWidgetVisibility(this.mSelfCanvas, isOpen ? mw.SlateVisibility.SelfHitTestInvisible : mw.SlateVisibility.Collapsed);
    }
    initMallRot() {
        this.moveVec = [];
        mw.TimeUtil.delayExecute((() => {
            this.movePos = this.mTouchImage.position.multiply(1);
        }), 3);
    }
    onUpdate(dt) {
        if (this.dir != 0) {
            this.getMallModuleC.addRoatation(this.dir * dt);
            this.dir = 0;
        }
    }
    onTouchStarted(inGemory, inPointerEvent) {
        return TouchScript.instance.onTouchStarted(inGemory, inPointerEvent);
    }
    onTouchMoved(inGemory, inPointerEvent) {
        return TouchScript.instance.onTouchMoved(inGemory, inPointerEvent);
    }
    onTouchEnded(inGemory, inPointerEvent) {
        return TouchScript.instance.onTouchEnded(inGemory, inPointerEvent);
    }
}

var foreign114 = Object.freeze({
    __proto__: null,
    default: MallPanel
});

class ColorPickPanel extends ColorPickPanel_Generate$1 {
    constructor() {
        super(...arguments);
        this.mallModuleC = null;
        this.mallPanel = null;
        this.colorPickText = null;
        this.colorPickTab1 = null;
        this.currenrColorPickTab2Index = 0;
        this.colorPickTab2Datas = [];
        this.colorPickTab2s = [];
        this.colorPickTab3Colors = [];
        this.colorPickTab3s = [];
        this.colorPickTab3Map = new Map;
        this.isLockColorPick = false;
    }
    get getMallModuleC() {
        if (!this.mallModuleC) {
            this.mallModuleC = ModuleService.getModule(MallModuleC);
        }
        return this.mallModuleC;
    }
    get getMallPanel() {
        if (!this.mallPanel) {
            this.mallPanel = UIService.getUI(MallPanel);
        }
        return this.mallPanel;
    }
    onStart() {
        this.canUpdate = false;
        this.layer = UILayerMiddle;
        this.initUI();
        this.bindButton();
        this.bindAction();
    }
    initUI() {
        this.mSaveTextBlock.text = StringUtil.format(GameConfig.Language.Text_SaveColor.Value, ``);
    }
    bindButton() {
        this.mCloseButton.onClicked.add(this.addCloseButton.bind(this));
        this.mSaveButton.onClicked.add(this.addSaveButton.bind(this));
    }
    addCloseButton() {
        this.hide();
        this.getMallModuleC.onCloseColorPickPanelAction.call();
    }
    addSaveButton() {
        this.hide();
        this.getMallModuleC.onSaveColorPickPanelAction.call();
    }
    bindAction() {
        this.getMallModuleC.onSelectColorPickTab2Action.add(this.addSelectColorPickTab2Action.bind(this));
        this.mColorPick.onColorChanged.add(this.addColorChanged.bind(this));
    }
    showColorPickPanel(tab1Text, name, colorPickTab2Datas, colorPickTab3Colors) {
        this.colorPickText = tab1Text;
        this.mSaveTextBlock.text = StringUtil.format(GameConfig.Language.Text_SaveColor.Value, name);
        this.refreshColorPickTab1();
        this.colorPickTab2Datas = colorPickTab2Datas;
        this.refreshColorPickTab2();
        this.colorPickTab3Colors = colorPickTab3Colors;
        this.refreshColorPickTab3();
        this.refreshColorPick();
        this.show();
        this.getMallPanel.onOffLeftCanvas(false);
    }
    refreshColorPickTab1() {
        if (!this.colorPickTab1) {
            this.colorPickTab1 = mw.UIService.getUI(ColorPickTab1);
            this.mTab1ContentCanvas.addChild(this.colorPickTab1.uiObject);
        }
        this.colorPickTab1.refreshColorPickTab1(this.colorPickText);
    }
    refreshColorPickTab2() {
        this.currenrColorPickTab2Index = 0;
        if (this.colorPickTab2Datas.length > this.colorPickTab2s.length) {
            for (let i = 0; i < this.colorPickTab2s.length; ++i) {
                this.colorPickTab2s[i].initTab2(i, this.colorPickTab2Datas[i]);
                Utils.setWidgetVisibility(this.colorPickTab2s[i].uiObject, mw.SlateVisibility.SelfHitTestInvisible);
            }
            for (let i = this.colorPickTab2s.length; i < this.colorPickTab2Datas.length; ++i) {
                let colorPickTab2 = mw.UIService.create(ColorPickTab2);
                this.mTab2ContentCanvas.addChild(colorPickTab2.uiObject);
                colorPickTab2.initTab2(i, this.colorPickTab2Datas[i]);
                this.colorPickTab2s.push(colorPickTab2);
            }
        } else {
            for (let i = 0; i < this.colorPickTab2Datas.length; ++i) {
                this.colorPickTab2s[i].initTab2(i, this.colorPickTab2Datas[i]);
                Utils.setWidgetVisibility(this.colorPickTab2s[i].uiObject, mw.SlateVisibility.SelfHitTestInvisible);
            }
            for (let i = this.colorPickTab2Datas.length; i < this.colorPickTab2s.length; ++i) {
                Utils.setWidgetVisibility(this.colorPickTab2s[i].uiObject, mw.SlateVisibility.Collapsed);
            }
        }
        this.colorPickTab2s[this.currenrColorPickTab2Index].updateSelectState(true);
    }
    addSelectColorPickTab2Action(index) {
        if (this.currenrColorPickTab2Index == index) return;
        this.currenrColorPickTab2Index = index;
    }
    refreshColorPickTab3() {
        this.colorPickTab3Map.clear();
        if (this.colorPickTab3Colors.length > this.colorPickTab3s.length) {
            for (let i = 0; i < this.colorPickTab3s.length; ++i) {
                this.colorPickTab3s[i].initColorPickTab3(i, this.colorPickTab3Colors[i]);
                Utils.setWidgetVisibility(this.colorPickTab3s[i].uiObject, mw.SlateVisibility.SelfHitTestInvisible);
                this.colorPickTab3Map.set(this.colorPickTab3Colors[i], this.colorPickTab3s[i]);
            }
            for (let i = this.colorPickTab3s.length; i < this.colorPickTab3Colors.length; ++i) {
                let colorPickTab3 = mw.UIService.create(ColorPickTab3);
                this.mTab3ContentCanvas.addChild(colorPickTab3.uiObject);
                colorPickTab3.initColorPickTab3(i, this.colorPickTab3Colors[i]);
                this.colorPickTab3s.push(colorPickTab3);
                this.colorPickTab3Map.set(this.colorPickTab3Colors[i], colorPickTab3);
            }
        } else {
            for (let i = 0; i < this.colorPickTab3Colors.length; ++i) {
                this.colorPickTab3s[i].initColorPickTab3(i, this.colorPickTab3Colors[i]);
                Utils.setWidgetVisibility(this.colorPickTab3s[i].uiObject, mw.SlateVisibility.SelfHitTestInvisible);
                this.colorPickTab3Map.set(this.colorPickTab3Colors[i], this.colorPickTab3s[i]);
            }
            for (let i = this.colorPickTab3Colors.length; i < this.colorPickTab3s.length; ++i) {
                Utils.setWidgetVisibility(this.colorPickTab3s[i].uiObject, mw.SlateVisibility.Collapsed);
            }
        }
        this.checkColorPickTab3();
    }
    checkColorPickTab3() {
        if (!this.colorPickTab2Datas || this.colorPickTab2Datas.length == 0) return;
        let colorKey = this.colorPickTab2Datas[this.currenrColorPickTab2Index].color;
        for (let key of this.colorPickTab3Map.keys()) {
            if (Utils.isEqulaLinearColor(Utils.colorHexToLinearColorToString(key), colorKey)) {
                this.colorPickTab3Map.get(key).updateSelectState(true);
                break;
            }
        }
    }
    refreshColorPick() {
        if (!this.colorPickTab2Datas || this.colorPickTab2Datas.length == 0) return;
        this.isLockColorPick = true;
        this.mColorPick.color = this.colorPickTab2Datas[this.currenrColorPickTab2Index].color;
        this.isLockColorPick = false;
    }
    checkColorPickTab3AndColorPick(color) {
        if (!color) return;
        this.colorPickTab3Map.forEach(((value, key) => {
            value.updateSelectState(Utils.isEqulaLinearColor(Utils.colorHexToLinearColorToString(key), color));
        }));
        this.isLockColorPick = true;
        this.mColorPick.color = color;
        this.isLockColorPick = false;
    }
    refreshColorPickTab2AndColorPick(color) {
        if (!color) return;
        this.isLockColorPick = true;
        this.mColorPick.color = color;
        this.isLockColorPick = false;
        if (this.currenrColorPickTab2Index < 0 || !this.colorPickTab2s || this.currenrColorPickTab2Index >= this.colorPickTab2s.length) return;
        this.colorPickTab2s[this.currenrColorPickTab2Index].refreshColorImage(color);
    }
    addColorChanged(Content) {
        if (this.isLockColorPick) return;
        this.getMallModuleC.onColorPickChangedAction.call(Content);
        this.colorPickTab3Map.forEach(((value, key) => {
            value.updateSelectState(false);
        }));
        if (this.currenrColorPickTab2Index < 0 || !this.colorPickTab2s || this.currenrColorPickTab2Index >= this.colorPickTab2s.length) return;
        this.colorPickTab2s[this.currenrColorPickTab2Index].refreshColorImage(Content);
    }
}

var foreign106 = Object.freeze({
    __proto__: null,
    default: ColorPickPanel
});

let MallTipsPanel_Generate = class MallTipsPanel_Generate extends UIScript {
    get mMainImage() {
        if (!this.mMainImage_Internal && this.uiWidgetBase) {
            this.mMainImage_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mMainImage");
        }
        return this.mMainImage_Internal;
    }
    get mTipsTextBlock() {
        if (!this.mTipsTextBlock_Internal && this.uiWidgetBase) {
            this.mTipsTextBlock_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mMainImage/mTipsTextBlock");
        }
        return this.mTipsTextBlock_Internal;
    }
    get mContentTextBlock() {
        if (!this.mContentTextBlock_Internal && this.uiWidgetBase) {
            this.mContentTextBlock_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mMainImage/mContentTextBlock");
        }
        return this.mContentTextBlock_Internal;
    }
    get mCancelButton() {
        if (!this.mCancelButton_Internal && this.uiWidgetBase) {
            this.mCancelButton_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mMainImage/mCancelButton");
        }
        return this.mCancelButton_Internal;
    }
    get mCancelTextBlock() {
        if (!this.mCancelTextBlock_Internal && this.uiWidgetBase) {
            this.mCancelTextBlock_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mMainImage/mCancelButton/mCancelTextBlock");
        }
        return this.mCancelTextBlock_Internal;
    }
    get mSureButton() {
        if (!this.mSureButton_Internal && this.uiWidgetBase) {
            this.mSureButton_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mMainImage/mSureButton");
        }
        return this.mSureButton_Internal;
    }
    get mSureTextBlock() {
        if (!this.mSureTextBlock_Internal && this.uiWidgetBase) {
            this.mSureTextBlock_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mMainImage/mSureButton/mSureTextBlock");
        }
        return this.mSureTextBlock_Internal;
    }
    onAwake() {
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        this.mCancelButton.onClicked.add((() => {
            Event.dispatchToLocal("PlayButtonClick", "mCancelButton");
        }));
        this.mCancelButton.touchMethod = mw.ButtonTouchMethod.PreciseTap;
        this.mSureButton.onClicked.add((() => {
            Event.dispatchToLocal("PlayButtonClick", "mSureButton");
        }));
        this.mSureButton.touchMethod = mw.ButtonTouchMethod.PreciseTap;
        this.initLanguage(this.mTipsTextBlock);
        this.initLanguage(this.mContentTextBlock);
        this.initLanguage(this.mCancelTextBlock);
        this.initLanguage(this.mSureTextBlock);
    }
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) {}
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    hide() {
        mw.UIService.hideUI(this);
    }
};

MallTipsPanel_Generate = __decorate([ UIBind("UI/module/MallModule/MallTipsPanel.ui") ], MallTipsPanel_Generate);

var MallTipsPanel_Generate$1 = MallTipsPanel_Generate;

var foreign188 = Object.freeze({
    __proto__: null,
    default: MallTipsPanel_Generate$1
});

class MallTipsPanel extends MallTipsPanel_Generate$1 {
    constructor() {
        super(...arguments);
        this.sureCallback = null;
        this.cancelCallback = null;
    }
    onStart() {
        this.canUpdate = false;
        this.layer = UILayerMiddle;
        this.bindButtons();
    }
    bindButtons() {
        this.mSureButton.onClicked.add(this.addSureButton.bind(this));
        this.mCancelButton.onClicked.add(this.addCancelButton.bind(this));
    }
    addSureButton() {
        if (this.sureCallback) this.sureCallback();
        this.hide();
    }
    addCancelButton() {
        if (this.cancelCallback) this.cancelCallback();
        this.hide();
    }
    showTips(sureCallback, cancelCallback, titleText, contentText, noText, yesText) {
        this.sureCallback = sureCallback;
        this.cancelCallback = cancelCallback;
        this.mTipsTextBlock.text = titleText;
        this.mContentTextBlock.text = contentText;
        this.mCancelTextBlock.text = noText;
        this.mSureTextBlock.text = yesText;
        this.show();
    }
}

var foreign118 = Object.freeze({
    __proto__: null,
    default: MallTipsPanel
});

class MallModuleC extends ModuleC {
    constructor() {
        super(...arguments);
        this.hudModuleC = null;
        this.mallPanel = null;
        this.colorPickPanel = null;
        this.mallTipsPanel = null;
        this.onSelectTab1Action = new Action1;
        this.onSelectTab2Action = new Action1;
        this.onSelectTab3Action = new Action1;
        this.onSelectItemAction = new Action3;
        this.onOpenColorPickAction = new Action2;
        this.onResetAction = new Action;
        this.onSaveAction = new Action;
        this.onSexAction = new Action;
        this.onCloseMallPanelAction = new Action;
        this.onSelectColorPickTab2Action = new Action1;
        this.onSelectColorPickTab3Action = new Action1;
        this.onColorPickChangedAction = new Action1;
        this.onCloseColorPickPanelAction = new Action;
        this.onSaveColorPickPanelAction = new Action;
        this.onCloseMallItemSelfAction = new Action2;
        this.usingAssetIdMap = new Map;
        this.usingAssetIds = [];
        this.isNeedSaveCharacter = false;
        this.decorationIndexMap = new Map;
        this.onSwitchCameraAction = new Action1;
        this.lastCameraType = -1;
        this.mallCharacterRotSpeed = 30;
        this.maleNpc = null;
        this.feMaleNpc = null;
        this.transitionNpc = null;
        this.copyNpc = null;
        this.saveSomatotype = 2;
        this.colorPickTabId = -1;
        this.colorPickTab2Datas = [];
        this.colorPickTab3Colors = [];
        this.colorPickTab2Index = 0;
        this.isNeedSaveColor = false;
    }
    get getHUDModuleC() {
        if (!this.hudModuleC) {
            this.hudModuleC = ModuleService.getModule(HUDModuleC);
        }
        return this.hudModuleC;
    }
    get getMallPanel() {
        if (!this.mallPanel) {
            this.mallPanel = UIService.getUI(MallPanel);
        }
        return this.mallPanel;
    }
    get getColorPickPanel() {
        if (!this.colorPickPanel) {
            this.colorPickPanel = UIService.getUI(ColorPickPanel);
        }
        return this.colorPickPanel;
    }
    get getMallTipsPanel() {
        if (!this.mallTipsPanel) {
            this.mallTipsPanel = UIService.getUI(MallTipsPanel);
        }
        return this.mallTipsPanel;
    }
    onStart() {
        this.bindAction();
        this.bindEvent();
    }
    onEnterScene(sceneType) {
        this.initNpc();
        this.initShopCamera();
    }
    bindAction() {
        this.getHUDModuleC?.onOpenShareAction.add(this.addOpenMallAction.bind(this));
        this.onSelectItemAction.add(this.addSelectItemAction.bind(this));
        this.onOpenColorPickAction.add(this.addOpenColorPickAction.bind(this));
        this.onSaveAction.add(this.addSaveAction.bind(this));
        this.onCloseMallPanelAction.add(this.addCloseAction.bind(this));
        this.onResetAction.add(this.addResetAction.bind(this));
        this.onSexAction.add(this.addSexAction.bind(this));
        this.onSelectColorPickTab2Action.add(this.addSelectColorPickTab2Action.bind(this));
        this.onSelectColorPickTab3Action.add(this.addSelectColorPickTab3Action.bind(this));
        this.onColorPickChangedAction.add(this.changeCharacterColor.bind(this));
        this.onCloseColorPickPanelAction.add(this.addCloseColorPickPanelAction.bind(this));
        this.onSaveColorPickPanelAction.add(this.addSaveColorPickPanelAction.bind(this));
        this.onCloseMallItemSelfAction.add(this.addCloseMallItemSelfAction.bind(this));
    }
    bindEvent() {
        InputUtil.onKeyDown(mw.Keys.O, (() => {
            this.addOpenMallAction();
        }));
    }
    addSaveColorPickPanelAction() {
        this.isNeedSaveColor = false;
        this.getMallPanel.checkSkinToneMallItemStateAndShowMallPanel();
    }
    addCloseColorPickPanelAction() {
        if (this.isNeedSaveColor) {
            this.getMallTipsPanel.showTips((() => {
                this.isNeedSaveColor = false;
                this.getMallPanel.checkSkinToneMallItemStateAndShowMallPanel();
            }), (() => {
                this.isNeedSaveColor = false;
                ExecutorManager.instance.pushAsyncExecutor((async () => {
                    await this.copyNpc.asyncReady();
                    this.localPlayer.character.setDescription(this.copyNpc.getDescription());
                    await this.localPlayer.character.asyncReady();
                    this.getMallPanel.checkSkinToneMallItemStateAndShowMallPanel();
                }));
            }), GameConfig.Language.Text_CloseTips.Value, GameConfig.Language.Text_WhetherToKeepTheCurrentColor.Value, GameConfig.Language.Text_NoRetain.Value, GameConfig.Language.Text_Retain.Value);
        } else {
            this.getMallPanel.checkSkinToneMallItemStateAndShowMallPanel();
        }
    }
    addOpenMallAction() {
        ExecutorManager.instance.pushAsyncExecutor((async () => {
            await this.localPlayer.character.asyncReady();
            this.initUsingCharacterData();
            this.onSwitchCameraAction.call(2);
            if (!mw.UIService.getUI(MallPanel, false)?.visible) {
                this.mallPanel = UIService.getUI(MallPanel);
                this.getMallPanel.initMallPanel(this.saveSomatotype, this.usingAssetIdMap);
            }
            this.getMallPanel.show();
            this.decorationIndexMap.clear();
        }));
    }
    closeMallPanel() {
        this.getMallPanel.hide();
        this.onSwitchCameraAction.call(0);
    }
    initUsingCharacterData() {
        this.usingAssetIdMap.clear();
        this.usingAssetIds.length = 0;
        let fullHair = Mall.getAssetId(Tab3Type.Tab3_FullHair);
        if (fullHair && fullHair.length > 0) {
            let fullHairElement = GameConfig.FullHair.findElement(`AssetId`, fullHair);
            if (fullHairElement) {
                this.usingAssetIdMap.set(Tab3Type.Tab3_FullHair, new AssetIdInfoData(fullHair));
            } else {
                let frontHair = Mall.getAssetId(Tab3Type.Tab3_FrontHair);
                if (frontHair && frontHair.length > 0) this.usingAssetIdMap.set(Tab3Type.Tab3_FrontHair, new AssetIdInfoData(frontHair));
                this.usingAssetIdMap.set(Tab3Type.Tab3_BackHair, new AssetIdInfoData(fullHair));
            }
        }
        let top = Mall.getAssetId(Tab2Type.Tab2_Top);
        if (top && top.length > 0) this.usingAssetIdMap.set(Tab2Type.Tab2_Top, new AssetIdInfoData(top));
        let bottom = Mall.getAssetId(Tab2Type.Tab2_Bottom);
        if (bottom && bottom.length > 0) this.usingAssetIdMap.set(Tab2Type.Tab2_Bottom, new AssetIdInfoData(bottom));
        let shoes = Mall.getAssetId(Tab2Type.Tab2_Shoes);
        if (shoes && shoes.length > 0) this.usingAssetIdMap.set(Tab2Type.Tab2_Shoes, new AssetIdInfoData(shoes));
        let gloves = Mall.getAssetId(Tab2Type.Tab2_Gloves);
        if (gloves && gloves.length > 0) this.usingAssetIdMap.set(Tab2Type.Tab2_Gloves, new AssetIdInfoData(gloves));
        let slot = this.localPlayer.character.description.advance.slotAndDecoration.slot;
        for (let i = 0; i < slot.length; ++i) {
            for (let j = 0; j < slot[i].decoration.length; ++j) {
                let decoration = slot[i].decoration[j];
                if (!decoration.attachmentAssetId || !decoration.attachmentGameObject || !decoration.attachmentOffset) continue;
                this.usingAssetIdMap.set(Number(decoration.attachmentAssetId), new AssetIdInfoData(decoration.attachmentAssetId, i, j));
                this.usingAssetIds.push(Number(decoration.attachmentAssetId));
            }
        }
        let eyebrows = Mall.getAssetId(Tab2Type.Tab2_Eyebrows);
        if (eyebrows && eyebrows.length > 0 && eyebrows != `32115`) this.usingAssetIdMap.set(Tab2Type.Tab2_Eyebrows, new AssetIdInfoData(eyebrows));
        let pupilStyle = Mall.getAssetId(Tab3Type.Tab3_PupilStyle);
        if (pupilStyle && pupilStyle.length > 0 && pupilStyle != `32115`) this.usingAssetIdMap.set(Tab3Type.Tab3_PupilStyle, new AssetIdInfoData(pupilStyle));
        let Lens = Mall.getAssetId(Tab3Type.Tab3_Lens);
        if (Lens && Lens.length > 0 && Lens != `32115`) this.usingAssetIdMap.set(Tab3Type.Tab3_Lens, new AssetIdInfoData(Lens));
        let UpperHighlight = Mall.getAssetId(Tab3Type.Tab3_UpperHighlight);
        if (UpperHighlight && UpperHighlight.length > 0 && UpperHighlight != `32115`) this.usingAssetIdMap.set(Tab3Type.Tab3_UpperHighlight, new AssetIdInfoData(UpperHighlight));
        let LowerHighlight = Mall.getAssetId(Tab3Type.Tab3_LowerHighlight);
        if (LowerHighlight && LowerHighlight.length > 0 && LowerHighlight != `32115`) this.usingAssetIdMap.set(Tab3Type.Tab3_LowerHighlight, new AssetIdInfoData(LowerHighlight));
        let Eyelashes = Mall.getAssetId(Tab3Type.Tab3_Eyelashes);
        if (Eyelashes && Eyelashes.length > 0 && Eyelashes != `32115`) this.usingAssetIdMap.set(Tab3Type.Tab3_Eyelashes, new AssetIdInfoData(Eyelashes));
        let Eyeshadow = Mall.getAssetId(Tab3Type.Tab3_Eyeshadow);
        if (Eyeshadow && Eyeshadow.length > 0 && Eyeshadow != `32115`) this.usingAssetIdMap.set(Tab3Type.Tab3_Eyeshadow, new AssetIdInfoData(Eyeshadow));
        let Blush = Mall.getAssetId(Tab3Type.Tab3_Blush);
        if (Blush && Blush.length > 0 && Blush != `32115`) this.usingAssetIdMap.set(Tab3Type.Tab3_Blush, new AssetIdInfoData(Blush));
        let LipMakeup = Mall.getAssetId(Tab3Type.Tab3_LipMakeup);
        if (LipMakeup && LipMakeup.length > 0 && LipMakeup != `32115`) this.usingAssetIdMap.set(Tab3Type.Tab3_LipMakeup, new AssetIdInfoData(LipMakeup));
    }
    addCloseMallItemSelfAction(tabId, assetId) {
        ExecutorManager.instance.pushAsyncExecutor((async () => {
            if (Mall.isClothingTabId(tabId)) {
                await this.changeCharacter(tabId, assetId);
            } else {
                if (!this.usingAssetIdMap.has(Number(assetId))) return;
                let assetIdInfoData = this.usingAssetIdMap.get(Number(assetId));
                await this.localPlayer.character.asyncReady();
                let attachmentGameObject = this.localPlayer.character.description.advance?.slotAndDecoration?.slot[assetIdInfoData.slotType]?.decoration[assetIdInfoData.slotIndex]?.attachmentGameObject;
                if (!attachmentGameObject) return;
                this.localPlayer.character.description.advance.slotAndDecoration.slot[assetIdInfoData.slotType].decoration.delete(attachmentGameObject, true);
                this.usingAssetIdMap.delete(Number(assetId));
                if (this.usingAssetIds.indexOf(Number(assetId)) != -1) this.usingAssetIds.splice(this.usingAssetIds.indexOf(Number(assetId)), 1);
                await this.localPlayer.character.asyncReady();
            }
            this.initUsingCharacterData();
            this.getMallPanel.refreshMallItemSelf(this.usingAssetIdMap, true);
        }));
    }
    addSelectItemAction(tabType, tabId, assetId) {
        if (tabType == TabType.None) return;
        ExecutorManager.instance.pushAsyncExecutor((async () => {
            await this.changeCharacter(tabId, assetId);
            if (!Mall.isRemovableTabId(tabId)) return;
            this.initUsingCharacterData();
            this.getMallPanel.refreshMallItemSelf(this.usingAssetIdMap, Mall.isSlot(tabId));
        }));
    }
    async changeCharacter(tabId, assetId) {
        await this.localPlayer.character.asyncReady();
        switch (tabId) {
          case Tab2Type.Tab2_BodyType:
            let bodyTypeElement = GameConfig.BodyType.getElement(assetId);
            if (!bodyTypeElement || bodyTypeElement?.Scale == 0) return;
            this.localPlayer.character.description.advance.bodyFeatures.body.height = bodyTypeElement.Scale;
            break;

          case Tab2Type.Tab2_SkinTone:
            this.localPlayer.character.description.advance.makeup.skinTone.skinColor = mw.LinearColor.colorHexToLinearColor(assetId);
            break;

          case Tab2Type.Tab2_Face:
            await Utils.asyncDownloadAsset(assetId);
            this.localPlayer.character.description.advance.headFeatures.head.style = assetId;
            break;

          case Tab2Type.Tab2_Eyebrows:
            if (this.localPlayer.character.description.advance.makeup.eyebrows.eyebrowStyle != assetId) {
                await Utils.asyncDownloadAsset(assetId);
                this.localPlayer.character.description.advance.makeup.eyebrows.eyebrowStyle = assetId;
            } else {
                let somatotype = this.localPlayer.character.description.advance.base.characterSetting.somatotype;
                let eyebrowStyle = ``;
                if (somatotype % 2 == 0) {
                    eyebrowStyle = `398608`;
                } else {
                    eyebrowStyle = `77763`;
                }
                await Utils.asyncDownloadAsset(eyebrowStyle);
                this.localPlayer.character.description.advance.makeup.eyebrows.eyebrowStyle = eyebrowStyle;
            }
            break;

          case Tab2Type.Tab2_Expression:
            let faceExpressionElement = GameConfig.FaceExpression.getElement(assetId);
            if (!faceExpressionElement || faceExpressionElement?.ExpressionType < 0 || faceExpressionElement?.ExpressionType > 9) return;
            this.localPlayer.character.description.advance.headFeatures.expressions.changeExpression = faceExpressionElement.ExpressionType;
            break;

          case Tab2Type.Tab2_Outfit:
            await this.changeOutfit(GameConfig.Outfit.getElement(assetId).AssetId);
            break;

          case Tab3Type.Tab3_DailyStyling_Suit1:
            await this.changeOutfit(GameConfig.DailyStylingOutfit1.getElement(assetId).AssetId);
            break;

          case Tab3Type.Tab3_DailyStyling_Suit2:
            await this.changeOutfit(GameConfig.DailyStylingOutfit2.getElement(assetId).AssetId);
            break;

          case Tab3Type.Tab3_MuppetStyling_Suit:
            await this.changeOutfit(GameConfig.MuppetStylingOutfit.getElement(assetId).AssetId);
            break;

          case Tab3Type.Tab3_HeroStyling_Suit:
            await this.changeOutfit(GameConfig.HeroStylingOutfit.getElement(assetId).AssetId);
            break;

          case Tab3Type.Tab3_FantasyModeling_Suit:
            await this.changeOutfit(GameConfig.FantasyModelingOutfit.getElement(assetId).AssetId);
            break;

          case Tab3Type.Tab3_HolidayStyling_Suit:
            await this.changeOutfit(GameConfig.HolidayStylingOutfit.getElement(assetId).AssetId);
            break;

          case Tab3Type.Tab3_ScienceFictionStyling_Suit:
            await this.changeOutfit(GameConfig.ScienceFictionStylingOutfit.getElement(assetId).AssetId);
            break;

          case Tab3Type.Tab3_AncientMolding_Suit:
            await this.changeOutfit(GameConfig.AncientMoldingOutfit.getElement(assetId).AssetId);
            break;

          case Tab2Type.Tab2_Top:
            await this.changeTop(assetId);
            break;

          case Tab3Type.Tab3_LongSinglePiece_Top:
            await this.changeTop(GameConfig.LongSinglePieceTop.getElement(assetId).AssetId);
            break;

          case Tab3Type.Tab3_ShortJacket_Top:
            await this.changeTop(GameConfig.ShortJacketTop.getElement(assetId).AssetId);
            break;

          case Tab3Type.Tab3_ShortSinglePiece_Top:
            await this.changeTop(GameConfig.ShortSinglePieceTop.getElement(assetId).AssetId);
            break;

          case Tab3Type.Tab3_Suit_Top:
            await this.changeTop(GameConfig.SuitTop.getElement(assetId).AssetId);
            break;

          case Tab3Type.Tab3_ALongCoat_Top:
            await this.changeTop(GameConfig.ALongCoatTop.getElement(assetId).AssetId);
            break;

          case Tab2Type.Tab2_Bottom:
            await this.changeBottom(assetId);
            break;

          case Tab3Type.Tab3_ShortSkirt_Bottom:
            await this.changeBottom(GameConfig.ShortSkirtBottom.getElement(assetId).AssetId);
            break;

          case Tab3Type.Tab3_LongPants_Bottom:
            await this.changeBottom(GameConfig.LongPantsBottom.getElement(assetId).AssetId);
            break;

          case Tab3Type.Tab3_Shorts_Bottom:
            await this.changeBottom(GameConfig.ShortsBottom.getElement(assetId).AssetId);
            break;

          case Tab3Type.Tab3_LongSkirt_Bottom:
            await this.changeBottom(GameConfig.LongSkirtBottom.getElement(assetId).AssetId);
            break;

          case Tab3Type.Tab3_Tights_Bottom:
            await this.changeBottom(GameConfig.TightsBottom.getElement(assetId).AssetId);
            break;

          case Tab2Type.Tab2_Shoes:
            await this.changeShoes(assetId);
            break;

          case Tab3Type.Tab3_Everyday_Shoes:
            await this.changeShoes(GameConfig.EverydayShoes.getElement(assetId).AssetId);
            break;

          case Tab3Type.Tab3_Boots_Shoes:
            await this.changeShoes(GameConfig.BootsShoes.getElement(assetId).AssetId);
            break;

          case Tab3Type.Tab3_FootCover_Shoes:
            await this.changeShoes(GameConfig.FootCoverShoes.getElement(assetId).AssetId);
            break;

          case Tab3Type.Tab3_NakedDress_Shoes:
            await this.changeShoes(GameConfig.NakedDressShoes.getElement(assetId).AssetId);
            break;

          case Tab3Type.Tab3_HighHeels_Shoes:
            await this.changeShoes(GameConfig.HighHeelsShoes.getElement(assetId).AssetId);
            break;

          case Tab3Type.Tab3_SportsShoes_Shoes:
            await this.changeShoes(GameConfig.SportsShoesShoes.getElement(assetId).AssetId);
            break;

          case Tab2Type.Tab2_Gloves:
            await this.changeGloves(assetId);
            break;

          case Tab3Type.Tab3_Gloves_Gloves:
            await this.changeGloves(GameConfig.GlovesGloves.getElement(assetId).AssetId);
            break;

          case Tab3Type.Tab3_Accessories_Gloves:
            await this.changeGloves(GameConfig.AccessoriesGloves.getElement(assetId).AssetId);
            break;

          case Tab2Type.Tab2_Pet:
            let petElement = GameConfig.Pet.getElement(assetId);
            if (!petElement) return;
            await this.changeSlotAndDecoration(tabId, petElement.AssetId, Utils.stringArrayToTransform(petElement.Transform), mw.HumanoidSlotType.Root);
            break;

          case Tab3Type.Tab3_PupilStyle:
            if (this.localPlayer.character.description.advance.makeup.coloredContacts.style.pupilStyle != assetId) {
                await Utils.asyncDownloadAsset(assetId);
                this.localPlayer.character.description.advance.makeup.coloredContacts.style.pupilStyle = assetId;
            } else {
                let somatotype = this.localPlayer.character.description.advance.base.characterSetting.somatotype;
                let pupilStyle = ``;
                if (somatotype % 2 == 0) {
                    pupilStyle = `398609`;
                } else {
                    pupilStyle = `47968`;
                }
                await Utils.asyncDownloadAsset(pupilStyle);
                this.localPlayer.character.description.advance.makeup.coloredContacts.style.pupilStyle = pupilStyle;
            }
            break;

          case Tab3Type.Tab3_Lens:
            if (this.localPlayer.character.description.advance.makeup.coloredContacts.decal.pupilStyle != assetId) {
                await Utils.asyncDownloadAsset(assetId);
                this.localPlayer.character.description.advance.makeup.coloredContacts.decal.pupilStyle = assetId;
            } else {
                await Utils.asyncDownloadAsset(`32115`);
                this.localPlayer.character.description.advance.makeup.coloredContacts.decal.pupilStyle = `32115`;
            }
            break;

          case Tab3Type.Tab3_UpperHighlight:
            if (this.localPlayer.character.description.advance.makeup.coloredContacts.highlight.upperHighlightStyle != assetId) {
                await Utils.asyncDownloadAsset(assetId);
                this.localPlayer.character.description.advance.makeup.coloredContacts.highlight.upperHighlightStyle = assetId;
            } else {
                let somatotype = this.localPlayer.character.description.advance.base.characterSetting.somatotype;
                let upperHighlightStyle = ``;
                if (somatotype % 2 == 0) {
                    upperHighlightStyle = `48041`;
                } else {
                    upperHighlightStyle = `32112`;
                }
                await Utils.asyncDownloadAsset(upperHighlightStyle);
                this.localPlayer.character.description.advance.makeup.coloredContacts.highlight.upperHighlightStyle = upperHighlightStyle;
            }
            break;

          case Tab3Type.Tab3_LowerHighlight:
            if (this.localPlayer.character.description.advance.makeup.coloredContacts.highlight.lowerHighlightStyle != assetId) {
                await Utils.asyncDownloadAsset(assetId);
                this.localPlayer.character.description.advance.makeup.coloredContacts.highlight.lowerHighlightStyle = assetId;
            } else {
                let somatotype = this.localPlayer.character.description.advance.base.characterSetting.somatotype;
                let lowerHighlightStyle = ``;
                if (somatotype % 2 == 0) {
                    lowerHighlightStyle = `48026`;
                } else {
                    lowerHighlightStyle = `32098`;
                }
                await Utils.asyncDownloadAsset(lowerHighlightStyle);
                this.localPlayer.character.description.advance.makeup.coloredContacts.highlight.lowerHighlightStyle = lowerHighlightStyle;
            }
            break;

          case Tab3Type.Tab3_Eyelashes:
            if (this.localPlayer.character.description.advance.makeup.eyelashes.eyelashStyle != assetId) {
                await Utils.asyncDownloadAsset(assetId);
                this.localPlayer.character.description.advance.makeup.eyelashes.eyelashStyle = assetId;
            } else {
                let somatotype = this.localPlayer.character.description.advance.base.characterSetting.somatotype;
                let eyelashStyle = ``;
                if (somatotype % 2 == 0) {
                    eyelashStyle = `398607`;
                } else {
                    eyelashStyle = `48062`;
                }
                await Utils.asyncDownloadAsset(eyelashStyle);
                this.localPlayer.character.description.advance.makeup.eyelashes.eyelashStyle = eyelashStyle;
            }
            break;

          case Tab3Type.Tab3_Eyeshadow:
            if (this.localPlayer.character.description.advance.makeup.eyeShadow.eyeshadowStyle != assetId) {
                await Utils.asyncDownloadAsset(assetId);
                this.localPlayer.character.description.advance.makeup.eyeShadow.eyeshadowStyle = assetId;
            } else {
                await Utils.asyncDownloadAsset(`32115`);
                this.localPlayer.character.description.advance.makeup.eyeShadow.eyeshadowStyle = `32115`;
            }
            break;

          case Tab3Type.Tab3_Blush:
            if (this.localPlayer.character.description.advance.makeup.blush.blushStyle != assetId) {
                await Utils.asyncDownloadAsset(assetId);
                this.localPlayer.character.description.advance.makeup.blush.blushStyle = assetId;
            } else {
                await Utils.asyncDownloadAsset(`32115`);
                this.localPlayer.character.description.advance.makeup.blush.blushStyle = `32115`;
            }
            break;

          case Tab3Type.Tab3_LipMakeup:
            if (this.localPlayer.character.description.advance.makeup.lipstick.lipstickStyle != assetId) {
                await Utils.asyncDownloadAsset(assetId);
                this.localPlayer.character.description.advance.makeup.lipstick.lipstickStyle = assetId;
            } else {
                await Utils.asyncDownloadAsset(`32115`);
                this.localPlayer.character.description.advance.makeup.lipstick.lipstickStyle = `32115`;
            }
            break;

          case Tab3Type.Tab3_FaceTattoo:
            break;

          case Tab3Type.Tab3_FullHair:
            if (this.localPlayer.character.description.advance.hair.backHair.style != assetId) {
                await Utils.asyncDownloadAsset(assetId);
                this.localPlayer.character.description.advance.hair.backHair.style = assetId;
                this.localPlayer.character.description.advance.hair.frontHair.style = ``;
            } else {
                let somatotype = this.localPlayer.character.description.advance.base.characterSetting.somatotype;
                let frontHair = ``;
                let backHair = ``;
                if (somatotype % 2 == 0) {
                    frontHair = `292003`;
                    backHair = `292001`;
                } else {
                    frontHair = `343471`;
                    backHair = `343476`;
                }
                await Utils.asyncDownloadAssets([ frontHair, backHair ]);
                this.localPlayer.character.description.advance.hair.frontHair.style = frontHair;
                this.localPlayer.character.description.advance.hair.backHair.style = backHair;
            }
            break;

          case Tab3Type.Tab3_FrontHair:
            if (this.localPlayer.character.description.advance.hair.frontHair.style != assetId) {
                await Utils.asyncDownloadAsset(assetId);
                this.localPlayer.character.description.advance.hair.frontHair.style = assetId;
            } else {
                let somatotype = this.localPlayer.character.description.advance.base.characterSetting.somatotype;
                let frontHair = ``;
                if (somatotype % 2 == 0) {
                    frontHair = `292003`;
                } else {
                    frontHair = `343471`;
                }
                await Utils.asyncDownloadAsset(frontHair);
                this.localPlayer.character.description.advance.hair.frontHair.style = frontHair;
            }
            let backHair = this.localPlayer.character.description.advance.hair.backHair.style;
            let fullHairElement = GameConfig.FullHair.findElement(`AssetId`, backHair);
            if (fullHairElement) {
                let somatotype = this.localPlayer.character.description.advance.base.characterSetting.somatotype;
                let backHair = ``;
                if (somatotype % 2 == 0) {
                    backHair = `292001`;
                } else {
                    backHair = `343476`;
                }
                await Utils.asyncDownloadAsset(backHair);
                this.localPlayer.character.description.advance.hair.backHair.style = backHair;
            }
            break;

          case Tab3Type.Tab3_BackHair:
            if (this.localPlayer.character.description.advance.hair.backHair.style != assetId) {
                let backHair = this.localPlayer.character.description.advance.hair.backHair.style;
                let fullHairElement = GameConfig.FullHair.findElement(`AssetId`, backHair);
                if (fullHairElement) {
                    let somatotype = this.localPlayer.character.description.advance.base.characterSetting.somatotype;
                    let frontHair = ``;
                    if (somatotype % 2 == 0) {
                        frontHair = `292003`;
                    } else {
                        frontHair = `343471`;
                    }
                    await Utils.asyncDownloadAsset(frontHair);
                    this.localPlayer.character.description.advance.hair.frontHair.style = frontHair;
                }
                await Utils.asyncDownloadAsset(assetId);
                this.localPlayer.character.description.advance.hair.backHair.style = assetId;
            } else {
                let somatotype = this.localPlayer.character.description.advance.base.characterSetting.somatotype;
                let backHair = ``;
                if (somatotype % 2 == 0) {
                    backHair = `292001`;
                } else {
                    backHair = `343476`;
                }
                await Utils.asyncDownloadAsset(backHair);
                this.localPlayer.character.description.advance.hair.backHair.style = backHair;
            }
            break;

          case Tab3Type.Tab3_LeftHand:
            let leftHandElement = GameConfig.LeftHand.getElement(assetId);
            if (!leftHandElement) return;
            await this.changeSlotAndDecoration(tabId, leftHandElement.AssetId, Utils.stringArrayToTransform(leftHandElement.Transform), mw.HumanoidSlotType.LeftHand);
            break;

          case Tab3Type.Tab3_RightHand:
            let rightHandElement = GameConfig.RightHand.getElement(assetId);
            if (!rightHandElement) return;
            await this.changeSlotAndDecoration(tabId, rightHandElement.AssetId, Utils.stringArrayToTransform(rightHandElement.Transform), mw.HumanoidSlotType.RightHand);
            break;

          case Tab3Type.Tab3_Back:
            let backElement = GameConfig.Back.getElement(assetId);
            if (!backElement) return;
            await this.changeSlotAndDecoration(tabId, backElement.AssetId, Utils.stringArrayToTransform(backElement.Transform), mw.HumanoidSlotType.BackOrnamental);
            break;

          case Tab3Type.Tab3_Ear:
            let earElement = GameConfig.Ear.getElement(assetId);
            if (!earElement) return;
            await this.changeSlotAndDecoration(tabId, earElement.AssetId, Utils.stringArrayToTransform(earElement.Transform), mw.HumanoidSlotType.Head);
            break;

          case Tab3Type.Tab3_Face:
            let facingElement = GameConfig.Facing.getElement(assetId);
            if (!facingElement) return;
            await this.changeSlotAndDecoration(tabId, facingElement.AssetId, Utils.stringArrayToTransform(facingElement.Transform), mw.HumanoidSlotType.FaceOrnamental);
            break;

          case Tab3Type.Tab3_Hip:
            let hipElement = GameConfig.Hip.getElement(assetId);
            if (!hipElement) return;
            await this.changeSlotAndDecoration(tabId, hipElement.AssetId, Utils.stringArrayToTransform(hipElement.Transform), mw.HumanoidSlotType.Buttocks);
            break;

          case Tab3Type.Tab3_Shoulder:
            let shoulderElement = GameConfig.Shoulder.getElement(assetId);
            if (!shoulderElement) return;
            await this.changeSlotAndDecoration(tabId, shoulderElement.AssetId, Utils.stringArrayToTransform(shoulderElement.Transform), mw.HumanoidSlotType.Rings);
            break;

          case Tab3Type.Tab3_Effects:
            let effectsElement = GameConfig.Effects.getElement(assetId);
            if (!effectsElement) return;
            await this.changeSlotAndDecoration(tabId, effectsElement.AssetId, Utils.stringArrayToTransform(effectsElement.Transform), mw.HumanoidSlotType.Root);
            break;

          case Tab3Type.Tab3_Trailing:
            let trailingElement = GameConfig.Trailings.getElement(assetId);
            if (!trailingElement) return;
            await this.changeSlotAndDecoration(tabId, trailingElement.AssetId, Utils.stringArrayToTransform(trailingElement.Transform), mw.HumanoidSlotType.Root);
            break;
        }
        await this.localPlayer.character.asyncReady();
        this.isNeedSaveCharacter = true;
    }
    async changeTop(assetId) {
        if (this.localPlayer.character.description.advance.clothing.upperCloth.style != assetId) {
            await Utils.asyncDownloadAsset(assetId);
            this.localPlayer.character.description.advance.clothing.upperCloth.style = assetId;
        } else {
            let somatotype = this.localPlayer.character.description.advance.base.characterSetting.somatotype;
            let upperClothStyle = ``;
            if (somatotype % 2 == 0) {
                upperClothStyle = `292004`;
            } else {
                upperClothStyle = `343474`;
            }
            await Utils.asyncDownloadAsset(upperClothStyle);
            this.localPlayer.character.description.advance.clothing.upperCloth.style = upperClothStyle;
        }
    }
    async changeBottom(assetId) {
        if (this.localPlayer.character.description.advance.clothing.lowerCloth.style != assetId) {
            await Utils.asyncDownloadAsset(assetId);
            this.localPlayer.character.description.advance.clothing.lowerCloth.style = assetId;
        } else {
            let somatotype = this.localPlayer.character.description.advance.base.characterSetting.somatotype;
            let lowerClothStyle = ``;
            if (somatotype % 2 == 0) {
                lowerClothStyle = `292002`;
            } else {
                lowerClothStyle = `343467`;
            }
            await Utils.asyncDownloadAsset(lowerClothStyle);
            this.localPlayer.character.description.advance.clothing.lowerCloth.style = lowerClothStyle;
        }
    }
    async changeShoes(assetId) {
        if (this.localPlayer.character.description.advance.clothing.shoes.style != assetId) {
            await Utils.asyncDownloadAsset(assetId);
            this.localPlayer.character.description.advance.clothing.shoes.style = assetId;
        } else {
            let somatotype = this.localPlayer.character.description.advance.base.characterSetting.somatotype;
            let shoesStyle = ``;
            if (somatotype % 2 == 0) {
                shoesStyle = `66505`;
            } else {
                shoesStyle = `343475`;
            }
            await Utils.asyncDownloadAsset(shoesStyle);
            this.localPlayer.character.description.advance.clothing.shoes.style = shoesStyle;
        }
    }
    async changeGloves(assetId) {
        if (this.localPlayer.character.description.advance.clothing.gloves.style != assetId) {
            await Utils.asyncDownloadAsset(assetId);
            this.localPlayer.character.description.advance.clothing.gloves.style = assetId;
        } else {
            let somatotype = this.localPlayer.character.description.advance.base.characterSetting.somatotype;
            let glovesStyle = ``;
            if (somatotype % 2 == 0) {
                glovesStyle = `75663`;
            } else {
                glovesStyle = `343466`;
            }
            await Utils.asyncDownloadAsset(glovesStyle);
            this.localPlayer.character.description.advance.clothing.gloves.style = glovesStyle;
        }
    }
    async changeOutfit(assetId) {
        await Utils.asyncDownloadAsset(assetId);
        await this.changeOutfitTransition(assetId);
    }
    async changeOutfit_abandon(configId) {
        let outfitElement = GameConfig.Outfit.getElement(configId);
        let currentSomatotype = this.localPlayer.character.description.advance.base.characterSetting.somatotype;
        await Utils.asyncDownloadAsset(outfitElement.AssetId);
        if (currentSomatotype == outfitElement.SexType) {
            await this.changeOutfitTransition(outfitElement.AssetId);
        }
        await this.localPlayer.character.asyncReady();
    }
    async changeOutfitTransition(assetId) {
        if (!this.transitionNpc) await this.initTransitionNpc();
        this.transitionNpc.setDescription([ assetId ]);
        await this.transitionNpc.asyncReady();
        await Mall.copyCharacterClothingAndHair(this.transitionNpc, this.localPlayer.character);
    }
    async changeSlotAndDecoration(tagId, assetId, transform, slotIndex) {
        let decorationIndex = -1;
        if (this.decorationIndexMap.has(tagId)) {
            decorationIndex = this.decorationIndexMap.get(tagId);
            let attachmentGameObject = this.localPlayer.character.description.advance.slotAndDecoration.slot[slotIndex].decoration[decorationIndex - 1]?.attachmentGameObject;
            if (attachmentGameObject) {
                let attachmentAssetId = this.localPlayer.character.description.advance.slotAndDecoration.slot[slotIndex].decoration[decorationIndex - 1].attachmentAssetId;
                this.localPlayer.character.description.advance.slotAndDecoration.slot[slotIndex].decoration.delete(attachmentGameObject, true);
                if (assetId == attachmentAssetId) {
                    this.decorationIndexMap.delete(tagId);
                    return;
                }
            } else {
                this.decorationIndexMap.delete(tagId);
            }
        }
        if (this.isUsingDecoration(assetId)) {
            this.decorationIndexMap.delete(tagId);
            return;
        }
        await Utils.asyncDownloadAsset(assetId);
        let model = await GameObject.asyncSpawn(assetId);
        if (!model) return;
        model.setCollision(mw.PropertyStatus.Off, true);
        decorationIndex = this.localPlayer.character.description.advance.slotAndDecoration.slot[slotIndex].decoration.add(model, transform);
        this.decorationIndexMap.set(tagId, decorationIndex);
    }
    isUsingDecoration(assetId) {
        let slot = this.localPlayer.character.description.advance.slotAndDecoration.slot;
        if (!slot || slot.length == 0) return false;
        for (let i = 0; i < slot.length; ++i) {
            for (let j = 0; j < slot[i].decoration.length; ++j) {
                let decoration = slot[i].decoration[j];
                if (decoration.attachmentAssetId == assetId) return true;
            }
        }
        return false;
    }
    getSlotAndDecoration(tagId, slotIndex) {
        if (this.decorationIndexMap.has(tagId)) {
            let decorationIndex = this.decorationIndexMap.get(tagId);
            return this.localPlayer.character.description.advance.slotAndDecoration.slot[slotIndex].decoration[decorationIndex - 1]?.attachmentAssetId;
        } else {
            return null;
        }
    }
    async deleteDecoration() {}
    async getCharacterAssetId(configId) {
        await this.localPlayer.character.asyncReady();
        switch (configId) {
          case Tab2Type.Tab2_BodyType:
            let heightRatio = this.localPlayer.character.description.advance.bodyFeatures.body.height;
            let scale = heightRatio.toFixed(1);
            let bodyTypeElement = GameConfig.BodyType.findElement(`Scale`, scale);
            if (!bodyTypeElement) return null;
            return bodyTypeElement.ID.toString();

          case Tab2Type.Tab2_SkinTone:
            return this.localPlayer.character.description.advance.makeup.skinTone.skinColor;

          case Tab2Type.Tab2_Face:
            return this.localPlayer.character.description.advance.headFeatures.head.style;

          case Tab2Type.Tab2_Eyebrows:
            return this.localPlayer.character.description.advance.makeup.eyebrows.eyebrowStyle;

          case Tab2Type.Tab2_Expression:
            let expressionType = this.localPlayer.character.description.advance.headFeatures.expressions.changeExpression;
            if (expressionType < 0 || expressionType > 9) return null;
            let faceExpressionElement = GameConfig.FaceExpression.findElement(`ExpressionType`, expressionType);
            if (!faceExpressionElement) return null;
            return faceExpressionElement.ID.toString();

          case Tab2Type.Tab2_Outfit:
            return null;

          case Tab3Type.Tab3_DailyStyling_Suit1:
            return null;

          case Tab3Type.Tab3_DailyStyling_Suit2:
            return null;

          case Tab3Type.Tab3_MuppetStyling_Suit:
            return null;

          case Tab3Type.Tab3_HeroStyling_Suit:
            return null;

          case Tab3Type.Tab3_FantasyModeling_Suit:
            return null;

          case Tab3Type.Tab3_HolidayStyling_Suit:
            return null;

          case Tab3Type.Tab3_ScienceFictionStyling_Suit:
            return null;

          case Tab3Type.Tab3_AncientMolding_Suit:
            return null;

          case Tab2Type.Tab2_Top:
          case Tab3Type.Tab3_LongSinglePiece_Top:
          case Tab3Type.Tab3_ShortJacket_Top:
          case Tab3Type.Tab3_ShortSinglePiece_Top:
          case Tab3Type.Tab3_Suit_Top:
          case Tab3Type.Tab3_ALongCoat_Top:
            return this.localPlayer.character.description.advance.clothing.upperCloth.style;

          case Tab2Type.Tab2_Bottom:
          case Tab3Type.Tab3_ShortSkirt_Bottom:
          case Tab3Type.Tab3_LongPants_Bottom:
          case Tab3Type.Tab3_Shorts_Bottom:
          case Tab3Type.Tab3_LongSkirt_Bottom:
          case Tab3Type.Tab3_Tights_Bottom:
            return this.localPlayer.character.description.advance.clothing.lowerCloth.style;

          case Tab2Type.Tab2_Shoes:
          case Tab3Type.Tab3_Everyday_Shoes:
          case Tab3Type.Tab3_Boots_Shoes:
          case Tab3Type.Tab3_FootCover_Shoes:
          case Tab3Type.Tab3_NakedDress_Shoes:
          case Tab3Type.Tab3_HighHeels_Shoes:
          case Tab3Type.Tab3_SportsShoes_Shoes:
            return this.localPlayer.character.description.advance.clothing.shoes.style;

          case Tab2Type.Tab2_Gloves:
          case Tab3Type.Tab3_Gloves_Gloves:
          case Tab3Type.Tab3_Accessories_Gloves:
            return this.localPlayer.character.description.advance.clothing.gloves.style;

          case Tab2Type.Tab2_Pet:
            break;

          case Tab3Type.Tab3_PupilStyle:
            return this.localPlayer.character.description.advance.makeup.coloredContacts.style.pupilStyle;

          case Tab3Type.Tab3_Lens:
            return this.localPlayer.character.description.advance.makeup.coloredContacts.decal.pupilStyle;

          case Tab3Type.Tab3_UpperHighlight:
            return this.localPlayer.character.description.advance.makeup.coloredContacts.highlight.upperHighlightStyle;

          case Tab3Type.Tab3_LowerHighlight:
            return this.localPlayer.character.description.advance.makeup.coloredContacts.highlight.lowerHighlightStyle;

          case Tab3Type.Tab3_Eyelashes:
            return this.localPlayer.character.description.advance.makeup.eyelashes.eyelashStyle;

          case Tab3Type.Tab3_Eyeshadow:
            return this.localPlayer.character.description.advance.makeup.eyeShadow.eyeshadowStyle;

          case Tab3Type.Tab3_Blush:
            return this.localPlayer.character.description.advance.makeup.blush.blushStyle;

          case Tab3Type.Tab3_LipMakeup:
            return this.localPlayer.character.description.advance.makeup.lipstick.lipstickStyle;

          case Tab3Type.Tab3_FaceTattoo:
            break;

          case Tab3Type.Tab3_FullHair:
            return this.localPlayer.character.description.advance.hair.backHair.style;

          case Tab3Type.Tab3_FrontHair:
            return this.localPlayer.character.description.advance.hair.frontHair.style;

          case Tab3Type.Tab3_BackHair:
            return this.localPlayer.character.description.advance.hair.backHair.style;

          case Tab3Type.Tab3_LeftHand:
            let leftHand = this.getSlotAndDecoration(configId, mw.HumanoidSlotType.LeftHand);
            if (!leftHand) return null;
            let leftHandElement = GameConfig.LeftHand.findElement(`AssetId`, leftHand);
            if (!leftHandElement) return null;
            return leftHandElement.ID.toString();

          case Tab3Type.Tab3_RightHand:
            let rightHand = this.getSlotAndDecoration(configId, mw.HumanoidSlotType.RightHand);
            if (!rightHand) return null;
            let rightHandElement = GameConfig.RightHand.findElement(`AssetId`, rightHand);
            if (!rightHandElement) return null;
            return rightHandElement.ID.toString();

          case Tab3Type.Tab3_Back:
            let backOrnamental = this.getSlotAndDecoration(configId, mw.HumanoidSlotType.BackOrnamental);
            if (!backOrnamental) return null;
            let backElement = GameConfig.Back.findElement(`AssetId`, backOrnamental);
            if (!backElement) return null;
            return backElement.ID.toString();

          case Tab3Type.Tab3_Ear:
            let ear = this.getSlotAndDecoration(configId, mw.HumanoidSlotType.Head);
            if (!ear) return null;
            let earElement = GameConfig.Ear.findElement(`AssetId`, ear);
            if (!earElement) return null;
            return earElement.ID.toString();

          case Tab3Type.Tab3_Face:
            let face = this.getSlotAndDecoration(configId, mw.HumanoidSlotType.FaceOrnamental);
            if (!face) return null;
            let facingElement = GameConfig.Facing.findElement(`AssetId`, face);
            if (!facingElement) return null;
            return facingElement.ID.toString();

          case Tab3Type.Tab3_Hip:
            let hip = this.getSlotAndDecoration(configId, mw.HumanoidSlotType.Buttocks);
            if (!hip) return null;
            let hipElement = GameConfig.Hip.findElement(`AssetId`, hip);
            if (!hipElement) return null;
            return hipElement.ID.toString();

          case Tab3Type.Tab3_Shoulder:
            let shoulder = this.getSlotAndDecoration(configId, mw.HumanoidSlotType.RightBack);
            if (!shoulder) return null;
            let shoulderElement = GameConfig.Shoulder.findElement(`AssetId`, shoulder);
            if (!shoulderElement) return null;
            return shoulderElement.ID.toString();

          case Tab3Type.Tab3_Effects:
            let effect = this.getSlotAndDecoration(configId, mw.HumanoidSlotType.Root);
            if (!effect) return null;
            let effectsElement = GameConfig.Effects.findElement(`AssetId`, effect);
            if (!effectsElement) return null;
            return effectsElement.ID.toString();

          case Tab3Type.Tab3_Trailing:
            let trailing = this.getSlotAndDecoration(configId, mw.HumanoidSlotType.Root);
            if (!trailing) return null;
            let trailingElement = GameConfig.Trailings.findElement(`AssetId`, trailing);
            if (!trailingElement) return null;
            return trailingElement.ID.toString();

          case Tab2Type.Tab2_Pet:
            let pet = this.getSlotAndDecoration(configId, mw.HumanoidSlotType.Root);
            if (!pet) return null;
            let petElement = GameConfig.Pet.findElement(`AssetId`, pet);
            if (!petElement) return null;
            return petElement.ID.toString();

          default:
            return null;
        }
    }
    async initShopCamera() {
        let myCamera = Camera.currentCamera;
        let shopCamera = await GameObject.asyncSpawn(`Camera`);
        shopCamera.worldTransform.rotation = mw.Rotation.zero;
        this.onSwitchCameraAction.add((cameraType => {
            if (this.lastCameraType == cameraType) return;
            if (cameraType == 0) {
                Camera.switch(myCamera);
            } else if (cameraType == 1) {
                let rootLoc = this.localPlayer.character.getSlotWorldPosition(mw.HumanoidSlotType.Head);
                let offsetZ = this.localPlayer.character.collisionExtent.z;
                shopCamera.worldTransform.position = new mw.Vector(rootLoc.x - offsetZ / 2.8, rootLoc.y + offsetZ / 5.3, rootLoc.z + offsetZ / 16);
                Camera.switch(shopCamera, .5, mw.CameraSwitchBlendFunction.Linear);
            } else if (cameraType == 2) {
                let rootLoc = this.localPlayer.character.getSlotWorldPosition(mw.HumanoidSlotType.Head);
                let offsetZ = this.localPlayer.character.collisionExtent.z;
                shopCamera.worldTransform.position = new mw.Vector(rootLoc.x - offsetZ * 1.3, rootLoc.y + offsetZ / 1.6, rootLoc.z - offsetZ / 3);
                Camera.switch(shopCamera, .5, mw.CameraSwitchBlendFunction.Linear);
            }
            this.lastCameraType = cameraType;
        }));
    }
    addRoatation(dir) {
        if (!this.localPlayer || !this.localPlayer?.character || !this.localPlayer.character?.worldTransform) return;
        this.localPlayer.character.worldTransform.rotation = this.localPlayer.character.worldTransform.rotation.add(new mw.Rotation(0, 0, -(this.mallCharacterRotSpeed * dir)));
    }
    async initNpc() {
        this.maleNpc = await mw.GameObject.asyncFindGameObjectById(`2890EE8E`);
        this.feMaleNpc = await mw.GameObject.asyncFindGameObjectById(`230CF7F5`);
        this.transitionNpc = await mw.GameObject.asyncFindGameObjectById(`108D70EB`);
        this.copyNpc = await mw.GameObject.asyncFindGameObjectById(`24B62AFE`);
        await this.localPlayer.character.asyncReady();
        let somatotype = this.localPlayer.character.description.advance.base.characterSetting.somatotype;
        this.recordSex(somatotype);
        if (somatotype % 2 == 0) {
            await this.feMaleNpc.asyncReady();
            this.feMaleNpc.setDescription(this.localPlayer.character.getDescription());
        } else {
            await this.maleNpc.asyncReady();
            this.maleNpc.setDescription(this.localPlayer.character.getDescription());
        }
    }
    recordSex(somatotype) {
        this.saveSomatotype = somatotype;
    }
    async initTransitionNpc() {
        this.transitionNpc = await mw.GameObject.asyncSpawn(`Character`);
        await this.transitionNpc.asyncReady();
    }
    addOpenColorPickAction(tabType, tabId) {
        ExecutorManager.instance.pushAsyncExecutor((async () => {
            await this.localPlayer.character.asyncReady();
            this.copyNpc.setDescription(this.localPlayer.character.getDescription());
            await this.copyNpc.asyncReady();
            this.openColorPickPanel(tabId);
        }));
    }
    addSaveAction() {
        this.saveCharacterDescription();
    }
    saveCharacterDescription() {
        ExecutorManager.instance.pushAsyncExecutor((async () => {
            await this.localPlayer.character.asyncReady();
            let somatotype = this.localPlayer.character.description.advance.base.characterSetting.somatotype;
            this.recordSex(somatotype);
            if (somatotype % 2 == 0) {
                this.feMaleNpc.setDescription(this.localPlayer.character.getDescription());
                await this.feMaleNpc.asyncReady();
            } else {
                this.maleNpc.setDescription(this.localPlayer.character.getDescription());
                await this.maleNpc.asyncReady();
            }
            this.localPlayer.character.syncDescription();
            this.isNeedSaveCharacter = false;
            this.closeMallPanel();
            Notice.showDownNotice(GameConfig.Language.Text_SaveSuccessfully.Value);
        }));
    }
    addCloseAction() {
        if (this.isNeedSaveCharacter) {
            this.getMallTipsPanel.showTips((() => {
                this.isNeedSaveCharacter = false;
                this.saveCharacterDescription();
                this.closeMallPanel();
            }), (() => {
                this.isNeedSaveCharacter = false;
                this.recoverCharacter();
                this.closeMallPanel();
            }), GameConfig.Language.Text_CloseTips.Value, GameConfig.Language.Text_WhetherSaveImage.Value, GameConfig.Language.Text_NoSave.Value, GameConfig.Language.Text_Save.Value);
        } else {
            this.closeMallPanel();
        }
    }
    recoverCharacter() {
        ExecutorManager.instance.pushAsyncExecutor((async () => {
            this.getMallPanel.hide();
            this.onSwitchCameraAction.call(0);
            if (this.saveSomatotype % 2 == 0) {
                this.localPlayer.character.setDescription(this.feMaleNpc.getDescription());
            } else {
                this.localPlayer.character.setDescription(this.maleNpc.getDescription());
            }
            await this.localPlayer.character.asyncReady();
        }));
    }
    addResetAction() {
        ExecutorManager.instance.pushAsyncExecutor((async () => {
            let isSuccess = await Utils.accountServiceDownloadData(this.localPlayer.character);
            if (!isSuccess) {
                Notice.showDownNotice(GameConfig.Language.Text_ResetImageFaild.Value);
                return;
            }
            await this.localPlayer.character.asyncReady();
            let somatotype = this.localPlayer.character.description.advance.base.characterSetting.somatotype;
            this.initUsingCharacterData();
            if (mw.UIService.getUI(MallPanel, false)?.visible) this.getMallPanel.initMallPanel(somatotype, this.usingAssetIdMap);
            Notice.showDownNotice(GameConfig.Language.Text_ResetSuccessfully.Value);
        }));
    }
    addSexAction() {
        ExecutorManager.instance.pushAsyncExecutor((async () => {
            await this.localPlayer.character.asyncReady();
            let somatotype = this.localPlayer.character.description.advance.base.characterSetting.somatotype;
            if (somatotype % 2 == 0) {
                this.localPlayer.character.setDescription(this.maleNpc.getDescription());
            } else {
                this.localPlayer.character.setDescription(this.feMaleNpc.getDescription());
            }
            await this.localPlayer.character.asyncReady();
            somatotype = this.localPlayer.character.description.advance.base.characterSetting.somatotype;
            this.initUsingCharacterData();
            if (mw.UIService.getUI(MallPanel, false)?.visible) this.getMallPanel.initMallPanel(somatotype, this.usingAssetIdMap);
            Notice.showDownNotice(GameConfig.Language.Text_SwitchSuccessfully.Value);
        }));
    }
    openColorPickPanel(tabId) {
        this.colorPickTabId = tabId;
        this.colorPickTab2Index = 0;
        this.colorPickTab2Datas.length = 0;
        this.colorPickTab3Colors.length = 0;
        switch (tabId) {
          case Tab2Type.Tab2_SkinTone:
            this.openSkinToneColorPickPanel();
            break;

          case Tab2Type.Tab2_Eyebrows:
            this.openEyebrowsColorPickPanel();
            break;

          case Tab2Type.Tab2_Top:
          case Tab3Type.Tab3_LongSinglePiece_Top:
          case Tab3Type.Tab3_ShortJacket_Top:
          case Tab3Type.Tab3_ShortSinglePiece_Top:
          case Tab3Type.Tab3_Suit_Top:
          case Tab3Type.Tab3_ALongCoat_Top:
            this.openTopColorPickPanel();
            break;

          case Tab2Type.Tab2_Bottom:
          case Tab3Type.Tab3_ShortSkirt_Bottom:
          case Tab3Type.Tab3_LongPants_Bottom:
          case Tab3Type.Tab3_Shorts_Bottom:
          case Tab3Type.Tab3_LongSkirt_Bottom:
          case Tab3Type.Tab3_Tights_Bottom:
            this.openBottomColorPickPanel();
            break;

          case Tab2Type.Tab2_Shoes:
          case Tab3Type.Tab3_Everyday_Shoes:
          case Tab3Type.Tab3_Boots_Shoes:
          case Tab3Type.Tab3_FootCover_Shoes:
          case Tab3Type.Tab3_NakedDress_Shoes:
          case Tab3Type.Tab3_HighHeels_Shoes:
          case Tab3Type.Tab3_SportsShoes_Shoes:
            this.openShoesColorPickPanel();
            break;

          case Tab2Type.Tab2_Gloves:
          case Tab3Type.Tab3_Gloves_Gloves:
          case Tab3Type.Tab3_Accessories_Gloves:
            this.openGlovesColorPickPanel();
            break;

          case Tab3Type.Tab3_PupilStyle:
            this.openPupilStyleColorPickPanel();
            break;

          case Tab3Type.Tab3_Lens:
            this.openLensColorPickPanel();
            break;

          case Tab3Type.Tab3_UpperHighlight:
            this.openUpperHighlightColorPickPanel();
            break;

          case Tab3Type.Tab3_LowerHighlight:
            this.openLowerHighlightColorPickPanel();
            break;

          case Tab3Type.Tab3_Eyelashes:
            this.openEyelashesColorPickPanel();
            break;

          case Tab3Type.Tab3_Eyeshadow:
            this.openEyeshadowColorPickPanel();
            break;

          case Tab3Type.Tab3_Blush:
            this.openBlushColorPickPanel();
            break;

          case Tab3Type.Tab3_LipMakeup:
            this.openLipMakeupColorPickPanel();
            break;

          case Tab3Type.Tab3_FullHair:
            this.openFullHairColorPickPanel();
            break;

          case Tab3Type.Tab3_FrontHair:
            this.openFrontHairColorPickPanel();
            break;

          case Tab3Type.Tab3_BackHair:
            this.openBackHairColorPickPanel();
            break;
        }
    }
    addSelectColorPickTab2Action(index) {
        if (this.colorPickTab2Index == index) return;
        this.colorPickTab2Index = index;
        this.getColorPickPanel.checkColorPickTab3AndColorPick(this.colorPickTab2Datas[this.colorPickTab2Index].color);
    }
    addSelectColorPickTab3Action(index) {
        let color = mw.LinearColor.colorHexToLinearColor(this.colorPickTab3Colors[index]);
        this.getColorPickPanel.refreshColorPickTab2AndColorPick(color);
        this.changeCharacterColor(color);
    }
    openSkinToneColorPickPanel() {
        let name = GameConfig.Language.Text_Tab2_102.Value;
        let tab1Text = `${GameConfig.Language.Text_ColorPick.Value} - ${name}`;
        let colorPickTab2Data = new ColorPickTab2Data(name, this.localPlayer.character.description.advance.makeup.skinTone.skinColor);
        this.colorPickTab2Datas.push(colorPickTab2Data);
        GameConfig.ColorValue.getAllElement().forEach((value => {
            this.colorPickTab3Colors.push(value.SkinToneColor);
        }));
        this.getColorPickPanel.showColorPickPanel(tab1Text, name, this.colorPickTab2Datas, this.colorPickTab3Colors);
    }
    openEyebrowsColorPickPanel() {
        let name = GameConfig.Language.Text_Tab2_105.Value;
        let tab1Text = `${GameConfig.Language.Text_ColorPick.Value} - ${name}`;
        let eyebrows = this.localPlayer.character.description.advance.makeup.eyebrows;
        let eyebrowColor = mw.LinearColor.white;
        if (eyebrows?.eyebrowColor) eyebrowColor = eyebrows?.eyebrowColor;
        this.colorPickTab2Datas.push(new ColorPickTab2Data(name, eyebrowColor));
        GameConfig.ColorValue.getAllElement().forEach((value => {
            this.colorPickTab3Colors.push(value.EyebrowsColor);
        }));
        this.getColorPickPanel.showColorPickPanel(tab1Text, name, this.colorPickTab2Datas, this.colorPickTab3Colors);
    }
    openTopColorPickPanel() {
        let name = GameConfig.Language.Text_Tab2_110.Value;
        let tab1Text = `${GameConfig.Language.Text_ColorPick.Value} - ${name}`;
        let part = this.localPlayer.character.description.advance.clothing.upperCloth?.part;
        if (!part || part.length == 0) {
            Notice.showDownNotice(StringUtil.format(GameConfig.Language.Text_NotSupportToning.Value, name));
            return;
        }
        for (let i = 0; i < part.length; ++i) {
            let color = mw.LinearColor.white;
            if (part[i]?.color?.areaColor) color = part[i]?.color?.areaColor;
            this.colorPickTab2Datas.push(new ColorPickTab2Data(StringUtil.format(GameConfig.Language.Text_ColorPart.Value, i + 1), color));
        }
        if (!this.colorPickTab2Datas || this.colorPickTab2Datas.length == 0) {
            Notice.showDownNotice(StringUtil.format(GameConfig.Language.Text_NotSupportToning.Value, name));
            return;
        }
        GameConfig.ColorValue.getAllElement().forEach((value => {
            this.colorPickTab3Colors.push(value.TopColor);
        }));
        this.getColorPickPanel.showColorPickPanel(tab1Text, name, this.colorPickTab2Datas, this.colorPickTab3Colors);
    }
    openBottomColorPickPanel() {
        let name = GameConfig.Language.Text_Tab2_111.Value;
        let tab1Text = `${GameConfig.Language.Text_ColorPick.Value} - ${name}`;
        let part = this.localPlayer.character.description.advance.clothing.lowerCloth?.part;
        if (!part || part.length == 0) {
            Notice.showDownNotice(StringUtil.format(GameConfig.Language.Text_NotSupportToning.Value, name));
            return;
        }
        for (let i = 0; i < part.length; ++i) {
            let color = mw.LinearColor.white;
            if (part[i]?.color?.areaColor) color = part[i]?.color?.areaColor;
            this.colorPickTab2Datas.push(new ColorPickTab2Data(StringUtil.format(GameConfig.Language.Text_ColorPart.Value, i + 1), color));
        }
        if (!this.colorPickTab2Datas || this.colorPickTab2Datas.length == 0) {
            Notice.showDownNotice(StringUtil.format(GameConfig.Language.Text_NotSupportToning.Value, name));
            return;
        }
        GameConfig.ColorValue.getAllElement().forEach((value => {
            this.colorPickTab3Colors.push(value.BottomColor);
        }));
        this.getColorPickPanel.showColorPickPanel(tab1Text, name, this.colorPickTab2Datas, this.colorPickTab3Colors);
    }
    openShoesColorPickPanel() {
        let name = GameConfig.Language.Text_Tab2_112.Value;
        let tab1Text = `${GameConfig.Language.Text_ColorPick.Value} - ${name}`;
        let part = this.localPlayer.character.description.advance.clothing.shoes?.part;
        if (!part || part.length == 0) {
            Notice.showDownNotice(StringUtil.format(GameConfig.Language.Text_NotSupportToning.Value, name));
            return;
        }
        for (let i = 0; i < part.length; ++i) {
            let color = mw.LinearColor.white;
            if (part[i]?.color?.areaColor) color = part[i]?.color?.areaColor;
            this.colorPickTab2Datas.push(new ColorPickTab2Data(StringUtil.format(GameConfig.Language.Text_ColorPart.Value, i + 1), color));
        }
        if (!this.colorPickTab2Datas || this.colorPickTab2Datas.length == 0) {
            Notice.showDownNotice(StringUtil.format(GameConfig.Language.Text_NotSupportToning.Value, name));
            return;
        }
        GameConfig.ColorValue.getAllElement().forEach((value => {
            this.colorPickTab3Colors.push(value.ShoeColor);
        }));
        this.getColorPickPanel.showColorPickPanel(tab1Text, name, this.colorPickTab2Datas, this.colorPickTab3Colors);
    }
    openGlovesColorPickPanel() {
        let name = GameConfig.Language.Text_Tab2_113.Value;
        let tab1Text = `${GameConfig.Language.Text_ColorPick.Value} - ${name}`;
        let part = this.localPlayer.character.description.advance.clothing.gloves?.part;
        if (!part || part.length == 0) {
            Notice.showDownNotice(StringUtil.format(GameConfig.Language.Text_NotSupportToning.Value, name));
            return;
        }
        for (let i = 0; i < part.length; ++i) {
            let color = mw.LinearColor.white;
            if (part[i]?.color?.areaColor) color = part[i]?.color?.areaColor;
            this.colorPickTab2Datas.push(new ColorPickTab2Data(StringUtil.format(GameConfig.Language.Text_ColorPart.Value, i + 1), color));
        }
        if (!this.colorPickTab2Datas || this.colorPickTab2Datas.length == 0) {
            Notice.showDownNotice(StringUtil.format(GameConfig.Language.Text_NotSupportToning.Value, name));
            return;
        }
        GameConfig.ColorValue.getAllElement().forEach((value => {
            this.colorPickTab3Colors.push(value.GloveColor);
        }));
        this.getColorPickPanel.showColorPickPanel(tab1Text, name, this.colorPickTab2Datas, this.colorPickTab3Colors);
    }
    openPupilStyleColorPickPanel() {
        let name = GameConfig.Language.Text_Tab3_1001.Value;
        let tab1Text = `${GameConfig.Language.Text_ColorPick.Value} - ${name}`;
        let coloredContactsStyle = this.localPlayer.character.description.advance.makeup.coloredContacts.style;
        if (!coloredContactsStyle || !coloredContactsStyle?.pupilStyle) {
            Notice.showDownNotice(StringUtil.format(GameConfig.Language.Text_NotSupportToning.Value, name));
            return;
        }
        let pupilColor = mw.LinearColor.white;
        if (coloredContactsStyle?.leftPupilColor) pupilColor = coloredContactsStyle?.leftPupilColor;
        this.colorPickTab2Datas.push(new ColorPickTab2Data(GameConfig.Language.Text_PupilColor.Value, pupilColor));
        let leftPupilColor = mw.LinearColor.white;
        if (coloredContactsStyle?.leftPupilColor) leftPupilColor = coloredContactsStyle?.leftPupilColor;
        this.colorPickTab2Datas.push(new ColorPickTab2Data(GameConfig.Language.Text_LeftPupilColor.Value, leftPupilColor));
        let rightPupilColor = mw.LinearColor.white;
        if (coloredContactsStyle?.rightPupilColor) rightPupilColor = coloredContactsStyle?.rightPupilColor;
        this.colorPickTab2Datas.push(new ColorPickTab2Data(GameConfig.Language.Text_RightPupilColor.Value, rightPupilColor));
        if (!this.colorPickTab2Datas || this.colorPickTab2Datas.length == 0) {
            Notice.showDownNotice(StringUtil.format(GameConfig.Language.Text_NotSupportToning.Value, name));
            return;
        }
        GameConfig.ColorValue.getAllElement().forEach((value => {
            this.colorPickTab3Colors.push(value.PupilStyleColor);
        }));
        this.getColorPickPanel.showColorPickPanel(tab1Text, name, this.colorPickTab2Datas, this.colorPickTab3Colors);
    }
    openLensColorPickPanel() {
        let name = GameConfig.Language.Text_Tab3_1002.Value;
        let tab1Text = `${GameConfig.Language.Text_ColorPick.Value} - ${name}`;
        let coloredContactsDecal = this.localPlayer.character.description.advance.makeup.coloredContacts.decal;
        if (!coloredContactsDecal || !coloredContactsDecal?.pupilStyle) {
            Notice.showDownNotice(StringUtil.format(GameConfig.Language.Text_NotSupportToning.Value, name));
            return;
        }
        let decalPupilColor = mw.LinearColor.white;
        if (coloredContactsDecal?.pupilColor) decalPupilColor = coloredContactsDecal?.pupilColor;
        this.colorPickTab2Datas.push(new ColorPickTab2Data(GameConfig.Language.Text_DecalColor.Value, decalPupilColor));
        if (!this.colorPickTab2Datas || this.colorPickTab2Datas.length == 0) {
            Notice.showDownNotice(StringUtil.format(GameConfig.Language.Text_NotSupportToning.Value, name));
            return;
        }
        GameConfig.ColorValue.getAllElement().forEach((value => {
            this.colorPickTab3Colors.push(value.PupilStyleColor);
        }));
        this.getColorPickPanel.showColorPickPanel(tab1Text, name, this.colorPickTab2Datas, this.colorPickTab3Colors);
    }
    openUpperHighlightColorPickPanel() {
        let name = GameConfig.Language.Text_Tab3_1003.Value;
        let tab1Text = `${GameConfig.Language.Text_ColorPick.Value} - ${name}`;
        let highlight = this.localPlayer.character.description.advance.makeup.coloredContacts.highlight;
        if (!highlight || !highlight?.upperHighlightStyle) {
            Notice.showDownNotice(StringUtil.format(GameConfig.Language.Text_NotSupportToning.Value, name));
            return;
        }
        let upperHighlightColor = mw.LinearColor.white;
        if (highlight?.upperHighlightColor) upperHighlightColor = highlight?.upperHighlightColor;
        this.colorPickTab2Datas.push(new ColorPickTab2Data(GameConfig.Language.Text_UpperHighlightColor.Value, upperHighlightColor));
        if (!this.colorPickTab2Datas || this.colorPickTab2Datas.length == 0) {
            Notice.showDownNotice(StringUtil.format(GameConfig.Language.Text_NotSupportToning.Value, name));
            return;
        }
        GameConfig.ColorValue.getAllElement().forEach((value => {
            this.colorPickTab3Colors.push(value.PupilStyleColor);
        }));
        this.getColorPickPanel.showColorPickPanel(tab1Text, name, this.colorPickTab2Datas, this.colorPickTab3Colors);
    }
    openLowerHighlightColorPickPanel() {
        let name = GameConfig.Language.Text_Tab3_1004.Value;
        let tab1Text = `${GameConfig.Language.Text_ColorPick.Value} - ${name}`;
        let highlight = this.localPlayer.character.description.advance.makeup.coloredContacts.highlight;
        if (!highlight || !highlight?.lowerHighlightStyle) {
            Notice.showDownNotice(StringUtil.format(GameConfig.Language.Text_NotSupportToning.Value, name));
            return;
        }
        let lowerHighlightColor = mw.LinearColor.white;
        if (highlight?.lowerHighlightColor) lowerHighlightColor = highlight?.lowerHighlightColor;
        this.colorPickTab2Datas.push(new ColorPickTab2Data(GameConfig.Language.Text_LowerHighlightColor.Value, lowerHighlightColor));
        if (!this.colorPickTab2Datas || this.colorPickTab2Datas.length == 0) {
            Notice.showDownNotice(StringUtil.format(GameConfig.Language.Text_NotSupportToning.Value, name));
            return;
        }
        GameConfig.ColorValue.getAllElement().forEach((value => {
            this.colorPickTab3Colors.push(value.PupilStyleColor);
        }));
        this.getColorPickPanel.showColorPickPanel(tab1Text, name, this.colorPickTab2Datas, this.colorPickTab3Colors);
    }
    openEyelashesColorPickPanel() {
        let name = GameConfig.Language.Text_Tab3_1005.Value;
        let tab1Text = `${GameConfig.Language.Text_ColorPick.Value} - ${name}`;
        let eyelashes = this.localPlayer.character.description.advance.makeup.eyelashes;
        if (!eyelashes || !eyelashes?.eyelashStyle) {
            Notice.showDownNotice(StringUtil.format(GameConfig.Language.Text_NotSupportToning.Value, name));
            return;
        }
        let eyelashColor = mw.LinearColor.white;
        if (eyelashes?.eyelashColor) eyelashColor = eyelashes?.eyelashColor;
        this.colorPickTab2Datas.push(new ColorPickTab2Data(GameConfig.Language.Text_EyelashColor.Value, eyelashColor));
        if (!this.colorPickTab2Datas || this.colorPickTab2Datas.length == 0) {
            Notice.showDownNotice(StringUtil.format(GameConfig.Language.Text_NotSupportToning.Value, name));
            return;
        }
        GameConfig.ColorValue.getAllElement().forEach((value => {
            this.colorPickTab3Colors.push(value.EyeLashColor);
        }));
        this.getColorPickPanel.showColorPickPanel(tab1Text, name, this.colorPickTab2Datas, this.colorPickTab3Colors);
    }
    openEyeshadowColorPickPanel() {
        let name = GameConfig.Language.Text_Tab3_1006.Value;
        let tab1Text = `${GameConfig.Language.Text_ColorPick.Value} - ${name}`;
        let eyeShadow = this.localPlayer.character.description.advance.makeup.eyeShadow;
        if (!eyeShadow || !eyeShadow?.eyeshadowStyle) {
            Notice.showDownNotice(StringUtil.format(GameConfig.Language.Text_NotSupportToning.Value, name));
            return;
        }
        let eyeshaowColor = mw.LinearColor.white;
        if (eyeShadow?.eyeshaowColor) eyeshaowColor = eyeShadow?.eyeshaowColor;
        this.colorPickTab2Datas.push(new ColorPickTab2Data(GameConfig.Language.Text_EyeshaowColor.Value, eyeshaowColor));
        if (!this.colorPickTab2Datas || this.colorPickTab2Datas.length == 0) {
            Notice.showDownNotice(StringUtil.format(GameConfig.Language.Text_NotSupportToning.Value, name));
            return;
        }
        GameConfig.ColorValue.getAllElement().forEach((value => {
            this.colorPickTab3Colors.push(value.EyeShadow);
        }));
        this.getColorPickPanel.showColorPickPanel(tab1Text, name, this.colorPickTab2Datas, this.colorPickTab3Colors);
    }
    openBlushColorPickPanel() {
        let name = GameConfig.Language.Text_Tab3_1007.Value;
        let tab1Text = `${GameConfig.Language.Text_ColorPick.Value} - ${name}`;
        let blush = this.localPlayer.character.description.advance.makeup.blush;
        if (!blush || !blush?.blushStyle) {
            Notice.showDownNotice(StringUtil.format(GameConfig.Language.Text_NotSupportToning.Value, name));
            return;
        }
        let blushColor = mw.LinearColor.white;
        if (blush?.blushColor) blushColor = blush?.blushColor;
        this.colorPickTab2Datas.push(new ColorPickTab2Data(GameConfig.Language.Text_BlushColor.Value, blushColor));
        if (!this.colorPickTab2Datas || this.colorPickTab2Datas.length == 0) {
            Notice.showDownNotice(StringUtil.format(GameConfig.Language.Text_NotSupportToning.Value, name));
            return;
        }
        GameConfig.ColorValue.getAllElement().forEach((value => {
            this.colorPickTab3Colors.push(value.BlushColor);
        }));
        this.getColorPickPanel.showColorPickPanel(tab1Text, name, this.colorPickTab2Datas, this.colorPickTab3Colors);
    }
    openLipMakeupColorPickPanel() {
        let name = GameConfig.Language.Text_Tab3_1008.Value;
        let tab1Text = `${GameConfig.Language.Text_ColorPick.Value} - ${name}`;
        let lipstick = this.localPlayer.character.description.advance.makeup.lipstick;
        if (!lipstick || !lipstick?.lipstickStyle) {
            Notice.showDownNotice(StringUtil.format(GameConfig.Language.Text_NotSupportToning.Value, name));
            return;
        }
        let lipstickColor = mw.LinearColor.white;
        if (lipstick?.lipstickColor) lipstickColor = lipstick?.lipstickColor;
        this.colorPickTab2Datas.push(new ColorPickTab2Data(GameConfig.Language.Text_LipstickColor.Value, lipstickColor));
        if (!this.colorPickTab2Datas || this.colorPickTab2Datas.length == 0) {
            Notice.showDownNotice(StringUtil.format(GameConfig.Language.Text_NotSupportToning.Value, name));
            return;
        }
        GameConfig.ColorValue.getAllElement().forEach((value => {
            this.colorPickTab3Colors.push(value.LipstickColor);
        }));
        this.getColorPickPanel.showColorPickPanel(tab1Text, name, this.colorPickTab2Datas, this.colorPickTab3Colors);
    }
    openFullHairColorPickPanel() {
        let name = GameConfig.Language.Text_Tab3_1010.Value;
        let tab1Text = `${GameConfig.Language.Text_ColorPick.Value} - ${name}`;
        let hairColor = this.localPlayer.character.description.advance.hair.backHair.color;
        if (!hairColor) {
            Notice.showDownNotice(StringUtil.format(GameConfig.Language.Text_NotSupportToning.Value, name));
            return;
        }
        if (hairColor?.color && hairColor?.gradientColor) {
            this.colorPickTab2Datas.push(new ColorPickTab2Data(GameConfig.Language.Text_Monochrome.Value, hairColor?.color));
        }
        if (hairColor?.color) {
            this.colorPickTab2Datas.push(new ColorPickTab2Data(GameConfig.Language.Text_TopColor.Value, hairColor?.color));
        }
        if (hairColor?.gradientColor) {
            this.colorPickTab2Datas.push(new ColorPickTab2Data(GameConfig.Language.Text_TailColor.Value, hairColor?.gradientColor));
        }
        if (!this.colorPickTab2Datas || this.colorPickTab2Datas.length == 0) {
            Notice.showDownNotice(StringUtil.format(GameConfig.Language.Text_NotSupportToning.Value, name));
            return;
        }
        GameConfig.ColorValue.getAllElement().forEach((value => {
            this.colorPickTab3Colors.push(value.HairColor);
        }));
        this.getColorPickPanel.showColorPickPanel(tab1Text, name, this.colorPickTab2Datas, this.colorPickTab3Colors);
    }
    openFrontHairColorPickPanel() {
        let name = GameConfig.Language.Text_Tab3_1011.Value;
        let tab1Text = `${GameConfig.Language.Text_ColorPick.Value} - ${name}`;
        let hairColor = this.localPlayer.character.description.advance.hair.frontHair.color;
        if (!hairColor) {
            Notice.showDownNotice(StringUtil.format(GameConfig.Language.Text_NotSupportToning.Value, name));
            return;
        }
        if (hairColor?.color && hairColor?.gradientColor) {
            this.colorPickTab2Datas.push(new ColorPickTab2Data(GameConfig.Language.Text_Monochrome.Value, hairColor?.color));
        }
        if (hairColor?.color) {
            this.colorPickTab2Datas.push(new ColorPickTab2Data(GameConfig.Language.Text_TopColor.Value, hairColor?.color));
        }
        if (hairColor?.gradientColor) {
            this.colorPickTab2Datas.push(new ColorPickTab2Data(GameConfig.Language.Text_TailColor.Value, hairColor?.gradientColor));
        }
        if (!this.colorPickTab2Datas || this.colorPickTab2Datas.length == 0) {
            Notice.showDownNotice(StringUtil.format(GameConfig.Language.Text_NotSupportToning.Value, name));
            return;
        }
        GameConfig.ColorValue.getAllElement().forEach((value => {
            this.colorPickTab3Colors.push(value.HairColor);
        }));
        this.getColorPickPanel.showColorPickPanel(tab1Text, name, this.colorPickTab2Datas, this.colorPickTab3Colors);
    }
    openBackHairColorPickPanel() {
        let name = GameConfig.Language.Text_Tab3_1012.Value;
        let tab1Text = `${GameConfig.Language.Text_ColorPick.Value} - ${name}`;
        let hairColor = this.localPlayer.character.description.advance.hair.backHair.color;
        if (!hairColor) {
            Notice.showDownNotice(StringUtil.format(GameConfig.Language.Text_NotSupportToning.Value, name));
            return;
        }
        if (hairColor?.color && hairColor?.gradientColor) {
            this.colorPickTab2Datas.push(new ColorPickTab2Data(GameConfig.Language.Text_Monochrome.Value, hairColor?.color));
        }
        if (hairColor?.color) {
            this.colorPickTab2Datas.push(new ColorPickTab2Data(GameConfig.Language.Text_TopColor.Value, hairColor?.color));
        }
        if (hairColor?.gradientColor) {
            this.colorPickTab2Datas.push(new ColorPickTab2Data(GameConfig.Language.Text_TailColor.Value, hairColor?.gradientColor));
        }
        if (!this.colorPickTab2Datas || this.colorPickTab2Datas.length == 0) {
            Notice.showDownNotice(StringUtil.format(GameConfig.Language.Text_NotSupportToning.Value, name));
            return;
        }
        GameConfig.ColorValue.getAllElement().forEach((value => {
            this.colorPickTab3Colors.push(value.HairColor);
        }));
        this.getColorPickPanel.showColorPickPanel(tab1Text, name, this.colorPickTab2Datas, this.colorPickTab3Colors);
    }
    changeCharacterColor(color) {
        switch (this.colorPickTabId) {
          case Tab2Type.Tab2_SkinTone:
            this.localPlayer.character.description.advance.makeup.skinTone.skinColor = color;
            break;

          case Tab2Type.Tab2_Eyebrows:
            this.localPlayer.character.description.advance.makeup.eyebrows.eyebrowColor = color;
            break;

          case Tab2Type.Tab2_Top:
          case Tab3Type.Tab3_LongSinglePiece_Top:
          case Tab3Type.Tab3_ShortJacket_Top:
          case Tab3Type.Tab3_ShortSinglePiece_Top:
          case Tab3Type.Tab3_Suit_Top:
          case Tab3Type.Tab3_ALongCoat_Top:
            this.localPlayer.character.description.advance.clothing.upperCloth.part[this.colorPickTab2Index].color.areaColor = color;
            break;

          case Tab2Type.Tab2_Bottom:
          case Tab3Type.Tab3_ShortSkirt_Bottom:
          case Tab3Type.Tab3_LongPants_Bottom:
          case Tab3Type.Tab3_Shorts_Bottom:
          case Tab3Type.Tab3_LongSkirt_Bottom:
          case Tab3Type.Tab3_Tights_Bottom:
            this.localPlayer.character.description.advance.clothing.lowerCloth.part[this.colorPickTab2Index].color.areaColor = color;
            break;

          case Tab2Type.Tab2_Shoes:
          case Tab3Type.Tab3_Everyday_Shoes:
          case Tab3Type.Tab3_Boots_Shoes:
          case Tab3Type.Tab3_FootCover_Shoes:
          case Tab3Type.Tab3_NakedDress_Shoes:
          case Tab3Type.Tab3_HighHeels_Shoes:
          case Tab3Type.Tab3_SportsShoes_Shoes:
            this.localPlayer.character.description.advance.clothing.shoes.part[this.colorPickTab2Index].color.areaColor = color;
            break;

          case Tab2Type.Tab2_Gloves:
          case Tab3Type.Tab3_Gloves_Gloves:
          case Tab3Type.Tab3_Accessories_Gloves:
            this.localPlayer.character.description.advance.clothing.gloves.part[this.colorPickTab2Index].color.areaColor = color;
            break;

          case Tab3Type.Tab3_PupilStyle:
            switch (this.colorPickTab2Index) {
              case 0:
                this.localPlayer.character.description.advance.makeup.coloredContacts.style.leftPupilColor = color;
                this.localPlayer.character.description.advance.makeup.coloredContacts.style.rightPupilColor = color;
                break;

              case 1:
                this.localPlayer.character.description.advance.makeup.coloredContacts.style.leftPupilColor = color;
                break;

              case 2:
                this.localPlayer.character.description.advance.makeup.coloredContacts.style.rightPupilColor = color;
                break;
            }
            break;

          case Tab3Type.Tab3_Lens:
            this.localPlayer.character.description.advance.makeup.coloredContacts.decal.pupilColor = color;
            break;

          case Tab3Type.Tab3_UpperHighlight:
            this.localPlayer.character.description.advance.makeup.coloredContacts.highlight.upperHighlightColor = color;
            break;

          case Tab3Type.Tab3_LowerHighlight:
            this.localPlayer.character.description.advance.makeup.coloredContacts.highlight.lowerHighlightColor = color;
            break;

          case Tab3Type.Tab3_Eyelashes:
            this.localPlayer.character.description.advance.makeup.eyelashes.eyelashColor = color;
            break;

          case Tab3Type.Tab3_Eyeshadow:
            this.localPlayer.character.description.advance.makeup.eyeShadow.eyeshaowColor = color;
            break;

          case Tab3Type.Tab3_Blush:
            this.localPlayer.character.description.advance.makeup.blush.blushColor = color;
            break;

          case Tab3Type.Tab3_LipMakeup:
            this.localPlayer.character.description.advance.makeup.lipstick.lipstickColor = color;
            break;

          case Tab3Type.Tab3_FullHair:
            switch (this.colorPickTab2Index) {
              case 0:
                this.localPlayer.character.description.advance.hair.backHair.color.color = color;
                this.localPlayer.character.description.advance.hair.backHair.color.gradientColor = color;
                break;

              case 1:
                this.localPlayer.character.description.advance.hair.backHair.color.color = color;
                break;

              case 2:
                this.localPlayer.character.description.advance.hair.backHair.color.gradientColor = color;
                break;
            }
            break;

          case Tab3Type.Tab3_FrontHair:
            switch (this.colorPickTab2Index) {
              case 0:
                this.localPlayer.character.description.advance.hair.frontHair.color.color = color;
                this.localPlayer.character.description.advance.hair.frontHair.color.gradientColor = color;
                break;

              case 1:
                this.localPlayer.character.description.advance.hair.frontHair.color.color = color;
                break;

              case 2:
                this.localPlayer.character.description.advance.hair.frontHair.color.gradientColor = color;
                break;
            }
            break;

          case Tab3Type.Tab3_BackHair:
            switch (this.colorPickTab2Index) {
              case 0:
                this.localPlayer.character.description.advance.hair.backHair.color.color = color;
                this.localPlayer.character.description.advance.hair.backHair.color.gradientColor = color;
                break;

              case 1:
                this.localPlayer.character.description.advance.hair.backHair.color.color = color;
                break;

              case 2:
                this.localPlayer.character.description.advance.hair.backHair.color.gradientColor = color;
                break;
            }
            break;
        }
        this.isNeedSaveColor = true;
        this.isNeedSaveCharacter = true;
    }
}

var foreign104 = Object.freeze({
    __proto__: null,
    default: MallModuleC
});

class MallModuleS extends ModuleS {
    onStart() {}
}

var foreign105 = Object.freeze({
    __proto__: null,
    default: MallModuleS
});

class MorphModuleC extends ModuleC {
    constructor() {
        super(...arguments);
        this.hudModuleC = null;
        this.isMorph = false;
        this.isComplete = false;
    }
    get getHUDModuleC() {
        if (this.hudModuleC == null) {
            this.hudModuleC = ModuleService.getModule(HUDModuleC);
        }
        return this.hudModuleC;
    }
    onStart() {
        InputUtil.onKeyDown(mw.Keys.Z, (() => {
            this.morph();
        }));
        InputUtil.onKeyDown(mw.Keys.X, (() => {
            this.unmorph();
        }));
        this.initAction();
    }
    initAction() {
        this.getHUDModuleC.onMorphAction.add(this.addMorphAction.bind(this));
    }
    get getIsMorph() {
        return this.isMorph;
    }
    addMorphAction(isMorph) {
        this.isMorph = isMorph;
        this.isMorph ? this.morph() : this.unmorph();
    }
    async morph() {
        if (this.isComplete) {
            Notice.showDownNotice("点的太快啦");
            return;
        }
        this.isComplete = true;
        await this.server.net_morph();
        TimeUtil.delaySecond(1).then((() => {
            this.isComplete = false;
        }));
    }
    unmorph() {
        this.server.net_unmorph();
    }
}

class MorphModuleS extends ModuleS {
    constructor() {
        super(...arguments);
        this.gunModuleS = null;
        this.playerGoMap = new Map;
    }
    get getGunModuleS() {
        if (this.gunModuleS == null) {
            this.gunModuleS = ModuleService.getModule(GunModuleS);
        }
        return this.gunModuleS;
    }
    onStart() {}
    onPlayerLeft(player) {
        let userId = player.userId;
        this.recycleGo(userId);
    }
    async net_morph() {
        await this.morph(this.currentPlayer);
    }
    async morph(player) {
        if (!player) return;
        if (player.character.getVisibility()) player.character.setVisibility(false, true);
        let userId = player.userId;
        this.recycleGo(userId);
        this.playEffectSound(player);
        await this.spawnGo(player);
    }
    async spawnGo(player) {
        let randomId = Utils.randomInt(1, GameConfig.Morph.getAllElement().length);
        let morphElement = GameConfig.Morph.getElement(randomId);
        await Utils.asyncDownloadAsset(morphElement.AssetId);
        let tmpGo = await GameObjPool.asyncSpawn(morphElement.AssetId);
        await tmpGo.asyncReady();
        tmpGo.setCollision(mw.PropertyStatus.Off);
        player.character.attachToSlot(tmpGo, mw.HumanoidSlotType.Root);
        tmpGo.localTransform.position = new mw.Vector(0, 0, tmpGo.getBoundingBox().z / 2);
        tmpGo.localTransform.rotation = new mw.Rotation(morphElement.OffsetRot);
        this.playerGoMap.set(player.userId, tmpGo);
    }
    net_unmorph() {
        this.unmorph(this.currentPlayer);
    }
    async unmorph(player) {
        if (!player) return;
        let userId = player.userId;
        this.recycleGo(userId);
        this.playEffectSound(player);
        if (!player.character.getVisibility()) player.character.setVisibility(true, true);
        this.getGunModuleS.setGunState(player.userId, true);
    }
    recycleGo(userId) {
        if (this.playerGoMap.has(userId)) {
            GameObjPool.despawn(this.playerGoMap.get(userId));
            this.playerGoMap.delete(userId);
        }
    }
    playEffectSound(player) {
        EffectService.playOnGameObject("153045", player.character, {
            slotType: mw.HumanoidSlotType.Root,
            scale: mw.Vector.one.multiply(3)
        });
        SoundService.play3DSound("47427", player.character);
    }
}

__decorate([ Decorator.noReply() ], MorphModuleS.prototype, "net_unmorph", null);

var foreign119 = Object.freeze({
    __proto__: null,
    MorphModuleC: MorphModuleC,
    MorphModuleS: MorphModuleS
});

class PlayerStatus {
    constructor() {
        this.isDead = false;
        this.hp = 100;
        this.maxHp = 100;
    }
}

class PlayerData extends Subdata {
    constructor() {
        super(...arguments);
        this.killCount = 0;
        this.dieCount = 0;
    }
    initDefaultData() {
        this.killCount = 0;
        this.dieCount = 0;
    }
    setKillCount(value) {
        this.killCount += value;
        this.save(true);
    }
    setDieCount(value) {
        this.dieCount += value;
        this.save(true);
    }
}

__decorate([ Decorator.persistence() ], PlayerData.prototype, "killCount", void 0);

__decorate([ Decorator.persistence() ], PlayerData.prototype, "dieCount", void 0);

var foreign122 = Object.freeze({
    __proto__: null,
    PlayerStatus: PlayerStatus,
    default: PlayerData
});

class FlyText {
    constructor() {
        this._uiWidget = null;
        this._rootCanvas = null;
        this._textPools = [];
        this._defaultTextSize = new Vector2(200, 100);
        this._defaultFontColor = LinearColor.white;
        this._defaultOutlineColor = new mw.LinearColor(1, 0, 1, 1);
    }
    static get instance() {
        if (FlyText._instance == null) {
            FlyText._instance = new FlyText;
        }
        return FlyText._instance;
    }
    showFlyText(content, worldLocation, fontColor, outlineColor) {
        let vec2 = mw.InputUtil.projectWorldPositionToWidgetPosition(worldLocation, true).screenPosition;
        let textBlock = null;
        if (this._textPools.length == 0) {
            textBlock = this.createText();
        } else {
            textBlock = this._textPools.pop();
        }
        vec2.x -= 120;
        vec2.y -= 160;
        let toX = this.getRandomIntInclusive(100, 300);
        Math.random() < .5 ? toX = -toX : toX = toX;
        let toY = this.getRandomIntInclusive(-300, 100);
        let animator = new mw.Tween({
            a: 0
        }).to({
            a: Math.PI
        }, 1e3).onUpdate((object => {
            textBlock.position = vec2.clone().add(new mw.Vector2(toX * object.a / Math.PI, toY * Math.sin(object.a)));
            textBlock.renderScale = new mw.Vector2(Math.sin(object.a));
        })).onStart((() => {
            textBlock.fontColor = fontColor ? fontColor : this._defaultFontColor;
            textBlock.outlineColor = outlineColor ? outlineColor : this._defaultOutlineColor;
            textBlock.text = content;
            textBlock.visibility = mw.SlateVisibility.SelfHitTestInvisible;
        })).onComplete((() => {
            textBlock.visibility = mw.SlateVisibility.Hidden;
            this._textPools.push(textBlock);
        }));
        animator.start();
    }
    createText() {
        if (!this._uiWidget) {
            this._uiWidget = mw.UserWidget.newObject();
            this._uiWidget.addToViewport(1);
            if (!this._rootCanvas) {
                this._rootCanvas = mw.Canvas.newObject();
                this._rootCanvas.size = new mw.Vector2(1920, 1080);
                this._rootCanvas.position = mw.Vector2.zero;
                this._uiWidget.rootContent = this._rootCanvas;
            }
        }
        let textBlock = mw.TextBlock.newObject(this._rootCanvas);
        textBlock.size = this._defaultTextSize;
        textBlock.fontSize = 30;
        textBlock.fontLetterSpace = 1;
        textBlock.textHorizontalLayout = mw.UITextHorizontalLayout.NoClipping;
        textBlock.autoAdjust = false;
        textBlock.outlineSize = 4;
        textBlock.glyph = mw.UIFontGlyph.Light;
        return textBlock;
    }
    getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

var foreign150 = Object.freeze({
    __proto__: null,
    FlyText: FlyText
});

class RoomData {
    constructor(userId, name, killCount, dieCount) {
        this.userId = "";
        this.playerName = "";
        this.killCount = 0;
        this.dieCount = 0;
        this.userId = userId;
        this.playerName = name;
        this.killCount = killCount;
        this.dieCount = dieCount;
    }
    setData(userId, name, killCount, dieCount) {
        this.userId = userId;
        this.playerName = name;
        this.killCount = killCount;
        this.dieCount = dieCount;
    }
}

class WorldData {
    constructor(userId, name, killCount, dieCount) {
        this.userId = "";
        this.playerName = "";
        this.killCount = 0;
        this.dieCount = 0;
        this.userId = userId;
        this.playerName = name;
        this.killCount = killCount;
        this.dieCount = dieCount;
    }
    setData(userId, name, killCount, dieCount) {
        this.userId = userId;
        this.playerName = name;
        this.killCount = killCount;
        this.dieCount = dieCount;
    }
}

var foreign129 = Object.freeze({
    __proto__: null,
    RoomData: RoomData,
    WorldData: WorldData
});

let RankPanel_Generate = class RankPanel_Generate extends UIScript {
    get mRoomCanvas() {
        if (!this.mRoomCanvas_Internal && this.uiWidgetBase) {
            this.mRoomCanvas_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mRoomCanvas");
        }
        return this.mRoomCanvas_Internal;
    }
    get mRedRoomContentCanvas() {
        if (!this.mRedRoomContentCanvas_Internal && this.uiWidgetBase) {
            this.mRedRoomContentCanvas_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mRoomCanvas/mRedRoomContentCanvas");
        }
        return this.mRedRoomContentCanvas_Internal;
    }
    get mBlueRoomContnetCanvas() {
        if (!this.mBlueRoomContnetCanvas_Internal && this.uiWidgetBase) {
            this.mBlueRoomContnetCanvas_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mRoomCanvas/mBlueRoomContnetCanvas");
        }
        return this.mBlueRoomContnetCanvas_Internal;
    }
    get mWorldCanvas() {
        if (!this.mWorldCanvas_Internal && this.uiWidgetBase) {
            this.mWorldCanvas_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mWorldCanvas");
        }
        return this.mWorldCanvas_Internal;
    }
    get mWorldContentCanvas() {
        if (!this.mWorldContentCanvas_Internal && this.uiWidgetBase) {
            this.mWorldContentCanvas_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mWorldCanvas/ScrollBox/mWorldContentCanvas");
        }
        return this.mWorldContentCanvas_Internal;
    }
    get mRoomButton() {
        if (!this.mRoomButton_Internal && this.uiWidgetBase) {
            this.mRoomButton_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/TypeCanvas/RoomCanvas/mRoomButton");
        }
        return this.mRoomButton_Internal;
    }
    get mRoomSignImage() {
        if (!this.mRoomSignImage_Internal && this.uiWidgetBase) {
            this.mRoomSignImage_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/TypeCanvas/RoomCanvas/mRoomSignImage");
        }
        return this.mRoomSignImage_Internal;
    }
    get mWorldButton() {
        if (!this.mWorldButton_Internal && this.uiWidgetBase) {
            this.mWorldButton_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/TypeCanvas/WorldCanvas/mWorldButton");
        }
        return this.mWorldButton_Internal;
    }
    get mWorldSignImage() {
        if (!this.mWorldSignImage_Internal && this.uiWidgetBase) {
            this.mWorldSignImage_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/TypeCanvas/WorldCanvas/mWorldSignImage");
        }
        return this.mWorldSignImage_Internal;
    }
    get mCloseButton() {
        if (!this.mCloseButton_Internal && this.uiWidgetBase) {
            this.mCloseButton_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mCloseButton");
        }
        return this.mCloseButton_Internal;
    }
    onAwake() {
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        this.mRoomButton.onClicked.add((() => {
            Event.dispatchToLocal("PlayButtonClick", "mRoomButton");
        }));
        this.mRoomButton.touchMethod = mw.ButtonTouchMethod.PreciseTap;
        this.mWorldButton.onClicked.add((() => {
            Event.dispatchToLocal("PlayButtonClick", "mWorldButton");
        }));
        this.mWorldButton.touchMethod = mw.ButtonTouchMethod.PreciseTap;
        this.mCloseButton.onClicked.add((() => {
            Event.dispatchToLocal("PlayButtonClick", "mCloseButton");
        }));
        this.mCloseButton.touchMethod = mw.ButtonTouchMethod.PreciseTap;
        this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/mRoomCanvas/MainRoomCanvas/TitleRoomCanvas/RedRoomTextBlock"));
        this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/mRoomCanvas/MainRoomCanvas/TitleRoomCanvas/BlueRoomTextBlock"));
        this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/mRoomCanvas/RedTitleRoomCanvas/RedRankTextBlock"));
        this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/mRoomCanvas/RedTitleRoomCanvas/RedNameTextBlock"));
        this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/mRoomCanvas/RedTitleRoomCanvas/RedKillCountTextBlock"));
        this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/mRoomCanvas/RedTitleRoomCanvas/RedDieCountTextBlock"));
        this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/mRoomCanvas/BlueTitleRoomCanvas/BlueRankTextBlock"));
        this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/mRoomCanvas/BlueTitleRoomCanvas/BlueNameTextBlock"));
        this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/mRoomCanvas/BlueTitleRoomCanvas/BlueKillCountTextBlock"));
        this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/mRoomCanvas/BlueTitleRoomCanvas/BlueDieCountTextBlock"));
        this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/mWorldCanvas/MainWorldCanvas/TitleWorldCanvas/TitleTextBlock"));
        this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/mWorldCanvas/WorldCanvas/WorldRankTextBlock"));
        this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/mWorldCanvas/WorldCanvas/WorldNameTextBlock"));
        this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/mWorldCanvas/WorldCanvas/WorldKillCountTextBlock"));
        this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/mWorldCanvas/WorldCanvas/WorldDieCountTextBlock"));
        this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/TypeCanvas/RoomCanvas/RoomTextBlock"));
        this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/TypeCanvas/WorldCanvas/WorldTextBlock"));
    }
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) {}
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    hide() {
        mw.UIService.hideUI(this);
    }
};

RankPanel_Generate = __decorate([ UIBind("UI/module/RankModule/RankPanel.ui") ], RankPanel_Generate);

var RankPanel_Generate$1 = RankPanel_Generate;

var foreign190 = Object.freeze({
    __proto__: null,
    default: RankPanel_Generate$1
});

let RoomItem_Generate = class RoomItem_Generate extends UIScript {
    get mRankTextBlock() {
        if (!this.mRankTextBlock_Internal && this.uiWidgetBase) {
            this.mRankTextBlock_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/Canvas/mRankTextBlock");
        }
        return this.mRankTextBlock_Internal;
    }
    get mNameTextBlock() {
        if (!this.mNameTextBlock_Internal && this.uiWidgetBase) {
            this.mNameTextBlock_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/Canvas/mNameTextBlock");
        }
        return this.mNameTextBlock_Internal;
    }
    get mKillCountTextBlock() {
        if (!this.mKillCountTextBlock_Internal && this.uiWidgetBase) {
            this.mKillCountTextBlock_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/Canvas/mKillCountTextBlock");
        }
        return this.mKillCountTextBlock_Internal;
    }
    get mDieCountTextBlock() {
        if (!this.mDieCountTextBlock_Internal && this.uiWidgetBase) {
            this.mDieCountTextBlock_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/Canvas/mDieCountTextBlock");
        }
        return this.mDieCountTextBlock_Internal;
    }
    onAwake() {
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        this.initLanguage(this.mRankTextBlock);
        this.initLanguage(this.mNameTextBlock);
        this.initLanguage(this.mKillCountTextBlock);
        this.initLanguage(this.mDieCountTextBlock);
    }
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) {}
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    hide() {
        mw.UIService.hideUI(this);
    }
};

RoomItem_Generate = __decorate([ UIBind("UI/module/RankModule/RoomItem.ui") ], RoomItem_Generate);

var RoomItem_Generate$1 = RoomItem_Generate;

var foreign191 = Object.freeze({
    __proto__: null,
    default: RoomItem_Generate$1
});

class RoomItem extends RoomItem_Generate$1 {
    onStart() {
        this.canUpdate = false;
        this.layer = UILayerMiddle;
    }
    setData(ranking, roomData, isSelf) {
        this.mRankTextBlock.text = ranking.toString();
        this.mNameTextBlock.text = roomData.playerName;
        this.mKillCountTextBlock.text = roomData.killCount.toString();
        this.mDieCountTextBlock.text = roomData.dieCount.toString();
        let fontColor = isSelf ? mw.LinearColor.green : mw.LinearColor.white;
        this.mRankTextBlock.fontColor = fontColor;
        this.mNameTextBlock.fontColor = fontColor;
        this.mKillCountTextBlock.fontColor = fontColor;
        this.mDieCountTextBlock.fontColor = fontColor;
    }
}

var foreign133 = Object.freeze({
    __proto__: null,
    default: RoomItem
});

let WorldItem_Generate = class WorldItem_Generate extends UIScript {
    get mRankTextBlock() {
        if (!this.mRankTextBlock_Internal && this.uiWidgetBase) {
            this.mRankTextBlock_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/Canvas/mRankTextBlock");
        }
        return this.mRankTextBlock_Internal;
    }
    get mNameTextBlock() {
        if (!this.mNameTextBlock_Internal && this.uiWidgetBase) {
            this.mNameTextBlock_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/Canvas/mNameTextBlock");
        }
        return this.mNameTextBlock_Internal;
    }
    get mKillCountTextBlock() {
        if (!this.mKillCountTextBlock_Internal && this.uiWidgetBase) {
            this.mKillCountTextBlock_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/Canvas/mKillCountTextBlock");
        }
        return this.mKillCountTextBlock_Internal;
    }
    get mDieCountTextBlock() {
        if (!this.mDieCountTextBlock_Internal && this.uiWidgetBase) {
            this.mDieCountTextBlock_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/Canvas/mDieCountTextBlock");
        }
        return this.mDieCountTextBlock_Internal;
    }
    onAwake() {
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        this.initLanguage(this.mRankTextBlock);
        this.initLanguage(this.mNameTextBlock);
        this.initLanguage(this.mKillCountTextBlock);
        this.initLanguage(this.mDieCountTextBlock);
    }
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) {}
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    hide() {
        mw.UIService.hideUI(this);
    }
};

WorldItem_Generate = __decorate([ UIBind("UI/module/RankModule/WorldItem.ui") ], WorldItem_Generate);

var WorldItem_Generate$1 = WorldItem_Generate;

var foreign192 = Object.freeze({
    __proto__: null,
    default: WorldItem_Generate$1
});

class WorldItem extends WorldItem_Generate$1 {
    onStart() {
        this.canUpdate = false;
        this.layer = UILayerMiddle;
    }
    setData(ranking, roomData, isSelf) {
        this.mRankTextBlock.text = ranking.toString();
        this.mNameTextBlock.text = roomData.playerName;
        this.mKillCountTextBlock.text = roomData.killCount.toString();
        this.mDieCountTextBlock.text = roomData.dieCount.toString();
        let fontColor = isSelf ? mw.LinearColor.green : mw.LinearColor.white;
        this.mRankTextBlock.fontColor = fontColor;
        this.mNameTextBlock.fontColor = fontColor;
        this.mKillCountTextBlock.fontColor = fontColor;
        this.mDieCountTextBlock.fontColor = fontColor;
    }
}

var foreign134 = Object.freeze({
    __proto__: null,
    default: WorldItem
});

class RankPanel extends RankPanel_Generate$1 {
    constructor() {
        super(...arguments);
        this.redRoomItems = [];
        this.blueRoomItems = [];
        this.worldItems = [];
    }
    onStart() {
        this.canUpdate = false;
        this.layer = UILayerMiddle;
        this.initData();
        this.bindButton();
    }
    initData() {
        this.initUI();
    }
    bindButton() {
        this.mRoomButton.onClicked.add(this.bindRoomButton.bind(this));
        this.mWorldButton.onClicked.add(this.bindWorldButton.bind(this));
        this.mCloseButton.onClicked.add(this.bindCloseButton.bind(this));
    }
    initUI() {
        this.switchRankType(true);
    }
    bindRoomButton() {
        this.switchRankType(true);
    }
    bindWorldButton() {
        this.switchRankType(false);
    }
    bindCloseButton() {
        this.hideTween();
        Event.dispatchToLocal(EventType.OnOffMainHUD, true);
    }
    refreshRankPanel_RoomWorld(redRoomDatas, blueRoomDatas, isRedTeam, curRoomIndex, worldDatas, curWorldIndex) {
        this.refreshRoomRankPanel(redRoomDatas, blueRoomDatas, isRedTeam, curRoomIndex);
        this.refreshWorldRankPanel(worldDatas, curWorldIndex);
    }
    refreshRankPanel_Room(redRoomDatas, blueRoomDatas, isRedTeam, curRoomIndex) {
        this.refreshRoomRankPanel(redRoomDatas, blueRoomDatas, isRedTeam, curRoomIndex);
    }
    refreshRoomRankPanel(redRoomDatas, blueRoomDatas, isRedTeam, curRoomIndex) {
        if (redRoomDatas.length > this.redRoomItems.length) {
            for (let i = 0; i < this.redRoomItems.length; ++i) {
                this.redRoomItems[i].setData(i + 1, redRoomDatas[i], isRedTeam && i == curRoomIndex);
                Utils.setWidgetVisibility(this.redRoomItems[i].uiObject, mw.SlateVisibility.SelfHitTestInvisible);
            }
            for (let i = this.redRoomItems.length; i < redRoomDatas.length; ++i) {
                let redItem = UIService.create(RoomItem);
                redItem.setData(i + 1, redRoomDatas[i], isRedTeam && i == curRoomIndex);
                this.mRedRoomContentCanvas.addChild(redItem.uiObject);
                this.redRoomItems.push(redItem);
            }
        } else {
            for (let i = 0; i < redRoomDatas.length; ++i) {
                this.redRoomItems[i].setData(i + 1, redRoomDatas[i], isRedTeam && i == curRoomIndex);
                Utils.setWidgetVisibility(this.redRoomItems[i].uiObject, mw.SlateVisibility.SelfHitTestInvisible);
            }
            for (let i = redRoomDatas.length; i < this.redRoomItems.length; ++i) {
                Utils.setWidgetVisibility(this.redRoomItems[i].uiObject, mw.SlateVisibility.Collapsed);
            }
        }
        if (blueRoomDatas.length > this.blueRoomItems.length) {
            for (let i = 0; i < this.blueRoomItems.length; ++i) {
                this.blueRoomItems[i].setData(i + 1, blueRoomDatas[i], !isRedTeam && i == curRoomIndex);
                Utils.setWidgetVisibility(this.blueRoomItems[i].uiObject, mw.SlateVisibility.SelfHitTestInvisible);
            }
            for (let i = this.blueRoomItems.length; i < blueRoomDatas.length; ++i) {
                let blueItem = UIService.create(RoomItem);
                blueItem.setData(i + 1, blueRoomDatas[i], !isRedTeam && i == curRoomIndex);
                this.mBlueRoomContnetCanvas.addChild(blueItem.uiObject);
                this.blueRoomItems.push(blueItem);
            }
        } else {
            for (let i = 0; i < blueRoomDatas.length; ++i) {
                this.blueRoomItems[i].setData(i + 1, blueRoomDatas[i], !isRedTeam && i == curRoomIndex);
                Utils.setWidgetVisibility(this.blueRoomItems[i].uiObject, mw.SlateVisibility.SelfHitTestInvisible);
            }
            for (let i = blueRoomDatas.length; i < this.blueRoomItems.length; ++i) {
                Utils.setWidgetVisibility(this.blueRoomItems[i].uiObject, mw.SlateVisibility.Collapsed);
            }
        }
    }
    refreshWorldRankPanel(worldDatas, curWorldIndex) {
        if (worldDatas.length > this.worldItems.length) {
            for (let i = 0; i < this.worldItems.length; ++i) {
                this.worldItems[i].setData(i + 1, worldDatas[i], i == curWorldIndex);
                Utils.setWidgetVisibility(this.worldItems[i].uiObject, mw.SlateVisibility.SelfHitTestInvisible);
            }
            for (let i = this.worldItems.length; i < worldDatas.length; ++i) {
                let worldItem = UIService.create(WorldItem);
                worldItem.setData(i + 1, worldDatas[i], i == curWorldIndex);
                this.mWorldContentCanvas.addChild(worldItem.uiObject);
                this.worldItems.push(worldItem);
            }
        } else {
            for (let i = 0; i < worldDatas.length; ++i) {
                this.worldItems[i].setData(i + 1, worldDatas[i], i == curWorldIndex);
                Utils.setWidgetVisibility(this.worldItems[i].uiObject, mw.SlateVisibility.SelfHitTestInvisible);
            }
            for (let i = worldDatas.length; i < this.worldItems.length; ++i) {
                Utils.setWidgetVisibility(this.worldItems[i].uiObject, mw.SlateVisibility.Collapsed);
            }
        }
    }
    switchRankType(isRoom) {
        Utils.setWidgetVisibility(this.mRoomCanvas, isRoom ? mw.SlateVisibility.SelfHitTestInvisible : mw.SlateVisibility.Collapsed);
        Utils.setWidgetVisibility(this.mWorldCanvas, isRoom ? mw.SlateVisibility.Collapsed : mw.SlateVisibility.SelfHitTestInvisible);
        Utils.setButtonEnable(this.mRoomButton, !isRoom);
        Utils.setButtonEnable(this.mWorldButton, isRoom);
        Utils.setWidgetVisibility(this.mRoomSignImage, isRoom ? mw.SlateVisibility.SelfHitTestInvisible : mw.SlateVisibility.Collapsed);
        Utils.setWidgetVisibility(this.mWorldSignImage, isRoom ? mw.SlateVisibility.Collapsed : mw.SlateVisibility.SelfHitTestInvisible);
    }
    onShow(...params) {
        Utils.openUITween(this.rootCanvas, null, null);
    }
    hideTween() {
        Utils.closeUITween(this.rootCanvas, null, (() => {
            this.hide();
        }));
    }
}

var foreign132 = Object.freeze({
    __proto__: null,
    default: RankPanel
});

class RankModuleC extends ModuleC {
    constructor() {
        super(...arguments);
        this.hudModuleC = null;
        this.teamModuleC = null;
        this.rankPanel = null;
        this.userId = null;
        this.playerData = null;
        this.redRoomDatas = [];
        this.blueRoomDatas = [];
        this.recycleRoomDatas = [];
        this.curRoomIndex = -1;
        this.isRedTeam = false;
        this.curRedFirstUserId = "";
        this.curBlueFirstUserId = "";
        this.worldDatas = [];
        this.recycleWorldDatas = [];
        this.curWorldIndex = -1;
        this.preIsRedTeam = false;
        this.preRoomIndex = -2;
    }
    get getHUDModuleC() {
        if (!this.hudModuleC) {
            this.hudModuleC = ModuleService.getModule(HUDModuleC);
        }
        return this.hudModuleC;
    }
    get getTeamModuleC() {
        if (!this.teamModuleC) {
            this.teamModuleC = ModuleService.getModule(TeamModuleC);
        }
        return this.teamModuleC;
    }
    get getRankPanel() {
        if (!this.rankPanel) {
            this.rankPanel = UIService.getUI(RankPanel);
        }
        return this.rankPanel;
    }
    get currentUserId() {
        if (this.userId == "" || this.userId == null) {
            this.userId = this.localPlayer.userId;
        }
        return this.userId;
    }
    get getPlayerData() {
        if (this.playerData == null) {
            this.playerData = DataCenterC.getData(PlayerData);
        }
        return this.playerData;
    }
    onStart() {
        this.initModule();
        this.initUIPanel();
        this.initEventAction();
    }
    initModule() {
        this.teamModuleC = ModuleService.getModule(TeamModuleC);
        this.playerData = DataCenterC.getData(PlayerData);
    }
    initUIPanel() {
        this.rankPanel = UIService.getUI(RankPanel);
    }
    initEventAction() {
        this.getHUDModuleC.onOpenRankAction.add(this.addOnOffRankPanelAction.bind(this));
    }
    addOnOffRankPanelAction() {
        this.getRankPanel.show();
        Event.dispatchToLocal(EventType.OnOffMainHUD, false);
    }
    onEnterScene(sceneType) {
        let nickName = mw.AccountService.getNickName();
        nickName = nickName ? nickName : "爱玩游戏的小胖子：" + this.currentUserId;
        this.server.net_onEnterScene(nickName, this.getPlayerData.killCount, this.getPlayerData.dieCount);
    }
    calculateKillCount() {
        let redCount = 0;
        let blueCount = 0;
        this.redRoomDatas.forEach((roomData => {
            redCount += roomData.killCount;
        }));
        this.blueRoomDatas.forEach((roomData => {
            blueCount += roomData.killCount;
        }));
        this.getHUDModuleC.updateVsUI(redCount, blueCount);
    }
    updateRoomDatas(roomUserIds, roomNames, roomKillCounts, roomDieCounts) {
        let userIds = this.getTeamModuleC.getUserIds();
        let redUsers = userIds[0];
        let blueUsers = userIds[1];
        let redIndex = 0;
        let blueIndex = 0;
        for (let i = 0; i < roomUserIds.length; ++i) {
            if (redUsers.includes(roomUserIds[i])) {
                if (this.redRoomDatas.length > redIndex) {
                    this.redRoomDatas[redIndex++].setData(roomUserIds[i], roomNames[i], roomKillCounts[i], roomDieCounts[i]);
                } else {
                    let tmpRoomData = null;
                    if (this.recycleRoomDatas.length > 0) tmpRoomData = this.recycleRoomDatas.pop();
                    if (tmpRoomData) {
                        tmpRoomData.setData(roomUserIds[i], roomNames[i], roomKillCounts[i], roomDieCounts[i]);
                    } else {
                        tmpRoomData = new RoomData(roomUserIds[i], roomNames[i], roomKillCounts[i], roomDieCounts[i]);
                    }
                    this.redRoomDatas.push(tmpRoomData);
                    redIndex++;
                }
            } else if (blueUsers.includes(roomUserIds[i])) {
                if (this.blueRoomDatas.length > blueIndex) {
                    this.blueRoomDatas[blueIndex++].setData(roomUserIds[i], roomNames[i], roomKillCounts[i], roomDieCounts[i]);
                } else {
                    let tmpRoomData = null;
                    if (this.recycleRoomDatas.length > 0) tmpRoomData = this.recycleRoomDatas.pop();
                    if (tmpRoomData) {
                        tmpRoomData.setData(roomUserIds[i], roomNames[i], roomKillCounts[i], roomDieCounts[i]);
                    } else {
                        tmpRoomData = new RoomData(roomUserIds[i], roomNames[i], roomKillCounts[i], roomDieCounts[i]);
                    }
                    this.blueRoomDatas.push(tmpRoomData);
                    blueIndex++;
                }
            }
        }
        if (this.redRoomDatas.length > redIndex) {
            for (let i = redIndex; i < this.redRoomDatas.length; ++i) {
                this.recycleRoomDatas.push(this.redRoomDatas[i]);
            }
            this.redRoomDatas.length = redIndex;
        }
        if (this.blueRoomDatas.length > blueIndex) {
            for (let i = blueIndex; i < this.blueRoomDatas.length; ++i) {
                this.recycleRoomDatas.push(this.blueRoomDatas[i]);
            }
            this.blueRoomDatas.length = blueIndex;
        }
        this.calculateKillCount();
    }
    updateRoomIndex() {
        this.curRoomIndex = -1;
        this.isRedTeam = false;
        for (let i = 0; i < this.redRoomDatas.length; ++i) {
            if (this.redRoomDatas[i].userId != this.currentUserId) continue;
            this.curRoomIndex = i;
            this.isRedTeam = true;
            if (i > 0) break;
            if (this.curRedFirstUserId != this.currentUserId) this.server.net_setFirstModel(true);
            break;
        }
        if (this.redRoomDatas && this.redRoomDatas.length > 0) this.curRedFirstUserId = this.redRoomDatas[0].userId;
        if (this.curRoomIndex != -1) {
            this.updateHUDRankText();
            return;
        }
        for (let i = 0; i < this.blueRoomDatas.length; ++i) {
            if (this.blueRoomDatas[i].userId != this.currentUserId) continue;
            this.curRoomIndex = i;
            this.isRedTeam = false;
            if (i > 0) break;
            if (this.curBlueFirstUserId != this.currentUserId) this.server.net_setFirstModel(false);
            break;
        }
        if (this.blueRoomDatas && this.blueRoomDatas.length > 0) this.curBlueFirstUserId = this.blueRoomDatas[0].userId;
        this.updateHUDRankText();
    }
    updateWorldDatas(worldUserIds, worldNames, worldKillCounts, worldDieCounts) {
        if (this.worldDatas.length > worldUserIds.length) {
            for (let i = 0; i < worldUserIds.length; ++i) {
                this.worldDatas[i].setData(worldUserIds[i], worldNames[i], worldKillCounts[i], worldDieCounts[i]);
            }
            for (let i = worldUserIds.length; i < this.worldDatas.length; ++i) {
                this.recycleWorldDatas.push(this.worldDatas[i]);
            }
            this.worldDatas.length = worldUserIds.length;
        } else {
            for (let i = 0; i < this.worldDatas.length; ++i) {
                this.worldDatas[i].setData(worldUserIds[i], worldNames[i], worldKillCounts[i], worldDieCounts[i]);
            }
            for (let i = this.worldDatas.length; i < worldUserIds.length; ++i) {
                let tmpWorldData = null;
                if (this.recycleWorldDatas.length > 0) tmpWorldData = this.recycleWorldDatas.pop();
                if (tmpWorldData) {
                    tmpWorldData.setData(worldUserIds[i], worldNames[i], worldKillCounts[i], worldDieCounts[i]);
                } else {
                    tmpWorldData = new WorldData(worldUserIds[i], worldNames[i], worldKillCounts[i], worldDieCounts[i]);
                }
                this.worldDatas.push(tmpWorldData);
            }
        }
    }
    updateWorldIndex() {
        this.curWorldIndex = -1;
        for (let i = 0; i < this.worldDatas.length; ++i) {
            if (this.worldDatas[i].userId != this.currentUserId) continue;
            this.curWorldIndex = i;
            break;
        }
    }
    net_syncRoomRankData(roomUserIds, roomNames, roomKillCounts, roomDieCounts) {
        this.updateRoomDatas(roomUserIds, roomNames, roomKillCounts, roomDieCounts);
        this.sortRoomData();
        this.updateRoomIndex();
        this.getRankPanel.refreshRankPanel_Room(this.redRoomDatas, this.blueRoomDatas, this.isRedTeam, this.curRoomIndex);
    }
    net_syncRoomWorldRankData(roomUserIds, roomNames, roomKillCounts, roomDieCounts, worldUserIds, worldNames, worldKillCounts, worldDieCounts) {
        this.updateRoomDatas(roomUserIds, roomNames, roomKillCounts, roomDieCounts);
        this.sortRoomData();
        this.updateRoomIndex();
        this.updateWorldDatas(worldUserIds, worldNames, worldKillCounts, worldDieCounts);
        this.updateWorldIndex();
        this.getRankPanel.refreshRankPanel_RoomWorld(this.redRoomDatas, this.blueRoomDatas, this.isRedTeam, this.curRoomIndex, this.worldDatas, this.curWorldIndex);
    }
    sortRoomData() {
        this.redRoomDatas.sort(((a, b) => b.killCount - a.killCount || b.killCount == a.killCount && a.dieCount - b.dieCount));
        this.blueRoomDatas.sort(((a, b) => b.killCount - a.killCount || b.killCount == a.killCount && a.dieCount - b.dieCount));
    }
    updateRankByChangeTeam() {
        this.server.net_updateRankByChangeTeam();
    }
    updateHUDRankText() {
        if (this.preIsRedTeam == this.isRedTeam && this.preRoomIndex == this.curRoomIndex) return;
        this.getHUDModuleC.updateRankUIText(this.isRedTeam, this.curRoomIndex + 1);
        this.preIsRedTeam = this.isRedTeam;
        this.preRoomIndex = this.curRoomIndex;
    }
}

var foreign130 = Object.freeze({
    __proto__: null,
    default: RankModuleC
});

class TeamData {
    constructor(teamId, playerName) {
        this.teamId = TeamType.Red;
        this.playerName = "";
        this.teamId = teamId;
        this.playerName = playerName;
    }
}

var TeamType;

(function(TeamType) {
    TeamType[TeamType["Red"] = 0] = "Red";
    TeamType[TeamType["Blue"] = 1] = "Blue";
})(TeamType || (TeamType = {}));

var ResultType;

(function(ResultType) {
    ResultType[ResultType["Succeed"] = 0] = "Succeed";
    ResultType[ResultType["Fail1"] = 1] = "Fail1";
    ResultType[ResultType["Fail2"] = 2] = "Fail2";
    ResultType[ResultType["Fail3"] = 3] = "Fail3";
})(ResultType || (ResultType = {}));

var foreign144 = Object.freeze({
    __proto__: null,
    get ResultType() {
        return ResultType;
    },
    TeamData: TeamData,
    get TeamType() {
        return TeamType;
    }
});

let TeamPanel_Generate = class TeamPanel_Generate extends UIScript {
    get mMainCanvas() {
        if (!this.mMainCanvas_Internal && this.uiWidgetBase) {
            this.mMainCanvas_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mMainCanvas");
        }
        return this.mMainCanvas_Internal;
    }
    get mRedTeadCanvas() {
        if (!this.mRedTeadCanvas_Internal && this.uiWidgetBase) {
            this.mRedTeadCanvas_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mMainCanvas/mRedTeadCanvas");
        }
        return this.mRedTeadCanvas_Internal;
    }
    get mBlueTeamCanvas() {
        if (!this.mBlueTeamCanvas_Internal && this.uiWidgetBase) {
            this.mBlueTeamCanvas_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mMainCanvas/mBlueTeamCanvas");
        }
        return this.mBlueTeamCanvas_Internal;
    }
    get mRedTeamButton() {
        if (!this.mRedTeamButton_Internal && this.uiWidgetBase) {
            this.mRedTeamButton_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mMainCanvas/mRedTeamButton");
        }
        return this.mRedTeamButton_Internal;
    }
    get mBlueTeamButton() {
        if (!this.mBlueTeamButton_Internal && this.uiWidgetBase) {
            this.mBlueTeamButton_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mMainCanvas/mBlueTeamButton");
        }
        return this.mBlueTeamButton_Internal;
    }
    get mCloseButton() {
        if (!this.mCloseButton_Internal && this.uiWidgetBase) {
            this.mCloseButton_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/TitleCanvas/mCloseButton");
        }
        return this.mCloseButton_Internal;
    }
    onAwake() {
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        this.mRedTeamButton.onClicked.add((() => {
            Event.dispatchToLocal("PlayButtonClick", "mRedTeamButton");
        }));
        this.mRedTeamButton.touchMethod = mw.ButtonTouchMethod.PreciseTap;
        this.mBlueTeamButton.onClicked.add((() => {
            Event.dispatchToLocal("PlayButtonClick", "mBlueTeamButton");
        }));
        this.mBlueTeamButton.touchMethod = mw.ButtonTouchMethod.PreciseTap;
        this.mCloseButton.onClicked.add((() => {
            Event.dispatchToLocal("PlayButtonClick", "mCloseButton");
        }));
        this.mCloseButton.touchMethod = mw.ButtonTouchMethod.PreciseTap;
        this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/mMainCanvas/mRedTeamButton/RedTeamTextBlock"));
        this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/mMainCanvas/mBlueTeamButton/BlueTeamTextBlock"));
        this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/TitleCanvas/RedTextBlock"));
        this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/TitleCanvas/BlueTextBlock"));
    }
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) {}
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    hide() {
        mw.UIService.hideUI(this);
    }
};

TeamPanel_Generate = __decorate([ UIBind("UI/module/TeamModule/TeamPanel.ui") ], TeamPanel_Generate);

var TeamPanel_Generate$1 = TeamPanel_Generate;

var foreign199 = Object.freeze({
    __proto__: null,
    default: TeamPanel_Generate$1
});

let TeamItem_Generate = class TeamItem_Generate extends UIScript {
    get mBgImage() {
        if (!this.mBgImage_Internal && this.uiWidgetBase) {
            this.mBgImage_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/Canvas/mBgImage");
        }
        return this.mBgImage_Internal;
    }
    get mNameTextBlock() {
        if (!this.mNameTextBlock_Internal && this.uiWidgetBase) {
            this.mNameTextBlock_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/Canvas/mNameTextBlock");
        }
        return this.mNameTextBlock_Internal;
    }
    onAwake() {
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        this.initLanguage(this.mNameTextBlock);
    }
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) {}
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    hide() {
        mw.UIService.hideUI(this);
    }
};

TeamItem_Generate = __decorate([ UIBind("UI/module/TeamModule/TeamItem.ui") ], TeamItem_Generate);

var TeamItem_Generate$1 = TeamItem_Generate;

var foreign198 = Object.freeze({
    __proto__: null,
    default: TeamItem_Generate$1
});

class TeamItem extends TeamItem_Generate$1 {
    onStart() {
        this.setPlayerName("");
    }
    setBgImage(isRed) {
        this.mBgImage.imageGuid = isRed ? "99551" : "99547";
    }
    setPlayerName(name) {
        this.mNameTextBlock.text = name;
    }
    setNameColor(fontColor) {
        this.mNameTextBlock.fontColor = fontColor;
    }
}

var foreign147 = Object.freeze({
    __proto__: null,
    default: TeamItem
});

class TeamPanel extends TeamPanel_Generate$1 {
    constructor() {
        super(...arguments);
        this.teamModuleC = null;
        this.redTeamItems = [];
        this.blueTeamItems = [];
        this.isDelayedEnd = true;
    }
    get getTeamModuleC() {
        if (this.teamModuleC == null) {
            this.teamModuleC = ModuleService.getModule(TeamModuleC);
        }
        return this.teamModuleC;
    }
    onStart() {
        this.initDatas();
        this.bindButtons();
    }
    initDatas() {
        this.teamModuleC = ModuleService.getModule(TeamModuleC);
        let roomPeopleCount = GlobalData.roomPeopleCount;
        for (let i = 0; i < roomPeopleCount; ++i) {
            let item = UIService.create(TeamItem);
            if (i < roomPeopleCount / 2) {
                this.mRedTeadCanvas.addChild(item.uiObject);
                this.redTeamItems.push(item);
            } else {
                this.mBlueTeamCanvas.addChild(item.uiObject);
                this.blueTeamItems.push(item);
            }
        }
    }
    bindButtons() {
        this.mRedTeamButton.onClicked.add(this.bindClickRedTeamButton.bind(this));
        this.mBlueTeamButton.onClicked.add(this.bindClickBlueTeamButton.bind(this));
        this.mCloseButton.onClicked.add(this.bindCloseButton.bind(this));
    }
    bindClickRedTeamButton() {
        this.changeTeam(TeamType.Red);
    }
    bindClickBlueTeamButton() {
        this.changeTeam(TeamType.Blue);
    }
    bindCloseButton() {
        this.hideTween();
        Event.dispatchToLocal(EventType.OnOffMainHUD, true);
    }
    async changeTeam(teamType) {
        if (this.getTeamModuleC.getCurTeamType() == teamType) {
            Notice.showDownNotice("切换失败,你已在" + (teamType == TeamType.Red ? "红队" : "蓝队") + "中");
            return;
        }
        if (!this.isDelayedEnd) {
            Notice.showDownNotice("不能频繁切换队伍，10秒后再试");
            return;
        }
        this.isDelayedEnd = false;
        TimeUtil.delaySecond(10).then((() => {
            this.isDelayedEnd = true;
        }));
        await this.getTeamModuleC.net_changeTeam(teamType);
    }
    setTeamDatas(redNames, blueNames, selfIndex, currentTeamType) {
        for (let i = 0; i < redNames.length; ++i) {
            this.redTeamItems[i].setPlayerName(redNames[i]);
            if (selfIndex - 1 == i && currentTeamType == TeamType.Red) {
                this.redTeamItems[i].setNameColor(mw.LinearColor.yellow);
            } else {
                this.redTeamItems[i].setNameColor(mw.LinearColor.white);
            }
        }
        for (let i = redNames.length; i < this.redTeamItems.length; ++i) {
            this.redTeamItems[i].setPlayerName("");
        }
        for (let i = 0; i < blueNames.length; ++i) {
            this.blueTeamItems[i].setPlayerName(blueNames[i]);
            if (selfIndex - 1 == i && currentTeamType == TeamType.Blue) {
                this.blueTeamItems[i].setNameColor(mw.LinearColor.yellow);
            } else {
                this.blueTeamItems[i].setNameColor(mw.LinearColor.white);
            }
        }
        for (let i = blueNames.length; i < this.blueTeamItems.length; ++i) {
            this.blueTeamItems[i].setPlayerName("");
        }
    }
    onShow(...params) {
        Utils.openUITween(this.rootCanvas, (() => {}), null);
    }
    hideTween() {
        Utils.closeUITween(this.rootCanvas, null, (() => {
            this.hide();
        }));
    }
}

var foreign148 = Object.freeze({
    __proto__: null,
    default: TeamPanel
});

class TeamModuleC extends ModuleC {
    constructor() {
        super(...arguments);
        this.hudModuleC = null;
        this.rankModuleC = null;
        this.teamPanel = null;
        this.redNames = [];
        this.blueNames = [];
        this.currentTeamType = TeamType.Red;
        this.redUsers = [];
        this.blueUsers = [];
    }
    get getHUDModuleC() {
        if (!this.hudModuleC) {
            this.hudModuleC = ModuleService.getModule(HUDModuleC);
        }
        return this.hudModuleC;
    }
    get getRankModuleC() {
        if (!this.rankModuleC) {
            this.rankModuleC = ModuleService.getModule(RankModuleC);
        }
        return this.rankModuleC;
    }
    get getTeamPannel() {
        if (this.teamPanel == null) {
            this.teamPanel = UIService.getUI(TeamPanel);
        }
        return this.teamPanel;
    }
    onStart() {
        this.initModule();
        this.initUIPanel();
        this.initEventAction();
    }
    initModule() {
        this.rankModuleC = ModuleService.getModule(RankModuleC);
    }
    initUIPanel() {
        this.teamPanel = UIService.getUI(TeamPanel);
    }
    initEventAction() {
        this.getHUDModuleC.onOpenTeamAction.add(this.addOnOffTeamPanelAction.bind(this));
    }
    addOnOffTeamPanelAction() {
        this.getTeamPannel.show();
        Event.dispatchToLocal(EventType.OnOffMainHUD, false);
    }
    onEnterScene(sceneType) {
        let nickName = mw.AccountService.getNickName();
        nickName = nickName ? nickName : "UserId:" + this.localPlayer.userId;
        this.server.net_onEnterScene(nickName);
    }
    net_syncTeamData(userIds, playerNames, teamIds) {
        this.redUsers.length = 0;
        this.blueUsers.length = 0;
        this.redNames.length = 0;
        this.blueNames.length = 0;
        let selfIndex = -1;
        for (let i = 0; i < userIds.length; ++i) {
            let playerName = playerNames[i];
            let teamId = teamIds[i];
            if (teamId == TeamType.Red) {
                this.redUsers.push(userIds[i]);
                this.redNames.push(playerName);
                if (userIds[i] == this.localPlayer.userId) {
                    selfIndex = this.redUsers.length;
                    this.currentTeamType = TeamType.Red;
                }
            } else if (teamId == TeamType.Blue) {
                this.blueUsers.push(userIds[i]);
                this.blueNames.push(playerName);
                if (userIds[i] == this.localPlayer.userId) {
                    selfIndex = this.blueUsers.length;
                    this.currentTeamType = TeamType.Blue;
                }
            }
        }
        this.getTeamPannel.setTeamDatas(this.redNames, this.blueNames, selfIndex, this.currentTeamType);
        this.setAllPlayerOutline();
    }
    async net_changeTeam(teamType) {
        if (this.currentTeamType == teamType) {
            Notice.showDownNotice("切换失败,你已在" + (teamType == TeamType.Red ? "红队" : "蓝队") + "中");
            return;
        }
        let resultType = await this.server.net_changeTeam(teamType);
        switch (resultType) {
          case ResultType.Succeed:
            Notice.showDownNotice("切换队伍成功");
            TimeUtil.delaySecond(1).then((() => {
                this.getRankModuleC.updateRankByChangeTeam();
            }));
            break;

          case ResultType.Fail1:
            Notice.showDownNotice("切换失败,此队已满");
            break;

          case ResultType.Fail2:
            Notice.showDownNotice("切换失败,人数不平等");
            break;

          case ResultType.Fail3:
            Notice.showDownNotice("已在此队");
            break;
        }
    }
    getCurTeamType() {
        return this.currentTeamType;
    }
    isTeamMate(userId1, userId2) {
        if (this.redUsers.indexOf(userId1) != -1 && this.redUsers.indexOf(userId2) != -1) return true;
        if (this.blueUsers.indexOf(userId1) != -1 && this.blueUsers.indexOf(userId2) != -1) return true;
        return false;
    }
    getUserIds() {
        return [ this.redUsers, this.blueUsers ];
    }
    isRedTeam(userId) {
        return this.redUsers.includes(userId);
    }
    setAllPlayerOutline() {
        let localPlayerUserId = this.localPlayer.userId;
        Player.getAllPlayers().forEach((player => {
            Utils.setOutLine(player, this.isTeamMate(localPlayerUserId, player.userId));
        }));
    }
}

var foreign145 = Object.freeze({
    __proto__: null,
    default: TeamModuleC
});

class PlayerModuleC extends ModuleC {
    constructor() {
        super(...arguments);
        this.hudModuleC = null;
        this.teamModuleC = null;
        this.confirmPanel = null;
        this.isCanResetPos = true;
    }
    get getHUDModuleC() {
        if (this.hudModuleC == null) {
            this.hudModuleC = ModuleService.getModule(HUDModuleC);
        }
        return this.hudModuleC;
    }
    get getTeamModuleC() {
        if (this.teamModuleC == null) {
            this.teamModuleC = ModuleService.getModule(TeamModuleC);
        }
        return this.teamModuleC;
    }
    get getConfirmPanel() {
        if (this.confirmPanel == null) {
            this.confirmPanel = UIService.getUI(ConfirmPanel);
        }
        return this.confirmPanel;
    }
    onStart() {
        this.initModule();
        this.initUIPanel();
        this.initEventAction();
    }
    initModule() {
        this.hudModuleC = ModuleService.getModule(HUDModuleC);
        this.teamModuleC = ModuleService.getModule(TeamModuleC);
    }
    initUIPanel() {
        this.confirmPanel = UIService.getUI(ConfirmPanel);
    }
    initEventAction() {
        this.getHUDModuleC.onResetPosAction.add(this.addResetPosAction.bind(this));
    }
    addResetPosAction() {
        this.getConfirmPanel.confirmTips((() => {
            if (!this.isCanResetPos) {
                Notice.showDownNotice("60秒内不可重置位置");
                return;
            }
            let revivalPoint = Utils.randomRevivalPoint(this.getTeamModuleC.isRedTeam(this.localPlayer.userId));
            this.localPlayer.character.worldTransform.position = revivalPoint;
            this.isCanResetPos = false;
            TimeUtil.delaySecond(60).then((() => {
                this.isCanResetPos = true;
            }));
        }), "是否重置位置", "是", "否", "重置位置");
    }
    net_hitTeammate() {
        Notice.showDownNotice("不要攻击队友!");
    }
    net_updateHp(curHp) {
        this.getHUDModuleC.updateHpUI(curHp);
    }
    net_flyText(damage, hitPoint) {
        let fontColor = Utils.randomColor();
        FlyText.instance.showFlyText("-" + damage, hitPoint, fontColor[0], fontColor[1]);
    }
    net_killTip(killerUserId, killerName, killedUserId, killedName) {
        this.getHUDModuleC.killTip(killerUserId, killerName, killedUserId, killedName);
    }
    async addMaxHp() {
        let maxHp = await this.server.net_addMaxHp();
        this.getHUDModuleC.updateHpUI(maxHp, true);
        GlobalData.maxHp = maxHp;
        Utils.playBirthSound(this.localPlayer);
    }
}

var foreign123 = Object.freeze({
    __proto__: null,
    PlayerModuleC: PlayerModuleC
});

var PrefabEvent;

(function(PrefabEvent) {
    var _onEventNetKey = "PrefabEventNeyKey";
    var _onEventKey = "PrefabEvetKey";
    var _retrySetCustomDataList = [];
    function initEvent() {
        if (mwext["PrefabEvent"]) {
            return;
        }
        mwext["PrefabEvent"] = true;
        if (SystemUtil.isServer()) {
            DataStorage.setTemporaryStorage(mw.SystemUtil.isPIE);
            Event.addLocalListener("__setCustomDataCache", ((k, v) => {
                _retrySetCustomDataList.push({
                    key: k,
                    val: v
                });
            }));
            setInterval((() => {
                let keyMap = new Map;
                _retrySetCustomDataList.forEach((e => {
                    keyMap.set(e.key, e.val);
                }));
                _retrySetCustomDataList = [];
                keyMap.forEach(((v, k, maps) => {
                    _retrySetCustomDataList.push({
                        key: k,
                        val: v
                    });
                }));
                while (_retrySetCustomDataList.length > 0) {
                    let data = _retrySetCustomDataList.shift();
                    if (data) {
                        DataStorage.asyncSetData(data.key, data.val).then((res => {
                            if (res != mw.DataStorageResultCode.Success) {
                                _retrySetCustomDataList.push(data);
                            }
                        })).catch((err => {
                            _retrySetCustomDataList.push(data);
                        }));
                    }
                }
            }), 6500);
        }
        var call = (clazzName, funcName, ...params) => {
            if (!PrefabEvent[clazzName]) {
                return;
            }
            if (!PrefabEvent[clazzName][funcName]) {
                return;
            }
            Event.dispatchToLocal(_onEventKey + ":" + clazzName + ":" + funcName, ...params);
        };
        if (mw.SystemUtil.isServer()) {
            Event.addClientListener(_onEventNetKey, ((player, clazzName, funcName, ...params) => {
                call(clazzName, funcName, ...params);
            }));
        }
        if (mw.SystemUtil.isClient()) {
            Event.addServerListener(_onEventNetKey, ((clazzName, funcName, ...params) => {
                call(clazzName, funcName, ...params);
            }));
        }
    }
    function callClientFunc(clazzName, funcName, ...params) {
        Event.dispatchToLocal(_onEventKey + ":" + clazzName + ":" + funcName, ...params);
    }
    function callFunc(clazzName, funcName, ...params) {
        if (mw.SystemUtil.isClient()) {
            Event.dispatchToServer(_onEventNetKey, clazzName, funcName, ...params);
        }
        if (mw.SystemUtil.isServer()) {
            Event.dispatchToAllClient(_onEventNetKey, clazzName, funcName, ...params);
        }
        Event.dispatchToLocal(_onEventKey + ":" + clazzName + ":" + funcName, ...params);
    }
    function onFunc(clazzName, funcName, callback) {
        return Event.addLocalListener(_onEventKey + ":" + clazzName + ":" + funcName, callback);
    }
    class DBSaveBase {}
    class DBServerTool {
        static getPlayerDataCache(playerId) {
            let dataCache = null;
            if (mwext["PrefabEventDataCache"]) {
                dataCache = mwext["PrefabEventDataCache"];
            } else {
                mwext["PrefabEventDataCache"] = {};
                dataCache = mwext["PrefabEventDataCache"];
            }
            if (!dataCache[playerId]) {
                dataCache[playerId] = {};
            }
            return dataCache[playerId];
        }
        static async asyncGetValue(playerId, key) {
            return new Promise(((resolve, reject) => {
                let playerDataCache = this.getPlayerDataCache(playerId);
                let dataKey = key + "_" + playerId + "_key";
                let dataVal = null;
                let keys = Object.keys(playerDataCache);
                keys.forEach(((v, i, arr) => {
                    if (v == dataKey) {
                        dataVal = playerDataCache[dataKey];
                    }
                }));
                if (dataVal) {
                    let res = null;
                    let db = dataVal;
                    if (!db) {
                        resolve(null);
                        return;
                    }
                    res = JSON.parse(db);
                    resolve(res.value);
                    return;
                }
                Utils.asyncRpcGetData(dataKey).then((v => {
                    let res = null;
                    let db = v;
                    if (!db) {
                        resolve(null);
                    }
                    res = JSON.parse(db);
                    playerDataCache[dataKey] = db;
                    resolve(res.value);
                })).catch((err => {
                    reject("不存在这份存档，可能是新玩家");
                }));
            }));
        }
        static async asyncSetValue(playerId, key, val) {
            return new Promise(((resolve, reject) => {
                let data = new DBSaveBase;
                data.value = val;
                let dataStr = JSON.stringify(data);
                let playerDataCache = this.getPlayerDataCache(playerId);
                let dataKey = key + "_" + playerId + "_key";
                if (playerDataCache[dataKey] == dataStr) {
                    resolve();
                    return;
                }
                playerDataCache[dataKey] = dataStr;
                Event.dispatchToLocal("__setCustomDataCache", key + "_" + playerId + "_key", dataStr);
                resolve();
            }));
        }
    }
    PrefabEvent.DBServerTool = DBServerTool;
    (function(AttrType) {
        AttrType[AttrType["MaxHp"] = 0] = "MaxHp";
        AttrType[AttrType["MaxMp"] = 1] = "MaxMp";
        AttrType[AttrType["Attack"] = 2] = "Attack";
        AttrType[AttrType["Magic"] = 3] = "Magic";
        AttrType[AttrType["Def"] = 4] = "Def";
        AttrType[AttrType["MDef"] = 5] = "MDef";
        AttrType[AttrType["Speed"] = 6] = "Speed";
        AttrType[AttrType["Jump"] = 7] = "Jump";
        AttrType[AttrType["AttackSpeed"] = 8] = "AttackSpeed";
        AttrType[AttrType["AttackDistance"] = 9] = "AttackDistance";
    })(PrefabEvent.AttrType || (PrefabEvent.AttrType = {}));
    class PrefabEvtAttr {
        static addAttrVal(senderGuid, targetGuid, val, attrType) {
            callFunc(this.name, this.onAddAttrVal.name, senderGuid, targetGuid, val, attrType);
        }
        static onAddAttrVal(callback) {
            return onFunc(this.name, this.onAddAttrVal.name, callback);
        }
    }
    PrefabEvent.PrefabEvtAttr = PrefabEvtAttr;
    (function(EquipSlot) {
        EquipSlot[EquipSlot["Weapon"] = 1] = "Weapon";
    })(PrefabEvent.EquipSlot || (PrefabEvent.EquipSlot = {}));
    class PrefabEvtEquip {
        static equip(targetGuid, slot, equipGuid) {
            callFunc(this.name, this.onEquip.name, targetGuid, slot, equipGuid);
        }
        static onEquip(callback) {
            return onFunc(this.name, this.onEquip.name, callback);
        }
    }
    PrefabEvent.PrefabEvtEquip = PrefabEvtEquip;
    let PlayerInfoType;
    (function(PlayerInfoType) {
        PlayerInfoType[PlayerInfoType["Name"] = 0] = "Name";
        PlayerInfoType[PlayerInfoType["Level"] = 1] = "Level";
        PlayerInfoType[PlayerInfoType["Exp"] = 2] = "Exp";
        PlayerInfoType[PlayerInfoType["Gold"] = 3] = "Gold";
        PlayerInfoType[PlayerInfoType["Score"] = 4] = "Score";
        PlayerInfoType[PlayerInfoType["Stage"] = 5] = "Stage";
        PlayerInfoType[PlayerInfoType["Popularity"] = 6] = "Popularity";
    })(PlayerInfoType = PrefabEvent.PlayerInfoType || (PrefabEvent.PlayerInfoType = {}));
    class PrefabEvtPlayerInfo {
        static setPlayerInfo(senderGuid, targetGuid, val, infoType) {
            callFunc(this.name, this.onSetPlayerInfo.name, senderGuid, targetGuid, val, infoType);
        }
        static onSetPlayerInfo(callback) {
            return onFunc(this.name, this.onSetPlayerInfo.name, callback);
        }
        static addPlayerInfo(senderGuid, targetGuid, val, attrType) {
            callFunc(this.name, this.onAddPlayerInfo.name, senderGuid, targetGuid, val, PlayerInfoType);
        }
        static onAddPlayerInfo(callback) {
            return onFunc(this.name, this.onAddPlayerInfo.name, callback);
        }
        static setPlayerName(senderGuid, targetGuid, name) {
            callFunc(this.name, this.onSetPlayerName.name, senderGuid, targetGuid, name);
        }
        static onSetPlayerName(callback) {
            return onFunc(this.name, this.onSetPlayerName.name, callback);
        }
    }
    PrefabEvent.PrefabEvtPlayerInfo = PrefabEvtPlayerInfo;
    class PrefabEvtFight {
        static hit(senderGuid, targetGuid, damage, hitPoint) {
            callFunc(this.name, this.onHit.name, senderGuid, targetGuid, damage, hitPoint);
        }
        static onHit(callback) {
            return onFunc(this.name, this.onHit.name, callback);
        }
        static hurt(senderGuid, targetGuid, damage) {
            callFunc(this.name, this.onHurt.name, senderGuid, targetGuid, damage);
        }
        static onHurt(callback) {
            return onFunc(this.name, this.onHurt.name, callback);
        }
        static cure(senderGuid, targetGuid, cureVal) {
            callFunc(this.name, this.onCure.name, senderGuid, targetGuid, cureVal);
        }
        static onCure(callback) {
            return onFunc(this.name, this.onCure.name, callback);
        }
        static die(targetGuid) {
            callFunc(this.name, this.onDie.name, targetGuid);
        }
        static onDie(callback) {
            return onFunc(this.name, this.onDie.name, callback);
        }
        static revive(targetGuid) {
            callFunc(this.name, this.onRevive.name, targetGuid);
        }
        static onRevive(callback) {
            return onFunc(this.name, this.onRevive.name, callback);
        }
    }
    PrefabEvent.PrefabEvtFight = PrefabEvtFight;
    class PrefabEvtRecordPoint {
        static setRecordPoint(senderGuid, targetGuid, recordPointId) {
            callFunc(this.name, this.onSetRecordPoint.name, senderGuid, targetGuid, recordPointId);
        }
        static onSetRecordPoint(callback) {
            return onFunc(this.name, this.onSetRecordPoint.name, callback);
        }
        static backCurrentRecordPoint(senderGuid) {
            callFunc(this.name, this.onBackCurrentRecordPoint.name, senderGuid);
        }
        static onBackCurrentRecordPoint(callback) {
            return onFunc(this.name, this.onBackCurrentRecordPoint.name, callback);
        }
        static backRecordPoint(senderGuid, recordPointId) {
            callFunc(this.name, this.onBackRecordPoint.name, senderGuid, recordPointId);
        }
        static onBackRecordPoint(callback) {
            return onFunc(this.name, this.onBackRecordPoint.name, callback);
        }
    }
    PrefabEvent.PrefabEvtRecordPoint = PrefabEvtRecordPoint;
    class PrefabEvtNotify {
        static notifyLocal(text) {
            callClientFunc(this.name, this.onNotify.name, text);
        }
        static notify(text) {
            callFunc(this.name, this.onNotify.name, text);
        }
        static onNotify(callback) {
            return onFunc(this.name, this.onNotify.name, callback);
        }
    }
    PrefabEvent.PrefabEvtNotify = PrefabEvtNotify;
    class PrefabEvtRank {
        static openRank() {
            callClientFunc(this.name, this.onOpenRank.name);
        }
        static onOpenRank(callback) {
            return onFunc(this.name, this.onOpenRank.name, callback);
        }
        static setRankData(senderGuid, name, score, typeName) {
            callFunc(this.name, this.onSetRankData.name, senderGuid, name, score, typeName);
        }
        static onSetRankData(callback) {
            return onFunc(this.name, this.onSetRankData.name, callback);
        }
        static delRankData(senderGuid) {
            callFunc(this.name, this.onDelRankData.name, senderGuid);
        }
        static onDelRankData(callback) {
            return onFunc(this.name, this.onDelRankData.name, callback);
        }
    }
    PrefabEvent.PrefabEvtRank = PrefabEvtRank;
    class PrefabEvtCloth {
        static loadRole(senderGuid, targetGuid, dressResGuid) {
            callClientFunc(this.name, this.onLoadRole.name, senderGuid, targetGuid, dressResGuid);
        }
        static onLoadRole(callback) {
            return onFunc(this.name, this.onLoadRole.name, callback);
        }
        static loadCloth(senderGuid, targetGuid, dressResGuid) {
            callClientFunc(this.name, this.onLoadCloth.name, senderGuid, targetGuid, dressResGuid);
        }
        static onLoadCloth(callback) {
            return onFunc(this.name, this.onLoadCloth.name, callback);
        }
        static loadSlot(senderGuid, targetGuid, slotResGuid) {
            callClientFunc(this.name, this.onLoadSlot.name, senderGuid, targetGuid, slotResGuid);
        }
        static onLoadSlot(callback) {
            return onFunc(this.name, this.onLoadSlot.name, callback);
        }
    }
    PrefabEvent.PrefabEvtCloth = PrefabEvtCloth;
    function PrefabReport(reportId = null) {
        return function(target, propertyKey, descriptor) {
            const method = descriptor.value;
            descriptor.value = function(...args) {
                if (SystemUtil.isClient() && reportId) {
                    mw.RoomService.reportLogInfo("ts_action_firstdo", "模板埋点", JSON.stringify({
                        record: "TemplatePrefab",
                        lifetime: reportId
                    }));
                }
                const result = method.apply(this, args);
                return result;
            };
        };
    }
    PrefabEvent.PrefabReport = PrefabReport;
    class PrefabEvtCollection {
        static openCollectionUI() {
            callClientFunc(this.name, this.onOpenCollectionUI.name);
        }
        static onOpenCollectionUI(callback) {
            return onFunc(this.name, this.onOpenCollectionUI.name, callback);
        }
        static addCollection(atlasId, playerId) {
            callFunc(this.name, this.onAddCollection.name, atlasId, playerId);
        }
        static onAddCollection(callback) {
            return onFunc(this.name, this.onAddCollection.name, callback);
        }
    }
    PrefabEvent.PrefabEvtCollection = PrefabEvtCollection;
    initEvent();
})(PrefabEvent || (PrefabEvent = {}));

function PrefabReport(reportId = null) {
    return function(target, propertyKey, descriptor) {
        const method = descriptor.value;
        descriptor.value = function(...args) {
            if (SystemUtil.isClient() && reportId) {
                mw.RoomService.reportLogInfo("ts_action_firstdo", "模板埋点", JSON.stringify({
                    record: "TemplatePrefab",
                    lifetime: reportId
                }));
            }
            const result = method.apply(this, args);
            return result;
        };
    };
}

var foreign156 = Object.freeze({
    __proto__: null,
    get PrefabEvent() {
        return PrefabEvent;
    },
    PrefabReport: PrefabReport
});

class RankModuleS extends ModuleS {
    constructor() {
        super(...arguments);
        this.worldDatas = [];
        this.syncPlayerMap = new Map;
        this.roomDataMap = new Map;
        this.tmpRoomDataMap = new Map;
        this.roomUserIds = [];
        this.roomNames = [];
        this.roomKillCounts = [];
        this.roomDieCounts = [];
        this.worldUserIds = [];
        this.worldNames = [];
        this.worldKillCounts = [];
        this.worldDieCounts = [];
        this.redFirstModel = null;
        this.blueFirstModel = null;
    }
    onStart() {}
    net_updateSyncPlayer(isSync) {
        let player = this.currentPlayer;
        if (!this.syncPlayerMap.has(player)) return;
        this.syncPlayerMap.set(player, isSync);
        if (isSync) this.synchrodata_aRoomWorld(player);
    }
    onPlayerLeft(player) {
        let userId = player.userId;
        if (this.roomDataMap.has(userId)) this.roomDataMap.delete(userId);
        if (this.tmpRoomDataMap.has(userId)) this.tmpRoomDataMap.delete(userId);
        if (this.syncPlayerMap.has(player)) this.syncPlayerMap.delete(player);
        this.synchrodata_Room();
    }
    net_onEnterScene(playerName, killCount, dieCount) {
        this.syncPlayerMap.set(this.currentPlayer, false);
        let userId = this.currentPlayer.userId;
        this.currentPlayer.character.displayName = playerName;
        this.onEnterScene(userId, playerName, killCount, dieCount);
    }
    async onEnterScene(userId, playerName, killCount, dieCount) {
        let roomData = new RoomData(userId, playerName, killCount, dieCount);
        this.roomDataMap.set(userId, roomData);
        let tmpRoomData = new RoomData(userId, playerName, 0, 0);
        this.tmpRoomDataMap.set(userId, tmpRoomData);
        this.worldDatas = await this.getCustomdata("WorldData");
        this.synchrodata_onEnterScene(userId);
    }
    refreshKillDieCount(killUserId, dieUserId) {
        if (!this.roomDataMap.has(killUserId)) return;
        let killRoomData = this.roomDataMap.get(killUserId);
        killRoomData.killCount += 1;
        if (this.tmpRoomDataMap.has(killUserId)) {
            let tmpKillRoomData = this.tmpRoomDataMap.get(killUserId);
            tmpKillRoomData.killCount += 1;
        }
        if (this.roomDataMap.has(dieUserId)) {
            let dieRoomData = this.roomDataMap.get(dieUserId);
            dieRoomData.dieCount += 1;
        }
        if (this.tmpRoomDataMap.has(dieUserId)) {
            let tmpDieRoomData = this.tmpRoomDataMap.get(dieUserId);
            tmpDieRoomData.dieCount += 1;
        }
        let isRefreshWorldData = this.isRefreshWorldData(new WorldData(killUserId, killRoomData.playerName, killRoomData.killCount, killRoomData.dieCount));
        if (isRefreshWorldData) {
            this.synchrodata_RoomWorld();
        } else {
            this.synchrodata_Room();
        }
    }
    isRefreshWorldData(worldData) {
        let isPush = false;
        let ishasDelete = false;
        let ishasData = false;
        if (this.worldDatas == null) {
            this.worldDatas = [];
        }
        if (this.worldDatas.length < 500) {
            if (this.worldDatas.length == 0) {
                this.worldDatas.push(worldData);
                isPush = true;
            } else {
                for (let i = 0; i < this.worldDatas.length; ++i) {
                    if (this.worldDatas[i].userId != worldData.userId) continue;
                    if (worldData.killCount > this.worldDatas[i].killCount) {
                        this.worldDatas.splice(i, 1);
                        break;
                    } else {
                        ishasData = true;
                        break;
                    }
                }
                if (ishasData) return isPush;
                for (let i = 0; i < this.worldDatas.length; i++) {
                    if (worldData.killCount > this.worldDatas[i].killCount) {
                        this.worldDatas.splice(i, 0, worldData);
                        isPush = true;
                        break;
                    }
                }
                if (!isPush) {
                    this.worldDatas.push(worldData);
                    isPush = true;
                }
            }
        } else {
            for (let i = 0; i < this.worldDatas.length; ++i) {
                if (this.worldDatas[i].userId != worldData.userId) continue;
                if (worldData.killCount > this.worldDatas[i].killCount) {
                    this.worldDatas.splice(i, 1);
                    ishasDelete = true;
                    break;
                } else {
                    ishasData = true;
                    break;
                }
            }
            if (ishasData) return isPush;
            for (let i = 0; i < this.worldDatas.length; i++) {
                if (worldData.killCount > this.worldDatas[i].killCount) {
                    this.worldDatas.splice(i, 0, worldData);
                    if (!ishasDelete) {
                        this.worldDatas.pop();
                    }
                    isPush = true;
                    break;
                }
            }
        }
        if (isPush) {
            this.setCustomData("WorldData", this.worldDatas);
        }
        return isPush;
    }
    updateRoomData() {
        if (this.tmpRoomDataMap.size == 0 || !this.tmpRoomDataMap) return;
        this.roomUserIds.length = 0;
        this.roomNames.length = 0;
        this.roomKillCounts.length = 0;
        this.roomDieCounts.length = 0;
        this.tmpRoomDataMap.forEach(((value, key) => {
            this.roomUserIds.push(value.userId);
            this.roomNames.push(value.playerName);
            this.roomKillCounts.push(value.killCount);
            this.roomDieCounts.push(value.dieCount);
        }));
    }
    updateWorldData() {
        if (!this.worldDatas || this.worldDatas.length == 0) return;
        this.worldUserIds.length = 0;
        this.worldNames.length = 0;
        this.worldKillCounts.length = 0;
        this.worldDieCounts.length = 0;
        for (let i = 0; i < this.worldDatas.length; i++) {
            this.worldUserIds.push(this.worldDatas[i].userId);
            this.worldNames.push(this.worldDatas[i].playerName);
            this.worldKillCounts.push(this.worldDatas[i].killCount);
            this.worldDieCounts.push(this.worldDatas[i].dieCount);
        }
    }
    synchrodata_onEnterScene(sendUserId) {
        this.updateRoomData();
        this.updateWorldData();
        this.syncPlayerMap.forEach(((value, key) => {
            if (sendUserId == key.userId) {
                this.getClient(key).net_syncRoomWorldRankData(this.roomUserIds, this.roomNames, this.roomKillCounts, this.roomDieCounts, this.worldUserIds, this.worldNames, this.worldKillCounts, this.worldDieCounts);
            } else {
                this.getClient(key).net_syncRoomRankData(this.roomUserIds, this.roomNames, this.roomKillCounts, this.roomDieCounts);
            }
        }));
    }
    synchrodata_Room() {
        this.updateRoomData();
        this.syncPlayerMap.forEach(((value, key) => {
            this.getClient(key).net_syncRoomRankData(this.roomUserIds, this.roomNames, this.roomKillCounts, this.roomDieCounts);
        }));
    }
    synchrodata_RoomWorld() {
        this.updateRoomData();
        this.updateWorldData();
        this.syncPlayerMap.forEach(((value, key) => {
            this.getClient(key).net_syncRoomWorldRankData(this.roomUserIds, this.roomNames, this.roomKillCounts, this.roomDieCounts, this.worldUserIds, this.worldNames, this.worldKillCounts, this.worldDieCounts);
        }));
    }
    synchrodata_aRoomWorld(player) {
        this.getClient(player).net_syncRoomWorldRankData(this.roomUserIds, this.roomNames, this.roomKillCounts, this.roomDieCounts, this.worldUserIds, this.worldNames, this.worldKillCounts, this.worldDieCounts);
    }
    net_updateRankByChangeTeam() {
        this.syncPlayerMap.forEach(((value, key) => {
            this.getClient(key).net_syncRoomRankData(this.roomUserIds, this.roomNames, this.roomKillCounts, this.roomDieCounts);
        }));
    }
    async getCustomdata(key) {
        return (await DataStorage.asyncGetData(key)).data;
    }
    async setCustomData(saveKey, dataInfo) {
        let code = null;
        code = await DataStorage.asyncSetData(saveKey, dataInfo);
        return code == mw.DataStorageResultCode.Success;
    }
    getNamesByUserId(userId1, userId2) {
        if (this.roomDataMap.has(userId1) && this.roomDataMap.has(userId2)) {
            return [ this.roomDataMap.get(userId1).playerName, this.roomDataMap.get(userId2).playerName ];
        }
        return null;
    }
    getNameByUserId(userId) {
        if (this.roomDataMap.has(userId)) {
            return this.roomDataMap.get(userId).playerName;
        }
        return null;
    }
    net_setFirstModel(isRed) {
        let character = this.currentPlayer.character;
        this.setFirstModel(character, isRed);
    }
    async setFirstModel(character, isRed) {
        if (isRed) {
            if (!this.redFirstModel) this.redFirstModel = await GameObjPool.asyncSpawn("C825D655443D938EB73591BEEB5CCC81", mwext.GameObjPoolSourceType.Prefab);
            character.attachToSlot(this.redFirstModel, mw.HumanoidSlotType.BackOrnamental);
            this.redFirstModel.localTransform.position = new mw.Vector(15, 0, 0);
            this.redFirstModel.localTransform.rotation = new mw.Rotation(0, 0, -90);
        } else {
            if (!this.blueFirstModel) this.blueFirstModel = await GameObjPool.asyncSpawn("0B59ECA6477D8CA6237016BF613FB019", mwext.GameObjPoolSourceType.Prefab);
            character.attachToSlot(this.blueFirstModel, mw.HumanoidSlotType.BackOrnamental);
            this.blueFirstModel.localTransform.position = new mw.Vector(15, 0, 0);
            this.blueFirstModel.localTransform.rotation = new mw.Rotation(0, 0, -90);
        }
    }
}

__decorate([ Decorator.noReply() ], RankModuleS.prototype, "net_updateSyncPlayer", null);

__decorate([ Decorator.noReply() ], RankModuleS.prototype, "net_onEnterScene", null);

__decorate([ Decorator.noReply() ], RankModuleS.prototype, "net_updateRankByChangeTeam", null);

__decorate([ Decorator.noReply() ], RankModuleS.prototype, "net_setFirstModel", null);

var foreign131 = Object.freeze({
    __proto__: null,
    default: RankModuleS
});

var TaskItemType;

(function(TaskItemType) {
    TaskItemType[TaskItemType["None"] = 0] = "None";
    TaskItemType[TaskItemType["DailyLogin"] = 1] = "DailyLogin";
    TaskItemType[TaskItemType["DailyOnlineTime_5"] = 11] = "DailyOnlineTime_5";
    TaskItemType[TaskItemType["DailyOnlineTime_10"] = 12] = "DailyOnlineTime_10";
    TaskItemType[TaskItemType["DailyOnlineTime_15"] = 13] = "DailyOnlineTime_15";
    TaskItemType[TaskItemType["DailyOnlineTime_20"] = 14] = "DailyOnlineTime_20";
    TaskItemType[TaskItemType["DailyOnlineTime_25"] = 15] = "DailyOnlineTime_25";
    TaskItemType[TaskItemType["DailyOnlineTime_30"] = 16] = "DailyOnlineTime_30";
    TaskItemType[TaskItemType["DailyOnlineTime_40"] = 17] = "DailyOnlineTime_40";
    TaskItemType[TaskItemType["DailyOnlineTime_50"] = 18] = "DailyOnlineTime_50";
    TaskItemType[TaskItemType["DailyOnlineTime_60"] = 19] = "DailyOnlineTime_60";
    TaskItemType[TaskItemType["DailyKilPlayer_1"] = 31] = "DailyKilPlayer_1";
    TaskItemType[TaskItemType["DailyKilPlayer_5"] = 32] = "DailyKilPlayer_5";
    TaskItemType[TaskItemType["DailyKilPlayer_10"] = 33] = "DailyKilPlayer_10";
    TaskItemType[TaskItemType["DailyKilPlayer_20"] = 34] = "DailyKilPlayer_20";
    TaskItemType[TaskItemType["DailyKilPlayer_30"] = 35] = "DailyKilPlayer_30";
    TaskItemType[TaskItemType["DailyKilPlayer_50"] = 36] = "DailyKilPlayer_50";
    TaskItemType[TaskItemType["DailyKilPlayer_100"] = 37] = "DailyKilPlayer_100";
    TaskItemType[TaskItemType["DailyKilPlayer_200"] = 38] = "DailyKilPlayer_200";
    TaskItemType[TaskItemType["DailyKilPlayer_300"] = 39] = "DailyKilPlayer_300";
    TaskItemType[TaskItemType["WeeklyLogin_1"] = 101] = "WeeklyLogin_1";
    TaskItemType[TaskItemType["WeeklyLogin_2"] = 102] = "WeeklyLogin_2";
    TaskItemType[TaskItemType["WeeklyLogin_3"] = 103] = "WeeklyLogin_3";
    TaskItemType[TaskItemType["WeeklyLogin_4"] = 104] = "WeeklyLogin_4";
    TaskItemType[TaskItemType["WeeklyLogin_5"] = 105] = "WeeklyLogin_5";
    TaskItemType[TaskItemType["WeeklyLogin_6"] = 106] = "WeeklyLogin_6";
    TaskItemType[TaskItemType["WeeklyLogin_7"] = 107] = "WeeklyLogin_7";
})(TaskItemType || (TaskItemType = {}));

var TaskType;

(function(TaskType) {
    TaskType[TaskType["DailyTask"] = 1] = "DailyTask";
    TaskType[TaskType["WeeklyTask"] = 2] = "WeeklyTask";
})(TaskType || (TaskType = {}));

class Task {
    constructor(taskId, progress, isGetReward) {
        this.taskId = taskId;
        this.progress = progress;
        this.isGetReward = isGetReward;
    }
}

class TaskData extends Subdata {
    constructor() {
        super(...arguments);
        this.lastDayNow = 0;
        this.lastWeekNow = 0;
        this.dailyTasks = {};
        this.weeklyTasks = {};
    }
    initDefaultData() {
        this.dailyTasks = {};
        this.weeklyTasks = {};
        this.lastDayNow = Date.now();
        this.lastWeekNow = Number(Utils.getWhatDay());
    }
    saveDailyTask(taskId, vipTaskType, progress) {
        let dailyTask = null;
        if (MapEx.has(this.dailyTasks, vipTaskType)) {
            dailyTask = MapEx.get(this.dailyTasks, vipTaskType);
            dailyTask.progress = progress;
        } else {
            dailyTask = new Task(taskId, progress, false);
        }
        MapEx.set(this.dailyTasks, vipTaskType, dailyTask);
    }
    saveWeeklyTask(taskId, vipTaskType, progress) {
        let weeklyTask = null;
        if (MapEx.has(this.weeklyTasks, vipTaskType)) {
            weeklyTask = MapEx.get(this.weeklyTasks, vipTaskType);
            weeklyTask.progress = progress;
        } else {
            weeklyTask = new Task(taskId, progress, false);
        }
        MapEx.set(this.weeklyTasks, vipTaskType, weeklyTask);
    }
    updateTaskCompleteData(vipTaskType) {
        if (MapEx.has(this.dailyTasks, vipTaskType)) {
            let dailyTask = MapEx.get(this.dailyTasks, vipTaskType);
            let nextId = GameConfig.Task.getElement(dailyTask.taskId).NextId;
            if (nextId != 0) {
                dailyTask.taskId = nextId;
                dailyTask.isGetReward = false;
            } else {
                dailyTask.isGetReward = true;
            }
            MapEx.set(this.dailyTasks, vipTaskType, dailyTask);
        }
        if (MapEx.has(this.weeklyTasks, vipTaskType)) {
            let weeklyTask = MapEx.get(this.weeklyTasks, vipTaskType);
            let nextId = GameConfig.Task.getElement(weeklyTask.taskId).NextId;
            if (nextId != 0) {
                weeklyTask.taskId = nextId;
                weeklyTask.isGetReward = false;
            } else {
                weeklyTask.isGetReward = true;
            }
            MapEx.set(this.weeklyTasks, vipTaskType, weeklyTask);
        }
        this.save(true);
    }
    saveLastDayNow(lastDayNow, lastWeekNow) {
        this.lastDayNow = lastDayNow;
        this.lastWeekNow = lastWeekNow;
        this.save(true);
    }
    resetDailyTask() {
        this.dailyTasks = {};
        this.save(true);
    }
    resetWeeklyTask() {
        this.weeklyTasks = {};
        this.save(true);
    }
}

__decorate([ Decorator.persistence() ], TaskData.prototype, "lastDayNow", void 0);

__decorate([ Decorator.persistence() ], TaskData.prototype, "lastWeekNow", void 0);

__decorate([ Decorator.persistence() ], TaskData.prototype, "dailyTasks", void 0);

__decorate([ Decorator.persistence() ], TaskData.prototype, "weeklyTasks", void 0);

var foreign140 = Object.freeze({
    __proto__: null,
    Task: Task,
    TaskData: TaskData,
    get TaskItemType() {
        return TaskItemType;
    },
    get TaskType() {
        return TaskType;
    }
});

class TaskModuleS extends ModuleS {
    constructor() {
        super(...arguments);
        this.playerTaskMap = new Map;
        this.taskCheckTime = 60;
        this.taskCheckTimer = 0;
    }
    onStart() {}
    onPlayerEnterGame(player) {
        this.playerTaskMap.set(player.playerId, player);
        this.checkResetTask_onEnterGame(player, 0);
        this.getClient(player).net_getServerTaskData();
    }
    onPlayerLeft(player) {
        let playerID = player.playerId;
        if (!this.playerTaskMap.has(playerID)) return;
        this.playerTaskMap.delete(playerID);
        DataCenterS.getData(player, TaskData).saveLastDayNow(Date.now(), Number(Utils.getWhatDay()));
    }
    onUpdate(dt) {}
    checkResetTask_onLine(dt) {
        this.taskCheckTimer += dt;
        if (this.taskCheckTimer < this.taskCheckTime) {
            return;
        }
        this.taskCheckTimer = 0;
        let currentTime = Utils.getCurrentTime();
        if (Utils.getWhatDay() == "1" && currentTime == GlobalData.weeklyRefreshTime) {
            this.resetAllPlayersWeeklyTask();
        }
        if (currentTime == GlobalData.dailyRefreshTime) {
            this.resetAllPlayersDailyTask();
        }
    }
    resetAllPlayersDailyTask() {
        this.playerTaskMap.forEach((player => {
            DataCenterS.getData(player, TaskData).resetDailyTask();
        }));
        this.getAllClient().net_resetDailyTask();
    }
    resetAllPlayersWeeklyTask() {
        this.playerTaskMap.forEach((player => {
            DataCenterS.getData(player, TaskData).resetWeeklyTask();
        }));
        this.getAllClient().net_resetWeeklyTask();
    }
    net_saveTaskProgress(dailyTaskIds, dailyTaskTypes, dailyProgresss, weeklyTaskIds, weeklyTaskTypes, weeklyProgresss) {
        if (dailyTaskIds.length != 0) {
            for (let i = 0; i < dailyTaskIds.length; ++i) {
                this.currentData.saveDailyTask(dailyTaskIds[i], dailyTaskTypes[i], dailyProgresss[i]);
            }
        }
        if (weeklyTaskIds.length != 0) {
            for (let i = 0; i < weeklyTaskIds.length; ++i) {
                this.currentData.saveWeeklyTask(weeklyTaskIds[i], weeklyTaskTypes[i], weeklyProgresss[i]);
            }
        }
        this.currentData.save(true);
    }
    net_updateTaskConpleteData(vipTaskType) {
        this.currentData.updateTaskCompleteData(vipTaskType);
    }
    checkResetTask_onEnterGame_GM(player, day) {
        this.checkResetTask_onEnterGame(player, day * 86400 * 1e3);
        this.getClient(player).net_getServerTaskData();
    }
    checkResetTask_onEnterGame(player, day) {
        let dailyRefreshTime = 0;
        let dailyRefreshTimeNums = GlobalData.dailyRefreshTime.split(":");
        dailyRefreshTime = Number(dailyRefreshTimeNums[0]) + Number((Number(dailyRefreshTimeNums[1]) / 60).toFixed(2));
        let weeklyRefreshTime = 0;
        let weeklyRefreshTimeNums = GlobalData.weeklyRefreshTime.split(":");
        weeklyRefreshTime = Number(weeklyRefreshTimeNums[0]) + Number((Number(weeklyRefreshTimeNums[1]) / 60).toFixed(2));
        let currentDayNow = Date.now() + day;
        let lastDayNow = DataCenterS.getData(player, TaskData).lastDayNow;
        let seconds = Math.floor((currentDayNow - lastDayNow) / 1e3);
        let lastDate = new Date(lastDayNow);
        let currentDate = new Date(currentDayNow);
        let lastDay = lastDate.getDay();
        let currentDay = currentDate.getDay();
        let lastHours = lastDate.getHours();
        let currentHours = currentDate.getHours();
        let lastMinutes = lastDate.getMinutes();
        let currentMinutes = currentDate.getMinutes();
        let lastSeconds = lastDate.getSeconds();
        let currentSeconds = currentDate.getSeconds();
        let lastSecondss = lastHours * 3600 + lastMinutes * 60 + lastSeconds;
        let currentSecondss = currentHours * 3600 + currentMinutes * 60 + currentSeconds;
        if (seconds >= 86400) {
            DataCenterS.getData(player, TaskData).resetDailyTask();
        } else {
            if (lastDay == currentDay) {
                if (lastSecondss < dailyRefreshTime * 3600 && currentSecondss >= dailyRefreshTime * 3600) {
                    DataCenterS.getData(player, TaskData).resetDailyTask();
                }
            } else {
                if (lastSecondss >= 0 && lastSecondss < dailyRefreshTime * 3600 && currentSecondss >= 0 && currentSecondss < dailyRefreshTime * 3600 || lastSecondss >= dailyRefreshTime * 3600 && lastSecondss < 24 * 3600 && currentSecondss >= dailyRefreshTime * 3600 && currentSecondss < 24 * 3600) {
                    DataCenterS.getData(player, TaskData).resetDailyTask();
                }
            }
        }
        if (seconds >= 86400 * 7) {
            DataCenterS.getData(player, TaskData).resetWeeklyTask();
        } else {
            let latWhatDay = Utils.getLastDay(lastDay);
            let currentWhatDay = Utils.getWhatDay();
            if (Utils.iSameWeek(lastDayNow, currentDayNow)) {
                if (latWhatDay == "1" && lastSecondss < weeklyRefreshTime * 3600) {
                    if (currentWhatDay == "1" && currentSecondss >= weeklyRefreshTime * 3600 || currentWhatDay != "1") {
                        DataCenterS.getData(player, TaskData).resetWeeklyTask();
                    }
                }
            } else {
                if (latWhatDay == "1" && lastSecondss >= 0 && lastSecondss < weeklyRefreshTime * 3600 && currentWhatDay == "1" && currentSecondss >= 0 && currentSecondss < weeklyRefreshTime * 3600) {
                    DataCenterS.getData(player, TaskData).resetWeeklyTask();
                }
                if ((latWhatDay == "1" && lastSecondss >= weeklyRefreshTime * 3600 && lastSecondss < 24 * 3600 || latWhatDay != "1") && (currentWhatDay == "1" && currentSecondss >= weeklyRefreshTime * 3600 && currentSecondss < 24 * 3600 || currentWhatDay != "1")) {
                    DataCenterS.getData(player, TaskData).resetWeeklyTask();
                }
            }
        }
    }
    net_resetDailyTask() {
        this.currentData.resetDailyTask();
    }
    net_resetWeeklyTask() {
        this.currentData.resetWeeklyTask();
    }
    killPlayer(player) {
        this.getClient(player).net_dailyKillPlayer();
    }
}

__decorate([ Decorator.noReply() ], TaskModuleS.prototype, "net_saveTaskProgress", null);

__decorate([ Decorator.noReply() ], TaskModuleS.prototype, "net_updateTaskConpleteData", null);

var foreign142 = Object.freeze({
    __proto__: null,
    default: TaskModuleS
});

class TeamModuleS extends ModuleS {
    constructor() {
        super(...arguments);
        this.teamMap = new Map;
    }
    onStart() {}
    net_changeTeam(teamType) {
        let userId = this.currentPlayer.userId;
        if (!this.teamMap.has(userId)) return ResultType.Fail3;
        let teamData = this.teamMap.get(userId);
        if (teamData.teamId == teamType) return ResultType.Fail3;
        let redBlueCount = this.getRedBlueCount();
        let redCount = redBlueCount[0], blueCount = redBlueCount[1];
        if (redCount == blueCount) return ResultType.Fail1;
        if (teamType == TeamType.Blue) {
            let tmp = redCount;
            redCount = blueCount;
            blueCount = tmp;
        }
        if (redCount >= blueCount) return ResultType.Fail2;
        teamData.teamId = teamType;
        this.teamMap.delete(userId);
        this.teamMap.set(userId, teamData);
        this.syncTeamData();
        return ResultType.Succeed;
    }
    getRedBlueCount() {
        if (this.teamMap.size == 0) return [];
        let redCount = 0, blueCount = 0;
        this.teamMap.forEach((teamData => {
            if (teamData.teamId == TeamType.Red) {
                redCount++;
            } else {
                blueCount++;
            }
        }));
        return [ redCount, blueCount ];
    }
    net_onEnterScene(playerName) {
        let userId = this.currentPlayer.userId;
        if (this.teamMap.has(userId)) return;
        let teamId = this.getTeamId();
        let teamData = new TeamData(teamId, playerName);
        this.teamMap.set(userId, teamData);
        this.syncTeamData();
    }
    onPlayerLeft(player) {
        let userId = player.userId;
        if (!this.teamMap.has(userId)) return;
        this.teamMap.delete(userId);
        this.syncTeamData();
    }
    getTeamId() {
        if (this.teamMap.size == 0) return TeamType.Red;
        let redCount = 0, blueCount = 0;
        this.teamMap.forEach((teamData => {
            if (teamData.teamId == TeamType.Red) {
                redCount++;
            } else {
                blueCount++;
            }
        }));
        return redCount > blueCount ? TeamType.Blue : TeamType.Red;
    }
    syncTeamData() {
        let userIds = [];
        let playerNames = [];
        let teamIds = [];
        this.teamMap.forEach(((teamData, userId) => {
            userIds.push(userId);
            playerNames.push(teamData.playerName);
            teamIds.push(teamData.teamId);
        }));
        if (userIds.length == 0) return;
        this.getAllClient().net_syncTeamData(userIds, playerNames, teamIds);
    }
    isTeamMate(userId1, userId2) {
        if (!this.teamMap.has(userId1) || !this.teamMap.has(userId2)) return false;
        return this.teamMap.get(userId1).teamId == this.teamMap.get(userId2).teamId;
    }
    isRedTeam(userId) {
        if (!this.teamMap.has(userId)) return true;
        return this.teamMap.get(userId).teamId == TeamType.Red;
    }
}

__decorate([ Decorator.noReply() ], TeamModuleS.prototype, "net_onEnterScene", null);

var foreign146 = Object.freeze({
    __proto__: null,
    default: TeamModuleS
});

class PlayerModuleS extends ModuleS {
    constructor() {
        super(...arguments);
        this.rankModuleS = null;
        this.teamModuleS = null;
        this.coinModuleS = null;
        this.taslModuleS = null;
        this.playerMap = new Map;
        this.playerStatusMap = new Map;
    }
    get getRankModuleS() {
        if (this.rankModuleS == null) {
            this.rankModuleS = ModuleService.getModule(RankModuleS);
        }
        return this.rankModuleS;
    }
    get getTeamModuleS() {
        if (this.teamModuleS == null) {
            this.teamModuleS = ModuleService.getModule(TeamModuleS);
        }
        return this.teamModuleS;
    }
    get getCoinModuleS() {
        if (this.coinModuleS == null) {
            this.coinModuleS = ModuleService.getModule(CoinModuleS);
        }
        return this.coinModuleS;
    }
    get getTaskModuleS() {
        if (this.taslModuleS == null) {
            this.taslModuleS = ModuleService.getModule(TaskModuleS);
        }
        return this.taslModuleS;
    }
    onStart() {
        this.initModule();
        this.initEventAction();
    }
    initModule() {
        this.rankModuleS = ModuleService.getModule(RankModuleS);
        this.teamModuleS = ModuleService.getModule(TeamModuleS);
        this.coinModuleS = ModuleService.getModule(CoinModuleS);
        this.taslModuleS = ModuleService.getModule(TaskModuleS);
    }
    initEventAction() {
        PrefabEvent.PrefabEvtFight.onHit(this.playerAtkPlayer.bind(this));
    }
    onPlayerEnterGame(player) {
        this.initPlayerState(player);
    }
    onPlayerLeft(player) {
        this.deletePlayerState(player);
    }
    initPlayerState(player) {
        let playerStatus = new PlayerStatus;
        playerStatus.isDead = false;
        playerStatus.hp = playerStatus.maxHp;
        this.playerStatusMap.set(player.userId, playerStatus);
        this.playerMap.set(player.character.gameObjectId, player);
        TimeUtil.delaySecond(5).then((() => {
            this.playerBirth(player, 100);
        }));
    }
    deletePlayerState(player) {
        let userId = player.userId;
        if (this.playerStatusMap.has(userId)) {
            this.playerStatusMap.delete(userId);
        }
        let gameObjectId = player.character.gameObjectId;
        if (this.playerMap.has(gameObjectId)) {
            this.playerMap.delete(gameObjectId);
        }
    }
    playerAtkPlayer(senderGuid, targetGuid, damage, hitPoint) {
        if (!this.playerMap.has(senderGuid) || !this.playerMap.has(targetGuid)) return;
        let sendPlayer = this.playerMap.get(senderGuid);
        let targetPlayer = this.playerMap.get(targetGuid);
        if (this.getTeamModuleS.isTeamMate(sendPlayer.userId, targetPlayer.userId)) {
            this.getClient(sendPlayer).net_hitTeammate();
            return;
        }
        if (!hitPoint) hitPoint = targetPlayer.character.worldTransform.position;
        this.updatePlayerData(sendPlayer, targetPlayer, damage, hitPoint);
    }
    updatePlayerData(sendPlayer, targetPlayer, damage, hitPoint) {
        let userId = targetPlayer.userId;
        if (!this.playerStatusMap.has(userId)) return;
        let targetPlayerData = this.playerStatusMap.get(userId);
        if (targetPlayerData.isDead) return;
        let curHp = targetPlayerData.hp;
        curHp -= damage;
        if (curHp <= 0) {
            targetPlayerData.hp = 0;
            targetPlayerData.isDead = true;
            if (sendPlayer) this.updatePlayerKillCount(sendPlayer, targetPlayer);
            targetPlayer.character.ragdollEnabled = true;
            this.playerDie(targetPlayer);
            TimeUtil.delaySecond(3).then((() => {
                targetPlayer.character.ragdollEnabled = false;
                targetPlayerData.hp = targetPlayerData.maxHp;
                this.playerBirth(targetPlayer, targetPlayerData.maxHp);
            }));
        } else {
            targetPlayerData.hp = curHp;
        }
        this.getClient(targetPlayer).net_updateHp(curHp);
        if (sendPlayer) this.getClient(sendPlayer).net_flyText(damage, hitPoint);
    }
    updatePlayerKillCount(killPlayer, diePlayer) {
        if (killPlayer) DataCenterS.getData(killPlayer, PlayerData).setKillCount(1);
        if (diePlayer) DataCenterS.getData(diePlayer, PlayerData).setDieCount(1);
        let userId1 = killPlayer.userId;
        let userId2 = diePlayer ? diePlayer.userId : "-1";
        this.getRankModuleS.refreshKillDieCount(userId1, userId2);
        this.getCoinModuleS.killPlayerAddCoin(killPlayer);
        this.getTaskModuleS.killPlayer(killPlayer);
        let names = [];
        if (userId2 != "-1") {
            names = this.getRankModuleS.getNamesByUserId(userId1, userId2);
        } else {
            names.push(this.getRankModuleS.getNameByUserId(userId1));
            names.push(Utils.randomNpcName());
        }
        if (names && names.length == 2) this.getAllClient().net_killTip(userId1, names[0], userId2, names[1]);
        try {
            if (this.playerStatusMap.get(userId1).isDead == true) this.playerStatusMap.get(userId1).isDead = false;
        } catch (error) {}
    }
    playerKillNpc(senderGuid) {
        if (!this.playerMap.has(senderGuid)) return;
        this.updatePlayerKillCount(this.playerMap.get(senderGuid), null);
    }
    playerAtkNpcFlyText(senderGuid, hitPoint, damage) {
        if (!this.playerMap.has(senderGuid)) return;
        this.getClient(this.playerMap.get(senderGuid)).net_flyText(damage, hitPoint);
    }
    playerDie(player) {
        EffectService.playAtPosition("222147", player.character.worldTransform.position, {
            loopCount: 1
        });
    }
    playerBirth(player, maxHp) {
        this.getClient(player).net_updateHp(maxHp);
        let userId = player.userId;
        let revivalPoint = Utils.randomRevivalPoint(this.getTeamModuleS.isRedTeam(userId));
        player.character.worldTransform.position = revivalPoint;
        Utils.playBirthEffect(player);
        TimeUtil.delaySecond(2).then((() => {
            if (this.playerStatusMap.get(userId).isDead == true) this.playerStatusMap.get(userId).isDead = false;
        }));
    }
    net_addMaxHp() {
        let userId = this.currentPlayer.userId;
        if (!this.playerStatusMap.has(userId)) return 100;
        Utils.playBirthEffect(this.currentPlayer);
        let playerStatus = this.playerStatusMap.get(userId);
        playerStatus.maxHp *= 2;
        playerStatus.hp = playerStatus.maxHp;
        return playerStatus.maxHp;
    }
}

var foreign124 = Object.freeze({
    __proto__: null,
    PlayerModuleS: PlayerModuleS
});

class RadarPanel extends UIScript {
    constructor() {
        super(...arguments);
        this.mCutCanvas = null;
        this.mRadarCanvas = null;
        this.currentPlayer = null;
        this.playerPointMap = new Map;
        this.npcPointMap = new Map;
        this.mapScalRate = 1;
        this.windowSize = mw.Vector.zero;
        this.radarModuleC = null;
    }
    get getRadarModuleC() {
        if (!this.radarModuleC) {
            this.radarModuleC = ModuleService.getModule(RadarModuleC);
        }
        return this.radarModuleC;
    }
    async onAwake() {
        this.radarModuleC = ModuleService.getModule(RadarModuleC);
        this.currentPlayer = await Player.asyncGetLocalPlayer();
        this.initUI();
        this.bindEvent();
    }
    initUI() {
        this.windowSize = WindowUtil.getViewportSize();
        this.rootCanvas.size = this.windowSize;
        this.rootCanvas.zOrder = mw.UILayerTop;
        this.mCutCanvas = mw.Canvas.newObject(this.rootCanvas, "MyCanvas");
        this.mCutCanvas.size = new Vector2(400, 400);
        this.mCutCanvas.zOrder = 2;
        this.mCutCanvas.autoLayoutRule = new mw.UILayout(0, new mw.Margin(0), mw.UILayoutType.Vertical, mw.UILayoutPacket.CenterCenter, new mw.UIHugContent(0, 0), true, false);
        this.mCutCanvas.clipEnable = true;
        let bgp = mw.Image.newObject(this.rootCanvas, "bgp");
        bgp.imageGuid = "114028";
        bgp.imageColor = LinearColor.black;
        bgp.renderOpacity = .3;
        bgp.size = this.mCutCanvas.size.clone();
        let selfCanvas = mw.Canvas.newObject(this.rootCanvas, "selfCanvas");
        selfCanvas.size = new Vector2(64, 64);
        selfCanvas.position = new Vector2(168, 168);
        selfCanvas.zOrder = 1;
        let selfImageArrow_1 = mw.Image.newObject(selfCanvas, "selfImageArrow_1");
        selfImageArrow_1.imageGuid = "298896";
        selfImageArrow_1.size = new Vector2(64, 64);
        selfImageArrow_1.position = new Vector2(0, 20);
        selfImageArrow_1.renderTransformAngle = -90;
        let selfImageArrow_2 = mw.Image.newObject(selfCanvas, "selfImageArrow_2");
        selfImageArrow_2.imageGuid = "114028";
        selfImageArrow_2.size = new Vector2(400, 400);
        selfImageArrow_2.position = new Vector2(-168, -452);
        selfImageArrow_2.renderOpacity = .3;
        selfImageArrow_2.renderTransformAngle = 45;
        this.mRadarCanvas = mw.Canvas.newObject(this.rootCanvas, "radarCanvas");
        this.mRadarCanvas.size = this.mCutCanvas.size.clone();
        this.mRadarCanvas.position = Vector2.zero;
        this.mCutCanvas.addChild(this.mRadarCanvas);
        TimeUtil.setInterval((() => {
            this.mCutCanvas.position = mw.Vector.zero;
            bgp.position = this.mCutCanvas.position;
            selfCanvas.position = this.mCutCanvas.position.add(this.mCutCanvas.size.clone().multiply(.5).clone().subtract(selfCanvas.size.clone().multiply(.5)));
            this.mRadarCanvas.renderTransformAngle = -1 * Camera.currentCamera.worldTransform.clone().rotation.z;
            this.updatePlayerState();
            this.updateNpcState();
        }), .1);
    }
    bindEvent() {
        Player.onPlayerLeave.add((otherPlayer => {
            if (!this.playerPointMap.has(otherPlayer)) return;
            this.playerPointMap.get(otherPlayer).destroyObject();
            this.playerPointMap.delete(otherPlayer);
        }));
    }
    updatePlayerState() {
        Player.getAllPlayers().forEach((otherPlayer => {
            if (otherPlayer == this.currentPlayer) return;
            if (this.playerPointMap.has(otherPlayer)) {
                let otherPlayerPoint = this.playerPointMap.get(otherPlayer);
                let loc = this.Loc2RadarPos(otherPlayer.character.worldTransform.position);
                let offset = otherPlayerPoint.size;
                let retPosition = new Vector2(loc.x - offset.x / 2, loc.y - offset.y / 2);
                console.error(retPosition);
                if (retPosition.x < 0 || retPosition.x > 400 || retPosition.y < 0 || retPosition.y > 400) {
                    Utils.setWidgetVisibility(otherPlayerPoint, mw.SlateVisibility.Collapsed);
                } else {
                    if (otherPlayer.character.ragdollEnabled) {
                        this.setTextBlock(otherPlayerPoint, "×");
                    } else {
                        this.setTextBlock(otherPlayerPoint, "◆");
                    }
                    if (this.getRadarModuleC.isFriendly(this.currentPlayer, otherPlayer)) {
                        this.setTextFontColor(otherPlayerPoint, mw.LinearColor.green);
                    } else {
                        this.setTextFontColor(otherPlayerPoint, mw.LinearColor.red);
                    }
                    Utils.setWidgetVisibility(otherPlayerPoint, mw.SlateVisibility.SelfHitTestInvisible);
                    otherPlayerPoint.position = retPosition;
                }
            } else {
                this.playerPointMap.set(otherPlayer, this.getTextBlockPoint(otherPlayer.userId));
            }
        }));
    }
    updateNpcState() {
        if (!this.npcPointMap || this.npcPointMap.size == 0) return;
        this.npcPointMap.forEach(((value, key) => {
            let loc = this.Loc2RadarPos(key.worldTransform.position);
            let offset = value.size;
            let retPosition = new Vector2(loc.x - offset.x / 2, loc.y - offset.y / 2);
            if (retPosition.x < 0 || retPosition.x > 400 || retPosition.y < 0 || retPosition.y > 400) {
                Utils.setWidgetVisibility(value, mw.SlateVisibility.Collapsed);
            } else {
                if (key.ragdollEnabled) {
                    this.setTextBlock(value, "×");
                } else {
                    this.setTextBlock(value, "◆");
                }
                value.position = new Vector2(loc.x - offset.x / 2, loc.y - offset.y / 2);
                Utils.setWidgetVisibility(value, mw.SlateVisibility.SelfHitTestInvisible);
            }
        }));
    }
    setNpcPoint(npc) {
        this.npcPointMap.set(npc, this.getTextBlockPoint(npc.gameObjectId, true));
    }
    getTextBlockPoint(name, isNpc = false) {
        let textBlockPoint = mw.TextBlock.newObject(this.rootCanvas, name);
        textBlockPoint.fontSize = 32;
        this.setTextBlock(textBlockPoint, "◆");
        textBlockPoint.outlineColor = mw.LinearColor.black;
        textBlockPoint.zOrder = 1;
        textBlockPoint.outlineSize = 1;
        this.setTextFontColor(textBlockPoint, isNpc ? mw.LinearColor.red : mw.LinearColor.green);
        textBlockPoint.textHorizontalLayout = 2;
        textBlockPoint.textJustification = 0;
        textBlockPoint.textVerticalJustification = 0;
        textBlockPoint.textAlign = 0;
        textBlockPoint.textVerticalAlign = 0;
        textBlockPoint.size = new Vector2(32, 32);
        textBlockPoint.visibility = 4;
        this.mRadarCanvas.addChild(textBlockPoint);
        return textBlockPoint;
    }
    Loc2RadarPos(loc) {
        let deltaVector = loc.clone().subtract(this.currentPlayer.character.worldTransform.position.clone()).multiply(new Vector(.1, .1, 0)).multiply(this.mapScalRate);
        let deltaVector2 = new Vector2(deltaVector.clone().y, -1 * deltaVector.clone().x);
        let pos = this.mRadarCanvas.size.clone().multiply(.5).clone().subtract(new Vector2(5, 16)).add(deltaVector2);
        return pos;
    }
    setTextBlock(text, str) {
        if (text.text != str) text.text = str;
    }
    setTextFontColor(text, fontColor) {
        if (text.fontColor != fontColor) text.fontColor = fontColor;
    }
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    hide() {
        mw.UIService.hideUI(this);
    }
}

var foreign128 = Object.freeze({
    __proto__: null,
    default: RadarPanel
});

class RadarModuleC extends ModuleC {
    constructor() {
        super(...arguments);
        this.teamModuleC = null;
        this.radarPanel = null;
    }
    get getTeamModuleC() {
        if (!this.teamModuleC) {
            this.teamModuleC = ModuleService.getModule(TeamModuleC);
        }
        return this.teamModuleC;
    }
    get getRadarPanel() {
        if (!this.radarPanel) {
            this.radarPanel = mw.UIService.create(RadarPanel);
        }
        return this.radarPanel;
    }
    onStart() {
        this.initData();
        this.bindEvent();
    }
    initData() {
        this.teamModuleC = ModuleService.getModule(TeamModuleC);
        this.radarPanel = mw.UIService.create(RadarPanel);
    }
    bindEvent() {
        Event.addLocalListener(EventType.OnOffMainHUD, this.addOnOffRadarPanel.bind(this));
    }
    addOnOffRadarPanel(isOpen) {
        isOpen ? this.getRadarPanel.show() : this.getRadarPanel.hide();
    }
    onEnterScene(sceneType) {
        this.getRadarPanel.show();
    }
    isFriendly(player1, player2) {
        return this.getTeamModuleC.isTeamMate(player1.userId, player2.userId);
    }
}

var foreign126 = Object.freeze({
    __proto__: null,
    default: RadarModuleC
});

class RadarModuleS extends ModuleS {
    onStart() {}
}

var foreign127 = Object.freeze({
    __proto__: null,
    default: RadarModuleS
});

class ShopModuleS extends ModuleS {
    constructor() {
        super(...arguments);
        this.trailingMap = new Map;
    }
    onStart() {
        mw.PurchaseService.onOrderDelivered.add(this.addShipOrder.bind(this));
    }
    addShipOrder(playerId, orderId, commodityId, amount, confirmOrder) {
        this.getClient(playerId).net_deliverGoods(commodityId, amount);
        confirmOrder(true);
    }
    net_buyComplete() {
        this.currentData.buyComplete();
    }
    onPlayerLeft(player) {
        this.deleteTrailing(player.userId);
    }
    net_setShopId(shopType, shopId) {
        this.currentData.setShopId(shopType, shopId);
    }
    net_setUseShopId(shopType, shopId) {
        this.currentData.setUseShopId(shopType, shopId);
    }
    net_setCharacterTrailing(trailingId) {
        this.stopTrailing(this.currentPlayer.userId);
        let effectId = EffectService.playOnGameObject(trailingId, this.currentPlayer.character, {
            loopCount: 0,
            slotType: mw.HumanoidSlotType.BackOrnamental
        });
        this.trailingMap.set(trailingId, effectId);
    }
    stopTrailing(userId) {
        if (this.trailingMap.has(userId)) {
            EffectService.stop(this.trailingMap.get(userId));
        }
    }
    deleteTrailing(userId) {
        if (this.trailingMap.has(userId)) {
            EffectService.stop(this.trailingMap.get(userId));
            this.trailingMap.delete(userId);
        }
    }
}

__decorate([ Decorator.noReply() ], ShopModuleS.prototype, "net_buyComplete", null);

__decorate([ Decorator.noReply() ], ShopModuleS.prototype, "net_setShopId", null);

__decorate([ Decorator.noReply() ], ShopModuleS.prototype, "net_setUseShopId", null);

__decorate([ Decorator.noReply() ], ShopModuleS.prototype, "net_setCharacterTrailing", null);

var foreign137 = Object.freeze({
    __proto__: null,
    default: ShopModuleS
});

let TaskItem_Generate = class TaskItem_Generate extends UIScript {
    get mNameTextBlock() {
        if (!this.mNameTextBlock_Internal && this.uiWidgetBase) {
            this.mNameTextBlock_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mNameTextBlock");
        }
        return this.mNameTextBlock_Internal;
    }
    get mCoinCanvas() {
        if (!this.mCoinCanvas_Internal && this.uiWidgetBase) {
            this.mCoinCanvas_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mCoinCanvas");
        }
        return this.mCoinCanvas_Internal;
    }
    get mCoinTextBlock() {
        if (!this.mCoinTextBlock_Internal && this.uiWidgetBase) {
            this.mCoinTextBlock_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mCoinCanvas/mCoinTextBlock");
        }
        return this.mCoinTextBlock_Internal;
    }
    get mDiamondCanvas() {
        if (!this.mDiamondCanvas_Internal && this.uiWidgetBase) {
            this.mDiamondCanvas_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mDiamondCanvas");
        }
        return this.mDiamondCanvas_Internal;
    }
    get mDiamondTextBlock() {
        if (!this.mDiamondTextBlock_Internal && this.uiWidgetBase) {
            this.mDiamondTextBlock_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mDiamondCanvas/mDiamondTextBlock");
        }
        return this.mDiamondTextBlock_Internal;
    }
    get mFinishButton() {
        if (!this.mFinishButton_Internal && this.uiWidgetBase) {
            this.mFinishButton_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mFinishButton");
        }
        return this.mFinishButton_Internal;
    }
    get mUnfinishTextBlock() {
        if (!this.mUnfinishTextBlock_Internal && this.uiWidgetBase) {
            this.mUnfinishTextBlock_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mUnfinishTextBlock");
        }
        return this.mUnfinishTextBlock_Internal;
    }
    onAwake() {
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        this.mFinishButton.onClicked.add((() => {
            Event.dispatchToLocal("PlayButtonClick", "mFinishButton");
        }));
        this.mFinishButton.touchMethod = mw.ButtonTouchMethod.PreciseTap;
        this.initLanguage(this.mNameTextBlock);
        this.initLanguage(this.mCoinTextBlock);
        this.initLanguage(this.mDiamondTextBlock);
        this.initLanguage(this.mUnfinishTextBlock);
        this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/mFinishButton/TextBlock"));
    }
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) {}
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    hide() {
        mw.UIService.hideUI(this);
    }
};

TaskItem_Generate = __decorate([ UIBind("UI/module/TaskModule/TaskItem.ui") ], TaskItem_Generate);

var TaskItem_Generate$1 = TaskItem_Generate;

var foreign196 = Object.freeze({
    __proto__: null,
    default: TaskItem_Generate$1
});

let TaskPanel_Generate = class TaskPanel_Generate extends UIScript {
    get mDailyTimeTextBlock() {
        if (!this.mDailyTimeTextBlock_Internal && this.uiWidgetBase) {
            this.mDailyTimeTextBlock_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/TaskCanvas/DailyTaskCanvas/DailyTaskTitleImage/mDailyTimeTextBlock");
        }
        return this.mDailyTimeTextBlock_Internal;
    }
    get mDailyTaskBox() {
        if (!this.mDailyTaskBox_Internal && this.uiWidgetBase) {
            this.mDailyTaskBox_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/TaskCanvas/DailyTaskCanvas/mDailyTaskBox");
        }
        return this.mDailyTaskBox_Internal;
    }
    get mDailyTaskCanvas() {
        if (!this.mDailyTaskCanvas_Internal && this.uiWidgetBase) {
            this.mDailyTaskCanvas_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/TaskCanvas/DailyTaskCanvas/mDailyTaskBox/mDailyTaskCanvas");
        }
        return this.mDailyTaskCanvas_Internal;
    }
    get mDailyTaskDoneTextBlock() {
        if (!this.mDailyTaskDoneTextBlock_Internal && this.uiWidgetBase) {
            this.mDailyTaskDoneTextBlock_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/TaskCanvas/DailyTaskCanvas/mDailyTaskDoneTextBlock");
        }
        return this.mDailyTaskDoneTextBlock_Internal;
    }
    get mWeekTimeTextBlock() {
        if (!this.mWeekTimeTextBlock_Internal && this.uiWidgetBase) {
            this.mWeekTimeTextBlock_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/TaskCanvas/WeekTaskCanvas/WeekTaskTitleImage/mWeekTimeTextBlock");
        }
        return this.mWeekTimeTextBlock_Internal;
    }
    get mWeekTaskBox() {
        if (!this.mWeekTaskBox_Internal && this.uiWidgetBase) {
            this.mWeekTaskBox_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/TaskCanvas/WeekTaskCanvas/mWeekTaskBox");
        }
        return this.mWeekTaskBox_Internal;
    }
    get mWeekTaskCanvas() {
        if (!this.mWeekTaskCanvas_Internal && this.uiWidgetBase) {
            this.mWeekTaskCanvas_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/TaskCanvas/WeekTaskCanvas/mWeekTaskBox/mWeekTaskCanvas");
        }
        return this.mWeekTaskCanvas_Internal;
    }
    get mWeekTaskDoneTextBlock() {
        if (!this.mWeekTaskDoneTextBlock_Internal && this.uiWidgetBase) {
            this.mWeekTaskDoneTextBlock_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/TaskCanvas/WeekTaskCanvas/mWeekTaskDoneTextBlock");
        }
        return this.mWeekTaskDoneTextBlock_Internal;
    }
    get mCloseButton() {
        if (!this.mCloseButton_Internal && this.uiWidgetBase) {
            this.mCloseButton_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/TaskCanvas/mCloseButton");
        }
        return this.mCloseButton_Internal;
    }
    onAwake() {
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        this.mCloseButton.onClicked.add((() => {
            Event.dispatchToLocal("PlayButtonClick", "mCloseButton");
        }));
        this.mCloseButton.touchMethod = mw.ButtonTouchMethod.PreciseTap;
        this.initLanguage(this.mDailyTimeTextBlock);
        this.initLanguage(this.mDailyTaskDoneTextBlock);
        this.initLanguage(this.mWeekTimeTextBlock);
        this.initLanguage(this.mWeekTaskDoneTextBlock);
        this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/TaskCanvas/DailyTaskCanvas/DailyTaskTitleImage/DailyTaskTitleTextBlock"));
        this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/TaskCanvas/WeekTaskCanvas/WeekTaskTitleImage/WeekTaskTitleTextBlock"));
    }
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) {}
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    hide() {
        mw.UIService.hideUI(this);
    }
};

TaskPanel_Generate = __decorate([ UIBind("UI/module/TaskModule/TaskPanel.ui") ], TaskPanel_Generate);

var TaskPanel_Generate$1 = TaskPanel_Generate;

var foreign197 = Object.freeze({
    __proto__: null,
    default: TaskPanel_Generate$1
});

class TaskPanel extends TaskPanel_Generate$1 {
    constructor() {
        super(...arguments);
        this.hudPanel = null;
        this.picIndex = 0;
        this.isPic = false;
        this.dailyTaskItemsMap = new Map;
        this.weeklyTaskItemsMap = new Map;
        this.refreshDailyHourTime = 0;
        this.refreshWeekHourTime = 0;
        this.hourTimer = 0;
        this.hourTime = 60;
        this.hour = 0;
        this.week = 0;
    }
    get getHUDPanel() {
        if (this.hudPanel == null) {
            this.hudPanel = mw.UIService.getUI(HUDPanel);
        }
        return this.hudPanel;
    }
    onStart() {
        this.canUpdate = false;
        this.layer = mw.UILayerMiddle;
        this.initUIPanel();
        this.bindButton();
        this.initTime();
    }
    initUIPanel() {
        this.hudPanel = mw.UIService.getUI(HUDPanel);
    }
    bindButton() {
        this.mCloseButton.onClicked.add(this.hideTween.bind(this));
    }
    hideTween() {
        Event.dispatchToLocal(EventType.OnOffMainHUD, true);
        Utils.closeUITween(this.rootCanvas, null, (() => {
            this.hide();
        }));
    }
    onShow(...params) {
        this.canUpdate = true;
        Utils.openUITween(this.rootCanvas, null, null);
    }
    onHide() {
        this.canUpdate = false;
    }
    controllerPic(value) {
        this.picIndex += value;
        if (this.picIndex > 0 && this.isPic == false) {
            this.getHUDPanel.startTaskRedPointTween();
            this.isPic = true;
        } else if (this.picIndex <= 0 && this.isPic == true) {
            this.getHUDPanel.stopTaskRedPointTween();
            this.isPic = false;
        }
    }
    initTaskPanel(dailyTaskDataMap, weeklyTaskDataMap) {
        this.initDailyTaskPanel(dailyTaskDataMap);
        this.initWeeklyTaskPanel(weeklyTaskDataMap);
    }
    initDailyTaskPanel(dailyTaskDataMap) {
        this.recycleAllDailyTaskItem();
        if (dailyTaskDataMap.size == 0) return;
        Utils.setWidgetVisibility(this.mDailyTaskDoneTextBlock, mw.SlateVisibility.Collapsed);
        dailyTaskDataMap.forEach(((value, key) => {
            let dailyTaskItem = UIService.create(TaskItem);
            dailyTaskItem.initTaskItemData(key, value);
            this.mDailyTaskCanvas.addChild(dailyTaskItem.uiObject);
            this.dailyTaskItemsMap.set(key, dailyTaskItem);
        }));
    }
    updateTaskPanel(vipTaskType, progress) {
        if (this.dailyTaskItemsMap.has(vipTaskType)) {
            let dailyTaskItem = this.dailyTaskItemsMap.get(vipTaskType);
            dailyTaskItem.updateTaskItemData(progress);
        }
        if (this.weeklyTaskItemsMap.has(vipTaskType)) {
            let weeklyTaskItem = this.weeklyTaskItemsMap.get(vipTaskType);
            weeklyTaskItem.updateTaskItemData(progress);
        }
    }
    initWeeklyTaskPanel(weeklyTaskDataMap) {
        this.recycleAllWeeklyTaskItem();
        if (weeklyTaskDataMap.size == 0) return;
        Utils.setWidgetVisibility(this.mWeekTaskDoneTextBlock, mw.SlateVisibility.Collapsed);
        weeklyTaskDataMap.forEach(((value, key) => {
            let weeklyTaskItem = UIService.create(TaskItem);
            weeklyTaskItem.initTaskItemData(key, value);
            this.mWeekTaskCanvas.addChild(weeklyTaskItem.uiObject);
            this.weeklyTaskItemsMap.set(key, weeklyTaskItem);
        }));
    }
    updateTaskCompletePanel(vipTaskType) {
        if (this.dailyTaskItemsMap.has(vipTaskType)) {
            let dailyTaskItem = this.dailyTaskItemsMap.get(vipTaskType);
            dailyTaskItem.updateTaskCompaleteItemData();
        }
        if (this.weeklyTaskItemsMap.has(vipTaskType)) {
            let weeklyTaskItem = this.weeklyTaskItemsMap.get(vipTaskType);
            weeklyTaskItem.updateTaskCompaleteItemData();
        }
    }
    recycleTaskItem(vipTaskType) {
        if (this.dailyTaskItemsMap.has(vipTaskType)) {
            let dailyTaskItem = this.dailyTaskItemsMap.get(vipTaskType);
            dailyTaskItem.destroy();
            this.dailyTaskItemsMap.delete(vipTaskType);
            if (this.dailyTaskItemsMap.size <= 0) {
                Utils.setWidgetVisibility(this.mDailyTaskDoneTextBlock, mw.SlateVisibility.SelfHitTestInvisible);
            }
        }
        if (this.weeklyTaskItemsMap.has(vipTaskType)) {
            let weeklyTaskItem = this.weeklyTaskItemsMap.get(vipTaskType);
            weeklyTaskItem.destroy();
            this.weeklyTaskItemsMap.delete(vipTaskType);
            if (this.weeklyTaskItemsMap.size <= 0) {
                Utils.setWidgetVisibility(this.mWeekTaskDoneTextBlock, mw.SlateVisibility.SelfHitTestInvisible);
            }
        }
    }
    recycleAllDailyTaskItem() {
        if (this.dailyTaskItemsMap.size == 0) return;
        this.dailyTaskItemsMap.forEach(((value, key) => {
            value.destroy();
            this.dailyTaskItemsMap.delete(key);
        }));
        this.dailyTaskItemsMap.clear();
    }
    recycleAllWeeklyTaskItem() {
        if (this.weeklyTaskItemsMap.size == 0) return;
        this.weeklyTaskItemsMap.forEach(((value, key) => {
            value.destroy();
            this.weeklyTaskItemsMap.delete(key);
        }));
        this.weeklyTaskItemsMap.clear();
    }
    initTime() {
        this.refreshDailyHourTime = Number(GlobalData.dailyRefreshTime.split(":")[0]);
        this.refreshWeekHourTime = Number(GlobalData.weeklyRefreshTime.split(":")[0]);
        this.hour = (new Date).getHours();
        this.updateHourTime();
        this.week = 8 - Number(Utils.getWhatDay());
        this.updateWeekTime();
    }
    onUpdate(dt) {
        this.hourTimer += dt;
        if (this.hourTimer >= this.hourTime) {
            let hour = (new Date).getHours();
            if (hour != this.hour) {
                this.hour = hour;
                this.updateHourTime();
            }
            let week = Number(Utils.getWhatDay());
            if (week != this.week) {
                this.week = week;
                this.updateWeekTime();
            }
            this.hourTimer = 0;
        }
    }
    updateHourTime() {
        if (this.hour >= 0 && this.hour < this.refreshDailyHourTime) {
            this.hour = this.refreshDailyHourTime - this.hour;
        } else {
            this.hour = 24 - this.hour + this.refreshDailyHourTime;
        }
        this.mDailyTimeTextBlock.text = "剩余: " + this.hour + "小时";
    }
    updateWeekTime() {
        if (Number(Utils.getWhatDay()) == 1 && this.hour < this.refreshWeekHourTime) {
            this.mWeekTimeTextBlock.text = "剩余: " + 1 + "天";
            this.week = 1;
        } else {
            this.mWeekTimeTextBlock.text = "剩余: " + this.week + "天";
        }
    }
}

class TaskItem extends TaskItem_Generate$1 {
    constructor() {
        super(...arguments);
        this.vipTaskType = TaskItemType.None;
        this.task = null;
        this.vIPTaskElement = null;
    }
    onStart() {
        this.initUI();
    }
    initUI() {
        Utils.setWidgetVisibility(this.mFinishButton, mw.SlateVisibility.Collapsed);
    }
    initTaskItemData(vipTaskType, task) {
        this.vipTaskType = vipTaskType;
        this.task = task;
        this.vIPTaskElement = GameConfig.Task.getElement(this.task.taskId);
        if (task.isGetReward) {
            this.isShowFinishBtn(false);
            Utils.setWidgetVisibility(this.mUnfinishTextBlock, mw.SlateVisibility.Collapsed);
        } else {
            let isShow = task.progress >= this.vIPTaskElement.TragetNum;
            this.isShowFinishBtn(isShow);
            if (isShow) {
                mw.UIService.getUI(TaskPanel).controllerPic(1);
            }
        }
        this.mNameTextBlock.text = StringUtil.format(this.vIPTaskElement.Name, this.task.progress, this.vIPTaskElement.TragetNum);
        this.mCoinTextBlock.text = this.vIPTaskElement.Coin.toString();
        this.mDiamondTextBlock.text = this.vIPTaskElement.Diamond.toString();
        if (this.vIPTaskElement.Diamond == 0 || this.vIPTaskElement.Diamond == null) {
            Utils.setWidgetVisibility(this.mDiamondCanvas, mw.SlateVisibility.Collapsed);
        }
        this.mFinishButton.onClicked.add((() => {
            ModuleService.getModule(TaskModuleC).onTaskRewardAction.call(this.vipTaskType, this.task.taskId);
            mw.UIService.getUI(TaskPanel).controllerPic(-1);
        }));
    }
    isShowFinishBtn(isShow) {
        if (isShow) {
            Utils.setWidgetVisibility(this.mFinishButton, mw.SlateVisibility.Visible);
            Utils.setWidgetVisibility(this.mUnfinishTextBlock, mw.SlateVisibility.Collapsed);
        } else {
            Utils.setWidgetVisibility(this.mFinishButton, mw.SlateVisibility.Collapsed);
            Utils.setWidgetVisibility(this.mUnfinishTextBlock, mw.SlateVisibility.SelfHitTestInvisible);
        }
    }
    updateTaskItemData(progress) {
        let tragetNum = this.vIPTaskElement.TragetNum;
        this.task.progress = progress;
        this.mNameTextBlock.text = StringUtil.format(this.vIPTaskElement.Name, progress, tragetNum);
        if (progress >= tragetNum) {
            if (this.mFinishButton.visibility != mw.SlateVisibility.Visible) {
                mw.UIService.getUI(TaskPanel).controllerPic(1);
            }
            this.isShowFinishBtn(true);
        }
    }
    updateTaskCompaleteItemData() {
        let nextId = this.vIPTaskElement.NextId;
        if (nextId != 0) {
            this.task.taskId = nextId;
            this.task.isGetReward = false;
            this.vIPTaskElement = GameConfig.Task.getElement(nextId);
            this.mNameTextBlock.text = StringUtil.format(this.vIPTaskElement.Name, this.task.progress, this.vIPTaskElement.TragetNum);
            this.mCoinTextBlock.text = this.vIPTaskElement.Coin.toString();
            this.mDiamondTextBlock.text = this.vIPTaskElement.Diamond.toString();
            if (this.task.progress >= this.vIPTaskElement.TragetNum) {
                this.isShowFinishBtn(true);
                mw.UIService.getUI(TaskPanel).controllerPic(1);
                return;
            }
        } else {
            Utils.setWidgetVisibility(this.mUnfinishTextBlock, mw.SlateVisibility.Collapsed);
            this.task.isGetReward = true;
            mw.UIService.getUI(TaskPanel).recycleTaskItem(this.vipTaskType);
            return;
        }
        this.isShowFinishBtn(false);
    }
}

var foreign143 = Object.freeze({
    __proto__: null,
    TaskItem: TaskItem,
    default: TaskPanel
});

class TaskModuleC extends ModuleC {
    constructor() {
        super(...arguments);
        this.coinModuleC = null;
        this.taskPanel = null;
        this.hudModuleC = null;
        this.onExecuteTaskAction = new Action2;
        this.onTaskRewardAction = new Action2;
        this.tempDailTask = {};
        this.tempWeeklyTask = {};
        this.dailyTasks = {};
        this.weeklyTasks = {};
        this.dailyTaskMap = new Map;
        this.weeklyTaskMap = new Map;
        this.dailyLoginTimer = 0;
        this.dailyLoginTime = 60;
    }
    get getCoinModuleC() {
        if (this.coinModuleC == null) {
            this.coinModuleC = ModuleService.getModule(CoinModuleC);
        }
        return this.coinModuleC;
    }
    get getTaskPanel() {
        if (this.taskPanel == null) {
            this.taskPanel = mw.UIService.getUI(TaskPanel);
        }
        return this.taskPanel;
    }
    get getHUDModuleC() {
        if (this.hudModuleC == null) {
            this.hudModuleC = ModuleService.getModule(HUDModuleC);
        }
        return this.hudModuleC;
    }
    onStart() {
        this.initModule();
        this.initUIPanel();
        this.initEventAction();
    }
    initModule() {
        this.hudModuleC = ModuleService.getModule(HUDModuleC);
        this.coinModuleC = ModuleService.getModule(CoinModuleC);
    }
    initUIPanel() {
        this.taskPanel = mw.UIService.getUI(TaskPanel);
    }
    initEventAction() {
        this.getHUDModuleC.onOpenTaskAction.add(this.addOpenTaskPanelAction.bind(this));
        this.onExecuteTaskAction.add(this.executeTask.bind(this));
        this.onTaskRewardAction.add(this.getTaskRewardAndUpdateData.bind(this));
    }
    addOpenTaskPanelAction() {
        this.getTaskPanel.show();
        Event.dispatchToLocal(EventType.OnOffMainHUD, false);
    }
    net_getServerTaskData() {
        this.dailyTasks = this.data.dailyTasks;
        this.weeklyTasks = this.data.weeklyTasks;
        this.initTaskData();
        this.dailyLogin();
    }
    saveTaskToServer() {
        if (MapEx.count(this.tempDailTask) <= 0 && MapEx.count(this.tempWeeklyTask) <= 0) return;
        let dailyTaskIds = [];
        let dailyTaskTypes = [];
        let dailyProgresss = [];
        if (MapEx.count(this.tempDailTask) > 0) {
            MapEx.forEach(this.tempDailTask, ((key, value) => {
                dailyTaskIds.push(value.taskId);
                dailyTaskTypes.push(key);
                dailyProgresss.push(value.progress);
                MapEx.del(this.tempDailTask, key);
            }));
        }
        let weeklyTaskIds = [];
        let weeklyTaskTypes = [];
        let weeklyProgresss = [];
        if (MapEx.count(this.tempWeeklyTask) > 0) {
            MapEx.forEach(this.tempWeeklyTask, ((key, value) => {
                weeklyTaskIds.push(value.taskId);
                weeklyTaskTypes.push(key);
                weeklyProgresss.push(value.progress);
                MapEx.del(this.tempWeeklyTask, key);
            }));
        }
        if (dailyTaskIds.length == 0 && weeklyTaskIds.length == 0) {
            return;
        }
        this.server.net_saveTaskProgress(dailyTaskIds, dailyTaskTypes, dailyProgresss, weeklyTaskIds, weeklyTaskTypes, weeklyProgresss);
    }
    initTaskData() {
        this.dailyTaskMap.clear();
        this.weeklyTaskMap.clear();
        let dailyTaskDataMap = new Map;
        let weeklyTaskDataMap = new Map;
        let task = GameConfig.Task.getAllElement();
        for (let i = 0; i < task.length; ++i) {
            if (task[i].TaskType == TaskType.DailyTask) {
                let vipTaskType = task[i].TaskItemType;
                if (this.dailyTaskMap.has(vipTaskType)) continue;
                if (MapEx.has(this.dailyTasks, vipTaskType)) {
                    let value = MapEx.get(this.dailyTasks, vipTaskType);
                    this.dailyTaskMap.set(vipTaskType, GameConfig.Task.getElement(value.taskId));
                    if (value.isGetReward) continue;
                    dailyTaskDataMap.set(vipTaskType, value);
                } else {
                    this.dailyTaskMap.set(vipTaskType, task[i]);
                    dailyTaskDataMap.set(vipTaskType, new Task(task[i].ID, 0, false));
                }
            } else if (task[i].TaskType == TaskType.WeeklyTask) {
                let vipTaskType = task[i].TaskItemType;
                if (this.weeklyTaskMap.has(vipTaskType)) continue;
                if (MapEx.has(this.weeklyTasks, vipTaskType)) {
                    let value = MapEx.get(this.weeklyTasks, vipTaskType);
                    this.weeklyTaskMap.set(vipTaskType, GameConfig.Task.getElement(value.taskId));
                    if (value.isGetReward) continue;
                    weeklyTaskDataMap.set(vipTaskType, value);
                } else {
                    this.weeklyTaskMap.set(vipTaskType, task[i]);
                    weeklyTaskDataMap.set(vipTaskType, new Task(task[i].ID, 0, false));
                }
            }
        }
        if (dailyTaskDataMap.size == 0 && weeklyTaskDataMap.size == 0) return;
        this.getTaskPanel.initTaskPanel(dailyTaskDataMap, weeklyTaskDataMap);
    }
    executeTask(vipTaskType, num) {
        this.executeDailyTask(vipTaskType, num);
        this.executeWeeklyTask(vipTaskType, num);
    }
    executeDailyTask(vipTaskType, num) {
        let progress = 0;
        let taskId = 0;
        if (MapEx.has(this.dailyTasks, vipTaskType)) {
            let task = MapEx.get(this.dailyTasks, vipTaskType);
            progress = task.progress + num;
            GameConfig.Task.getElement(task.taskId).TragetNum;
            taskId = task.taskId;
        } else {
            if (!this.dailyTaskMap.has(vipTaskType)) {
                return;
            }
            let dailTaskElement = this.dailyTaskMap.get(vipTaskType);
            progress = num;
            dailTaskElement.TragetNum;
            taskId = dailTaskElement.ID;
        }
        this.saveDailyTask(taskId, vipTaskType, progress);
        let tmpDailTask = new Task(taskId, progress, false);
        MapEx.set(this.tempDailTask, vipTaskType, tmpDailTask);
        this.getTaskPanel.updateTaskPanel(vipTaskType, progress);
    }
    saveDailyTask(taskId, vipTaskType, progress) {
        let dailTask = null;
        if (MapEx.has(this.dailyTasks, vipTaskType)) {
            dailTask = MapEx.get(this.dailyTasks, vipTaskType);
            dailTask.progress = progress;
        } else {
            dailTask = new Task(taskId, progress, false);
        }
        MapEx.set(this.dailyTasks, vipTaskType, dailTask);
    }
    executeWeeklyTask(vipTaskType, num) {
        let progress = 0;
        let taskId = 0;
        if (MapEx.has(this.weeklyTasks, vipTaskType)) {
            let task = MapEx.get(this.weeklyTasks, vipTaskType);
            progress = task.progress + num;
            GameConfig.Task.getElement(task.taskId).TragetNum;
            taskId = task.taskId;
        } else {
            if (!this.weeklyTaskMap.has(vipTaskType)) {
                return;
            }
            let weeklyTaskElement = this.weeklyTaskMap.get(vipTaskType);
            progress = num;
            weeklyTaskElement.TragetNum;
            taskId = weeklyTaskElement.ID;
        }
        this.saveWeeklyTask(taskId, vipTaskType, progress);
        let tmpWeeklyTask = new Task(taskId, progress, false);
        MapEx.set(this.tempWeeklyTask, vipTaskType, tmpWeeklyTask);
        this.getTaskPanel.updateTaskPanel(vipTaskType, progress);
    }
    saveWeeklyTask(taskId, vipTaskType, progress) {
        let weeklyTask = null;
        if (MapEx.has(this.weeklyTasks, vipTaskType)) {
            weeklyTask = MapEx.get(this.weeklyTasks, vipTaskType);
            weeklyTask.progress = progress;
        } else {
            weeklyTask = new Task(taskId, progress, false);
        }
        MapEx.set(this.weeklyTasks, vipTaskType, weeklyTask);
    }
    getTaskRewardAndUpdateData(vipTaskType, taskId) {
        this.updateTaskCompleteData(vipTaskType);
        this.getTaskPanel.updateTaskCompletePanel(vipTaskType);
        this.getTaskReward(taskId);
    }
    updateTaskCompleteData(vipTaskType) {
        if (MapEx.has(this.dailyTasks, vipTaskType)) {
            let dailyTask = MapEx.get(this.dailyTasks, vipTaskType);
            let nextId = GameConfig.Task.getElement(dailyTask.taskId).NextId;
            if (nextId != 0) {
                dailyTask.taskId = nextId;
                dailyTask.isGetReward = false;
            } else {
                dailyTask.isGetReward = true;
            }
            MapEx.set(this.dailyTasks, vipTaskType, dailyTask);
        }
        if (MapEx.has(this.weeklyTasks, vipTaskType)) {
            let weeklyTask = MapEx.get(this.weeklyTasks, vipTaskType);
            let nextId = GameConfig.Task.getElement(weeklyTask.taskId).NextId;
            if (nextId != 0) {
                weeklyTask.taskId = nextId;
                weeklyTask.isGetReward = false;
            } else {
                weeklyTask.isGetReward = true;
            }
            MapEx.set(this.weeklyTasks, vipTaskType, weeklyTask);
        }
        if (this.dailyTaskMap.has(vipTaskType)) {
            let dailyTaskElement = this.dailyTaskMap.get(vipTaskType);
            if (dailyTaskElement.NextId != 0) {
                this.dailyTaskMap.set(vipTaskType, GameConfig.Task.getElement(dailyTaskElement.NextId));
            }
        }
        if (this.weeklyTaskMap.has(vipTaskType)) {
            let weeklyTaskElement = this.weeklyTaskMap.get(vipTaskType);
            if (weeklyTaskElement.NextId != 0) {
                this.weeklyTaskMap.set(vipTaskType, GameConfig.Task.getElement(weeklyTaskElement.NextId));
            }
        }
        this.server.net_updateTaskConpleteData(vipTaskType);
    }
    getTaskReward(taskId) {
        let taskElement = GameConfig.Task.getElement(taskId);
        let rewardCoin = taskElement.Coin;
        let rewardDiamond = taskElement.Diamond;
        if (rewardCoin > 0) {
            this.getCoinModuleC.setCoin(rewardCoin);
        }
        if (rewardDiamond > 0) {
            this.getCoinModuleC.setDiamond(rewardDiamond);
        }
    }
    net_resetDailyTask() {
        this.dailyTasks = {};
        this.initTaskData();
        this.dailyLogin();
    }
    net_resetWeeklyTask() {
        this.weeklyTasks = {};
        this.initTaskData();
    }
    onUpdate(dt) {
        this.saveTaskToServer();
        this.updateDailyLogin(dt);
    }
    dailyLogin() {
        if (MapEx.has(this.dailyTasks, 1)) return;
        this.onExecuteTaskAction.call(1, 1);
        this.weeklyLogin();
    }
    updateDailyLogin(dt) {
        this.dailyLoginTimer += dt;
        if (this.dailyLoginTimer >= this.dailyLoginTime) {
            this.dailyOnlineTime();
            this.dailyLoginTimer = 0;
        }
    }
    dailyOnlineTime() {
        for (let i = 11; i <= 19; ++i) {
            this.onExecuteTaskAction.call(i, 1);
        }
    }
    net_dailyKillPlayer() {
        for (let i = 31; i <= 39; ++i) {
            this.onExecuteTaskAction.call(i, 1);
        }
    }
    weeklyLogin() {
        for (let i = 101; i <= 107; ++i) {
            this.onExecuteTaskAction.call(i, 1);
        }
    }
}

var foreign141 = Object.freeze({
    __proto__: null,
    default: TaskModuleC
});

let GameLauncher = class GameLauncher extends mw.Script {
    constructor() {
        super(...arguments);
        this.isOpenIAA = true;
        this.languageId = -1;
    }
    onStart() {
        this.onStartCS();
        if (mw.SystemUtil.isClient()) {
            this.useUpdate = true;
            this.onStartC();
        } else if (mw.SystemUtil.isServer()) {
            this.useUpdate = false;
            this.onStartS();
        }
    }
    onStartCS() {
        this.onRegisterModule();
    }
    onUpdate(dt) {
        if (mw.SystemUtil.isClient()) {
            update();
            mw.TweenUtil.TWEEN.update();
            this.onUpdateC(dt);
        } else if (mw.SystemUtil.isServer()) {
            this.onUpdateS(dt);
        }
    }
    onRegisterModule() {
        ModuleService.registerModule(HUDModuleS, HUDModuleC, HUDData);
        ModuleService.registerModule(PlayerModuleS, PlayerModuleC, PlayerData);
        ModuleService.registerModule(CoinModuleS, CoinModuleC, CoinData);
        ModuleService.registerModule(ShopModuleS, ShopModuleC, ShopData);
        ModuleService.registerModule(TeamModuleS, TeamModuleC, null);
        ModuleService.registerModule(RankModuleS, RankModuleC, null);
        ModuleService.registerModule(RadarModuleS, RadarModuleC, null);
        ModuleService.registerModule(ActivityModuleS, ActivityModuleC, ActivityData);
        ModuleService.registerModule(GunModuleS, GunModuleC, null);
        ModuleService.registerModule(TaskModuleS, TaskModuleC, TaskData);
        ModuleService.registerModule(MorphModuleS, MorphModuleC, null);
        ModuleService.registerModule(MallModuleS, MallModuleC, MallData);
    }
    onStartC() {
        GlobalData.isOpenIAA = !mw.SystemUtil.isPIE || this.isOpenIAA;
        this.initLanguage();
    }
    initLanguage() {
        let language = LocaleUtil.getDefaultLocale().toString().toLowerCase();
        console.error(`wfz - language:${language}`);
        let languageId = -1;
        if (mw.SystemUtil.isPIE && this.languageId >= 0) {
            languageId = this.languageId;
        } else {
            if (!!language.match("en")) {
                languageId = 0;
            } else if (!!language.match("zh")) {
                languageId = 1;
            } else if (!!language.match("ja")) {
                languageId = 3;
            } else if (!!language.match("ko")) {
                languageId = 4;
            } else {
                languageId = 2;
            }
        }
        GlobalData.languageId = languageId;
        console.error(`wfz - languageId:${languageId}`);
        GameConfig.initLanguage(languageId, (key => {
            let ele = GameConfig.Language.getElement(key);
            if (ele == null) return "unknow_" + key;
            return ele.Value;
        }));
        mw.UIScript.addBehavior("lan", (ui => {
            let key = ui.text;
            if (key) {
                let lan = GameConfig.Language.getElement(key);
                if (lan) ui.text = lan.Value;
            }
        }));
    }
    onUpdateC(dt) {}
    onStartS() {
        DataStorage.setTemporaryStorage(SystemUtil.isPIE);
    }
    onUpdateS(dt) {}
};

__decorate([ mw.Property({
    displayName: "是否开启IAA",
    group: "面板设置"
}) ], GameLauncher.prototype, "isOpenIAA", void 0);

__decorate([ mw.Property({
    displayName: "多语言",
    group: "脚本设置",
    enumType: {
        "系统默认": -1,
        "英语": 0,
        "简体中文": 1,
        "繁体中文": 2,
        "日语": 3,
        "韩语": 4
    }
}) ], GameLauncher.prototype, "languageId", void 0);

GameLauncher = __decorate([ Component ], GameLauncher);

var GameLauncher$1 = GameLauncher;

var foreign80 = Object.freeze({
    __proto__: null,
    default: GameLauncher$1
});

var foreign90 = Object.freeze({
    __proto__: null
});

var foreign91 = Object.freeze({
    __proto__: null
});

let GMHUD_Generate = class GMHUD_Generate extends UIScript {
    get oKbutton() {
        if (!this.oKbutton_Internal && this.uiWidgetBase) {
            this.oKbutton_Internal = this.uiWidgetBase.findChildByPath("MWCanvas_2147482460/oKbutton");
        }
        return this.oKbutton_Internal;
    }
    get dropList() {
        if (!this.dropList_Internal && this.uiWidgetBase) {
            this.dropList_Internal = this.uiWidgetBase.findChildByPath("MWCanvas_2147482460/dropList");
        }
        return this.dropList_Internal;
    }
    get argText() {
        if (!this.argText_Internal && this.uiWidgetBase) {
            this.argText_Internal = this.uiWidgetBase.findChildByPath("MWCanvas_2147482460/argText");
        }
        return this.argText_Internal;
    }
    get cmdButton() {
        if (!this.cmdButton_Internal && this.uiWidgetBase) {
            this.cmdButton_Internal = this.uiWidgetBase.findChildByPath("MWCanvas_2147482460/cmdButton");
        }
        return this.cmdButton_Internal;
    }
    get pingText() {
        if (!this.pingText_Internal && this.uiWidgetBase) {
            this.pingText_Internal = this.uiWidgetBase.findChildByPath("MWCanvas_2147482460/pingText");
        }
        return this.pingText_Internal;
    }
    onAwake() {
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        this.oKbutton.onClicked.add((() => {
            Event.dispatchToLocal("PlayButtonClick", "oKbutton");
        }));
        this.initLanguage(this.oKbutton);
        this.oKbutton.touchMethod = mw.ButtonTouchMethod.PreciseTap;
        this.cmdButton.onClicked.add((() => {
            Event.dispatchToLocal("PlayButtonClick", "cmdButton");
        }));
        this.initLanguage(this.cmdButton);
        this.cmdButton.touchMethod = mw.ButtonTouchMethod.PreciseTap;
        this.initLanguage(this.pingText);
    }
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) {}
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    hide() {
        mw.UIService.hideUI(this);
    }
};

GMHUD_Generate = __decorate([ UIBind("UI/module/GMModule/GMHUD.ui") ], GMHUD_Generate);

var GMHUD_Generate$1 = GMHUD_Generate;

var foreign171 = Object.freeze({
    __proto__: null,
    default: GMHUD_Generate$1
});

let GMItem_Generate = class GMItem_Generate extends UIScript {
    get button() {
        if (!this.button_Internal && this.uiWidgetBase) {
            this.button_Internal = this.uiWidgetBase.findChildByPath("MWCanvas_2147482460/button");
        }
        return this.button_Internal;
    }
    onAwake() {
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        this.button.onClicked.add((() => {
            Event.dispatchToLocal("PlayButtonClick", "button");
        }));
        this.initLanguage(this.button);
        this.button.touchMethod = mw.ButtonTouchMethod.PreciseTap;
    }
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) {}
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    hide() {
        mw.UIService.hideUI(this);
    }
};

GMItem_Generate = __decorate([ UIBind("UI/module/GMModule/GMItem.ui") ], GMItem_Generate);

var GMItem_Generate$1 = GMItem_Generate;

var foreign172 = Object.freeze({
    __proto__: null,
    default: GMItem_Generate$1
});

var GMService_1;

const GMConfig = [];

function AddGMCommand(cmd) {
    GMConfig.push(cmd);
}

AddGMCommand({
    label: "pA",
    clientCmd: (player, value) => {},
    serverCmd: async (player, value) => {
        await Utils.asyncDownloadAsset(value);
        let pA = player.character.loadAnimation(value);
        pA.loop = 0;
        pA.play();
    }
});

let GMService = GMService_1 = class GMService extends mw.Script {
    createUI(dropDownList) {
        GMConfig.forEach((cmd => {
            dropDownList.addItem(cmd);
        }));
    }
    async onStart() {
        await ModuleService.ready();
        GMService_1.instance = this;
        if (mw.SystemUtil.isClient()) {
            console.log("[GM]：模块初始化");
            new GMBasePanel;
            Event.addLocalListener(EventType.OnOffMainHUD, (isOpen => {
                isOpen ? OpenGMUI() : CloseGMUI();
            }));
        }
    }
    cmd(player, data, param) {
        if (mw.SystemUtil.isClient()) {
            if (data.clientCmd) {
                data.clientCmd(player, param);
            }
            if (data.serverCmd) {
                const index = GMConfig.indexOf(data);
                this.onServerCmd(player, index, param);
            }
        } else if (mw.SystemUtil.isServer()) {
            if (data.serverCmd) {
                data.serverCmd(player, param);
            }
            if (data.clientCmd) {
                const index = GMConfig.indexOf(data);
                this.onClientCmd(player, index, param);
            }
        }
    }
    onServerCmd(player, index, param) {
        GMConfig[index].serverCmd(player, param);
    }
    onClientCmd(player, index, param) {
        GMConfig[index].clientCmd(player, param);
    }
};

__decorate([ RemoteFunction(mw.Server) ], GMService.prototype, "onServerCmd", null);

__decorate([ RemoteFunction(mw.Client) ], GMService.prototype, "onClientCmd", null);

GMService = GMService_1 = __decorate([ Component ], GMService);

var GMService$1 = GMService;

class GMBasePanel {
    constructor() {
        this._view = mw.UIService.show(GMHUD_Generate$1);
        this.dropDownList = new DropdownList({
            panel: this._view.dropList,
            button: this._view.oKbutton,
            label: this._view.cmdButton
        }, GMItem_Generate$1, ((ui, data) => {
            ui.button.onClicked.add((() => {
                GMService.instance.cmd(Player.localPlayer, data, this._view.argText.text);
            }));
            ui.button.text = data.label;
        }), 5);
        GMService.instance.createUI(this.dropDownList);
        this._view.cmdButton.onClicked.add((() => {
            if (this.dropDownList.selectItem) {
                GMService.instance.cmd(Player.localPlayer, this.dropDownList.selectItem.data, this._view.argText.text);
            }
        }));
    }
}

function OpenGMUI() {
    mw.UIService.show(GMHUD_Generate$1);
}

function CloseGMUI() {
    mw.UIService.hide(GMHUD_Generate$1);
}

class DropdownList {
    constructor(_root, _itemCls, _onCreate, space = 0) {
        this._root = _root;
        this._itemCls = _itemCls;
        this._onCreate = _onCreate;
        this.space = space;
        this._cache = [];
        this._items = [];
        this.addExpandEvent();
    }
    addExpandEvent() {
        this._root.button.onClicked.add((() => {
            this._isDropdown = !this._isDropdown;
            this._invalidateLayout();
        }));
    }
    get selectItem() {
        return this._select;
    }
    addItem(data, index = -1) {
        let itemUI = this._cache.length > 0 ? this._cache.shift() : mw.UIService.create(this._itemCls);
        if (!itemUI.list) {
            itemUI.list = this;
            itemUI.button.touchMethod = mw.ButtonTouchMethod.PreciseTap;
            itemUI.button.onClicked.add((() => {
                this._select = itemUI;
                this._root.label.text = data.label;
                this._isDropdown = !this._isDropdown;
                this._invalidateLayout();
            }));
            this._root.panel.addChild(itemUI.uiObject);
        }
        itemUI.data = data;
        this._onCreate(itemUI, data);
        itemUI.rootCanvas.autoSizeEnable = true;
        if (!this._itemSize) {
            this._itemSize = itemUI.rootCanvas.size;
            const height = this._root.panel.size.y;
            this._root.panel.size = new mw.Vector2(this._itemSize.x, height);
        }
        if (index >= 0) {
            this._items.splice(index, 0, itemUI);
        } else {
            this._items.push(itemUI);
        }
        this._invalidateLayout();
    }
    removeItem(node) {
        const index = this._items.indexOf(node);
        if (index >= 0) {
            node.visible = false;
            this._cache.push(...this._items.splice(index, 1));
            this._invalidateLayout();
        }
    }
    removeItemAt(index) {
        const node = this.getItem(index);
        if (node) {
            this.removeItem(node);
        }
    }
    getItem(index) {
        if (index >= 0 && index < this._items.length) return this._items[index];
        return null;
    }
    _invalidateLayout() {
        if (this._isDropdown) {
            let offset = 0;
            this._root.panel.visibility = mw.SlateVisibility.SelfHitTestInvisible;
            for (let i = 0; i < this._items.length; i++) {
                this._items[i].uiObject.position = new mw.Vector2(0, offset);
                offset += this._itemSize.y + this.space;
            }
        } else {
            this._root.panel.visibility = mw.SlateVisibility.Collapsed;
        }
    }
}

var foreign92 = Object.freeze({
    __proto__: null,
    AddGMCommand: AddGMCommand,
    CloseGMUI: CloseGMUI,
    OpenGMUI: OpenGMUI,
    default: GMService$1
});

let WeaponUI_Generate = class WeaponUI_Generate extends UIScript {
    get point() {
        if (!this.point_Internal && this.uiWidgetBase) {
            this.point_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/PointCanvas/point");
        }
        return this.point_Internal;
    }
    get up() {
        if (!this.up_Internal && this.uiWidgetBase) {
            this.up_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/PointCanvas/up");
        }
        return this.up_Internal;
    }
    get down() {
        if (!this.down_Internal && this.uiWidgetBase) {
            this.down_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/PointCanvas/down");
        }
        return this.down_Internal;
    }
    get left() {
        if (!this.left_Internal && this.uiWidgetBase) {
            this.left_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/PointCanvas/left");
        }
        return this.left_Internal;
    }
    get right() {
        if (!this.right_Internal && this.uiWidgetBase) {
            this.right_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/PointCanvas/right");
        }
        return this.right_Internal;
    }
    get move() {
        if (!this.move_Internal && this.uiWidgetBase) {
            this.move_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/move");
        }
        return this.move_Internal;
    }
    get right_fire() {
        if (!this.right_fire_Internal && this.uiWidgetBase) {
            this.right_fire_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/right_fire");
        }
        return this.right_fire_Internal;
    }
    get reload() {
        if (!this.reload_Internal && this.uiWidgetBase) {
            this.reload_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/reload");
        }
        return this.reload_Internal;
    }
    get crouch() {
        if (!this.crouch_Internal && this.uiWidgetBase) {
            this.crouch_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/crouch");
        }
        return this.crouch_Internal;
    }
    get jump() {
        if (!this.jump_Internal && this.uiWidgetBase) {
            this.jump_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/jump");
        }
        return this.jump_Internal;
    }
    get aim() {
        if (!this.aim_Internal && this.uiWidgetBase) {
            this.aim_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/aim");
        }
        return this.aim_Internal;
    }
    get left_fire() {
        if (!this.left_fire_Internal && this.uiWidgetBase) {
            this.left_fire_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/left_fire");
        }
        return this.left_fire_Internal;
    }
    get icon() {
        if (!this.icon_Internal && this.uiWidgetBase) {
            this.icon_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/GunCanvas/icon");
        }
        return this.icon_Internal;
    }
    get name() {
        if (!this.name_Internal && this.uiWidgetBase) {
            this.name_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/GunCanvas/name");
        }
        return this.name_Internal;
    }
    get bullet() {
        if (!this.bullet_Internal && this.uiWidgetBase) {
            this.bullet_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/GunCanvas/bullet");
        }
        return this.bullet_Internal;
    }
    get mKeepTimeCanvas() {
        if (!this.mKeepTimeCanvas_Internal && this.uiWidgetBase) {
            this.mKeepTimeCanvas_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mKeepTimeCanvas");
        }
        return this.mKeepTimeCanvas_Internal;
    }
    get keepTimeBar() {
        if (!this.keepTimeBar_Internal && this.uiWidgetBase) {
            this.keepTimeBar_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mKeepTimeCanvas/keepTimeBar");
        }
        return this.keepTimeBar_Internal;
    }
    get keepTimeTxt() {
        if (!this.keepTimeTxt_Internal && this.uiWidgetBase) {
            this.keepTimeTxt_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mKeepTimeCanvas/keepTimeTxt");
        }
        return this.keepTimeTxt_Internal;
    }
    onAwake() {
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        this.reload.onClicked.add((() => {
            Event.dispatchToLocal("PlayButtonClick", "reload");
        }));
        this.reload.touchMethod = mw.ButtonTouchMethod.PreciseTap;
        this.crouch.onClicked.add((() => {
            Event.dispatchToLocal("PlayButtonClick", "crouch");
        }));
        this.crouch.touchMethod = mw.ButtonTouchMethod.PreciseTap;
        this.jump.onClicked.add((() => {
            Event.dispatchToLocal("PlayButtonClick", "jump");
        }));
        this.jump.touchMethod = mw.ButtonTouchMethod.PreciseTap;
        this.aim.onClicked.add((() => {
            Event.dispatchToLocal("PlayButtonClick", "aim");
        }));
        this.aim.touchMethod = mw.ButtonTouchMethod.PreciseTap;
        this.left_fire.onClicked.add((() => {
            Event.dispatchToLocal("PlayButtonClick", "left_fire");
        }));
        this.left_fire.touchMethod = mw.ButtonTouchMethod.PreciseTap;
        this.initLanguage(this.name);
        this.initLanguage(this.bullet);
        this.initLanguage(this.keepTimeTxt);
    }
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) {}
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    hide() {
        mw.UIService.hideUI(this);
    }
};

WeaponUI_Generate = __decorate([ UIBind("UI/module/GunModule/WeaponUI.ui") ], WeaponUI_Generate);

var WeaponUI_Generate$1 = WeaponUI_Generate;

var foreign173 = Object.freeze({
    __proto__: null,
    default: WeaponUI_Generate$1
});

class WeaponUI extends WeaponUI_Generate$1 {
    constructor() {
        super(...arguments);
        this.curWeapon = null;
        this.upPosition = mw.Vector2.zero;
        this.downPosition = mw.Vector2.zero;
        this.leftPosition = mw.Vector2.zero;
        this.rightPosition = mw.Vector2.zero;
        this.upCurPosition = mw.Vector2.zero;
        this.downCurPosition = mw.Vector2.zero;
        this.leftCurPosition = mw.Vector2.zero;
        this.rightCurPosition = mw.Vector2.zero;
    }
    onStart() {
        this.right_fire.onJoyStickDown.add((() => {
            if (!this.curWeapon) return;
            this.curWeapon.startFire();
        }));
        this.right_fire.onJoyStickUp.add((() => {
            if (!this.curWeapon) return;
            this.curWeapon.stopFire();
        }));
        this.left_fire.onPressed.add((() => {
            if (!this.curWeapon) return;
            this.curWeapon.startFire();
        }));
        this.left_fire.onReleased.add((() => {
            if (!this.curWeapon) return;
            this.curWeapon.stopFire();
        }));
        this.reload.onClicked.add((() => {
            if (!this.curWeapon) return;
            this.curWeapon.startReload();
        }));
        this.aim.onClicked.add((() => {
            if (!this.curWeapon) return;
            if (this.curWeapon.isAimming) {
                this.curWeapon.stopAim();
            } else {
                this.curWeapon.startAim();
            }
        }));
        this.crouch.onClicked.add((() => {
            let player = Player.localPlayer;
            if (player) {
                if (player.character.isCrouching) {
                    player.character.crouch(false);
                } else {
                    player.character.crouch(true);
                }
            }
        }));
        this.jump.onClicked.add((() => {
            let player = Player.localPlayer;
            if (player) {
                player.character.jump();
                if (!player.character.movementEnabled) player.character.movementEnabled = true;
            }
        }));
        Event.addLocalListener("HotWeapon-Unequiped", (() => {
            if (this.curWeapon != null) {
                this.curWeapon.unEquip();
                this.curWeapon = null;
            }
        }));
        let hudModuleC = ModuleService.getModule(HUDModuleC);
        let inputScale = hudModuleC.getFireScale;
        this.right_fire.inputScale = new mw.Vector2(inputScale, inputScale);
        hudModuleC.onFireScaleAction.add((scale => {
            this.right_fire.inputScale = new mw.Vector2(scale, scale);
        }));
    }
    onShow(weapon, crossValue, iconId, weaponName) {
        this.curWeapon = weapon;
        mw.assetIDChangeIconUrlRequest([ iconId ]).then((() => {
            try {
                this.icon.setImageByAssetIconData(mw.getAssetIconDataByAssetID(iconId));
            } catch (error) {}
        }));
        this.name.text = weaponName;
        this.upPosition = this.upPosition.set(this.up.position);
        this.downPosition = this.downPosition.set(this.down.position);
        this.leftPosition = this.leftPosition.set(this.left.position);
        this.rightPosition = this.rightPosition.set(this.right.position);
        this.changeCross(crossValue * 10);
    }
    onHide() {
        this.changeCross(0);
    }
    changeBullet(bullet, ammo) {
        if (ammo == -1) {
            this.bullet.text = `${bullet} / 无限`;
        } else {
            this.bullet.text = `${bullet} / ${ammo}`;
        }
    }
    changeCross(value) {
        this.up.position = this.upCurPosition.set(this.upPosition.x, this.upPosition.y - value);
        this.down.position = this.downCurPosition.set(this.downPosition.x, this.downPosition.y + value);
        this.left.position = this.leftCurPosition.set(this.leftPosition.x - value, this.leftPosition.y);
        this.right.position = this.rightCurPosition.set(this.rightPosition.x + value, this.rightPosition.y);
    }
    setTimeText(restTime, keepTime) {
        if (restTime <= 0) {
            this.mKeepTimeCanvas.visibility = mw.SlateVisibility.Collapsed;
        } else {
            this.mKeepTimeCanvas.visibility = mw.SlateVisibility.SelfHitTestInvisible;
            let percent = restTime / keepTime;
            this.keepTimeBar.percent = percent;
            this.keepTimeTxt.text = `${restTime.toFixed(1)}s`;
        }
    }
    setReloadBtn(enable) {
        this.reload.visibility = enable ? mw.SlateVisibility.Visible : mw.SlateVisibility.Collapsed;
    }
}

var foreign95 = Object.freeze({
    __proto__: null,
    default: WeaponUI
});

const SHOOT_RANGE = 1e5;

const CASING_LIFE = 1;

const CASING_OFFSET = new mw.Vector(8, 5, 10);

const DEBUG_FLAG = false;

const GRAVITAIONAL_ACCELERATION = 9.8;

const MAX_SHOOTSPEED = 10001;

class Pool {
    constructor() {
        this.mCacheStack = new Array;
        this.mUsingArray = new Array;
    }
    get CacheStackCount() {
        return this.mCacheStack.length;
    }
    get UsingCount() {
        return this.mUsingArray.length;
    }
    allocate() {
        let obj = this.mCacheStack.length > 0 ? this.mCacheStack.pop() : this.mFactory.create();
        this.mUsingArray.push(obj);
        return obj;
    }
    release() {
        for (let i = 0; i < this.mUsingArray.length; i++) {
            const element = this.mUsingArray[i];
            this.mFactory.destroy(element);
        }
        this.mUsingArray.length = 0;
        for (let i = 0; i < this.mCacheStack.length; i++) {
            const element = this.mCacheStack[i];
            this.mFactory.destroy(element);
        }
        this.mCacheStack.length = 0;
    }
}

class CustomObjectFactory {
    constructor(factoryCreateMethod, factoryDestroyMethod) {
        this.mFactoryCreateMethod = factoryCreateMethod;
        this.mFactoryDestroyMethod = factoryDestroyMethod;
    }
    create() {
        return this.mFactoryCreateMethod();
    }
    destroy(obj) {
        return this.mFactoryDestroyMethod(obj);
    }
}

class SimpleObjectPool extends Pool {
    constructor(factoryCreateMethod, factoryDestroyMethod, resetMethod = null) {
        super();
        this.mFactory = new CustomObjectFactory(factoryCreateMethod, factoryDestroyMethod);
        this.mResetMethod = resetMethod;
    }
    recycle(obj) {
        if (this.mCacheStack.indexOf(obj) > -1) {
            return;
        }
        if (this.mResetMethod != null) {
            this.mResetMethod(obj);
        }
        let index = this.mUsingArray.indexOf(obj);
        if (index > -1) {
            this.mUsingArray.splice(index, 1);
        }
        this.mCacheStack.push(obj);
        return true;
    }
    recycleAll() {
        for (let i = 0; i < this.mUsingArray.length; i++) {
            const element = this.mUsingArray[i];
            this.mResetMethod(element);
            this.mCacheStack.push(element);
        }
        this.mUsingArray.length = 0;
    }
    printTotalSize() {}
}

class Ammo {
    constructor(owner, ammoPool, startLoc, direction, shootRange, ammoSpeed, gravityScale, detectRadius, hitResult = []) {
        this.owner = owner;
        this.ammoPool = ammoPool;
        this.entity = this.ammoPool.allocate();
        this.entity.parent = null;
        this.currentLocation = startLoc.clone();
        this.entity.worldTransform.position = this.currentLocation;
        this.entity.worldTransform.rotation = direction.toRotation();
        this.entity.setVisibility(mw.PropertyStatus.On);
        this.displacement = mw.Vector.multiply(direction, ammoSpeed, this.displacement);
        this.lifeTime = shootRange / ammoSpeed;
        this.currentTime = 0;
        this.gravityScale = gravityScale;
        this.stride = mw.Vector.zero;
        this.detectRadius = detectRadius;
        this.hitResult = hitResult;
    }
    update(dt) {
        this.stride = mw.Vector.multiply(this.displacement, dt, this.stride);
        if (this.gravityScale) {
            this.stride.z -= 50 * this.gravityScale * GRAVITAIONAL_ACCELERATION * (Math.pow(this.currentTime + dt, 2) - Math.pow(this.currentTime, 2));
            this.entity.worldTransform.rotation = this.stride.toRotation();
            this.currentTime += dt;
        }
        this.currentLocation.x += this.stride.x;
        this.currentLocation.y += this.stride.y;
        this.currentLocation.z += this.stride.z;
        if (this.detectRadius) {
            if (this.detectRadius < 10) {
                let lineResult = QueryUtil.lineTrace(this.entity.worldTransform.position, this.currentLocation, true, DEBUG_FLAG);
                lineResult = lineResult.filter((e => !(e.gameObject instanceof mw.Trigger)));
                if (lineResult.length > 0) {
                    this.lifeTime = -1;
                    let temp = new Array;
                    for (let element of lineResult) {
                        temp.push(element);
                    }
                    this.hitResult = temp;
                }
            } else {
                let boxResult = Utils.modifyboxOverlapInLevel(this.entity.worldTransform.position, this.currentLocation, this.detectRadius, this.detectRadius, DEBUG_FLAG);
                if (boxResult.length > 0) {
                    this.lifeTime = -1;
                    this.hitResult = boxResult;
                }
            }
        }
        this.entity.worldTransform.position = this.currentLocation;
        this.lifeTime -= dt;
        return this.lifeTime <= 0;
    }
    destroy() {
        this.ammoPool.recycle(this.entity);
    }
}

class Casing {
    constructor(casingPool, casing, direction) {
        this.casingPool = casingPool;
        this.loc = mw.Vector.add(casing.worldTransform.position, casing.worldTransform.rotation.rotateVector(CASING_OFFSET));
        this.entity = this.casingPool.allocate();
        this.entity.worldTransform.position = this.loc;
        this.entity.worldTransform.rotation = new mw.Rotation(mw.MathUtil.randomFloat(0, 180), mw.MathUtil.randomFloat(0, 180), mw.MathUtil.randomFloat(0, 180));
        this.entity.setVisibility(mw.PropertyStatus.On);
        this.displacement = direction.multiply(100);
        this.gravity = mw.MathUtil.randomFloat(1, 3);
        this.lifeTime = CASING_LIFE;
        this.stride = mw.Vector.zero;
    }
    update(dt) {
        this.stride = mw.Vector.multiply(this.displacement, dt, this.stride);
        this.loc.x += this.stride.x;
        this.loc.y += this.stride.y;
        this.loc.z += this.stride.z + this.gravity;
        this.gravity -= dt * 20;
        this.entity.worldTransform.position = this.loc;
        this.lifeTime -= dt;
        return this.lifeTime <= 0;
    }
    destroy() {
        this.casingPool.recycle(this.entity);
    }
}

class WeaponAction {
    constructor() {
        this.shootAnimation = "";
        this.aimShootAnimation = "";
        this.reloadAnimation = "";
        this.loadAnimation = "";
        this.equipAnimation = "";
        this.unequipAnimation = "";
        this.holdStance = "";
        this.aimStance = "";
    }
}

let MaleAction = class MaleAction extends WeaponAction {
    constructor() {
        super(...arguments);
        this.shootAnimation = "80484";
        this.aimShootAnimation = "80483";
        this.reloadAnimation = "80479";
        this.loadAnimation = "80482";
        this.equipAnimation = "80585";
        this.unequipAnimation = "80481";
        this.holdStance = "94258";
        this.aimStance = "94261";
    }
};

__decorate([ mw.Property({
    displayName: "射击动画"
}) ], MaleAction.prototype, "shootAnimation", void 0);

__decorate([ mw.Property({
    displayName: "瞄准射击动画"
}) ], MaleAction.prototype, "aimShootAnimation", void 0);

__decorate([ mw.Property({
    displayName: "换弹动画"
}) ], MaleAction.prototype, "reloadAnimation", void 0);

__decorate([ mw.Property({
    displayName: "上膛动画"
}) ], MaleAction.prototype, "loadAnimation", void 0);

__decorate([ mw.Property({
    displayName: "装备武器动画"
}) ], MaleAction.prototype, "equipAnimation", void 0);

__decorate([ mw.Property({
    displayName: "卸载武器动画"
}) ], MaleAction.prototype, "unequipAnimation", void 0);

__decorate([ mw.Property({
    displayName: "持有姿态"
}) ], MaleAction.prototype, "holdStance", void 0);

__decorate([ mw.Property({
    displayName: "瞄准姿态"
}) ], MaleAction.prototype, "aimStance", void 0);

MaleAction = __decorate([ Serializable ], MaleAction);

let FemaleAction = class FemaleAction extends WeaponAction {
    constructor() {
        super(...arguments);
        this.shootAnimation = "49094";
        this.aimShootAnimation = "49095";
        this.reloadAnimation = "80479";
        this.loadAnimation = "80482";
        this.equipAnimation = "80585";
        this.unequipAnimation = "80481";
        this.holdStance = "49096";
        this.aimStance = "49098";
    }
};

__decorate([ mw.Property({
    displayName: "射击动画"
}) ], FemaleAction.prototype, "shootAnimation", void 0);

__decorate([ mw.Property({
    displayName: "瞄准射击动画"
}) ], FemaleAction.prototype, "aimShootAnimation", void 0);

__decorate([ mw.Property({
    displayName: "换弹动画"
}) ], FemaleAction.prototype, "reloadAnimation", void 0);

__decorate([ mw.Property({
    displayName: "上膛动画"
}) ], FemaleAction.prototype, "loadAnimation", void 0);

__decorate([ mw.Property({
    displayName: "装备武器动画"
}) ], FemaleAction.prototype, "equipAnimation", void 0);

__decorate([ mw.Property({
    displayName: "卸载武器动画"
}) ], FemaleAction.prototype, "unequipAnimation", void 0);

__decorate([ mw.Property({
    displayName: "持有姿态"
}) ], FemaleAction.prototype, "holdStance", void 0);

__decorate([ mw.Property({
    displayName: "瞄准姿态"
}) ], FemaleAction.prototype, "aimStance", void 0);

FemaleAction = __decorate([ Serializable ], FemaleAction);

let WeaponDriver = class WeaponDriver extends mw.Script {
    constructor() {
        super(...arguments);
        this.maleAction = new MaleAction;
        this.femaleAction = new FemaleAction;
        this.WaponIcon = "101168";
        this.weaponName = "步枪";
        this.equipmentSlot = mw.HumanoidSlotType.RightHand;
        this.equipmentCameraOffset = mw.Vector.zero;
        this.equipmentCameraFov = 90;
        this.aimCameraOffset = mw.Vector.zero;
        this.aimCameraFov = 60;
        this.aimSpeed = 90;
        this.damage = 30;
        this.shootRange = 5e3;
        this.ammoSpeed = 1e4;
        this.detectRadius = 1;
        this.gravityScale = 0;
        this.hurtRadius = 1;
        this.isAutoReload = true;
        this.isAutoLock = false;
        this.isDefaultUI = true;
        this.isWeaponHaveCasing = true;
        this.fireBlockDistance = 100;
        this.totalAmmo = 180;
        this.isEmptyToDestroy = true;
        this.isSupportRepAmmo = false;
        this.rotateSpeed = 90;
        this.keepTime = 10;
        this.isEquiped = false;
        this.isWeaponHaveScope = false;
        this.isAutoDestroy = true;
        this.assets = this.maleAction.aimShootAnimation + "," + this.maleAction.aimStance + "," + this.maleAction.equipAnimation + "," + this.maleAction.holdStance + "," + this.maleAction.loadAnimation + "," + this.maleAction.reloadAnimation + "," + this.maleAction.shootAnimation + "," + this.maleAction.unequipAnimation + "," + this.femaleAction.aimShootAnimation + "," + this.femaleAction.aimStance + "," + this.femaleAction.equipAnimation + "," + this.femaleAction.holdStance + "," + this.femaleAction.loadAnimation + "," + this.femaleAction.reloadAnimation + "," + this.femaleAction.shootAnimation + "," + this.femaleAction.unequipAnimation;
        this.weaponObj = null;
        this.weaponAction = null;
        this.weaponUI = null;
        this.player = null;
        this.chara = null;
        this.camera = null;
        this.pickUpTrigger = null;
        this.weaponEntityRoot = null;
        this.ammoEntityRoot = null;
        this.ammoPool = null;
        this.ammoArray = [];
        this.casingEntity = null;
        this.casingPool = null;
        this.casingArray = [];
        this.fireEffect = null;
        this.hitCharaEffect = null;
        this.hitCharaEffectPool = null;
        this.hitEffect = null;
        this.hitEffectPool = null;
        this.fireSound = null;
        this.reloadSound = null;
        this.loadSound = null;
        this.aimSound = null;
        this.hitCharaSound = null;
        this.hitCharaSoundPool = null;
        this.hitSound = null;
        this.hitSoundPool = null;
        this.isFiring = false;
        this.bFiring = false;
        this.isCanFire = 0;
        this.isAimming = false;
        this.isZooming = false;
        this.isBlock = false;
        this._rotateRotation = Rotation.zero;
        this.tempDispersionMax = 0;
        this.tempDispersionDefault = 0;
        this._isInited = false;
    }
    onStart() {
        this.useUpdate = true;
        this.weaponObj = this.gameObject;
        if (this.weaponObj) {
            if (mw.SystemUtil.isClient()) {
                this.clientInit();
            }
            if (mw.SystemUtil.isServer()) {
                this.serverInit();
            }
            if (mw.SystemUtil.isClient()) {
                this.clientOnHit = (hitResult, attackPlayer, isObj) => {
                    hitResult.forEach((e => {
                        if (e instanceof mw.HitResult) {
                            if (Utils.isCharacter(e.gameObject) || e.gameObject instanceof mw.GameObject) {
                                PrefabEvent.PrefabEvtFight.hit(this.chara.gameObjectId, e.gameObject.gameObjectId, this.damage, e.impactPoint.clone());
                                return;
                            }
                        }
                        if (Utils.isCharacter(e) || e instanceof mw.GameObject) {
                            PrefabEvent.PrefabEvtFight.hit(this.chara.gameObjectId, e.gameObjectId, this.damage, e.worldTransform.position.clone());
                            return;
                        }
                    }));
                };
                PrefabEvent.PrefabEvtEquip.onEquip((async (targetGuid, slot, equipGuid) => {
                    if (this.weaponObj && this.weaponObj.getCurrentOwner() && this.weaponObj.getCurrentOwner().gameObjectId == targetGuid && this.weaponObj.gameObjectId != equipGuid) {
                        this.unEquip();
                    }
                }));
            }
        }
    }
    onEquipdChanged() {
        if (this.weaponEntityRoot && this.weaponEntityRoot.localTransform) this.weaponEntityRoot.localTransform.rotation = Rotation.zero;
    }
    onUpdate(dt) {
        if (mw.SystemUtil.isServer()) return;
        if (this.weaponObj == null) {
            this.weaponObj = this.gameObject;
            if (this.weaponObj == null) return;
            this.clientInit();
        }
        if (!this.isEquiped && this.weaponEntityRoot) {
            this._rotateRotation.z = this.rotateSpeed * dt;
            this.weaponEntityRoot.worldTransform.rotation = this.weaponEntityRoot.worldTransform.rotation.add(this._rotateRotation);
            return;
        }
        for (let i = 0; i < this.ammoArray.length; i++) {
            if (this.ammoArray[i].update(dt)) {
                if (this.ammoArray[i].owner == this.chara) {
                    this.serverDestroyAmmo(i);
                    this.hit(this.ammoArray[i].hitResult);
                    this.ammoArray[i].destroy();
                    this.ammoArray.splice(i, 1);
                    i--;
                }
            }
        }
        for (let i = 0; i < this.casingArray.length; i++) {
            if (this.casingArray[i].update(dt)) {
                this.casingArray[i].destroy();
                this.casingArray.splice(i, 1);
                i--;
            }
        }
        if (this.weaponObj.getCurrentOwner() !== this.chara) return;
        if (this.isCanFire != 0) {
            this.isCanFire -= dt;
            if (this.isCanFire < 0) {
                this.isCanFire = 0;
            }
        }
        this.cameraUpdate(dt);
        if (!this.updatebFiring()) {
            if (!this.bFiring && this.fireEffect.loop && this.fireSound.isLoop) {
                this.fireEffect.stop();
                this.fireSound.stop();
                if (!this.isAimming) {
                    this.weaponObj.aimComponent.enableAiming(false);
                }
            }
        }
        if (!this.updateBlockFire()) {
            if (this.clientOnBlockChange) this.clientOnBlockChange(this.isBlock);
        }
        switch (this.weaponObj.getCurrentState()) {
          case mw.HotWeaponState.Idle:
            if (this.weaponObj.fireComponent.currentBullet < 1) {
                if (this.isAutoReload) {
                    this.startReload();
                    this.isAutoReload = false;
                    setTimeout((() => {
                        this.isAutoReload = true;
                    }), this.weaponObj.reloadComponent.reloadDuration * 1e3);
                }
            } else {
                if (this.isFiring && !this.bFiring && this.weaponObj.fireComponent.fireMode == 2) {
                    this.startFire();
                }
            }
            break;

          case mw.HotWeaponState.Reloading:
            break;

          case mw.HotWeaponState.Loading:
            break;

          case mw.HotWeaponState.Firing:
            if (this.isEmptyToDestroy && this.totalAmmo == 0 && this.weaponObj.fireComponent.currentBullet == 0) {
                this.unEquip();
            }
            break;
        }
        if (this.weaponUI) {
            this.weaponUI.changeBullet(this.weaponObj.fireComponent.currentBullet, this.totalAmmo);
            if (this.keepTime != -1) {
                this._restTime -= dt;
                this.weaponUI.setTimeText(this._restTime, this.keepTime);
                if (this._restTime <= 0) {
                    this.unEquip();
                }
            }
        }
    }
    onDestroy() {}
    hit(hitResult) {
        if (!(hitResult.length > 0)) return;
        if (this.detectRadius > 10) {
            for (let element of hitResult) {
                let temp = element;
                if (temp instanceof mw.Pawn) {
                    this.hitCharacterMulticast(temp.worldTransform.position, temp.worldTransform.rotation);
                } else {
                    this.hitObjectMulticast(temp.worldTransform.position, temp.worldTransform.rotation);
                }
            }
            if (this.hurtRadius > 10) {
                let sphereResult = QueryUtil.sphereOverlap(hitResult[0].worldTransform.position, this.hurtRadius, DEBUG_FLAG);
                this.clientOnHit(sphereResult, this.player.playerId, true);
            } else {
                this.clientOnHit(hitResult, this.player.playerId, true);
            }
        } else {
            for (let element of hitResult) {
                let temp = element;
                let rot = temp.impactNormal.toRotation();
                rot.y -= 90;
                if (temp.gameObject instanceof mw.Pawn) {
                    this.hitCharacterMulticast(temp.impactPoint, rot);
                } else {
                    this.hitObjectMulticast(temp.impactPoint, rot);
                }
            }
            if (this.hurtRadius > 10) {
                let sphereResult = QueryUtil.sphereOverlap(hitResult[0].impactPoint, this.hurtRadius, DEBUG_FLAG);
                this.clientOnHit(sphereResult, this.player.playerId, true);
            } else {
                this.clientOnHit(hitResult, this.player.playerId, false);
            }
        }
    }
    hitCharacterMulticast(loc, rot) {
        this.hitCharaPerformance(loc, rot);
    }
    hitObjectMulticast(loc, rot) {
        this.hitObjectPerformance(loc, rot);
    }
    hitCharaPerformance(loc, rot) {
        try {
            if (this.hitCharaEffect) Utils.rpcPlayEffectAtLocation(this.hitCharaEffect.assetId, loc, 1, rot, this.hitCharaEffect.worldTransform.scale);
            if (this.hitCharaSound) SoundService.play3DSound(this.hitCharaSound.assetId, loc, 1, GlobalData.soundVolume, {
                falloffDistance: 3e3
            });
        } catch (error) {}
    }
    hitObjectPerformance(loc, rot) {
        try {
            if (this.hitEffect) Utils.rpcPlayEffectAtLocation(this.hitEffect.assetId, loc, 1, rot, this.hitEffect.worldTransform.scale);
            if (this.hitSound) SoundService.play3DSound(this.hitSound.assetId, loc, 1, GlobalData.soundVolume, {
                falloffDistance: 3e3
            });
        } catch (error) {}
    }
    playEffect(particle) {}
    playSound(sound) {
        if (!sound) return;
        try {
            sound.volume = GlobalData.soundVolume;
            sound?.play();
        } catch (error) {}
    }
    serverDestroyAmmo(index) {
        this.clientDestroyAmmo(index);
    }
    clientDestroyAmmo(index) {
        if (!this.weaponObj) {
            return;
        }
        if (this.weaponObj.getCurrentOwner() == this.chara) {
            return;
        } else if (this.ammoArray.length != 0) {
            if (index < this.ammoArray.length) {
                this.ammoArray[index].destroy();
                this.ammoArray.splice(index, 1);
            }
        }
    }
    equip() {
        if (!this.chara && mw.SystemUtil.isClient()) {
            this.chara = Player.localPlayer.character;
        }
        this.serverEquip(this.chara.player.playerId);
    }
    unEquip() {
        try {
            if (!this.weaponObj) return;
            if (this.chara !== this.weaponObj.getCurrentOwner()) return;
            if (this.isAimming) {
                this.weaponObj.accuracyOfFireComponent.maxDispersionHalfAngle = this.tempDispersionMax;
                this.weaponObj.accuracyOfFireComponent.defaultDispersionHalfAngle = this.tempDispersionDefault;
                this.isAimming = false;
            }
            this.weaponObj?.stopFire();
            this.weaponObj?.breakLoad();
            this.weaponObj?.breakReload();
            this.weaponObj?.destroy();
            this.weaponObj?.unequip();
            mw.UIService.hide(WeaponUI);
            this.weaponUI = null;
            this.chara.loadSubStance(this.tempanimationStance?.assetId).play();
            this.chara.loadAnimation(this.weaponAction.unequipAnimation).play();
            this.chara.moveFacingDirection = this.tempMoveFacingDirection;
            this.camera.localTransform = new mw.Transform(this.tempcameraOffset, this.camera.localTransform.clone().rotation, this.camera.localTransform.clone().scale);
            this.camera.springArm.localTransform = new mw.Transform(this.temptargetArmOffset, this.camera.localTransform.clone().rotation, this.camera.localTransform.clone().scale);
            this.camera.fov = this.tempcameraFOV;
            this.camera.springArm.length = this.temptargetArmLength;
            if (this.isAutoDestroy) {
                mw.UIService.destroyUI(WeaponUI);
                this.weaponObj = null;
                let destroyInterval = setInterval((() => {
                    if (this.ammoArray.length == 0 && this.casingArray.length == 0) {
                        this.serverDestroy();
                        clearInterval(destroyInterval);
                    }
                }), 100);
            }
        } catch (error) {}
    }
    serverHideWeaponEntity(playerID) {
        this.hideWeaponEntity();
    }
    hideWeaponEntity() {
        if (!this.weaponEntityRoot) return;
        this.weaponEntityRoot.setVisibility(mw.PropertyStatus.Off);
    }
    serverDestroy() {
        this.destroy();
    }
    startFire() {
        if (!this.weaponObj || this.isCanFire != 0) return;
        try {
            this.weaponObj.startFire();
            this.isFiring = true;
            if (!this.isAimming) {
                this.weaponObj.aimComponent.enableAiming(true);
            }
        } catch (error) {}
    }
    stopFire() {
        if (this.weaponObj == null) return;
        try {
            this.weaponObj.stopFire();
            this.isFiring = false;
            if (!this.isAimming) {
                this.weaponObj.aimComponent.enableAiming(false);
            }
        } catch (error) {}
    }
    startReload() {
        try {
            if (!this.weaponObj || !this.weaponObj.reloadEnabled || this.weaponObj.fireComponent.currentBullet == this.weaponObj.fireComponent.clipSize) return;
            let ammoGap = this.weaponObj.fireComponent.clipSize - this.weaponObj.fireComponent.currentBullet;
            if (this.totalAmmo == -1) {
                this.weaponObj.reload(ammoGap);
            }
            if (this.totalAmmo <= 0) {
                return;
            }
            if (this.totalAmmo < ammoGap) {
                this.weaponObj.reload(this.totalAmmo);
                this.totalAmmo = 0;
            } else {
                this.weaponObj.reload(ammoGap);
                this.totalAmmo -= ammoGap;
            }
        } catch (error) {}
    }
    stopReload() {
        if (this.weaponObj == null) return;
        this.weaponObj.breakReload();
        this.weaponObj.breakLoad();
    }
    startAim() {
        try {
            if (this.aimSound) {
                this.aimSound.stop();
                this.playSound(this.aimSound);
            }
            this.chara.loadSubStance(this.weaponAction.aimStance).play();
            this.weaponObj.fireComponent.animationAssetId = this.weaponAction.aimShootAnimation;
            this.tempDispersionDefault = this.weaponObj.accuracyOfFireComponent.defaultDispersionHalfAngle;
            this.tempDispersionMax = this.weaponObj.accuracyOfFireComponent.maxDispersionHalfAngle;
            this.weaponObj.accuracyOfFireComponent.defaultDispersionHalfAngle = this.weaponObj.accuracyOfFireComponent.minDispersionHalfAngle;
            this.weaponObj.accuracyOfFireComponent.maxDispersionHalfAngle = this.weaponObj.accuracyOfFireComponent.minDispersionHalfAngle;
            this.isZooming = true;
            this.zoomIn();
            if (this.isWeaponHaveScope) {
                this.camera.springArm.length = 0;
            }
        } catch (error) {}
    }
    stopAim() {
        try {
            this.weaponObj.accuracyOfFireComponent.maxDispersionHalfAngle = this.tempDispersionMax;
            this.weaponObj.accuracyOfFireComponent.defaultDispersionHalfAngle = this.tempDispersionDefault;
            this.chara.loadSubStance(this.weaponAction.holdStance).play();
            this.weaponObj.fireComponent.animationAssetId = this.weaponAction.shootAnimation;
            this.isZooming = true;
            this.zoomOut();
            if (this.isWeaponHaveScope) {
                this.camera.springArm.length = 400;
            }
            this.aimSound.stop();
            this.playSound(this.aimSound);
        } catch (error) {}
    }
    startLoad() {}
    endLoad() {}
    getBulletSize() {
        if (this.weaponObj == null) return;
        return this.weaponObj.fireComponent.currentBullet;
    }
    clientDestroy() {
        if (this.pickUpTrigger) {
            this.pickUpTrigger.destroy();
        }
        if (this.weaponEntityRoot) {
            this.weaponEntityRoot.destroy();
        }
        if (this.ammoEntityRoot) {
            this.ammoEntityRoot.destroy();
        }
        if (this.casingEntity) {
            this.casingEntity.destroy();
        }
        if (this.fireEffect) {
            this.fireEffect.destroy();
        }
        if (this.fireSound) {
            this.fireSound.destroy();
        }
        if (this.hitCharaEffect) {
            this.hitCharaEffect.destroy();
        }
        if (this.hitCharaSound) {
            this.hitCharaSound.destroy();
        }
        if (this.hitEffect) {
            this.hitEffect.destroy();
        }
        if (this.hitSound) {
            this.hitSound.destroy();
        }
        if (this.reloadSound) {
            this.reloadSound.destroy();
        }
        if (this.aimSound) {
            this.aimSound.destroy();
        }
        if (this.loadSound) {
            this.loadSound.destroy();
        }
    }
    initAssets(assetIds) {
        let assetIdArray = this.resolveString(assetIds);
        for (let element of assetIdArray) {
            mw.AssetUtil.asyncDownloadAsset(element).then((value => {
                if (value) {
                    mw.AssetUtil.assetLoaded(element);
                }
            }));
        }
    }
    serverInit() {
        this.serverInitDelegate();
    }
    serverInitDelegate() {
        this.weaponObj.onEquip.add(this.onServerEquip.bind(this));
        this.weaponObj.onUnequip.add(this.onServerUnequip.bind(this));
        this.weaponObj.fireComponent.onStartFire.add(this.onServerStartFire.bind(this));
        this.weaponObj.fireComponent.onEndFire.add(this.onServerEndFire.bind(this));
        if (this.weaponObj.reloadComponent) {
            this.weaponObj.reloadComponent.onStartReload.add(this.onServerStartReload.bind(this));
            this.weaponObj.reloadComponent.onEndReload.add(this.onServerEndReload.bind(this));
        }
        if (this.weaponObj.loadComponent) {
            this.weaponObj.loadComponent.onStartLoad.add(this.onServerStartLoad.bind(this));
            this.weaponObj.loadComponent.onEndLoad.add(this.onServerEndLoad.bind(this));
        }
        if (this.weaponObj.aimComponent) {
            this.weaponObj.aimComponent.onStartAim.add(this.onServerStartAim.bind(this));
            this.weaponObj.aimComponent.onEndAim.add(this.onServerEndAim.bind(this));
        }
        if (this.weaponObj.recoilForceComponent) {
            this.weaponObj.recoilForceComponent.onStartRecoil.add(this.onServerStartRecoil.bind(this));
        }
    }
    onServerEquip() {
        if (!this.weaponObj.getCurrentOwner()) return;
        let v2 = this.weaponObj.getCurrentOwner();
        if (v2.description.advance.base.characterSetting.somatotype % 2 == 0) {
            this.changeWeaponAction(0);
            this.clientEquip(this.weaponObj.getCurrentOwner().player, 0);
        } else {
            this.changeWeaponAction(1);
            this.clientEquip(this.weaponObj.getCurrentOwner().player, 1);
        }
    }
    onServerUnequip() {}
    onServerStartFire() {}
    onServerEndFire() {}
    onServerStartReload() {}
    onServerEndReload() {}
    onServerStartLoad() {}
    onServerEndLoad() {}
    onServerStartAim() {}
    onServerEndAim() {}
    onServerStartRecoil() {}
    clientInit() {
        if (this._isInited) {
            return;
        }
        this._isInited = true;
        Player.asyncGetLocalPlayer().then((player => {
            this.player = player;
            this.chara = this.player.character;
            this.camera = Camera.currentCamera;
            this.clientInitWeaponEntityRoot();
            this.clientInitPickUpTrigger();
            this.clientInitAmmoEntityRoot();
            this.clientInitCasingEntity();
            this.clientInitHitCharaEffect();
            this.clientInitHitEffect();
            this.clientInitFireEffect();
            this.clientInitFireSound();
            this.clientInitReloadSound();
            this.clientInitLoadSound();
            this.clientInitAimSound();
            this.clientInitHitCharaSound();
            this.clientInitHitSound();
            this.clientInitDelegate();
        }));
        Event.addLocalListener(EventType.OnOffMainHUD, this.addOnOffMainHUD.bind(this));
        Event.addLocalListener(EventType.OnOffWeaponUI, this.addOnOffWeaponUI.bind(this));
    }
    addOnOffMainHUD(isOpen) {
        if (!this.weaponUI) return;
        try {
            if (!this.weaponUI.rootCanvas) return;
            Utils.setWidgetVisibility(this.weaponUI.rootCanvas, isOpen ? mw.SlateVisibility.SelfHitTestInvisible : mw.SlateVisibility.Collapsed);
        } catch (error) {}
    }
    addOnOffWeaponUI(isOpen) {
        if (!this.weaponUI) return;
        try {
            if (!this.weaponUI.rootCanvas) return;
            Utils.setWidgetVisibility(this.weaponUI.rootCanvas, !isOpen ? mw.SlateVisibility.SelfHitTestInvisible : mw.SlateVisibility.Collapsed);
        } catch (error) {}
    }
    clientInitWeaponEntityRoot() {
        try {
            this.weaponEntityRoot = this.weaponObj.getChildByName("weaponEntityRoot");
        } catch (error) {}
    }
    clientInitPickUpTrigger() {
        this.pickUpTrigger = this.weaponObj.getChildByName("pickUpTrigger");
        if (this.pickUpTrigger) {
            if (this.pickUpTrigger.checkInArea(this.chara)) {
                this.serverEquip(this.player.playerId);
                console.error("B");
            }
            this.pickUpTrigger.onEnter.add((char => {
                if (char.gameObjectId == this.chara.gameObjectId) {
                    this.serverEquip(this.player.playerId);
                    console.error("A");
                }
            }));
        }
    }
    serverEquip(playerID) {
        let player = Player.getPlayer(playerID);
        if (player == null || !this.weaponObj) return;
        this.weaponObj.equip(player.character, this.equipmentSlot);
        this.isEquiped = true;
        PrefabEvent.PrefabEvtEquip.equip(player.character.gameObjectId, PrefabEvent.EquipSlot.Weapon, this.weaponObj.gameObjectId);
    }
    changeWeaponAction(sex) {
        sex == 0 ? this.weaponAction = this.femaleAction : this.weaponAction = this.maleAction;
        if (this.weaponObj) {
            this.weaponObj.fireComponent.animationAssetId = this.weaponAction.shootAnimation;
            if (this.weaponObj.reloadEnabled) {
                this.weaponObj.reloadComponent.animationAssetId = this.weaponAction.reloadAnimation;
            }
            if (this.weaponObj.loadEnabled) {
                this.weaponObj.loadComponent.animationAssetId = this.weaponAction.loadAnimation;
            }
        }
    }
    clientEquip(pickPlayer, gender) {
        if (!this.camera) {
            this.camera = Camera.currentCamera;
        }
        if (!this.weaponObj) {
            this.weaponObj = this.gameObject;
        }
        this.weaponObj.equip(this.chara, this.equipmentSlot);
        this.changeWeaponAction(gender);
        this.tempMoveFacingDirection = this.chara.moveFacingDirection;
        this.tempanimationStance = this.chara.currentStance;
        this.temptargetArmLength = this.camera.springArm.length;
        this.temptargetArmOffset = this.camera.springArm.localTransform.clone().position;
        this.tempcameraFOV = this.camera.fov;
        this.tempcameraOffset = this.camera.localTransform.clone().position;
        this.chara.loadSubStance(this.weaponAction.holdStance).play();
        this.chara.loadAnimation(this.weaponAction.equipAnimation).play();
        this.chara.moveFacingDirection = mw.MoveFacingDirection.ControllerDirection;
        this.camera.springArm.length = 400;
        this.camera.fov = this.equipmentCameraFov;
        this.camera.localTransform = new mw.Transform(this.equipmentCameraOffset, this.camera.localTransform.clone().rotation, this.camera.localTransform.clone().scale);
        this.camera.springArm.localTransform = new mw.Transform(new mw.Vector(0, 0, 60), this.camera.localTransform.clone().rotation, this.camera.localTransform.clone().scale);
        this.weaponUI = mw.UIService.show(WeaponUI, this, this.weaponObj.accuracyOfFireEnabled ? this.weaponObj.accuracyOfFireComponent.defaultDispersionHalfAngle : 0, this.WaponIcon, this.weaponName);
        this.weaponUI.setTimeText(this.keepTime, this.keepTime);
        this.weaponUI.setReloadBtn(!this.isSupportRepAmmo);
        if (this.isSupportRepAmmo) {
            this.weaponObj.reloadComponent.animationAssetId = this.weaponAction.aimShootAnimation;
            this.weaponObj.loadComponent.animationAssetId = this.weaponAction.aimShootAnimation;
        }
        this._restTime = this.keepTime;
    }
    changeFov(value) {
        this.camera.fov = value;
    }
    clientInitAmmoEntityRoot() {
        this.ammoEntityRoot = this.weaponObj.getChildByName("ammoEntityRoot");
        this.ammoPool = new SimpleObjectPool(this.instanceAmmo.bind(this), (obj => {
            obj.destroy();
        }), (obj => {
            obj.setVisibility(mw.PropertyStatus.Off);
        }));
    }
    clientInitCasingEntity() {
        this.casingEntity = this.weaponObj.getChildByName("casingEntity");
        this.casingPool = new SimpleObjectPool(this.instanceCasing.bind(this), (obj => {
            obj.destroy();
        }), (obj => {
            obj.setVisibility(mw.PropertyStatus.Off);
        }));
    }
    clientInitHitCharaEffect() {
        this.hitCharaEffect = this.weaponObj.getChildByName("hitCharaEffect");
        this.hitCharaEffectPool = new SimpleObjectPool(this.instanceHitCharaEffect.bind(this), (particle => {
            particle.destroy();
        }), (particle => {
            particle.parent = null;
            particle.stop();
        }));
    }
    clientInitHitEffect() {
        this.hitEffect = this.weaponObj.getChildByName("hitEffect");
        this.hitEffectPool = new SimpleObjectPool(this.instanceHitEffect.bind(this), (particle => {
            particle.destroy();
        }), (particle => {
            particle.parent = null;
            particle.stop();
        }));
    }
    clientInitFireEffect() {
        this.fireEffect = this.weaponObj.getChildByName("fireEffect");
        this.fireEffect.loopCount = 1;
    }
    clientInitFireSound() {
        this.fireSound = this.weaponObj.getChildByName("fireSound");
    }
    clientInitReloadSound() {
        this.reloadSound = this.weaponObj.getChildByName("reloadSound");
    }
    clientInitLoadSound() {
        this.loadSound = this.weaponObj.getChildByName("loadSound");
    }
    clientInitAimSound() {
        this.aimSound = this.weaponObj.getChildByName("aimSound");
    }
    clientInitHitCharaSound() {
        this.hitCharaSound = this.weaponObj.getChildByName("hitCharaSound");
        this.hitCharaSoundPool = new SimpleObjectPool(this.instanceHitCharaSound.bind(this), (sound => {
            sound.destroy();
        }), (sound => {
            sound.stop();
        }));
    }
    clientInitHitSound() {
        this.hitSound = this.weaponObj.getChildByName("hitSound");
        this.hitSoundPool = new SimpleObjectPool(this.instanceHitSound.bind(this), (sound => {
            sound.destroy();
        }), (sound => {
            sound.stop();
        }));
    }
    instanceAmmo() {
        let ammo = this.ammoEntityRoot.clone();
        ammo.parent = null;
        ammo.setVisibility(mw.PropertyStatus.On);
        return ammo;
    }
    instanceCasing() {
        let casing = this.casingEntity.clone();
        casing.parent = null;
        casing.setVisibility(mw.PropertyStatus.On);
        return casing;
    }
    instanceHitCharaEffect() {
        let hitChara = this.hitCharaEffect.clone();
        hitChara.parent = null;
        return hitChara;
    }
    instanceHitEffect() {
        let hit = this.hitEffect.clone();
        hit.parent = null;
        return hit;
    }
    instanceHitCharaSound() {
        let hitChara = this.hitCharaSound.clone();
        hitChara.parent = null;
        return hitChara;
    }
    instanceHitSound() {
        let hit = this.hitSound.clone();
        hit.parent = null;
        return hit;
    }
    clientInitDelegate() {
        this.weaponObj.onEquip.add(this.onClientEquip.bind(this));
        this.weaponObj.onUnequip.add(this.onClientUnequip.bind(this));
        this.weaponObj.fireComponent.onStartFire.add(this.onClientStartFire.bind(this));
        this.weaponObj.fireComponent.onEndFire.add(this.onClientEndFire.bind(this));
        if (this.weaponObj.reloadEnabled) {
            this.weaponObj.reloadComponent.onStartReload.add(this.onClientStartReload.bind(this));
            this.weaponObj.reloadComponent.onEndReload.add(this.onClientEndReload.bind(this));
        }
        if (this.weaponObj.loadEnabled) {
            this.weaponObj.loadComponent.onStartLoad.add(this.onClientStartLoad.bind(this));
            this.weaponObj.loadComponent.onEndLoad.add(this.onClientEndLoad.bind(this));
        }
        if (this.weaponObj.aimEnabled) {
            this.weaponObj.aimComponent.onStartAim.add(this.onClientStartAim.bind(this));
            this.weaponObj.aimComponent.onEndAim.add(this.onClientEndAim.bind(this));
        }
        if (this.weaponObj.recoilForceEnabled) {
            this.weaponObj.recoilForceComponent.onStartRecoil.add(this.onClientStartRecoil.bind(this));
        }
        if (this.weaponObj.accuracyOfFireEnabled) {
            this.weaponObj.accuracyOfFireComponent.onCurrentDispersionChange.add(this.onClientCurrentDispersionChanged.bind(this));
        }
        this.clientOnBlockChange = isBlock => {};
    }
    onClientEquip() {
        try {
            if (this.pickUpTrigger) {
                this.pickUpTrigger.enabled = false;
            }
        } catch (error) {}
        if (!this.weaponEntityRoot) {
            this.weaponEntityRoot.setVisibility(mw.PropertyStatus.On);
        }
    }
    onClientUnequip() {
        if (!this.weaponObj) return;
        if (this.isAutoDestroy) {
            this.weaponObj.setVisibility(mw.PropertyStatus.Off);
            this.weaponObj = null;
        } else {
            if (this.pickUpTrigger) {
                this.weaponObj.worldTransform.rotation = new mw.Rotation(0, 0, 1);
                this.weaponObj.worldTransform.position = mw.Vector.add(this.weaponObj.worldTransform.getRightVector().multiply(100), this.weaponObj.worldTransform.position, this.weaponObj.worldTransform.position);
                this.pickUpTrigger.enabled = true;
            }
        }
    }
    onClientStartFire() {
        try {
            if (!this.weaponObj) {
                return;
            }
            this.isCanFire = this.weaponObj.fireComponent.fireInterval;
            if (this.fireEffect) {
                if (!this.fireEffect.loop) {
                    this.fireEffect.stop();
                }
                this.fireEffect.play();
            }
            if (this.fireSound) {
                if (!this.fireSound.isLoop) {
                    this.fireSound.stop();
                }
                this.playSound(this.fireSound);
            }
            if (this.weaponObj.getCurrentOwner() == this.chara) {
                if (this.ammoEntityRoot.getChildren().length > 0) {
                    for (let i = 0; i < this.weaponObj.fireComponent.multipleShot; i++) {
                        let cameraShootDir = this.camera.worldTransform.clone().getForwardVector().clone();
                        if (this.weaponObj.accuracyOfFireEnabled) {
                            cameraShootDir = this.weaponObj.accuracyOfFireComponent.getRandomShootDir(cameraShootDir).clone();
                        }
                        let endLoc = cameraShootDir.multiply(SHOOT_RANGE).add(this.camera.worldTransform.clone().position);
                        let shootDir = endLoc.clone().subtract(this.ammoEntityRoot.worldTransform.position);
                        let hitRes = QueryUtil.lineTrace(this.camera.worldTransform.clone().position, endLoc, true, DEBUG_FLAG);
                        hitRes = hitRes.filter((e => !(e.gameObject instanceof mw.Trigger)));
                        if (hitRes && hitRes.length > 0 && mw.Vector.dot(hitRes[0].gameObject.worldTransform.position.clone().subtract(this.ammoEntityRoot.worldTransform.position), shootDir) > 0) {
                            shootDir = hitRes[0].impactPoint.clone().subtract(this.ammoEntityRoot.worldTransform.position);
                        }
                        let ammoDirection = shootDir.normalized;
                        if (this.ammoSpeed < MAX_SHOOTSPEED || this.isBlock) {
                            this.serverFire(this.ammoEntityRoot.worldTransform.position.clone(), ammoDirection);
                            if (this.ammoArray.length > this.weaponObj.fireComponent.clipSize) {
                                let discardAmmo = this.ammoArray.shift();
                                discardAmmo.destroy();
                            }
                            this.ammoArray.push(new Ammo(this.chara, this.ammoPool, this.ammoEntityRoot.worldTransform.position, ammoDirection, this.shootRange, this.ammoSpeed, this.gravityScale, this.detectRadius));
                        } else {
                            this.serverFire(this.ammoEntityRoot.worldTransform.position.clone(), ammoDirection);
                            if (this.ammoArray.length > this.weaponObj.fireComponent.clipSize) {
                                let discardAmmo = this.ammoArray.shift();
                                discardAmmo.destroy();
                            }
                            if (hitRes.length > 0) {
                                this.ammoArray.push(new Ammo(this.chara, this.ammoPool, this.ammoEntityRoot.worldTransform.position, ammoDirection, shootDir.length, this.ammoSpeed, this.gravityScale, 0, hitRes));
                            } else {
                                this.ammoArray.push(new Ammo(this.chara, this.ammoPool, this.ammoEntityRoot.worldTransform.position, ammoDirection, shootDir.length, this.ammoSpeed, this.gravityScale, 0));
                            }
                        }
                    }
                    if (this.isWeaponHaveCasing) {
                        this.casingArray.push(new Casing(this.casingPool, this.casingEntity, this.weaponEntityRoot.worldTransform.getRightVector().clone()));
                    }
                } else {
                    let cameraShootDir = this.camera.worldTransform.clone().getForwardVector().clone();
                    if (this.weaponObj.accuracyOfFireEnabled) {
                        cameraShootDir = this.weaponObj.accuracyOfFireComponent.getRandomShootDir(cameraShootDir).clone();
                    }
                    let endLoc = cameraShootDir.multiply(SHOOT_RANGE).add(this.camera.worldTransform.clone().position);
                    let shootDir = endLoc.clone().subtract(this.ammoEntityRoot.worldTransform.position);
                    let hitRes = QueryUtil.lineTrace(this.camera.worldTransform.clone().position, endLoc, true, DEBUG_FLAG);
                    hitRes = hitRes.filter((e => !(e.gameObject instanceof mw.Trigger)));
                    if (hitRes && hitRes.length > 0 && mw.Vector.dot(hitRes[0].gameObject.worldTransform.position.clone().subtract(this.ammoEntityRoot.worldTransform.position), shootDir) > 0) {
                        shootDir = hitRes[0].impactPoint.clone().subtract(this.ammoEntityRoot.worldTransform.position);
                    }
                    let ammoDirection = shootDir.normalized;
                    this.weaponObj.worldTransform.rotation = ammoDirection.toRotation();
                    let end = ammoDirection.clone().multiply(this.shootRange).add(this.ammoEntityRoot.worldTransform.position);
                    if (this.detectRadius < 10) {
                        let lineResult = QueryUtil.lineTrace(this.ammoEntityRoot.worldTransform.position, end, true, DEBUG_FLAG);
                        lineResult = lineResult.filter((e => !(e.gameObject instanceof mw.Trigger)));
                        this.hit(lineResult);
                    } else {
                        let boxResult = Utils.modifyboxOverlapInLevel(this.ammoEntityRoot.worldTransform.position, end, this.detectRadius, this.detectRadius, DEBUG_FLAG);
                        this.hit(boxResult);
                    }
                }
            }
        } catch (error) {}
    }
    updateBlockFire() {
        let flag = this.isBlock;
        if (this.ammoEntityRoot == undefined || this.ammoEntityRoot.worldTransform == undefined || this.ammoEntityRoot.worldTransform.position == undefined || this.ammoEntityRoot.worldTransform.getForwardVector() == undefined) return flag;
        let lineResultMuzzle = QueryUtil.lineTrace(this.ammoEntityRoot.worldTransform.position, this.ammoEntityRoot.worldTransform.getForwardVector().multiply(this.fireBlockDistance).add(this.ammoEntityRoot.worldTransform.position), true, DEBUG_FLAG);
        lineResultMuzzle = lineResultMuzzle.filter((e => !(e.gameObject instanceof mw.Trigger)));
        if (lineResultMuzzle.length > 0) {
            this.isBlock = true;
        } else {
            this.isBlock = false;
        }
        return this.isBlock == flag;
    }
    updatebFiring() {
        let flag = this.bFiring;
        this.bFiring = this.weaponObj.fireComponent.isFiring();
        return this.bFiring == flag;
    }
    serverFire(startLoc, direction) {
        this.clientMulticastLaunch(startLoc, direction);
    }
    clientMulticastLaunch(startLoc, direction) {
        if (!this.weaponObj) return;
        if (this.weaponObj.getCurrentOwner() == this.chara) {
            return;
        } else {
            if (this.ammoArray.length > this.weaponObj.fireComponent.clipSize) {
                try {
                    let discardAmmo = this.ammoArray.shift();
                    discardAmmo.destroy();
                } catch (error) {}
            }
            this.ammoArray.push(new Ammo(null, this.ammoPool, startLoc, direction, this.shootRange, this.ammoSpeed, this.gravityScale, 0));
        }
    }
    onClientEndFire() {}
    onClientStartReload() {
        this.playSound(this.reloadSound);
    }
    onClientEndReload() {
        try {
            this.reloadSound?.stop();
        } catch (error) {}
    }
    onClientStartLoad() {
        this.playSound(this.loadSound);
    }
    onClientEndLoad() {
        try {
            this.loadSound?.stop();
        } catch (error) {}
    }
    onClientStartAim() {}
    onClientEndAim() {}
    onClientStartRecoil() {}
    onClientCurrentDispersionChanged() {
        if (this.weaponUI) {
            this.weaponUI.changeCross(this.weaponObj.accuracyOfFireComponent.getCurrentDispersionHalfAngle() * 10);
        }
    }
    zoomIn() {
        if (this.camera == null) return;
        this.isAimming = true;
    }
    zoomOut() {
        if (this.camera == null) return;
        this.isAimming = false;
    }
    cameraUpdate(dt) {
        if (!this.isZooming) return;
        if (this.isAimming) {
            this.camera.fov -= dt * this.aimSpeed;
            if (this.camera.fov < this.aimCameraFov) {
                this.camera.fov = this.aimCameraFov;
                this.isZooming = false;
            }
        } else {
            this.camera.fov += dt * this.aimSpeed;
            if (this.camera.fov > this.equipmentCameraFov) {
                this.camera.fov = this.equipmentCameraFov;
                this.isZooming = false;
            }
        }
    }
    resolveString(assetIds) {
        let assetIdArray = new Array;
        let assetId = "";
        let s = assetIds.split("");
        for (let a of s) {
            if (a == ",") {
                assetIdArray.push(assetId);
                assetId = "";
            } else {
                assetId += a;
            }
        }
        if (assetId) {
            assetIdArray.push(assetId);
        }
        return assetIdArray;
    }
};

__decorate([ mw.Property({
    displayName: "男性动作",
    group: "动作资源",
    tooltip: "男性角色操作武器的各种动作资源"
}) ], WeaponDriver.prototype, "maleAction", void 0);

__decorate([ mw.Property({
    displayName: "女性动作",
    group: "动作资源",
    tooltip: "女性角色操作武器的各种动作资源"
}) ], WeaponDriver.prototype, "femaleAction", void 0);

__decorate([ mw.Property({
    displayName: "武器icon",
    group: "武器属性",
    tooltip: "武器图标"
}) ], WeaponDriver.prototype, "WaponIcon", void 0);

__decorate([ mw.Property({
    displayName: "武器名称",
    group: "武器属性",
    tooltip: "武器命名"
}) ], WeaponDriver.prototype, "weaponName", void 0);

__decorate([ mw.Property({
    displayName: "装备插槽",
    group: "武器属性",
    tooltip: "角色装备武器的插槽"
}) ], WeaponDriver.prototype, "equipmentSlot", void 0);

__decorate([ mw.Property({
    displayName: "装备视角偏移",
    group: "武器属性",
    tooltip: "角色装备武器后摄像机视角偏移"
}) ], WeaponDriver.prototype, "equipmentCameraOffset", void 0);

__decorate([ mw.Property({
    displayName: "装备FOV",
    group: "武器属性",
    tooltip: "角色装备武器后视场",
    range: {
        max: 170,
        min: 5
    }
}) ], WeaponDriver.prototype, "equipmentCameraFov", void 0);

__decorate([ mw.Property({
    displayName: "瞄准视角偏移",
    group: "武器属性",
    tooltip: "角色瞄准时摄像机视角偏移"
}) ], WeaponDriver.prototype, "aimCameraOffset", void 0);

__decorate([ mw.Property({
    displayName: "瞄准FOV",
    group: "武器属性",
    tooltip: "角色装备武器后视场",
    range: {
        max: 170,
        min: 5
    }
}) ], WeaponDriver.prototype, "aimCameraFov", void 0);

__decorate([ mw.Property({
    displayName: "瞄准聚焦速度",
    group: "武器属性",
    tooltip: "瞄准时视场移动速度",
    range: {
        max: 170,
        min: 5
    }
}) ], WeaponDriver.prototype, "aimSpeed", void 0);

__decorate([ mw.Property({
    displayName: "武器基础伤害",
    group: "武器属性",
    tooltip: "武器基础伤害数值"
}) ], WeaponDriver.prototype, "damage", void 0);

__decorate([ mw.Property({
    displayName: "最大射程",
    group: "弹药属性",
    tooltip: "弹药最大射程，超出自动销毁",
    range: {
        max: 1e5,
        min: 1
    }
}) ], WeaponDriver.prototype, "shootRange", void 0);

__decorate([ mw.Property({
    displayName: "弹药速度",
    group: "弹药属性",
    tooltip: "弹药飞行速度，单位距离/秒",
    range: {
        max: 1e5,
        min: 1
    }
}) ], WeaponDriver.prototype, "ammoSpeed", void 0);

__decorate([ mw.Property({
    displayName: "碰撞半径",
    group: "弹药属性",
    tooltip: "弹药碰撞检测半径，大于10矩形检测，小于等于10射线检测",
    range: {
        max: 500,
        min: 1
    }
}) ], WeaponDriver.prototype, "detectRadius", void 0);

__decorate([ mw.Property({
    displayName: "重力系数",
    group: "弹药属性",
    tooltip: "弹药是否受重力影响，重力系数可正可负",
    range: {
        max: -10,
        min: 10
    }
}) ], WeaponDriver.prototype, "gravityScale", void 0);

__decorate([ mw.Property({
    displayName: "伤害范围",
    group: "弹药属性",
    tooltip: "弹药爆炸范围，小于等于10为不爆炸",
    range: {
        max: 2e3,
        min: 1
    }
}) ], WeaponDriver.prototype, "hurtRadius", void 0);

__decorate([ mw.Property({
    displayName: "自动换弹",
    group: "辅助功能",
    tooltip: "勾选后子弹为0时自动换弹"
}) ], WeaponDriver.prototype, "isAutoReload", void 0);

__decorate([ mw.Property({
    displayName: "辅助瞄准",
    group: "辅助功能",
    tooltip: "勾选后开启自动锁定"
}) ], WeaponDriver.prototype, "isAutoLock", void 0);

__decorate([ mw.Property({
    displayName: "默认UI",
    group: "辅助功能",
    tooltip: "勾选后装备武器显示默认UI"
}) ], WeaponDriver.prototype, "isDefaultUI", void 0);

__decorate([ mw.Property({
    displayName: "弹壳弹出",
    group: "辅助功能",
    tooltip: "勾选提供弹壳弹出效果，适用枪械类武器"
}) ], WeaponDriver.prototype, "isWeaponHaveCasing", void 0);

__decorate([ mw.Property({
    displayName: "开火阻挡距离",
    group: "辅助功能",
    tooltip: "距离内如果有障碍物阻挡，弹药是真实弹道"
}) ], WeaponDriver.prototype, "fireBlockDistance", void 0);

__decorate([ mw.Property({
    displayName: "弹药数量(-1为无限)",
    group: "辅助功能",
    tooltip: "武器总子弹数",
    range: {
        max: 1e4,
        min: -1
    }
}) ], WeaponDriver.prototype, "totalAmmo", void 0);

__decorate([ mw.Property({
    displayName: "弹夹为空是否销毁武器",
    group: "辅助功能",
    tooltip: "勾选后没有子弹了会自动卸载"
}) ], WeaponDriver.prototype, "isEmptyToDestroy", void 0);

__decorate([ mw.Property({
    displayName: "支持替换弹夹",
    group: "辅助功能"
}) ], WeaponDriver.prototype, "isSupportRepAmmo", void 0);

__decorate([ mw.Property({
    displayName: "模型旋转速度",
    group: "辅助功能"
}) ], WeaponDriver.prototype, "rotateSpeed", void 0);

__decorate([ mw.Property({
    displayName: "持有时限（s）（-1为永久持有）",
    group: "辅助功能"
}) ], WeaponDriver.prototype, "keepTime", void 0);

__decorate([ mw.Property({
    hideInEditor: true,
    replicated: true,
    onChanged: "onEquipdChanged"
}) ], WeaponDriver.prototype, "isEquiped", void 0);

__decorate([ mw.Property({
    displayName: "瞄准镜",
    group: "辅助功能",
    tooltip: "勾选后瞄准时显示至第一人称瞄准镜"
}) ], WeaponDriver.prototype, "isWeaponHaveScope", void 0);

__decorate([ mw.Property({
    displayName: "自动销毁",
    group: "辅助功能",
    tooltip: "勾选后卸载武器时武器会自动销毁"
}) ], WeaponDriver.prototype, "isAutoDestroy", void 0);

__decorate([ mw.Property({
    displayName: "优先加载",
    group: "资源",
    tooltip: "需要优先加载的资源ID"
}) ], WeaponDriver.prototype, "assets", void 0);

__decorate([ PrefabReport(23) ], WeaponDriver.prototype, "onStart", null);

__decorate([ RemoteFunction(mw.Server) ], WeaponDriver.prototype, "hitCharacterMulticast", null);

__decorate([ RemoteFunction(mw.Server) ], WeaponDriver.prototype, "hitObjectMulticast", null);

__decorate([ RemoteFunction(mw.Client, mw.Multicast) ], WeaponDriver.prototype, "hitCharaPerformance", null);

__decorate([ RemoteFunction(mw.Client, mw.Multicast) ], WeaponDriver.prototype, "hitObjectPerformance", null);

__decorate([ RemoteFunction(mw.Server) ], WeaponDriver.prototype, "serverDestroyAmmo", null);

__decorate([ RemoteFunction(mw.Client, mw.Multicast) ], WeaponDriver.prototype, "clientDestroyAmmo", null);

__decorate([ RemoteFunction(mw.Server) ], WeaponDriver.prototype, "serverHideWeaponEntity", null);

__decorate([ RemoteFunction(mw.Client, mw.Multicast) ], WeaponDriver.prototype, "hideWeaponEntity", null);

__decorate([ RemoteFunction(mw.Server) ], WeaponDriver.prototype, "serverDestroy", null);

__decorate([ RemoteFunction(mw.Server) ], WeaponDriver.prototype, "serverEquip", null);

__decorate([ RemoteFunction(mw.Client) ], WeaponDriver.prototype, "clientEquip", null);

__decorate([ RemoteFunction(mw.Server) ], WeaponDriver.prototype, "serverFire", null);

__decorate([ RemoteFunction(mw.Client, mw.Multicast) ], WeaponDriver.prototype, "clientMulticastLaunch", null);

WeaponDriver = __decorate([ Component ], WeaponDriver);

var WeaponDriver$1 = WeaponDriver;

var foreign96 = Object.freeze({
    __proto__: null,
    default: WeaponDriver$1
});

let Npc = class Npc extends Script {
    constructor() {
        super(...arguments);
        this.curHp = 0;
        this.pathVector = [ mw.Vector.zero ];
        this.moveSpeed = 300;
        this.explosionEffect = "27422";
        this.respawnTime = 5;
        this.respawnEffect = "142750";
        this.npc = null;
        this.playerModuleS = null;
        this.model = null;
        this.npcGunMoeld = null;
        this.frameCount = 0;
        this.maxFrameCount = 1;
        this.index = 0;
        this.pathFlag = true;
        this.curBossDir = mw.Vector.zero;
        this.targetPos = mw.Vector.zero;
        this.targetDistance = 0;
    }
    onStart() {
        this.onStartCS();
    }
    async onStartCS() {
        await ModuleService.ready();
        this.npc = this.gameObject;
        await this.npc.asyncReady();
        this.npc.collisionWithOtherCharacterEnabled = false;
        if (mw.SystemUtil.isClient()) {
            this.onStartC();
        } else if (mw.SystemUtil.isServer()) {
            this.onStartS();
        }
    }
    onUpdate(dt) {
        if (mw.SystemUtil.isClient()) {
            this.onUpdateC(dt);
        } else if (mw.SystemUtil.isServer()) {
            this.onUpdateS(dt);
        }
    }
    onStartC() {
        this.useUpdate = false;
        this.initDataC();
    }
    initDataC() {
        UIService.getUI(RadarPanel).setNpcPoint(this.npc);
        this.npc.setOutline(true, mw.LinearColor.red, .5);
    }
    onUpdateC(dt) {}
    get getPlayerModuleS() {
        if (this.playerModuleS == null) {
            this.playerModuleS = ModuleService.getModule(PlayerModuleS);
        }
        return this.playerModuleS;
    }
    onStartS() {
        this.useUpdate = true;
        this.initDataS();
        this.initMove();
        this.bindEventS();
    }
    initDataS() {
        this.curHp = 100;
        this.npc.displayName = Utils.randomNpcName();
        this.setNpcDescriptionAndGun();
    }
    async setNpcDescriptionAndGun() {
        let ran = Utils.randomInt(1, 2);
        if (ran == 1) {
            let morphElement = GameConfig.Morph.getElement(Utils.randomInt(1, GameConfig.Morph.getAllElement().length));
            let assetId = morphElement.AssetId;
            await Utils.asyncDownloadAsset(assetId);
            if (this.model) GameObjPool.despawn(this.model);
            this.model = await GameObjPool.asyncSpawn(assetId, mwext.GameObjPoolSourceType.Prefab);
            this.model.setCollision(mw.PropertyStatus.Off);
            this.npc.attachToSlot(this.model, mw.HumanoidSlotType.Root);
            this.model.localTransform.position = new mw.Vector(0, 0, this.model.getBoundingBox().z / 2);
            this.model.localTransform.rotation = new mw.Rotation(morphElement.OffsetRot);
            if (this.npc.getVisibility()) this.npc.setVisibility(false, false);
            if (this.npcGunMoeld && this.npcGunMoeld.getVisibility()) this.npcGunMoeld.setVisibility(false);
            if (this.model && !this.model.getVisibility()) this.model.setVisibility(true);
        } else {
            let roleId = GameConfig.ROLE.getElement(Utils.randomInt(1, 34)).ROLEID;
            await Utils.asyncDownloadAsset(roleId);
            this.npc.setDescription([ roleId ]);
            let gunId = GameConfig.GUN.getElement(Utils.randomInt(1, 14)).GUNICON_M;
            await Utils.asyncDownloadAsset(gunId);
            if (this.npcGunMoeld) GameObjPool.despawn(this.npcGunMoeld);
            this.npcGunMoeld = await GameObjPool.asyncSpawn(gunId, mwext.GameObjPoolSourceType.Asset);
            this.npcGunMoeld.setCollision(mw.PropertyStatus.Off);
            this.npc.attachToSlot(this.npcGunMoeld, mw.HumanoidSlotType.RightHand);
            let somatotype = this.npc.description.advance.base.characterSetting.somatotype;
            let stanceId = somatotype % 2 == 0 ? "49096" : "94258";
            await Utils.asyncDownloadAsset(stanceId);
            this.npc.loadSubStance(stanceId).play();
            if (!this.npc.getVisibility()) this.npc.setVisibility(true, false);
            if (this.npcGunMoeld && !this.npcGunMoeld.getVisibility()) this.npcGunMoeld.setVisibility(true);
            if (this.model && this.model.getVisibility()) this.model.setVisibility(false);
        }
    }
    bindEventS() {
        PrefabEvent.PrefabEvtFight.onHit(this.playerAtkEnemyS.bind(this));
    }
    playerAtkEnemyS(senderGuid, targetGuid, damage, hitPoint) {
        if (this.npc.gameObjectId != targetGuid) return;
        if (this.curHp <= 0) return;
        let tmpHp = this.curHp - damage;
        if (tmpHp > 0) {
            this.curHp = tmpHp;
        } else {
            this.curHp = 0;
            this.dieS();
            this.getPlayerModuleS.playerKillNpc(senderGuid);
            TimeUtil.delaySecond(this.respawnTime).then((() => {
                this.curHp = 100;
                this.respawnS();
            }));
        }
        this.getPlayerModuleS.playerAtkNpcFlyText(senderGuid, hitPoint, damage);
    }
    dieS() {
        this.setNpcStateS(false);
        EffectService.playAtPosition(this.explosionEffect, this.gameObject.worldTransform.position, {
            scale: mw.Vector.one.multiply(1)
        });
    }
    async respawnS() {
        await this.setNpcDescriptionAndGun();
        this.setNpcStateS(true);
        EffectService.playOnGameObject(this.respawnEffect, this.npc, {
            slotType: mw.HumanoidSlotType.Root
        });
    }
    setNpcStateS(isVisibility) {
        this.npc.ragdollEnabled = !isVisibility;
        this.useUpdate = isVisibility;
        if (!isVisibility && this.model) this.model.setVisibility(isVisibility);
    }
    initMove() {
        this.targetPos = this.pathVector[this.index];
        this.npc.maxWalkSpeed = this.moveSpeed;
    }
    onUpdateS(dt) {
        this.frameCount++;
        if (this.frameCount < this.maxFrameCount) return;
        this.frameCount = 0;
        this.updateMove();
    }
    updateMove() {
        if (!this.pathVector || this.pathVector.length <= 1) return;
        this.curBossDir = this.targetPos.clone().add(this.targetPos.clone().subtract(this.npc.worldTransform.position.clone()));
        this.npc.lookAt(this.curBossDir);
        this.npc.addMovement(mw.Vector.forward);
        this.targetDistance = Math.sqrt(Math.pow(this.npc.worldTransform.position.x - this.pathVector[this.index].x, 2) + Math.pow(this.npc.worldTransform.position.y - this.pathVector[this.index].y, 2));
        if (this.targetDistance > 50) return;
        if (this.pathFlag && this.index < this.pathVector.length - 1) {
            this.index++;
            if (this.index == this.pathVector.length - 1) this.pathFlag = false;
        } else if (!this.pathFlag && this.index > 0) {
            this.index--;
            if (this.index == 0) this.pathFlag = true;
        }
        this.targetPos = this.pathVector[this.index];
    }
    onDestroy() {}
};

__decorate([ mw.Property({
    displayName: "当前剩余血量",
    group: "设置属性",
    tooltip: "当前剩余血量",
    replicated: true,
    onChanged: "onHpChanged"
}) ], Npc.prototype, "curHp", void 0);

__decorate([ mw.Property({
    displayName: "路径",
    group: "设置属性",
    tooltip: "路径"
}) ], Npc.prototype, "pathVector", void 0);

__decorate([ mw.Property({
    displayName: "移动速度",
    group: "设置属性",
    tooltip: "移动速度",
    range: {
        min: 100,
        max: 1e3,
        showSlider: true
    }
}) ], Npc.prototype, "moveSpeed", void 0);

Npc = __decorate([ Component ], Npc);

var Npc$1 = Npc;

var foreign120 = Object.freeze({
    __proto__: null,
    default: Npc$1
});

let AddMaxHp = class AddMaxHp extends Script {
    constructor() {
        super(...arguments);
        this.playerModuleC = null;
        this.adPanel = null;
        this.confirmPanel = null;
        this.coinModuleC = null;
    }
    onStart() {
        if (mw.SystemUtil.isClient()) {
            this.onStartC();
        } else if (mw.SystemUtil.isServer()) {
            this.onStartS();
        }
    }
    onUpdate(dt) {
        if (mw.SystemUtil.isClient()) {
            this.onUpdateC(dt);
        } else if (mw.SystemUtil.isServer()) {
            this.onUpdateS(dt);
        }
    }
    get getPlayerModuleC() {
        if (this.playerModuleC == null) {
            this.playerModuleC = ModuleService.getModule(PlayerModuleC);
        }
        return this.playerModuleC;
    }
    get getAdPanel() {
        if (this.adPanel == null) {
            this.adPanel = UIService.getUI(AdPanel);
        }
        return this.adPanel;
    }
    get getConfirmPanel() {
        if (this.confirmPanel == null) {
            this.confirmPanel = UIService.getUI(ConfirmPanel);
        }
        return this.confirmPanel;
    }
    get getCoinModuleC() {
        if (this.coinModuleC == null) {
            this.coinModuleC = ModuleService.getModule(CoinModuleC);
        }
        return this.coinModuleC;
    }
    async onStartC() {
        await ModuleService.ready();
        this.useUpdate = false;
        this.initModule();
        this.initUIPanel();
        this.initTrigger();
    }
    initModule() {
        this.playerModuleC = ModuleService.getModule(PlayerModuleC);
    }
    initUIPanel() {
        this.adPanel = UIService.getUI(AdPanel);
    }
    initTrigger() {
        let trigger = this.gameObject;
        trigger.onEnter.add(this.onTriggerEnter.bind(this));
    }
    onTriggerEnter(character) {
        if (Player.localPlayer.character != character) return;
        this.getAdPanel.showRewardAd((() => {
            this.getPlayerModuleC.addMaxHp();
        }), "奖励翻倍\n最大生命值提高到 + " + GlobalData.maxHp * 2, "取消", "免费提高");
    }
    onUpdateC(dt) {}
    onStartS() {
        this.useUpdate = false;
    }
    onUpdateS(dt) {}
    onDestroy() {}
};

AddMaxHp = __decorate([ Component ], AddMaxHp);

var AddMaxHp$1 = AddMaxHp;

var foreign121 = Object.freeze({
    __proto__: null,
    default: AddMaxHp$1
});

let TryOutGun = class TryOutGun extends Script {
    constructor() {
        super(...arguments);
        this.gunModuleC = null;
        this.morphModuleC = null;
        this.shopModuleC = null;
        this.adPanel = null;
        this.confirmPanel = null;
        this.coinModuleC = null;
        this.gunAnchor = null;
        this.gunModel = null;
        this.gunkey = null;
    }
    onStart() {
        if (mw.SystemUtil.isClient()) {
            this.onStartC();
        } else if (mw.SystemUtil.isServer()) {
            this.onStartS();
        }
    }
    onUpdate(dt) {
        if (mw.SystemUtil.isClient()) {
            this.onUpdateC(dt);
        } else if (mw.SystemUtil.isServer()) {
            this.onUpdateS(dt);
        }
    }
    get getGunModuleC() {
        if (this.gunModuleC == null) {
            this.gunModuleC = ModuleService.getModule(GunModuleC);
        }
        return this.gunModuleC;
    }
    get getMorphModuleC() {
        if (this.morphModuleC == null) {
            this.morphModuleC = ModuleService.getModule(MorphModuleC);
        }
        return this.morphModuleC;
    }
    get getShopModuleC() {
        if (this.shopModuleC == null) {
            this.shopModuleC = ModuleService.getModule(ShopModuleC);
        }
        return this.shopModuleC;
    }
    get getAdPanel() {
        if (this.adPanel == null) {
            this.adPanel = UIService.getUI(AdPanel);
        }
        return this.adPanel;
    }
    get getConfirmPanel() {
        if (this.confirmPanel == null) {
            this.confirmPanel = UIService.getUI(ConfirmPanel);
        }
        return this.confirmPanel;
    }
    get getCoinModuleC() {
        if (this.coinModuleC == null) {
            this.coinModuleC = ModuleService.getModule(CoinModuleC);
        }
        return this.coinModuleC;
    }
    async onStartC() {
        await ModuleService.ready();
        this.useUpdate = false;
        this.initGunAnchor();
        this.initModule();
        this.initUIPanel();
        this.initTrigger();
    }
    initGunAnchor() {
        this.gunAnchor = this.gameObject.getChildByName("gunAnchor");
        this.switchGunModel(Utils.randomInt(10, 14));
    }
    initModule() {
        this.gunModuleC = ModuleService.getModule(GunModuleC);
    }
    initUIPanel() {
        this.adPanel = UIService.getUI(AdPanel);
    }
    initTrigger() {
        let trigger = this.gameObject;
        trigger.onEnter.add(this.onTriggerEnter.bind(this));
    }
    onTriggerEnter(character) {
        if (Player.localPlayer.character != character) return;
        let gunElement = GameConfig.GUN.getElement(this.gunkey);
        this.getAdPanel.showRewardAd((() => {
            if (!this.gunkey) return;
            this.switchGun();
            this.switchGunModel(Utils.randomInt(10, 14));
        }), gunElement.GUNNAME + "\n免费使用一局", "取消", "免费使用");
    }
    switchGun() {
        if (this.getMorphModuleC.getIsMorph) {
            this.getShopModuleC.setUseShopId_Gun(this.gunkey);
        } else {
            this.getGunModuleC.switchGun(this.gunkey);
        }
    }
    async switchGunModel(key) {
        if (this.gunkey == key) return;
        this.gunkey = key;
        if (this.gunModel) GameObjPool.despawn(this.gunModel);
        let gunElement = GameConfig.GUN.getElement(this.gunkey);
        let gunId = gunElement.GUNICON_M;
        await Utils.asyncDownloadAsset(gunId);
        this.gunModel = await GameObjPool.asyncSpawn(gunId, mwext.GameObjPoolSourceType.Asset);
        this.gunModel.parent = this.gunAnchor;
        this.gunModel.localTransform.position = gunElement.GUNLOC;
        this.gunModel.localTransform.rotation = new mw.Rotation(0, 15, 0);
        this.gunModel.localTransform.scale = gunElement.GUNSCALE;
    }
    onUpdateC(dt) {}
    onStartS() {
        this.useUpdate = false;
    }
    onUpdateS(dt) {}
    onDestroy() {}
};

TryOutGun = __decorate([ Component ], TryOutGun);

var TryOutGun$1 = TryOutGun;

var foreign125 = Object.freeze({
    __proto__: null,
    default: TryOutGun$1
});

var FreeCamera_1;

let FreeCamera = FreeCamera_1 = class FreeCamera extends Script {
    constructor() {
        super(...arguments);
        this.speed = 500;
        this._moveDirection = Vector.zero;
        this._moveLoc = Vector.zero;
        this.VECTOR_ZERO = Vector.zero;
        this.isFreeCamera = false;
        this.isFirstChange = true;
    }
    onStart() {
        this.init();
    }
    async init() {
        if (SystemUtil.isServer()) return;
        await (await Player.asyncGetLocalPlayer()).character.asyncReady();
        this.freeCamera = await GameObject.asyncSpawn("Camera");
        this.freeCamera.springArm.localTransform = Transform.identity;
        this.freeCamera.upAngleLimit = 89.9;
        this.freeCamera.downAngleLimit = 89.9;
        this.freeCamera.localTransform = Transform.identity;
        this.freeCamera.springArm.localTransform = Transform.identity;
        this.freeCamera.springArm.length = 0;
        this.freeCamera.springArm.collisionEnabled = false;
        InputUtil.onKeyDown(Keys.F8, (() => {
            if (this.isFreeCamera) {
                this.exitFreeCamera();
            } else {
                this.enterFreeCamera();
            }
        }));
        InputUtil.onKeyDown(Keys.NumPadNine, (() => {
            this.freeCamera.springArm.worldTransform.position = Player.localPlayer.character.worldTransform.position.clone();
            this._moveLoc = this.freeCamera.springArm.worldTransform.position.clone();
        }));
        Event.addLocalListener(FreeCamera_1.EVENTS_JOYSTICK_INPUT, (dir => {
            if (this.freeCamera) {
                const forward = this.freeCamera.worldTransform.clone().getForwardVector().clone();
                const right = this.freeCamera.worldTransform.clone().getRightVector().clone();
                this._moveDirection.set(forward.multiply(dir.y).add(right.multiply(dir.x)));
                Vector.add(this._moveLoc, this._moveDirection.normalized.multiply(this.speed * .02), this._moveLoc);
                this.freeCamera.springArm.worldTransform.position = this._moveLoc;
                if (this.useUpdate) this.useUpdate = false;
            }
        }));
        KeyActionManager.instance.add([ Keys.W, Keys.S, Keys.A, Keys.D, Keys.E, Keys.Q ]);
    }
    enterFreeCamera() {
        if (!this.originCamera) {
            this.originCamera = Camera.currentCamera;
        }
        if (this.isFirstChange) {
            this.freeCamera.springArm.worldTransform.position = Player.localPlayer.character.worldTransform.position.clone();
            this._moveLoc = this.freeCamera.springArm.worldTransform.position.clone();
            this.isFirstChange = false;
        }
        Camera.switch(this.freeCamera, 0);
        this.originCamera.springArm.useControllerRotation = false;
        this.freeCamera.springArm.useControllerRotation = true;
        Player.localPlayer.character.movementEnabled = false;
        this.isFreeCamera = true;
        this.useUpdate = true;
    }
    exitFreeCamera() {
        if (!this.isFreeCamera) return;
        Camera.switch(this.originCamera, 0);
        this.originCamera.springArm.useControllerRotation = true;
        this.freeCamera.springArm.useControllerRotation = false;
        Player.localPlayer.character.movementEnabled = true;
        this.isFreeCamera = false;
        this.useUpdate = false;
    }
    onUpdate(dt) {
        if (KeyActionManager.instance.isPress(Keys.W)) {
            const forward = this.freeCamera.worldTransform.clone().getForwardVector().clone();
            this._moveDirection.x += forward.x;
            this._moveDirection.y += forward.y;
        }
        if (KeyActionManager.instance.isPress(Keys.S)) {
            const back = this.freeCamera.worldTransform.clone().getForwardVector().clone().multiply(-1);
            this._moveDirection.x += back.x;
            this._moveDirection.y += back.y;
        }
        if (KeyActionManager.instance.isPress(Keys.A)) {
            const left = this.freeCamera.worldTransform.clone().getRightVector().clone().multiply(-1);
            this._moveDirection.x += left.x;
            this._moveDirection.y += left.y;
        }
        if (KeyActionManager.instance.isPress(Keys.D)) {
            const right = this.freeCamera.worldTransform.clone().getRightVector().clone();
            this._moveDirection.x += right.x;
            this._moveDirection.y += right.y;
        }
        if (KeyActionManager.instance.isPress(Keys.E)) {
            this._moveDirection.z += 1;
        }
        if (KeyActionManager.instance.isPress(Keys.Q)) {
            this._moveDirection.z -= 1;
        }
        if (!this._moveDirection.equals(this.VECTOR_ZERO)) {
            Vector.add(this._moveLoc, this._moveDirection.normalized.multiply(this.speed * dt), this._moveLoc);
            this.freeCamera.springArm.worldTransform.position = this._moveLoc;
            this._moveDirection.x = 0;
            this._moveDirection.y = 0;
            this._moveDirection.z = 0;
        }
    }
};

FreeCamera.EVENTS_JOYSTICK_INPUT = "FreeCamera.EVENTS_JOYSTICK_INPUT";

FreeCamera = FreeCamera_1 = __decorate([ Component ], FreeCamera);

var FreeCamera$1 = FreeCamera;

class KeyActionManager {
    constructor() {
        this.isReady = false;
        this._actionStates = new Map;
        this._btnStates = new Map;
    }
    static get instance() {
        if (!KeyActionManager._instance) {
            KeyActionManager._instance = new KeyActionManager;
        }
        return KeyActionManager._instance;
    }
    isPress(action) {
        if (action instanceof mw.Button) {
            return this._btnStates.get(action.guid);
        } else {
            return this._actionStates.get(action);
        }
    }
    add(btn) {
        if (btn instanceof Button) {
            this._btnStates.set(btn.guid, false);
            btn.onPressed.add((() => {
                this._btnStates.set(btn.guid, true);
            }));
            btn.onReleased.add((() => {
                this._btnStates.set(btn.guid, false);
            }));
        } else {
            btn.forEach((element => {
                this._actionStates.set(element, false);
                InputUtil.onKeyDown(element, (() => {
                    this._actionStates.set(element, true);
                }));
                InputUtil.onKeyUp(element, (() => {
                    this._actionStates.set(element, false);
                }));
            }));
        }
    }
}

var foreign151 = Object.freeze({
    __proto__: null,
    default: FreeCamera$1
});

class TSIAP {
    constructor() {
        this.enable = false;
        this.arkCoin = 0;
        this.onArkCoinChange = new Action1;
        if (SystemUtil.isClient()) {
            mw.MessageChannelService.registerAction("bridge.action.feature.support.result", this, (dataStr => {
                try {
                    const resp = JSON.parse(dataStr).data;
                    if (resp.feature == "isIAPEnable") {
                        this.enable = resp.isSupport;
                    }
                } catch (err) {}
            }));
            this.reqIAP();
            PurchaseService.onArkBalanceUpdated.add((amount => {
                this.arkCoin = amount;
                this.onArkCoinChange.call(amount);
            }));
            this.reqRefreshCoin();
        }
    }
    reqIAP() {
        const Data = {
            action: "ue.action.feature.support",
            messageId: 0,
            callbackType: "Call",
            data: {
                feature: "isIAPEnable"
            }
        };
        const DataStr = JSON.stringify(Data);
        mw.MessageChannelService.sendTo(mw.MessageChannelReceiver.Client, DataStr);
    }
    reqBuyGoods(commodityId) {
        return new Promise((result => {
            console.warn("发起购买的code", commodityId);
            PurchaseService.placeOrder(commodityId, 1, ((status, msg) => {
                console.warn(`IAP_BuyCallback__,status:${status},msg:${msg},id:${commodityId}`);
                PurchaseService.getArkBalance();
                if (status == 200) {
                    result(true);
                    console.warn("订单支付成功!," + commodityId);
                } else {
                    result(false);
                    console.warn(`订单支付失败, id:${commodityId},msg:${msg}`);
                }
            }));
        }));
    }
    isArkCoinEnough(cost) {
        return this.arkCoin >= cost;
    }
    reqRefreshCoin() {
        PurchaseService.getArkBalance();
    }
}

let TSIAPService = new TSIAP;

var foreign153 = Object.freeze({
    __proto__: null,
    TSIAPService: TSIAPService
});

let JumpGame = class JumpGame extends Script {
    constructor() {
        super(...arguments);
        this.confirmPanel = null;
        this.jumpTrigger = null;
    }
    onStart() {
        if (mw.SystemUtil.isClient()) {
            this.useUpdate = false;
            this.onStartC();
        } else if (mw.SystemUtil.isServer()) {
            this.useUpdate = false;
            this.onStartS();
        }
    }
    onUpdate(dt) {
        if (mw.SystemUtil.isClient()) {
            this.onUpdateC(dt);
        } else if (mw.SystemUtil.isServer()) {
            this.onUpdateS(dt);
        }
    }
    get getConfirmPanel() {
        if (this.confirmPanel == null) {
            this.confirmPanel = UIService.getUI(ConfirmPanel);
        }
        return this.confirmPanel;
    }
    onStartC() {
        this.jumpTrigger = this.gameObject;
        this.jumpTrigger.onEnter.add((character => {
            if (Player.localPlayer.character != character) return;
            this.getConfirmPanel.confirmTips((() => {
                mw.RouteService.enterNewGame("P_3440ed187d6a2079f7a42e496389c0a43267d222");
            }), "前往 枪战躲猫猫-私人别墅", "前往", "取消");
        }));
    }
    onUpdateC(dt) {}
    onStartS() {}
    onUpdateS(dt) {}
};

JumpGame = __decorate([ Component ], JumpGame);

var JumpGame$1 = JumpGame;

var foreign154 = Object.freeze({
    __proto__: null,
    default: JumpGame$1
});

let JumpGameTips_Generate = class JumpGameTips_Generate extends UIScript {
    onAwake() {
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/TextBlock"));
    }
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) {}
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    hide() {
        mw.UIService.hideUI(this);
    }
};

JumpGameTips_Generate = __decorate([ UIBind("UI/common/JumpGameTips.ui") ], JumpGameTips_Generate);

var JumpGameTips_Generate$1 = JumpGameTips_Generate;

var foreign162 = Object.freeze({
    __proto__: null,
    default: JumpGameTips_Generate$1
});

let SecondNoticeItem_Generate = class SecondNoticeItem_Generate extends UIScript {
    get txt_context() {
        if (!this.txt_context_Internal && this.uiWidgetBase) {
            this.txt_context_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/txt_context");
        }
        return this.txt_context_Internal;
    }
    get icon() {
        if (!this.icon_Internal && this.uiWidgetBase) {
            this.icon_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/icon");
        }
        return this.icon_Internal;
    }
    get effect() {
        if (!this.effect_Internal && this.uiWidgetBase) {
            this.effect_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/effect");
        }
        return this.effect_Internal;
    }
    onAwake() {
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        this.initLanguage(this.txt_context);
    }
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) {}
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    hide() {
        mw.UIService.hideUI(this);
    }
};

SecondNoticeItem_Generate = __decorate([ UIBind("UI/common/notice/SecondNoticeItem.ui") ], SecondNoticeItem_Generate);

var SecondNoticeItem_Generate$1 = SecondNoticeItem_Generate;

var foreign164 = Object.freeze({
    __proto__: null,
    default: SecondNoticeItem_Generate$1
});

let DiamondItem_Generate = class DiamondItem_Generate extends UIScript {
    get mFirstBuyTextBlock() {
        if (!this.mFirstBuyTextBlock_Internal && this.uiWidgetBase) {
            this.mFirstBuyTextBlock_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/MainCanvas/mFirstBuyTextBlock");
        }
        return this.mFirstBuyTextBlock_Internal;
    }
    get mIconImage() {
        if (!this.mIconImage_Internal && this.uiWidgetBase) {
            this.mIconImage_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/MainCanvas/IconImage/mIconImage");
        }
        return this.mIconImage_Internal;
    }
    get mDiamondCountTextBlock() {
        if (!this.mDiamondCountTextBlock_Internal && this.uiWidgetBase) {
            this.mDiamondCountTextBlock_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/MainCanvas/mDiamondCountTextBlock");
        }
        return this.mDiamondCountTextBlock_Internal;
    }
    get mFirstCanvas() {
        if (!this.mFirstCanvas_Internal && this.uiWidgetBase) {
            this.mFirstCanvas_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/MainCanvas/mFirstCanvas");
        }
        return this.mFirstCanvas_Internal;
    }
    get mFirstDiamondTextBlock() {
        if (!this.mFirstDiamondTextBlock_Internal && this.uiWidgetBase) {
            this.mFirstDiamondTextBlock_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/MainCanvas/mFirstCanvas/FirstBgImage/mFirstDiamondTextBlock");
        }
        return this.mFirstDiamondTextBlock_Internal;
    }
    get mLeBiCanvas() {
        if (!this.mLeBiCanvas_Internal && this.uiWidgetBase) {
            this.mLeBiCanvas_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/MainCanvas/mLeBiCanvas");
        }
        return this.mLeBiCanvas_Internal;
    }
    get mLiBiCountTextBlock_Real() {
        if (!this.mLiBiCountTextBlock_Real_Internal && this.uiWidgetBase) {
            this.mLiBiCountTextBlock_Real_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/MainCanvas/mLeBiCanvas/LiBiCanvas/mLiBiCountTextBlock_Real");
        }
        return this.mLiBiCountTextBlock_Real_Internal;
    }
    get mLiBiCountTextBlock_Fake() {
        if (!this.mLiBiCountTextBlock_Fake_Internal && this.uiWidgetBase) {
            this.mLiBiCountTextBlock_Fake_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/MainCanvas/mLeBiCanvas/LiBiCanvas/mLiBiCountTextBlock_Real/mLiBiCountTextBlock_Fake");
        }
        return this.mLiBiCountTextBlock_Fake_Internal;
    }
    get mBuyButton() {
        if (!this.mBuyButton_Internal && this.uiWidgetBase) {
            this.mBuyButton_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/MainCanvas/mBuyButton");
        }
        return this.mBuyButton_Internal;
    }
    onAwake() {
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        this.mBuyButton.onClicked.add((() => {
            Event.dispatchToLocal("PlayButtonClick", "mBuyButton");
        }));
        this.mBuyButton.touchMethod = mw.ButtonTouchMethod.PreciseTap;
        this.initLanguage(this.mFirstBuyTextBlock);
        this.initLanguage(this.mDiamondCountTextBlock);
        this.initLanguage(this.mFirstDiamondTextBlock);
        this.initLanguage(this.mLiBiCountTextBlock_Real);
        this.initLanguage(this.mLiBiCountTextBlock_Fake);
    }
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) {}
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    hide() {
        mw.UIService.hideUI(this);
    }
};

DiamondItem_Generate = __decorate([ UIBind("UI/module/CoinModule/DiamondItem.ui") ], DiamondItem_Generate);

var DiamondItem_Generate$1 = DiamondItem_Generate;

var foreign169 = Object.freeze({
    __proto__: null,
    default: DiamondItem_Generate$1
});

let DiamondPanel_Generate = class DiamondPanel_Generate extends UIScript {
    get mMainCanvas() {
        if (!this.mMainCanvas_Internal && this.uiWidgetBase) {
            this.mMainCanvas_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mMainCanvas");
        }
        return this.mMainCanvas_Internal;
    }
    get mContentCanvas() {
        if (!this.mContentCanvas_Internal && this.uiWidgetBase) {
            this.mContentCanvas_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mMainCanvas/mContentCanvas");
        }
        return this.mContentCanvas_Internal;
    }
    get mCloseButton() {
        if (!this.mCloseButton_Internal && this.uiWidgetBase) {
            this.mCloseButton_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mMainCanvas/mCloseButton");
        }
        return this.mCloseButton_Internal;
    }
    get mAdsButton() {
        if (!this.mAdsButton_Internal && this.uiWidgetBase) {
            this.mAdsButton_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mMainCanvas/mAdsButton");
        }
        return this.mAdsButton_Internal;
    }
    get mLeBiIconImage() {
        if (!this.mLeBiIconImage_Internal && this.uiWidgetBase) {
            this.mLeBiIconImage_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mMainCanvas/mLeBiIconImage");
        }
        return this.mLeBiIconImage_Internal;
    }
    get mLeBiCountTextBlock() {
        if (!this.mLeBiCountTextBlock_Internal && this.uiWidgetBase) {
            this.mLeBiCountTextBlock_Internal = this.uiWidgetBase.findChildByPath("RootCanvas/mMainCanvas/mLeBiIconImage/mLeBiCountTextBlock");
        }
        return this.mLeBiCountTextBlock_Internal;
    }
    onAwake() {
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        this.mCloseButton.onClicked.add((() => {
            Event.dispatchToLocal("PlayButtonClick", "mCloseButton");
        }));
        this.mCloseButton.touchMethod = mw.ButtonTouchMethod.PreciseTap;
        this.initLanguage(this.mLeBiCountTextBlock);
        this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/mMainCanvas/TitleTextBlock"));
    }
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) {}
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    hide() {
        mw.UIService.hideUI(this);
    }
};

DiamondPanel_Generate = __decorate([ UIBind("UI/module/CoinModule/DiamondPanel.ui") ], DiamondPanel_Generate);

var DiamondPanel_Generate$1 = DiamondPanel_Generate;

var foreign170 = Object.freeze({
    __proto__: null,
    default: DiamondPanel_Generate$1
});

let RadarPanel_Generate = class RadarPanel_Generate extends UIScript {
    onAwake() {
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {}
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) {}
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    hide() {
        mw.UIService.hideUI(this);
    }
};

RadarPanel_Generate = __decorate([ UIBind("UI/module/RadarModule/RadarPanel.ui") ], RadarPanel_Generate);

var RadarPanel_Generate$1 = RadarPanel_Generate;

var foreign189 = Object.freeze({
    __proto__: null,
    default: RadarPanel_Generate$1
});

const MWModuleMap = {
    "872EA4994F44D748602BDAB7D3F062A8": foreign1,
    "27643B81439C93F721FD7BBEDE45563D": foreign2,
    "8844A03B4B6BEF9D15DCAAA48FB26A57": foreign3,
    B0B4B657452A9DF4B7AD97B03BE71040: foreign4,
    "1EADC67E44A4E69AE0536FAD402CBF72": foreign5,
    "943D729E44EDCB8FC0E0E0A49FC4B81D": foreign6,
    "3B61A4DB49AE6194EE0F06A02CBF06DB": foreign7,
    "11F0706F47F8F9B21C2E2DB39CDDB08D": foreign8,
    A849031C40A67F075DCAA7B2EFEA0054: foreign9,
    EDF8B048429CFF15DDD6F199D156D764: foreign10,
    "4951CF4D422490F4ACF553BB60610E2F": foreign11,
    E316E486438AA68A065B84BA6952011E: foreign12,
    "10B051634D0511CDDEF7B08FAAE6BFA6": foreign13,
    "5780CF9B427F02071A2703A7ADAB830F": foreign14,
    CEEA10834D67E5C5EE97349458717589: foreign15,
    F68D6D72447D90741D2AEBA5EB5C8F33: foreign16,
    "9B86B84E423B84B77E564D8B0651277C": foreign17,
    CED4CA2142AEFA262D3280859021EA7E: foreign18,
    "0EADC1044CD2BA045430A1B547CBCA11": foreign19,
    A0C3DD3D48CE1A8FC4C62C8511BD3823: foreign20,
    "7048A3FC4E533DAF207C31B5A5617346": foreign21,
    "1CBD714C46ACD022AD58C3B5EB91C59F": foreign22,
    "8F61D5904CD1A0EDBE6332B96A1FB727": foreign23,
    FC8BC990490D8CF2D317D2AFF52A70EE: foreign24,
    "511B5B5746F4537665EF7B8F27C93053": foreign25,
    "450519BB4F36F5CC9749E6A012630E3B": foreign26,
    "0718B62B40E26ED459877CBB4FD85C42": foreign27,
    "903AF122474AAE17CADC4C9ECFDD8BAB": foreign28,
    "981D887E4154A4347498888ECC71A9E3": foreign29,
    "1B0AF24F4BCB7DD61198E4A8962EAC08": foreign30,
    FE137BC647CA01115D03A0B579B539DE: foreign31,
    CAF7D76649AA26A5513E3FACB86C8990: foreign32,
    "3C3DA14F4497E713F954C7A6EBF72784": foreign33,
    D21259664148C22F10AE898C16C20C10: foreign34,
    "166E934A4902E0274794828A310EFA30": foreign35,
    "2D18B9F54A92F2FF6FA2D2AB7FDBB383": foreign36,
    "779F76F84DA2F22D956C0F94B2771A24": foreign37,
    "6374DD3342310CB36D6D868EC5478FF4": foreign38,
    "3E7330BE4F7FCF956CA1D2BCBF6AE39F": foreign39,
    "20D4E7B34062917BFE6521B1A18BC5C0": foreign40,
    "446833524705B3CCE7368791F83B886F": foreign41,
    "9E1ADCC448455A849F4DCA84AE73DC9D": foreign42,
    A9D81E7D48100AF0EA7DCD9E0752AEFE: foreign43,
    A130B52C4AF5EECD2F23289D77B8EB09: foreign44,
    "8124491A42187A5F88F086A0FD02710E": foreign45,
    B0213BA7450C580B0A5546916A1389DE: foreign46,
    E08785B845921265152740AE7A0216CE: foreign47,
    F29DEF0F4B0737C67867FD94FBB98A21: foreign48,
    "4B4217B24956641177CEC08EB53E3AEA": foreign49,
    "87892AB843319CC0CD7C7FA15A4865E8": foreign50,
    EC2961B34147096FC9DBC2971DD9AA53: foreign51,
    "923A6E8F46E931847A52969332C461B9": foreign52,
    C03AC5C249616209D492629C8F086496: foreign53,
    "204F67E74B245682B7C185BE08A55893": foreign54,
    "928309DE474818FC9C60E586702D6E81": foreign55,
    A9FCB54A4E975BF93AC10092B9C78DBE: foreign56,
    A46297B644C7B1AA9EA6D8A893A02519: foreign57,
    "2628F65C4C8648F48342CD8037269869": foreign58,
    E19C4FBC41BEE3AD41222B8D64AAD365: foreign59,
    "577AC6884B09925638FB3E9706AC470A": foreign60,
    EE78E7314CE5C2346E4F38B5F8A83CDB: foreign61,
    "011052CD4ED0D3DC9960ABBFBBC46D5A": foreign62,
    CE9E8DF94E7F2E3FC057228B84B8E28E: foreign63,
    "11468D33412E2D7CFBB95B87B60B1B4C": foreign64,
    D51503F74442F206E7F3AAA1695FD0F8: foreign65,
    E36A2D4540EFA8F6878C7F9099266A0F: foreign66,
    C8A2AC6A4B636C2B8CCDCF8F0EB0B842: foreign67,
    B1E0770747ADD14660FC0A8815AAD69B: foreign68,
    B79BE47444A997C05607A0984395F823: foreign69,
    "3B3D2BCF49F8A7A881A4879F7F1A175C": foreign70,
    "89F7C8DB449693A7910FEF8DBF61CEF1": foreign71,
    FE57161248BFD83817B93EA9DAEEA0C2: foreign72,
    DAD4D03849A3193CA509FA87389A53DD: foreign73,
    C2E7A2E041E5BB00F9451CBBBF64D6A6: foreign74,
    "12DD619744D39529F9EC039D51F62C17": foreign75,
    A24F3854446288030FEB11B9F1669D06: foreign76,
    "5CA2293C4B0A9CA7C2D0CBBF73D219E2": foreign77,
    CDEC1633415E54B05B6AED9CBB9D8967: foreign78,
    "46BDF085407A638D241D58850C410923": foreign79,
    "290F1F4D42ECBF13317BD8BC212FA75A": foreign80,
    "2E162EDD4A7F55E58539648F012097D2": foreign81,
    "36994D0E483CF7F6283CAFACCB406590": foreign82,
    F80D68DA497F0D49745DDE80D38E9011: foreign83,
    "0F598A9C453EA67A85B875B1E1D8AB93": foreign84,
    "7D98F77C457BD44550899198F36FDB9F": foreign85,
    "188EB62D4BAF9B98F91C589C70DE4698": foreign86,
    "2943C580492BC867A5B690B2B178012A": foreign87,
    "533992264411311B6F383EBE0ECF1BB5": foreign88,
    "2A2161914E537A9F71E302BCA0CA6AC6": foreign89,
    "42EE39EA49315FAE8563A88B97E3F060": foreign90,
    "34514D87410DC61DB5B64C9DCE81A833": foreign91,
    C6239AAF49000AB5543412A4C68EAD31: foreign92,
    BF3F51EE49B1F2B8E540B5BE41BCC27F: foreign93,
    "6D644F7A45B04E884AD5AA972C46C174": foreign94,
    "5412430B4D7A4F6AD130678D4BC159E0": foreign95,
    "7F2CCB354EB99D9A0A5B778B29710155": foreign96,
    "43D19C1D40CA859F774230B98EE261B5": foreign97,
    "7B3F640D45CDC99A229EFDBBC3F50ABD": foreign98,
    "66C82E484C9BFB4ADA02618A95752286": foreign99,
    DAA40DEE420925A8EA2B4FB015573440: foreign100,
    "8E647D8F40D9B4AE1A1349ACD3C3F392": foreign101,
    "4CDE05C5416CAB199FD4A68E7D1943F1": foreign102,
    "67738F2D4FC93D7F8961718891C8042A": foreign103,
    D355DD4B4EF11EA260DAAF9043337A92: foreign104,
    B3FFB33B46975FA3DF61B68CADAD43E5: foreign105,
    BFC546CF465E6F5B7AF12794A74685B6: foreign106,
    "0564982D45096EB45701F5B12C03AA73": foreign107,
    "03CCABAD4D03EEBB9EEC509FC8C041AB": foreign108,
    "4F12A4D54B59BF4E7BF8578B98947A43": foreign109,
    "14C9D8334A5CCF2499885CA2EB8235EB": foreign110,
    "0F92FD664F4498F2D37DBB85F5591864": foreign111,
    "0C059CEC46B430E154759A97D924865E": foreign112,
    F693343F43B7C53464696B8833FF38E0: foreign113,
    "11E7804D47058EB9E27F16AD288AF1CA": foreign114,
    E5D27183452CBD04A0D0D187CF2014FC: foreign115,
    "0433C0944AF345F89D35AD863E1E2290": foreign116,
    "099CC63342C56F28195B5794157F5C82": foreign117,
    "63B7A637479107F0C4812A9513E4EF84": foreign118,
    "21227DCE4B6FB5C99FA72BA5B225A752": foreign119,
    "1B12D2CD40775D42550AC8B64BACB2B5": foreign120,
    "3B463A284FD7B66C9489AA8EC3AC8A23": foreign121,
    B8D3411E480AD6F4CBA476A88A02FD84: foreign122,
    "001BB3D44F528AD6DFEB5BBB7FF03216": foreign123,
    "0C60A5DE4F7AF9F8DE3381B2CECCE96F": foreign124,
    "885A77EA4AC06DB2ABF8EB9F4AC89BA5": foreign125,
    C414180848195EEA22C4BC8C95BB22CB: foreign126,
    "2C98E91946EADE4E5FDA0EB10A1AEC93": foreign127,
    "7BDEA3704CEBB5559C6239928321865C": foreign128,
    "7833C871441E612CC5B5CE9BDDA947C9": foreign129,
    A12B8D524B602E750EB63288C79D32E2: foreign130,
    F057824E4569A842D403858DC7D1D88B: foreign131,
    "9F1D50A144B07BFAFC552F925299CE71": foreign132,
    "3E1D070A4147D9A5B46E0EAF1E5FD4E1": foreign133,
    F215908B4B4F40F5531DE4A01F660731: foreign134,
    "89FAB6BA4950774A1AEE0AA919005864": foreign135,
    "448F172F473F500F568CE69787A05879": foreign136,
    "7C89EFEF4B37DB0513F2659514BB7B93": foreign137,
    C7E79CD049A93AFDBCA399B718D2D8DC: foreign138,
    "21E846D34531A31F92F411BB9E300D5B": foreign139,
    "5F4167AC4B1A67501A0DD4A98DCCE793": foreign140,
    C2A63B424C2C17C9DE3395B59BA9444C: foreign141,
    "4CA21C094DAD2346E120EFBEA3D7736C": foreign142,
    E8535D714F5BFEC20EF595B175FA24BD: foreign143,
    "7B098C68429B7A33AA075BB6631641B6": foreign144,
    A41BD48545CC9593CB2B62B8C8BD8505: foreign145,
    "4CF1BF6940037F5268A8B4B1C326C0E1": foreign146,
    "799144174FCC1F72D4AAD2B8C0D23A93": foreign147,
    "7969AEF34724BDC60E081286C23D4945": foreign148,
    C8CD71394F0002E646F3F093BF3B8A20: foreign149,
    "761A5E774007E1CA28720DB572DA7A45": foreign150,
    "3A19265E439F9BC57DD9188415D69D90": foreign151,
    ACB26C334F3E66726611CAAACE1B29F0: foreign152,
    "5F9FD257458AA792F70050AEC35F3C7F": foreign153,
    "86F0A1A849C1B3DE1E04178576CB52FF": foreign154,
    A30FDC1848F2A2BB4F412FB42FC6A123: foreign155,
    CD82A2E448FA71DD00529A8B5261ED6C: foreign156,
    F7B863694DA50E3E6026E9902842B24D: foreign157,
    "290BA293443A80CCA56170B9DA3D47C1": foreign158,
    "7BC3DC9143A0AC886B7C69BF0BA72582": foreign159,
    "1D9AC6A243681F59349A36BF12CD1550": foreign160,
    "0ADADD634CB1574E2CE91AA7D15972BF": foreign161,
    BEE82D4145CF7AADF455DA8F65630FCE: foreign162,
    BF72AC404FF17C439A9112B6B4B32279: foreign163,
    A012B90749779FBE8DE607A2B99C7BBD: foreign164,
    "82E080274DC72CA9D26CFF80275210C8": foreign165,
    B445B07141F3B81911589FB86B887D16: foreign166,
    "3738A163431B2780E684368D4B44D659": foreign167,
    "9A05761A4E0937CD96EDBD98F5CF127C": foreign168,
    AA29C1244938B00FCD91B2AF49E1CD69: foreign169,
    "5AFEABF6491C62D9F43C6094E8586D99": foreign170,
    "69B56DE846DD7777A34F73BAAD388917": foreign171,
    C8403C274C4A11E56CBA4ABE1BB56FE9: foreign172,
    EF8CF652443106FAD829B9B7D44FDF4A: foreign173,
    "6378A8BD4992C396F0BF5795C241272A": foreign174,
    E65657ED48A221438A440EB8FB55AB3A: foreign175,
    "81DB488B4537080ADE438FB6277B9B99": foreign176,
    "2F9428944CB1980E4084FE859E88FA49": foreign177,
    EEBA68B04C2D3EBD1C9DE88C01194F40: foreign178,
    B56708264994D262084DBB9FA67AF2D8: foreign179,
    "6B82650D49240287CCBE369F13961488": foreign180,
    D28B228548DF452E65AD98BD5629DF83: foreign181,
    "370EDC474EA3A5D2CC3B2EB8833710C1": foreign182,
    F214F82148135D5766B65E870C889403: foreign183,
    A4E1A63F462AC04629353FB8D37AE2A4: foreign184,
    D66B2BC54C433C2A46A01D8554F3A934: foreign185,
    "657AFFAA4EA9A9EA8BC4989B57A03398": foreign186,
    "1A472DAE4F642552EFDCF49BD44154D7": foreign187,
    "2AE28EBB41053C381833DE8EDEC76E49": foreign188,
    "4BAAB5D2447B37D97384719CE67C9E72": foreign189,
    "4B7AD5B5415D6B34A20794B83D33C8D4": foreign190,
    "8B4959C3457E9E607BFD83A45E3B0B4E": foreign191,
    "61C409DE43B68BAD7C2712AC407F6B85": foreign192,
    "74C262194DBD0F68679088B87FA71CC7": foreign193,
    BD732EF648AD01E5A18863865EF79E7F: foreign194,
    D7D5128A42442933D108809A874A1F67: foreign195,
    "5951240940FFACB56FF8EB8F140D19E5": foreign196,
    E0AAC56B4C54E8B2B8B946A3EB4D60C5: foreign197,
    "54FA95C94AC4FD0AE2C3AF985B5862A7": foreign198,
    "181ACB1C48C92C4E510D6B94FA31BD79": foreign199,
    D01D7EC249C3AFF1D1C6D7A19C9B9D75: foreign200
};

const MWFileMapping = new WeakMap([ [ foreign1 || {}, "JavaScripts/common/ChangeClothes" ], [ foreign2 || {}, "JavaScripts/common/ConfirmPanel" ], [ foreign3 || {}, "JavaScripts/common/notice/Notice" ], [ foreign4 || {}, "JavaScripts/common/notice/Tween" ], [ foreign5 || {}, "JavaScripts/common/notice/UIPool" ], [ foreign6 || {}, "JavaScripts/common/notice/Updater" ], [ foreign7 || {}, "JavaScripts/config/AccessoriesGloves" ], [ foreign8 || {}, "JavaScripts/config/ALongCoatTop" ], [ foreign9 || {}, "JavaScripts/config/AncientMoldingOutfit" ], [ foreign10 || {}, "JavaScripts/config/Back" ], [ foreign11 || {}, "JavaScripts/config/BackHair" ], [ foreign12 || {}, "JavaScripts/config/Blush" ], [ foreign13 || {}, "JavaScripts/config/BodyType" ], [ foreign14 || {}, "JavaScripts/config/BootsShoes" ], [ foreign15 || {}, "JavaScripts/config/Bottom" ], [ foreign16 || {}, "JavaScripts/config/ColorValue" ], [ foreign17 || {}, "JavaScripts/config/ConfigBase" ], [ foreign18 || {}, "JavaScripts/config/DailyStylingOutfit1" ], [ foreign19 || {}, "JavaScripts/config/DailyStylingOutfit2" ], [ foreign20 || {}, "JavaScripts/config/Ear" ], [ foreign21 || {}, "JavaScripts/config/Effects" ], [ foreign22 || {}, "JavaScripts/config/EverydayShoes" ], [ foreign23 || {}, "JavaScripts/config/Expression" ], [ foreign24 || {}, "JavaScripts/config/Eyebrows" ], [ foreign25 || {}, "JavaScripts/config/Eyelashes" ], [ foreign26 || {}, "JavaScripts/config/Eyeshadow" ], [ foreign27 || {}, "JavaScripts/config/Face" ], [ foreign28 || {}, "JavaScripts/config/FaceExpression" ], [ foreign29 || {}, "JavaScripts/config/FaceTattoo" ], [ foreign30 || {}, "JavaScripts/config/Facing" ], [ foreign31 || {}, "JavaScripts/config/FantasyModelingOutfit" ], [ foreign32 || {}, "JavaScripts/config/FootCoverShoes" ], [ foreign33 || {}, "JavaScripts/config/FrontHair" ], [ foreign34 || {}, "JavaScripts/config/FullHair" ], [ foreign35 || {}, "JavaScripts/config/GameConfig" ], [ foreign36 || {}, "JavaScripts/config/Gloves" ], [ foreign37 || {}, "JavaScripts/config/GlovesGloves" ], [ foreign38 || {}, "JavaScripts/config/GUN" ], [ foreign39 || {}, "JavaScripts/config/HeroStylingOutfit" ], [ foreign40 || {}, "JavaScripts/config/HighHeelsShoes" ], [ foreign41 || {}, "JavaScripts/config/Hip" ], [ foreign42 || {}, "JavaScripts/config/HolidayStylingOutfit" ], [ foreign43 || {}, "JavaScripts/config/Language" ], [ foreign44 || {}, "JavaScripts/config/LeftHand" ], [ foreign45 || {}, "JavaScripts/config/Lens" ], [ foreign46 || {}, "JavaScripts/config/LipMakeup" ], [ foreign47 || {}, "JavaScripts/config/LongPantsBottom" ], [ foreign48 || {}, "JavaScripts/config/LongSinglePieceTop" ], [ foreign49 || {}, "JavaScripts/config/LongSkirtBottom" ], [ foreign50 || {}, "JavaScripts/config/LowerHighlight" ], [ foreign51 || {}, "JavaScripts/config/Morph" ], [ foreign52 || {}, "JavaScripts/config/MuppetStylingOutfit" ], [ foreign53 || {}, "JavaScripts/config/Music" ], [ foreign54 || {}, "JavaScripts/config/NakedDressShoes" ], [ foreign55 || {}, "JavaScripts/config/Outfit" ], [ foreign56 || {}, "JavaScripts/config/Pet" ], [ foreign57 || {}, "JavaScripts/config/PupilStyle" ], [ foreign58 || {}, "JavaScripts/config/RightHand" ], [ foreign59 || {}, "JavaScripts/config/ROLE" ], [ foreign60 || {}, "JavaScripts/config/ScienceFictionStylingOutfit" ], [ foreign61 || {}, "JavaScripts/config/Shoes" ], [ foreign62 || {}, "JavaScripts/config/ShopItem" ], [ foreign63 || {}, "JavaScripts/config/ShortJacketTop" ], [ foreign64 || {}, "JavaScripts/config/ShortsBottom" ], [ foreign65 || {}, "JavaScripts/config/ShortSinglePieceTop" ], [ foreign66 || {}, "JavaScripts/config/ShortSkirtBottom" ], [ foreign67 || {}, "JavaScripts/config/Shoulder" ], [ foreign68 || {}, "JavaScripts/config/SkinTone" ], [ foreign69 || {}, "JavaScripts/config/SportsShoesShoes" ], [ foreign70 || {}, "JavaScripts/config/SuitTop" ], [ foreign71 || {}, "JavaScripts/config/Tab1" ], [ foreign72 || {}, "JavaScripts/config/Tab2" ], [ foreign73 || {}, "JavaScripts/config/Tab3" ], [ foreign74 || {}, "JavaScripts/config/Task" ], [ foreign75 || {}, "JavaScripts/config/TightsBottom" ], [ foreign76 || {}, "JavaScripts/config/Top" ], [ foreign77 || {}, "JavaScripts/config/TRAILING" ], [ foreign78 || {}, "JavaScripts/config/Trailings" ], [ foreign79 || {}, "JavaScripts/config/UpperHighlight" ], [ foreign80 || {}, "JavaScripts/GameLauncher" ], [ foreign81 || {}, "JavaScripts/module/ActivityModule/ActivityData" ], [ foreign82 || {}, "JavaScripts/module/ActivityModule/ActivityModuleC" ], [ foreign83 || {}, "JavaScripts/module/ActivityModule/ActivityModuleS" ], [ foreign84 || {}, "JavaScripts/module/ActivityModule/ui/ActivityPanel" ], [ foreign85 || {}, "JavaScripts/module/AdModule/ui/AdPanel" ], [ foreign86 || {}, "JavaScripts/module/CoinModule/CoinData" ], [ foreign87 || {}, "JavaScripts/module/CoinModule/CoinModuleC" ], [ foreign88 || {}, "JavaScripts/module/CoinModule/CoinModuleS" ], [ foreign89 || {}, "JavaScripts/module/CoinModule/ui/CoinPanel" ], [ foreign90 || {}, "JavaScripts/module/CoinModule/ui/DiamondItem" ], [ foreign91 || {}, "JavaScripts/module/CoinModule/ui/DiamondPanel" ], [ foreign92 || {}, "JavaScripts/module/GMModule/GMService" ], [ foreign93 || {}, "JavaScripts/module/GunModule/GunModuleC" ], [ foreign94 || {}, "JavaScripts/module/GunModule/GunModuleS" ], [ foreign95 || {}, "JavaScripts/module/GunModule/ui/WeaponUI" ], [ foreign96 || {}, "JavaScripts/module/GunModule/WeaponDriver" ], [ foreign97 || {}, "JavaScripts/module/HUDModule/HUDData" ], [ foreign98 || {}, "JavaScripts/module/HUDModule/HUDModuleC" ], [ foreign99 || {}, "JavaScripts/module/HUDModule/HUDModuleS" ], [ foreign100 || {}, "JavaScripts/module/HUDModule/ui/HUDPanel" ], [ foreign101 || {}, "JavaScripts/module/HUDModule/ui/KillTipItem" ], [ foreign102 || {}, "JavaScripts/module/MallModule/Mall" ], [ foreign103 || {}, "JavaScripts/module/MallModule/MallData" ], [ foreign104 || {}, "JavaScripts/module/MallModule/MallModuleC" ], [ foreign105 || {}, "JavaScripts/module/MallModule/MallModuleS" ], [ foreign106 || {}, "JavaScripts/module/MallModule/ui/ColorPickPanel" ], [ foreign107 || {}, "JavaScripts/module/MallModule/ui/ColorPickTab1" ], [ foreign108 || {}, "JavaScripts/module/MallModule/ui/ColorPickTab2" ], [ foreign109 || {}, "JavaScripts/module/MallModule/ui/ColorPickTab3" ], [ foreign110 || {}, "JavaScripts/module/MallModule/ui/MallItem_Big" ], [ foreign111 || {}, "JavaScripts/module/MallModule/ui/MallItem_Color" ], [ foreign112 || {}, "JavaScripts/module/MallModule/ui/MallItem_Self" ], [ foreign113 || {}, "JavaScripts/module/MallModule/ui/MallItem_Small" ], [ foreign114 || {}, "JavaScripts/module/MallModule/ui/MallPanel" ], [ foreign115 || {}, "JavaScripts/module/MallModule/ui/MallTab1" ], [ foreign116 || {}, "JavaScripts/module/MallModule/ui/MallTab2" ], [ foreign117 || {}, "JavaScripts/module/MallModule/ui/MallTab3" ], [ foreign118 || {}, "JavaScripts/module/MallModule/ui/MallTipsPanel" ], [ foreign119 || {}, "JavaScripts/module/MorphModule/MorphModule" ], [ foreign120 || {}, "JavaScripts/module/NpcModule/Npc" ], [ foreign121 || {}, "JavaScripts/module/PlayerModule/AddMaxHp" ], [ foreign122 || {}, "JavaScripts/module/PlayerModule/PlayerData" ], [ foreign123 || {}, "JavaScripts/module/PlayerModule/PlayerModuleC" ], [ foreign124 || {}, "JavaScripts/module/PlayerModule/PlayerModuleS" ], [ foreign125 || {}, "JavaScripts/module/PlayerModule/TryOutGun" ], [ foreign126 || {}, "JavaScripts/module/RadarModule/RadarModuleC" ], [ foreign127 || {}, "JavaScripts/module/RadarModule/RadarModuleS" ], [ foreign128 || {}, "JavaScripts/module/RadarModule/ui/RadarPanel" ], [ foreign129 || {}, "JavaScripts/module/RankModule/RankData" ], [ foreign130 || {}, "JavaScripts/module/RankModule/RankModuleC" ], [ foreign131 || {}, "JavaScripts/module/RankModule/RankModuleS" ], [ foreign132 || {}, "JavaScripts/module/RankModule/ui/RankPanel" ], [ foreign133 || {}, "JavaScripts/module/RankModule/ui/RoomItem" ], [ foreign134 || {}, "JavaScripts/module/RankModule/ui/WorldItem" ], [ foreign135 || {}, "JavaScripts/module/ShopModule/ShopData" ], [ foreign136 || {}, "JavaScripts/module/ShopModule/ShopModuleC" ], [ foreign137 || {}, "JavaScripts/module/ShopModule/ShopModuleS" ], [ foreign138 || {}, "JavaScripts/module/ShopModule/ui/ShopItem" ], [ foreign139 || {}, "JavaScripts/module/ShopModule/ui/ShopPanel" ], [ foreign140 || {}, "JavaScripts/module/TaskModule/TaskData" ], [ foreign141 || {}, "JavaScripts/module/TaskModule/TaskModuleC" ], [ foreign142 || {}, "JavaScripts/module/TaskModule/TaskModuleS" ], [ foreign143 || {}, "JavaScripts/module/TaskModule/ui/TaskPanel" ], [ foreign144 || {}, "JavaScripts/module/TeamModule/TeamData" ], [ foreign145 || {}, "JavaScripts/module/TeamModule/TeamModuleC" ], [ foreign146 || {}, "JavaScripts/module/TeamModule/TeamModuleS" ], [ foreign147 || {}, "JavaScripts/module/TeamModule/ui/TeamItem" ], [ foreign148 || {}, "JavaScripts/module/TeamModule/ui/TeamPanel" ], [ foreign149 || {}, "JavaScripts/tools/EventType" ], [ foreign150 || {}, "JavaScripts/tools/FlyText" ], [ foreign151 || {}, "JavaScripts/tools/FreeCamera" ], [ foreign152 || {}, "JavaScripts/tools/GlobalData" ], [ foreign153 || {}, "JavaScripts/tools/IAPInstance" ], [ foreign154 || {}, "JavaScripts/tools/JumpGame" ], [ foreign155 || {}, "JavaScripts/tools/MapEx" ], [ foreign156 || {}, "JavaScripts/tools/PrefabEvent" ], [ foreign157 || {}, "JavaScripts/tools/TouchScript" ], [ foreign158 || {}, "JavaScripts/tools/ui/LoadingPanel" ], [ foreign159 || {}, "JavaScripts/tools/Utils" ], [ foreign160 || {}, "JavaScripts/tools/WaitingQueue" ], [ foreign161 || {}, "JavaScripts/ui-generate/common/ConfirmPanel_generate" ], [ foreign162 || {}, "JavaScripts/ui-generate/common/JumpGameTips_generate" ], [ foreign163 || {}, "JavaScripts/ui-generate/common/notice/NoticeView_generate" ], [ foreign164 || {}, "JavaScripts/ui-generate/common/notice/SecondNoticeItem_generate" ], [ foreign165 || {}, "JavaScripts/ui-generate/common/notice/TopNoticeItem_generate" ], [ foreign166 || {}, "JavaScripts/ui-generate/module/ActivityModule/ActivityPanel_generate" ], [ foreign167 || {}, "JavaScripts/ui-generate/module/AdModule/AdPanel_generate" ], [ foreign168 || {}, "JavaScripts/ui-generate/module/CoinModule/CoinPanel_generate" ], [ foreign169 || {}, "JavaScripts/ui-generate/module/CoinModule/DiamondItem_generate" ], [ foreign170 || {}, "JavaScripts/ui-generate/module/CoinModule/DiamondPanel_generate" ], [ foreign171 || {}, "JavaScripts/ui-generate/module/GMModule/GMHUD_generate" ], [ foreign172 || {}, "JavaScripts/ui-generate/module/GMModule/GMItem_generate" ], [ foreign173 || {}, "JavaScripts/ui-generate/module/GunModule/WeaponUI_generate" ], [ foreign174 || {}, "JavaScripts/ui-generate/module/HUDModule/HUDPanel_generate" ], [ foreign175 || {}, "JavaScripts/ui-generate/module/HUDModule/KillTipItem_generate" ], [ foreign176 || {}, "JavaScripts/ui-generate/module/MallModule/ColorPickPanel_generate" ], [ foreign177 || {}, "JavaScripts/ui-generate/module/MallModule/ColorPickTab1_generate" ], [ foreign178 || {}, "JavaScripts/ui-generate/module/MallModule/ColorPickTab2_generate" ], [ foreign179 || {}, "JavaScripts/ui-generate/module/MallModule/ColorPickTab3_generate" ], [ foreign180 || {}, "JavaScripts/ui-generate/module/MallModule/MallItem_Big_generate" ], [ foreign181 || {}, "JavaScripts/ui-generate/module/MallModule/MallItem_Color_generate" ], [ foreign182 || {}, "JavaScripts/ui-generate/module/MallModule/MallItem_Self_generate" ], [ foreign183 || {}, "JavaScripts/ui-generate/module/MallModule/MallItem_Small_generate" ], [ foreign184 || {}, "JavaScripts/ui-generate/module/MallModule/MallPanel_generate" ], [ foreign185 || {}, "JavaScripts/ui-generate/module/MallModule/MallTab1_generate" ], [ foreign186 || {}, "JavaScripts/ui-generate/module/MallModule/MallTab2_generate" ], [ foreign187 || {}, "JavaScripts/ui-generate/module/MallModule/MallTab3_generate" ], [ foreign188 || {}, "JavaScripts/ui-generate/module/MallModule/MallTipsPanel_generate" ], [ foreign189 || {}, "JavaScripts/ui-generate/module/RadarModule/RadarPanel_generate" ], [ foreign190 || {}, "JavaScripts/ui-generate/module/RankModule/RankPanel_generate" ], [ foreign191 || {}, "JavaScripts/ui-generate/module/RankModule/RoomItem_generate" ], [ foreign192 || {}, "JavaScripts/ui-generate/module/RankModule/WorldItem_generate" ], [ foreign193 || {}, "JavaScripts/ui-generate/module/ShareModule/SharePanel_generate" ], [ foreign194 || {}, "JavaScripts/ui-generate/module/ShopModule/ShopItem_generate" ], [ foreign195 || {}, "JavaScripts/ui-generate/module/ShopModule/ShopPanel_generate" ], [ foreign196 || {}, "JavaScripts/ui-generate/module/TaskModule/TaskItem_generate" ], [ foreign197 || {}, "JavaScripts/ui-generate/module/TaskModule/TaskPanel_generate" ], [ foreign198 || {}, "JavaScripts/ui-generate/module/TeamModule/TeamItem_generate" ], [ foreign199 || {}, "JavaScripts/ui-generate/module/TeamModule/TeamPanel_generate" ], [ foreign200 || {}, "JavaScripts/ui-generate/tools/LoadingPanel_generate" ] ]);

exports.MWFileMapping = MWFileMapping;

exports.MWModuleMap = MWModuleMap;
//# sourceMappingURL=game.js.map
