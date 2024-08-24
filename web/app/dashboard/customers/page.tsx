export default function CustomersPage() {
  const productId = process.env.NEXT_PUBLIC_SLEEKPLAN_PRODUCT_ID;
  return (
    <div className="h-full">
      <iframe className="h-full" src={`https://embed-${productId}.sleekplan.app/`}></iframe>
    </div>
  )
}