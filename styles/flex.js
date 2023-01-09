export const flex = (type)=>{
    if(type == "row"){
        return {
            display:'flex',
            flexDirection:"row",            
        }
    }else if(type == "column"){
        return {
            display:'flex',
            flexDirection:"column",            
        }
    }
}   