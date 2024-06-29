import { ConfigBase, IElementBase } from "./ConfigBase";
const EXCELDATA:Array<Array<any>> = [["ID","AssetId","OffsetPos","OffsetRot","OffsetSca"],["","","","",""],[1,"20673",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[2,"20760",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[3,"20780",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[4,"20867",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[5,"20900",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[6,"20921",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[7,"20953",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[8,"20980",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[9,"21009",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)]];
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