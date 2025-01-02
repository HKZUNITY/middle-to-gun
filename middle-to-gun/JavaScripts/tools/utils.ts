﻿import { Notice } from "../common/notice/Notice";
import GlobalData from "./GlobalData";

export default class Utils {
    //#region 兼容027之前的API
    /**矩形范围检测 */
    public static modifyboxOverlapInLevel(StartLocation: Vector, EndLocation: Vector, Width: number, Height: number, debug: boolean, IgnoreObjectsGuid?: Array<string>, IgnoreByKind?: boolean, Source?: GameObject): Array<GameObject> {
        let halfSize = new Vector(Width / 2, Height / 2);
        let orientation = Vector.subtract(EndLocation, StartLocation).toRotation();
        let results = QueryUtil.boxTrace(StartLocation, EndLocation, halfSize, orientation, true, debug, IgnoreObjectsGuid, IgnoreByKind, Source);
        let objResults = new Array<GameObject>();
        for (let i = 0; i < results.length; i++) {
            let obj = results[i].gameObject;
            if (!obj) continue;
            if (objResults.indexOf(obj) == -1) objResults.push(obj);
        }
        return objResults;
    }

    /**判断是不是Character */
    public static isCharacter(obj: any): obj is Character {
        if ((obj instanceof Character) && obj.player != null) {
            return true;
        }
        return false;
    }

    /**在一个位置播放特效 */
    public static rpcPlayEffectAtLocation(source: string, location: mw.Vector, loopCount?: number, rotation?: mw.Rotation, scale?: mw.Vector): number {
        let duration = undefined;
        if (loopCount < 0) {
            duration = -loopCount;
            loopCount = undefined;
        }
        return EffectService.playAtPosition(source, location, {
            loopCount: loopCount,
            duration: duration,
            rotation: rotation,
            scale: scale,
        })
    }

