type GitHubLink = {
  label: string
  url: string
}

type ResourceLink = {
  label: string
  url: string
}

type Project = {
  id: number
  title: string
  description: string
  fullDescription?: {
    definition: string
    purpose: string
    implementation: {
      features: string[]
      technical: string
    }
  }
  image: string
  tags: string[]
  link: string
  category: string
  githubLinks?: GitHubLink[]
  resourceLinks?: ResourceLink[]
}

export const profile = {
  name: 'Arfey Moreno Jazzua',
  title: 'Full Stack Developer',
  subtitle: 'Membangun sistem digital yang rapi, cepat, dan siap dipakai operasional',
  bio: 'Saya mengembangkan solusi web dan ERP internal yang menghubungkan desain, engineering, dan alur bisnis nyata ke dalam satu platform yang terstruktur dan mudah digunakan.',
  email: 'morenoreno166@gmail.com',
  location: 'Jakarta, Indonesia',
}

export const disciplines = [
  {
    id: 1,
    title: 'Pengembangan Frontend',
    description: 'Menciptakan antarmuka pengguna yang indah dan responsif dengan React dan Next.js',
    icon: '💎',
  },
  {
    id: 2,
    title: 'Pengembangan Backend',
    description: 'Membangun API dan layanan yang scalable dengan Node.js dan TypeScript',
    icon: '⚙️',
  },
  {
    id: 3,
    title: 'Desain UI/UX',
    description: 'Merancang antarmuka intuitif dengan fokus pada pengalaman pengguna',
    icon: '🎨',
  },
  {
    id: 4,
    title: 'Desain Database',
    description: 'Merancang database yang efisien dengan PostgreSQL dan MongoDB',
    icon: '🗄️',
  },
  {
    id: 5,
    title: 'DevOps & Deployment',
    description: 'Mengotomatisasi deployment dan infrastruktur dengan alat modern',
    icon: '🚀',
  },
]

