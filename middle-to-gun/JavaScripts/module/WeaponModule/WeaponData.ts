export default class WeaponData extends Subdata {
    @Decorator.persistence()
    public weaponIndex: number = 6;
    @Decorator.persistence()
    public projectileIndex: number = 6;

    public setWeaponIndex(weaponId: number): void {
        this.weaponIndex = weaponId;
        this.save(true);
    }

    public setProjectileIndex(projectileIndex: number): void {
        this.projectileIndex = projectileIndex;
        this.save(true);
    }
}

export enum ProjectileType {
    /**正常 */
    Normal,
    /**弧线追踪(弱) */
    ArcTracing_Weak,
    /**弧线追踪(强) */
    ArcTracing_Strong,
    /**穿透 */
    Penetrate,
    /**投掷物 */
    Throw,
}