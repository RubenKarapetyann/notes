export interface ITheme {
    theme : string,
    changeTheme : ()=>void
}

export interface ISearch {
    value : string,
    changeValue : (text:string)=>void
}