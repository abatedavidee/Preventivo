// JavaScript per il calcolo dinamico
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("product-quantity").addEventListener("input", updateTotals);
    document.getElementById("product-price").addEventListener("input", updateTotals);
    document.getElementById("service-quantity").addEventListener("input", updateTotals);
    document.getElementById("service-price").addEventListener("input", updateTotals);
    document.getElementById("discount").addEventListener("input", updateTotals);
});

function updateTotals() {
    const productQuantity = parseFloat(document.getElementById("product-quantity").value) || 0;
    const productPrice = parseFloat(document.getElementById("product-price").value) || 0;
    const productSubtotal = productQuantity * productPrice;
    const productIVA = productSubtotal * 0.22;

    const serviceQuantity = parseFloat(document.getElementById("service-quantity").value) || 0;
    const servicePrice = parseFloat(document.getElementById("service-price").value) || 0;
    const serviceSubtotal = serviceQuantity * servicePrice;
    const serviceIVA = serviceSubtotal * 0.22;

    const discount = parseFloat(document.getElementById("discount").value) || 0;
    const discountSubtotal = -discount;

    document.getElementById("product-subtotal").textContent = productSubtotal.toFixed(2);
    document.getElementById("product-iva").textContent = productIVA.toFixed(2);
    document.getElementById("service-subtotal").textContent = serviceSubtotal.toFixed(2);
    document.getElementById("service-iva").textContent = serviceIVA.toFixed(2);
    document.getElementById("discount-subtotal").textContent = discountSubtotal.toFixed(2);
}
