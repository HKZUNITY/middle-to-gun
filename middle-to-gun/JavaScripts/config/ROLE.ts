import { ConfigBase, IElementBase } from "./ConfigBase";
const EXCELDATA:Array<Array<any>> = [["ID","ROLEID","PRICETYPE","PRICE","NAME"],["","","","",""],[1,"181562",1,[1,5888],"兜帽男"],[2,"143400",1,[1,8888],"双马尾女"],[3,"142292",1,[1,10888],"男战士"],[4,"142272",1,[1,13888],"机甲少女"],[5,"142293",1,[1,15888],"男骑士"],[6,"142255",1,[1,18888],"纳米机甲女性"],[7,"219915",1,[2,20888],"赛博少年"],[8,"226379",1,[2,20888],"赛博少年"],[9,"219912",1,[2,28888],"赛博少女"],[10,"226386",1,[2,28888],"赛博少女"],[11,"266641",1,[3,30888],"一定锅少年"],[12,"267183",1,[3,30888],"求神少年"],[13,"264622",1,[3,35888],"一定锅少女"],[14,"266861",1,[3,38888],"求神少女"],[15,"142302",1,[3,38888],"宝石铠甲男"],[16,"142303",1,[3,38888],"铠甲男战士"],[17,"142396",1,[3,38888],"黑人男纳米机甲"],[18,"142397",1,[3,38888],"白人男纳米机甲"],[19,"142398",1,[3,38888],"白银骑士"],[20,"142906",1,[4,40888],"鹰眼"],[21,"142895",1,[4,40888],"洛基"],[22,"142886",1,[4,43888],"毒液"],[23,"142905",1,[4,43888],"蚁人"],[24,"142898",1,[4,45888],"美国队长"],[25,"142885",1,[4,45888],"超人"],[26,"142900",1,[4,45888],"奇异博士"],[27,"142901",1,[4,45888],"闪电侠"],[28,"142887",1,[4,48888],"恶灵骑士"],[29,"142888",1,[4,48888],"钢铁大侠"],[30,"222475",1,[5,50888],"风衣女"],[31,"219916",1,[5,55888],"汉服少女"],[32,"266860",1,[5,55888],"时尚少女"],[33,"226382",1,[5,55888],"潮流少女"],[34,"222476",1,[5,58888],"古代书生"]];
export interface IROLEElement extends IElementBase{
 	/**唯一ID*/
	ID:number
	/**角色Guid*/
	ROLEID:string
	/**0-免费
1-金币|钻石
2-钻石*/
	PRICETYPE:number
	/**价格
钻石|金币*/
	PRICE:Array<number>
	/**名字*/
	NAME:string
 } 
export class ROLEConfig extends ConfigBase<IROLEElement>{
	constructor(){
		super(EXCELDATA);
	}

}