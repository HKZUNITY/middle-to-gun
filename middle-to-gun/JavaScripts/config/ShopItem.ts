import { ConfigBase, IElementBase } from "./ConfigBase";
const EXCELDATA:Array<Array<any>> = [["ID","CommodityId","PartyPrice","Count","Des"],["","","","",""],[1,"2up8k7U7ULm0000hZ",98,100,"钻石*100"],[2,"9ZHaEgphvWq0000ha",580,600,"钻石*600"],[3,"6JfMPeEBARi0000hb",980,1000,"钻石*1000"],[4,"55OB9kdnutU0000hc",2800,3000,"钻石*3000"],[5,"7BktFJ9eIPI0000hd",6800,7000,"钻石*7000"],[6,"8CbboTcgQAn0000he",9800,10000,"钻石*10000"],[7,"6I0UekjBePp0000hf",19800,20000,"钻石*20000"],[8,"6U1htY0UV3i0000hg",45800,50000,"钻石*50000"],[9,"A2d5Hp0SiF40000hh",88800,100000,"钻石*100000"]];
export interface IShopItemElement extends IElementBase{
 	/**唯一标识*/
	ID:number
	/**商品Cood*/
	CommodityId:string
	/**派对币*/
	PartyPrice:number
	/**钻石*/
	Count:number
	/**描述*/
	Des:string
 } 
export class ShopItemConfig extends ConfigBase<IShopItemElement>{
	constructor(){
		super(EXCELDATA);
	}

}