
export default class CoinData extends Subdata {
    @Decorator.persistence()
    public coin: number = 0;
    @Decorator.persistence()
    public diamond: number = 0;

    protected initDefaultData(): void {
        this.coin = 5000;
        this.diamond = 0;
    }

    public setCoin(coin: number): void {
        this.coin = coin;
        this.save(true);
    }

    public setDiamond(diamond: number): void {
        this.diamond = diamond;
        this.save(true);
    }
}