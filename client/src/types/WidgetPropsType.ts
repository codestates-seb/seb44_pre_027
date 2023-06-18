export interface WidgetData {
    id:number;
    type: string;
    title:string;
}

export interface WidgetItem {
    id: number;
    url:string;
    content: string;
}

export interface BasicWidgetData extends WidgetData {
    items: Array<WidgetItem>;
}

export interface LightWidgetData extends WidgetData {
    items: Array<LightWidgetItem>;
}

export interface LightWidgetItem extends WidgetItem {
    title:string;
}

