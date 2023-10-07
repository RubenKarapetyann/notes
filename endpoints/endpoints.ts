
const endpoints = (id:string | number | null, query : string | null) => {
    return {
        notes : `${process.env.SERVER}/api/mongodb/notes/?q=${query}`,
        note : `${process.env.SERVER}/api/mongodb/notes/${id}`,
        create : `${process.env.SERVER}/api/mongodb/create`
    }
}

export default endpoints