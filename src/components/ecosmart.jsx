export default function Ecosmart({
  produk,
  manfaat,
  harga,
  tersedia
}) {
  return (
    <section>
      <h2>{produk}</h2>
      <p>Manfaat: {manfaat}</p>
      <p>Harga: Rp{harga}</p>
      <p>Status: {tersedia ? "Tersedia" : "Habis"}</p>
      <p>Ramah lingkungan: Ya</p>
      <p>Tips: Gunakan tumbler setiap hari.</p>
    </section>
  );
}