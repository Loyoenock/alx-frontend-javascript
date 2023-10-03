export default function(list){
  if (Array.isArray(list)){
    return list.map((obj) => obj.id);
  }
  return [];
}
