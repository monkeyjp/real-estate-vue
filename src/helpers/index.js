export const propertyPrice = (price) =>
    Number(price).toLocaleString("pt-PT", {
        style: "currency",
        currency: "EUR"
    })

