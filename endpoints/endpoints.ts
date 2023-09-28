
const endpoints = (id:string | number | null) => {
    return {
        notes : `${process.env.SERVER}/api/test`,
        note : `${process.env.SERVER}/api/test/${id}`,
        create : `${process.env.SERVER}/api/create`
    }
}

export default endpoints