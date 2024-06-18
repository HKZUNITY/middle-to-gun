import { ConfigBase, IElementBase } from "./ConfigBase";
const EXCELDATA:Array<Array<any>> = [["ID","AssetId","OffsetPos","OffsetRot","OffsetSca"],["","","","",""],[1,"C665A5E44F6F23B13103ADB63B6DB8FE",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[2,"7EFE3FDB48F92FD44D7B9C9B4617847B",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[3,"0FCB78664DCD1BB057543DB8A067C122",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[4,"6EEEE3FE4889D23A286CC8B30701C8EE",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[5,"EE3A158548986A567D4741AF925DEA34",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[6,"B40762884A5A907F6FC1018C2E8185C8",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[7,"77796AE5405E9B5B173C9EA0E0131A7D",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[8,"6CF59C074F7CD23EEEA26B8CCFFBC2C2",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[9,"B04EE94540EE3000A660AEA94FDB25D2",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[10,"471E86844D001CE4E84DA8BABEB0DDEA",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[11,"98CDBDE94A8C79B6C5DD8E96AF07FAF7",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[12,"967939744A6C3F5FB4E850A3E7B33E3B",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[13,"4F5E80FC46C55F6F7F5ED0AFCA5D414A",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[14,"6D4B721A4E1B76493972E08A824F8AE7",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[15,"424A2E254F9FD0AABA1BE3B4E7992B60",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[16,"AFC3939B401019F2DEE37784CC1803A5",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[17,"63D0E8894374EF73151267AE2CD7A6E8",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[18,"CA3C71F24708B24B97555584A526400D",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[19,"473BEFA7481C557195E608A058891B5A",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[20,"A62514214509E9BB6FFCD286F0A8CACE",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[21,"7CDBD4B148DCD0CB517E88819C62FD4D",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[22,"429C69244E35328DF8D73CA554BFE01C",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[23,"662BFCAD46B8DDB2C1F15E95DC1D71FB",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[24,"C7AF1DB740B957C45B589589961D4E9A",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[25,"B1C3D37445115C0FD6602D86C18F5A5E",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[26,"4241E3D6474673648F132C9EE621BB2F",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[27,"893BFC51454BD89A3F56B99C7D87C45D",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[28,"C54732A548232206595D87B7BB339EF7",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)]];
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