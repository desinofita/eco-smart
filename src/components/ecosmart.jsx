export default function Ecosmart({ produk, manfaat, harga, tersedia }) {
  return (
    <section>
      <h2>{produk}</h2>
      <p>Manfaat: {manfaat}</p>
      <p>Harga: Rp{harga}</p>
      <p>Status: {tersedia ? "Tersedia" : "Habis"}</p>
    </section>
  );
}