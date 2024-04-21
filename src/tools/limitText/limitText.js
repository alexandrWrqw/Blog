export default function limitText(text, limit) {
  let str = text.toString().slice(0, limit);

  if (str.length < text.length) {
    const arr = str.split('');
    arr.splice(arr.length - 1, 1);
    str = arr.join('');

    return `${str} ...`;
  }

  return text;
}
