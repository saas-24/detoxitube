export default function CustomersPage() {
  const productId = process.env.NEXT_PUBLIC_SLEEKPLAN_PRODUCT_ID;
  return (
    <div className="h-full flex justify-center">
      <iframe className="h-full w-2/3 rounded-md" src={`https://embed-${productId}.sleekplan.app/`}></iframe>
    </div>
  )
}