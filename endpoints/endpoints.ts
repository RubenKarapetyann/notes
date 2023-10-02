
const endpoints = (id:string | number | null, query : string | null) => {
    return {
        notes : `${process.env.SERVER}/api/test/?q=${query}`,
        note : `${process.env.SERVER}/api/test/${id}`,
        create : `${process.env.SERVER}/api/create`
    }
}

export default endpoints