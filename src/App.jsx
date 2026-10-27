import Ecosmart from './components/ecosmart';

export default function App() {
  return (
    <main>
      <h1>Eco Smart - Produk Ramah Lingkungan</h1>

      <Ecosmart
        produk="Tumbler Reusable"
        manfaat="Mengurangi sampah plastik"
        harga={35000}
        tersedia={true}
      />

      <Ecosmart
        produk="Tas Belanja Kain"
        manfaat="Mengurangi kantong plastik"
        harga={20000}
        tersedia={true}
      />

      <Ecosmart
        produk="Sedotan Bambu"
        manfaat="Alternatif sedotan sekali pakai"
        harga={10000}
        tersedia={false}
      />
    </main>
  );
}