export const projects: Project[] = [
  {
    id: 1,
    title: 'MiJurnal - Platform Jurnal Siswa',
    description: 'Platform jurnal digital komprehensif untuk siswa melacak aktivitas pembelajaran, mengelola tugas, dan menjaga jadwal belajar yang konsisten.',
    fullDescription: {
      definition: 'MiJurnal adalah platform jurnal digital yang berpusat pada siswa dirancang untuk membantu siswa mendokumentasikan perjalanan pendidikan, melacak kemajuan, dan mempertahankan akuntabilitas dalam proses pembelajaran mereka.',
      purpose: 'Untuk menyediakan platform terpusat di mana siswa dapat: mencatat aktivitas pembelajaran harian, memantau kemajuan tugas, menetapkan dan melacak tujuan belajar, mengelola jadwal, dan merefleksikan pertumbuhan akademik mereka seiring waktu.',
      implementation: {
        features: [
          'Antarmuka logging aktivitas harian dan journaling',
          'Pelacakan tugas dan penugasan dengan manajemen tenggat waktu',
          'Dasbor analitik kemajuan dan wawasan pembelajaran',
          'Organisasi jadwal dan timetable',
          'Organisasi berbasis kategori dan tag',
          'Fungsionalitas pencarian dan filter',
          'Kemampuan ekspor data dan pelaporan',
        ],
        technical: 'Dibangun dengan React.js untuk frontend responsif dengan UI/UX intuitif, dan backend Laravel menyediakan API RESTful yang robust dengan manajemen database, autentikasi, dan validasi data.',
      },
    },
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5ZVP1Uj8lofmaNTvFlmVUEEHzikQEO.png',
    tags: ['React.js', 'Laravel', 'MySQL', 'RESTful API', 'Responsive Design'],
    link: '#',
    category: 'web',
    githubLinks: [
      { label: 'Frontend GitHub', url: 'https://github.com/ArfeyMorenj/FE_Jurnal' },
      { label: 'Backend GitHub', url: 'https://github.com/ArfeyMorenj/BE_Jurnal' },
    ],
  },
  {
    id: 2,
    title: 'Manajemen Magang - Sistem Manajemen Magang',
    description: 'Sistem manajemen magang terintegrasi yang memungkinkan perusahaan menyederhanakan seluruh siklus hidup program magang dari pendaftaran hingga evaluasi.',
    fullDescription: {
      definition: 'Manajemen Magang adalah platform manajemen magang tingkat enterprise yang menyediakan otomasi workflow lengkap untuk institusi pendidikan dan perusahaan yang mengelola program magang.',
      purpose: 'Untuk memfasilitasi manajemen program magang yang efisien dengan: menyederhanakan pendaftaran dan penempatan siswa, mengotomatisasi penugasan mentor, melacak kemajuan magang, mengelola evaluasi, dan menyediakan pelaporan dan analitik komprehensif.',
      implementation: {
        features: [
          'Portal registrasi dan aplikasi siswa',
          'Manajemen perusahaan dan posisi',
          'Pencocokan mentor dan magang otomatis',
          'Pelacakan kemajuan dan manajemen milestone',
          'Form evaluasi dan penilaian digital',
          'Notifikasi real-time dan komunikasi',
          'Dasbor analitik dan pelaporan komprehensif',
          'Manajemen dokumen dan generasi sertifikat',
          'Metrik kinerja dan wawasan',
        ],
        technical: 'Frontend dibangun dengan React.js memberikan UI modern dan responsif untuk siswa dan administrator. Backend didukung oleh Laravel menyediakan autentikasi aman, logika bisnis, endpoint API, dan manajemen database dengan kontrol akses berbasis peran.',
      },
    },
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wg5QjvD7YNwKieR8iCmuV1q3qa6bU1.png',
    tags: ['React.js', 'Laravel', 'MySQL', 'Authentication', 'Dashboard'],
    link: '#',
    category: 'web',
    githubLinks: [
      { label: 'Frontend GitHub', url: 'https://github.com/ArfeyMorenj/FE_MagangManaged' },
      { label: 'Backend GitHub', url: 'https://github.com/ArfeyMorenj/BE_MagangManaged' },
    ],
  },
  {
    id: 3,
    title: 'Perpustakaan - Sistem Manajemen Perpustakaan',
    description: 'Sistem informasi perpustakaan komprehensif untuk mengelola buku, siswa, kelas, peminjaman, pengembalian, dan perhitungan denda keterlambatan.',
    fullDescription: {
      definition: 'Perpustakaan adalah sistem manajemen perpustakaan full-stack yang dirancang untuk memusatkan dan mengotomatisasi semua operasi perpustakaan untuk sekolah dan institusi, menangani inventaris buku, data siswa, transaksi peminjaman, dan manajemen pengembalian.',
      purpose: 'Untuk menyederhanakan operasi perpustakaan dengan: menyediakan manajemen katalog buku digital, mengotomatisasi proses peminjaman dan pengembalian, menghitung denda keterlambatan secara otomatis, mengelola akun perpustakaan siswa, dan mempertahankan riwayat transaksi lengkap.',
      implementation: {
        features: [
          'Operasi CRUD untuk buku, siswa, kelas, dan transaksi',
          'Peminjaman buku multi-item dengan pelacakan detail',
          'Pemrosesan pengembalian otomatis dan perhitungan denda keterlambatan',
          'Autentikasi dan otorisasi pengguna berbasis JWT',
          'Unggah dan penyimpanan gambar sampul buku',
          'Riwayat transaksi lengkap dan pelaporan',
          'Dasbor admin untuk manajemen sistem',
          'Hubungan database untuk integritas data perpustakaan',
          'Fungsionalitas pencarian dan filter untuk akses cepat',
        ],
        technical: 'Backend dibangun dengan Laravel 10 dan PHP 8.1 menggunakan Eloquent ORM untuk operasi database dan autentikasi JWT. Frontend dikembangkan dengan Next.js menyediakan antarmuka pengguna yang responsif dan intuitif. Database MySQL menyimpan semua data perpustakaan dengan struktur relasional yang tepat. PHPUnit digunakan untuk pengujian API.',
      },
    },
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bIWLhwepBqRZtDTnv49qeuKqhUnBk4.png',
    tags: ['Next.js', 'Laravel 10', 'MySQL', 'JWT', 'PHP 8.1', 'Eloquent ORM'],
    link: '#',
    category: 'web',
    githubLinks: [
      { label: 'Frontend GitHub', url: 'https://github.com/ArfeyMorenj/FE_perpustakaan' },
      { label: 'Backend GitHub', url: 'https://github.com/ArfeyMorenj/BE_perpustakaan' },
    ],
  },
  {
    id: 4,
    title: 'KINETIC - Marketplace Sneaker Online',
    description: 'Platform e-commerce full-stack premium yang khusus dalam sneaker terautentikasi dengan autentikasi JWT, unggah bukti pembayaran, dan workflow persetujuan admin.',
    fullDescription: {
      definition: 'KINETIC adalah platform e-commerce modern yang didedikasikan untuk sneaker premium terautentikasi, menampilkan pengalaman berbelanja end-to-end lengkap dengan pemrosesan pembayaran aman dan manajemen transaksi admin.',
      purpose: 'Untuk menciptakan marketplace sneaker premium yang dikurasi yang: memberikan pelanggan dengan pilihan produk terautentikasi dan filter pencarian detail, mengelola keranjang belanja dan checkout aman, menangani unggah bukti pembayaran digital, memungkinkan persetujuan transaksi admin, dan mempertahankan riwayat pesanan komprehensif.',
      implementation: {
        features: [
          'Autentikasi pengguna dengan token JWT untuk akses API aman',
          'Katalog produk dengan informasi detail dan filtering',
          'Pencarian produk canggih dengan filter kategori dan harga',
          'Manajemen keranjang belanja dengan kontrol jumlah',
          'Proses checkout dengan unggah bukti pembayaran',
          'Dasbor admin untuk workflow persetujuan transaksi',
          'Riwayat pesanan dan pelacakan untuk pengguna',
          'Kontrol akses berbasis peran (peran Admin & Customer)',
          'Desain responsif untuk perangkat desktop dan mobile',
          'Update ketersediaan produk real-time',
        ],
        technical: 'Frontend dikembangkan dengan Next.js untuk performa optimal dan SEO. Backend diimplementasikan dengan Laravel 10 sebagai REST API yang scalable menyediakan autentikasi JWT, manajemen produk, penanganan pembayaran, dan pemrosesan pesanan. Middleware berbasis peran memastikan kontrol akses aman antara operasi pelanggan dan admin.',
      },
    },
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-06%20221638-YWf9lBt5j7fzzCctIHAGLxfzAfjRCp.png',
    tags: ['Next.js', 'Laravel 10', 'MySQL', 'JWT Auth', 'REST API', 'E-Commerce'],
    link: '#',
    category: 'web',
    githubLinks: [
      { label: 'Frontend GitHub', url: 'https://github.com/ArfeyMorenj/fe_tokoonline' },
      { label: 'Backend GitHub', url: 'https://github.com/ArfeyMorenj/be_tokoonline' },
    ],
  },
  {
    id: 5,
    title: 'KINETIC - Sistem Desain UI/UX',
    description: 'Sistem desain UI/UX komprehensif untuk marketplace sneaker KINETIC termasuk login, homepage, pencarian produk, dan antarmuka profil pengguna.',
    fullDescription: {
      definition: 'Sistem Desain UI/UX KINETIC adalah kerangka desain lengkap yang mendefinisikan standar visual, pola interaksi, dan panduan pengalaman pengguna untuk platform e-commerce sneaker premium.',
      purpose: 'Untuk membangun bahasa desain dan pengalaman pengguna yang konsisten di semua layar aplikasi dengan: membuat pola komponen yang dapat digunakan kembali, mendefinisikan standar interaksi, memastikan hierarki visual dan konsistensi merek, dan mengoptimalkan alur pengguna untuk pengalaman berbelanja yang mulus.',
      implementation: {
        features: [
          'Antarmuka Login & Registrasi dengan validasi form',
          'Homepage dengan bagian hero, produk unggulan, dan item trending',
          'Antarmuka pencarian dan filtering produk canggih',
          'Halaman detail produk dengan galeri gambar dan ulasan',
          'Desain alur keranjang belanja dan checkout',
          'Halaman profil pengguna dan riwayat pesanan',
          'Dasbor admin untuk manajemen transaksi',
          'Pola desain responsif untuk semua ukuran layar',
          'Variasi tema gelap dan terang',
          'Komponen interaktif dan status hover',
        ],
        technical: 'Dirancang menggunakan alat desain UI standar industri dengan wireframe komprehensif dan mockup fidelitas tinggi. Mencakup layout desktop dan responsif, spesifikasi komponen detail, definisi palet warna, panduan tipografi, dan pola interaksi untuk implementasi yang mulus ke frontend React/Next.js.',
      },
    },
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-06%20112746-uf6qqD69dp1TsxetELi3jhHpknR1P4.png',
    tags: ['UI Design', 'UX Design', 'Figma', 'Design System', 'Responsive Design', 'Prototyping'],
    link: '#',
    category: 'design',
  },
  {
    id: 6,
    title: 'JPAS / FitnessPlus System',
    description: 'Sistem ERP internal untuk PT. FITART yang memusatkan master data, workflow operasional, invoice, pembayaran, piutang, jurnal, laporan fiskal, dan print center dalam satu dashboard bisnis.',
    fullDescription: {
      definition: 'JPAS / FitnessPlus System adalah ERP internal yang saya kembangkan untuk membantu operasional PT. FITART dalam satu platform terpusat. Sistem ini berperan sebagai dashboard bisnis yang menyatukan pengelolaan data master, transaksi, monitoring piutang, pelaporan, dan pencetakan dokumen.',
      purpose: 'Tujuan utamanya adalah membuat proses bisnis lebih rapi, terstruktur, dan mudah dipantau. Pengguna dapat login, mengakses modul sesuai kebutuhan operasional, menyimpan state halaman terakhir, serta bekerja dengan alur yang dilengkapi loading state, error state, toast notification, dan dialog konfirmasi untuk aksi penting.',
      implementation: {
        features: [
          'Autentikasi login dengan token Bearer dan proteksi halaman',
          'Dashboard ringkas untuk memantau client, product, invoice, payment, dan AR balance',
          'Master data untuk client, product, item, bank, team member, company, invoice type, chart of accounts, dan users',
          'Workflow operasional untuk work order, installation, license, dan stop license',
          'Modul invoice untuk invoice license dan invoice produk / non-license',
          'Manajemen pembayaran, posting pembayaran invoice, dan posting omzet',
          'Monitoring piutang, AR ledger, kartu piutang, detail piutang client, dan piutang berdasarkan item',
          'Laporan bisnis dan fiskal seperti sales report, register invoice, histori invoice, laporan pajak, VAT, dan fiscal-commercial',
          'Print center untuk batch invoice, invoice PDF, dan receipt PDF',
          'Setup sistem untuk pengaturan perusahaan, seri faktur pajak, kode akun, dan mapping rekening',
          'Recurring invoice untuk generate invoice otomatis per periode',
        ],
        technical: 'Dibangun dengan Next.js, React, TypeScript, Tailwind CSS, dan shadcn/ui, lalu terhubung ke backend melalui REST API dengan autentikasi token Bearer. Arsitektur frontend memakai lapisan API terpusat, custom hooks, state management yang bersih, dan UI modular agar mudah dirawat dan dikembangkan.',
      },
    },
    image: '/projects/jpas-fitnessplus-erp.jpeg',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'REST API', 'ERP'],
    link: '#',
    category: 'erp',
    githubLinks: [
      { label: 'Frontend GitHub', url: 'https://github.com/ArfeyMorenj/projectpkl' },
      { label: 'Backend GitHub', url: 'https://github.com/ArfeyMorenj/fitart_project' },
    ],
  },
  {
    id: 7,
    title: 'Playlist Musik - Next.js Music Library',
    description: 'Frontend web app playlist musik berbasis Next.js untuk menampilkan daftar playlist, detail lagu, halaman detail dengan video embed, dan alur login/logout sederhana.',
    fullDescription: {
      definition: 'Playlist Musik adalah aplikasi frontend berbasis Next.js yang saya kembangkan untuk menampilkan pengalaman mengelola playlist musik dalam bentuk web app yang terstruktur. Aplikasi ini menggabungkan daftar playlist, halaman detail lagu, dashboard user, dan alur login/logout sederhana dalam satu interface yang ringan dan mudah dijelajahi.',
      purpose: 'Proyek ini dibuat untuk memperlihatkan kemampuan membangun aplikasi React/Next.js yang tidak hanya statis, tetapi juga memiliki alur interaksi lengkap: login, dashboard, browsing playlist, mencari lagu, membuka detail lagu, melihat video embed, dan mengelola data lagu secara sederhana.',
      implementation: {
        features: [
          'Halaman login dengan validasi dan logout sederhana',
          'Dashboard user untuk navigasi utama aplikasi',
          'Daftar playlist musik dengan tampilan terstruktur',
          'Halaman detail playlist untuk melihat daftar lagu',
          'Pencarian lagu dan fitur tambah lagu',
          'Halaman detail lagu dengan video embed YouTube',
          'Tampilan komentar dan likes pada detail lagu',
          'Routing dinamis untuk playlist dan detail lagu',
        ],
        technical: 'Dibangun menggunakan Next.js 15.3.2, React 19, TypeScript, dan Tailwind CSS v4 dengan struktur routing dinamis untuk playlist dan lagu. Proyek ini memakai pendekatan frontend-first untuk memproses data musik, menampilkan detail halaman, dan menghubungkan user flow tanpa backend kompleks.',
      },
    },
    image: '/projects/playlist-music-app.png',
    tags: ['Next.js', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'Pages Router', 'Routing Dinamis'],
    link: 'https://github.com/ArfeyMorenj/fe_playlist',
    category: 'web',
    githubLinks: [
      { label: 'Frontend GitHub', url: 'https://github.com/ArfeyMorenj/fe_playlist' },
    ],
  },
  {
    id: 8,
    title: 'Project Manager - TM Project PKL',
    description: 'Peran project management yang membagi tugas ke divisi frontend, backend, dan UI/UX design agar workflow tim lebih terstruktur, jelas, dan mudah dipantau. Termasuk dokumentasi TM PKL 2025 dan TM PKL 2026.',
    fullDescription: {
      definition: 'TM Project PKL adalah aktivitas project management yang saya jalankan untuk mengatur pembagian task lintas divisi pada tim pengembangan. Saya berperan sebagai PM yang menyusun prioritas kerja, membagi scope tugas, dan memastikan setiap divisi memiliki arahan yang jelas.',
      purpose: 'Peran ini menunjukkan kemampuan saya dalam mengelola alur kerja tim, membagi pekerjaan berdasarkan keahlian, menjaga komunikasi antar divisi, dan memastikan hasil pengembangan lebih rapi serta terkoordinasi. Dokumentasinya mencakup TM PKL 2025 dan TM PKL 2026.',
      implementation: {
        features: [
          'Membagi task untuk divisi frontend, backend, dan UI/UX',
          'Menyusun prioritas pekerjaan berdasarkan kebutuhan sprint',
          'Memantau status pengerjaan dan progres tiap task',
          'Menjaga koordinasi antar developer dan designer',
          'Menyelaraskan kebutuhan fitur dengan pembagian kerja',
          'Menyusun workflow yang lebih rapi untuk tim proyek',
        ],
        technical: 'Dokumentasi kerja dilakukan melalui board tugas dan spreadsheet operasional untuk memastikan setiap anggota tim memahami role, scope, dan deadline. Peran ini menonjolkan kemampuan leadership, koordinasi, dan manajemen proyek dalam konteks pengembangan aplikasi.',
      },
    },
    image: '/projects/tm-pkl-2025.png',
    tags: ['Project Management', 'Team Coordination', 'Task Breakdown', 'Frontend', 'Backend', 'UI/UX', 'Documentation'],
    link: '#',
    category: 'management',
    resourceLinks: [
      { label: 'TM PKL 2025', url: 'https://docs.google.com/spreadsheets/d/16B6Bx_Re-Bk8ZYTn3YM-hzLLV5d8bOalH8M-Ia1yjn0/edit?gid=280576956#gid=280576956' },
      { label: 'TM PKL 2026', url: 'https://docs.google.com/spreadsheets/d/1oK7Rm4jGYcKZ9PIH101i2IPg003fm8vgEZf1GdUSvfI/edit?gid=1802264224#gid=1802264224' },
    ],
  },
  {
    id: 9,
    title: 'BE Kost - Backend API Booking Kos',
    description: 'Backend API Laravel 10 untuk manajemen kos dan booking dengan JWT auth, role owner/society, CRUD kos dan fasilitas, review, balasan review, serta generasi PDF nota booking.',
    fullDescription: {
      definition: 'BE Kost adalah backend REST API yang saya bangun untuk manajemen kos dan booking. Fokus utamanya ada pada autentikasi JWT, pengelolaan role owner dan society, serta alur data kos yang bisa dipakai oleh frontend web atau mobile.',
      purpose: 'Project ini dibuat untuk menampilkan kemampuan membangun backend yang rapi, aman, dan siap dipakai sebagai fondasi aplikasi booking kos. Sistem ini mendukung pengelolaan kos, fasilitas, booking, review, dan cetak nota booking dalam format PDF.',
      implementation: {
        features: [
          'Autentikasi pengguna dengan JWT',
          'Role-based access control untuk owner dan society',
          'CRUD kos, fasilitas, dan gambar kos',
          'Booking kos dengan status approval',
          'Review kos dan balasan review oleh owner',
          'Generate PDF nota booking',
          'Public API untuk melihat data kos',
          'Filter kos berdasarkan gender, harga, dan ketersediaan',
        ],
        technical: 'Dibangun dengan Laravel 10, PHP 8.1, tymon/jwt-auth untuk autentikasi, dan barryvdh/laravel-dompdf untuk generate PDF. Struktur backend memisahkan controller, model, middleware, dan route API agar mudah dikembangkan dan dipelihara.',
      },
    },
    image: '/projects/be-kost-backend-api.svg',
    tags: ['Laravel 10', 'PHP 8.1', 'JWT Auth', 'REST API', 'PDF Generator', 'Role Middleware'],
    link: '#',
    category: 'backend',
    githubLinks: [
      { label: 'Backend GitHub', url: 'https://github.com/ArfeyMorenj/be_kost' },
    ],
  },

]

