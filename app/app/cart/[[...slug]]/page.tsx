import CartDrawer from "@/components/CartDrawer";

export default function CartPage() {
  return <CartDrawer />;
}

// Biar bisa diakses langsung lewat /cart
export const dynamic = "force-dynamic";
