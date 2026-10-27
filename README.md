# Eco Smart — Produk Ramah Lingkungan

Eco Smart adalah aplikasi berbasis React yang menampilkan produk ramah lingkungan, manfaat produk, harga, dan ketersediaan produk. Aplikasi ini dibuat menggunakan React dan Vite.

## Tangkapan Layar Aplikasi

![Tampilan Eco Smart](./screenshot.png)

*Catatan: Tambahkan file screenshot.png ke folder utama proyek agar gambar tampil di README.*

## Daftar Komponen dan Props

### Komponen Ecosmart

Komponen `Ecosmart` digunakan untuk menampilkan informasi produk ramah lingkungan.

| Props | Tipe Data | Keterangan |
|---|---|---|
| `produk` | String | Nama produk |
| `manfaat` | String | Manfaat produk |
| `harga` | Number | Harga produk |
| `tersedia` | Boolean | Menunjukkan apakah produk tersedia |

### Contoh Penggunaan

```jsx
<Ecosmart
  produk="Tumbler Reusable"
  manfaat="Mengurangi sampah plastik"
  harga={35000}
  tersedia={true}
/>
```

## Cara Menjalankan Proyek

Pastikan Git dan Node.js sudah terpasang di komputer.

### 1. Clone repository

```bash
git clone https://github.com/desinofita/eco-smart.git
```

### 2. Masuk ke folder proyek

```bash
cd eco-smart
```

### 3. Instal dependensi

```bash
npm install
```

### 4. Jalankan aplikasi

```bash
npm run dev
```

Buka alamat lokal yang ditampilkan di terminal, biasanya `http://localhost:5173`.

## Penggunaan AI

AI digunakan sebagai alat bantu selama pengembangan proyek untuk memahami kode React, memeriksa kesalahan penulisan import komponen, membantu konfigurasi deployment GitHub Pages, dan menyusun dokumentasi README. Hasilnya diperiksa dan disesuaikan dengan proyek Eco Smart.

## Link Website

https://desinofita.github.io/eco-smart/
