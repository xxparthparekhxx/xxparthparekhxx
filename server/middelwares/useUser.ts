export const getUser=(context:{req:{cookies:{jwtwa?:string}}})=>{
    const jwt = context.req.cookies['jwtwa'] as String
    return {
        Jwt: jwt
    }
}