export const experience = [
  {
    id: 1,
    role: 'Pengembangan Web Full Stack',
    company: 'Sekolah Pemrograman (2023 - 2026)',
    period: '2023 - 2026',
    description: 'Pelatihan intensif dalam pengembangan web full-stack mencakup teknologi frontend dan backend dengan pengalaman proyek hands-on.',
    achievements: [
      'Menguasai framework Laravel untuk pengembangan API backend',
      'Mengembangkan multiple projects menggunakan Next.js dan React',
      'Mahir dalam desain dan optimasi database MySQL dan PostgreSQL',
      'Membangun 7+ aplikasi full-stack dengan integrasi frontend-backend lengkap',
      'Mengimplementasikan sistem autentikasi dan RESTful APIs',
      'Mempelajari best practices industri untuk clean code dan arsitektur scalable',
    ],
  },
  {
    id: 2,
    role: 'Pengembangan Frontend',
    company: 'Kurikulum Sekolah',
    period: '2023 - 2024',
    description: 'Pelatihan khusus dalam teknologi frontend modern dan desain web responsif.',
    achievements: [
      'Kemampuan advanced dalam React dan Next.js 13+ dengan App Router',
      'Menguasai TypeScript untuk pengembangan type-safe',
      'Expert dalam TailwindCSS untuk desain UI modern',
      'Membuat aplikasi web yang responsif dan accessible',
    ],
  },
  {
    id: 3,
    role: 'Manajemen Backend & Database',
    company: 'Kurikulum Sekolah',
    period: '2024 - 2026',
    description: 'Pelatihan mendalam dalam pengembangan backend dan sistem manajemen database.',
    achievements: [
      'Pengembangan Laravel dan PHP tingkat expert',
      'Mahir dalam Node.js dan Express untuk pengembangan API',
      'Kemampuan SQL advanced dengan MySQL dan PostgreSQL',
      'Desain database, optimasi, dan implementasi keamanan',
      'Pola desain RESTful dan API',
    ],
  },
]

