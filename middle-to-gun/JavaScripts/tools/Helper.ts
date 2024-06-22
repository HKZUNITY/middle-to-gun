import { Projectile } from "../module/WeaponModule/Projectile";

/**子弹属性 */
export interface ProjectileProp {
    /**子弹预制体 */
    prefabId: string,
    /**开火音效 */
    fireSound: string,
    /**击中特效 */
    hitEffect: string
};

export interface BulletProp {
    /**子弹预制体 */
    prefabId: string,
    /**子弹名字 */
    bulletName: string,
    /**子弹ICON */
    bulletIcon: string,
    /**子弹价格 */
    bulletPrices: number[],
}

export interface FireSoundProp {
    /**开火音效 */
    fireSound: string,
    /**音效名字 */
    soundName: string,
    /**音效ICON */
    soundIcon: string,
    /**音效价格 */
    soundPrices: number[],
}

export interface HitEffectProp {
    /**击中特效 */
    hitEffect: string,
    /**特效名字 */
    effectName: string,
    /**特效价格 */
    effectPrices: number[],
}

export interface SkinProp {
    /**皮肤Id */
    skinId: string,
    /**皮肤名字 */
    skinName: string,
    /**皮肤价格 */
    skinPrices: number[],
}

/**武器属性 */
export interface WeaponProp {
    /**武器预制体 */
    prefabId: string,
    /**槽位 */
    slotType: mw.HumanoidSlotType,
    /**持有武器姿态 */
    gunAttitude: string,
    /**技能动画 */
    skillAnims: string[],
    /**技能动画时长 */
    skillAnimTimes: number[],
    /**技能开火时间点 */
    skillAtkTime: number[],
    /**技能CD */
    skillCDs: number[],
    /**技能子弹数量 */
    skillBulletCounts: number[],
    /**技能子弹发射间隔 */
    skillFireInterval: number[],
    /**普通攻击动画 */
    normalAnims: string[],
    /**普攻动画时长 */
    normalAnimTimes: number[],
    /**普通攻击时间点 */
    normalAtkTime: number[],
    /**普通攻击子弹数量 */
    normalBulletCount: number[],
    /**子弹发射间隔 */
    normalFireInterval: number[],
    /**武器名字 */
    weaponName: string,
    /**武器ICON */
    weaponIcon: string,
    /**武器价格 */
    weaponPrices: number[],
    /**子弹数量 */
    bulletCount: number,
    /**伤害 */
    damage: number,
}

export class Helper {
    public static damage: number = 1;

    /**激活的子弹 */
    public static activeBulletMap: Map<string, Set<Projectile>> = new Map<string, Set<Projectile>>();
    /**失活的子弹 */
    public static inactiveBullets: Map<string, Projectile[]> = new Map<string, Projectile[]>();

