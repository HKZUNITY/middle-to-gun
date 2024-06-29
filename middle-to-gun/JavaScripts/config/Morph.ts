import { ConfigBase, IElementBase } from "./ConfigBase";
const EXCELDATA:Array<Array<any>> = [["ID","AssetId","OffsetPos","OffsetRot","OffsetSca"],["","","","",""],[1,"34287",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[2,"36101",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[3,"36104",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[4,"36307",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[5,"43382",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[6,"43696",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[7,"43702",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[8,"43704",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[9,"43726",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[10,"44978",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[11,"68306",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[12,"95676",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[13,"88958",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[14,"122716",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[15,"122720",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[16,"122726",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[17,"153110",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[18,"152136",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[19,"155696",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[20,"155702",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[21,"168680",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[22,"199351",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[23,"218325",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[24,"218326",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[25,"222534",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[26,"221722",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[27,"223966",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[28,"226213",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[29,"226214",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[30,"226650",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[31,"226826",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[32,"321770",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[33,"327072",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)]];
export interface IMorphElement extends IElementBase{
 	/**唯一ID*/
	ID:number
	/**资源ID*/
	AssetId:string
	/**位置偏移*/
	OffsetPos:mw.Vector
	/**旋转偏移*/
	OffsetRot:mw.Vector
	/**缩放偏移*/
	OffsetSca:mw.Vector
 } 
export class MorphConfig extends ConfigBase<IMorphElement>{
	constructor(){
		super(EXCELDATA);
	}

}