    public static async asyncRpcGetData(key: string): Promise<any> {
        let value = await DataStorage.asyncGetData(key);
        return value.data;
    }
    //#endregion
    public static randomInt(min: number, max: number): number {
        if (min > max) {
            let temp = min;
            min = max;
            max = temp;
        }
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    public static async asyncDownloadAsset(InAssetId: string): Promise<void> {
        if (!mw.AssetUtil.assetLoaded(InAssetId)) {
            await mw.AssetUtil.asyncDownloadAsset(InAssetId);
        }
    }

    public static setWidgetVisibility(ui: mw.Widget, visibility: mw.SlateVisibility): void {
        if (ui.visibility != visibility) ui.visibility = visibility;
    }

    public static setButtonEnable(button: mw.Button, enable: boolean): void {
        if (button.enable != enable) button.enable = enable;
    }

    public static setGameObjectVisibility(model: mw.GameObject, isVisibility: boolean): void {
        if (model.getVisibility() != isVisibility) model.setVisibility(isVisibility);
    }

    public static randomOneDifferentId(guids: string[], lastId: string): string {
        let newGuids: string[] = [];
        newGuids = guids.filter(v => v != lastId);
        lastId = newGuids[this.randomInt(0, newGuids.length - 1)];
        return lastId;
    }

    private static assetIconDataMap: Map<string, mw.AssetIconData> = new Map<string, mw.AssetIconData>();
    public static setImageByAssetIconData(image: mw.Image, icon: string): void {
        if (this.assetIconDataMap.has(icon)) {
            image.setImageByAssetIconData(this.assetIconDataMap.get(icon));
        } else {
            mw.assetIDChangeIconUrlRequest([icon]).then(() => {
                try {
                    let assetIconData = mw.getAssetIconDataByAssetID(icon);
                    image.setImageByAssetIconData(assetIconData);
                    this.assetIconDataMap.set(icon, assetIconData);
                } catch (error) { }
            });
        }
    }

    public static openUITween(mCanvas: mw.Canvas, onStart: () => void, onComplete: () => void): void {
        let tmpX: number = 0;
        let tmpY: number = 0;
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
        new mw.Tween({ x: tmpX, y: tmpY })
            .to({ x: 0, y: 0 }, 0.5 * 1000)
            .onStart(() => {
                mCanvas.position = new mw.Vector2(tmpX, tmpY);
                if (onStart) onStart();
            })
            .onUpdate((v) => {
                mCanvas.position = new mw.Vector2(v.x, v.y);
            })
            .easing(cubicBezier(.75, 2.9, .46, -0.18))
            .onComplete(() => {
                mCanvas.position = mw.Vector2.zero;
                if (onComplete) onComplete();
            })
            .start();

        let scaleType = this.randomInt(0, 2);
        new mw.Tween({ x: 0, y: 0 })
            .to({ x: 1, y: 1 }, 0.5 * 1000)
            .onStart(() => {
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
                    default:
                        break;
                }
            })
            .onUpdate((v) => {
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
                    default:
                        break;
                }
            })
            .onComplete(() => {
                mCanvas.renderScale = mw.Vector2.one;
            })
            .start();
    }

    public static closeUITween(mCanvas: mw.Canvas, onStart: () => void, onComplete: () => void): void {
        let scaleType = this.randomInt(0, 2);
        new mw.Tween({ x: 1, y: 1 })
            .to({ x: 0, y: 0 }, 0.5 * 1000)
            .onStart(() => {
                if (onStart) onStart();
                mCanvas.renderScale = new mw.Vector2(1, 1);
            })
            .onUpdate((v) => {
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
                    default:
                        break;
                }
            })
            .onComplete(() => {
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
                    default:
                        break;
                }
            })
            .start();
    }

    /**返回当前时间（例 13：15）。 */
    public static getCurrentTime(): string {
        let date = new Date();
        return date.getHours() + ":" + date.getMinutes();
    }

    public static getWhatDay(): string {
        let whatDay = "7123456".charAt(new Date().getDay());
        return whatDay;
    }

    public static weekNumChangeToCN(num: number): string {
        return "一二三四五六日".charAt(num - 1);
    }

    /**返回上次登录是周几 */
    public static getLastDay(day: number): string {
        let whatDay = "7123456".charAt(day);
        return whatDay;
    }

    /**判断是否同一周 */
    public static iSameWeek(date1, date2): boolean {
        let dt1 = new Date();
        dt1.setTime(date1);
        let dt2 = new Date();
        dt2.setTime(date2);
        let md1 = this.tmonday(dt1);
        let md2 = this.tmonday(dt2);
        return md1 === md2;
    }

    public static tmonday(dtm): string {
        let dte = new Date(dtm);
        let day = dte.getDay();
        let dty = dte.getDate();
        if (day === 0) {
            day = 7;
        }
        dte.setDate(dty - day + 1);
        return dte.getFullYear() + '-' + dte.getMonth() + '-' + dte.getDate();
    }

    public static showRewardAd(callback: () => void): void {
        if (callback) callback();
        return;
        mw.AdsService.isReady(mw.AdsType.Reward, (isReady: boolean) => {
            let isGetReward = false;
            if (isReady) {
                Utils.showAd(mw.AdsType.Reward, (state: mw.AdsState) => {
                    if (state == AdsState.Fail) {
                        // 展示失败。 展示广告失败的时候回调，一般是网络卡顿。 建议在这里做容错
                        Notice.showDownNotice("网络卡顿、再试一次吧");
                    }
                    if (state == AdsState.Success) {
                        //开始展示。 开始展示广告的时候回调，无论是否完成广告播放。 这里可以用来“保护”玩家，顺利开始播放广告后玩家客户端处在一个“挂起”的状态。 如有需要，可在此处加一些保护逻辑，例如在放广告的时候玩家暂时被传送走，等state==1关闭广告后再切回来。
                    }
                    if (state == AdsState.Close) {
                        mw.TimeUtil.delaySecond(1).then(() => {
                            if (isGetReward) {
                                if (callback) callback();
                                Notice.showDownNotice("成功获得奖励");
                            }
                        });
                    }
                    // 用户播放广告完成了，无论是否点击了关闭广告界面
                    if (state == AdsState.Reward) {
                        isGetReward = true;
                    }
                });
            } else {
                // 广告没准备好，或后台还有广告在放(玩家没放完广告就切回游戏)
                Notice.showDownNotice("广告没准备好，或后台还有广告在放");
            }
        });
    }

    private static showAd(adsType: AdsType, callback: (state: AdsState) => void): void {
        AdsService.showAd(adsType, isSuccess => {
            if (isSuccess) {
                callback(AdsState.Success);
                callback(AdsState.Close);
                callback(AdsState.Reward);
            } else {
                callback(AdsState.Fail);
            }
        });
    }

    public static randomColor(): mw.LinearColor[] {
        let colors: mw.LinearColor[] = [mw.LinearColor.red, mw.LinearColor.green, mw.LinearColor.blue,
        mw.LinearColor.yellow, new mw.LinearColor(1, 0, 1, 1), new mw.LinearColor(0, 1, 1, 1), mw.LinearColor.white];
        let fontColor = colors[this.randomInt(0, colors.length - 1)];
        let outlineColor = colors[this.randomInt(0, colors.length - 1)];
        while (fontColor.a == outlineColor.a && fontColor.r == outlineColor.r
            && fontColor.g == outlineColor.g && fontColor.b == outlineColor.b) {
            outlineColor = colors[this.randomInt(0, colors.length - 1)];
            // Console.error("颜色重复");
        }
        return [fontColor, outlineColor];
    }

    private static npcNames: string[] = ["张吉惟", "林国瑞", "林玫书", "林雅南", "江奕云", "刘柏宏", "阮建安", "林子帆", "夏志豪", "吉茹定", "李中冰", "谢彦文", "傅智翔", "洪振霞", "刘姿婷", "荣姿康", "吕致盈", "方一强", "黎芸贵", "郑伊雯", "雷进宝", "吴美隆", "吴心真", "王美珠", "郭芳天", "李雅惠", "陈文婷", "曹敏侑", "王依婷", "陈婉璇", "吴美玉", "蔡依婷", "郑昌梦", "林家纶", "黄丽昆", "李育泉", "黄芸欢", "吴韵如", "李肇芬", "卢木仲", "李成白", "方兆玉", "刘翊惠", "丁汉臻", "吴佳瑞", "舒绿珮", "周白芷", "张姿妤", "张虹伦", "周琼玫", "倪怡芳", "郭贵妃", "杨佩芳", "黄盛玫", "郑丽青", "许智云", "张孟涵", "李小爱", "王恩龙", "朱政廷", "邓诗涵", "陈政倩", "吴俊伯", "阮馨学", "翁惠珠", "吴思翰", "林佩玲", "邓海来", "陈翊依", "李建智", "武淑芬", "金雅琪", "赖怡宜", "黄育霖", "张仪湖", "王俊民", "张诗刚", "林慧颖", "沈俊君", "陈淑妤", "李姿伶", "高咏钰", "黄彦宜", "周孟儒", "潘欣臻", "李祯韵", "叶洁启", "梁哲宇", "黄晓萍", "杨雅萍", "卢志铭", "张茂以", "林婉婷", "蔡宜芸", "林珮瑜", "黄柏仪", "周逸珮", "夏雅惠", "王采珮", "林孟霖", "林竹水", "王怡乐", "王爱乐", "金佳蓉", "韩健毓", "李士杰", "陈董珍", "苏姿婷", "张政霖", "李志宏", "陈素达", "陈虹荣", "何美玲", "李仪琳", "张俞幸", "黄秋萍", "潘吉维"];
    public static randomNpcName(): string {
        return this.npcNames[this.randomInt(0, this.npcNames.length - 1)];
    }

    private static tens: string[] = ["", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];
    private static digitalUnits: string[] = ["", '十', '百', '千', '万', '亿', '十', '百', '千'];

    /**根据数字获取汉字*/
    public static numChangeToCN(num: number): string {
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
        }
        else return "零";
    }

    private static redTeamRevivalPoint: mw.Vector[] = [
        new mw.Vector(4500, 2800, 150),
        new mw.Vector(4300, 2800, 150),
        new mw.Vector(4100, 2800, 150),
        new mw.Vector(3900, 2800, 150),
        new mw.Vector(3700, 2800, 150),
        new mw.Vector(3500, 2800, 150),
        new mw.Vector(3300, 2800, 150),
        new mw.Vector(3100, 2800, 150)
    ];
    private static blueTeamRevivalPoint: mw.Vector[] = [
        new mw.Vector(-5000, -2000, 400),
        new mw.Vector(-5000, -1800, 400),
        new mw.Vector(-5000, -1600, 400),
        new mw.Vector(-5000, -1400, 400),
        new mw.Vector(-5000, -1200, 400),
        new mw.Vector(-5000, -1000, 400)
    ];
    public static randomRevivalPoint(isRedTeam: boolean): mw.Vector {
        if (isRedTeam) {
            return this.redTeamRevivalPoint[this.randomInt(0, this.redTeamRevivalPoint.length - 1)];
        } else {
            return this.blueTeamRevivalPoint[this.randomInt(0, this.blueTeamRevivalPoint.length - 1)];
        }
    }
    public static setOutLine(player: mw.Player, isTeamMate: boolean, width: number = 0.5): void {
        player.character.setOutline(true, isTeamMate ? mw.LinearColor.blue : mw.LinearColor.red, width);
    }
    public static playBirthEffect(player: mw.Player): void {
        EffectService.playOnGameObject("142750", player.character, { slotType: mw.HumanoidSlotType.Root });
    }

    public static playBirthSound(player: mw.Player): void {
        SoundService.play3DSound("169179", player.character, 1, GlobalData.soundVolume);
    }
}

export function cubicBezier(p1x, p1y, p2x, p2y) {
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