    /**子弹数据 */
    public static projectileDateMap: Map<number, ProjectileProp> = new Map<number, ProjectileProp>
        ([
            [0, { prefabId: "1405575C47698FE0FC41F0B7E104529E", fireSound: "208048", hitEffect: "130641" }],//抛弓
            [1, { prefabId: "B8EEE9C049C089FB1E08BAA38ADC9615", fireSound: "208571", hitEffect: "200157" }],//激光扫描慢速数字
            [2, { prefabId: "4FB7635246F9D7F1BBAE98B3EEC97353", fireSound: "208166", hitEffect: "27422" }],//激光器
            [3, { prefabId: "7C8533BC45920DD59BA56B82DF975D0E", fireSound: "207772", hitEffect: "31122" }],//手枪
            [4, { prefabId: "F68FC2B94AFC0A81AA1C4D809873D98E", fireSound: "208399", hitEffect: "130641" }],//激光折射
            [5, { prefabId: "74EE012A43B28C4DDF9A279D4E93FFEF", fireSound: "207881", hitEffect: "153045" }],//手枪
            [6, { prefabId: "5D1E329545758BE6E58407910CCA0687", fireSound: "208374", hitEffect: "287821" }],//208374
            [7, { prefabId: "1961231449827BF19AF6349B27AB75FA", fireSound: "208495", hitEffect: "61006" }],//208268
            [8, { prefabId: "24E7DF3146C2E5414BE4EE8AC093215B", fireSound: "208268", hitEffect: "31122" }],//208268
            [9, { prefabId: "24E7DF3146C2E5414BE4EE8AC093215B", fireSound: "208268", hitEffect: "295656" }],//208268
        ]);
    /**武器数据 FireAnchor*/
    public static weaponDataMap: Map<number, WeaponProp> = new Map<number, WeaponProp>
        ([
            [0,
                {   //弓
                    prefabId: "51DE48DB420CD65069D6F1A77A43FE1E",
                    slotType: mw.HumanoidSlotType.LeftHand,
                    gunAttitude: "20305",
                    skillAnims: ["121981", "121981", "121981"],//弓箭手大招121981
                    skillAnimTimes: [2.47, 2.47, 2.47],
                    skillAtkTime: [1.05, 1.05, 1.05],
                    skillCDs: [1, 3, 5],
                    skillBulletCounts: [1, 3, 5],
                    skillFireInterval: [0.01, 0.05, 0.05],
                    normalAnims: ["121952", "121955", "121987", "121989", "121990"],//弓箭手五连击
                    normalAnimTimes: [1.2, 1.43, 2.17, 1.8, 2.2],
                    normalAtkTime: [0.2, 0.2, 0.6, 0.5, 0.8],
                    normalBulletCount: [1, 1, 3, 1, 1],
                    normalFireInterval: [0.01, 0.01, 0.01, 0.01, 0.01],
                    weaponName: "弓",
                    weaponIcon: "278406",
                    weaponPrices: [1, 8888],
                    bulletCount: 99999,
                    damage: 5
                }
            ],//弓,弓箭瞬发射箭,弓箭手A大招
            [1,
                {
                    prefabId: "9E24552B4B043410A0B191B34057E4B0",
                    slotType: mw.HumanoidSlotType.RightHand,
                    gunAttitude: "221620",//持有姿态
                    skillAnims: ["99959", "99959", "99959"],
                    skillAnimTimes: [0.2, 0.6, 1],
                    skillAtkTime: [0.2, 0.2, 0.2],
                    skillCDs: [1, 3, 5],
                    skillBulletCounts: [1, 3, 5],
                    skillFireInterval: [0.01, 0.05, 0.05],
                    normalAnims: ["99959"],//射击动画
                    normalAnimTimes: [0.5],
                    normalAtkTime: [0.1],
                    normalBulletCount: [1],
                    normalFireInterval: [0.01],
                    weaponName: "啊啊啊",
                    weaponIcon: "122726",
                    weaponPrices: [1, 8888],
                    bulletCount: 99999,
                    damage: 1
                }
            ],
            [2,
                {
                    prefabId: "37B14B154139C33C8E4771AE56156B77",
                    slotType: mw.HumanoidSlotType.RightHand,
                    gunAttitude: "221620",//持有姿态
                    skillAnims: ["99959", "99959", "99959"],
                    skillAnimTimes: [0.2, 0.6, 1],
                    skillAtkTime: [0.2, 0.2, 0.2],
                    skillCDs: [1, 3, 5],
                    skillBulletCounts: [1, 3, 5],
                    skillFireInterval: [0.01, 0.05, 0.05],
                    normalAnims: ["99959"],//射击动画
                    normalAnimTimes: [0.5],
                    normalAtkTime: [0.05],
                    normalBulletCount: [1],
                    normalFireInterval: [0.01],
                    weaponName: "手枪",
                    weaponIcon: "129106",
                    weaponPrices: [1, 8888],
                    bulletCount: 99999,
                    damage: 1
                }
            ],
            [3,
                {
                    prefabId: "FFA7ECEC42B315D8C31F2499C243AEE4",
                    slotType: mw.HumanoidSlotType.RightHand,
                    gunAttitude: "14037",//持有姿态
                    skillAnims: ["20244", "20244", "20244"],
                    skillAnimTimes: [0.2, 0.4, 0.6],
                    skillAtkTime: [0.2, 0.2, 0.2],
                    skillCDs: [1, 5, 10],
                    skillBulletCounts: [1, 2, 3],
                    skillFireInterval: [0.01, 0.05, 0.05],
                    normalAnims: ["20244"],//射击动画
                    normalAnimTimes: [0.4],
                    normalAtkTime: [0.3],
                    normalBulletCount: [1],
                    normalFireInterval: [0.01],
                    weaponName: "手枪",
                    weaponIcon: "129106",
                    weaponPrices: [1, 8888],
                    bulletCount: 99999,
                    damage: 1
                }
            ],
            [4,
                {
                    prefabId: "DF2B3CC9444E04F46ABEA0A3EC312A2F",
                    slotType: mw.HumanoidSlotType.RightHand,
                    gunAttitude: "221620",//持有姿态
                    skillAnims: ["99959", "99959", "99959"],
                    skillAnimTimes: [0.2, 0.6, 1],
                    skillAtkTime: [0.2, 0.2, 0.2],
                    skillCDs: [1, 3, 5],
                    skillBulletCounts: [1, 3, 5],
                    skillFireInterval: [0.01, 0.05, 0.05],
                    normalAnims: ["99959"],//射击动画
                    normalAnimTimes: [0.5],
                    normalAtkTime: [0.3],
                    normalBulletCount: [1],
                    normalFireInterval: [0.01],
                    weaponName: "手枪",
                    weaponIcon: "129106",
                    weaponPrices: [1, 8888],
                    bulletCount: 99999,
                    damage: 1
                }
            ],
            [5,
                {
                    prefabId: "A1DCB9EC42F4CFAFFE76CB92F38919C7",
                    slotType: mw.HumanoidSlotType.RightHand,
                    gunAttitude: "14037",//持有姿态
                    skillAnims: ["20244", "20244", "20244"],
                    skillAnimTimes: [0.2, 0.4, 0.6],
                    skillAtkTime: [0.2, 0.2, 0.2],
                    skillCDs: [1, 5, 10],
                    skillBulletCounts: [1, 2, 3],
                    skillFireInterval: [0.01, 0.05, 0.05],
                    normalAnims: ["20244"],//射击动画
                    normalAnimTimes: [0.4],
                    normalAtkTime: [0.3],
                    normalBulletCount: [1],
                    normalFireInterval: [0.01],
                    weaponName: "手枪",
                    weaponIcon: "129106",
                    weaponPrices: [1, 8888],
                    bulletCount: 99999,
                    damage: 1
                }
            ],
            [6,
                {
                    prefabId: "416DF90B41D827AA360FCDAF67DB023D",
                    slotType: mw.HumanoidSlotType.RightHand,
                    gunAttitude: "221620",//持有姿态
                    skillAnims: ["99959", "99959", "99959"],
                    skillAnimTimes: [0.2, 0.6, 1],
                    skillAtkTime: [0.2, 0.2, 0.2],
                    skillCDs: [1, 3, 5],
                    skillBulletCounts: [1, 3, 5],
                    skillFireInterval: [0.01, 0.05, 0.05],
                    normalAnims: ["99959"],//射击动画
                    normalAnimTimes: [0.5],
                    normalAtkTime: [0.05],
                    normalBulletCount: [1],
                    normalFireInterval: [0.01],
                    weaponName: "手枪",
                    weaponIcon: "129106",
                    weaponPrices: [1, 8888],
                    bulletCount: 99999,
                    damage: 1
                }
            ],
            [7,
                {
                    prefabId: "EF601DC2464444F8D68DC1946EB03E34",
                    slotType: mw.HumanoidSlotType.RightHand,
                    gunAttitude: "221620",//持有姿态
                    skillAnims: ["99959", "99959", "99959"],
                    skillAnimTimes: [0.2, 0.6, 1],
                    skillAtkTime: [0.2, 0.2, 0.2],
                    skillCDs: [1, 3, 5],
                    skillBulletCounts: [1, 3, 5],
                    skillFireInterval: [0.01, 0.05, 0.05],
                    normalAnims: ["99959"],//射击动画
                    normalAnimTimes: [0.5],
                    normalAtkTime: [0.3],
                    normalBulletCount: [1],
                    normalFireInterval: [0.01],
                    weaponName: "手枪",
                    weaponIcon: "129106",
                    weaponPrices: [1, 8888],
                    bulletCount: 99999,
                    damage: 1
                }
            ],
            [8,
                {
                    prefabId: "6020942C4E96E0D1817597AAF232D455",
                    slotType: mw.HumanoidSlotType.RightHand,
                    gunAttitude: "14037",//持有姿态
                    skillAnims: ["20244", "20244", "20244"],
                    skillAnimTimes: [0.2, 0.4, 0.6],
                    skillAtkTime: [0.2, 0.2, 0.2],
                    skillCDs: [1, 5, 10],
                    skillBulletCounts: [1, 2, 3],
                    skillFireInterval: [0.01, 0.05, 0.05],
                    normalAnims: ["20244"],//射击动画
                    normalAnimTimes: [0.4],
                    normalAtkTime: [0.3],
                    normalBulletCount: [1],
                    normalFireInterval: [0.01],
                    weaponName: "手枪",
                    weaponIcon: "129106",
                    weaponPrices: [1, 8888],
                    bulletCount: 99999,
                    damage: 1
                }
            ],
            [9,
                {
                    prefabId: "2F835D36498E3C6F242BDF86B57FBC92",
                    slotType: mw.HumanoidSlotType.RightHand,
                    gunAttitude: "221620",//持有姿态
                    skillAnims: ["99959", "99959", "99959"],
                    skillAnimTimes: [0.2, 0.6, 1],
                    skillAtkTime: [0.2, 0.2, 0.2],
                    skillCDs: [1, 3, 5],
                    skillBulletCounts: [1, 3, 5],
                    skillFireInterval: [0.01, 0.05, 0.05],
                    normalAnims: ["99959"],//射击动画
                    normalAnimTimes: [0.5],
                    normalAtkTime: [0.3],
                    normalBulletCount: [1],
                    normalFireInterval: [0.01],
                    weaponName: "手枪",
                    weaponIcon: "129106",
                    weaponPrices: [1, 8888],
                    bulletCount: 99999,
                    damage: 1
                }
            ],
        ]);
}