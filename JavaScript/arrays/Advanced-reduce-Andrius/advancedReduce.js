const products = [
  { name: "Tamsios spalvos akiniai" },
  { name: "Sviesios spalvos akiniai" },
  { name: "Zalios spalvos akiniai" },
  { name: "Geltoni akiniai" },
];

const getConcatinatedItems = () => {
  const initialValue = "";

  const concatinatedString = products.reduce(
    (previousValue, currentValue) =>
      `${previousValue} ${currentValue.name.split(" ")[0]}`,
    initialValue
  );

  return concatinatedString;
};

console.log(getConcatinatedItems());
