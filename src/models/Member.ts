import { Article } from "./Article";
import { EventsModel } from "./Event";

export interface Member
{
  id:string,
  cin:string,
  name:string,
  type:string,
  cv:string,
  createDate:string,
  tab_pub:Article[],
  tab_evt:EventsModel[]
}
