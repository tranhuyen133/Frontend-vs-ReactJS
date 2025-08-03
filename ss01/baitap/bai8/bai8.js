function insertArray(array1, array2, position) {
  if (!Array.isArray(array1) || !Array.isArray(array2)) {
    console.log("Tham số truyền vào phải là mảng!");
    return;
  }

  if (typeof position !== 'number' || position < 0 || position > array1.length) {
    console.log("Vị trí không hợp lệ!");
    return;
  }

  const result = [
    ...array1.slice(0, position),
    ...array2,
    ...array1.slice(position)
  ];

  console.log(result);
  return result;
}
