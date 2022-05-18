import axios from "axios";

export const getUbikeInfo = async () => {
   const { data } = await axios.get('https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json?fbclid=IwAR2Z4s0ESaAmFFWM4xBOd-JSOv1HGd97vea3f58Wv9V9KA8Q0cJtnZDfKhM');
   return data;
 };
