import Resizer from 'react-image-file-resizer';

export const resizedFile = async (file): Promise<any> => {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();

    reader.onload = () => {
      let image = new Image();
      image.src = reader.result as string;

      image.onload = () => {
        if (image.width > image.height) {
          Resizer.imageFileResizer(file, 1000, 500, 'JPEG', 70, 0,
            uri => {
              resolve(uri);
            },
            'base64'
          );
        } else {
          Resizer.imageFileResizer(file, 500, 1000, 'JPEG', 70, 0,
            uri => {
              resolve(uri);
            },
            'base64'
          );
        }
      }
    };

    reader.onerror = reject;

    reader.readAsDataURL(file);
  })
}