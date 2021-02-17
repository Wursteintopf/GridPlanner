export const getBase64 = async (file): Promise<string> => {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();

    reader.onload = () => {
      resolve(reader.result as string);
    };

    reader.onerror = reject;

    reader.readAsDataURL(file);
  })
}