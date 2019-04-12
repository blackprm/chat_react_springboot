export function getRedirectTo(type,header){
  // 还没有完善界面
  if(header === null || header.length === 0){
      if(type === "seeker"){
        return "/main/seeker-info"
      }else{
        return "/main/boss-info"
      }
  }else{
    if(type === "seeker"){
      return "/main/seeker"
    }else{
      return "/main/boss"
    }
      
  }
}