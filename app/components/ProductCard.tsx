import AddToCardButton from "./AddToCardButton";
import styles from "./ProductCard.module.css";

export default function ProductCard() {
  return (
    <div
      className={`${styles.card} mt-3 p-1 text-white font-bold text-center bg-sky-400 rounded-md w-[50%] hover:bg-sky-200`}
    >
      <AddToCardButton />
    </div>
  );
}
