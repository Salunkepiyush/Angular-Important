export interface DataList{
    page:number,
    per_page:number,
    total:number,
    total_pages:number,
    data: Array<{
        id:number,
        first_name:String,
        last_name:String,
        avatar:String
    }>
}