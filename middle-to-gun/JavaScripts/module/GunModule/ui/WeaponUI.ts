import WeaponUI_Generate from "../../../ui-generate/module/GunModule/WeaponUI_generate";
import HUDModuleC from "../../HUDModule/HUDModuleC";
import WeaponDriver from "../WeaponDriver";

export default class WeaponUI extends WeaponUI_Generate {
    curWeapon: WeaponDriver = null;

    upPosition: mw.Vector2 = mw.Vector2.zero;
    downPosition: mw.Vector2 = mw.Vector2.zero;
    leftPosition: mw.Vector2 = mw.Vector2.zero;
    rightPosition: mw.Vector2 = mw.Vector2.zero;

    upCurPosition: mw.Vector2 = mw.Vector2.zero;
    downCurPosition: mw.Vector2 = mw.Vector2.zero;
    leftCurPosition: mw.Vector2 = mw.Vector2.zero;
    rightCurPosition: mw.Vector2 = mw.Vector2.zero;

    protected onStart() {

        this.right_fire.onJoyStickDown.add(() => {
            // console.error("right_fire onJoyStickDown");
            if (!this.curWeapon) return;
            this.curWeapon.startFire();
        });

        this.right_fire.onJoyStickUp.add(() => {
            // console.error("right_fire onJoyStickUp");
            if (!this.curWeapon) return;
            this.curWeapon.stopFire();
        });

        this.left_fire.onPressed.add(() => {
            // console.error("left_fire onPressed");
            if (!this.curWeapon) return;
            this.curWeapon.startFire();
        });

        this.left_fire.onReleased.add(() => {
            // console.error("left_fire onReleased");
            if (!this.curWeapon) return;
            this.curWeapon.stopFire();
        });

        this.reload.onClicked.add(() => {
            // console.error("reload onClicked");
            if (!this.curWeapon) return;
            this.curWeapon.startReload();
        });

        this.aim.onClicked.add(() => {
            // console.error("aim onClicked");
            if (!this.curWeapon) return;
            if (this.curWeapon.isAimming) {
                this.curWeapon.stopAim();
            } else {
                this.curWeapon.startAim();
            }
        });

        this.crouch.onClicked.add(() => {
            // console.error("crouch onClicked");
            let player = Player.localPlayer;
            if (player) {
                if (player.character.isCrouching) {
                    player.character.crouch(false);
                } else {
                    player.character.crouch(true);
                }

            }
        });

        this.jump.onClicked.add(() => {
            // console.error("jump onClicked");
            let player = Player.localPlayer;
            if (player) {
                player.character.jump();
                if (!player.character.movementEnabled) player.character.movementEnabled = true;
            }
        });

        Event.addLocalListener("HotWeapon-Unequiped", () => {
            if (this.curWeapon != null) {
                this.curWeapon.unEquip();
                this.curWeapon = null;
            }
        });

        let hudModuleC: HUDModuleC = ModuleService.getModule(HUDModuleC);
        let inputScale = hudModuleC.getFireScale;
        // console.error("inputScale", inputScale);
        this.right_fire.inputScale = new mw.Vector2(inputScale, inputScale);
        hudModuleC.onFireScaleAction.add((scale: number) => {
            this.right_fire.inputScale = new mw.Vector2(scale, scale);
            // console.error("onControlScaleAction", scale);
        });
    }

    protected onShow(weapon: WeaponDriver, crossValue: number, iconId: string, weaponName: string) {
        // console.error("show");
        this.curWeapon = weapon;
        mw.assetIDChangeIconUrlRequest([iconId]).then(() => {
            try {
                this.icon.setImageByAssetIconData(mw.getAssetIconDataByAssetID(iconId));
            } catch (error) {
                // console.error("onShow:" + error);
            }
        });
        this.name.text = weaponName;
        this.upPosition = this.upPosition.set(this.up.position);
        this.downPosition = this.downPosition.set(this.down.position);
        this.leftPosition = this.leftPosition.set(this.left.position);
        this.rightPosition = this.rightPosition.set(this.right.position);
        this.changeCross(crossValue * 10);
    }

    protected onHide() {
        // console.error("hide");
        this.changeCross(0);
    }

    changeBullet(bullet: number, ammo: number) {
        if (ammo == -1) {
            this.bullet.text = `${bullet} / 无限`;
        }
        else {
            this.bullet.text = `${bullet} / ${ammo}`;
        }
    }

    changeCross(value: number) {
        this.up.position = this.upCurPosition.set(this.upPosition.x, this.upPosition.y - value);
        this.down.position = this.downCurPosition.set(this.downPosition.x, this.downPosition.y + value);
        this.left.position = this.leftCurPosition.set(this.leftPosition.x - value, this.leftPosition.y);
        this.right.position = this.rightCurPosition.set(this.rightPosition.x + value, this.rightPosition.y);
    }

    public setTimeText(restTime: number, keepTime: number) {
        if (restTime <= 0) {
            this.mKeepTimeCanvas.visibility = mw.SlateVisibility.Collapsed;
        }
        else {
            this.mKeepTimeCanvas.visibility = mw.SlateVisibility.SelfHitTestInvisible;
            let percent = restTime / keepTime;
            this.keepTimeBar.percent = percent;
            this.keepTimeTxt.text = `${restTime.toFixed(1)}s`
        }
    }

    public setReloadBtn(enable: boolean) {
        this.reload.visibility = enable ? mw.SlateVisibility.Visible : mw.SlateVisibility.Collapsed;
    }
}
