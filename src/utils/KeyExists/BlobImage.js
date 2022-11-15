// return a image blob - ImagePath must be import (do not use direct path)
const BlobImage = async (ImagePath) => {
  const blob = await fetch(ImagePath).then((r) => r.blob());
  return blob;
};

export default BlobImage;
