export default async function getPastOrders(order) {
  const response = await fetch(`/api/past-order/${order}`);
  const data = await response.json();
  return data;
}
//kullanicidan yollanan order parametresini kullan ve serverdan getir
