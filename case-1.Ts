type IFruit = {
  fruitId: number,
  fruitName: string,
  fruitType: "IMPORT" | "LOCAL",
  stock: number,
};

const fruits: IFruit[] = [
  {
    fruitId: 1,
    fruitName: "Apel",
    fruitType: "IMPORT",
    stock: 10,
  },
  {
    fruitId: 2,
    fruitName: "Kurma",
    fruitType: "IMPORT",
    stock: 20,
  },
  {
    fruitId: 3,
    fruitName: "apel",
    fruitType: "IMPORT",
    stock: 50,
  },
  {
    fruitId: 4,
    fruitName: "Manggis",
    fruitType: "LOCAL",
    stock: 100,
  },
  {
    fruitId: 5,
    fruitName: "Jeruk Bali",
    fruitType: "LOCAL",
    stock: 10,
  },
  {
    fruitId: 5,
    fruitName: "KURMA",
    fruitType: "IMPORT",
    stock: 20,
  },
  {
    fruitId: 5,
    fruitName: "Salak",
    fruitType: "LOCAL",
    stock: 150,
  },
];

function getFruitsData(fruits) {
  let fruitData = {
    Fruits: [],
    Types: {
      Local: {
        Fruits: [],
        Stock: 0,
      },
      Import: {
        Fruits: [],
        Stock: 0,
      },
    },
  };

  for (let fruit of fruits) {
    const fruitName =
      fruit.fruitName.charAt(0).toUpperCase() +
      fruit.fruitName.slice(1).toLowerCase();
    const fruitType =
      fruit.fruitType.charAt(0).toUpperCase() +
      fruit.fruitType.slice(1).toLowerCase();
    const stock = fruit.stock;

    if (!fruitData["Fruits"].includes(fruitName)) {
      fruitData["Fruits"].push(fruitName);
    }

    if (!fruitData["Types"][fruitType]["Fruits"].includes(fruitName)) {
      fruitData["Types"][fruitType]["Fruits"].push(fruitName);
    }

    fruitData["Types"][fruitType]["Stock"] += stock;
  }

  console.log("Buah-Buah Yang Dimiliki Andi: " + fruitData["Fruits"]); // Hasil No. 1
  console.log(
    "Jumlah Wadah Yang Dibutuhkan: " + Object.keys(fruitData["Types"]).length
  ); // Hasil No. 2
  console.log(
    "Buah-Buahan Wadah Lokal: " + fruitData["Types"]["Local"]["Fruits"]
  ); // Hasil No. 2
  console.log(
    "Buah-Buahan Wadah Import: " + fruitData["Types"]["Import"]["Fruits"]
  ); // Hasil No. 2
  console.log(
    "Stok Buah-Buahan Lokal: " + fruitData["Types"]["Local"]["Stock"]
  ); // Hasil No. 3
  console.log(
    "Stok Buah-Buahan Import: " + fruitData["Types"]["Import"]["Stock"]
  ); // Hasil No. 3
}

getFruitsData(fruits);

// JAWABAN

// Jawaban diatas saya sediakan menggunakan VanillaJS sehingga ada beberapa error flag TypeScript mengenai penggunaan type, namun tidak mempengaruhi kerja fungsi

// 1. Buah-Buah Yang Dimiliki Andi: Apel, Kurma, Manggis, Jeruk bali, Salak

// 2. Jumlah Wadah yang dibutuhkan andi adalah 2
// Isi Wadah Lokal : Manggis, Jeruk bali, Salak
// Isi Wadah Import : Apel, Kurma

// 3. Stok Wadah Lokal : 260, Stok Wadah Import : 100

// 4. fruitId 5 berulang sebanyak 3 kali, namun error ini tidak memengaruhi fungsi karena fungsi 
// melakukan sortasi berdasarkan index object buah didalam array fruits