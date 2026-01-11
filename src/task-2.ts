interface Tablet {
    readonly id: number;
    title: string;
    description?: string;
}

const product: Tablet = {
  id: 1,
  title: "Tablet",
  description: "Compact and fast",
};

console.log(`Product: ${JSON.stringify(product)}`);