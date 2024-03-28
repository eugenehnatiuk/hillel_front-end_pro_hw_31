const productList = [
  {
    id: 1,
    category: 'pizza',
    name: 'Paperoni',
    sizes: [
      { size: 'S', value: 'Small (30cm)' },
      { size: 'L', value: 'Large (50cm)' },
    ],
    prices: [300, 420],
    image: '',
  },
  {
    id: 2,
    category: 'pizza',
    name: 'Margarita',
    sizes: [
      { size: 'S', value: 'Small (30cm)' },
      { size: 'L', value: 'Large (50cm)' },
    ],
    prices: [250, 300],
    image: '',
  },
];

export default productList;

{
  productList.map((product) => (
    <div className="products__card card" key={product.id}>
      <div className="card__image">
        <img src={product.image} alt="Product image" width={290} height={100} />
      </div>

      <div className="card__content">
        <h3 className="card__title">{product.name}</h3>
        <div className="card__sizes">
          {product.sizes.map((size) => (
            <label key={size.id}>
              <input
                type="radio"
                name={`product-size-${product.id}`}
                id={`size-${size.value}-${product.id}`}
                checked={selectSize === `size-${size.value}-${product.id}`}
                value={`size-${size.value}-${product.id}`}
                onChange={handleSizeChange}
              />
              {size.value}
            </label>
          ))}
        </div>
        <div className="card__price">
          <span>Price:</span> <span>300 UAH</span>
        </div>
        <div></div>
        <button className="card__addBtn">Add</button>
      </div>
    </div>
  ));
}