export const skills = {
  frontend: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'Vue.js'],
  backend: ['Laravel', 'Node.js', 'Express', 'NestJS', 'REST APIs'],
  database: ['MySQL', 'PostgreSQL', 'MongoDB', 'Eloquent ORM'],
  tools: ['Git', 'Docker', 'AWS', 'GitHub Actions', 'Vercel', 'Linux'],
  design: ['Figma', 'Desain UI/UX', 'Design Systems', 'Desain Responsif', 'Aksesibilitas'],
}

export const certificates = [
  {
    id: 1,
    title: 'Memulai Pemrograman Dengan Java',
    issuer: 'Dicoding',
    date: '06 Agustus 2025',
    validUntil: '06 Agustus 2028',
    certificateNo: 'GRX5JKN5KX0M',
    description: 'Sertifikat untuk menyelesaikan kursus Java Programming dasar dengan standar industri. Mencakup Java Dasar, Control Flow, Collection Type, Object-Oriented Programming (OOP), Common Class, Exception Handling, Input Output, Date Time, dan Studi Kasus praktis dengan total 15 jam pembelajaran.',
    link: 'https://dicoding.com/certificates/GRX5JKN5KX0M',
    image: '/certificates/java-certificate.jpg',
  },
  {
    id: 2,
    title: 'Memulai Pemrograman Dengan C',
    issuer: 'Dicoding',
    date: '08 April 2026',
    validUntil: '08 April 2029',
    certificateNo: '07Z670L9JPQR',
    description: 'Sertifikat untuk menyelesaikan kursus Pemrograman C dasar dengan standar industri. Mencakup Pengenalan C, Variabel, Tipe Data, Konstanta, Operasi Dasar, Instruksi Kondisional, Instruksi Pengulangan, Array, Fungsi dan Prosedur dengan total 15 jam pembelajaran.',
    link: 'https://dicoding.com/certificates/07Z670L9JPQR',
    image: '/certificates/c-certificate.jpg',
  },
  {
    id: 3,
    title: 'Belajar Prinsip Pemrograman SOLID',
    issuer: 'Dicoding',
    date: '08 April 2026',
    validUntil: '08 April 2029',
    certificateNo: 'GRX5WOGRKZ0M',
    description: 'Sertifikat untuk menyelesaikan kursus Prinsip Pemrograman SOLID dengan standar industri. Mencakup Object-Oriented Programming (OOP), Relasi pada OOP, Software Design Principle, dan kelima prinsip SOLID (Single Responsibility, Open Closed, Liskov Substitution, Interface Segregation, Dependency Inversion) dengan total 15 jam pembelajaran.',
    link: 'https://dicoding.com/certificates/GRX5WOGRKZ0M',
    image: '/certificates/solid-certificate.jpg',
  },
  {
    id: 4,
    title: 'HTML Essentials',
    issuer: 'Cisco Networking Academy',
    date: '08 April 2026',
    certificateNo: 'd840870b-fe35-425b-8f81-40e2d6eb3bca',
    description: 'Sertifikat dari Cisco Networking Academy untuk menyelesaikan kursus HTML Essentials. Pembelajaran mengenai dasar-dasar HTML dan pemahaman struktur halaman web modern dengan standar industri profesional.',
    link: '#',
    image: '/certificates/html-certificate.jpg',
  },
  {
    id: 5,
    title: 'Backend Development',
    issuer: 'MindLuster',
    date: '09 April 2026',
    certificateNo: 'c744ae4f',
    description: 'Sertifikat dari MindLuster untuk menyelesaikan kursus Backend Development. Pembelajaran mendalam tentang pengembangan backend, arsitektur aplikasi server-side, REST APIs, database design, dan best practices backend development dengan standar industri profesional.',
    link: '#',
    image: '/certificates/backend-certificate.jpg',
  },
  {
    id: 6,
    title: 'Disable JavaScript using Developer Tools',
    issuer: 'MindLuster',
    date: '08 April 2026',
    certificateNo: '2d0f7df7',
    description: 'Sertifikat dari MindLuster untuk menyelesaikan kursus tentang cara disable JavaScript menggunakan browser developer tools. Pembelajaran mendalam tentang debugging, browser DevTools, browser features, dan web development tools profesional.',
    link: '#',
    image: '/certificates/javascript-certificate.jpg',
  },
  {
    id: 7,
    title: 'Fundamental of Assistant Web Developer - DEX - Jawa Timur',
    issuer: 'Digital Talent Academy',
    date: '27 April 2026',
    certificateNo: '21212423840-12/DTA/BLSDM.Komdigi/2026',
    description: 'Sertifikat pelatihan dari Digital Talent Academy / Digital Talent Scholarship 2026 untuk Fundamental of Assistant Web Developer - DEX - Jawa Timur. Pelatihan berlangsung selama 11.5 jam dan mencakup implementasi user interface, perintah eksekusi bahasa pemrograman berbasis teks/grafik/multimedia, serta penyusunan fungsi dan organisasi file yang rapi.',
    link: '#',
    image: '/certificates/fundamental-assistant-web-developer-dta-jawa-timur.png',
  },
  {
    id: 8,
    title: 'Event Online Free Class - DevOps Zero Downtime',
    issuer: 'Dibimbing',
    date: '16 April 2026',
    certificateNo: 'N/A',
    description: 'Sertifikat partisipasi event online free class dari Dibimbing dengan tema DevOps "Zero Downtime: Jurus Jitu Update Sistem Raksasa Tanpa Drama Maintenance". Sertifikat ini menandakan partisipasi aktif dalam sesi berbagi praktik terbaik update sistem tanpa downtime.',
    link: '#',
    image: '/certificates/devops-zero-downtime-dibimbing.png',
  },
  {
    id: 9,
    title: 'MySkill Short Class - Website Development: Back End',
    issuer: 'MySkill',
    date: '08 April 2026',
    certificateNo: '315434/WEB/LM/04/2026',
    description: 'Sertifikat MySkill Short Class untuk Software Engineering dengan topik Website Development: Back End. Sertifikat ini diterbitkan oleh MySkill dan PT LINIMUDA INSPIRASI NEGERI, menandakan penyelesaian kelas pengembangan backend untuk web development.',
    link: '#',
    image: '/certificates/myskill-website-development-back-end.png',
  },
]

export const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com',
    icon: 'GitHub',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: 'Linkedin',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com',
    icon: 'Twitter',
  },
  {
    name: 'Email',
    url: 'mailto:arfey@example.com',
    icon: 'Mail',
  },
]
