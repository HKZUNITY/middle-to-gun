import { ConfigBase, IElementBase } from "./ConfigBase";
const EXCELDATA:Array<Array<any>> = [["ID","GUNNAME","GUNPREFAB","GUNICON","GUNICON_M","GUNLOC","GUNSCALE","IATURNICON","PRICETYPE","PRICE","FIREINTERVAL","BULLETCOUNT","HURT"],["","","","","","","","","","","","",""],[1,"M4A1卡宾枪","587777AD4056DC3AB465FBA7D3F5F7BA","101168","94153",new mw.Vector(-20,0,0),new mw.Vector(1,1,1),0,1,[1,15888],"0.2",30,25],[2,"AK47自动步枪","0D543D5346C331F41DA890A5E6DD3DB5","101171","95712",new mw.Vector(-20,0,0),new mw.Vector(1,1,1),0,1,[1,18888],"0.2",30,25],[3,"QBZ95式突击步枪","E3E0C2994D3518540DBB6D8C00C8AB83","120590","44974",new mw.Vector(0,0,0),new mw.Vector(1,1,1),0,1,[2,35888],"0.15",30,25],[4,"SCAR突击步枪","5181250F44DF914A714B668F99177E3A","120588","43712",new mw.Vector(-10,0,0),new mw.Vector(1,1,1),0,1,[3,48888],"0.15",30,25],[5,"突击步枪","1CD6AEAB4602DF140ACE93BD49D5CA19","120587","43710",new mw.Vector(-10,0,0),new mw.Vector(1,1,1),1,1,[4,58888],"0.1",35,25],[6,"MP5冲锋枪","A469CCC84AAA873815243BB25439707C","101167","99703",new mw.Vector(0,0,0),new mw.Vector(1,1,1),0,1,[4,58888],"0.1",35,25],[7,"MP7冲锋枪","68E812DC47B714F9A2BB2ABE18304C5B","101169","99701",new mw.Vector(-5,0,0),new mw.Vector(1,1,1),0,1,[4,58888],"0.1",35,25],[8,"P90冲锋枪","BA1BDC034FCDE8574CBBAA8C4831A950","120592","43734",new mw.Vector(10,0,0),new mw.Vector(1,1,1),0,1,[5,68888],"0.1",40,25],[9,"M249机枪","FCFE18BE440FAEBD5AB999A222F10AA9","101166","95717",new mw.Vector(-20,0,0),new mw.Vector(1,1,1),0,1,[5,78888],"0.2",100,25],[10,"激光幽灵枪","23240FEE4F3BD25DE8EA6DBE525B3A20",null,"122716",new mw.Vector(0,0,0),new mw.Vector(1,1,1),1,1,[88,13888888],"0.3",40,50],[11,"烟花枪","A830458640D6EA21FB7AEA8F7E029CB7",null,"122726",new mw.Vector(0,0,0),new mw.Vector(1,1,1),0,1,[288,18858888],"0.3",40,50],[12,"激光烈火枪","0C7F278C4254F90F69614086DCA0B906","101163","95676",new mw.Vector(-30,0,0),new mw.Vector(1,1,1),0,1,[588,18888888],"0.3",40,50],[13,"激光冰雷枪","29CD5E6145D1B05590E887A050E0D3C8","66181","122720",new mw.Vector(-30,0,0),new mw.Vector(1,1,1),0,1,[888,20888888],"0.3",40,50],[14,"激光巴雷特","015C826546EBC60F95EF399D16523B78","101165","99699",new mw.Vector(-30,0,0),new mw.Vector(1,1,1),1,1,[1688,38888888],"1",10,100]];
export interface IGUNElement extends IElementBase{
 	/**唯一ID*/
	ID:number
	/**枪名字*/
	GUNNAME:string
	/**枪预制体Guid*/
	GUNPREFAB:string
	/**枪ICON*/
	GUNICON:string
	/**枪模型*/
	GUNICON_M:string
	/**枪展示位置*/
	GUNLOC:mw.Vector
	/**枪缩放*/
	GUNSCALE:mw.Vector
	/**是否翻转ICON*/
	IATURNICON:number
	/**0：免费
1：金币购买|Ads
2：ads*/
	PRICETYPE:number
	/**钻石|金币*/
	PRICE:Array<number>
	/**发射间隔*/
	FIREINTERVAL:string
	/**子弹*/
	BULLETCOUNT:number
	/**伤害*/
	HURT:number
 } 
export class GUNConfig extends ConfigBase<IGUNElement>{
	constructor(){
		super(EXCELDATA);
	}

}