import noImage from "../assets/placeholder-600x400.webp";
const getCroppedImageUrl = (url: string) => {
  const target = "media/";
  if (!url) return noImage;
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};
export default getCroppedImageUrl;
//"https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg"
