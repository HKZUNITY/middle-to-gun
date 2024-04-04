import Utils from "../../tools/Utils";
import CoinData from "./CoinData";
import CoinModuleC from "./CoinModuleC";

export default class CoinModuleS extends ModuleS<CoinModuleC, CoinData> {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {

    }

    @Decorator.noReply()
    public net_setCoin(coin: number): void {
        this.currentData.setCoin(coin);
    }

    @Decorator.noReply()
    public net_setDiamond(diamond: number): void {
        this.currentData.setDiamond(diamond);
    }

    public killPlayerAddCoin(player: mw.Player): void {
        let coinData = DataCenterS.getData(player, CoinData);
        let randomCoin = Utils.randomInt(10, 30);
        coinData.coin += randomCoin;
        coinData.save(true);
        this.getClient(player).net_killPlayerAddCoin(randomCoin);
    }
}